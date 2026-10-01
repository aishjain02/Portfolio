// ─── HERO ────────────────────────────────────────────────────────────────────
export const hero = {
  greeting: "Hi, I'm Aishwarye 👋",
  taglines: ["Product Builder", "AI Products", "Consumer Tech", "Automation"],
  headline:
    "Building products that turn messy workflows into simple, measurable systems.",
  subheadline:
    "Product-focused builder with hands-on experience across AI, Consumer Tech & B2B SaaS.",
  impacts: [
    { value: "25+", label: "Homepage events" },
    { value: "20M+", label: "Impressions driven" },
    { value: "~98%", label: "Error reduction" },
    { value: "1.5M+", label: "Interactions" },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/aishwarye-jain-9535b4221",
    github: "https://github.com/aishjain02",
    resume: "/resume.pdf",
    email: "mailto:aishwaryejain02@gmail.com",
  },
};

// ─── ABOUT ───────────────────────────────────────────────────────────────────
export const about = {
  bio: `I'm a product-focused engineer who bridges engineering intuition, product thinking, and AI-powered automation. Starting with an EEE degree from BMSIT, I've spent the last couple of years building at the intersection of consumer tech, analytics, and AI — from merchandising experiences at Zepto that reach millions of customers, to building VIBE and automation workflows from scratch.\n\nI like finding messy, manual workflows, understanding the real problem beneath them, and turning them into simple, measurable systems. I'm particularly drawn to 0→1 product work where the challenge is figuring out what should actually be built.`,
  badges: [
    { emoji: "📰", text: "Featured in Bangalore Times (Times of India)" },
    { emoji: "🎯", text: "Cleared Google APM Round 1" },
    { emoji: "🏆", text: "3rd place — BMSIT Ideathon 2024" },
  ],
  education: "B.E. Electrical & Electronics Engineering, BMSIT — 2026",
  openTo: "Open to APM, PM & AI Product roles",
};

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
export const experience = [
  {
    company: "Zepto",
    role: "Product Operations Specialist — Shopping Experience",
    period: "May 2026 – Present",
    location: "Bengaluru",
    color: "#FF6B4A",
    initial: "Z",
    bullets: [
      "Managed end-to-end execution of 25+ homepage merchandising events across FMCG, Electronics, Fashion & Pet Care → 20M+ impressions, 1.5M+ customer interactions",
      "Built Zepto Event Helper — an AI/n8n workflow automating event setup, creative validation & rollout → ~1hr launch time saved, ~98% scheduling error reduction, ~90–95% manual effort cut",
      "Tracks CTR, CVR, ATC rate & GSV across campaign lifecycle; built SQL audit frameworks, SOPs for widget scheduling, and deep-link validation systems",
    ],
  },
  {
    company: "Superset",
    role: "Product & Operations Analyst",
    period: "Nov 2025 – Apr 2026",
    location: "Bengaluru",
    color: "#6C63FF",
    initial: "S",
    bullets: [
      "Worked on Superset Pro hiring platform — 12L student pool, 4L outreach/week, 7.4K assessment-seat capacity across Wed/Sat recurring assessment slots",
      "Analyzed 150+ assessment recordings to identify behavioral cheating signals → conceptualized VIBE, an AI-based assessment integrity product",
      "Managed assessment operations, candidate shortlisting workflows, and college hiring pipelines",
    ],
  },
  {
    company: "Unacademy",
    role: "Product Management Intern — UNA AI",
    period: "Sep 2025 – Nov 2025",
    location: "Bengaluru",
    color: "#08BD80",
    initial: "U",
    bullets: [
      "Contributed to PRDs and AI-powered learning feature development under the UNA AI team",
      "Studied user behavior patterns and translated insights into actionable product requirements",
    ],
  },
  {
    company: "Prorata Car",
    role: "Product & Design Intern",
    period: "May 2025 – Aug 2025",
    location: "Bengaluru",
    color: "#F5A623",
    initial: "P",
    bullets: [
      "Worked on driver-app workflows, API specifications, UX flows and product design",
      "Featured in Bangalore Times (Times of India, Pg. 6) for work on the platform",
    ],
  },
  {
    company: "Pinewheel Labs",
    role: "Growth Manager & Analyst",
    period: "Jan 2025 – Apr 2025",
    location: "Bengaluru",
    color: "#FF6B9D",
    initial: "PW",
    bullets: [
      "Built Power BI dashboards, n8n automation workflows, and growth analytics for a cybersecurity AI startup",
      "Helped close an international client through data-backed growth analysis and business development",
    ],
  },
];

// ─── FEATURED BUILDS ─────────────────────────────────────────────────────────
export const featuredBuilds = [
  {
    id: "event-helper",
    title: "Zepto Event Helper",
    subtitle: "AI automation for homepage merchandising ops",
    company: "Zepto",
    tags: ["AI", "Automation", "Internal Tools", "n8n"],
    tagColor: "#FF6B4A",
    problem:
      "Homepage event setup was fully manual — creatives, scheduling, widget placement, deep-link validation, rollout — taking ~2 hours per event with frequent scheduling errors.",
    solution:
      "Built an AI/n8n automation workflow that handles the entire pipeline: event setup → creative updates → preview generation → deep-link validation → production rollout. What was a multi-step manual process became a single trigger.",
    impact: [
      "~1 hour saved per event launch",
      "~98% reduction in scheduling errors",
      "~90–95% cut in manual effort per event",
    ],
    accentColor: "#FF6B4A",
  },
  {
    id: "vibe",
    title: "VIBE",
    subtitle: "Vision Interview Behavior Evaluation — 0→1 AI product",
    company: "Superset",
    tags: ["AI", "0→1", "B2B", "Product Spec"],
    tagColor: "#6C63FF",
    problem:
      "Manually reviewing 150+ assessment recordings to detect cheating was unsustainable at scale. Reviewers spent hours on sessions that were mostly clean.",
    solution:
      "Designed an AI system that detects behavioral signals — head pose, eye gaze, presence, off-screen duration, voice fillers and pauses — without facial recognition. Surfaces flagged timestamps so reviewers only watch relevant segments.",
    impact: [
      "Target: ≥50% reduction in reviewer time per session",
      "Target: ≤10% false positives on flagged segments",
      "Privacy-first: behavioral signals only, no identity recognition",
    ],
    accentColor: "#6C63FF",
  },
  {
    id: "pakkaride",
    title: "PakkaRide / Sorted",
    subtitle: "Reliability-first ride platform — marketplace research & strategy",
    company: "Independent",
    tags: ["Consumer", "Marketplace", "Research", "0→1"],
    tagColor: "#F5A623",
    problem:
      "82% of surveyed Bengaluru cab users faced ride cancellations. 53% dealt with long waits. 68% of drivers felt earnings were mismatched with how surge worked — a classic marketplace incentive problem.",
    solution:
      "Designed a reliability-first platform that redesigns driver incentives instead of just the rider experience. Start narrow: one high-demand commute corridor, target working professionals, validate with a concierge-style MVP before scaling.",
    impact: [
      "Primary research: 72 Bengaluru cab users surveyed",
      "Identified core issue as incentive misalignment, not UX",
      "Corridor-first MVP strategy to validate reliability before growth",
    ],
    accentColor: "#F5A623",
  },
  {
    id: "query-helper",
    title: "Superset Query Helper",
    subtitle: "Natural language → SQL for internal analytics",
    company: "Superset",
    tags: ["AI", "Internal Tools", "Analytics", "NL-to-SQL"],
    tagColor: "#08BD80",
    problem:
      "Analysts and non-technical stakeholders had to manually construct SQL queries for every repetitive analytical question inside Superset — creating bottlenecks and slowing down data access.",
    solution:
      "Built a natural-language-to-SQL workflow: type a plain-English question and get the corresponding SQL query. Reduces friction for non-SQL users and eliminates repetitive query construction for analysts.",
    impact: [
      "Eliminated repetitive SQL construction for common questions",
      "Made analytics accessible to non-technical stakeholders",
      "Demonstrates AI agent + internal tooling product thinking",
    ],
    accentColor: "#08BD80",
  },
  {
    id: "zmart",
    title: "ZMart — Pickup From Store",
    subtitle: "Hybrid grocery pickup — consumer research & product discovery",
    company: "Independent",
    tags: ["Consumer", "Research", "Retail", "Strategy"],
    tagColor: "#FF6B9D",
    problem:
      "There's a gap between 10-minute quick commerce (limited SKUs, high cost) and physical retail (full range, no delivery). Most research skipped the hybrid pickup model in between.",
    solution:
      "Backed by 72-respondent primary research, built a business case for hybrid grocery pickup. Covered 4 consumer personas, pricing strategy, location selection, assortment design, and experience UX.",
    impact: [
      "4 personas: Chief Gharana Officer, City Builder, Value-Conscious Professional, Top-Up Guy",
      "72 respondents across shopping behavior and pickup willingness",
      "Full business case: pricing, location, assortment, experience design",
    ],
    accentColor: "#FF6B9D",
  },
];

// ─── EXPERIMENTS ─────────────────────────────────────────────────────────────
export const experiments = [
  {
    title: "HumanRET",
    description:
      "AI autonomous ad manager: product photo + description → AI generates creatives → launches campaigns → monitors & optimizes performance automatically.",
    tags: ["AI", "SaaS", "Automation"],
    github: "https://github.com/aishjain02/HumanRet",
  },
  {
    title: "AI Customer Support Agent",
    description:
      "CrewAI/LangGraph/LangChain agent automating Tier-1 customer support. Handles repetitive queries, escalates complex ones to humans.",
    tags: ["AI Agents", "LangChain", "CrewAI"],
  },
  {
    title: "Shared Cart",
    description:
      "Collaborative shopping via QR/link sharing — multiple users building and checking out a single Zepto cart together.",
    tags: ["Consumer", "Concept", "Zepto"],
  },
  {
    title: "Ride Together",
    description:
      "Google Maps concept for groups of 2–5 vehicles travelling to the same destination — coordinated navigation and shared route visibility.",
    tags: ["Consumer", "Maps", "Concept"],
  },
  {
    title: "AI Smart Attendance",
    description:
      "Python + face_recognition + OpenCV + ESP32-CAM system automating college attendance with anti-proxy detection. Academic major project.",
    tags: ["Python", "AI", "OpenCV"],
    github: "https://github.com/aishjain02/PiVision-Attendance-System",
  },
  {
    title: "Smart Wardrobe",
    description:
      "AI-driven outfit selection using personal preferences, occasions and weather signals. Won 3rd place at BMSIT Ideathon 2024.",
    tags: ["AI", "Consumer", "🏆 3rd Place"],
  },
  {
    title: "WellFi",
    description:
      "Fintech hackathon project from EPOCH Hackathon 2024 — early experience building end-to-end under pressure.",
    tags: ["Hackathon", "FinTech"],
  },
];

// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const skills = [
  {
    category: "Product",
    icon: "🎯",
    color: "#FF6B4A",
    items: [
      "Product Strategy",
      "PRDs",
      "User Research",
      "MVP Design",
      "A/B Testing",
      "GTM",
      "Experimentation",
      "Product Analytics",
      "Agile / Scrum",
      "Jira",
    ],
  },
  {
    category: "Analytics & Data",
    icon: "📊",
    color: "#6C63FF",
    items: [
      "SQL",
      "Python",
      "Power BI",
      "Mixpanel",
      "Metabase",
      "Tableau",
      "Google Analytics",
      "Excel",
    ],
  },
  {
    category: "Design",
    icon: "✏️",
    color: "#08BD80",
    items: ["Figma", "User Flows", "Workflow Design", "Product UX"],
  },
  {
    category: "AI & Automation",
    icon: "🤖",
    color: "#F5A623",
    items: [
      "n8n",
      "LangChain",
      "LangGraph",
      "CrewAI",
      "Voiceflow",
      "AI Agents",
      "NL-to-SQL",
      "API Integrations",
      "Postman",
    ],
  },
];

// ─── BLOG POSTS ──────────────────────────────────────────────────────────────
export const blogPosts = [
  {
    title: "From watching the story to building inside it",
    excerpt:
      "Back in 2021, when Zepto had just started, I remember watching Aadit Palicha and the entire Zepto story unfold — two founders getting into YC, building at insane speed. And now I get to be part of that journey.",
    reactions: 209,
    url: "https://www.linkedin.com/posts/aishwarye-jain-9535b4221_zepto-product-quickcommerce-activity-7465054144165339136-SdsM",
    tag: "Career",
    tagColor: "#FF6B4A",
  },
  {
    title: "What clearing Google APM Round 1 taught me",
    excerpt:
      "I recently went through the Google APM process — cleared Round 1, advanced to a 5-interview panel. Here's what the experience taught me about structured thinking, user segmentation, and what 'Googliness' actually means.",
    reactions: 68,
    url: "https://www.linkedin.com/posts/aishwarye-jain-9535b4221_productmanagement-apm-google-activity-7432427979068055552-MY_X",
    tag: "Product",
    tagColor: "#6C63FF",
  },
  {
    title: "Spotted in Bangalore Times 📰",
    excerpt:
      "Getting featured in Bangalore Times (Times of India, Pg. 6) with the Prorata Car team. A reminder of how far passion and hustle can take you.",
    reactions: 38,
    url: "https://www.linkedin.com/posts/aishwarye-jain-9535b4221_featured-bangaloretimes-timesofindia-activity-7350743419230568448-f4Nz",
    tag: "Featured",
    tagColor: "#F5A623",
  },
];

// ─── CONTACT ─────────────────────────────────────────────────────────────────
export const contact = {
  cta: "Open to APM, PM & AI Product roles",
  subtext: "Let's connect and build something meaningful.",
  email: "aishwaryejain02@gmail.com",
  linkedin: "https://www.linkedin.com/in/aishwarye-jain-9535b4221",
  github: "https://github.com/aishjain02",
  resume: "/resume.pdf",
};
