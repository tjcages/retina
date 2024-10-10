"use client";

import { cn } from "@/utils";
import { motion } from "framer-motion";
import { Tokens, marked } from "marked";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { PageScroll } from "@/components/policies";
import { Link, useScroll } from "@/components/ui";

interface PolicyContentProps {
  header: string;
  content: string;
  tocDepth?: number;
}

const clean = (str: string) => {
  return str.split(". ").pop()?.toLowerCase().replace(/\s+/g, "-").replace(/,/g, ""); // Remove all commas
};

export default function PolicyContent({ header, content, tocDepth = 3 }: PolicyContentProps) {
  const [toc, setToc] = useState<{ id: string; title: string; level: number }[]>([]);
  const router = useRouter();
  const { scrollTo } = useScroll();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tokens = marked.lexer(content);
    const headings = tokens.filter(
      token => token.type === "heading" && token.depth <= tocDepth
    ) as Tokens.Heading[];
    setToc(
      headings.map(heading => {
        const id = heading.text
          .split(". ")
          .pop()
          ?.toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/,/g, ""); // Remove all commas
        return {
          id: id || "",
          title: heading.text,
          level: heading.depth
        };
      })
    );
  }, [content, tocDepth]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (contentRef.current) {
        const h3Elements = contentRef.current.querySelectorAll("h3");
        h3Elements.forEach(h3 => {
          const h3Text = h3.textContent || "";
          const matchingTocItem = toc.find(item => {
            const processedTocTitle = clean(item.title);
            const processedH3Text = clean(h3Text);
            return processedTocTitle === processedH3Text;
          });

          if (matchingTocItem) {
            h3.id = matchingTocItem.id;
          }
        });
      }
    }, 200);

    return () => clearTimeout(timer);
  });

  const handleScrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        scrollTo(element.offsetTop);
        router.push(`#${id}`, { scroll: false });
      }
    },
    [router, scrollTo]
  );

  const renderContent = useCallback(() => {
    const renderedContent = marked(content);
    return { __html: renderedContent };
  }, [content]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150
      }
    }
  };

  return (
    <section className="py-12 md:py-24">
      <article className="gap-6 lg:gap-12">
        <div className="col-span-full flex flex-col items-start gap-6">
          <h2>{header}</h2>
          <hr className="w-full" />
        </div>
        <div className="col-span-full grid h-full grid-rows-[auto_auto] items-start justify-between gap-24 pb-[100px] lg:flex">
          <div ref={contentRef} className="max-w-4xl" dangerouslySetInnerHTML={renderContent()} />
          {toc && toc.length > 0 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="row-start-1 flex flex-col items-start justify-start gap-3 lg:sticky lg:top-44"
            >
              <PageScroll />
              {toc.map((item, index) => (
                <motion.div key={item.id} variants={itemVariants} custom={index}>
                  <div className="absolute -left-6 top-2.5 hidden h-1 max-h-1 min-h-1 w-1 min-w-1 max-w-1 rounded-full bg-pink-secondary lg:block" />
                  <Link
                    href={`#${item.id}`}
                    variant="ghost"
                    onClick={e => handleScrollToSection(e, item.id)}
                    className={cn("text-secondary-foreground")}
                  >
                    <p className="line-clamp-1">{item.title}</p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </article>
    </section>
  );
}
