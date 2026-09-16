"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const stats = [
  { num: "100", label: "Factory Connections" },
  { num: "150,000 hrs", label: "Industrial Data Network" },
  { num: "9", label: "Manufacturing Sectors" },
];

const sectors = [
  "Electronics",
  "Technical Textiles",
  "Garments",
  "Automobile",
  "Perfume",
  "Ancillary",
  "Slippers",
  "Shoes",
  "Leather Works",
];

const rows = [
  {
    label: "Healthcare & Pharma",
    value:
      "Access to 50+ pathogen labs across India for procedural footage — surgical AI, pharmaceutical manufacturing, and lab automation training data.",
  },
  {
    label: "Research-Grade Production",
    value:
      "200 hours per week of annotated research-grade data on demand for academic and frontier AI teams.",
  },
  {
    label: "Household / Consumer AI",
    value:
      "150 dedicated household contributors with 50+ GoPro rigs and studio setups for home robotics and daily-activity training data.",
  },
  {
    label: "Validation Pipeline",
    value:
      "Every dataset QA-checked through our own pipeline — hand visibility, PII, narration quality, and annotation accuracy. Clients receive clean, model-ready data without raw processing overhead.",
  },
];

export default function DataNetwork() {
  return (
    <section className="py-24 px-6 border-b border-divider">
      <div className="max-w-4xl mx-auto">
        <SectionLabel>Data Network &amp; Factory Access</SectionLabel>
        <p className="text-muted leading-relaxed mb-10 max-w-2xl">
          Qube operates a physical network of 100 manufacturing facilities across India, spanning
          9 industrial sectors. Factory-floor relationships give clients direct access to authentic
          task demonstration data — collected, QA-validated, and annotated through our own pipeline
          before delivery.
        </p>

        {/* Stats row */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-3 gap-4 mb-10"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="border border-divider rounded-xl px-5 py-5 bg-white"
            >
              <p className="text-2xl md:text-3xl font-black tracking-tight text-orange leading-none mb-1.5">
                {s.num}
              </p>
              <p className="text-xs text-muted uppercase tracking-wide font-medium">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Sectors */}
        <div className="mb-3">
          <span className="font-semibold text-ink text-sm">Sectors: </span>
          <span className="text-muted text-sm leading-relaxed">
            {sectors.join("  ·  ")}
          </span>
        </div>

        {/* Off-the-shelf */}
        <div className="mb-2">
          <span className="font-semibold text-ink text-sm">Off-the-shelf available: </span>
          <span className="text-muted text-sm">
            2,000 hrs electronics assembly  ·  2,000 hrs automotive manufacturing
          </span>
        </div>

        {/* Brand supply line */}
        <div className="mb-10">
          <span className="font-semibold text-ink text-sm">Connected factories supply brands including: </span>
          <span className="font-semibold text-orange text-sm">boAt</span>
          <span className="text-muted text-sm"> (electronics)  ·  </span>
          <span className="font-semibold text-orange text-sm">TVS · Bajaj · BMW</span>
          <span className="text-muted text-sm"> (automotive)</span>
        </div>

        {/* Capability rows */}
        <div className="border border-divider rounded-xl overflow-hidden">
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className={`flex flex-col md:flex-row md:items-start gap-2 md:gap-8 px-6 py-6 ${
                i % 2 === 1 ? "bg-orange-light/40" : "bg-white"
              } ${i !== rows.length - 1 ? "border-b border-divider" : ""}`}
            >
              <p className="font-bold text-ink text-sm w-full md:w-48 shrink-0 pt-0.5">{row.label}</p>
              <p className="text-muted text-sm leading-relaxed">{row.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
