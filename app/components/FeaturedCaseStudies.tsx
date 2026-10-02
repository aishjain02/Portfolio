"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { featuredCaseStudies } from "@/app/data/content";

const palette = [
  { bg: "bg-coral-50", border: "border-coral-200", num: "text-coral/25", badge: "bg-coral-100 text-coral-700" },
  { bg: "bg-blue-50", border: "border-blue-200", num: "text-blue-900/15", badge: "bg-blue-100 text-blue-700" },
  { bg: "bg-amber-50", border: "border-amber-200", num: "text-amber-900/15", badge: "bg-amber-100 text-amber-700" },
  { bg: "bg-emerald-50", border: "border-emerald-200", num: "text-emerald-900/15", badge: "bg-emerald-100 text-emerald-700" },
];

export default function FeaturedCaseStudies() {
  return (
    <section id="case-studies" className="py-6 sm:py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 sm:mb-8"
        >
          <span className="label block mb-3">Case Studies</span>
          <h2 className="font-display font-extrabold text-ink text-2xl sm:text-4xl leading-tight">
            How I think when things break.
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6 sm:mb-8">
          {featuredCaseStudies.map((cs, i) => {
            const pal = palette[i % palette.length];
            return (
              <motion.div
                key={cs.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className={`group block relative rounded-2xl border ${pal.bg} ${pal.border} p-3 sm:p-5 card-hover overflow-hidden h-full`}
                >
                  {/* Big faded number */}
                  <span className={`absolute top-4 right-6 font-display font-extrabold text-8xl leading-none pointer-events-none select-none ${pal.num}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative">
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full ${pal.badge}`}>
                        {cs.type}
                      </span>
                      {cs.tags.slice(0, 2).map(t => (
                        <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/60 text-ink-500 border border-ink-200">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Company + role */}
                    <p className="text-ink-500 text-xs font-semibold uppercase tracking-wider mb-1">{cs.company}</p>
                    <h3 className="font-display font-extrabold text-ink text-xl sm:text-2xl leading-snug mb-3">
                      {cs.title}
                    </h3>

                    {/* Problem */}
                    <p className="text-ink-600 text-sm leading-relaxed mb-4">{cs.problem}</p>

                    {/* Hook quote */}
                    {cs.hook && (
                      <div className="mb-5 flex gap-3 p-3 rounded-xl bg-white/50 border border-ink-200">
                        <Quote size={14} className="text-coral flex-shrink-0 mt-0.5" />
                        <p className="text-ink-700 text-xs italic leading-relaxed">{cs.hook}</p>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="flex items-center gap-1.5 text-coral text-sm font-bold group-hover:gap-3 transition-all">
                      Read Case Study <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-ink-200 text-ink-600 text-sm font-semibold hover:border-coral/50 hover:text-coral hover:bg-coral-50 transition-all"
          >
            View all case studies <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
