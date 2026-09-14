import Reveal, { StaggerGroup, StaggerItem } from "./motion/Reveal";
import SectionLabel from "./SectionLabel";

const items = [
  {
    title: "In-house execution team",
    desc: "Trained contributors with head-mounted rigs, briefed on narration and hand visibility standards.",
  },
  {
    title: "Factory floor access",
    desc: "Direct relationships with manufacturing facilities across India, with employer-level consent frameworks.",
  },
  {
    title: "Structured QA pipeline",
    desc: "Every video reviewed against narration quality, PII checks, hand visibility, and file standards before delivery.",
  },
  {
    title: "Annotation",
    desc: "Temporal/action labels, object annotation, pose/keypoint, and task state labels on top of raw footage.",
  },
];

export default function HowWeDoIt() {
  return (
    <section className="py-24 px-6 border-b border-divider">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionLabel>How We Do It</SectionLabel>
        </Reveal>
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <StaggerItem
              key={item.title}
              className="bg-white border border-divider rounded-xl p-7 transition-all duration-300 hover:border-orange/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-light text-orange text-sm font-bold mb-4">
                {i + 1}
              </span>
              <p className="font-bold text-lg text-ink mb-2">{item.title}</p>
              <p className="text-muted leading-relaxed">{item.desc}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
