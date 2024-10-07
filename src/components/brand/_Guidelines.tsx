"use client";

import { useInView } from "@/hooks";
import { cn } from "@/utils";
import { motion } from "framer-motion";
import { useRef } from "react";

import { Icon, Image } from "@/components/ui";

interface Props {
  allowed?: boolean;
  icon: React.ReactNode;
  description: string;
}

const Item: React.FC<Props> = ({ allowed, icon, description }) => {
  return (
    <div
      className={cn(
        "relative flex select-none flex-col items-center justify-center gap-3 text-center",
        !allowed && "pointer-events-none"
      )}
    >
      <div className="flex aspect-square w-full items-center justify-center rounded-[20px] bg-secondary text-pink-primary">
        <motion.div
          className="flex h-full w-full items-center justify-center"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
        >
          {icon}
        </motion.div>
      </div>
      <p>{description}</p>
      <Icon
        icon={allowed ? "Check" : "X"}
        className={cn("absolute right-3 top-3 h-5 w-5", !allowed && "text-[#FF0000]")}
      />
    </div>
  );
};

const yesItems: Props[] = [
  {
    icon: <Icon icon="Logo" className="h-auto w-3/4 text-inherit" />,
    description: "Use the full lockup when appropriate"
  },
  {
    icon: <Icon icon="LogoIcon" className="h-auto w-1/3 text-inherit" />,
    description: "Use the icon in brand colors only"
  },
  {
    icon: <Icon icon="LogoNetwork" className="h-auto w-1/3 text-inherit" />,
    description: "For network icons, use the white icon on a Primary Pink background"
  }
];

const noItems: Props[] = [
  {
    icon: (
      <Image
        className="h-1/3 w-auto object-contain"
        src="/assets/graphics/not-allowed/0.png"
        alt="Not allowed"
        width={400}
        height={400}
      />
    ),
    description: "Don’t stretch or skew the logo"
  },
  {
    icon: (
      <Image
        className="h-1/3 w-auto object-contain"
        src="/assets/graphics/not-allowed/1.png"
        alt="Not allowed"
        width={400}
        height={400}
      />
    ),
    description: "Don’t use off-brand colors"
  },
  {
    icon: (
      <Image
        className="h-1/2 w-auto object-contain opacity-50"
        src="/assets/graphics/not-allowed/2.png"
        alt="Not allowed"
        width={400}
        height={400}
      />
    ),
    description: "Don’t rotate the logo"
  },
  {
    icon: (
      <Image
        className="h-1/3 w-auto object-contain"
        src="/assets/graphics/not-allowed/3.png"
        alt="Not allowed"
        width={400}
        height={400}
      />
    ),
    description: "Don’t use multiple colors within the logo"
  },
  {
    icon: (
      <Image
        className="h-1/2 w-auto object-contain"
        src="/assets/graphics/not-allowed/4.png"
        alt="Not allowed"
        width={400}
        height={400}
      />
    ),
    description: "Don’t add effects like gradients and shadows to the logo"
  },
  {
    icon: (
      <Image
        className="h-1/3 w-auto object-contain opacity-50"
        src="/assets/graphics/not-allowed/5.png"
        alt="Not allowed"
        width={400}
        height={400}
      />
    ),
    description: "Don’t place other elements too closely to the logo"
  }
];

const Typography: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1 }
  };

  return (
    <section className="py-12 md:py-16" ref={ref}>
      <article className="gap-y-6 md:gap-y-12">
        <div className="col-span-full flex items-end gap-5">
          <h2>Logo Guidelines</h2>
          <small className="mb-2.5 font-mono text-secondary-foreground">05</small>
        </div>
        <div className="col-span-full mb-12 grid grid-cols-subgrid items-start gap-6">
          <div className="col-span-full flex h-full flex-col items-start gap-5 md:col-span-8 lg:col-span-10 xl:col-span-8">
            <h3>What works</h3>
          </div>
          <motion.div
            className="relative col-span-full grid grid-cols-3 items-start gap-6 md:col-[9_/_span_16] lg:col-[12_/_span_15] xl:col-[10_/_span_15]"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {yesItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Item allowed icon={item.icon} description={item.description} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="col-span-full grid grid-cols-subgrid items-start gap-6">
          <div className="col-span-full flex h-full flex-col items-start gap-5 md:col-span-8 lg:col-span-10 xl:col-span-8">
            <h3>What doesn&apos;t work</h3>
          </div>
          <motion.div
            className="relative col-span-full grid grid-cols-3 items-start gap-6 md:col-[9_/_span_16] lg:col-[12_/_span_15] xl:col-[10_/_span_15]"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {noItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Item icon={item.icon} description={item.description} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </article>
    </section>
  );
};

export default Typography;
