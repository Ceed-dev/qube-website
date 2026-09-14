import Reveal from "./motion/Reveal";
import SectionLabel from "./SectionLabel";

export default function PageHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="pt-40 pb-16 px-6 border-b border-divider">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <SectionLabel>{label}</SectionLabel>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-ink mb-5">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-muted leading-relaxed max-w-2xl">{description}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
