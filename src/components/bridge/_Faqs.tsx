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
    header: "What is Unichain Testnet?",
    description:
      "Unichain Testnet is a version of the Unichain network that is built for developers to experiment with applications."
  },
  {
    header: "What happens when I bridge my assets?",
    description:
      "When you bridge assets to Unichain Testnet, you will be able to test transactions and interact with contracts on the network."
  },
  {
    header: "Why can’t I bridge my assets?",
    description:
      "Assets on Testnet are not real assets. You can only bridge assets from Ethereum Sepolia to Unichain Testnet."
  }
] as Props[];

const _ = () => {
  return (
    <section className="min-h-[65vh] py-12 md:py-24">
      <article className="gap-6 md:gap-12">
        <div className="col-span-full flex items-end gap-5">
          <h2>FAQ</h2>
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
