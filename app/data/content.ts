// ─── HERO ────────────────────────────────────────────────────────────────────
export const hero = {
  headline: "I build products where messy problems meet technology.",
  subline: "Currently building at Zepto. Previously Superset · Unacademy · Prorata · Pinewheel",
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
  { label: "Domain", value: "Consumer · AI · B2B SaaS", sub: "Where I play" },
  { label: "Stack", value: "Zepto · Superset · Unacademy", sub: "Companies I've shipped at" },
  { label: "Strength", value: "Product × Data × AI", sub: "Tools I think with" },
  { label: "Scale", value: "20M+ impressions", sub: "Customer impact delivered" },
];

// ─── IMPACT NUMBERS ──────────────────────────────────────────────────────────
export const impacts = [
  { number: 25, suffix: "+", category: "Zepto", label: "Homepage events managed" },
  { number: 20, suffix: "M+", category: "Zepto", label: "Customer impressions delivered" },
  { number: 1.5, suffix: "M+", category: "Zepto", label: "Customer interactions" },
  { number: 90, suffix: "%", category: "Event Helper", label: "Fewer scheduling errors" },
  { number: 80, suffix: "%", category: "Event Helper", label: "Less manual effort" },
  { number: 150, suffix: "+", category: "Superset", label: "Assessment sessions analyzed" },
];

// ─── FEATURED CASE STUDIES ───────────────────────────────────────────────────
export const featuredCaseStudies = [
  {
    number: "01",
    title: "Zepto Event Helper",
    company: "Zepto",
    slug: "zepto-event-helper",
    problem: "Homepage merchandising setup was fully manual - scheduling, creatives, validation, rollout - with compounding errors at each step.",
    hook: "The question wasn't 'how do we move faster?' It was 'why does this need human hands at all?'",
    tags: ["AI", "Automation", "Internal Tools"],
    type: "Shipped",
  },
  {
    number: "02",
    title: "Vision AI",
    company: "Independent",
    slug: "visionai",
    problem: "Remote interview candidates had no feedback during interviews. The only signal was a rejection email days later - too late to be useful.",
    hook: "The only feedback most candidates ever got was a rejection email. That's too late to be useful to anyone.",
    tags: ["AI", "Gemini API", "React"],
    type: "Shipped",
  },
  {
    number: "03",
    title: "VIBE",
    company: "Superset",
    slug: "vibe",
    problem: "Reviewing 150+ assessment recordings manually for integrity checks was unsustainable - and inconsistent.",
    hook: "The challenge wasn't detecting cheating automatically. It was reducing reviewer workload without building a black-box judgment system.",
    tags: ["AI", "0→1", "B2B"],
    type: "Product Concept",
  },
  {
    number: "04",
    title: "PakkaRide",
    company: "Independent",
    slug: "pakkaride",
    problem: "Ride-hailing fails exactly when demand is highest. The root cause isn't supply - it's incentive misalignment.",
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
    role: "Product Specialist - Shopping Experience",
    period: "May 2026 – Present",
    location: "Bengaluru",
    color: "#2563EB",
    bullets: [
      "Built an AI-powered Event Helper that unified homepage event setup, creative updates, previews, validation, and production rollout into a single UI, reducing launch time by 30 minutes/event, manual effort by 80%, and scheduling errors by 90%.",
      "Built SQL-based validation frameworks for widget configuration, deeplink verification, scheduling, and launch QC - improving reliability of high-volume homepage launches.",
      "Owned 25+ homepage merchandising campaigns and experiments across FMCG, Electronics, Fashion and Seasonal categories, partnering with business, design and engineering - driving 20M+ impressions and 1.5M+ interactions",
      "Led Janmashtami marquee event end-to-end - one of Zepto's largest and highest-impact festive campaigns, driving significant incremental orders, GSV and demand across 40+ festive SKU categories",
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
      "Owned Superset Pro workflows across SME hiring, assessments, candidate shortlisting and recruitment execution - 12L student pool, 4L weekly outreach, 7.4K assessment seats",
      "Analyzed 150+ assessment sessions to identify user friction, platform misuse and assessment integrity issues",
      "Built VIBE - an AI-assisted assessment integrity system using computer vision and behavioral signals to flag suspicious sessions for review",
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
      "Worked directly with the founding team on 0→1 product development for the driver experience.",
      "Designed key Driver App workflows, including pickup/drop and operational journeys.",
      "Conducted user research and feedback analysis to identify friction and product opportunities.",
      "Defined API/data requirements and product workflows, bridging user needs with design and engineering.",
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

// ─── BUILDS (STAR format) ────────────────────────────────────────────────────
export const shipped = [
  {
    title: "Zepto Event Helper",
    situation: "Every homepage event launch required 2+ hours of manual work across scheduling, creatives, widget config, deeplink validation, and rollout - each step error-prone and untracked.",
    task: "Eliminate the manual dependency entirely - not faster, fully automated. Zero-touch homepage launches.",
    action: "Built an AI-assisted workflow unifying the full pipeline: event setup, creative linking, deeplink validation, preview generation, and staged rollout - all from a single input.",
    result: "Reduced per-event launch time by 30 min. Cut manual effort by 80%. Eliminated 90% of scheduling errors that previously required post-launch fixes.",
    tags: ["AI", "Automation", "Internal Tool"],
    slug: "zepto-event-helper",
  },
  {
    title: "Vision AI - Interview Assistant",
    situation: "Candidates get stuck during interviews not from lack of knowledge - structuring an answer under pressure is a separate skill. There's no support during the conversation itself.",
    task: "Build a real-time AI assistant that gives contextual guidance the moment a candidate gets stuck - without replacing their thinking.",
    action: "Full 0→1: 35+ user interviews, roadmap, MVP in React + Node.js + Gemini API. Live transcription feeds real-time AI cues for question framing and answer structure.",
    result: "Working MVP shipped with live transcription and AI interview insights. 35+ candidates researched. Roadmap and success metrics defined.",
    tags: ["AI", "Gemini API", "React", "Node.js", "0→1"],
    slug: "visionai",
  },
  {
    title: "VIBE - Assessment Integrity",
    situation: "Reviewing 150+ assessment recordings meant full-playback watching - hours of effort, and reviewer judgment varied significantly person to person.",
    task: "Reduce reviewer workload without auto-judging candidates. Keep humans in the decision loop, remove them from the search process.",
    action: "Built behavioral signal detection: head pose, gaze tracking, voice patterns. System timestamps flagged moments - reviewers jump to evidence, not 45-min full playbacks.",
    result: "Per-session review time significantly reduced. Reviewers stay in control. Piloted across 150+ sessions at Superset.",
    tags: ["Computer Vision", "B2B SaaS", "HR Tech"],
    slug: "vibe",
  },
  {
    title: "AI Smart Attendance System",
    situation: "Manual attendance took 5-10 min per class, was proxy-manipulable, and generated zero usable records for administration.",
    task: "Replace the process passively - no behavior change from students, fully auditable output for faculty.",
    action: "Built face recognition with Python + OpenCV + ESP32-CAM. Students auto-recognized on entry, attendance logged with timestamps, faculty dashboard surfaces patterns.",
    result: "Marking time down to seconds. Proxy attendance dropped to zero in pilot. First structured, queryable attendance data for faculty.",
    tags: ["Python", "OpenCV", "Computer Vision"],
    slug: "ai-attendance",
    github: "https://github.com/aishjain02/PiVision-Attendance-System",
  },
];

export const experiments = [
  {
    title: "PakkaRide",
    situation: "Ride-hailing fails exactly when demand is highest - late nights, rain, peak hours. The service breaks precisely when reliability matters most.",
    task: "Determine if the core issue is supply shortage or incentive misalignment - before building anything.",
    action: "Research across 80+ riders and drivers. Built a reliability-first concept around one fixed corridor - validating guaranteed availability before any scaling.",
    result: "It's an incentives problem, not supply. 68% of drivers felt surge earnings didn't reflect actual risk. Validated demand for commitment-based availability.",
    tags: ["Consumer", "Marketplace", "Research", "Operations Management"],
    slug: "pakkaride",
  },
  {
    title: "HumanRET - AI Ad Manager",
    situation: "SMBs want to run digital ads but lack the platform knowledge, creative skills, and time. Most SMB ad spend is wasted on poor setup.",
    task: "Make campaign management disappear - upload a photo, get results. No platform expertise required.",
    action: "Built an autonomous AI ad manager: photo + description → AI generates creatives → launches → monitors ROAS → auto-optimizes bidding.",
    result: "Setup under 5 minutes in prototype testing. Competitive ROAS vs manually run SMB campaigns in early tests.",
    tags: ["AI", "SaaS", "Automation"],
    github: "https://github.com/aishjain02/HumanRet",
  },
  {
    title: "AI Customer Support Agent",
    situation: "Tier-1 support is repetitive and expensive - but full automation risks wrong or irrelevant resolutions at scale.",
    task: "Design a decision architecture for when AI resolves, when it clarifies, and when it escalates to humans.",
    action: "Built an n8n-based AI support workflow with branching logic to resolve, clarify, or escalate customer queries based on context and confidence.",
    result: "Designed a human-in-the-loop support system where AI handles routine queries while ambiguous or low-confidence cases are routed to human agents.",
    tags: ["AI Agents", "n8n", "LLM Workflows", "AI Automation", "Human-in-the-Loop"]
  },
  {
    title: "Smart Wardrobe - Ideathon Winner",
    situation: "Most people use 20% of their wardrobe 80% of the time - not from lack of clothes, but because outfit decisions are context-blind.",
    task: "Remove the decision entirely using context the user already has - weather, calendar, occasion, mood.",
    action: "Designed an AI outfit selector with weather API, occasion tagging, and preference learning. Pitched at Anveshana Ideathon against 40+ teams.",
    result: "Won the Ideathon. Judges cited problem framing and feasibility of the AI personalization layer as key differentiators.",
    tags: ["AI","Personalization", "Consumer Product", "Recommendation Systems"],
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
    body: "Most operational pain is a symptom of a product problem. I look for the step that creates the most repeated manual work - that's usually where the leverage is.",
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
  { quote: "A dashboard is useless if nobody makes a decision from it.", context: "Analytics that don't change behavior aren't analytics - they're reports." },
  { quote: "Operational pain is often a symptom of a product problem.", context: "When a team keeps solving the same thing manually, that's a signal - not a process failure." },
];

// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const skills = [
  {
    category: "Product",
    icon: "🎯",
    items: ["Product Discovery", "User Research", "PRDs", "MVP Design", "Feature Prioritization", "A/B Testing", "GTM", "Roadmapping", "Stakeholder Management"],
  },
  {
    category: "Analytics & Data",
    icon: "📊",
    items: ["SQL", "Python", "Power BI", "MixPanel", "Tableau", "Google Analytics", "Excel"],
  },
  {
    category: "Design & Build",
    icon: "✏️",
    items: ["Figma", "React", "Node.js", "REST APIs", "Postman", "GitHub", "User Flows"],
  },
  {
    category: "AI, Automation & Tools",
    icon: "🤖",
    items: ["n8n", "Lovable", "Notion", "Voiceflow", "Amplitude", "Granola", "AI Agents - Claude, Cursor, Gemini, OpenAI"],
  },
];


// ─── ACHIEVEMENTS ────────────────────────────────────────────────────────────
export const achievements = [
  { title: "Winner - Anveshana Ideathon", desc: "AI Smart Wardrobe concept, BMSIT", icon: "🏆" },
  { title: "Top Prize - EPOCH'24 Hackathon", desc: "WellFi - AI Companion for Yoga & Meditation", icon: "🥇" },
  { title: "Featured in Bangalore Times", desc: "Times of India, Pg. 6 - Prorata Car", icon: "📰" },
  { title: "Cleared Google APM Rounds", desc: "Advanced to 5-interview panel", icon: "🎯" },
];

// ─── ABOUT ───────────────────────────────────────────────────────────────────
export const about = {
  positioning: "I like building products, but I'm more interested in figuring out what should be built, why it matters, and whether it actually works.",
  bio: [
    "My approach to product starts with the problem: understand the user, dig into the data, identify the real friction, and turn it into a clear product opportunity. From there, I work across product strategy, user research, prioritization, PRDs, experimentation, and execution to take ideas from 0→1 and improve products already in the hands of users.",
    "That's shaped my experience across Zepto, Superset, and Unacademy, where I've worked on consumer experiences, AI products, hiring workflows, and product operations. Alongside my roles, I've independently built products across AI, mobility, commerce, and SaaS to explore problems end-to-end.",
    "My background is engineering, but my experience has taken me through Sales → Marketing → Growth → GTM → Product Operations → Product. That gives me a broader view of how products are not just built, but positioned, adopted, operated, and grown.",
    "I'm at my best when I can own a problem end-to-end: discover → define → prioritize → build → launch → measure → iterate.",
  ],
  education: "B.E. Electrical & Electronics Engineering, BMSIT - 2022-2026",
};

// ─── BLOG POSTS ──────────────────────────────────────────────────────────────
export const blogPosts = [
  {
    title: "From watching the story to building inside it",
    excerpt: "Back in 2021, when Zepto had just started, I remember watching the entire story unfold - two founders, YC, insane speed. And now I get to be part of that journey.",
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
