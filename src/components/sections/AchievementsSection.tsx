"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, ClipboardCheck, Clock } from "lucide-react";
import { achievements } from "@/constants/portfolioData";
import SectionWrapper from "@/components/ui/SectionWrapper";

const icons = [Users, ClipboardCheck, Clock];

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part
    const numericMatch = value.match(/[0-9]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const target = parseInt(numericMatch[0], 10);
    const suffix = value.replace(/[0-9]+/, "");
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(target * easeOut);

      if (progress < 1) {
        setDisplayValue(`${start}${suffix}`);
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function AchievementsSection() {
  return (
    <SectionWrapper className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest text-dusty-rose"
          >
            Achievements
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl"
          >
            Highlights at Work
          </motion.h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 12px 40px rgba(13, 27, 42, 0.10)",
                }}
                className="group rounded-card bg-bg-base p-8 text-center shadow-soft transition-colors duration-300 hover:bg-white cursor-default"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-dusty-rose shadow-sm"
                >
                  <Icon size={28} />
                </motion.div>
                <h3 className="font-heading text-4xl font-bold text-navy">
                  <AnimatedNumber value={achievement.value} />
                </h3>
                <p className="mt-2 text-sm font-medium text-slate">
                  {achievement.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
