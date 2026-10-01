"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/app/components/icons";
import { hero } from "@/app/data/content";

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [counted, setCounted] = useState(false);
  const [display, setDisplay] = useState("0");

  const numericPart = target.replace(/[^0-9.]/g, "");
  const prefix = target.match(/^[^0-9]*/)?.[0] ?? "";
  const targetSuffix = target.match(/[^0-9.]+$/)?.[0] ?? "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted) {
          setCounted(true);
          const end = parseFloat(numericPart);
          const duration = 1800;
          const startTime = Date.now();
          const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * end);
            setDisplay(String(current));
            if (progress >= 1) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [counted, numericPart]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {targetSuffix}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [tagIndex, setTagIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTagIndex((i) => (i + 1) % hero.taglines.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const scrollToWork = () => {
    document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cream px-6 pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute -top-32 -right-32 w-96 h-96 rounded-full bg-coral opacity-[0.12] blur-3xl" />
        <div className="blob-delay absolute top-1/2 -left-48 w-80 h-80 rounded-full bg-gold opacity-[0.10] blur-3xl" />
        <div className="blob absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-coral opacity-[0.08] blur-2xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-ink leading-tight tracking-tight mb-4">
            {hero.greeting}
          </h1>
        </motion.div>

        {/* Rotating Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="h-10 sm:h-12 flex items-center justify-center mb-6"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-coral animate-pulse" />
            <AnimatePresence mode="wait">
              <motion.span
                key={tagIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="font-display font-bold text-xl sm:text-2xl gradient-text"
              >
                {hero.taglines[tagIndex]}
              </motion.span>
            </AnimatePresence>
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="font-display font-semibold text-xl sm:text-2xl text-ink-700 max-w-2xl mx-auto leading-relaxed mb-4"
        >
          {hero.headline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-ink-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          {hero.subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-3 mb-14"
        >
          <button
            onClick={scrollToWork}
            className="flex items-center gap-2 px-6 py-3 bg-coral text-white font-semibold rounded-2xl hover:bg-coral-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            View My Work
            <ArrowDown size={16} />
          </button>
          <a
            href={hero.links.resume}
            download
            className="flex items-center gap-2 px-6 py-3 bg-white text-ink font-semibold rounded-2xl border border-cream-200 hover:border-coral hover:text-coral transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <Download size={16} />
            Resume
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href={hero.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white border border-cream-200 text-ink-400 hover:text-coral hover:border-coral transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href={hero.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white border border-cream-200 text-ink-400 hover:text-coral hover:border-coral transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href={hero.links.email}
              className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white border border-cream-200 text-ink-400 hover:text-coral hover:border-coral transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {hero.impacts.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl px-4 py-5 border border-cream-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="font-display font-extrabold text-2xl sm:text-3xl gradient-text mb-1">
                <AnimatedCounter target={item.value} />
              </div>
              <div className="text-xs text-ink-400 font-medium">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToWork}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-ink-300 hover:text-coral transition-colors cursor-pointer"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
