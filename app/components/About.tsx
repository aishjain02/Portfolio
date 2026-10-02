"use client";

import { motion } from "framer-motion";
import { about, achievements, mindChanges, skills } from "@/app/data/content";
import { RefreshCw, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-6 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 sm:mb-8"
        >
          <span className="label block mb-3">About</span>
          <h2 className="font-display font-extrabold text-ink text-xl sm:text-3xl leading-tight max-w-2xl">
            {about.positioning}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">
          {/* Left - Bio + Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-5 mb-8">
              {about.bio.map((para, i) => (
                <p key={i} className="text-ink-600 text-sm sm:text-base leading-relaxed">{para}</p>
              ))}
            </div>
            <p className="text-ink font-bold text-sm mb-12">{about.education}</p>

            {/* Skills */}
            <div>
              <span className="label block mb-6">Skills & Tools</span>
              <div className="space-y-5">
                {skills.map((group) => (
                  <div key={group.category}>
                    <p className="text-xs font-bold text-ink-400 uppercase tracking-wider mb-2.5">
                      {group.icon} {group.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span key={skill}
                          className="px-3 py-1.5 rounded-xl bg-cream border border-ink-200 text-ink-700 text-xs font-semibold hover:border-coral/40 hover:bg-coral-50 transition-all cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Achievements + Mind Changes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Achievements */}
            <div className="rounded-2xl border border-gold-100 bg-gold-50 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award size={15} className="text-gold-600" />
                <span className="text-gold-600 text-xs font-bold uppercase tracking-widest">Recognition</span>
              </div>
              <ul className="space-y-3">
                {achievements.map((a, i) => (
                  <li key={i} className="flex gap-3 text-sm text-ink-700 leading-relaxed">
                    <span className="flex-shrink-0 text-lg leading-none">{a.icon}</span>
                    <div>
                      <p className="font-semibold text-ink text-sm">{a.title}</p>
                      <p className="text-ink-500 text-xs">{a.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mind changes */}
            <div className="rounded-2xl border border-ink-200 bg-cream p-6">
              <div className="flex items-center gap-2 mb-4">
                <RefreshCw size={14} className="text-coral" />
                <span className="text-coral text-xs font-bold uppercase tracking-widest">Changed My Mind</span>
              </div>
              <ul className="space-y-4">
                {mindChanges.map((m, i) => (
                  <li key={i} className="text-sm">
                    <p className="text-coral font-bold mb-0.5">&ldquo;{m.quote}&rdquo;</p>
                    <p className="text-ink-500 text-xs leading-relaxed">{m.context}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
