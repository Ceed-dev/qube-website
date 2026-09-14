import Reveal from "./motion/Reveal";

export default function WhatWeDo() {
  return (
    <section className="py-24 px-6 bg-white border-b border-divider">
      <Reveal className="max-w-3xl mx-auto">
        <p className="text-xl md:text-2xl leading-relaxed text-ink font-medium">
          We run end-to-end data collection projects — from contributor
          briefing and recording to QA review and annotation delivery. Our
          focus is task-specific, environment-specific data from Indian
          manufacturing settings: auto components, electronics assembly, and
          pharma packaging.
        </p>
      </Reveal>
    </section>
  );
}
