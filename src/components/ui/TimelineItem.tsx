"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  index: number;
}

export default function TimelineItem({
  company,
  role,
  period,
  responsibilities,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      className="group relative pl-8 pb-10 last:pb-0"
    >
      <motion.span
        whileInView={{ scale: [0, 1.2, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
        className="absolute left-0 top-1 h-4 w-4 -translate-x-1/2 rounded-full bg-dusty-rose ring-4 ring-bg-accent group-hover:ring-dusty-rose/20 transition-all duration-300"
      />
      <div className="space-y-2">
        <h3 className="font-heading text-xl font-semibold text-navy">
          {company}
        </h3>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
          <p className="font-medium text-slate">{role}</p>
          <span className="hidden h-1 w-1 rounded-full bg-dusty-rose sm:block" />
          <p className="text-sm text-dusty-rose">{period}</p>
        </div>
        <ul className="pt-2 space-y-1.5">
          {responsibilities.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.2 + 0.2 + i * 0.05,
              }}
              className="flex items-start gap-2 text-sm text-slate"
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-dusty-rose" />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
