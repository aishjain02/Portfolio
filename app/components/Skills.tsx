"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/app/data/content";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-coral-50 text-coral text-sm font-semibold rounded-full mb-4">
            Skills & Tools
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink">
            What I work with
          </h2>
          <p className="text-ink-400 mt-4 text-lg max-w-xl mx-auto">
            Product thinking backed by data, design, and automation tools.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-cream rounded-2xl border border-cream-200 p-7 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ backgroundColor: group.color + "20" }}
                >
                  {group.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink text-lg">
                    {group.category}
                  </h3>
                  <div
                    className="h-0.5 w-8 rounded-full mt-1"
                    style={{ backgroundColor: group.color }}
                  />
                </div>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-white text-ink-500 text-sm font-medium rounded-lg border border-cream-200 hover:border-opacity-100 transition-all hover:-translate-y-0.5 cursor-default"
                    style={{ borderColor: group.color + "30" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-ink-300 text-sm">
            Always learning, always shipping.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
