export const caseStudy = {
  number: "02",
  title: "BigBasket Product Teardown",
  subtitle: "Analyzing a full user journey to find where trust breaks down in online grocery.",
  company: "BigBasket",
  type: "Case Study",
  tags: ["Consumer", "UX Analysis", "Growth", "E-commerce"],
  hook: "The homepage is built to convert through deals — but it never tells a first-time user why they should trust the platform at all. The most impactful change isn't a new feature. It's fixing the message.",
  related: ["zepto-event-helper", "vibe", "pakkaride"],

  sections: [
    {
      id: "context",
      label: "01 — Context",
      content: "BigBasket is one of India's largest online grocery platforms. With the rise of 10-minute quick commerce, BigBasket faces a two-front challenge: compete on speed with players like Zepto and Blinkit, while leveraging its genuine advantage — wider SKU range, quality assurance, and scheduled delivery. I conducted a product teardown to understand how the app performs across the full user journey and where the experience breaks trust.",
    },
    {
      id: "problem",
      label: "02 — Problem",
      content: "The core product problem I investigated: why does a user who discovers BigBasket leave without transacting, even when their first-time need is clear? The hypothesis going in was that the homepage — the first real interaction — was doing the wrong job.",
    },
    {
      id: "evidence",
      label: "03 — Evidence",
      content: "I ran a structured user journey analysis with a defined persona and task: a 28-year-old tech-savvy professional in Bengaluru buying weekly groceries for a shared flat.",
      bullets: [
        "Discovery: BigBasket ranks top 3 on Google and Play Store for online grocery — strong SEO and ASO",
        "Homepage: Deals-first layout occupying the entire above-the-fold space. No value proposition visible without scrolling",
        "Search: Strong — regional language support, voice search, instant suggestions, SUPERSAVER tags on results",
        "PLP: Good offer visibility, ratings, quick add-to-cart. Missing 'most popular' signals to reduce decision fatigue",
        "Cart: Well-designed — Saved for Later, cross-sell section, deal reinforcement via badges",
        "Login: Truecaller integration reduces friction significantly. Low manual input required",
        "Payment: Wide payment options with cashback visibility. Gentle nudge toward digital payment",
        "Post-order: Upsell prompt after confirmation — timing is wrong; this should appear during checkout",
      ],
    },
    {
      id: "users",
      label: "04 — Users",
      content: "User profile for this teardown: 28-year-old, tech-savvy, Bengaluru-based professional. Shared flat, weekly grocery purchase, all transactions done online. High deal-sensitivity but also values trust and reliability — he's buying food, not electronics. The key tension: he responds to deals but doesn't want to feel like he's compromising on quality to get them.",
    },
    {
      id: "insight",
      label: "05 — Insight",
      content: "The research produced one clear insight that changed the analysis: the homepage is optimized entirely for conversion of existing customers (deals, offers, NeuCard savings). It does almost nothing to build trust with a first-time visitor. For grocery specifically, trust is a precondition for conversion — not a nice-to-have. A first-time user asking 'can I trust the quality here?' gets no answer from the current homepage. They get a deals banner.",
    },
    {
      id: "opportunity",
      label: "06 — Opportunity",
      content: "Three specific opportunities emerged from the teardown, ranked by estimated impact on first-time conversion:",
      bullets: [
        "1. Homepage value proposition: Add a clear trust-building message above the fold for new users (quality assurance, product range, delivery reliability)",
        "2. Social proof: Surface how many people in the user's area shop on BigBasket — locality-specific trust signal",
        "3. Product list signals: Add 'Most Popular' / 'Top Selling' labels to reduce decision fatigue and build implicit trust in product choices",
      ],
    },
    {
      id: "solution",
      label: "07 — Solution",
      content: "Three targeted product changes, designed to be A/B tested independently:",
      bullets: [
        "Trust banner at top fold: 'Wide selection · Guaranteed freshness · Free delivery above ₹X' — visible before the first scroll, collapsed after user signs in or transacts",
        "Locality social proof widget: 'X people in your area ordered today' — dynamic, location-aware, positioned near the CTA",
        "Product list enhancement: 'Top Pick' badge on products with high reorder rates — signals that other buyers consistently choose this item",
        "Bonus: Move post-order upsell (membership prompts, upgrade nudges) into the checkout flow, not the confirmation screen",
      ],
    },
    {
      id: "tradeoffs",
      label: "08 — Trade-offs",
      content: "I deliberately did not recommend a homepage redesign. The deals-first structure works for returning users — disrupting it risks hurting repeat purchase conversion. The recommendations are additive: new content layers for new users that don't interfere with the existing flow for returning ones. The trust banner can be suppressed for logged-in users with purchase history.",
    },
    {
      id: "execution",
      label: "09 — Execution",
      content: "These changes are low-engineering, high-signal experiments. The trust banner is a content + placement change. The social proof widget requires a backend count aggregated by geofence — achievable with existing location data. The product label requires a rule: top 10–15% reorder rate items get the badge. None of these require new infrastructure.",
    },
    {
      id: "metrics",
      label: "10 — Metrics",
      content: "North Star Metric: Weekly Active Buyers (WAB)",
      bullets: [
        "Primary: Homepage-to-cart conversion rate (new users specifically)",
        "Secondary: First-order completion rate within 7 days of install",
        "Guardrail: Average order value (trust banner should not reduce AOV by encouraging smaller orders), existing user session depth (don't disrupt returning users)",
        "Expected: 5–10% improvement in new user first-order conversion if trust signals are effective",
      ],
    },
    {
      id: "edgecases",
      label: "11 — Edge Cases",
      content: "Social proof widget could backfire in low-density areas — 'only 3 people ordered today' signals low popularity. Needs a minimum threshold before displaying. Trust banner needs localization for non-English users. 'Top Pick' badge needs freshness — stale data could surface outdated bestsellers if not refreshed regularly.",
    },
    {
      id: "learnings",
      label: "12 — Learnings",
      content: "The most important learning from this teardown: homepage real estate is finite and contested. Every element on the homepage is implicitly competing with every other element. Adding a trust message means something else has to move. The product question is always 'what does this user need to see first?' not 'what do we want to show them first?'",
    },
    {
      id: "next",
      label: "13 — What I'd Test Next",
      content: "Two experiments I'd prioritize:",
      bullets: [
        "A/B test: Value proposition banner (quality/range/delivery) vs. current deals-first homepage for new users — measure first-order conversion rate within 48 hours",
        "Social proof experiment: 'X people in your area shop here' vs. no widget — measure trust perception via post-session survey and conversion rate",
      ],
    },
  ],
};
