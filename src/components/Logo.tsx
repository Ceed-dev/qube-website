import Image from "next/image";

export default function Logo({
  variant = "ink",
  size = 28,
}: {
  variant?: "ink" | "white" | "orange";
  size?: number;
}) {
  const src = `/brand/mark-${variant}.png`;
  const textColor =
    variant === "white" ? "text-white" : variant === "orange" ? "text-orange" : "text-ink";

  return (
    <span className="inline-flex items-center gap-2">
      <Image
        src={src}
        alt="Qube"
        width={size}
        height={size}
        priority
        style={{ width: size, height: size }}
      />
      <span className={`text-xl font-black tracking-tight ${textColor}`}>QUBE</span>
    </span>
  );
}
