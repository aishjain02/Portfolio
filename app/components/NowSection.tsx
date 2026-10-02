"use client";

import { motion } from "framer-motion";
import { now } from "@/app/data/content";
import { MapPin } from "lucide-react";

const icons = ["💼", "🎯", "🔭"];

export default function NowSection() {
  return (
    <section className="py-6 sm:py-16 bg-ink-900 relative overflow-hidden">
      {/* Subtle warm glow - not harsh */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-coral opacity-[0.06] blur-3xl pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-coral/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 sm:mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-coral/15 border border-coral/25">
              <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-coral"
              />
              <span className="text-coral text-xs font-bold tracking-widest uppercase">Live Update</span>
            </div>
          </div>
          <h2 className="font-display font-extrabold text-white text-xl sm:text-3xl">
            Right now
          </h2>
          <p className="text-ink-400 text-sm mt-2 flex items-center gap-1.5">
            <MapPin size={12} /> Bengaluru, India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4">
          {now.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:p-4 hover:bg-white/[0.07] hover:border-coral/30 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{icons[i]}</span>
                <p className="text-coral text-[10px] font-extrabold uppercase tracking-widest">{item.label}</p>
              </div>
              <p className="text-ink-300 text-xs sm:text-sm leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
