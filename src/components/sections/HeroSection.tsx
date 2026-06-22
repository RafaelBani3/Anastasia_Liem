"use client";

import { motion, type Variants } from "framer-motion";
import { Download, Mail } from "lucide-react";
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
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-bg-base via-bg-base to-bg-accent pt-20"
    >
      {/* Decorative background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-dusty-rose/10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-navy/5 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-navy shadow-soft backdrop-blur-sm"
            >
              Talent Acquisition & HR Professional
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-6 font-heading text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl"
            >
              {personalInfo.fullName}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-lg text-base leading-relaxed text-slate sm:text-lg"
            >
              Helping organizations find, assess, and connect with the right
              talent. Experienced in end-to-end recruitment and psychological
              assessment tools.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button href="#contact" variant="primary">
                <Mail size={18} />
                Connect With Me
              </Button>
              <Button
                href="/cv-anastasia-liem.pdf"
                download="CV-Anastasia-Liem.pdf"
                variant="outline"
              >
                <Download size={18} />
                Download CV
              </Button>
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
              {/* Animated rings */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-6 rounded-full bg-dusty-rose/20 blur-2xl"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full border-2 border-dashed border-dusty-rose/30"
              />

              <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-white bg-white shadow-medium sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]">
                <Image
                  src="/image.png"
                  alt={personalInfo.fullName}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 420px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
