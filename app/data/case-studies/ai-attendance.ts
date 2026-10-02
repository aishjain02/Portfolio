export const caseStudy = {
  number: "06",
  title: "AI Smart Attendance System",
  subtitle: "Replacing manual classroom attendance with face recognition - passive for students, fully auditable for faculty.",
  company: "Independent",
  type: "Shipped",
  tags: ["Python", "OpenCV", "Computer Vision", "ESP32-CAM"],
  hook: "Manual attendance was a 10-minute ritual that produced no useful data. Every class. Every day. The solution shouldn't ask anyone to change their behavior.",
  related: ["zepto-event-helper", "visionai", "vibe"],

  sections: [
    {
      id: "context",
      label: "01 - Context",
      content: "College classrooms run manual attendance at the start of every session - a faculty member calls out names or passes around a sheet. At scale, this consumes 5-10 minutes of instructional time per class, generates paper or spreadsheet records that are hard to query, and creates no reliable audit trail for administration. The process is also trivially gameable through proxies.",
    },
    {
      id: "problem",
      label: "02 - Problem",
      content: "The manual attendance process had three compounding failures:",
      bullets: [
        "Time cost: 5-10 minutes per class, multiplied across every section and semester",
        "Manipulation: proxy attendance was common and largely undetected - a known but unaddressed integrity problem",
        "Zero usable data: records existed but weren't structured or queryable - administration couldn't act on patterns even if they wanted to",
      ],
    },
    {
      id: "evidence",
      label: "03 - Evidence",
      content: "The problem was observable and well-documented. Faculty spent measurable class time on roll calls. Proxy attendance was an open secret. Administration had no way to identify chronic absenteeism patterns early enough to intervene. The data existed in notebooks and spreadsheets - not in any form that could surface trends or trigger action.",
    },
    {
      id: "users",
      label: "04 - Users",
      content: "Three user groups with different needs: Faculty, who wanted attendance marked quickly and accurately without adding to their workload. Students, who needed a process that didn't disrupt the class or require any extra steps. Administration, who needed structured, queryable records they could actually act on - not notebooks.",
    },
    {
      id: "insight",
      label: "05 - Insight",
      content: "The key design insight: the solution couldn't require any behavior change from students or faculty. Any additional step - scanning a QR code, tapping a device, answering a prompt - would face adoption friction. The only viable design was one that recognized students automatically on entry and required nothing from them or from the instructor.",
    },
    {
      id: "opportunity",
      label: "06 - Opportunity",
      content: "Face recognition at the classroom entry point could eliminate all three failure modes simultaneously: zero time cost (happens in the background), proxy-proof (biometric identity), and structured digital records (timestamped, queryable, exportable). The constraint was cost - the solution had to be buildable on low-cost hardware.",
    },
    {
      id: "solution",
      label: "07 - Solution",
      content: "Built an end-to-end face recognition attendance system using low-cost, classroom-deployable hardware:",
      bullets: [
        "Hardware: ESP32-CAM module - low cost, WiFi-enabled, deployable at classroom entry",
        "Recognition: Python + OpenCV face detection and recognition pipeline",
        "Enrollment: one-time photo registration per student, stored as a reference embedding",
        "Logging: attendance auto-logged with student ID, timestamp, and class session on recognition",
        "Dashboard: faculty interface surfaces attendance records, patterns, and anomaly flags",
        "Audit trail: every entry timestamped and stored - fully queryable by student, date, or class",
      ],
    },
    {
      id: "tradeoffs",
      label: "08 - Trade-offs",
      content: "I deliberately kept the system passive and non-intrusive - no active participation required from students. The alternative (QR codes, NFC tags, or manual check-ins) would have been technically simpler but would require behavioral change and remain gameable through sharing. Biometric recognition at entry was the only design that addressed the proxy problem at the root.",
    },
    {
      id: "execution",
      label: "09 - Execution",
      content: "Built and deployed with Python (face recognition pipeline), OpenCV (detection and matching), and ESP32-CAM (hardware capture). The enrollment flow captures multiple angles per student to improve recognition reliability. The system runs locally on a Raspberry Pi connected to the camera - no cloud dependency, no latency, no data leaving the classroom.",
    },
    {
      id: "metrics",
      label: "10 - Metrics",
      content: "Measured against manual baseline in pilot deployment:",
      bullets: [
        "Attendance marking time: reduced from 5-10 minutes to seconds per session",
        "Proxy attendance: dropped to zero in pilot - biometric identity is not shareable",
        "Data quality: first time faculty had structured, timestamped, queryable attendance records",
        "Faculty adoption: zero additional steps required - system runs passively in the background",
      ],
    },
    {
      id: "edgecases",
      label: "11 - Edge Cases",
      content: "Low-light environments degrade recognition accuracy - a supplementary LED was added to the camera mount. Students with significant appearance changes (new glasses, facial hair, masks) can fail recognition - a manual override exists for faculty to log exceptions. Recognition accuracy decreases with simultaneous multiple entries - the system queues and processes sequentially.",
    },
    {
      id: "learnings",
      label: "12 - Learnings",
      content: "The most important lesson: the best process improvement is one that removes a step entirely, not one that makes it faster. Replacing manual attendance with face recognition didn't optimize the roll call - it eliminated it. The second lesson: constrained hardware (ESP32-CAM, Raspberry Pi) forces better architecture decisions than unconstrained cloud builds.",
    },
    {
      id: "next",
      label: "13 - What I'd Test Next",
      content: "An anomaly detection layer that flags students with attendance patterns correlating to grade decline - giving faculty the ability to intervene early rather than discover the problem at the end of semester. The data is already being collected. The next step is making it actionable.",
    },
  ],
};
