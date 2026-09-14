import SectionLabel from "./SectionLabel";

const tiers = [
  { tier: "Tier 1", desc: "Raw narrated video — head-mounted POV, contributor narration, QA-passed" },
  { tier: "Tier 2", desc: "+ Action segments + Object state change" },
  { tier: "Tier 3", desc: "+ HOI (Hand Object Interaction) — frame-by-frame hand contact log" },
  { tier: "Tier 4", desc: "+ Phase decomposition, teleoperation demonstrations" },
  { tier: "Tier 5", desc: "+ Gaze data (hardware-dependent)" },
];

const types = [
  { title: "Narration", desc: "Timestamped contributor description synchronized to video." },
  { title: "Action Segments", desc: "Verb + noun + start/end timestamps for each action." },
  { title: "Object State Change", desc: "Before/after states of objects (bolt: loose to tight)." },
  { title: "HOI", desc: "Frame-by-frame: which hand, what object, grip type, contact state." },
  { title: "Gaze", desc: "Fixation and saccade data, x/y coordinates per frame." },
  { title: "Bounding Boxes", desc: "Spatial object localization per frame." },
  { title: "Keypoints", desc: "Hand and body landmark coordinates (21-point hand model)." },
];

export default function Annotations() {
  return (
    <section id="annotations" className="py-24 px-6 bg-white border-b border-divider">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Annotation Types</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-ink mb-12">
          Every tier adds a layer on top of the last
        </h2>

        <div className="flex flex-col mb-16">
          {tiers.map((t, i) => (
            <div
              key={t.tier}
              className="flex items-stretch border border-divider rounded-xl overflow-hidden mb-3 last:mb-0"
              style={{ marginLeft: `${i * 0}px` }}
            >
              <div
                className="flex items-center justify-center w-28 shrink-0 text-sm font-bold text-white"
                style={{ backgroundColor: `rgba(255, 122, 47, ${0.55 + i * 0.11})` }}
              >
                {t.tier}
              </div>
              <div className="flex items-center px-6 py-4 text-sm md:text-base text-ink">
                {t.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {types.map((t) => (
            <div
              key={t.title}
              className="border border-divider rounded-xl p-5 bg-orange-light/40"
            >
              <p className="font-bold text-sm text-ink mb-1">{t.title}</p>
              <p className="text-sm text-muted leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
