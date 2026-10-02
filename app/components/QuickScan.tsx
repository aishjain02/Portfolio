"use client";

import { motion } from "framer-motion";
import { quickScan } from "@/app/data/content";

export default function QuickScan() {
  return (
    <section id="quickscan" className="bg-ink-900 border-y border-white/5">
      {/* Mobile: 2×2 full-width grid */}
      <div className="sm:hidden grid grid-cols-2">
        {quickScan.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={[
              "px-5 py-5",
              i % 2 === 0 ? "border-r border-white/10" : "",
              i < 2 ? "border-b border-white/10" : "",
            ].join(" ")}
          >
            <p className="text-[9px] font-extrabold tracking-widest text-coral uppercase mb-2">{item.label}</p>
            <p className="text-white font-display font-extrabold text-sm leading-snug mb-1">{item.value}</p>
            {item.sub && <p className="text-ink-500 text-[10px] leading-relaxed">{item.sub}</p>}
          </motion.div>
        ))}
      </div>

      {/* Desktop: 4-col grid */}
      <div className="hidden sm:block max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-4">
          {quickScan.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`px-6 py-6 ${i < 3 ? "border-r border-white/10" : ""}`}
            >
              <p className="text-[10px] font-bold tracking-widest text-coral uppercase mb-1.5">{item.label}</p>
              <p className="text-white font-display font-extrabold text-base leading-snug mb-0.5">{item.value}</p>
              {item.sub && <p className="text-ink-500 text-xs leading-relaxed">{item.sub}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
