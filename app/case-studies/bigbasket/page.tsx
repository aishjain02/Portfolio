import CaseStudyLayout from "@/app/components/CaseStudyLayout";
import { caseStudy } from "@/app/data/case-studies/bigbasket";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BigBasket Teardown - Aishwarye Jain",
  description: "Product teardown of BigBasket's user journey - finding where trust breaks down in online grocery.",
};

export default function BigBasketPage() {
  return <CaseStudyLayout cs={caseStudy} />;
}
