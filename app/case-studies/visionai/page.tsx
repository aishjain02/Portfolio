import CaseStudyLayout from "@/app/components/CaseStudyLayout";
import { caseStudy } from "@/app/data/case-studies/visionai";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision AI - Aishwarye Jain",
  description: "Building a real-time AI coaching layer for practice interviews - giving candidates signal during the conversation, not after.",
};

export default function VisionAIPage() {
  return <CaseStudyLayout cs={caseStudy} />;
}
