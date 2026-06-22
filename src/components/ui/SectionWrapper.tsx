"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

const directionOffset = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

export default function SectionWrapper({
  children,
  id,
  className,
  direction = "up",
  delay = 0,
}: SectionWrapperProps) {
  const offset = directionOffset[direction];

  return (
    <section id={id} className={className}>
      <motion.div
        initial={{ opacity: 0, ...offset }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
