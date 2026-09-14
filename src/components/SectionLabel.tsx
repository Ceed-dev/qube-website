export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange mb-4">
      {children}
    </p>
  );
}
