export const caseStudy = {
  number: "02",
  title: "Vision AI",
  subtitle: "A real-time AI interview assistant built to help candidates stay confident, understand questions, and structure their answers when they get stuck.",
  company: "Independent",
  type: "Shipped",
  tags: ["AI", "Gemini API", "React", "Node.js", "0→1"],
  hook: "I had experienced it myself: sometimes you know the answer, but you get stuck figuring out how to structure it. Vision AI was built to give candidates that support when they need it most.",
  related: ["zepto-event-helper", "vibe", "pakkaride"],

  sections: [
    {
      id: "context",
      label: "01 - Context",
      content: "Interviews are high-pressure and time-bound. Candidates can prepare extensively and still freeze when an unexpected question comes up. I experienced this firsthand, particularly during product interviews where the challenge isn't always knowing the answer. It's knowing how to approach the problem, what questions to ask, which framework to use, and how to structure the response.",
    },
    {
      id: "problem",
      label: "02 - Problem",
      content: "Candidates often get stuck during interviews because they lack a real-time feedback or guidance loop.",
      bullets: [
        "Confidence drops: candidates can second-guess answers they actually know",
        "Unclear structure: it's difficult to decide whether to answer directly or use a framework",
        "No real-time support: most interview preparation happens before the interview, not during the conversation",
        "High-pressure decisions: candidates need to quickly identify users, clarify the problem, develop solutions, and define metrics",
      ],
    },
    {
      id: "evidence",
      label: "03 - Evidence",
      content: "I conducted research with 35+ candidates to understand how people prepare for and experience interviews. The research, combined with my own experience, helped validate the need for better support around question understanding, answer structure, and confidence during interviews.",
    },
    {
      id: "users",
      label: "04 - Users",
      content: "Primary users are candidates preparing for product, engineering, analyst, and other structured interviews where problem-solving approach and answer structure matter alongside the actual answer.",
    },
    {
      id: "insight",
      label: "05 - Insight",
      content: "The key insight was simple: candidates don't always need the answer. They need help figuring out how to arrive at and communicate the answer. For product interviews especially, that can mean knowing what to ask the interviewer, identifying the right users, defining the problem, exploring solutions, and choosing meaningful metrics.",
    },
    {
      id: "opportunity",
      label: "06 - Opportunity",
      content: "Build a real-time AI assistant that can understand the interview conversation and provide contextual guidance exactly when the candidate gets stuck. The goal wasn't to replace the candidate's thinking. It was to give them enough signal to regain confidence and continue the conversation.",
    },
    {
      id: "solution",
      label: "07 - Solution",
      content: "Vision AI is a real-time AI interview assistant that listens to the conversation and provides relevant guidance alongside the interview.",
      bullets: [
        "Live transcription: captures the interview conversation in real time",
        "Question understanding: helps identify what the interviewer is actually asking",
        "Answer guidance: surfaces relevant approaches, frameworks, and potential directions",
        "Product interview frameworks: helps structure problem definition, users, solutions, and metrics",
        "Interview insights: provides additional context to help candidates understand and improve their responses",
        "Real-time experience: designed to provide support while the conversation is happening, not only after it ends",
      ],
    },
    {
      id: "tradeoffs",
      label: "08 - Trade-offs",
      content: "The biggest design trade-off was between helpfulness and distraction. Too much information can make candidates dependent on the tool and disrupt the natural flow of an interview. The product therefore focuses on giving relevant direction rather than generating an entire answer for the candidate.",
    },
    {
      id: "execution",
      label: "09 - Execution",
      content: "I owned the product from problem discovery → user research → roadmap → feature prioritization → MVP development. Built the working MVP using React, Node.js, and the Gemini API, with live transcription and AI-generated interview insights.",
    },
    {
      id: "metrics",
      label: "10 - Metrics",
      content: "Early validation metrics from the MVP:",
      bullets: [
        "35+ candidates researched during product discovery",
        "Working MVP shipped with live transcription and interview insights",
        "Defined product roadmap, feature prioritization framework, and success metrics",
        "Next: usage, accuracy, retention, and interview-outcome metrics once measured data is available",
      ],
    },
    {
      id: "edgecases",
      label: "11 - Edge Cases",
      content: "The product needs to handle different interview formats, ambiguous questions, technical questions, interruptions, accents, background noise, and situations where the AI's interpretation of the question is incorrect. Another important challenge is avoiding over-reliance on AI - the candidate should remain the person solving the problem, with AI acting as support rather than a crutch.",
    },
    {
      id: "learnings",
      label: "12 - Learnings",
      content: "The biggest lesson from Vision AI was that good AI products don't necessarily give users more information. They give users the right information at the right moment. The product also reinforced something important about 0→1 building: personal pain can be a strong starting point, but it still needs to be validated with real users before turning it into a product.",
    },
    {
      id: "next",
      label: "13 - What I'd Test Next",
      content: "I'd test whether real-time guidance actually improves interview performance, rather than simply making candidates feel more confident. The next version could measure improvements in answer structure, time-to-response, completeness, and candidate confidence across repeated interview sessions.",
    },
  ],
};
