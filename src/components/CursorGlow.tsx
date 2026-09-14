"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const NOISE_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'>
      <filter id='n'>
        <feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/>
        <feColorMatrix type='saturate' values='0'/>
      </filter>
      <rect width='100%' height='100%' filter='url(#n)'/>
    </svg>`
  );

const SIZE = 560;

export default function CursorGlow() {
  const x = useMotionValue(-SIZE);
  const y = useMotionValue(-SIZE);
  const springX = useSpring(x, { stiffness: 140, damping: 22, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 140, damping: 22, mass: 0.6 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-30 hidden md:block"
      style={{ x: springX, y: springY }}
    >
      <div
        className="absolute rounded-full"
        style={{
          left: -SIZE / 2,
          top: -SIZE / 2,
          width: SIZE,
          height: SIZE,
          backgroundImage: `radial-gradient(circle, rgba(255,122,47,0.32) 0%, rgba(255,122,47,0.16) 32%, rgba(255,122,47,0.05) 55%, rgba(255,122,47,0) 72%), url("${NOISE_SVG}")`,
          backgroundBlendMode: "overlay",
          maskImage:
            "radial-gradient(circle, black 0%, black 35%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 0%, black 35%, transparent 72%)",
        }}
      />
    </motion.div>
  );
}
