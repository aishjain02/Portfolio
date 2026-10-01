export const caseStudy = {
  number: "01",
  title: "Zepto Event Helper",
  subtitle: "Turning a repetitive merchandising workflow into an AI-powered launch system.",
  company: "Zepto",
  type: "Shipped",
  tags: ["AI", "Automation", "Internal Tools", "n8n"],
  hook: "The question wasn't 'how do we move faster?' It was 'why does this need human hands at all?'",
  related: ["bigbasket", "vibe", "pakkaride"],

  sections: [
    {
      id: "context",
      label: "01 — Context",
      content: "At Zepto, I work on the shopping experience — specifically homepage merchandising. The homepage is a high-stakes surface: it drives CTR, ATC rates, and GSV across millions of daily sessions. Each homepage 'event' (a campaign or themed experience) involves multiple teams, multiple steps, and a fixed deadline.",
    },
    {
      id: "problem",
      label: "02 — Problem",
      content: "Every event required the same sequence of steps: setting up widget configurations, updating creatives, generating preview links, running validation checks, verifying deeplinks, and pushing to production. The entire process was manual, performed by the same team across every single event. At 25+ events, this wasn't a workflow — it was a recurring fire drill.",
      bullets: [
        "~2 hours of manual work per event launch",
        "Multiple manual validation steps, each a potential error point",
        "No standardized QA — checks depended on individual memory",
        "Scheduling errors were common and often caught only after launch",
      ],
    },
    {
      id: "evidence",
      label: "03 — Evidence",
      content: "I tracked launch times and error types across several events. The pattern was clear: most time was lost not in the actual creative or product decisions, but in the repeated setup and validation loops that were identical every time.",
    },
    {
      id: "users",
      label: "04 — Users",
      content: "Primary user: the merchandising and product ops team running homepage events. The pain was not in doing the work — it was in doing the same work again and again with no systemic support. Secondary user: the engineering and design teams who were pulled in for validation steps that should have been automated.",
    },
    {
      id: "insight",
      label: "05 — Insight",
      content: "The biggest insight was that the problem wasn't slow execution. It was that the workflow had too many manual decision points where human judgment added no real value. Validation, deeplink checks, scheduling — these had deterministic correct answers. They didn't need human review. They needed rules.",
    },
    {
      id: "opportunity",
      label: "06 — Opportunity",
      content: "If the repeatable steps could be automated and the validation logic codified, the team could go from touching 15 manual steps to touching 1–2 decision points per event. That's a workflow transformation, not just a speed improvement.",
    },
    {
      id: "solution",
      label: "07 — Solution",
      content: "I built Zepto Event Helper — an AI/n8n automation workflow that unified the full event launch pipeline into a single triggerable system.",
      bullets: [
        "Event setup: configuration templates auto-populated based on event type",
        "Creative updates: automated ingestion and mapping to widget slots",
        "Preview generation: one-click preview links without manual URL construction",
        "Validation: automated deeplink verification, scheduling checks, widget config audits",
        "Testing: automated QA pass/fail with clear failure logs",
        "Production rollout: gated behind a single human approval after all checks pass",
      ],
    },
    {
      id: "tradeoffs",
      label: "08 — Trade-offs",
      content: "I deliberately kept human approval in the final step before production. The system flags and validates — it doesn't autonomously ship. This was a conscious choice: full automation would have been faster, but in a high-traffic consumer context, the cost of a wrong creative or misconfigured widget at scale is too high. The human checkpoint is the right guardrail.",
    },
    {
      id: "execution",
      label: "09 — Execution",
      content: "Built on n8n with AI-assisted validation logic. Designed around the existing team workflow rather than forcing new processes — the trigger point was familiar, the output was familiar, only the middle was automated. Rolled out incrementally, starting with one event type before generalizing.",
    },
    {
      id: "metrics",
      label: "10 — Metrics",
      content: "Measured against baseline across 5+ events before and after.",
      bullets: [
        "Launch time: reduced by 30 minutes per event",
        "Manual effort: reduced by 80%",
        "Scheduling errors: reduced by 90%",
        "Post-launch corrections: significantly fewer — caught pre-production",
      ],
    },
    {
      id: "edgecases",
      label: "11 — Edge Cases",
      content: "Non-standard event formats that don't fit templates require manual override. Creative format mismatches occasionally require human intervention. Validation failures surface clearly in the dashboard — but the team still needs to understand and resolve the root cause.",
    },
    {
      id: "learnings",
      label: "12 — Learnings",
      content: "The most important design decision was keeping human judgment exactly where it matters — final approval — and removing it everywhere it doesn't. Teams are often resistant to automation because they conflate 'automation' with 'losing control.' The product's job was to make it clear they were gaining control, not losing it.",
    },
    {
      id: "next",
      label: "13 — What I'd Test Next",
      content: "An anomaly detection layer that learns from past event performance — flagging when a current event setup looks significantly different from high-performing past events. The system currently validates configuration correctness. The next question is: does this event setup have the right ingredients to actually perform?",
    },
  ],
};
