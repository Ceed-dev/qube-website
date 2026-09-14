import Reveal, { StaggerGroup, StaggerItem } from "./motion/Reveal";
import SectionLabel from "./SectionLabel";

const regions = [
  {
    name: "India",
    status: "Active",
    statusColor: "bg-orange text-white",
    desc: "Manufacturing environments: auto components, electronics assembly, pharma packaging.",
  },
  {
    name: "South America + Philippines",
    status: "Exploring",
    statusColor: "bg-orange-light text-orange",
    desc: "Early-stage exploration for future expansion.",
  },
  {
    name: "SEA + Japan",
    status: "Planned",
    statusColor: "bg-divider text-muted",
    desc: "On the roadmap for future regional expansion.",
  },
];

export default function Regions() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionLabel>Regions</SectionLabel>
        </Reveal>
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regions.map((r) => (
            <StaggerItem
              key={r.name}
              className="border border-divider rounded-xl p-7 transition-all duration-300 hover:border-orange/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
            >
              <span
                className={`inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4 ${r.statusColor}`}
              >
                {r.status}
              </span>
              <p className="font-bold text-lg text-ink mb-2">{r.name}</p>
              <p className="text-muted leading-relaxed text-sm">{r.desc}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
