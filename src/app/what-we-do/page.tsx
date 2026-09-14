import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WhatWeDo from "@/components/WhatWeDo";
import HowWeDoIt from "@/components/HowWeDoIt";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "End-to-end data collection — from contributor briefing to QA-reviewed, annotated delivery.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHeader
        label="What We Do"
        title="End-to-end data collection, done right"
        description="From contributor briefing and recording to QA review and annotation delivery — every project runs through a structured, repeatable pipeline."
      />
      <WhatWeDo />
      <HowWeDoIt />
    </>
  );
}
