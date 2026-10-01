"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { principles } from "@/app/data/content";

export default function HowIThink() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-i-think" className="py-24 bg-ink-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Product Philosophy</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink">
            How I think
          </h2>
        </motion.div>

        <div className="space-y-0">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="grid sm:grid-cols-[80px_1fr] gap-6 py-10 border-b border-ink-200 last:border-0 group"
            >
              <span className="font-display font-extrabold text-4xl text-ink-200 group-hover:text-blue transition-colors">
                {p.number}
              </span>
              <div>
                <h3 className="font-display font-bold text-xl text-ink mb-3">{p.title}</h3>
                <p className="text-ink-500 text-base leading-relaxed max-w-2xl">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
