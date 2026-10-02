"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitHubIcon } from "@/app/components/icons";
import { Zap, FlaskConical, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { shipped, experiments } from "@/app/data/content";

type BuildItem = {
  title: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  tags: string[];
  github?: string;
  slug?: string;
};

const starLabels = [
  { key: "situation" as const, label: "S - Situation", color: "bg-ink-50", labelColor: "text-ink-400" },
  { key: "task" as const, label: "T - Task", color: "bg-amber-50", labelColor: "text-amber-600" },
  { key: "action" as const, label: "A - Action", color: "bg-blue-50", labelColor: "text-blue-600" },
];

function BuildCard({ item, i }: { item: BuildItem; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, delay: i * 0.07 }}
      className="group rounded-2xl border border-ink-200 bg-white overflow-hidden card-hover flex flex-col"
    >
      {/* Card header */}
      <div className="px-3 sm:px-5 pt-3 sm:pt-4 pb-2 sm:pb-3 border-b border-ink-100">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-extrabold text-ink text-lg leading-snug">{item.title}</h3>
          <div className="flex gap-2 flex-shrink-0">
            {item.slug && (
              <Link href={`/case-studies/${item.slug}`}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-coral-200 bg-coral-50 text-coral hover:bg-coral hover:text-white transition-all"
                title="Read case study">
                <ArrowRight size={13} />
              </Link>
            )}
            {item.github && (
              <a href={item.github} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-ink-200 bg-ink-50 text-ink-500 hover:bg-ink hover:text-white transition-all"
                title="View on GitHub">
                <GitHubIcon size={13} />
              </a>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {item.tags.map(t => (
            <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-ink-50 border border-ink-200 text-ink-500">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* S / T / A grid - flex-1 so it stretches, equal min-h per cell */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-ink-100 flex-1">
        {starLabels.map(({ key, label, color, labelColor }) => (
          <div key={key} className={`${color} p-3 flex flex-col min-h-[110px]`}>
            <p className={`text-[9px] font-extrabold uppercase tracking-widest mb-1.5 ${labelColor}`}>{label}</p>
            <p className="text-ink-700 text-xs leading-relaxed">{item[key]}</p>
          </div>
        ))}
      </div>

      {/* Result bar - always pinned to bottom */}
      <div className="px-3 sm:px-5 py-2.5 sm:py-3 border-t border-ink-100 bg-white flex items-start gap-2">
        <span className="text-coral font-extrabold text-[10px] uppercase tracking-wider flex-shrink-0 mt-0.5">Result</span>
        <p className="text-ink-600 text-xs leading-relaxed">{item.result}</p>
      </div>
    </motion.div>
  );
}

export default function Builds() {
  const [tab, setTab] = useState<"shipped" | "experiments">("shipped");
  const items = tab === "shipped" ? shipped : experiments;

  return (
    <section id="builds" className="py-6 sm:py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 sm:mb-10"
        >
          <span className="label block mb-3">Builds</span>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
            <h2 className="font-display font-extrabold text-ink text-xl sm:text-3xl leading-tight">
              Things I've shipped (& attempted).
            </h2>

            {/* Tab toggle */}
            <div className="flex items-center p-1 rounded-xl bg-ink-100 border border-ink-200 w-fit self-start sm:self-auto">
              {[
                { id: "shipped", label: "Shipped", Icon: Zap },
                { id: "experiments", label: "Experiments", Icon: FlaskConical },
              ].map(({ id, label, Icon }) => (
                <button
                  key={id}
                  onClick={() => setTab(id as typeof tab)}
                  className={`flex items-center gap-1 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    tab === id
                      ? "bg-coral text-white shadow-md shadow-coral/20"
                      : "text-ink-500 hover:text-ink"
                  }`}
                >
                  <Icon size={13} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="grid sm:grid-cols-2 gap-3 sm:gap-5"
          >
            {items.map((item, i) => (
              <BuildCard key={item.title} item={item as BuildItem} i={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
