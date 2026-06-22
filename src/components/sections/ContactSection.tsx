"use client";

import { motion } from "framer-motion";
import { Download, Mail, MapPin } from "lucide-react";
import { personalInfo } from "@/constants/portfolioData";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: personalInfo.linkedIn,
    href: `https://${personalInfo.linkedIn}`,
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
  },
];

function LinkedInIcon(props: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 20}
      height={props.size || 20}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.45h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.461v6.28zM5.337 7.433a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.556 20.45H3.117V9h4.439v11.45zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-dusty-rose">
              Contact
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
              Let&apos;s Connect
            </h2>
            <p className="mt-4 max-w-lg text-base text-slate">
              I&apos;m open to new opportunities, collaborations, and
              conversations about talent, people, and culture. Feel free to
              reach out.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Card className="h-full">
              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-bg-accent text-dusty-rose">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
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

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="border-t border-bg-accent pt-6"
                >
                  <Button
                    href="/cv-anastasia-liem.pdf"
                    download="CV-Anastasia-Liem.pdf"
                    variant="primary"
                    className="w-full"
                  >
                    <Download size={18} />
                    Download CV
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
