"use client";

import { useIsDesktop } from "@/hooks";
import { state, useLocalState } from "@/store";
import { Drawer } from "modal";
import { HubspotProvider, useHubspotForm } from "next-hubspot";
import { useState } from "react";

import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  Icon,
  Image,
  Input,
  Textarea
} from "@/components/ui";

const Content = () => {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: "XXXXXXX",
    formId: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    target: "#hubspot-form-wrapper"
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telegram: "",
    project: "",
    teamSize: "",
    discord: "",
    country: "",
    message: "",
    needsFunding: false
  });

  const handleOpenChange = (open: boolean) => {
    state.isSignUpVisible = open;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, needsFunding: checked }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement form submission logic here
    console.log("Form submitted:", formData);
    // Close the form after submission
    handleOpenChange(false);
  };

  return (
    <form
      id="hubspot-form-wrapper"
      onSubmit={handleSubmit}
      className="flex max-h-[90vh] flex-col gap-6 overflow-y-auto p-6"
    >
      <div className="flex w-full items-end justify-end">
        <Button variant="ghost" className="-my-4 -mr-5" onClick={() => handleOpenChange(false)}>
          <Icon icon="X" className="h-6 w-6 text-secondary-foreground" />
        </Button>
      </div>
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
        <h4>Join the Community</h4>
        <p>
          Sign up for Unichain news, updates and events.
          <br />* Required
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-start gap-3 text-center">
        <Input
          className="w-full"
          placeholder="Name*"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <Input
          className="w-full"
          placeholder="Email*"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <Input
          className="w-full"
          placeholder="Telegram"
          name="telegram"
          value={formData.telegram}
          onChange={handleInputChange}
        />
        <Input
          className="w-full"
          placeholder="Project"
          name="project"
          value={formData.project}
          onChange={handleInputChange}
        />
        <Input
          className="w-full"
          placeholder="Team Size"
          name="teamSize"
          value={formData.teamSize}
          onChange={handleInputChange}
        />
        <Input
          className="w-full"
          placeholder="Discord"
          name="discord"
          value={formData.discord}
          onChange={handleInputChange}
        />
        <Input
          className="w-full"
          placeholder="Country"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
        />
        <Textarea
          className="w-full"
          placeholder="What would you like to connect with the Unichain team about?"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
        <div className="flex w-full items-start justify-between gap-6">
          <p className="text-primary">Does your project need funding?</p>
          <Checkbox checked={formData.needsFunding} onCheckedChange={handleCheckboxChange} />
        </div>
      </div>
      <Button type="submit" className="bg-pink-secondary-foreground">
        Submit
      </Button>
    </form>
  );
};

const _ = () => {
  const { isSignUpVisible } = useLocalState();
  const isDesktop = useIsDesktop();

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
