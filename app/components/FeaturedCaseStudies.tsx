"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { featuredCaseStudies } from "@/app/data/content";

const typeColors: Record<string, string> = {
  Shipped: "bg-blue-50 text-blue-700",
  "Case Study": "bg-amber-50 text-amber-600",
  "Product Concept": "bg-ink-100 text-ink-600",
};

export default function FeaturedCaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="case-studies" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-12 flex-wrap gap-4"
        >
          <div>
            <p className="section-label mb-3">Case Studies</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink">
              Featured work
            </h2>
          </div>
          <p className="text-ink-400 text-sm max-w-xs leading-relaxed">
            Real problems. Structured thinking. Measurable outcomes.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {featuredCaseStudies.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group flex flex-col h-full p-7 border border-ink-200 rounded-xl hover:border-blue hover:shadow-md transition-all"
              >
                {/* Top row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display font-bold text-4xl text-ink-200 group-hover:text-blue-100 transition-colors">
                    {cs.number}
                  </span>
                  <span className={`px-2.5 py-1 rounded text-xs font-bold ${typeColors[cs.type] ?? "bg-ink-100 text-ink-600"}`}>
                    {cs.type}
                  </span>
                </div>

                {/* Company + tags */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="text-xs font-semibold text-ink-400 uppercase tracking-wider">{cs.company}</span>
                  {cs.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-ink-50 text-ink-500 text-xs rounded border border-ink-200">{t}</span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-ink mb-3 group-hover:text-blue transition-colors">
                  {cs.title}
                </h3>

                {/* Problem */}
                <p className="text-ink-500 text-sm leading-relaxed mb-5 flex-1">{cs.problem}</p>

                {/* Hook */}
                <blockquote className="text-ink-400 text-sm italic border-l-2 border-ink-200 pl-3 mb-6 leading-relaxed group-hover:border-blue group-hover:text-ink-600 transition-all">
                  &ldquo;{cs.hook}&rdquo;
                </blockquote>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-sm font-semibold text-blue group-hover:gap-2.5 transition-all">
                  Read Case Study
                  <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
