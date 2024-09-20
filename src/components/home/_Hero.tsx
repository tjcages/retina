import { ArrowRightIcon, CodeIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui";

const _ = () => {
  return (
    <section className="flex snap-start items-center pb-16 pt-32 md:min-h-[75vh] md:py-24">
      <article className="gap-12 text-white">
        <h1 className="col-span-full row-start-1 md:col-[1_/_span_14]">
          Designed for <strong>DeFi</strong>.
        </h1>
        <h4 className="col-span-full row-start-2 md:col-span-10">
          Unichain is a DeFi-native Ethereum L2, built to be the home for liquidity across chains.
          Powered by the Superchain.
        </h4>
        <div className="col-span-7 row-start-3 flex items-center gap-3">
          <Button className="w-full">
            <ArrowRightIcon className="mr-2 h-5 w-5" />
            Get Started
          </Button>
          <Button className="w-full">
            <CodeIcon className="mr-2 h-5 w-5" />
            Read Docs
          </Button>
        </div>
      </article>
    </section>
  );
};

export default _;
