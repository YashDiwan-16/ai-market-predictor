"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface LetterPullupProps {
  className?: string;
  words: string;
  delay?: number;
}

export default function LetterPullup({
  className,
  words,
  delay,
}: LetterPullupProps) {
  const letters = words.split("");

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * (delay ? delay : 0.05), // By default, delay each letter's animation by 0.05 seconds
      },
    }),
  };

  return (
    <div className="flex justify-center">
      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          custom={i}
          className={cn(
            "font-bold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-white text-4xl tracking-[-0.02em] drop-shadow-sm md:text-5xl md:leading-[4rem]",
            className
          )}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </div>
  );
}
