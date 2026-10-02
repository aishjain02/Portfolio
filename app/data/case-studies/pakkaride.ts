export const caseStudy = {
  number: "04",
  title: "PakkaRide",
  subtitle: "What if ride-hailing reliability was designed around driver availability instead of surge?",
  company: "Independent",
  type: "Product Concept",
  tags: ["Consumer", "Marketplace", "Research", "Mobility"],
  hook: "We started with the hypothesis that ride reliability is an availability problem. The research showed it's actually an incentives problem.",
  related: ["zepto-event-helper", "bigbasket", "vibe"],

  sections: [
    {
      id: "context",
      label: "01 - Context",
      content: "Ride-hailing in Bengaluru is a high-frequency, high-frustration product. Working professionals depend on it for daily commutes - and it fails consistently at the moments of peak need: morning rush, bad weather, late night. The major platforms address this with surge pricing. The question I explored: is surge pricing the right product lever, or is it a workaround for a deeper design failure?",
    },
    {
      id: "problem",
      label: "02 - Problem",
      content: "Ride-hailing breaks down at exactly the moments when demand is highest. Users face a compound problem: cancellations, long ETAs, and surge pricing - all at the same time. The experience is not just frustrating - it's unpredictable, which is worse.",
      bullets: [
        "82% of surveyed Bengaluru app-cab users reported cancellations",
        "53% experienced long wait times on a regular basis",
        "62% experienced surge pricing during commute hours",
        "The compound effect: users can't rely on the platform when they need it most",
      ],
    },
    {
      id: "evidence",
      label: "03 - Evidence",
      content: "Primary research with Bengaluru cab users surfaced a pattern the app-side data might not show: the driver side of the problem.",
      bullets: [
        "68% of surveyed drivers felt earnings didn't match the displayed surge for riders",
        "Drivers were selectively accepting rides based on destination - maximizing their own route efficiency, not platform efficiency",
        "During peak demand, experienced drivers often went offline or became selectively available - the opposite of what the platform needed",
        "Key finding: surge pricing increased rider cost without proportionally increasing driver earnings or availability",
      ],
    },
    {
      id: "users",
      label: "04 - Users",
      content: "Two-sided marketplace. Rider side: working professionals with predictable commute patterns - they have known origin and destination, fixed timing, and high willingness to pay for reliability (not just low price). Driver side: experienced drivers who know high-demand windows and routes, and make rational decisions about when and where to be available based on expected earnings.",
    },
    {
      id: "insight",
      label: "05 - Insight",
      content: "The most important insight from the research: the root cause of unreliability is not insufficient supply. It is insufficient guaranteed availability. There are enough drivers. But they are not available at the right place, right time, with the right incentive to accept the right ride. Surge pricing tries to solve this with price signals. But the research showed drivers don't respond to surge the way the model assumes - because the driver's actual earnings from surge are lower than the rider perceives.",
    },
    {
      id: "opportunity",
      label: "06 - Opportunity",
      content: "If driver incentives could be redesigned to reward guaranteed availability on specific corridors at specific times - rather than rewarding reactive acceptance of any surge ride - the supply-demand mismatch could be addressed at the source. This is a marketplace incentive design problem, not a matching algorithm problem.",
    },
    {
      id: "solution",
      label: "07 - Solution",
      content: "PakkaRide: a reliability-first platform built on pre-committed driver availability, not reactive surge.",
      bullets: [
        "Drivers commit to being available on a specific corridor during a specific time window - in exchange for a guaranteed earnings floor",
        "Riders on that corridor get a reliability guarantee: ride available within X minutes, no surge, no cancellation",
        "Platform pays the earnings floor from a corridor-specific fund, recovered through a small reliability premium from riders who value predictability over price",
        "MVP scope: one corridor (e.g. HSR Layout → MG Road), one segment (working professionals, 8–10AM and 6–8PM), concierge-style execution to validate before tech investment",
      ],
    },
    {
      id: "tradeoffs",
      label: "08 - Trade-offs",
      content: "I deliberately chose not to design a full city-wide platform. The temptation in marketplace products is to launch everywhere and let network effects take over. The right call here is to validate reliability on a narrow corridor first - because reliability is the core value proposition. If it doesn't work on one corridor, it won't work at scale. Starting narrow also allows for manual guarantee fulfillment, which is impossible at scale but essential for learning.",
    },
    {
      id: "execution",
      label: "09 - Execution",
      content: "MVP execution plan: Recruit 10–15 drivers willing to commit to the HSR-MG corridor for AM/PM peaks. Recruit 50–100 working professionals on that corridor. Operate concierge-style: manual ride matching, WhatsApp-based booking, manual payout tracking. Run for 4 weeks. Measure every data point before writing a single line of production code.",
    },
    {
      id: "metrics",
      label: "10 - Metrics",
      content: "Success metrics for MVP validation:",
      bullets: [
        "Primary: Ride fulfillment rate on committed corridor (target: >80%)",
        "Secondary: Driver acceptance rate during committed windows (target: >90%)",
        "Driver side: Earnings per committed hour vs. surge-based alternative - does the floor work?",
        "Rider side: Retention rate after first 2 weeks - do reliability users come back?",
        "Guardrail: Guarantee cost per ride - is the economics viable before scaling?",
      ],
    },
    {
      id: "edgecases",
      label: "11 - Edge Cases",
      content: "Driver no-shows during committed windows break the core reliability promise. Needs a backup pool and penalty structure. Demand spikes beyond committed supply require a clear communication protocol - what do riders see when the guarantee can't be fulfilled? Corridor selection is critical: wrong corridor means low rider density and guarantee economics don't work.",
    },
    {
      id: "learnings",
      label: "12 - Learnings",
      content: "The key product lesson from PakkaRide: in marketplace problems, user experience is downstream of incentive design. You can't fix a two-sided experience by only improving one side. The breakthrough in this concept was realizing that the 'fix' for rider unreliability was on the driver side - and the driver side needed economic redesign, not just UX improvement.",
    },
    {
      id: "next",
      label: "13 - What I'd Test Next",
      content: "After validating the single-corridor model: corridor expansion economics - does a second corridor share driver supply with the first, or does it require independent recruitment? The hypothesis is that driver supply is partially transferable across adjacent corridors, which would dramatically improve the unit economics of scaling. That's the next experiment.",
    },
  ],
};
