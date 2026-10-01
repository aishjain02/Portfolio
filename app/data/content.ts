// ─── HERO ────────────────────────────────────────────────────────────────────
export const hero = {
  headline: "I build products where messy problems meet technology.",
  subline: "Product Specialist at Zepto · Previously Superset, Unacademy, Prorata, Pinewheel",
  tagline: "Product × Data × AI × Automation",
  links: {
    linkedin: "https://www.linkedin.com/in/aishwarye-jain-9535b4221",
    github: "https://github.com/aishjain02",
    resume: "/resume.pdf",
    email: "mailto:jainaishwarye2004@gmail.com",
  },
};

// ─── QUICK SCAN ──────────────────────────────────────────────────────────────
export const quickScan = [
  { label: "Domain", value: "Consumer · AI · B2B SaaS" },
  { label: "Experience", value: "Zepto · Superset · Unacademy · Prorata · Pinewheel" },
  { label: "Strength", value: "Product × Data × AI × Automation" },
  { label: "Scale", value: "20M+ impressions" },
];

// ─── IMPACT NUMBERS ──────────────────────────────────────────────────────────
export const impacts = [
  { value: "25+", label: "Homepage events managed", sublabel: "Zepto" },
  { value: "20M+", label: "Customer impressions", sublabel: "Zepto" },
  { value: "1.5M+", label: "Customer interactions", sublabel: "Zepto" },
  { value: "90%", label: "Fewer scheduling errors", sublabel: "Event Helper" },
  { value: "80%", label: "Less manual effort", sublabel: "Event Helper" },
  { value: "150+", label: "Assessment sessions analyzed", sublabel: "Superset" },
];

// ─── FEATURED CASE STUDIES ───────────────────────────────────────────────────
export const featuredCaseStudies = [
  {
    number: "01",
    title: "Zepto Event Helper",
    company: "Zepto",
    slug: "zepto-event-helper",
    problem: "Homepage merchandising setup was fully manual — scheduling, creatives, validation, rollout — with compounding errors at each step.",
    hook: "The question wasn't 'how do we move faster?' It was 'why does this need human hands at all?'",
    tags: ["AI", "Automation", "Internal Tools"],
    type: "Shipped",
  },
  {
    number: "02",
    title: "BigBasket Teardown",
    company: "BigBasket",
    slug: "bigbasket",
    problem: "BigBasket's homepage converts through deals but never tells a first-time user why they should trust the platform at all.",
    hook: "The most impactful change isn't a new feature. It's fixing the message at the very top of the page.",
    tags: ["Consumer", "UX Analysis", "Growth"],
    type: "Case Study",
  },
  {
    number: "03",
    title: "VIBE",
    company: "Superset",
    slug: "vibe",
    problem: "Reviewing 150+ assessment recordings manually for integrity checks was unsustainable — and inconsistent.",
    hook: "The challenge wasn't detecting cheating automatically. It was reducing reviewer workload without building a black-box judgment system.",
    tags: ["AI", "0→1", "B2B"],
    type: "Product Concept",
  },
  {
    number: "04",
    title: "PakkaRide",
    company: "Independent",
    slug: "pakkaride",
    problem: "Ride-hailing fails exactly when demand is highest. The root cause isn't supply — it's incentive misalignment.",
    hook: "We started with the hypothesis that ride reliability is a availability problem. The research showed it's actually an incentives problem.",
    tags: ["Consumer", "Marketplace", "Research"],
    type: "Product Concept",
  },
];

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
export const experience = [
  {
    number: "01",
    company: "Zepto",
    role: "Product Operations Specialist — Shopping Experience",
    period: "May 2026 – Present",
    location: "Bengaluru",
    color: "#2563EB",
    bullets: [
      "Owned 25+ homepage merchandising campaigns across FMCG, Electronics, Fashion and Seasonal categories — driving 20M+ impressions and 1.5M+ interactions",
      "Built Zepto Event Helper: AI/n8n workflow that unified homepage event setup, creatives, preview, validation and rollout into one system — reducing launch time by 30 min/event, manual effort by 80%, scheduling errors by 90%",
      "Built SQL-based validation frameworks for widget configuration, deeplink verification and launch QC, improving reliability of high-volume homepage launches",
      "Owned execution of experiments and category launches across Electronics, Fashion and FMCG, partnering with business, design and engineering",
    ],
  },
  {
    number: "02",
    company: "Superset",
    role: "Product Intern",
    period: "Nov 2025 – Apr 2026",
    location: "Bengaluru",
    color: "#7C3AED",
    bullets: [
      "Owned Superset Pro workflows across SME hiring, assessments, candidate shortlisting and recruitment execution — 12L student pool, 4L weekly outreach, 7.4K assessment seats",
      "Analyzed 150+ assessment sessions to identify user friction, platform misuse and assessment integrity issues",
      "Built VIBE — an AI-assisted assessment integrity system using computer vision and behavioral signals to flag suspicious sessions for review",
    ],
  },
  {
    number: "03",
    company: "Unacademy",
    role: "CS Intern",
    period: "Sep 2025 – Nov 2025",
    location: "Bengaluru",
    color: "#059669",
    bullets: [
      "Analyzed user engagement and behavioral data to identify friction points and opportunities in AI-powered learning",
      "Contributed to PRDs, user research and cross-functional product execution",
    ],
  },
  {
    number: "04",
    company: "Prorata Car",
    role: "Product & Design Intern",
    period: "May 2025 – Aug 2025",
    location: "Bengaluru",
    color: "#D97706",
    bullets: [
      "Worked on driver-app workflows, API specifications, UX flows and product design",
      "Featured in Bangalore Times (Times of India, Pg. 6) for work on the platform",
    ],
  },
  {
    number: "05",
    company: "Pinewheel Labs",
    role: "Growth Manager & Analyst",
    period: "Jan 2025 – Apr 2025",
    location: "Bengaluru",
    color: "#DB2777",
    bullets: [
      "Built Power BI dashboards, n8n automation workflows and growth analytics for a cybersecurity AI startup",
      "Led 5+ global projects, generating INR 2,00,000+ revenue through data-driven growth strategies",
      "Helped close an international client through data-backed business development",
    ],
  },
];

// ─── BUILDS ──────────────────────────────────────────────────────────────────
export const shipped = [
  {
    title: "Zepto Event Helper",
    problem: "Homepage event setup took ~2 hours with repeated manual checks and frequent errors.",
    insight: "The workflow had too many manual decision points. The problem was process design, not execution speed.",
    idea: "AI/n8n workflow automating the full pipeline: setup → creatives → validation → preview → rollout.",
    test: "Would reducing manual touchpoints to 1 cut errors by >80%?",
    tags: ["AI", "Automation", "n8n"],
    slug: "zepto-event-helper",
  },
  {
    title: "Vision AI — AI Interview Assistant",
    problem: "Candidates in remote interviews had no real-time feedback on their answers or communication.",
    insight: "35+ user interviews showed the real pain: candidates couldn't tell if they were answering well until the rejection came.",
    idea: "Real-time AI assistant using Google Gemini API — live transcription, answer insights, and pacing feedback.",
    test: "Does live AI coaching during practice interviews reduce candidate anxiety and improve answer structure?",
    tags: ["AI", "SaaS", "React", "Gemini API"],
    github: "https://github.com/aishjain02",
  },
  {
    title: "VIBE — Assessment Integrity",
    problem: "Reviewing 150+ recorded assessment sessions manually was unscalable and inconsistent across reviewers.",
    insight: "Reviewers didn't need AI to make the final call — they needed AI to find the relevant 3 minutes inside a 45-minute session.",
    idea: "Behavioral signal detection (head pose, gaze, voice patterns) that timestamps flagged moments rather than auto-judging.",
    test: "Can flagging reduce per-session review time by ≥50% with ≤10% false positives?",
    tags: ["AI", "Computer Vision", "B2B"],
    slug: "vibe",
  },
  {
    title: "AI Smart Attendance System",
    problem: "Manual college attendance was slow, proxy-prone and generated no useful data.",
    insight: "The real cost wasn't the 5 minutes spent marking — it was the unchallenged proxy attendance that followed.",
    idea: "Face recognition + ESP32-CAM system with automated logging, timestamp tracking and an analytics dashboard.",
    test: "Does automated marking reduce proxy attempts and administrative follow-up?",
    tags: ["Python", "OpenCV", "Computer Vision"],
    github: "https://github.com/aishjain02/PiVision-Attendance-System",
  },
];

export const experiments = [
  {
    title: "PakkaRide / Sorted",
    problem: "Ride-hailing cancellations spike exactly when you need a ride most.",
    insight: "82% of users faced cancellations. 68% of drivers felt earnings didn't match surge rates. This is an incentives problem.",
    idea: "Reliability-first platform starting with one corridor, one segment — validate availability before scaling.",
    test: "Does guaranteed driver availability on a fixed corridor command premium retention?",
    tags: ["Consumer", "Marketplace"],
    slug: "pakkaride",
  },
  {
    title: "HumanRET",
    problem: "Running ad campaigns requires creative skills, platform expertise and constant monitoring — too much for most SMBs.",
    insight: "SMBs don't want to learn advertising. They want results from a product image and a description.",
    idea: "Autonomous AI ad manager: photo + description → AI generates creatives → launches → monitors → optimizes.",
    test: "Can AI reduce campaign setup time to <5 minutes with competitive ROAS?",
    tags: ["AI", "SaaS", "Automation"],
    github: "https://github.com/aishjain02/HumanRet",
  },
  {
    title: "AI Customer Support Agent",
    problem: "Tier-1 support is repetitive, expensive and slow — but fully automating it risks bad customer experience.",
    insight: "The product question isn't 'can AI answer questions?' It's 'when should it act, when should it ask, and when should it escalate?'",
    idea: "LangGraph/CrewAI agent with explicit decision points — handles resolution, asks for clarification, escalates complex cases.",
    test: "What % of Tier-1 tickets can be fully resolved without human intervention at <5% false resolution rate?",
    tags: ["AI Agents", "LangChain", "CrewAI"],
  },
  {
    title: "Zepto Shared Cart",
    problem: "Shopping for a household requires coordination — but apps assume a single buyer.",
    insight: "The friction isn't payment splitting. It's the moment when two people are building the same cart separately.",
    idea: "Collaborative cart via QR/link sharing — multiple users add to one cart, one person checks out.",
    test: "Does shared cart increase average order value and reduce repeat sessions for the same household?",
    tags: ["Consumer", "Zepto", "Concept"],
    slug: "zepto-shared-cart",
  },
  {
    title: "Ride Together (Maps Concept)",
    problem: "Groups travelling together in separate cars have no way to stay coordinated in real time.",
    insight: "Group navigation is a social experience — but every maps app treats each vehicle independently.",
    idea: "Google Maps group feature: shared destination, live visibility of each vehicle, coordinated ETA.",
    test: "Do groups using shared navigation have fewer coordination calls and lower separation anxiety on trips?",
    tags: ["Consumer", "Maps", "Concept"],
  },
  {
    title: "Smart Wardrobe",
    problem: "Most people use 20% of their wardrobe 80% of the time — decision fatigue, not lack of clothes.",
    insight: "The problem isn't storage. It's that weather + occasion + mood all influence outfit choice but no app connects them.",
    idea: "AI-driven outfit selector using preferences, occasion, and weather signals. Won Anveshana Ideathon.",
    test: "Does daily AI outfit suggestion reduce morning decision time and increase wardrobe utilization?",
    tags: ["AI", "Consumer", "🏆 Winner"],
  },
];

// ─── HOW I THINK ─────────────────────────────────────────────────────────────
export const principles = [
  {
    number: "01",
    title: "Start with the problem.",
    body: "I don't start with 'what can AI do?' I start with 'what is frustrating enough that someone would actually change their behavior to solve it?'",
  },
  {
    number: "02",
    title: "Talk to users. Inspect behavior.",
    body: "I use research, analytics, existing workflows, operational data and direct observation. The most interesting part of a problem is often not where people initially complain.",
  },
  {
    number: "03",
    title: "Find the real bottleneck.",
    body: "Most operational pain is a symptom of a product problem. I look for the step that creates the most repeated manual work — that's usually where the leverage is.",
  },
  {
    number: "04",
    title: "Build the smallest useful version.",
    body: "I prefer narrow MVP → evidence → iteration over huge roadmap → six months of building → no validation. A product isn't done when it ships. It's done when something measurably changes.",
  },
  {
    number: "05",
    title: "Measure it.",
    body: "A product isn't successful because it shipped. It's successful because something changed. I define success metrics before building, not after.",
  },
];

// ─── NOW SECTION ─────────────────────────────────────────────────────────────
export const now = [
  {
    label: "At work",
    content: "Building better shopping and merchandising workflows at Zepto. Thinking about how AI can reduce the human judgment required in high-frequency operational decisions.",
  },
  {
    label: "Outside work",
    content: "Exploring AI agents, automation and consumer-product ideas. Currently thinking about marketplace incentive problems and where AI creates real workflow leverage vs. just demos.",
  },
  {
    label: "Looking for",
    content: "APM, PM or AI Product roles where I can own product decisions end-to-end, work with strong teams, and build things that reach people at scale.",
  },
];

// ─── THINGS I'VE CHANGED MY MIND ABOUT ──────────────────────────────────────
export const mindChanges = [
  { quote: "More features ≠ better MVP.", context: "The smallest version that proves the hypothesis is almost always better than the complete version." },
  { quote: "AI is not the product. The workflow is.", context: "The question isn't 'can we add AI?' It's 'what workflow gets better if AI is inside it?'" },
  { quote: "A dashboard is useless if nobody makes a decision from it.", context: "Analytics that don't change behavior aren't analytics — they're reports." },
  { quote: "Operational pain is often a symptom of a product problem.", context: "When a team keeps solving the same thing manually, that's a signal — not a process failure." },
];

// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const skills = [
  {
    category: "Product",
    icon: "🎯",
    items: ["Product Discovery", "User Research", "PRDs", "MVP Design", "Feature Prioritization", "A/B Testing", "GTM", "Roadmapping", "Stakeholder Management", "Agile / Scrum"],
  },
  {
    category: "Analytics & Data",
    icon: "📊",
    items: ["SQL", "Python", "Power BI", "Mixpanel", "Metabase", "Tableau", "Google Analytics", "Excel"],
  },
  {
    category: "Design & Build",
    icon: "✏️",
    items: ["Figma", "React", "Node.js", "REST APIs", "Postman", "GitHub", "User Flows"],
  },
  {
    category: "AI & Automation",
    icon: "🤖",
    items: ["n8n", "LangChain", "LangGraph", "CrewAI", "Voiceflow", "Google Gemini API", "AI Agents", "NL-to-SQL"],
  },
];

// ─── ACHIEVEMENTS ────────────────────────────────────────────────────────────
export const achievements = [
  { title: "Winner — Anveshana Ideathon", desc: "AI Smart Wardrobe concept, BMSIT", icon: "🏆" },
  { title: "Top Prize — EPOCH'24 Hackathon", desc: "WellFi — AI Companion for Yoga & Meditation", icon: "🥇" },
  { title: "Featured in Bangalore Times", desc: "Times of India, Pg. 6 — Prorata Car", icon: "📰" },
  { title: "Cleared Google APM Round 1", desc: "Advanced to 5-interview panel", icon: "🎯" },
];

// ─── ABOUT ───────────────────────────────────────────────────────────────────
export const about = {
  positioning: "I don't really like 'just managing products.' I like understanding how they work.",
  bio: [
    "I'll look at a workflow and ask why five people are doing something manually. I'll look at a funnel and ask where the user actually drops. I'll look at an AI idea and ask whether it solves a real problem or is just a shiny demo.",
    "And when I find something worth fixing, I build the smallest version that can prove it.",
    "That's shaped most of my work — from AI automation at Zepto to assessment intelligence at Superset, and product experiments across mobility, commerce and SaaS.",
    "My background is engineering. My work is product. And the intersection of the two is where I want to keep building.",
  ],
  education: "B.E. Electrical & Electronics Engineering, BMSIT — 2022–2026",
};

// ─── BLOG POSTS ──────────────────────────────────────────────────────────────
export const blogPosts = [
  {
    title: "From watching the story to building inside it",
    excerpt: "Back in 2021, when Zepto had just started, I remember watching the entire story unfold — two founders, YC, insane speed. And now I get to be part of that journey.",
    reactions: 209,
    url: "https://www.linkedin.com/posts/aishwarye-jain-9535b4221_zepto-product-quickcommerce-activity-7465054144165339136-SdsM",
    tag: "Career",
  },
  {
    title: "What clearing Google APM Round 1 taught me",
    excerpt: "Structured thinking matters more than speed. Clear user segmentation drives better solutions. Going deep on one problem is stronger than listing features.",
    reactions: 68,
    url: "https://www.linkedin.com/posts/aishwarye-jain-9535b4221_productmanagement-apm-google-activity-7432427979068055552-MY_X",
    tag: "Product",
  },
  {
    title: "Spotted in Bangalore Times",
    excerpt: "Getting featured in Bangalore Times with the Prorata Car team. A reminder of how far passion and hustle can take you.",
    reactions: 38,
    url: "https://www.linkedin.com/posts/aishwarye-jain-9535b4221_featured-bangaloretimes-timesofindia-activity-7350743419230568448-f4Nz",
    tag: "Featured",
  },
];

// ─── CONTACT ─────────────────────────────────────────────────────────────────
export const contact = {
  email: "jainaishwarye2004@gmail.com",
  linkedin: "https://www.linkedin.com/in/aishwarye-jain-9535b4221",
  github: "https://github.com/aishjain02",
  resume: "/resume.pdf",
};
