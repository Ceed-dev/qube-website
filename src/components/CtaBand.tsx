"use client";

import Link from "next/link";
import Reveal from "./motion/Reveal";

export default function CtaBand() {
  return (
    <section className="py-24 px-6 bg-white">
      <Reveal className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-ink px-8 md:px-16 py-16 text-center">
          <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-orange/25 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-orange/15 blur-[100px]" />
          <h2 className="relative text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
            Ready to work with us?
          </h2>
          <p className="relative text-white/60 mb-8 max-w-md mx-auto leading-relaxed">
            Whether you need training data or want to contribute to the
            network — we&apos;d like to hear from you.
          </p>
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/partner"
              className="w-full sm:w-auto bg-orange text-white px-7 py-3 rounded-lg text-sm font-semibold transition-all hover:bg-orange/90 hover:-translate-y-0.5"
            >
              Partner With Us
            </Link>
            <Link
              href="/contribute"
              className="w-full sm:w-auto bg-white/10 text-white border border-white/15 px-7 py-3 rounded-lg text-sm font-semibold transition-all hover:bg-white/15 hover:-translate-y-0.5"
            >
              Become a Contributor
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
