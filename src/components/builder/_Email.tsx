"use client";

import { useState } from "react";

import { Button, Input, Nbsp } from "@/components/ui";

const _ = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Handle form submission logic here
    console.log("Submitted email:", email);
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
          <form onSubmit={handleSubmit} className="flex items-center gap-1">
            <Input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
              className="w-full min-w-[200px] max-w-[300px] md:w-[20vw]"
            />
            <Button
              type="submit"
              className="bg-pink-primary-foreground text-base"
              loading={isLoading}
            >
              Subscribe
            </Button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default _;
