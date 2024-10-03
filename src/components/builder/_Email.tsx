"use client";

import { state } from "@/store";

import { Button, Nbsp } from "@/components/ui";

const _ = () => {
  const handleSignUp = () => {
    state.isSignUpVisible = true;
  };

  return (
    <section className="snap-start bg-background py-12 md:py-24">
      <article className="justify-center gap-12">
        <div className="col-span-full flex flex-col items-center justify-center gap-3 text-center">
          <h2 className="text-pink">
            Sign up for{" "}
            <strong>
              developer
              <Nbsp />
              updates
            </strong>
            .
          </h2>
        </div>
        <div className="col-span-full flex items-center justify-center">
          <Button
            type="submit"
            className="w-full max-w-xs bg-pink-secondary-foreground"
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
        </div>
      </article>
    </section>
  );
};

export default _;
