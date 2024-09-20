import Link from "next/link";

import { Image } from "@/components/ui";

const _ = () => {
  return (
    <section className="sticky top-0 py-6">
      <header className="text-white">
        <div className="col-span-full grid grid-cols-subgrid items-center gap-3">
          <Image
            className="col-span-4 h-12 w-auto md:col-span-8"
            src="/assets/logo.webp"
            alt="Unichain logo"
            width={400}
            height={100}
          />
          <div className="-col-start-8 hidden md:block">
            <Link href="/">Developers</Link>
          </div>
          <div className="-col-start-6 hidden md:block">
            <Link href="/">Menu</Link>
          </div>
          <div className="-col-start-4 hidden md:block">
            <Link href="/">Twitter/X</Link>
          </div>
          <div className="-col-start-1 hidden md:block">
            <Link href="/">Discord</Link>
          </div>
        </div>
      </header>
    </section>
  );
};

export default _;
