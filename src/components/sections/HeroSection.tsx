"use client";

import { motion, type Variants } from "framer-motion";
import { Download, Mail, ChevronDown, Star, Award, Clock } from "lucide-react";
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

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-bg-base via-bg-base to-bg-accent pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-32 lg:pb-24"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute -right-20 -top-20 h-[30rem] w-[30rem] rounded-full bg-dusty-rose/30 blur-3xl sm:h-[36rem] sm:w-[36rem] lg:h-[42rem] lg:w-[42rem]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
          className="absolute -left-16 top-1/3 h-64 w-64 rounded-full bg-navy/20 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 text-center lg:order-1 lg:text-left z-10"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-xs font-semibold tracking-wide text-navy shadow-sm backdrop-blur-md border border-white/50 sm:text-sm"
            >
              <Star className="mr-2 h-3 w-3 text-dusty-rose" />
              Talent Acquisition & HR Professional
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-6 font-heading text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-[3.5rem] lg:leading-[1.15] xl:text-[4rem]"
            >
              Hi, I&apos;m <br className="hidden lg:block" />
              <span className="text-dusty-rose">{personalInfo.fullName}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate sm:text-lg lg:mx-0"
            >
              Helping organizations find, assess, and connect with the right
              talent. Experienced in end-to-end recruitment and psychological
              assessment tools.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <Button href="#contact" variant="primary" size="lg">
                <Mail size={18} className="mr-2" />
                Let&apos;s Talk
              </Button>
              <Button
                href="/cv-anastasia-liem.pdf"
                download="CV-Anastasia-Liem.pdf"
                variant="outline"
                size="lg"
                className="bg-white/50 backdrop-blur-sm border-navy/10 hover:bg-white/80"
              >
                <Download size={18} className="mr-2" />
                Download CV
              </Button>
            </motion.div>

            {/* Mini stats - Mobile/Tablet Only */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-3 gap-3 sm:gap-4 lg:hidden"
            >
              <div className="flex flex-col items-center rounded-2xl bg-white/60 p-4 shadow-sm backdrop-blur-sm border border-white/40">
                <p className="font-heading text-xl font-bold text-navy sm:text-2xl">100+</p>
                <p className="mt-1 text-[10px] sm:text-xs font-medium text-slate text-center">Candidates/Day</p>
              </div>
              <div className="flex flex-col items-center rounded-2xl bg-white/60 p-4 shadow-sm backdrop-blur-sm border border-white/40">
                <p className="font-heading text-xl font-bold text-navy sm:text-2xl">50-70</p>
                <p className="mt-1 text-[10px] sm:text-xs font-medium text-slate text-center">Psychotests/Day</p>
              </div>
              <div className="flex flex-col items-center rounded-2xl bg-white/60 p-4 shadow-sm backdrop-blur-sm border border-white/40">
                <p className="font-heading text-xl font-bold text-navy sm:text-2xl">&lt; 3</p>
                <p className="mt-1 text-[10px] sm:text-xs font-medium text-slate text-center">Weeks SLA</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile image with floating stats */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="order-1 relative flex justify-center lg:order-2 z-0 pt-8 lg:pt-0"
          >
            <div className="relative">
              {/* Soft glow behind image */}
              <div className="absolute -inset-10 rounded-full bg-dusty-rose/20 blur-3xl" />
              <div className="absolute -inset-10 rounded-full bg-navy/10 blur-3xl translate-y-12 translate-x-12" />

              {/* Arch Image container */}
              <div className="relative h-[340px] w-[260px] overflow-hidden rounded-t-[140px] rounded-b-[32px] border-[8px] border-white/90 bg-white shadow-2xl backdrop-blur-sm sm:h-[420px] sm:w-[320px] lg:h-[500px] lg:w-[360px] xl:h-[560px] xl:w-[400px] z-10">
                <Image
                  src="/image.png"
                  alt={personalInfo.fullName}
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 400px"
                />
              </div>

              {/* Floating Stats - Desktop Only */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
                className="hidden lg:flex absolute top-16 -left-20 z-20 items-center gap-4 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-md border border-white/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-accent text-navy">
                   <Star size={24} />
                </div>
                <div>
                   <p className="font-heading text-2xl font-bold text-navy leading-none">100+</p>
                   <p className="mt-1 text-sm font-medium text-slate">Candidates/Day</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.8, type: "spring" }}
                className="hidden lg:flex absolute bottom-36 -right-16 z-20 items-center gap-4 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-md border border-white/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-accent text-navy">
                   <Clock size={24} />
                </div>
                <div>
                   <p className="font-heading text-2xl font-bold text-navy leading-none">&lt; 3</p>
                   <p className="mt-1 text-sm font-medium text-slate">Weeks SLA</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8, type: "spring" }}
                className="hidden lg:flex absolute -bottom-8 left-8 z-20 items-center gap-4 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-md border border-white/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-accent text-navy">
                   <Award size={24} />
                </div>
                <div>
                   <p className="font-heading text-2xl font-bold text-navy leading-none">50-70</p>
                   <p className="mt-1 text-sm font-medium text-slate">Psychotests/Day</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-16 flex justify-center lg:mt-20"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-slate hover:text-dusty-rose transition-colors"
          >
            <span className="text-xs font-medium tracking-widest uppercase">
              Scroll Down
            </span>
            <ChevronDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
