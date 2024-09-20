import { Badge, Button } from "@/components/ui";

interface Props {
  header: string;
  description: string;
  tertiary: string;
  cta?: string;
}

const Item: React.FC<Props> = ({ header, description, tertiary, cta }) => {
  return (
    <div className="col-span-full flex flex-col items-center gap-3 text-center md:col-span-6 md:items-start md:text-left">
      <Badge>{tertiary}</Badge>
      <h3>{header}</h3>
      <h5 className="text-secondary-foreground">{description}</h5>
      {cta !== undefined && (
        <Button variant="outline" className="-my-3 -ml-5 md:my-0">
          {cta}
        </Button>
      )}
    </div>
  );
};

const phases = [
  {
    header: "Public Testnet",
    description:
      "Placeholder description with more placeholder information of the phase of development here.",
    tertiary: "Early October",
    cta: "Launch"
  },
  {
    header: "Developer Mainnet",
    description:
      "Placeholder description with more placeholder information of the phase of development here.",
    tertiary: "Late October"
  },
  {
    header: "Public Mainnet",
    description:
      "Access for any developer and user to deploy on and use Unichain. At launch,  will have forced inclusion, one-second block times, and the Uniswap Protocol deployed on Unichain.",
    tertiary: "November"
  },
  {
    header: "New Features",
    description:
      "Provable block building, sub-second blocks and fast finality, and Community Verification Service go live on Unichain.",
    tertiary: "Early 2025"
  }
] as Props[];

const _ = () => {
  return (
    <section className="snap-start bg-background py-12 md:py-24">
      <article className="gap-12">
        <div className="col-span-full">
          <h1>Roadmap</h1>
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
