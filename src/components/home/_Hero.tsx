import { ArrowRightIcon, CodeIcon } from "@radix-ui/react-icons";

import { EmailSignup } from "@/components/shared";
import { Button } from "@/components/ui";

const _ = () => {
  return (
    <section className="flex snap-start items-center pb-16 pt-32 md:min-h-[75vh] md:py-24">
      <article className="gap-12 text-white">
        <div className="col-span-full row-start-1 flex flex-col md:col-[1_/_span_20]">
          <h1>
            <strong>Designed</strong> for DeFi.
          </h1>
          <h1>
            <strong>Built</strong> by Uniswap Labs.
          </h1>
        </div>
        <h4 className="col-span-full row-start-2 md:col-span-10 lg:col-span-9">
          Unichain is a DeFi-native Ethereum L2, built to be the home for liquidity across chains.
          <br />
          <strong>Powered</strong> by the Superchain.
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
      <EmailSignup />
    </section>
  );
};

export default _;
