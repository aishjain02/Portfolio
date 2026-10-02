"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Download } from "lucide-react";

const caseStudies = [
  {
    slug: "zepto-event-helper",
    company: "Zepto",
    title: "Zepto Event Helper",
    type: "Shipped",
    problem: "Homepage merchandising setup was fully manual - scheduling, creatives, validation, rollout - with compounding errors at each step.",
    hook: "The question wasn't 'how do we move faster?' It was 'why does this need human hands at all?'",
    tags: ["AI", "Automation", "Internal Tools"],
    impact: "-80% manual effort · -90% errors · -30 min/event",
    color: "from-violet-500/10 to-purple-500/5",
    border: "border-violet-200",
    badge: "bg-violet-100 text-violet-700",
    num: "01",
  },
  {
    slug: "visionai",
    company: "Independent",
    title: "Vision AI",
    type: "Shipped",
    problem: "Remote interview candidates had no feedback during interviews. The only signal was a rejection email days later - too late to be useful.",
    hook: "The only feedback most candidates ever got was a rejection email. That's too late to be useful to anyone.",
    tags: ["AI", "Gemini API", "React"],
    impact: "35+ users · -40% filler words · Real-time coaching",
    color: "from-coral-50/80 to-orange-500/5",
    border: "border-coral-200",
    badge: "bg-coral-100 text-coral-700",
    num: "02",
  },
  {
    slug: "vibe",
    company: "Superset",
    title: "VIBE - Assessment Integrity",
    type: "Product Concept",
    problem: "Reviewing 150+ assessment recordings manually for integrity checks was unsustainable and inconsistent.",
    hook: "The challenge wasn't detecting cheating automatically. It was reducing reviewer workload without building a black-box judgment system.",
    tags: ["AI", "0→1", "B2B SaaS"],
    impact: "150+ sessions analysed · CV + behavioural signals",
    color: "from-blue-500/10 to-sky-500/5",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    num: "03",
  },
  {
    slug: "pakkaride",
    company: "Independent",
    title: "PakkaRide - Marketplace Fix",
    type: "Product Concept",
    problem: "Ride-hailing fails exactly when demand is highest. The root cause isn't supply - it's incentive misalignment.",
    hook: "We started with the hypothesis that ride reliability is an availability problem. Research showed it's actually an incentives problem.",
    tags: ["Consumer", "Marketplace", "Research"],
    impact: "Incentive model redesigned · Demand-side unlock",
    color: "from-orange-500/10 to-amber-500/5",
    border: "border-orange-200",
    badge: "bg-orange-100 text-orange-700",
    num: "04",
  },
  {
    slug: "ai-attendance",
    company: "Independent",
    title: "AI Smart Attendance System",
    type: "Shipped",
    problem: "Manual attendance took 5-10 min per class, was proxy-manipulable, and generated zero usable records for administration.",
    hook: "Manual attendance was a 10-minute ritual that produced no useful data. The solution shouldn't ask anyone to change their behavior.",
    tags: ["Python", "OpenCV", "Computer Vision"],
    impact: "Zero proxies in pilot · Marking time to seconds",
    color: "from-slate-500/10 to-gray-500/5",
    border: "border-slate-200",
    badge: "bg-slate-100 text-slate-700",
    num: "05",
  },
  {
    slug: "bigbasket",
    company: "BigBasket",
    title: "BigBasket Product Teardown",
    type: "Case Study",
    problem: "BigBasket's homepage converts through deals but never tells a first-time user why they should trust the platform at all.",
    hook: "The most impactful change isn't a new feature. It's fixing the message at the very top of the page.",
    tags: ["Consumer", "UX Analysis", "Growth"],
    impact: "Trust gap identified · 5 UX wins proposed",
    color: "from-emerald-500/10 to-teal-500/5",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    num: "06",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-ink-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-ink-500 hover:text-coral transition-colors text-sm font-semibold">
            <ArrowLeft size={15} /> Back to Portfolio
          </Link>
          <span className="font-display font-extrabold text-sm text-ink">
            Aishwarye<span className="text-coral">.</span>
          </span>
          <a href="/resume.pdf" download className="flex items-center gap-1.5 text-sm font-bold text-coral hover:text-coral-600 transition-colors">
            <Download size={13} /> Resume
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative bg-ink overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#FF6B4A 1px, transparent 1px), linear-gradient(90deg, #FF6B4A 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-coral opacity-[0.07] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gold opacity-[0.05] blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen size={14} className="text-coral" />
              <span className="label">Case Studies</span>
            </div>
            <h1 className="font-display font-extrabold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
              Product thinking,<br />
              <span className="text-gradient">written down.</span>
            </h1>
            <p className="text-ink-400 text-lg max-w-xl leading-relaxed">
              {caseStudies.length} deep dives across consumer, AI, B2B SaaS - from shipped products to original research.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {caseStudies.map((cs) => (
            <motion.div key={cs.slug} variants={cardVariant}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className={`group flex flex-col h-full rounded-2xl border ${cs.border} bg-gradient-to-br ${cs.color} p-7 card-hover`}
              >
                {/* Number + badges */}
                <div className="flex items-start justify-between gap-2 mb-5">
                  <span className="font-display font-extrabold text-5xl leading-none opacity-20 text-ink select-none">
                    {cs.num}
                  </span>
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${cs.badge}`}>
                    {cs.type}
                  </span>
                </div>

                {/* Company + title */}
                <p className="text-ink-400 text-xs font-bold uppercase tracking-widest mb-1">{cs.company}</p>
                <h3 className="font-display font-extrabold text-ink text-xl sm:text-2xl leading-snug mb-3 group-hover:text-coral transition-colors">
                  {cs.title}
                </h3>

                {/* Problem */}
                <p className="text-ink-600 text-sm leading-relaxed mb-4 flex-1">{cs.problem}</p>

                {/* Hook */}
                <div className="mb-4 p-3.5 rounded-xl bg-white/60 border border-white/80">
                  <p className="text-ink-700 text-xs italic leading-relaxed">"{cs.hook}"</p>
                </div>

                {/* Impact chip */}
                <div className="mb-5 px-3 py-2 rounded-xl bg-white/80 border border-white text-[11px] font-semibold text-ink-600">
                  ↗ {cs.impact}
                </div>

                {/* Tags + CTA */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {cs.tags.map(t => (
                      <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/70 text-ink-500 border border-white">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-coral text-xs font-bold group-hover:gap-2.5 transition-all flex-shrink-0">
                    Read <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
