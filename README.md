# Aishwarye Jain - Portfolio

Personal portfolio site built to show how I think, what I've shipped, and the problems I've worked on.

**Live:** [aishwaryejain]([(https://aishwaryeportfolio.vercel.app/]) &nbsp;·&nbsp; **LinkedIn:** [aishwarye-jain](https://www.linkedin.com/in/aishwarye-jain-9535b4221) &nbsp;·&nbsp; **Email:** jainaishwarye2004@gmail.com

---

## What's inside

A production-grade Next.js portfolio with full case studies, animated components, and a mobile-first design.

### Sections
- **Hero** - Animated impact numbers (impressions, interactions, events)
- **Quick Scan** - Domain, stack, strengths at a glance
- **Case Studies** - 6 detailed case studies with full problem/execution/outcome breakdowns
- **Builds** - Shipped products and experiments with S/T/A/Result format
- **How I Think** - Product principles
- **Now** - What I'm working on, reading, and learning
- **About** - Background, journey, education

### Case Studies
| # | Title | Type |
|---|-------|------|
| 01 | Zepto Event Helper - AI automation for homepage merchandising | Shipped |
| 02 | Vision AI - AI interview assistant for candidates | Shipped |
| 03 | VIBE - Video interview behaviour evaluation system | Shipped |
| 04 | PakkaRide - Ride-sharing platform | Shipped |
| 05 | AI Smart Attendance - ESP32-CAM + face recognition system | Shipped |
| 06 | BigBasket Teardown - Product teardown & analysis | Analysis |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion v13 |
| Icons | Lucide React |
| Deployment | Vercel |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

---

## Project Structure

```
app/
├── components/          # All UI components
│   ├── Hero.tsx         # Landing section with animated numbers
│   ├── Navbar.tsx       # Full-screen overlay navigation
│   ├── QuickScan.tsx    # 4-cell identity grid
│   ├── ImpactWall.tsx   # Animated metric tiles
│   ├── FeaturedCaseStudies.tsx
│   ├── Builds.tsx       # Shipped / Experiments tabs
│   ├── HowIThink.tsx    # Product principles
│   ├── NowSection.tsx   # Current focus
│   ├── About.tsx        # Bio and background
│   └── ...
├── case-studies/        # Individual case study pages
│   ├── zepto-event-helper/
│   ├── visionai/
│   ├── vibe/
│   ├── pakkaride/
│   ├── ai-attendance/
│   └── bigbasket/
├── data/
│   ├── content.ts       # All homepage content
│   └── case-studies/    # Structured data for each case study
└── globals.css          # Tailwind v4 theme
```

---

## Design Decisions

- **No CMS** - All content lives in typed TypeScript files for full control and zero latency
- **Static generation** - Every page is pre-rendered; no server-side data fetching
- **Mobile-first** - Designed for phone first, scaled up to desktop
- **No analytics scripts** - Clean, fast, no third-party trackers
- **Framer Motion** - Used selectively for meaningful animations (not decorative)

---

## License

Personal portfolio - not intended for reuse as a template. Feel free to draw inspiration but please don't copy it wholesale.
