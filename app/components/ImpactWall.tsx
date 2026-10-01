"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { impacts } from "@/app/data/content";

function AnimatedNumber({ target }: { target: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);
  const [display, setDisplay] = useState("0");
  const isInView = useInView(ref, { once: true });

  const numericStr = target.replace(/[^0-9.]/g, "");
  const prefix = target.match(/^[^0-9]*/)?.[0] ?? "";
  const suffix = target.match(/[^0-9.]+$/)?.[0] ?? "";

  useEffect(() => {
    if (!isInView || done) return;
    setDone(true);
    const end = parseFloat(numericStr);
    const duration = 1600;
    const start = Date.now();
    const timer = setInterval(() => {
      const p = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(String(Math.round(eased * end)));
      if (p >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, done, numericStr]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

export default function ImpactWall() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-ink" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label mb-12"
          style={{ color: "#60A5FA" }}
        >
          Impact
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10">
          {impacts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-ink px-8 py-10"
            >
              <div className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-2 tabular-nums">
                <AnimatedNumber target={item.value} />
              </div>
              <p className="text-ink-300 text-sm font-medium leading-snug mb-1">{item.label}</p>
              <p className="text-ink-500 text-xs">{item.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
