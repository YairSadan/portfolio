"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type UlAnimationProps = {
  elements: { title: string; logo: React.ReactNode; level: number }[];
  className?: string;
};

const UlAnimation = ({ elements, className }: UlAnimationProps) => {
  return (
    <motion.ul
      className={cn(
        className,
        "grid grid-cols-3 md:grid-cols-5 gap-4 col mt-4 max-w-fit"
      )}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {elements.map((element) => (
        <motion.li key={element.title} className="h-16 w-16" variants={item}>
          {element.logo}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default UlAnimation;

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
