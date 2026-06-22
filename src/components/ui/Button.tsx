"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  download?: string | boolean;
  className?: string;
  onClick?: () => void;
}

const variants = {
  primary:
    "bg-navy text-white hover:bg-[#162635] hover:shadow-medium",
  outline:
    "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  ghost: "text-navy hover:bg-bg-accent",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  download,
  className,
  onClick,
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-btn font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-dusty-rose focus:ring-offset-2",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <motion.span
      className={baseClasses}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} download={download} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
