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
    <section id="regions" className="py-24 px-6 bg-white border-b border-divider">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Regions</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regions.map((r) => (
            <div key={r.name} className="border border-divider rounded-xl p-7">
              <span
                className={`inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4 ${r.statusColor}`}
              >
                {r.status}
              </span>
              <p className="font-bold text-lg text-ink mb-2">{r.name}</p>
              <p className="text-muted leading-relaxed text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
