"use client";

import { useIsDesktop } from "@/hooks";
import { state, useLocalState } from "@/store";
import { Drawer } from "modal";

import { Badge, Button, Dialog, DialogContent, Icon } from "@/components/ui";

const Content = () => {
  const handleOpenChange = (open: boolean) => {
    state.isRulesVisible = open;
  };

  return (
    <div className="flex w-full flex-col gap-4 overflow-y-auto overflow-x-hidden p-4 lg:max-h-[80vh]">
      <div className="grid w-full grid-cols-[0.1fr_1fr_0.1fr] items-center justify-between">
        <h5 className="col-start-2 text-center">Challenge rules</h5>
        <Button
          variant="ghost"
          className="col-start-3 -my-4 -mr-5"
          onClick={() => handleOpenChange(false)}
        >
          <Icon icon="X" className="h-6 w-6 text-secondary-foreground" />
        </Button>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-3 rounded-2xl border bg-background p-4 shadow-light">
        <p className="font-mono font-semibold uppercase text-pink-primary">Challenge goal</p>
        <h5>Find a salt value that will deploy the Uniswap V4 protocol to an optimal address.</h5>
        <p className="text-secondary-foreground">
          Uniswap V4 will be deployed using CREATE2, which deploys the protocol at a deterministic
          address based on the initcode, deployer address, and an arbitrary salt. Participants can
          iterate through salt values to calculate and score the resultant address using tools such
          as create2crunch or similar.
        </p>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-3 rounded-2xl border bg-background p-4 shadow-light">
        <p className="font-mono font-semibold uppercase text-pink-primary">Scoring system</p>
        <div className="flex w-full flex-col gap-1.5">
          <div className="flex items-center gap-1">
            <Icon icon="Plus" className="h-4 w-4" />
            <Badge variant="outline">10 points</Badge>
            <p> for every leading 0 nibble</p>
          </div>
          <div className="flex items-center gap-1">
            <Icon icon="Plus" className="h-4 w-4" />
            <Badge variant="outline">40 points</Badge>
            <p> if the first 4 is followed by 3 more 4s</p>
          </div>
          <div className="flex items-center gap-1">
            <Icon icon="Plus" className="h-4 w-4" />
            <Badge variant="outline">20 points</Badge>
            <p> if the first nibble after the four 4s is NOT a 4</p>
          </div>
          <div className="flex items-center gap-1">
            <Icon icon="Plus" className="h-4 w-4" />
            <Badge variant="outline">20 points</Badge>
            <p> if the last 4 nibbles are 4s</p>
          </div>
          <div className="flex items-center gap-1">
            <Icon icon="Plus" className="h-4 w-4" />
            <Badge variant="outline">1 point</Badge>
            <p> for every 4</p>
          </div>
        </div>
        <p className="text-secondary-foreground">
          The scoring system can also be found here. In the event of a tie, the Address that
          received the highest score first will be declared the winning Address.
        </p>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-3 rounded-2xl border bg-background p-4 shadow-light">
        <p className="font-mono font-semibold uppercase text-pink-primary">How to enter</p>
        <h5>Find a salt value that will deploy the Uniswap V4 protocol to an optimal address.</h5>
        <p className="text-secondary-foreground">Create an address using:</p>
        <ol className="ml-4 list-decimal text-secondary-foreground">
          <li>
            Create an address using <Badge variant="outline">0age/create2crunch</Badge> which is a
            Rust program for finding salts that create gas-efficient Ethereum addresses via CREATE
            and or Stars Language.
          </li>
          <li>
            Submit your salt values on Ethereum mainnet to the
            <Badge variant="outline">competition contract</Badge>. This contract will check the
            salt, verify the score, and save the Address if it is the new highest scored value.
          </li>
          <li>
            You can submit multiple Addresses, but each Address must be submitted individually, one
            at a time, and be unique; submitting the same Address will result in an on-chain
            failure.
          </li>
          <li>Deadline for submission is 11:59 p.m. ET on December 1, 2024</li>
        </ol>
      </div>
    </div>
  );
};

const _ = () => {
  const { isRulesVisible } = useLocalState();
  const isDesktop = useIsDesktop(1024);

  const handleOpenChange = (open: boolean) => {
    state.isRulesVisible = open;
  };

  return (
    <>
      {isDesktop ? (
        <Dialog open={isRulesVisible} onOpenChange={handleOpenChange}>
          <DialogContent className="rounded-[20px] bg-pink-light">
            <Content />
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer.Root shouldScaleBackground open={isRulesVisible} onOpenChange={handleOpenChange}>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-[#060E0C]/60" />
            <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 flex h-full max-h-[96%] flex-col rounded-t-[20px] bg-pink-light pb-0 outline-none md:mt-0">
              <Content />
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      )}
    </>
  );
};

export default _;
