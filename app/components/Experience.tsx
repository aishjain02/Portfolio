"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/app/data/content";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 bg-ink-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Experience</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink">
            Where I've built
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experience.map((job, i) => (
            <motion.div
              key={job.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="grid lg:grid-cols-[200px_1fr] gap-8 py-10 border-b border-ink-200 last:border-0"
            >
              {/* Left — Meta */}
              <div className="flex lg:flex-col gap-4 lg:gap-2">
                <span
                  className="font-display font-bold text-3xl"
                  style={{ color: job.color }}
                >
                  {job.number}
                </span>
                <div>
                  <p className="font-display font-bold text-ink text-lg leading-tight">{job.company}</p>
                  <p className="text-ink-400 text-xs mt-1">{job.period}</p>
                  <p className="text-ink-400 text-xs">{job.location}</p>
                </div>
              </div>

              {/* Right — Content */}
              <div>
                <p className="font-semibold text-ink-600 text-sm mb-5">{job.role}</p>
                <ul className="space-y-3">
                  {job.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3 text-ink-600 text-sm leading-relaxed">
                      <span className="text-blue font-bold flex-shrink-0 mt-0.5">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
