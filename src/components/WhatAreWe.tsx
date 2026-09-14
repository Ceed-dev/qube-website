import Reveal from "./motion/Reveal";
import SectionLabel from "./SectionLabel";

export default function WhatAreWe() {
  return (
    <section className="py-24 px-6 border-b border-divider">
      <Reveal className="max-w-3xl mx-auto">
        <SectionLabel>What Are We</SectionLabel>
        <p className="text-xl md:text-2xl leading-relaxed text-ink font-medium">
          Qube is a data collection company built for physical AI. We source,
          record, and deliver egocentric (first-person POV) training data from
          real-world environments in India — the kind of data that teaches
          robots and autonomous systems how humans actually move and work.
        </p>
      </Reveal>
    </section>
  );
}
