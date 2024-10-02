"use client";

import { state, useLocalState } from "@/store";
import { Drawer } from "modal";

import { Button, Icon, Input } from "@/components/ui";

const _ = () => {
  const { isSignUpVisible } = useLocalState();

  const handleOpenChange = (open: boolean) => {
    state.isSignUpVisible = open;
  };

  return (
    <Drawer.Root shouldScaleBackground open={isSignUpVisible} onOpenChange={handleOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-[#060E0C]/60" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 flex h-full max-h-[96%] flex-col rounded-t-[10px] bg-background outline-none">
          <div className="flex w-full items-end justify-end">
            <Button variant="ghost">
              <Icon icon="X" className="h-6 w-6 text-secondary-foreground" />
            </Button>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-3 p-6 text-center">
            <div className="h-20 w-20 rounded-xl bg-secondary" />
            <h4>Join the Community</h4>
            <p>
              Sign up for Unichain news, updates and events.
              <br />* Required
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-3 p-6 text-center">
            <Input className="w-full" placeholder="Name*" />
            <Input className="w-full" placeholder="Email*" />
            {/* <Input className="w-full" placeholder="Telegram" />
            <Input className="w-full" placeholder="Project" />
            <Input className="w-full" placeholder="Team Size" />
            <Input className="w-full" placeholder="Discord" />
            <Input className="w-full" placeholder="Country" /> */}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default _;
