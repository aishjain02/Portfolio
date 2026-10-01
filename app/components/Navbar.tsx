"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { hero } from "@/app/data/content";

const navLinks = [
  { label: "Work", href: "#experience" },
  { label: "Builds", href: "#builds" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-cream-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-coral flex items-center justify-center text-white font-bold font-display text-sm shadow-sm group-hover:shadow-md transition-shadow">
              AJ
            </div>
            <span className="font-display font-semibold text-ink hidden sm:block text-sm">
              Aishwarye Jain
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-ink-500 hover:text-coral transition-colors rounded-lg hover:bg-coral-50 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Resume Button + Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href={hero.links.resume}
              download
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-coral text-white text-sm font-semibold rounded-xl hover:bg-coral-600 transition-all shadow-sm hover:shadow-md"
            >
              <Download size={14} />
              Resume
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-ink-500 hover:text-coral transition-colors rounded-lg hover:bg-coral-50"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-cream-200 shadow-lg md:hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-sm font-medium text-ink-500 hover:text-coral hover:bg-coral-50 rounded-xl transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={hero.links.resume}
                download
                className="mt-2 flex items-center gap-1.5 px-4 py-3 bg-coral text-white text-sm font-semibold rounded-xl hover:bg-coral-600 transition-colors"
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
