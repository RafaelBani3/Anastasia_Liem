"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, backgroundColor: "#F7EDEB" }}
      transition={{ duration: 0.2 }}
      className={cn(
        "inline-flex items-center rounded-full bg-bg-accent px-4 py-1.5 text-sm font-medium text-navy cursor-default",
        className
      )}
    >
      {children}
    </motion.span>
  );
}
