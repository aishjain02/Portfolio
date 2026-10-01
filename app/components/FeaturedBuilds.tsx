"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { featuredBuilds } from "@/app/data/content";

function Tag({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold text-white"
      style={{ backgroundColor: color + "CC" }}
    >
      {label}
    </span>
  );
}

function BuildCard({ build, index, isInView }: {
  build: (typeof featuredBuilds)[0];
  index: number;
  isInView: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="group bg-white rounded-3xl border border-cream-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
    >
      {/* Top accent bar */}
      <div
        className="h-1.5 w-full"
        style={{ backgroundColor: build.accentColor }}
      />

      <div className="p-7">
        {/* Header Row */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span
                className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md text-white"
                style={{ backgroundColor: build.accentColor + "99" }}
              >
                {build.company}
              </span>
              {build.tags.map((tag) => (
                <Tag key={tag} label={tag} color={build.accentColor} />
              ))}
            </div>
            <h3 className="font-display font-bold text-2xl text-ink">{build.title}</h3>
            <p className="text-ink-400 text-sm mt-1">{build.subtitle}</p>
          </div>
        </div>

        {/* Problem (always visible) */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-1 h-4 rounded-full"
              style={{ backgroundColor: build.accentColor }}
            />
            <span className="text-xs font-bold uppercase tracking-wider text-ink-400">
              Problem
            </span>
          </div>
          <p className="text-ink-500 text-sm leading-relaxed pl-3">{build.problem}</p>
        </div>

        {/* Expand/Collapse */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0 }}
          className="overflow-hidden"
        >
          <div className="flex flex-col gap-5 pt-2">
            {/* Solution */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-1 h-4 rounded-full"
                  style={{ backgroundColor: build.accentColor }}
                />
                <span className="text-xs font-bold uppercase tracking-wider text-ink-400">
                  Solution
                </span>
              </div>
              <p className="text-ink-500 text-sm leading-relaxed pl-3">{build.solution}</p>
            </div>

            {/* Impact */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-1 h-4 rounded-full"
                  style={{ backgroundColor: build.accentColor }}
                />
                <span className="text-xs font-bold uppercase tracking-wider text-ink-400">
                  Impact
                </span>
              </div>
              <ul className="flex flex-col gap-1.5 pl-3">
                {build.impact.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: build.accentColor }}
                    />
                    <span className="text-ink-500">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-5 flex items-center gap-1.5 text-xs font-semibold transition-colors cursor-pointer"
          style={{ color: build.accentColor }}
        >
          {expanded ? (
            <>
              <ChevronUp size={14} /> Show less
            </>
          ) : (
            <>
              <ChevronDown size={14} /> Solution & Impact
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}

export default function FeaturedBuilds() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="builds" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-coral-50 text-coral text-sm font-semibold rounded-full mb-4">
            Featured Builds
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink">
            What I've built
          </h2>
          <p className="text-ink-400 mt-4 text-lg max-w-2xl mx-auto">
            From AI automation workflows to 0→1 product concepts — each with a
            real problem, a clear solution, and measurable outcomes.
          </p>
        </motion.div>

        {/* Grid — 2 columns on desktop */}
        <div className="grid md:grid-cols-2 gap-6">
          {featuredBuilds.map((build, i) => (
            <BuildCard key={build.id} build={build} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
