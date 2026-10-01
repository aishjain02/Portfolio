"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { GitHubIcon } from "@/app/components/icons";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { shipped, experiments } from "@/app/data/content";

type BuildItem = {
  title: string;
  problem: string;
  insight: string;
  idea: string;
  test: string;
  tags: string[];
  github?: string;
  slug?: string;
};

function BuildCard({ item, i, isInView }: { item: BuildItem; i: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: i * 0.07 }}
      className="group p-6 border border-ink-200 rounded-xl hover:border-blue hover:shadow-sm transition-all"
    >
      {/* Title row */}
      <div className="flex items-start justify-between gap-3 mb-5">
        <h3 className="font-display font-bold text-ink text-lg group-hover:text-blue transition-colors">
          {item.title}
        </h3>
        <div className="flex gap-1.5 flex-shrink-0 mt-0.5">
          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-ink-200 text-ink-400 hover:text-ink hover:border-ink transition-all"
              aria-label="GitHub"
            >
              <GitHubIcon size={14} />
            </a>
          )}
          {item.slug && (
            <Link
              href={`/case-studies/${item.slug}`}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-ink-200 text-ink-400 hover:text-blue hover:border-blue transition-all"
              aria-label="Case Study"
            >
              <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </div>

      {/* Four-quadrant detail */}
      <div className="grid sm:grid-cols-2 gap-4 mb-5">
        {[
          { label: "Problem", text: item.problem },
          { label: "Insight", text: item.insight },
          { label: "Idea", text: item.idea },
          { label: "Test", text: item.test },
        ].map(({ label, text }) => (
          <div key={label}>
            <p className="text-xs font-bold text-ink-400 uppercase tracking-wider mb-1">{label}</p>
            <p className="text-ink-500 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((t) => (
          <span key={t} className="px-2 py-0.5 bg-ink-50 text-ink-500 text-xs rounded border border-ink-200">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Builds() {
  const [tab, setTab] = useState<"shipped" | "experiments">("shipped");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const items = tab === "shipped" ? shipped : experiments;

  return (
    <section id="builds" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="section-label mb-3">Builds</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink mb-6">
            Things I built
          </h2>

          {/* Tab Toggle */}
          <div className="inline-flex border border-ink-200 rounded-lg p-1">
            {(["shipped", "experiments"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 rounded-md text-sm font-semibold capitalize transition-all cursor-pointer ${
                  tab === t
                    ? "bg-ink text-white"
                    : "text-ink-500 hover:text-ink"
                }`}
              >
                {t === "shipped" ? "Shipped" : "Experiments"}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 gap-5"
          >
            {items.map((item, i) => (
              <BuildCard key={item.title} item={item as BuildItem} i={i} isInView={isInView} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
