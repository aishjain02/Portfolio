"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { quickScan } from "@/app/data/content";

export default function QuickScan() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="quickscan" className="border-y border-ink-200 bg-ink-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-ink-200">
          {quickScan.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="px-6 py-6"
            >
              <p className="section-number mb-2">{item.label}</p>
              <p className="font-display font-semibold text-ink text-sm leading-snug">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
