import Image from "next/image";
import Link from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const LinkItem: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <Link href={href} className="whitespace-nowrap py-1.5">
      {children}
    </Link>
  );
};

const _ = () => {
  return (
    <section className="snap-end bg-background py-6 md:py-12">
      <footer>
        <div className="col-span-full grid grid-cols-subgrid gap-3">
          <div className="col-span-12 mb-6 flex h-full flex-col items-start md:mb-0">
            <Image
              className="mb-6 h-12 w-auto md:mb-auto"
              src="/assets/logo-secondary.webp"
              alt="Unichain logo"
              width={400}
              height={100}
            />
            <h5>Looking for more?</h5>
            <p>Sign up for updates and events</p>
          </div>
          <div className="col-span-3 flex flex-col items-start justify-start">
            <LinkItem href="/">About</LinkItem>
            <LinkItem href="/">Twitter/X</LinkItem>
            <LinkItem href="/">Discord</LinkItem>
          </div>
          <div className="col-span-3 flex flex-col items-start justify-start">
            <LinkItem href="/">Get started</LinkItem>
            <LinkItem href="/">Developer Docs</LinkItem>
            <LinkItem href="/">Testnet</LinkItem>
            <LinkItem href="/">Block Explorer</LinkItem>
          </div>
          <div className="col-span-3 flex flex-col items-start justify-start">
            <LinkItem href="/">Status</LinkItem>
            <LinkItem href="/">Bug Bounty</LinkItem>
            <LinkItem href="/">Github</LinkItem>
            <LinkItem href="/">Brand Kit</LinkItem>
          </div>
          <div className="col-span-3 flex flex-col items-start justify-start">
            <LinkItem href="/">Privacy Policy</LinkItem>
            <LinkItem href="/">Trademark Policy</LinkItem>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default _;
