"use client";

import { useIsDesktop } from "@/hooks";
import { state, useLocalState } from "@/store";
import { Drawer } from "modal";
import { HubspotProvider, useHubspotForm } from "next-hubspot";
import Link from "next/link";
import { useState } from "react";

import { Button, Dialog, DialogContent, Icon, Image } from "@/components/ui";

import "./signup.scss";

const Content = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const onFormSubmit = () => {
    setFormSubmitted(true);
  };

  const { loaded, error, formCreated } = useHubspotForm({
    portalId: "47651697",
    formId: "b5be498a-4c56-4913-8c01-2c7c774774f7",
    target: "#hubspot-form-wrapper",
    onFormSubmit: onFormSubmit
  });

  const handleOpenChange = (open: boolean) => {
    state.isSignUpVisible = open;
  };

  return (
    <div className="flex max-h-[90vh] flex-col gap-6 overflow-y-auto p-6">
      <div className="flex w-full items-end justify-end">
        <Button variant="ghost" className="-my-4 -mr-5" onClick={() => handleOpenChange(false)}>
          <Icon icon="X" className="h-6 w-6 text-secondary-foreground" />
        </Button>
      </div>
      {!formSubmitted ? (
        <>
          <div className="flex w-full flex-col items-center justify-start gap-3 text-center">
            <div className="h-12 w-12 overflow-hidden rounded-xl bg-secondary">
              <Image
                className="h-full w-full object-contain"
                src="/assets/graphics/icon-box.png"
                alt="Unichain Logo"
                width={200}
                height={200}
              />
            </div>

            <h4>Stay updated</h4>
            <p>Sign up for Unichain news, updates and events.</p>
          </div>

          <div id="hubspot-form-wrapper" />
        </>
      ) : (
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
            <Link
              href="/"
              target="_blank"
              className="text-pink-primary transition hover:text-primary"
            >
              Builder Open Call Form
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

const _ = () => {
  const { isSignUpVisible } = useLocalState();
  const isDesktop = useIsDesktop(1024);

  const handleOpenChange = (open: boolean) => {
    state.isSignUpVisible = open;
  };

  return (
    <HubspotProvider>
      {isDesktop ? (
        <Dialog open={isSignUpVisible} onOpenChange={handleOpenChange}>
          <DialogContent className="rounded-[20px] bg-background">
            <Content />
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer.Root shouldScaleBackground open={isSignUpVisible} onOpenChange={handleOpenChange}>
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
