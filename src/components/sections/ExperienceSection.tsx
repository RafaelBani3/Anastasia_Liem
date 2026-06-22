"use client";

import { motion, type Variants } from "framer-motion";
import { experiences } from "@/constants/portfolioData";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TimelineItem from "@/components/ui/TimelineItem";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-dusty-rose">
              Experience
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
              Work Experience
            </h2>
            <p className="mt-4 max-w-2xl text-base text-slate">
              Practical experience across HR operations and talent acquisition,
              supporting end-to-end recruitment and employee administration.
            </p>
          </motion.div>

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="mt-12 border-l-2 border-dusty-rose/30 pl-4 sm:pl-6"
          >
            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.company}
                company={exp.company}
                role={exp.role}
                period={exp.period}
                responsibilities={exp.responsibilities}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
