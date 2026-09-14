"use client";

import { useEffect } from "react";
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";

const NOISE_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'>
      <filter id='n'>
        <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch' result='t'/>
        <feColorMatrix in='t' type='saturate' values='0'/>
      </filter>
      <rect width='100%' height='100%' filter='url(#n)'/>
    </svg>`
  );

const MASK =
  "radial-gradient(circle 300px at var(--mx) var(--my), transparent 0%, transparent 45%, black 92%)";

export default function CursorGlow() {
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);
  const smx = useSpring(mx, { stiffness: 130, damping: 22, mass: 0.6 });
  const smy = useSpring(my, { stiffness: 130, damping: 22, mass: 0.6 });
  const mxPx = useTransform(smx, (v) => `${v}px`);
  const myPx = useTransform(smy, (v) => `${v}px`);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 hidden md:block">
      {/* Hidden layer: sits behind the entire page, never touches real
          content. A white-hot center fading to orange gives the "pop"
          without ever recoloring text — text is never in this layer's
          stacking path, so legibility can't be affected. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,196,140,0.85) 14%, rgba(255,122,47,0.55) 38%, rgba(255,122,47,0.25) 65%, rgba(255,122,47,0) 100%), url("${NOISE_SVG}")`,
          backgroundSize: "cover, 180px 180px",
          backgroundBlendMode: "soft-light",
        }}
      />
      {/* Page-color scrim with a soft cursor-tracking cutout, revealing the layer above */}
      <motion.div
        className="absolute inset-0 bg-bg"
        style={{
          // @ts-expect-error -- CSS custom properties via motion values
          "--mx": mxPx,
          "--my": myPx,
          maskImage: MASK,
          WebkitMaskImage: MASK,
        }}
      />
    </div>
  );
}
