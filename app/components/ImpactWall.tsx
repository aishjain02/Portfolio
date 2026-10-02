"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { impacts } from "@/app/data/content";
import { TrendingUp } from "lucide-react";

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 4);
      setCount(parseFloat((ease * target).toFixed(target % 1 !== 0 ? 1 : 0)));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const storyItems = [
  {
    what: "Built Zepto Event Helper - AI Automation workflow unifying homepage event setup, creatives, validation and production rollout",
    result: "Reduced launch time by 30 min/event, cut manual effort by 80%, eliminated 90% of scheduling errors",
    metric: "–90% errors",
    company: "Zepto",
    color: "border-violet-400/40",
    glow: "group-hover:shadow-violet-500/10",
  },
  {
    what: "Owned 25+ homepage merchandising campaigns across FMCG, Electronics, Fashion & Seasonal",
    result: "Drove 20M+ customer impressions and 1.5M+ interactions across Zepto's homepage surface",
    metric: "20M+ impressions",
    company: "Zepto",
    color: "border-coral/40",
    glow: "group-hover:shadow-coral/10",
  },
  {
    what: "Analyzed 150+ assessment sessions at Superset to identify user friction and platform integrity issues",
    result: "Built VIBE - an AI-assisted integrity system using computer vision + human behavioral signals",
    metric: "150+ sessions",
    company: "Superset",
    color: "border-blue-400/40",
    glow: "group-hover:shadow-blue-500/10",
  },
  {
    what: "Built SQL-based validation frameworks for widget configurations, deeplink verification and launch QC",
    result: "Improved reliability of high-volume homepage launches at scale - zero missed validation steps",
    metric: "Zero misses",
    company: "Zepto",
    color: "border-gold/40",
    glow: "group-hover:shadow-gold/10",
  },
];

export default function ImpactWall() {
  return (
    <section className="relative bg-ink overflow-hidden py-6 sm:py-16">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #FF6B4A 1px, transparent 1px)", backgroundSize: "48px 48px" }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-coral/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-coral/40 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 sm:mb-10 text-center">
          <span className="label block mb-2">Impact</span>
          <h2 className="font-display font-extrabold text-white text-lg sm:text-3xl mb-1.5">
            Numbers I moved.
          </h2>
          <p className="text-ink-500 text-xs sm:text-sm max-w-xs mx-auto">Real metrics from real products. Not projections.</p>
        </motion.div>

        {/* Animated metric tiles - mobile: horizontal scroll; desktop: grid */}
        <div className="mb-8 sm:mb-14">
          {/* Mobile horizontal scroll */}
          <div className="sm:hidden overflow-x-auto scrollbar-hide -mx-5 px-5">
            <div className="flex gap-2.5 pb-1" style={{ width: "max-content" }}>
              {impacts.map((impact, i) => (
                <motion.div
                  key={impact.label}
                  initial={{ opacity: 0, y: 16, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-xl border border-white/10 bg-white/[0.05] p-3 cursor-default flex-shrink-0 w-28"
                >
                  <p className="text-coral text-[8px] font-extrabold tracking-widest uppercase mb-1.5">{impact.category}</p>
                  <p className="text-white font-display font-extrabold text-lg leading-none mb-1">
                    <AnimatedNumber target={impact.number} suffix={impact.suffix} />
                  </p>
                  <p className="text-ink-500 text-[9px] leading-snug">{impact.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Desktop grid */}
          <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {impacts.map((impact, i) => (
              <motion.div
                key={impact.label}
                initial={{ opacity: 0, y: 24, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="group relative rounded-xl border border-white/10 bg-white/[0.04] p-3.5 hover:border-coral/40 hover:bg-coral/[0.07] transition-all duration-300 cursor-default"
              >
                <div className="absolute inset-0 rounded-xl bg-coral/5 opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
                <div className="relative">
                  <p className="text-coral text-[10px] font-extrabold tracking-widest uppercase mb-3">{impact.category}</p>
                  <p className="text-white font-display font-extrabold text-3xl mb-1 leading-none">
                    <AnimatedNumber target={impact.number} suffix={impact.suffix} />
                  </p>
                  <p className="text-ink-500 text-[11px] leading-snug">{impact.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What I did → What it did */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-4 sm:mb-10 flex items-center gap-3">
          <TrendingUp size={14} className="text-coral" />
          <span className="label text-[10px] sm:text-xs">What I did → What it did</span>
          <div className="flex-1 h-px bg-white/10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-4">
          {storyItems.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className={`group rounded-xl border ${s.color} bg-white/[0.03] p-2.5 sm:p-3.5 hover:bg-white/[0.06] transition-all duration-300`}
            >
              <div className="flex items-start gap-2 mb-2">
                <span className="text-[9px] font-extrabold text-coral uppercase tracking-widest bg-coral/10 px-1.5 py-0.5 rounded-md flex-shrink-0">{s.company}</span>
                <span className="text-white font-bold text-[10px] px-1.5 py-0.5 rounded-md bg-white/10">{s.metric}</span>
              </div>
              <p className="text-ink-300 text-xs leading-relaxed mb-2">
                <span className="text-white font-semibold">I:</span> {s.what}
              </p>
              <div className="flex gap-1.5 items-start">
                <span className="text-coral font-bold text-xs flex-shrink-0">→</span>
                <p className="text-ink-400 text-xs leading-relaxed">{s.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
