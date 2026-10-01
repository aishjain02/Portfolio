"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/app/components/icons";
import { hero } from "@/app/data/content";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-white px-6 pt-20 overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #E2E8F0 1px, transparent 0)",
          backgroundSize: "40px 40px",
          opacity: 0.5,
        }}
      />
      {/* Blue glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <span className="section-label">Product Builder · Bengaluru</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.05] tracking-tight max-w-4xl mb-8"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-ink-500 text-lg sm:text-xl max-w-2xl mb-2 leading-relaxed"
        >
          {hero.subline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-blue font-semibold text-sm tracking-wider mb-12"
        >
          {hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollTo("#case-studies")}
            className="flex items-center gap-2 px-6 py-3 bg-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            View Case Studies
            <ArrowDown size={15} />
          </button>
          <a
            href={hero.links.resume}
            download
            className="flex items-center gap-2 px-6 py-3 border border-ink-200 text-ink font-semibold rounded-lg hover:border-ink hover:bg-ink-50 transition-all"
          >
            <Download size={15} />
            Resume
          </a>
          <div className="flex items-center gap-2 ml-1">
            <a
              href={hero.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-ink-200 text-ink-500 hover:text-blue hover:border-blue transition-all"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={16} />
            </a>
            <a
              href={hero.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-ink-200 text-ink-500 hover:text-ink hover:border-ink transition-all"
              aria-label="GitHub"
            >
              <GitHubIcon size={16} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => scrollTo("#quickscan")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-ink-300 hover:text-ink transition-colors cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
