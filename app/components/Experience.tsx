"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar } from "lucide-react";
import { experience } from "@/app/data/content";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-coral-50 text-coral text-sm font-semibold rounded-full mb-4">
            Experience
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink">
            Where I've built
          </h2>
          <p className="text-ink-400 mt-4 text-lg max-w-xl mx-auto">
            From cybersecurity startups to quick-commerce at scale.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-cream-200" />

          <div className="flex flex-col gap-10">
            {experience.map((job, i) => (
              <TimelineItem key={i} job={job} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  job,
  index,
  isInView,
}: {
  job: (typeof experience)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex gap-6 sm:gap-8 pl-0"
    >
      {/* Timeline Node */}
      <div className="flex-shrink-0 relative z-10">
        <div
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-display font-bold text-white text-sm sm:text-base shadow-md"
          style={{ backgroundColor: job.color }}
        >
          {job.initial}
        </div>
      </div>

      {/* Content Card */}
      <div className="flex-1 bg-white rounded-2xl border border-cream-200 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="font-display font-bold text-xl text-ink">{job.company}</h3>
            <p className="text-ink-500 font-medium mt-0.5">{job.role}</p>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className="flex items-center gap-1.5 text-xs font-medium text-ink-400">
              <Calendar size={12} className="text-coral" />
              {job.period}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-ink-400">
              <MapPin size={12} className="text-coral" />
              {job.location}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-0.5 w-10 rounded-full mb-4"
          style={{ backgroundColor: job.color }}
        />

        {/* Bullets */}
        <ul className="flex flex-col gap-2.5">
          {job.bullets.map((bullet, bi) => (
            <li key={bi} className="flex gap-2.5 text-ink-500 text-sm leading-relaxed">
              <span
                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: job.color }}
              />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
