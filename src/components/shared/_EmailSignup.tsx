"use client";

import { Close } from "@/assets/icons";
import { cn, delay } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Button, Input } from "@/components/ui";

interface Props {
  className?: string;
}

const _: React.FC<Props> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Handle form submission logic here
    console.log("Submitted email:", email);
    delay(2000).then(() => setIsVisible(false));
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    delay(1000).then(() => setIsVisible(true));
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: "50%", y: "50%", scale: 0.5, opacity: 0 }}
          animate={{ x: "0%", y: "0%", scale: 1, opacity: 1 }}
          exit={{ x: "50%", y: "50%", scale: 0.5, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            mass: 1
          }}
          className={cn(
            "absolute bottom-8 right-8 hidden max-w-lg flex-col gap-1 rounded-3xl bg-background p-5 pt-4 shadow-xl md:flex",
            className
          )}
        >
          <div className="flex items-center justify-between gap-6">
            <h5 className="h-6 text-base">Sign up for Unichain updates and events.</h5>
            <Button variant="ghost" className="-mr-4 -mt-2" onClick={handleDismiss}>
              <Close className="h-6 w-6 text-primary" />
            </Button>
          </div>
          <form onSubmit={handleSubmit} className="flex items-center gap-1">
            <Input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <Button
              type="submit"
              className="bg-pink-primary-foreground text-base"
              loading={isLoading}
            >
              Subscribe
            </Button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default _;
