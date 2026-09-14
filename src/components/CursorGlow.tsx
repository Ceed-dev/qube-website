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

const CORE = 220;

export default function CursorGlow() {
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);
  const smx = useSpring(mx, { stiffness: 130, damping: 22, mass: 0.6 });
  const smy = useSpring(my, { stiffness: 130, damping: 22, mass: 0.6 });
  const mxPx = useTransform(smx, (v) => `${v}px`);
  const myPx = useTransform(smy, (v) => `${v}px`);
  const coreLeft = useTransform(smx, (v) => v - CORE / 2);
  const coreTop = useTransform(smy, (v) => v - CORE / 2);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 hidden md:block">
        {/* Hidden layer: sits behind the entire page */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,122,47,0.55) 0%, rgba(255,122,47,0.3) 100%), url("${NOISE_SVG}")`,
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

      {/* Inner core: inverts whatever text/content it passes over to white.
          Positioned via left/top (not transform) so mix-blend-mode isn't
          isolated into its own stacking context and actually blends with
          the real page content behind it. */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-40 hidden md:block rounded-full"
        style={{
          left: coreLeft,
          top: coreTop,
          width: CORE,
          height: CORE,
          backgroundColor: "#ffffff",
          mixBlendMode: "difference",
          filter: "blur(16px)",
        }}
      />
    </>
  );
}
