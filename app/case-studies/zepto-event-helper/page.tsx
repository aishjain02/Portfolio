import CaseStudyLayout from "@/app/components/CaseStudyLayout";
import { caseStudy } from "@/app/data/case-studies/zepto-event-helper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zepto Event Helper - Aishwarye Jain",
  description: "How I turned a manual merchandising workflow into an AI-powered launch system at Zepto.",
};

export default function ZeptoEventHelperPage() {
  return <CaseStudyLayout cs={caseStudy} />;
}
