"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps, useInView, Variants } from "motion/react";
import { useRef } from "react";

interface WordPullUpProps extends MotionProps {
  children: string;
  className?: string;
  delayMultiple?: number;
  variants?: Variants;
  wordVariants?: Variants;
  startOnView?: boolean;
  as?: React.ElementType;
}

export default function WordPullUp({
  children,
  className,
  as: Component = "h1",
  variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  wordVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  startOnView = false,
}: WordPullUpProps) {
  const MotionComponent = motion.create(Component);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30% 0px -30% 0px" });
  const shouldAnimate = startOnView ? inView : true;

  return (
    <MotionComponent
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={shouldAnimate ? "show" : "hidden"}
      className={cn(
        "font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-xs tracking-[-0.02em] drop-shadow-lg md:text-xl md:leading-[2rem]",
        className
      )}
    >
      {children.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          style={{ display: "inline-block", paddingRight: "8px" }}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
