"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const easing = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easing } },
};

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 px-6 border-b border-divider overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/2 top-10 w-[520px] h-[520px] -translate-x-1/2 rounded-full bg-orange/20 blur-[110px]"
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.06, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #E0E4EE 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 50% 30%, black, transparent)",
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div variants={item} className="flex justify-center mb-8">
          <Image
            src="/brand/mark-orange.png"
            alt="Qube"
            width={72}
            height={72}
            priority
            style={{ width: 72, height: 72 }}
          />
        </motion.div>

        <motion.p
          variants={item}
          className="text-[15vw] sm:text-8xl md:text-9xl font-black tracking-tight text-orange leading-none mb-10 select-none"
        >
          QUBE
        </motion.p>

        <motion.h1
          variants={item}
          className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6 text-ink"
        >
          India&apos;s physical AI data collection company
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Task-specific, consent-clean egocentric data from real manufacturing
          environments. Built for robotics and embodied AI.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/partner"
            className="w-full sm:w-auto bg-orange text-white px-8 py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-orange/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange/25 active:translate-y-0"
          >
            Partner With Us
          </Link>
          <Link
            href="/contribute"
            className="w-full sm:w-auto border border-divider text-ink px-8 py-3.5 rounded-lg text-sm font-semibold transition-all hover:border-orange hover:text-orange hover:-translate-y-0.5 active:translate-y-0"
          >
            Become a Contributor
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
