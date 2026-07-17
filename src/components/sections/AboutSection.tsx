"use client";

import { motion, type Variants } from "framer-motion";
import {
  MapPin,
  Briefcase,
  Mail,
  Heart,
  Users,
  Target,
} from "lucide-react";
import { personalInfo } from "@/constants/portfolioData";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const highlights = [
  {
    icon: Heart,
    title: "People-Centered",
    description: "Believing that people are the heart of every organization.",
  },
  {
    icon: Target,
    title: "Potential-Focused",
    description: "Matching the right talent with the right opportunities.",
  },
  {
    icon: Users,
    title: "End-to-End Recruitment",
    description: "From recruitment coordination to HR operations.",
  },
];

const aboutParagraphs = [
  "Every organization's success begins with its people. My role is to connect talented individuals with opportunities where they can contribute, grow, and create lasting value.",
  "With experience in Talent Acquisition and HR Operations, I have managed end-to-end recruitment, candidate engagement, employee administration, and cross-functional coordination.", 
  "My background in Psychology helps me understand people beyond resumes—recognizing potential, building relationships, and supporting business goals through effective HR practices.",
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={itemVariants}
            className="text-sm font-semibold uppercase tracking-widest text-dusty-rose"
          >
            About Me
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl lg:text-5xl"
          >
            Building Success Through People
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-base text-slate sm:text-lg"
          >
            A philosophy rooted in understanding potential, building connections,
            and driving organizational growth.
          </motion.p>
        </motion.div>

        {/* Main content + quote */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-5"
          >
            {aboutParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-justify text-base leading-relaxed text-slate sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <Card className="relative overflow-hidden bg-navy text-white">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-dusty-rose/20" />
              <div className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-white/5" />
              <div className="relative">
                <span className="mb-4 block text-4xl leading-none text-dusty-rose">
                  &ldquo;
                </span>
                <p className="font-heading text-lg font-medium leading-relaxed sm:text-xl">
                  Great hiring isn&apos;t about filling vacancies. It&apos;s about creating opportunities where people and organizations can succeed together.
                </p>
              </div>
            </Card>

            <Card hover={false} className="bg-bg-accent/50">
              <h3 className="font-heading text-lg font-semibold text-navy">
                Personal Info
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-dusty-rose">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate">Role</p>
                    <p className="break-words text-sm font-medium text-navy">
                      {personalInfo.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-dusty-rose">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate">Location</p>
                    <p className="text-sm font-medium text-navy">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:col-span-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-dusty-rose">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-medium text-navy hover:text-dusty-rose transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(13, 27, 42, 0.10)" }}
              className="rounded-card bg-white p-6 shadow-soft transition-colors duration-300 hover:bg-bg-accent/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-accent text-dusty-rose">
                <highlight.icon size={24} />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-navy">
                {highlight.title}
              </h3>
              <p className="mt-2 text-sm text-slate">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
