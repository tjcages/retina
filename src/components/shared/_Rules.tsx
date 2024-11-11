"use client";

import { useIsDesktop } from "@/hooks";
import { state, useLocalState } from "@/store";
import { Drawer } from "modal";

import { Badge, Button, Dialog, DialogContent, Icon, Link } from "@/components/ui";

const Content = () => {
  const handleOpenChange = (open: boolean) => {
    state.isRulesVisible = open;
  };

  return (
    <div className="flex w-full flex-col gap-4 overflow-y-auto overflow-x-hidden p-4 lg:max-h-[80vh]">
      <div className="grid w-full grid-cols-[0.1fr_1fr_0.1fr] items-center justify-between">
        <h5 className="col-start-2 text-center">Challenge details</h5>
        <Button
          variant="ghost"
          className="col-start-3 -my-4 -mr-5"
          onClick={() => handleOpenChange(false)}
        >
          <Icon icon="X" className="h-6 w-6 text-secondary-foreground" />
        </Button>
      </div>
      <Link
        href="https://blog.uniswap.org/v4-deployment-challenge-rules.pdf"
        className="mx-auto -mt-5 text-pretty text-center"
      >
        Full address mining challenge rules can be found here
      </Link>
      <div className="flex w-full flex-col items-start justify-start gap-3 rounded-2xl border bg-background p-4 shadow-light">
        <p className="font-mono font-semibold uppercase text-pink-primary">Challenge goal</p>
        <h5>Find a salt value that will deploy the Uniswap v4 protocol to an optimal address.</h5>
        <p className="text-secondary-foreground">
          Uniswap v4 will be deployed using CREATE2, which deploys the protocol at a deterministic
          address based on the initcode, deployer address, and an arbitrary salt. Participants can
          iterate through salt values to calculate and score the resultant address using tools such
          as create2crunch or similar.
        </p>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-3 rounded-2xl border bg-background p-4 shadow-light">
        <p className="font-mono font-semibold uppercase text-pink-primary">Scoring system</p>
        <div className="flex w-full flex-col gap-1.5">
          <div className="flex items-start gap-1">
            <Icon icon="Plus" className="h-4 w-4" />
            <Badge variant="outline">10 points</Badge>
            <p> for every leading 0 nibble</p>
          </div>
          <div className="flex items-start gap-1">
            <Icon icon="Plus" className="h-4 w-4" />
            <Badge variant="outline">40 points</Badge>
            <p> if the first 4 is followed by 3 more 4s</p>
          </div>
          <div className="flex items-start gap-1">
            <Icon icon="Plus" className="h-4 w-4" />
            <Badge variant="outline">20 points</Badge>
            <p> if the first nibble after the four 4s is NOT a 4</p>
          </div>
          <div className="flex items-start gap-1">
            <Icon icon="Plus" className="h-4 w-4" />
            <Badge variant="outline">20 points</Badge>
            <p> if the last 4 nibbles are 4s</p>
          </div>
          <div className="flex items-start gap-1">
            <Icon icon="Plus" className="h-4 w-4" />
            <Badge variant="outline">1 point</Badge>
            <p> for every 4</p>
          </div>
        </div>
        <p className="text-secondary-foreground">
          The scoring system can also be found{" "}
          <Link href="https://github.com/Uniswap/v4-periphery/blob/3f295d8435e4f776ea2daeb96ce1bc6d63f33fc7/src/libraries/VanityAddressLib.sol#L16-L22">
            here
          </Link>
          . The one (1) address that receives the highest score will be declared the final
          deployment address. In the event of a tie, the address that received the highest score
          first will be declared the winning address.
        </p>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-3 rounded-2xl border bg-background p-4 shadow-light">
        <p className="font-mono font-semibold uppercase text-pink-primary">How to enter</p>
        <p className="text-secondary-foreground">
          Find all the details on how to participate{" "}
          <Link href="http://blog.uniswap.org/uniswap-v4-address-mining-challenge">here</Link>.
        </p>
      </div>
      {/* <div className="flex w-full flex-col items-start justify-start gap-3 rounded-2xl border bg-background p-4 shadow-light">
        <p className="font-mono font-semibold uppercase text-pink-primary">How to enter</p>
        <ol className="ml-4 list-decimal text-secondary-foreground">
          <li>
            Create an address using tools/languages such as{" "}
            <Badge variant="outline">0age/create2crunch</Badge> which is a Rust program for finding
            salts that create gas-efficient Ethereum addresses via CREATE2.
          </li>
          <li>
            Submit your salt values on Ethereum mainnet to the
            <Badge variant="outline">challenge contract</Badge>. This contract will check the salt,
            verify the score, and save the Address if it is the new highest scored value.
          </li>
          <li>
            You can submit multiple Addresses, but each Address must be submitted individually, one
            at a time, and be unique; submitting the same Address or an Address with a same or worse
            score than previous submissions will result in an on-chain failure.
          </li>
          <li>Deadline for submission is 11:59 p.m. ET on December&nbsp;1,&nbsp;2024.</li>
        </ol>
      </div> */}
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
