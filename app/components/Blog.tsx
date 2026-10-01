"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Heart } from "lucide-react";
import { blogPosts } from "@/app/data/content";
import { hero } from "@/app/data/content";

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-coral-50 text-coral text-sm font-semibold rounded-full mb-4">
            Writing
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink">
            What I've been sharing
          </h2>
          <p className="text-ink-400 mt-4 text-lg max-w-xl mx-auto">
            Thoughts on product, career, and building things.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {blogPosts.map((post, i) => (
            <motion.a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl border border-cream-200 p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
            >
              {/* Tag */}
              <div className="flex items-center justify-between">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: post.tagColor }}
                >
                  {post.tag}
                </span>
                <ExternalLink
                  size={14}
                  className="text-ink-300 group-hover:text-coral transition-colors"
                />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-ink leading-snug group-hover:text-coral transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-ink-400 text-sm leading-relaxed flex-1 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Reactions */}
              <div className="flex items-center gap-1.5 text-ink-300">
                <Heart size={13} className="fill-current text-coral" />
                <span className="text-sm font-semibold text-ink-400">
                  {post.reactions} reactions
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href={hero.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-coral font-semibold hover:text-coral-600 transition-colors group"
          >
            See all posts on LinkedIn
            <ExternalLink
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
