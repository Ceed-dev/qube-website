"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "./motion/Reveal";
import SectionLabel from "./SectionLabel";

const cards = [
  {
    href: "/what-we-do",
    title: "What We Do",
    desc: "End-to-end data collection — from contributor briefing to QA-reviewed, annotated delivery.",
  },
  {
    href: "/annotations",
    title: "Annotation Types",
    desc: "Five tiers, from raw narrated video to gaze data — narration, HOI, keypoints, and more.",
  },
  {
    href: "/capabilities",
    title: "Capabilities & Regions",
    desc: "13 languages, 1-2 week starts, 10,000+ hours monthly scale. India active, more on the roadmap.",
  },
];

export default function HubCards() {
  return (
    <section className="py-24 px-6 bg-white border-b border-divider">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Explore</SectionLabel>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card) => (
            <motion.div key={card.href} variants={staggerItem}>
              <Link
                href={card.href}
                className="group block h-full border border-divider rounded-xl p-7 bg-bg transition-all duration-300 hover:border-orange hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
              >
                <p className="font-bold text-lg text-ink mb-2">{card.title}</p>
                <p className="text-muted leading-relaxed text-sm mb-6">{card.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange">
                  Learn more
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
