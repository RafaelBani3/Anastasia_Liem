"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/constants/portfolioData";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";

export default function EducationSection() {
  return (
    <SectionWrapper className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-dusty-rose">
              Education
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
              Academic Background
            </h2>
            <p className="mt-4 max-w-xl text-base text-slate">
              A Psychology graduate with research and practical experience in
              assessment, measurement, and people development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Card className="relative overflow-hidden">
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-dusty-rose/10" />
              <div className="relative">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-bg-accent text-dusty-rose"
                  >
                    <GraduationCap size={24} />
                  </motion.div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-navy">
                      {education.institution}
                    </h3>
                    <p className="mt-1 text-slate">{education.degree}</p>
                    <p className="text-sm text-dusty-rose">
                      {education.major}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-bg-accent pt-6">
                  <div>
                    <p className="text-sm text-slate">GPA</p>
                    <p className="font-semibold text-navy">{education.gpa}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate">Graduated</p>
                    <p className="font-semibold text-navy">
                      {education.graduation}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-slate">
                    Academic Highlights
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {education.highlights.map((highlight, i) => (
                      <motion.li
                        key={highlight}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2 text-sm text-slate"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-dusty-rose" />
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
