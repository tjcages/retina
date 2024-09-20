"use client";

import { useClickOutside } from "@/hooks";
import { cn } from "@/utils";
import { ExitFullScreenIcon } from "@radix-ui/react-icons";
import {
  AnimatePresence,
  MotionConfig,
  Transition,
  Variant,
  easeInOut,
  easeOut,
  motion
} from "framer-motion";
import React, { useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface DialogDynamicContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  uniqueId: string;
  triggerRef: React.RefObject<HTMLDivElement>;
}

const DialogDynamicContext = React.createContext<DialogDynamicContextType | null>(null);

function useDialog() {
  const context = useContext(DialogDynamicContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
}

interface DialogDynamicProps {
  open?: boolean;
  isDragging?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  details(open: boolean): React.ReactNode;
}

const DialogDynamic: React.FC<DialogDynamicProps> = ({
  open = false,
  isDragging = false,
  onOpenChange,
  children,
  details
}) => {
  return (
    <DialogDynamicBuilder
      open={open}
      onOpenChange={onOpenChange}
      transition={{
        type: "spring",
        bounce: 0.2,
        duration: isDragging ? 0.05 : 0.5
      }}
    >
      <DialogDynamicTrigger className="h-full overflow-hidden rounded-sm border">
        {children}
      </DialogDynamicTrigger>
      <DialogDynamicContainer>
        <DialogDynamicContent
          className="pointer-events-auto relative flex w-[80%] max-w-[900px] flex-col overflow-hidden rounded-3xl border bg-white"
          details={details}
        />
      </DialogDynamicContainer>
    </DialogDynamicBuilder>
  );
};

type DialogDynamicProviderProps = {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  transition?: Transition;
};

const DialogDynamicProvider: React.FC<DialogDynamicProviderProps> = ({
  open = false,
  onOpenChange,
  children,
  transition
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const uniqueId = useId();
  const triggerRef = useRef<HTMLDivElement>(null);

  const contextValue = useMemo(
    () => ({ isOpen, setIsOpen, uniqueId, triggerRef }),
    [isOpen, uniqueId]
  );

  useEffect(() => {
    if (onOpenChange) onOpenChange(isOpen);
  }, [isOpen, onOpenChange]);

  return (
    <DialogDynamicContext.Provider value={contextValue}>
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </DialogDynamicContext.Provider>
  );
};

type DialogDynamicBuilderProps = {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  transition?: Transition;
};

const DialogDynamicBuilder: React.FC<DialogDynamicBuilderProps> = ({
  open,
  onOpenChange,
  children,
  transition
}) => {
  return (
    <DialogDynamicProvider open={open} onOpenChange={onOpenChange}>
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </DialogDynamicProvider>
  );
};

type DialogDynamicTriggerProps = {
  href?: string;
  origin?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  triggerRef?: React.RefObject<HTMLDivElement>;
};

const DialogDynamicTrigger: React.FC<DialogDynamicTriggerProps> = ({
  children,
  className,
  triggerRef
}) => {
  const { setIsOpen, isOpen, uniqueId } = useDialog();

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setIsOpen(!isOpen);
      }
    },
    [isOpen, setIsOpen]
  );

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...child.props, isExpanded: false });
    }
    return child;
  });

  return (
    <motion.div
      ref={triggerRef}
      layoutId={`dialog-${uniqueId}`}
      className={cn("relative z-50 cursor-pointer", className)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      aria-controls={`dialog-content-${uniqueId}`}
    >
      {childrenWithProps}
    </motion.div>
  );
};

type DialogDynamicContent = {
  children?: React.ReactNode | React.ReactNode[];
  details(open: boolean): React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const DialogDynamicContent: React.FC<DialogDynamicContent> = ({
  children,
  details,
  className,
  style
}) => {
  const { setIsOpen, isOpen, uniqueId, triggerRef } = useDialog();
  const containerRef = useRef<HTMLDivElement>(null);
  const [firstFocusableElement, setFirstFocusableElement] = useState<HTMLElement | null>(null);
  const [lastFocusableElement, setLastFocusableElement] = useState<HTMLElement | null>(null);

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...child.props, isExpanded: true });
    }
    return child;
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
      if (event.key === "Tab") {
        if (!firstFocusableElement || !lastFocusableElement) return;

        if (event.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            event.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            event.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsOpen, firstFocusableElement, lastFocusableElement]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      const focusableElements = containerRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements && focusableElements.length > 0) {
        setFirstFocusableElement(focusableElements[0] as HTMLElement);
        setLastFocusableElement(focusableElements[focusableElements.length - 1] as HTMLElement);
        (focusableElements[0] as HTMLElement).focus();
      }
    } else {
      document.body.classList.remove("overflow-hidden");
      triggerRef.current?.focus();
    }
  }, [isOpen, triggerRef]);

  useClickOutside(containerRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <motion.div
      ref={containerRef}
      layoutId={`dialog-${uniqueId}`}
      className={cn("overflow-hidden", !isOpen && "hidden", className)}
      style={style}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`dialog-title-${uniqueId}`}
      aria-describedby={`dialog-description-${uniqueId}`}
    >
      {childrenWithProps}
      {details(isOpen)}
    </motion.div>
  );
};

type DialogDynamicContainerProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const DialogDynamicContainer: React.FC<DialogDynamicContainerProps> = ({ children }) => {
  const { isOpen, uniqueId } = useDialog();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence initial={false} mode="sync">
      {isOpen && (
        <>
          <motion.div
            key={`backdrop-${uniqueId}`}
            className="dotted fixed inset-0 h-full w-full bg-[rgba(255,255,255,0.975)] backdrop-blur-sm dark:bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.25, ease: easeInOut } }}
            exit={{ opacity: 0, transition: { duration: 0.4, ease: easeOut } }}
          />
          <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-scroll py-12">
            {children}
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

type DialogDynamicTitleProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const DialogDynamicTitle: React.FC<DialogDynamicTitleProps> = ({ children, className, style }) => {
  const { uniqueId } = useDialog();

  return (
    <motion.div
      layoutId={`dialog-title-container-${uniqueId}`}
      className={className}
      style={style}
      layout
    >
      {children}
    </motion.div>
  );
};

type DialogDynamicSubtitleProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const DialogDynamicSubtitle: React.FC<DialogDynamicSubtitleProps> = ({
  children,
  className,
  style
}) => {
  const { uniqueId } = useDialog();

  return (
    <motion.div
      layoutId={`dialog-subtitle-container-${uniqueId}`}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

type DialogDynamicDescriptionProps = {
  children: React.ReactNode;
  className?: string;
  disableLayoutAnimation?: boolean;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
};

const DialogDynamicDescription: React.FC<DialogDynamicDescriptionProps> = ({
  children,
  className,
  variants,
  disableLayoutAnimation
}) => {
  const { uniqueId } = useDialog();

  return (
    <motion.div
      key={`dialog-description-${uniqueId}`}
      layoutId={disableLayoutAnimation ? undefined : `dialog-description-content-${uniqueId}`}
      variants={variants}
      className={className}
      initial="initial"
      animate="animate"
      exit="exit"
      id={`dialog-description-${uniqueId}`}
    >
      {children}
    </motion.div>
  );
};

type DialogDynamicImageProps = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
};

const DialogDynamicImage: React.FC<DialogDynamicImageProps> = ({ src, alt, className, style }) => {
  const { uniqueId } = useDialog();

  return (
    <motion.img
      src={src}
      alt={alt}
      className={cn(className)}
      layoutId={`dialog-img-${uniqueId}`}
      style={style}
    />
  );
};

type DialogDynamicCloseProps = {
  children?: React.ReactNode;
  className?: string;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
};

const DialogDynamicClose: React.FC<DialogDynamicCloseProps> = ({
  children,
  className,
  variants
}) => {
  const { setIsOpen, uniqueId } = useDialog();

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <motion.button
      onClick={handleClose}
      type="button"
      aria-label="Close dialog"
      key={`dialog-close-${uniqueId}`}
      className={cn("absolute right-6 top-6", className)}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children || <ExitFullScreenIcon className="h-5 w-5" />}
    </motion.button>
  );
};

export {
  DialogDynamic,
  DialogDynamicBuilder,
  DialogDynamicClose,
  DialogDynamicContainer,
  DialogDynamicContent,
  DialogDynamicDescription,
  DialogDynamicImage,
  DialogDynamicSubtitle,
  DialogDynamicTitle,
  DialogDynamicTrigger
};
