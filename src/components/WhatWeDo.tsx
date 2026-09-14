import SectionLabel from "./SectionLabel";

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 px-6 bg-white border-b border-divider">
      <div className="max-w-3xl mx-auto">
        <SectionLabel>What We Do</SectionLabel>
        <p className="text-xl md:text-2xl leading-relaxed text-ink font-medium">
          We run end-to-end data collection projects — from contributor
          briefing and recording to QA review and annotation delivery. Our
          focus is task-specific, environment-specific data from Indian
          manufacturing settings: auto components, electronics assembly, and
          pharma packaging.
        </p>
      </div>
    </section>
  );
}
