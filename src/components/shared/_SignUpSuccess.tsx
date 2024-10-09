"use client";

import { useIsDesktop } from "@/hooks";
import { state, useLocalState } from "@/store";
import { Drawer } from "modal";
import { HubspotProvider } from "next-hubspot";
import { useState } from "react";

import { Button, Dialog, DialogContent, Icon, Image, Link } from "@/components/ui";

import "@/styles/signup.scss";

const Content = () => {
  const handleOpenChange = (open: boolean) => {
    state.isSignUpSuccessVisible = open;
  };

  return (
    <div className="flex max-h-[90vh] flex-col gap-6 overflow-y-auto p-6">
      <div className="flex w-full items-end justify-end">
        <Button variant="ghost" className="-my-4 -mr-5" onClick={() => handleOpenChange(false)}>
          <Icon icon="X" className="h-6 w-6 text-secondary-foreground" />
        </Button>
      </div>
      <div className="flex w-full flex-col items-center justify-start gap-3 pb-2 text-center">
        <div className="h-12 w-12 overflow-hidden rounded-xl bg-secondary">
          <Image
            className="h-full w-full object-contain"
            src="/assets/graphics/icon-check.png"
            alt="Check icon"
            width={200}
            height={200}
          />
        </div>

        <h4>Need support building your project?</h4>
        <p className="text-lg">
          Fill out the{" "}
          <Link href="https://share.hsforms.com/1Bc0BcWqPTW-no_TIM5hbFAsdca9">
            Builder Open Call Form
          </Link>
        </p>
      </div>
    </div>
  );
};

const snapPoints = ["355px", 1];

const _ = () => {
  const { isSignUpSuccessVisible } = useLocalState();
  const [snap, setSnap] = useState<number | string | null>(snapPoints[0]);
  const isDesktop = useIsDesktop(1024);

  const handleOpenChange = (open: boolean) => {
    state.isSignUpSuccessVisible = open;
  };

  return (
    <HubspotProvider>
      {isDesktop ? (
        <Dialog open={isSignUpSuccessVisible} onOpenChange={handleOpenChange}>
          <DialogContent className="rounded-[20px] bg-background">
            <Content />
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer.Root
          shouldScaleBackground
          open={isSignUpSuccessVisible}
          onOpenChange={handleOpenChange}
          snapPoints={snapPoints}
          activeSnapPoint={snap}
          setActiveSnapPoint={setSnap}
          fadeFromIndex={0}
        >
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-[#060E0C]/60" />
            <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 flex h-full max-h-[96%] flex-col rounded-t-[20px] bg-background outline-none md:mt-0">
              <Content />
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      )}
    </HubspotProvider>
  );
};

export default _;
