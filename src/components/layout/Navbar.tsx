"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/constants/portfolioData";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6"
    >
      <nav className="flex w-full max-w-3xl items-center justify-between rounded-full bg-white/80 px-5 py-3 shadow-medium backdrop-blur-md border border-bg-accent/60">
        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          className="font-heading text-lg font-semibold text-navy hover:text-dusty-rose transition-colors duration-300"
        >
          {personalInfo.fullName.split(" ")[0]}
        </motion.a>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <motion.button
                  onClick={() => handleLinkClick(link.href)}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                  className={cn(
                    "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300",
                    isActive
                      ? "text-navy bg-bg-accent"
                      : "text-slate hover:text-navy hover:bg-bg-accent/50"
                  )}
                >
                  {link.label}
                </motion.button>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-navy rounded-full hover:bg-bg-accent transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-4 right-4 mt-2 overflow-hidden rounded-3xl bg-white shadow-medium border border-bg-accent/60 md:hidden"
          >
            <ul className="flex flex-col gap-1 p-2">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className={cn(
                        "block w-full rounded-full py-2.5 text-left text-sm font-medium transition-colors duration-300",
                        isActive
                          ? "text-navy bg-bg-accent px-4"
                          : "text-slate hover:text-navy hover:bg-bg-accent/50 px-4"
                      )}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
