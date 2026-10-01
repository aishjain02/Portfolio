"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Case Studies", href: "#case-studies" },
  { label: "Experience", href: "#experience" },
  { label: "Builds", href: "#builds" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur border-b border-ink-200 shadow-sm" : "bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-15 flex items-center justify-between" style={{ height: "60px" }}>
          {/* Logo */}
          <Link
            href="/"
            className="font-display font-bold text-ink text-base tracking-tight hover:text-blue transition-colors"
          >
            Aishwarye Jain
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="px-4 py-2 text-sm font-medium text-ink-500 hover:text-ink rounded-lg hover:bg-ink-50 transition-all cursor-pointer"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-ink text-white text-sm font-semibold rounded-lg hover:bg-ink-800 transition-all"
            >
              <Download size={13} />
              Resume
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-ink-500 hover:text-ink rounded-lg hover:bg-ink-50"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] inset-x-0 z-40 bg-white border-b border-ink-200 shadow-lg md:hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  className="text-left px-4 py-3 text-sm font-medium text-ink-500 hover:text-ink hover:bg-ink-50 rounded-lg transition-all cursor-pointer"
                >
                  {l.label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                download
                className="mt-2 flex items-center gap-1.5 px-4 py-3 bg-ink text-white text-sm font-semibold rounded-lg"
              >
                <Download size={13} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
