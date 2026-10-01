"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/app/components/icons";
import { experiments } from "@/app/data/content";

const tagColors: Record<string, string> = {
  "AI": "#FF6B4A",
  "SaaS": "#6C63FF",
  "Automation": "#F5A623",
  "AI Agents": "#6C63FF",
  "LangChain": "#08BD80",
  "CrewAI": "#FF6B9D",
  "Consumer": "#F5A623",
  "Concept": "#8B8696",
  "Zepto": "#FF6B4A",
  "Maps": "#08BD80",
  "Python": "#6C63FF",
  "OpenCV": "#08BD80",
  "Hackathon": "#F5A623",
  "FinTech": "#08BD80",
  "🏆 3rd Place": "#F5A623",
  "NL-to-SQL": "#6C63FF",
  "Internal Tools": "#FF6B4A",
  "Analytics": "#6C63FF",
};

function getTagColor(tag: string): string {
  return tagColors[tag] ?? "#8B8696";
}

export default function Experiments() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experiments" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-coral-50 text-coral text-sm font-semibold rounded-full mb-4">
            Experiments
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink">
            Side projects & concepts
          </h2>
          <p className="text-ink-400 mt-4 text-lg max-w-xl mx-auto">
            What I build when nobody gives me a predefined problem.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiments.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-white rounded-2xl border border-cream-200 p-6 flex flex-col gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all group"
            >
              {/* Title + Links */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display font-bold text-lg text-ink group-hover:text-coral transition-colors">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-1 flex-shrink-0">
                  {exp.github && (
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-lg text-ink-400 hover:text-coral hover:bg-coral-50 transition-all"
                      aria-label="GitHub"
                    >
                      <GitHubIcon size={15} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-ink-400 text-sm leading-relaxed flex-1">{exp.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: getTagColor(tag) + "BB" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
