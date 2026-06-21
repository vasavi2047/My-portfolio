"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function GlassCard({
  children,
  className,
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl",
        "shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
        "dark:border-white/10 dark:bg-white/[0.03]",
        hover && "transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:border-white/20",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
