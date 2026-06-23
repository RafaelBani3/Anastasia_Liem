"use client";

import { motion, type Variants } from "framer-motion";
import { hardSkills, softSkills } from "@/constants/portfolioData";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest text-dusty-rose"
          >
            Skills
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl"
          >
            What I Bring to the Table
          </motion.h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Hard Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="font-heading text-xl font-semibold text-navy">
              Hard Skills
            </h3>
            <div className="mt-6 space-y-6">
              {hardSkills
                .filter((category) => category.category !== "Assessment Tools")
                .map((category) => (
                <motion.div
                  key={category.category}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate">
                    {category.category}
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <motion.div key={item} variants={itemVariants}>
                        <Badge>{item}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="font-heading text-xl font-semibold text-navy">
              Soft Skills
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {softSkills.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Badge>{skill}</Badge>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -4 }}
              className="mt-12 rounded-card bg-bg-accent p-6 transition-shadow duration-300 hover:shadow-soft"
            >
              <h4 className="font-heading text-lg font-semibold text-navy">
                Assessment Tools
              </h4>
              <p className="mt-2 text-sm text-slate">
                Proficient in administering and scoring a wide range of
                psychometric instruments used in recruitment and organizational
                development.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {hardSkills
                  .find((cat) => cat.category === "Assessment Tools")
                  ?.items.map((tool, i) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                      className="inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-navy shadow-sm cursor-default"
                    >
                      {tool}
                    </motion.span>
                  ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
