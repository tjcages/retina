interface Props {
  header: string;
  description: string;
}

const Item: React.FC<Props> = ({ header, description }) => {
  return (
    <div className="col-span-full flex flex-col items-start gap-3 md:col-span-6">
      <h3>{header}</h3>
      <h5 className="max-w-xs text-secondary-foreground md:max-w-none">{description}</h5>
    </div>
  );
};

const items = [
  {
    header: "Where should I use these logos?",
    description:
      "You can use these logos for social images, collaborations, or anywhere you need to display the Unichain logo."
  },
  {
    header: "Can I use these assets for other projects?",
    description:
      "These assets represent the Unichain brand. Assets can be used in materials that directly reference Unichain."
  },
  {
    header: "Can I pair this logo with another brand?",
    description:
      "Don’t blend the Unichain brand with others. Leave the logo enough space to stand clearly on its own."
  },
  {
    header: "How do I download these assets?",
    description:
      "You can copy the all the various logo assets at the top of the page, or download the full brand kit here."
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
            <Item key={item.header} header={item.header} description={item.description} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default _;
