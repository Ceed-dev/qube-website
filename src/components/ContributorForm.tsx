"use client";

import { FormEvent, useState } from "react";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_CONTRIBUTOR_ENDPOINT;

type Status = "idle" | "submitting" | "success" | "error";

export default function ContributorForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contributor" className="py-24 px-6 bg-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-ink mb-3">
          Contribute to the network
        </h2>
        <p className="text-muted leading-relaxed mb-10">
          We pay contributors to record daily tasks and activities using a
          head-mounted camera. Flexible hours, work from your environment.
        </p>

        {status === "success" ? (
          <div className="border border-divider rounded-xl p-8 text-center bg-orange-light/40">
            <p className="font-bold text-ink mb-1">Thanks — we got it.</p>
            <p className="text-muted text-sm">We&apos;ll reach out shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="c-name" className="block text-sm font-medium text-ink mb-1.5">
                Name
              </label>
              <input
                id="c-name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-divider bg-bg px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-orange"
              />
            </div>

            <div>
              <label htmlFor="c-city" className="block text-sm font-medium text-ink mb-1.5">
                City and state
              </label>
              <input
                id="c-city"
                name="city_state"
                type="text"
                required
                className="w-full rounded-lg border border-divider bg-bg px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-orange"
              />
            </div>

            <fieldset>
              <legend className="block text-sm font-medium text-ink mb-1.5">Device:</legend>
              <div className="flex flex-col gap-2">
                {["iPhone 11 or newer", "iPhone older than 11", "Android", "Other"].map(
                  (opt) => (
                    <label key={opt} className="flex items-center gap-2 text-sm text-ink/80">
                      <input type="checkbox" name="device" value={opt} className="accent-orange" />
                      {opt}
                    </label>
                  )
                )}
              </div>
            </fieldset>

            <div>
              <label htmlFor="c-hours" className="block text-sm font-medium text-ink mb-1.5">
                Hours available per day:
              </label>
              <select
                id="c-hours"
                name="hours_available"
                required
                defaultValue=""
                className="w-full rounded-lg border border-divider bg-bg px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-orange"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option>1-2 hrs</option>
                <option>2-4 hrs</option>
                <option>4+ hrs</option>
              </select>
            </div>

            <div>
              <label htmlFor="c-source" className="block text-sm font-medium text-ink mb-1.5">
                How did you hear about us{" "}
                <span className="text-muted font-normal">(optional)</span>
              </label>
              <input
                id="c-source"
                name="how_did_you_hear"
                type="text"
                className="w-full rounded-lg border border-divider bg-bg px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-orange"
              />
            </div>

            <div>
              <label htmlFor="c-contact" className="block text-sm font-medium text-ink mb-1.5">
                Phone or email to reach you
              </label>
              <input
                id="c-contact"
                name="contact"
                type="text"
                required
                className="w-full rounded-lg border border-divider bg-bg px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-orange"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-orange text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-orange/90 transition-colors disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Submit"}
            </button>

            {status === "error" && (
              <p className="text-sm text-red-500">
                Something went wrong — please email{" "}
                <a href="mailto:ldrago@0xqube.xyz" className="underline">
                  ldrago@0xqube.xyz
                </a>{" "}
                directly.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
