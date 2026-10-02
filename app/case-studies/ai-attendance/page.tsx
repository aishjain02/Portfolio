import CaseStudyLayout from "@/app/components/CaseStudyLayout";
import { caseStudy } from "@/app/data/case-studies/ai-attendance";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Smart Attendance System - Aishwarye Jain",
  description: "Replacing manual classroom attendance with face recognition - passive for students, fully auditable for faculty.",
};

export default function AIAttendancePage() {
  return <CaseStudyLayout cs={caseStudy} />;
}
