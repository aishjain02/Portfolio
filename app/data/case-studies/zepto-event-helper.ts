export const caseStudy = {
  number: "01",
  title: "Zepto Event Helper",
  subtitle: "Turning a repetitive homepage merchandising workflow into an AI-powered launch system.",
  company: "Zepto",
  type: "Shipped",
  tags: ["AI", "Automation", "Internal Tools", "Cursor"],
  hook: "The question wasn't 'how do we move faster?' It was 'why does this need human hands?'",
  related: ["bigbasket", "vibe", "pakkaride"],

  sections: [
    {
      id: "context",
      label: "01 - Context",
      content: "At Zepto, I work on the shopping experience - specifically homepage merchandising. The homepage is a high-stakes surface: it drives CTR, ATC rates, GSV and GPPO across millions of daily sessions. Each homepage 'event' (a campaign or themed experience) involves multiple teams, multiple steps, multiple tools and a fixed deadline. Getting it right, every time, without a standardized system was the core challenge.",
    },
    {
      id: "problem",
      label: "02 - Problem",
      content: "Every event required the same sequence of steps: setting up widget configurations, banner configurations, updating creatives, generating preview links, running validation checks, verifying deeplinks and pushing to production. The entire process was manual, performed by the same team across every single event. At 25+ events, this wasn't a workflow - it was a recurring fire drill.",
      bullets: [
        "~1.5 hours of manual work per event launch",
        "Multiple manual validation steps, each a potential error point",
        "No standardized QA - checks depended on individual memory",
        "Scheduling errors were common and often caught only after launch",
      ],
    },
    {
      id: "evidence",
      label: "03 - Evidence",
      content: "I tracked launch times and error types across several events. The pattern was clear: most time was lost not in the actual creative or product decisions, but in the repeated setup and validation loops that were identical every time. The work wasn't complex - it was just relentlessly repetitive.",
    },
    {
      id: "users",
      label: "04 - Users",
      content: "Primary user: the merchandising and product ops team running homepage events. The pain was not in doing the work - it was in doing the same work again and again with no systemic support. Secondary user: the engineering and design teams who were regularly pulled in for validation steps that should have been automated from the start.",
    },
    {
      id: "insight",
      label: "05 - Insight",
      content: "The biggest insight was that the problem wasn't slow execution - it was structural. The workflow had too many manual decision points where human judgment added no real value. Validation, deeplink checks, scheduling - these had deterministic correct answers. They didn't need human review. They needed rules.",
    },
    {
      id: "opportunity",
      label: "06 - Opportunity",
      content: "If the repeatable steps could be automated and the validation logic codified, the team could go from touching 15 manual steps down to 1-2 decision points per event. That's a workflow transformation, not just a speed improvement. The goal was to make humans responsible for decisions, not execution.",
    },
    {
      id: "solution",
      label: "07 - Solution",
      content: "I built Zepto Event Helper - an AI automation workflow that unified the full event launch pipeline into a single triggerable system. The system handles everything between intent and approval:",
      bullets: [
        "Event setup: configuration templates auto-populated based on event type",
        "Creative updates: automated ingestion and mapping to widget slots",
        "Preview generation: one-click preview links without manual URL construction",
        "Validation: automated deeplink verification, scheduling checks and widget config audits",
        "Testing: automated QA with a clear pass/fail log for every check",
        "Production rollout: gated behind a single human approval after all checks pass",
      ],
    },
    {
      id: "tradeoffs",
      label: "08 - Trade-offs",
      content: "I deliberately kept human approval as the final gate before production. The system flags and validates - it does not autonomously ship. This was a conscious choice: full automation would have been faster, but in a high-traffic consumer context, the cost of a wrong creative or misconfigured widget at scale is too high. The human checkpoint is the right guardrail, not a limitation.",
    },
    {
      id: "execution",
      label: "09 - Execution",
      content: "Built with AI-assisted validation logic. Designed around the existing team workflow rather than forcing new processes - the trigger point was familiar, the output was familiar, only the middle was automated. Rolled out in production incrementally, starting with one event type before generalizing to the full event calendar.",
    },
    {
      id: "metrics",
      label: "10 - Metrics",
      content: "Measured against baseline across 10+ events before and after deployment.",
      bullets: [
        "Launch time: reduced by 30 min/event",
        "Manual effort: reduced by 80%",
        "Scheduling errors: reduced by 90%",
        "Post-launch corrections: significantly fewer - issues caught pre-production",
      ],
    },
    {
      id: "edgecases",
      label: "11 - Edge Cases",
      content: "Non-standard event formats that don't fit existing templates require manual override. Creative format and size mismatches occasionally need human intervention. Validation failures surface clearly in the dashboard - but the team still needs to understand and resolve the root cause. The system surfaces the problem; it doesn't always know the fix.",
    },
    {
      id: "learnings",
      label: "12 - Learnings",
      content: "The most important design decision was keeping human judgment exactly where it matters - final approval - and removing it from everywhere it doesn't add value. Teams are often resistant to automation because they conflate 'automation' with 'losing control.' The product's job was to make it clear they were gaining control, not losing it. That framing changed how the team received it.",
    },
    {
      id: "next",
      label: "13 - What I'd Test Next",
      content: "An anomaly detection layer that learns from past event performance - flagging when a current event setup looks significantly different from high-performing past events. The system currently validates configuration correctness. The next question is: does this event setup have the right ingredients to actually perform well, not just launch cleanly?",
    },
  ],
};
