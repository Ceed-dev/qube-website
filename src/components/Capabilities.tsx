import SectionLabel from "./SectionLabel";

const rows = [
  {
    label: "Languages",
    value:
      "Hindi, Bengali, Odia, Tamil, Kannada, Gujarati, Punjabi, Marathi, Nepali, Bhojpuri, Assamese, Manipuri, English — 13 languages across all major Indian regions.",
  },
  {
    label: "Project Start",
    value: "Ready to begin within 1-2 weeks of project brief and sample approval.",
  },
  {
    label: "Volume",
    value: "Pilot runs from 500 hours. Scale up to 10,000+ approved hours per month.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 px-6 border-b border-divider">
      <div className="max-w-4xl mx-auto">
        <SectionLabel>Capabilities</SectionLabel>
        <div className="border border-divider rounded-xl overflow-hidden">
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-8 px-6 py-6 ${
                i % 2 === 1 ? "bg-orange-light/40" : "bg-white"
              } ${i !== rows.length - 1 ? "border-b border-divider" : ""}`}
            >
              <p className="font-bold text-ink w-full md:w-40 shrink-0">{row.label}</p>
              <p className="text-muted leading-relaxed">{row.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
