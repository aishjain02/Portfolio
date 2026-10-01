"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, MapPin, GraduationCap } from "lucide-react";
import { about } from "@/app/data/content";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-coral-50 text-coral text-sm font-semibold rounded-full mb-4">
            About Me
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink">
            The story so far
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6"
          >
            {/* Profile Photo Placeholder */}
            <div className="relative">
              <div className="w-52 h-52 rounded-3xl bg-coral-50 border-4 border-coral-100 flex items-center justify-center overflow-hidden shadow-lg">
                <div className="flex flex-col items-center gap-2 text-coral-300">
                  <User size={64} strokeWidth={1} />
                  <span className="text-xs text-ink-300 font-medium">
                    Add your photo
                  </span>
                </div>
              </div>
              {/* Decorative blob */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl bg-gold opacity-20 -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-xl bg-coral opacity-15 -z-10" />
            </div>

            {/* Location + Education */}
            <div className="flex flex-col gap-3 w-full max-w-xs">
              <div className="flex items-center gap-2 text-ink-400 text-sm">
                <MapPin size={15} className="text-coral flex-shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-start gap-2 text-ink-400 text-sm">
                <GraduationCap size={15} className="text-coral flex-shrink-0 mt-0.5" />
                <span>{about.education}</span>
              </div>
            </div>

            {/* Open To Badge */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-coral-50 rounded-xl border border-coral-100">
              <div className="w-2 h-2 rounded-full bg-coral animate-pulse" />
              <span className="text-sm font-semibold text-coral">{about.openTo}</span>
            </div>
          </motion.div>

          {/* Right — Bio + Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col gap-8"
          >
            {/* Bio */}
            <div className="space-y-4">
              {about.bio.split("\n\n").map((para, i) => (
                <p key={i} className="text-ink-500 text-lg leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Highlight Badges */}
            <div>
              <h3 className="font-display font-semibold text-ink text-sm uppercase tracking-wider mb-4">
                Highlights
              </h3>
              <div className="flex flex-col gap-3">
                {about.badges.map((badge, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 px-5 py-4 bg-cream rounded-2xl border border-cream-200 hover:border-coral-200 hover:bg-coral-50 transition-all group"
                  >
                    <span className="text-2xl">{badge.emoji}</span>
                    <span className="text-ink-500 font-medium group-hover:text-ink transition-colors">
                      {badge.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
