import { Link } from "@/components/ui";

interface Props {
  header: string;
  description: string;
  cta?: {
    text: string;
    href: string;
  };
}

const Item: React.FC<Props> = ({ header, description, cta }) => {
  return (
    <div className="col-span-full flex flex-col items-start gap-3 md:col-span-6">
      <h3>{header}</h3>
      <h5 className="inline max-w-xs text-secondary-foreground md:max-w-none">
        {description.includes("{{") ? (
          <>
            {description.split("{{")[0]}
            <Link href={cta?.href || "#"}>{description.split("{{")[1].split("}}")[0]}</Link>
            {description.split("}}")[1]}
          </>
        ) : (
          description
        )}
      </h5>
    </div>
  );
};

const items = [
  {
    header: "Why do I need to follow the these guidelines?",
    description:
      "We don't want anyone to midcurve Unichain's brand. Keeping things consistent instills recognizability and trust."
  },
  {
    header: "Can I use a different logo color to match my project’s theme?",
    description: "Tempting, but no. Swapping out our colors compromises the integrity of our brand."
  },
  {
    header: "Can I pair this logo with another brand?",
    description:
      "Don’t blend the Unichain brand with others. Leave the logo enough space to stand clearly on its own."
  },
  {
    header: "How do I download these assets?",
    description:
      "You can copy all the various logos and assets throughout this page, or download the full {{Brand Kit here.}}",
    cta: {
      href: "/assets/zip/unichain-brand-kit.zip"
    }
  }
] as Props[];

const _ = () => {
  return (
    <section className="min-h-[65vh] py-12 md:py-24">
      <article className="gap-6 md:gap-12">
        <div className="col-span-full flex items-end gap-5">
          <h2>FAQ</h2>
          <small className="mb-2.5 font-mono text-secondary-foreground">06</small>
        </div>
        <div className="col-span-full grid grid-cols-subgrid gap-12">
          {items.map(item => (
            <Item
              key={item.header}
              header={item.header}
              description={item.description}
              cta={item.cta}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default _;
