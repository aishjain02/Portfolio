"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Quote } from "lucide-react";
import Link from "next/link";
import { featuredCaseStudies } from "@/app/data/content";

type Section = {
  id: string;
  label: string;
  content: string;
  bullets?: string[];
};

type CaseStudy = {
  number: string;
  title: string;
  fullTitle?: string;
  subtitle: string;
  company: string;
  type: string;
  tags: string[];
  hook: string;
  related: string[];
  sections: Section[];
};

export default function CaseStudyLayout({ cs }: { cs: CaseStudy }) {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(cs.sections[0]?.id ?? "");
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = articleRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, window.scrollY - el.offsetTop);
      setProgress(Math.min(100, (scrolled / total) * 100));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    cs.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [cs.sections]);

  const relatedStudies = featuredCaseStudies.filter((f) =>
    cs.related.includes(f.slug)
  );

  return (
    <>
      {/* Reading progress bar */}
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      <div className="min-h-screen bg-white">
        {/* Top Nav */}
        <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-ink-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-ink-500 hover:text-coral transition-colors text-sm font-semibold"
            >
              <ArrowLeft size={15} />
              Back to Portfolio
            </Link>
            <span className="hidden sm:block text-xs font-bold text-ink-400 tracking-widest uppercase">
              {cs.company} · Case Study {cs.number}
            </span>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-1.5 text-sm font-bold text-coral hover:text-coral-600 transition-colors"
            >
              <Download size={13} /> Resume
            </a>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_240px] gap-16" ref={articleRef}>
            {/* Main Content */}
            <main className="min-w-0">
              {/* Header */}
              <motion.header
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="text-xs font-extrabold text-coral tracking-widest uppercase">{cs.number}</span>
                  <span className="text-ink-200">·</span>
                  <span className="text-xs font-semibold text-ink-500 uppercase tracking-wider">{cs.company}</span>
                  <span className="text-ink-200">·</span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-coral-50 text-coral border border-coral-200">{cs.type}</span>
                </div>

                <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-ink leading-tight mb-1">
                  {cs.title}
                </h1>
                {cs.fullTitle && (
                  <p className="text-ink-400 text-sm font-semibold tracking-wide mb-4">
                    {cs.fullTitle}
                  </p>
                )}
                <p className="text-ink-500 text-lg leading-relaxed mb-8">{cs.subtitle}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {cs.tags.map((tag) => (
                    <span key={tag}
                      className="px-3 py-1.5 bg-cream border border-ink-200 text-ink-500 text-xs font-semibold rounded-xl">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hook Pull Quote */}
                <div className="rounded-2xl bg-coral-50 border border-coral-200 p-6 flex gap-4">
                  <Quote size={20} className="text-coral flex-shrink-0 mt-1" />
                  <p className="text-ink-700 font-display font-semibold text-xl leading-relaxed italic">
                    &ldquo;{cs.hook}&rdquo;
                  </p>
                </div>
              </motion.header>

              {/* Sections */}
              <div className="space-y-14">
                {cs.sections.map((section, i) => (
                  <motion.section
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, delay: i * 0.03 }}
                    className="cs-section"
                  >
                    <h2>{section.label}</h2>
                    <p>{section.content}</p>
                    {section.bullets && (
                      <ul className="mt-4 space-y-2.5">
                        {section.bullets.map((b, bi) => (
                          <li key={bi}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </motion.section>
                ))}
              </div>
            </main>

            {/* Sticky TOC (desktop) */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <p className="text-[10px] font-extrabold text-ink-400 uppercase tracking-widest mb-4">On This Page</p>
                <nav className="space-y-1">
                  {cs.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`block text-xs py-1.5 pl-3 border-l-2 transition-all ${
                        activeSection === section.id
                          ? "border-coral text-coral font-bold"
                          : "border-ink-200 text-ink-400 hover:text-ink-700 hover:border-ink-400"
                      }`}
                    >
                      {section.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          </div>

          {/* Related Case Studies */}
          {relatedStudies.length > 0 && (
            <div className="mt-24 pt-12 border-t border-ink-200">
              <span className="label block mb-8">More Case Studies</span>
              <div className="grid sm:grid-cols-3 gap-5">
                {relatedStudies.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/case-studies/${r.slug}`}
                    className="group rounded-2xl p-5 border border-ink-200 bg-cream card-hover"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-display font-extrabold text-coral/30">{r.number}</span>
                      <span className="text-xs font-bold text-coral border border-coral-200 bg-coral-50 px-2 py-0.5 rounded-full">{r.type}</span>
                    </div>
                    <h3 className="font-display font-extrabold text-ink text-base group-hover:text-coral transition-colors mb-1">
                      {r.title}
                    </h3>
                    <p className="text-ink-400 text-sm leading-relaxed line-clamp-2">{r.problem}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
