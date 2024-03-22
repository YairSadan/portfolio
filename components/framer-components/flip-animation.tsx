"use client"
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
type FlipAnimationProps = {
  children: React.ReactNode;
  className?: string;
};

export default function FlipAnimation({
  children,
  className,
}: FlipAnimationProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
}
