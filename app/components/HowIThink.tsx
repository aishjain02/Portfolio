"use client";

import { motion } from "framer-motion";
import { principles } from "@/app/data/content";

const accent = ["#FF6B4A", "#F5A623", "#8B5CF6", "#10B981", "#3B82F6"];

export default function HowIThink() {
  return (
    <section id="how-i-think" className="py-6 sm:py-16 bg-ink overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#FF6B4A 1px, transparent 1px), linear-gradient(90deg, #FF6B4A 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-coral/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 sm:mb-10"
        >
          <span className="label block mb-3">Product Philosophy</span>
          <h2 className="font-display font-extrabold text-white text-xl sm:text-3xl">
            How I think.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-coral/60 via-white/10 to-transparent" />

          <div className="space-y-0">
            {principles.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative flex gap-4 sm:gap-6 pb-5 sm:pb-8 last:pb-0"
              >
                {/* Dot */}
                <div className="relative flex-shrink-0 w-10 flex justify-center">
                  <div
                    className="w-4 h-4 rounded-full border-2 border-ink mt-1 flex-shrink-0 group-hover:scale-125 transition-transform"
                    style={{ backgroundColor: accent[i], borderColor: "#0A0A0F", boxShadow: `0 0 10px ${accent[i]}60` }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 pt-0">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest" style={{ color: accent[i] }}>
                      {p.number}
                    </span>
                    <h3 className="font-display font-extrabold text-white text-base leading-snug">{p.title}</h3>
                  </div>
                  <p className="text-ink-400 text-sm leading-relaxed">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
