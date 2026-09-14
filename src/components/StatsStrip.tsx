"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "./motion/Reveal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { node: <Counter to={13} />, label: "Languages across India" },
  { node: "1–2 wks", label: "To project start" },
  { node: <Counter to={500} suffix="+" />, label: "Hours, pilot minimum" },
  { node: <Counter to={10000} suffix="+" />, label: "Hours/month at scale" },
];

export default function StatsStrip() {
  return (
    <section className="py-20 px-6 border-b border-divider">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map((stat, i) => (
          <motion.div key={i} variants={staggerItem} className="text-center md:text-left">
            <p className="text-3xl md:text-4xl font-black tracking-tight text-orange mb-1.5">
              {stat.node}
            </p>
            <p className="text-sm text-muted leading-snug">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
