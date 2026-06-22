"use client";

import { motion, type Variants } from "framer-motion";
import { Download, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/constants/portfolioData";
import Button from "@/components/ui/Button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const floatingBadges = [
  { label: "Talent Acquisition", position: "top-4 -left-4 lg:-left-8" },
  { label: "Psychology", position: "top-1/4 -right-4 lg:-right-8" },
  { label: "HR Operations", position: "bottom-16 -left-4 lg:-left-8" },
  { label: "Assessment", position: "bottom-8 -right-4 lg:-right-8" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-bg-base via-bg-base to-bg-accent pt-28 pb-12 sm:pt-32 lg:pt-28 lg:pb-20"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute -right-20 -top-20 h-[28rem] w-[28rem] rounded-full bg-dusty-rose/20 blur-3xl sm:h-[32rem] sm:w-[32rem] lg:h-[40rem] lg:w-[40rem]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
          className="absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-navy/10 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center rounded-full bg-white/90 px-4 py-1.5 text-xs font-medium text-navy shadow-soft backdrop-blur-sm sm:text-sm"
            >
              Talent Acquisition & HR Professional
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-4 font-heading text-3xl font-bold leading-tight text-navy fold:text-4xl sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15] xl:text-6xl"
            >
              {personalInfo.fullName}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate sm:mt-6 sm:text-base sm:text-lg lg:mx-0"
            >
              Helping organizations find, assess, and connect with the right
              talent. Experienced in end-to-end recruitment and psychological
              assessment tools.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4 lg:justify-start"
            >
              <Button href="#contact" variant="primary" size="md">
                <Mail size={18} />
                Connect With Me
              </Button>
              <Button
                href="/cv-anastasia-liem.pdf"
                download="CV-Anastasia-Liem.pdf"
                variant="outline"
                size="md"
              >
                <Download size={18} />
                Download CV
              </Button>
            </motion.div>

            {/* Mini stats - desktop */}
            <motion.div
              variants={itemVariants}
              className="mt-8 hidden items-center justify-center gap-6 sm:mt-10 sm:flex lg:justify-start"
            >
              {[
                { value: "100+", label: "Candidates/Day" },
                { value: "50-70", label: "Psychotests/Day" },
                { value: "<3", label: "Weeks SLA" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center lg:text-left"
                >
                  <p className="font-heading text-2xl font-bold text-navy sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="relative">
              {/* Soft glow */}
              <div className="absolute -inset-6 rounded-full bg-dusty-rose/15 blur-2xl sm:-inset-8" />

              {/* Floating badges - desktop */}
              {floatingBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className={`absolute z-10 hidden rounded-full bg-white px-3 py-1.5 text-xs font-medium text-navy shadow-soft backdrop-blur-sm lg:block ${badge.position}`}
                >
                  {badge.label}
                </motion.div>
              ))}

              {/* Image container */}
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-[5px] border-white bg-white shadow-medium fold:h-72 fold:w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[380px] lg:w-[380px] xl:h-[420px] xl:w-[420px]">
                <Image
                  src="/image.png"
                  alt={personalInfo.fullName}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 375px) 256px, (max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 420px"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:bottom-8 md:block"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-slate hover:text-navy transition-colors"
          >
            <span className="text-xs font-medium">Scroll Down</span>
            <ChevronDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
