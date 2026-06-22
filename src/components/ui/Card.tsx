"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, boxShadow: "0 12px 40px rgba(13, 27, 42, 0.10)" } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "bg-white rounded-card p-6 shadow-soft border border-bg-accent transition-colors duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
