"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, Briefcase, Mail } from "lucide-react";
import { personalInfo, professionalSummary } from "@/constants/portfolioData";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span
              variants={itemVariants}
              className="text-sm font-semibold uppercase tracking-widest text-dusty-rose"
            >
              About Me
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl"
            >
              A People-Centered HR Professional
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base leading-relaxed text-slate sm:text-lg"
            >
              {professionalSummary}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <Card className="h-full">
              <h3 className="font-heading text-xl font-semibold text-navy">
                Personal Info
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  { icon: Briefcase, label: "Role", value: personalInfo.role },
                  { icon: MapPin, label: "Location", value: personalInfo.location },
                  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-bg-accent text-dusty-rose">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-navy hover:text-dusty-rose transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-navy">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
