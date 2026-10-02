import CaseStudyLayout from "@/app/components/CaseStudyLayout";
import { caseStudy } from "@/app/data/case-studies/vibe";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIBE - Aishwarye Jain",
  description: "How I designed an AI-assisted assessment integrity system at Superset.",
};

export default function VibePage() {
  return <CaseStudyLayout cs={caseStudy} />;
}
