import CaseStudyLayout from "@/app/components/CaseStudyLayout";
import { caseStudy } from "@/app/data/case-studies/pakkaride";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PakkaRide — Aishwarye Jain",
  description: "A reliability-first ride-hailing concept built around driver incentive redesign.",
};

export default function PakkaRidePage() {
  return <CaseStudyLayout cs={caseStudy} />;
}
