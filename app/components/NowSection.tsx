"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { now } from "@/app/data/content";

export default function NowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-blue-600" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-3">
            Right Now
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            What I'm working on
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {now.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="bg-blue-600 px-6 py-8"
            >
              <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-4">
                {item.label}
              </p>
              <p className="text-white text-sm leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
