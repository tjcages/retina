"use client";

import { cn } from "@/utils";
import { AnimatePresence, type Variants, motion } from "framer-motion";
import React, {
  CSSProperties,
  ComponentType,
  FC,
  ReactNode,
  RefAttributes,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";

// Types
export interface WrapperBaseProps {
  children: ReactNode;
  index: number;
}

export interface SplitTextProps extends RefAttributes<HTMLDivElement> {
  id?: string;
  children: string;
  className?: string;
  style?: CSSProperties;
  variants?: Variants;
  LineWrapper?: ComponentType<WrapperBaseProps>;
  WordWrapper?: ComponentType<WrapperBaseProps>;
  LetterWrapper?: ComponentType<WrapperBaseProps>;
  split?: "line" | "word" | "char";
}

// Helper Components
const LineWrapper: FC<WrapperBaseProps> = ({ children, index }) => {
  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.05 * index
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.1, delay: 0.05 * index }
    }
  };
  return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
};

const WordWrapper: FC<WrapperBaseProps> = ({ children, index }) => {
  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.1 * index
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.1, delay: 0.05 * index }
    }
  };
  return (
    <motion.span
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ whiteSpace: "pre" }}
    >
      {children}
    </motion.span>
  );
};

const LetterWrapper: FC<WrapperBaseProps> = ({ children, index }) => {
  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.025 * index
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0 }
    }
  };
  return (
    <motion.span variants={variants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.span>
  );
};

const DefaultLineWrapper = memo(LineWrapper);
const DefaultWordWrapper = memo(WordWrapper);
const DefaultLetterWrapper = memo(LetterWrapper);

// Main Component
const SplitTextInner = forwardRef<HTMLDivElement, SplitTextProps>(function SplitTextInner(
  {
    children,
    className,
    style,
    LineWrapper = DefaultLineWrapper,
    WordWrapper = DefaultWordWrapper,
    LetterWrapper = DefaultLetterWrapper,
    split = "char"
  },
  ref
) {
  const text = React.Children.toArray(children).join("");
  const elRef = useRef<HTMLDivElement | null>(null);
  const linesRef = useRef<string[]>([]);
  const [, forceUpdate] = useState({});

  const renderContent = useCallback(() => {
    if (split === "line") {
      return linesRef.current.map((line, i) => (
        <LineWrapper key={i} index={i}>
          {line}
        </LineWrapper>
      ));
    }

    if (split === "word") {
      return linesRef.current.map((line, i) =>
        line.split(" ").map((word, j) => (
          <WordWrapper key={`${i}-${j}`} index={j}>
            {word}
            {j < line.split(" ").length - 1 && " "}
          </WordWrapper>
        ))
      );
    }

    let currentIndex = 0;
    return linesRef.current.map((line, i) => (
      <LineWrapper key={i} index={0}>
        {line.split(" ").map((word, j) => (
          <WordWrapper key={j} index={0}>
            {word.split("").map((char, k) => {
              currentIndex++;
              return (
                <LetterWrapper key={k} index={currentIndex}>
                  {char}
                </LetterWrapper>
              );
            })}
            {j < line.split(" ").length - 1 && " "}
          </WordWrapper>
        ))}
      </LineWrapper>
    ));
  }, [LineWrapper, WordWrapper, LetterWrapper, split]);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new ResizeObserver(() => {
      let lastY: number | null = null;
      const newLines: string[] = [];
      let words: string[] = [];

      Array.from(el.children).forEach(child => {
        const y = child.getBoundingClientRect().top;
        if (lastY !== null && y !== lastY) {
          newLines.push(words.join(" "));
          words = [];
        }
        lastY = y;
        words.push((child.textContent || "").trim());
      });

      newLines.push(words.join(" "));
      linesRef.current = [children];
      forceUpdate({});
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [children]);

  return (
    <div
      className={className}
      ref={node => {
        elRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      style={style}
    >
      {linesRef.current.length
        ? renderContent()
        : text.split(" ").map((word, i) => <span key={i}>{word} </span>)}
    </div>
  );
});

export const SplitText = forwardRef<HTMLDivElement, SplitTextProps>(function SplitText(
  { id, children, variants, split = "char", ...props },
  ref
) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit">
      <SplitTextInner id={id} {...props} ref={ref} variants={variants} split={split}>
        {children}
      </SplitTextInner>
    </motion.div>
  );
});

interface TextProps {
  id: number;
  text: string;
}

const TextItem: FC<TextProps & { split: "line" | "word" | "char" }> = ({ id, text, split }) => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <motion.div
      id={`text-item-${id}`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <SplitText className={cn("whitespace-nowrap")} split={split}>
        {text}
      </SplitText>
    </motion.div>
  );
};

interface NewTextProps {
  className?: string;
  children: string;
  split?: "line" | "word" | "char";
}

export const Text: FC<NewTextProps> = ({ className, children, split = "char" }) => {
  const prevText = useRef("");
  const [currentText, setCurrentText] = useState<TextProps | null>(null);

  const updateText = useCallback(() => {
    setCurrentText({
      id: Date.now(),
      text: children
    });
  }, [children]);

  useEffect(() => {
    if (prevText.current !== children) {
      updateText();
      prevText.current = children;
    }
  }, [updateText, children]);

  return (
    <div className={cn("relative flex cursor-pointer", className)} onClick={updateText}>
      <AnimatePresence mode="wait">
        {currentText && (
          <TextItem
            key={currentText.id}
            id={currentText.id}
            text={currentText.text}
            split={split}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
