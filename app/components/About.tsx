"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { about, achievements, mindChanges, skills } from "@/app/data/content";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-3">About</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink">
            {about.positioning}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-16">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-5 mb-12">
              {about.bio.map((para, i) => (
                <p key={i} className="text-ink-600 text-lg leading-[1.85]">{para}</p>
              ))}
            </div>

            <p className="text-ink-400 text-sm">{about.education}</p>

            {/* Skills */}
            <div className="mt-12">
              <p className="section-label mb-6">Skills & Tools</p>
              <div className="space-y-6">
                {skills.map((group) => (
                  <div key={group.category}>
                    <p className="text-xs font-bold text-ink-400 uppercase tracking-wider mb-3">
                      {group.icon} {group.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-ink-50 text-ink-600 text-xs font-medium rounded-lg border border-ink-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Achievements + Mind Changes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-10"
          >
            {/* Achievements */}
            <div>
              <p className="section-label mb-5">Highlights</p>
              <div className="space-y-3">
                {achievements.map((a, i) => (
                  <div
                    key={i}
                    className="flex gap-3 p-4 border border-ink-200 rounded-xl hover:border-blue hover:-translate-y-0.5 transition-all"
                  >
                    <span className="text-xl flex-shrink-0">{a.icon}</span>
                    <div>
                      <p className="font-semibold text-ink text-sm">{a.title}</p>
                      <p className="text-ink-400 text-xs mt-0.5">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mind Changes */}
            <div>
              <p className="section-label mb-5">Things I've changed my mind about</p>
              <div className="space-y-4">
                {mindChanges.map((m, i) => (
                  <div key={i} className="border-l-2 border-ink-200 pl-4">
                    <p className="font-display font-bold text-ink text-sm mb-1">
                      &ldquo;{m.quote}&rdquo;
                    </p>
                    <p className="text-ink-400 text-xs leading-relaxed">{m.context}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
