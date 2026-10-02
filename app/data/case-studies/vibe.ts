export const caseStudy = {
  number: "03",
  title: "VIBE",
  fullTitle: "Virtual Interview Behaviour Evaluation",
  subtitle: "Turning 150+ manually reviewed assessment recordings into an AI-assisted integrity system.",
  company: "Superset",
  type: "Product Concept",
  tags: ["AI", "0→1", "B2B SaaS"],
  hook: "The challenge wasn't detecting cheating automatically. It was reducing reviewer workload without building a black-box judgment system.",
  related: ["zepto-event-helper", "bigbasket", "pakkaride"],

  sections: [
    {
      id: "context",
      label: "01 - Context",
      content: "At Superset, I worked on Superset Pro - a hiring platform for SME recruiters. A core part of the platform was proctored online assessments: candidates took skill tests remotely, and sessions were recorded for integrity review. With 12 lakh students in the pool and recurring assessment slots (Wednesday 9PM, Saturday 12PM and 6PM), the volume of recordings was significant.",
    },
    {
      id: "problem",
      label: "02 - Problem",
      content: "Every flagged or spot-checked recording required a human reviewer to watch the full session. A typical assessment was 30-60 minutes. Reviewers were spending hours on recordings where nothing relevant happened - just to confirm that one suspicious 3-minute window.",
      bullets: [
        "Unsustainable at scale: review time grew linearly with session volume",
        "Inconsistency: different reviewers noticed different signals, creating unequal enforcement",
        "No structured output: reviewers made judgment calls with no standardized evidence trail",
        "Privacy risk: full video of candidates stored and watched, even when unnecessary",
      ],
    },
    {
      id: "evidence",
      label: "03 - Evidence",
      content: "I analyzed 150+ assessment recordings systematically. Across sessions, I documented recurring behavioral patterns that correlated with suspicious activity. These weren't random - they were reproducible signals.",
      bullets: [
        "Head pose: extended off-screen gaze (>3 seconds), frequent left/right head turns",
        "Eye gaze: focus leaving screen area, fixation patterns inconsistent with reading/typing",
        "Presence: brief disappearances from frame, third-person entry into background",
        "Voice: extended pauses before answers, filler patterns, coached speech rhythms",
      ],
    },
    {
      id: "users",
      label: "04 - Users",
      content: "Primary user: assessment reviewers and the product/ops team at Superset. They needed a way to spend their review time on the 5% of sessions that warranted attention - not spread equally across 100%. Secondary users: candidates, who deserved a fair, consistent, and privacy-respecting integrity system.",
    },
    {
      id: "insight",
      label: "05 - Insight",
      content: "The key insight from the 150+ session analysis: reviewers didn't need AI to make the judgment call. They needed AI to find the relevant minutes. The problem was not detection accuracy - it was time allocation. A system that surfaces 'here are the 3 minutes you should watch, and why' is more valuable than a system that says 'this candidate cheated.'",
    },
    {
      id: "opportunity",
      label: "06 - Opportunity",
      content: "Build an AI-assisted layer that identifies behavioral signals and surfaces flagged timestamps - turning a 45-minute review into a 5-minute decision point. Keep humans in the decision seat. Remove humans from the search process.",
    },
    {
      id: "solution",
      label: "07 - Solution",
      content: "VIBE is designed as two complementary modules:",
      bullets: [
        "VIBE Vision: Analyzes head pose, eye gaze, presence detection, and fixation patterns using computer vision. Outputs: focus-rate summary, off-screen duration, flagged event timestamps with severity scores",
        "VIBE Voice: Analyzes audio for filler patterns, extended pauses, self-repairs, and fluency anomalies that may indicate coaching or external assistance",
        "Output format: Instead of 'watch this 45-minute recording,' the reviewer gets 'here are 3 flagged segments at [7:22], [23:14], [38:09] - here's why each was flagged.' One-click jump to each timestamp.",
        "Privacy principle: No facial recognition, no identity matching. Behavioral signal detection only - the system flags patterns, not people.",
      ],
    },
    {
      id: "tradeoffs",
      label: "08 - Trade-offs",
      content: "I deliberately chose not to build an auto-verdict system. VIBE flags and surfaces - it does not conclude. This was a product decision, not a technical constraint. An auto-verdict system in hiring has asymmetric risk: a false positive blocks a legitimate candidate. Keeping humans in the final decision seat is the right design choice for this context.",
    },
    {
      id: "execution",
      label: "09 - Execution",
      content: "Designed for browser-side processing - running locally inside the safe exam browser on the candidate's device. This means no full video is transmitted to servers; only behavioral signals (derived features) are logged, not raw frames. This reduces both server load and privacy surface area significantly. The reviewer interface surfaces flagged segments with confidence indicators, not black-box verdicts. Only recordings of candidates flagged for potential violations are sent for human review - honest sessions never leave the device.",
    },
    {
      id: "metrics",
      label: "10 - Metrics",
      content: "Proposed success criteria:",
      bullets: [
        "Primary: ≥50% reduction in per-session reviewer time",
        "Guardrail: ≤10% false-positive rate on flagged segments (honest candidates should not frequently appear in flagged sets)",
        "Quality: ≥80% of honest sessions produce fewer than 2 short flags",
        "Coverage: System should surface relevant signals in ≥90% of sessions that human reviewers would have flagged",
      ],
    },
    {
      id: "edgecases",
      label: "11 - Edge Cases",
      content: "Candidates with disabilities affecting gaze or head movement require configurable sensitivity thresholds and clear reviewer override capabilities. Low-light environments can degrade computer vision accuracy - quality thresholds should suppress low-confidence flags rather than surface noisy data. Multi-language assessment sessions require voice module retraining for filler pattern detection across languages.",
    },
    {
      id: "learnings",
      label: "12 - Learnings",
      content: "The most important lesson from designing VIBE: in any AI system with asymmetric consequences, the product question is always 'where does the human stay in the loop?' Full automation is usually the wrong answer in high-stakes decisions. The goal of the AI layer is to make the human decision faster and better-informed - not to replace it.",
    },
    {
      id: "next",
      label: "13 - What I'd Test Next",
      content: "A calibration phase where human reviewers tag a batch of sessions and the system learns from their decisions - creating a feedback loop that improves signal precision over time. The first version of VIBE uses fixed behavioral rules. The next version should adapt to reviewer judgment patterns at the platform level.",
    },
  ],
};
