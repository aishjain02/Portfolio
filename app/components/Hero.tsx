"use client";

import { motion, useScroll, useTransform, AnimatePresence, useInView, type Variants } from "framer-motion";
import { ArrowDown, Download, ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/app/components/icons";
import { hero } from "@/app/data/content";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const words = ["consumer products.", "AI workflows.", "data systems.", "growth loops.", "0→1 ideas."];

const impactCards = [
  { target: 20, suffix: "M+", prefix: "", label: "Customer impressions", color: "text-coral" },
  { target: 90, suffix: "%", prefix: "", label: "Fewer errors", color: "text-gold" },
  { target: 80, suffix: "%", prefix: "–", label: "Manual effort cut", color: "text-emerald-400" },
  { target: 25, suffix: "+", prefix: "", label: "Events launched", color: "text-sky-400" },
];

function CountUp({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 3200;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 2);
      setCount(Math.round(ease * target));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

function WordCycle() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="inline-block relative" style={{ minWidth: "min(280px, 60vw)" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-gradient inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={ref} className="relative min-h-[100svh] sm:min-h-screen bg-ink overflow-hidden flex flex-col">
      {/* ── Aurora background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Coral top-left blob */}
        <motion.div
          animate={{ scale: [1, 1.18, 1], x: [0, 40, 0], y: [0, -50, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-200px] left-[-100px] w-[550px] h-[550px] rounded-full opacity-[0.18] blur-[80px]"
          style={{ background: "radial-gradient(circle, #FF6B4A 0%, #FF3D1A 60%, transparent 100%)" }}
        />
        {/* Violet mid-right blob */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[15%] right-[-150px] w-[480px] h-[480px] rounded-full opacity-[0.14] blur-[90px]"
          style={{ background: "radial-gradient(circle, #8B5CF6 0%, #6D28D9 60%, transparent 100%)" }}
        />
        {/* Gold bottom-center blob */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute bottom-[-80px] left-[20%] w-[420px] h-[420px] rounded-full opacity-[0.12] blur-[70px]"
          style={{ background: "radial-gradient(circle, #F5A623 0%, #E07B00 60%, transparent 100%)" }}
        />
        {/* Blue accent top-right */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], x: [0, -15, 0], y: [0, 25, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 7 }}
          className="absolute top-[-50px] right-[10%] w-[280px] h-[280px] rounded-full opacity-[0.10] blur-[60px]"
          style={{ background: "radial-gradient(circle, #38BDF8 0%, #0284C7 60%, transparent 100%)" }}
        />
        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        {/* Dark text-protection gradient - bottom half dark overlay keeps text sharp */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(10,10,15,0.55) 0%, rgba(10,10,15,0.2) 50%, rgba(10,10,15,0.45) 100%)" }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex-1 flex flex-col max-w-6xl mx-auto w-full px-5 sm:px-6"
      >
        {/* ── Mobile layout: spread top→bottom; Desktop: centered ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex-1 flex flex-col sm:justify-center sm:max-w-4xl pt-40 sm:pt-34 pb-4 sm:pb-16"
        >
          {/* Badge */}
          <motion.div variants={item} className="mb-7 sm:mb-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-coral/30 bg-coral/10">
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-coral"
              />
              <span className="text-coral text-xs font-bold tracking-widest uppercase">
                Product Specialist · Zepto · Bengaluru
              </span>
            </div>
          </motion.div>

          {/* Headline with word cycle */}
          <motion.h1
            variants={item}
            className="font-display font-extrabold text-white leading-[1.05] tracking-tight mb-8 sm:mb-6"
            style={{ fontSize: "clamp(1.6rem, 6vw, 5.2rem)" }}
          >
            I build{" "}
            <WordCycle />
            <br />
            <span className="text-ink-400">
              At the intersection of product, data & AI.
            </span>
          </motion.h1>

          {/* Subline - one line on mobile */}
          <motion.div variants={item} className="mb-8 sm:mb-10">
            <p className="text-ink-500 text-xs sm:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
              Previously-&nbsp;<span className="text-ink-400">Superset · Unacademy · Prorata · Pinewheel</span>
            </p>
          </motion.div>

          {/* CTAs - mobile: stacked 2-row; desktop: single row */}
          <motion.div variants={item} className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-5 sm:gap-3 mb-8 sm:mb-14">
            {/* Row 1: Primary CTA */}
            <Link
              href="/case-studies"
              className="flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base bg-coral text-white font-bold rounded-xl hover:bg-coral-600 transition-all shadow-lg shadow-coral/25 hover:shadow-coral/40 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              View Case Studies
              <ArrowRight size={15} />
            </Link>
            {/* Row 2: Secondary row - Resume + LinkedIn + GitHub - centered */}
            <div className="flex items-center justify-center gap-2.5 sm:justify-start">
              <a
                href={hero.links.resume}
                download
                className="flex items-center gap-1.5 px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm border border-white/20 text-white font-semibold rounded-xl hover:border-coral/50 hover:bg-coral/10 transition-all"
              >
                <Download size={13} />
                Resume
              </a>
              <a href={hero.links.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm border border-white/10 text-ink-300 font-semibold rounded-xl hover:text-coral hover:border-coral/40 transition-all">
                <LinkedInIcon size={13} />
                <span>LinkedIn</span>
              </a>
              <a href={hero.links.github} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl border border-white/10 text-ink-400 hover:text-white hover:border-white/30 transition-all">
                <GitHubIcon size={15} />
              </a>
            </div>
          </motion.div>

          {/* Impact cards - 4-col compact strip */}
          <motion.div variants={item}>
            <div className="grid grid-cols-4 sm:flex sm:flex-wrap gap-2 sm:gap-3">
              {impactCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="flex flex-col items-center justify-center text-center gap-0.5 px-2 py-3 sm:flex-row sm:items-center sm:gap-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-sm cursor-default"
                >
                  <span className={`font-display font-extrabold text-base sm:text-xl leading-none ${card.color}`}>
                    <CountUp target={card.target} suffix={card.suffix} prefix={card.prefix} />
                  </span>
                  <span className="text-ink-500 text-[9px] sm:text-xs font-medium leading-tight sm:max-w-[80px]">{card.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Spacer pushes scroll cue to bottom on mobile */}
          <div className="flex-1 sm:hidden" />
        </motion.div>
      </motion.div>

      {/* Scroll cue - sits at bottom of screen */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollTo("#quickscan")}
        className="relative z-10 mb-6 sm:mb-8 mx-auto flex flex-col items-center gap-2 text-ink-600 hover:text-coral transition-colors cursor-pointer"
      >
        <span className="text-[10px] font-bold tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  );
}
