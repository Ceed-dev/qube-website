export default function Hero() {
  return (
    <section id="hero" className="pt-40 pb-28 px-6 border-b border-divider">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[13vw] sm:text-8xl md:text-9xl font-black tracking-tight text-orange leading-none mb-10 select-none">
          QUBE
        </p>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6 text-ink">
          India&apos;s physical AI data collection company
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-10">
          Task-specific, consent-clean egocentric data from real manufacturing
          environments. Built for robotics and embodied AI.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#partner"
            className="w-full sm:w-auto bg-orange text-white px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-orange/90 transition-colors"
          >
            Partner With Us
          </a>
          <a
            href="#contributor"
            className="w-full sm:w-auto border border-divider text-ink px-8 py-3.5 rounded-lg text-sm font-semibold hover:border-orange hover:text-orange transition-colors"
          >
            Become a Contributor
          </a>
        </div>
      </div>
    </section>
  );
}
