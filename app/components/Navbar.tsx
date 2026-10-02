"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/app/components/icons";
import Link from "next/link";

const navLinks = [
  { label: "Case Studies", href: "/case-studies", page: true },
  { label: "Experience", href: "#experience", page: false },
  { label: "Builds", href: "#builds", page: false },
  { label: "About", href: "#about", page: false },
  { label: "Contact", href: "#contact", page: false },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/aishwarye-jain", Icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com/aishwarye-jain", Icon: GitHubIcon },
];

const menuVariants = {
  closed: { opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 32px)" },
  open:   { opacity: 1, clipPath: "circle(150% at calc(100% - 40px) 32px)" },
};

const itemVariants = {
  closed: { opacity: 0, x: -24 },
  open:   (i: number) => ({ opacity: 1, x: 0, transition: { duration: 0.35, delay: 0.1 + i * 0.07 } }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 300);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled && !menuOpen
            ? "bg-white/95 backdrop-blur-md border-b border-ink-200 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between" style={{ height: "64px" }}>
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`font-display font-extrabold text-base tracking-tight transition-colors z-[60] relative ${
              menuOpen ? "text-white" : scrolled ? "text-ink" : "text-white"
            }`}
          >
            Aishwarye<span className="text-coral">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((l) =>
              l.page ? (
                <Link key={l.label} href={l.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                    scrolled ? "text-ink-600 hover:text-coral hover:bg-coral-50" : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {l.label}
                </Link>
              ) : (
                <button key={l.label} onClick={() => scrollTo(l.href)}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                    scrolled ? "text-ink-600 hover:text-coral hover:bg-coral-50" : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {l.label}
                </button>
              )
            )}
          </div>

          {/* Right: Resume (desktop) + Hamburger (mobile) */}
          <div className="flex items-center gap-3">
            <a href="/resume.pdf" download
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-coral text-white text-sm font-bold rounded-lg hover:bg-coral-600 transition-all shadow-md shadow-coral/20"
            >
              <Download size={13} /> Resume
            </a>
            {/* Hamburger - morphs to X */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative z-[60] w-10 h-10 flex items-center justify-center rounded-xl transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={20} className="text-white" />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={20} className={scrolled ? "text-ink-500" : "text-white"} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Full-screen mobile overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 md:hidden bg-ink flex flex-col overflow-hidden"
          >
            {/* Aurora blobs inside menu */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-[-100px] right-[-80px] w-[300px] h-[300px] rounded-full opacity-[0.15] blur-[80px]"
                style={{ background: "radial-gradient(circle, #FF6B4A 0%, transparent 70%)" }} />
              <div className="absolute bottom-[80px] left-[-60px] w-[250px] h-[250px] rounded-full opacity-[0.10] blur-[70px]"
                style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)" }} />
            </div>

            {/* Nav links - centered vertically */}
            <div className="relative z-10 flex-1 flex flex-col justify-center px-8 pt-20">
              <nav className="space-y-1">
                {navLinks.map((l, i) =>
                  l.page ? (
                    <motion.div key={l.label} custom={i} variants={itemVariants} initial="closed" animate="open">
                      <Link href={l.href} onClick={() => setMenuOpen(false)}
                        className="group flex items-center justify-between py-4 border-b border-white/[0.08]">
                        <span className="font-display font-extrabold text-3xl text-white group-hover:text-coral transition-colors">{l.label}</span>
                        <ArrowUpRight size={18} className="text-ink-600 group-hover:text-coral transition-colors" />
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.div key={l.label} custom={i} variants={itemVariants} initial="closed" animate="open">
                      <button onClick={() => scrollTo(l.href)}
                        className="group w-full flex items-center justify-between py-4 border-b border-white/[0.08] cursor-pointer">
                        <span className="font-display font-extrabold text-3xl text-white group-hover:text-coral transition-colors">{l.label}</span>
                        <ArrowUpRight size={18} className="text-ink-600 group-hover:text-coral transition-colors" />
                      </button>
                    </motion.div>
                  )
                )}
              </nav>
            </div>

            {/* Bottom bar - resume + socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="relative z-10 px-8 pb-12 pt-6 border-t border-white/[0.08]"
            >
              <div className="flex items-center justify-between">
                <a href="/resume.pdf" download
                  className="flex items-center gap-2 px-5 py-3 bg-coral text-white text-sm font-bold rounded-xl hover:bg-coral-600 transition-all shadow-lg shadow-coral/20"
                >
                  <Download size={14} /> Download Resume
                </a>
                <div className="flex items-center gap-2">
                  {socials.map(({ label, href, Icon }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 text-ink-400 hover:text-white hover:border-white/30 transition-all">
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-ink-600 text-xs">Product Specialist · Zepto · Bengaluru</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
