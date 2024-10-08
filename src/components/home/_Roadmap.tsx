import { Badge, Icon, Link } from "@/components/ui";

interface Props {
  header: string;
  description: string;
  tertiary: string;
  cta?: {
    text: string;
    href: string;
  };
}

const Item: React.FC<Props> = ({ header, description, tertiary, cta }) => {
  return (
    <div className="col-span-full flex flex-col items-start gap-3 md:col-span-6">
      <Badge>{tertiary}</Badge>
      <h3>{header}</h3>
      <h5 className="max-w-xs text-secondary-foreground md:max-w-none">{description}</h5>
      {cta && (
        <Link href={cta.href}>
          <h5>{cta.text}</h5>
          <Icon icon="ArrowUpRight" className="h-5 w-5 text-[#f94bdf]" />
        </Link>
      )}
    </div>
  );
};

const phases = [
  {
    header: "Public Testnet",
    description: "Access for all developers to begin testing.",
    tertiary: "Early October",
    cta: { text: "Read the announcement", href: "https://blog.uniswap.org/introducing-unichain" }
  },
  // {
  //   header: "Developer Mainnet",
  //   description: "Access for all developers to deploy on Unichain.",
  //   tertiary: "Late October"
  // },
  {
    header: "Public Mainnet",
    description: "Access for all developers and users to deploy on and use Unichain.",
    tertiary: "November"
  },
  {
    header: "New Features",
    description: "Provable Block Building and Unichain Verification Service.",
    tertiary: "Early 2025"
  }
] as Props[];

const _ = () => {
  return (
    <section className="py-12 md:py-24">
      <article className="gap-6 md:gap-12">
        <div className="col-span-full">
          <h2>Unichain roadmap</h2>
        </div>
        <div className="col-span-full grid grid-cols-subgrid gap-12">
          {phases.map(phase => (
            <Item
              key={phase.header}
              header={phase.header}
              description={phase.description}
              tertiary={phase.tertiary}
              cta={phase.cta}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default _;
