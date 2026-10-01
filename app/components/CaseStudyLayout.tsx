"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
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
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      setProgress(Math.min(100, (scrolled / total) * 100));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observer for active section
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
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
      />

      <div className="min-h-screen bg-white">
        {/* Top Nav */}
        <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-ink-200">
          <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-ink-500 hover:text-blue transition-colors text-sm font-medium"
            >
              <ArrowLeft size={15} />
              Back
            </Link>
            <span className="text-xs font-bold text-ink-400 tracking-widest uppercase">
              Case Study {cs.number}
            </span>
            <a
              href="/resume.pdf"
              download
              className="text-sm font-semibold text-blue hover:text-blue-700 transition-colors"
            >
              Resume ↓
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
                <div className="flex items-center gap-3 mb-5">
                  <span className="section-number">{cs.number}</span>
                  <span className="w-px h-4 bg-ink-200" />
                  <span className="text-xs font-semibold text-ink-500 uppercase tracking-wider">{cs.company}</span>
                  <span className="w-px h-4 bg-ink-200" />
                  <span className="px-2 py-0.5 rounded text-xs font-semibold bg-blue-50 text-blue-700">{cs.type}</span>
                </div>
                <h1 className="font-display font-bold text-4xl sm:text-5xl text-ink leading-tight mb-3">
                  {cs.title}
                </h1>
                <p className="text-ink-500 text-lg leading-relaxed mb-8">{cs.subtitle}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-ink-50 text-ink-500 text-xs font-semibold rounded-lg border border-ink-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hook Pull Quote */}
                <div className="border-l-4 border-blue pl-6 py-2">
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
                  >
                    <h2 className="font-display font-bold text-xs uppercase tracking-widest text-blue mb-3">
                      {section.label}
                    </h2>
                    <p className="text-ink-700 leading-[1.85] text-[1.0625rem]">{section.content}</p>
                    {section.bullets && (
                      <ul className="mt-4 space-y-2.5">
                        {section.bullets.map((b, bi) => (
                          <li key={bi} className="flex gap-3 text-ink-600 text-[1.0625rem] leading-relaxed">
                            <span className="text-blue font-bold flex-shrink-0 mt-0.5">—</span>
                            {b}
                          </li>
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
                <p className="section-number mb-4">ON THIS PAGE</p>
                <nav className="space-y-1">
                  {cs.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`block text-sm py-1 pl-3 border-l-2 transition-all ${
                        activeSection === section.id
                          ? "border-blue text-blue font-semibold"
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
              <p className="section-label mb-8">More Case Studies</p>
              <div className="grid sm:grid-cols-3 gap-5">
                {relatedStudies.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/case-studies/${r.slug}`}
                    className="group p-5 border border-ink-200 rounded-xl hover:border-blue hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="section-number">{r.number}</span>
                      <ExternalLink size={13} className="text-ink-300 group-hover:text-blue transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-ink text-base group-hover:text-blue transition-colors mb-1">
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
