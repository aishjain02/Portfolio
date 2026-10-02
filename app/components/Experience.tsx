"use client";

import { motion } from "framer-motion";
import { experience } from "@/app/data/content";

const companyColors: Record<string, { bg: string; text: string; dot: string }> = {
  Zepto: { bg: "bg-violet-100", text: "text-violet-700", dot: "bg-violet-500" },
  Superset: { bg: "bg-blue-100", text: "text-blue-700", dot: "bg-blue-500" },
  Unacademy: { bg: "bg-emerald-100", text: "text-emerald-700", dot: "bg-emerald-500" },
  Prorata: { bg: "bg-orange-100", text: "text-orange-700", dot: "bg-orange-500" },
  Pinewheel: { bg: "bg-pink-100", text: "text-pink-700", dot: "bg-pink-500" },
};

export default function Experience() {
  return (
    <section id="experience" className="py-6 sm:py-16 bg-cream-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 sm:mb-8"
        >
          <span className="label block mb-3">Experience</span>
          <h2 className="font-display font-extrabold text-ink text-xl sm:text-3xl leading-tight">
            Where I've built.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {experience.map((job, i) => {
            const co = companyColors[job.company] ?? { bg: "bg-ink-100", text: "text-ink-600", dot: "bg-ink-400" };
            return (
              <motion.div
                key={job.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group rounded-2xl border border-ink-200 bg-white p-3 sm:p-5 card-hover"
              >
                <div className="flex flex-col gap-3">
                  {/* Top row: company badge + period */}
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl ${co.bg}`}>
                      <div className={`w-2 h-2 rounded-full ${co.dot}`} />
                      <span className={`font-display font-extrabold text-sm ${co.text}`}>{job.company}</span>
                    </div>
                    <span className="text-xs font-semibold text-ink-500 bg-ink-50 border border-ink-200 px-2.5 py-1 rounded-lg whitespace-nowrap">{job.period}</span>
                  </div>

                  {/* Role + location */}
                  <div className="flex-1 min-w-0">
                    <div className="mb-3">
                      <h3 className="font-display font-extrabold text-ink text-sm sm:text-lg leading-snug">{job.role}</h3>
                      <p className="text-ink-400 text-xs mt-0.5">{job.location}</p>
                    </div>
                    <ul className="space-y-2.5">
                      {job.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-3 text-ink-600 text-sm leading-relaxed">
                          <span className="text-coral font-bold flex-shrink-0 mt-0.5">→</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
