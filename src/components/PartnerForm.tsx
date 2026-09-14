"use client";

import { FormEvent, useState } from "react";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_PARTNER_ENDPOINT;
const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;

type Status = "idle" | "submitting" | "success" | "error";

export default function PartnerForm() {
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
    <section id="partner" className="py-24 px-6 border-b border-divider">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-ink mb-3">
          Work with us
        </h2>
        <p className="text-muted leading-relaxed mb-10">
          If you need India-sourced physical AI training data — as a direct
          buyer or as an agency partner — fill in the form below or book a
          call.
        </p>

        {status === "success" ? (
          <div className="border border-divider rounded-xl p-8 text-center bg-orange-light/40">
            <p className="font-bold text-ink mb-1">Thanks — we got it.</p>
            <p className="text-muted text-sm">We&apos;ll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="p-name" className="block text-sm font-medium text-ink mb-1.5">
                Name
              </label>
              <input
                id="p-name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-divider bg-white px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-orange"
              />
            </div>

            <div>
              <label htmlFor="p-company" className="block text-sm font-medium text-ink mb-1.5">
                Company
              </label>
              <input
                id="p-company"
                name="company"
                type="text"
                required
                className="w-full rounded-lg border border-divider bg-white px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-orange"
              />
            </div>

            <div>
              <label htmlFor="p-email" className="block text-sm font-medium text-ink mb-1.5">
                Email
              </label>
              <input
                id="p-email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-divider bg-white px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-orange"
              />
            </div>

            <fieldset>
              <legend className="block text-sm font-medium text-ink mb-1.5">I am a:</legend>
              <div className="flex flex-wrap gap-4">
                {["AI company", "Data agency", "Other"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-sm text-ink/80">
                    <input type="radio" name="i_am_a" value={opt} required className="accent-orange" />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="p-need" className="block text-sm font-medium text-ink mb-1.5">
                What I need:
              </label>
              <select
                id="p-need"
                name="what_i_need"
                required
                defaultValue=""
                className="w-full rounded-lg border border-divider bg-white px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-orange"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option>Egocentric video data</option>
                <option>Voice and speech data</option>
                <option>Annotation only</option>
                <option>Not sure yet</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="p-project" className="block text-sm font-medium text-ink mb-1.5">
                Tell us about your project{" "}
                <span className="text-muted font-normal">(optional)</span>
              </label>
              <textarea
                id="p-project"
                name="project_details"
                rows={4}
                className="w-full rounded-lg border border-divider bg-white px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-orange"
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

        <div className="mt-8 pt-8 border-t border-divider text-center">
          <p className="text-sm text-muted mb-3">Prefer a call?</p>
          <a
            href={CALENDLY_URL || "mailto:ldrago@0xqube.xyz"}
            target={CALENDLY_URL ? "_blank" : undefined}
            rel={CALENDLY_URL ? "noopener noreferrer" : undefined}
            className="inline-block border border-divider text-ink px-6 py-2.5 rounded-lg text-sm font-semibold hover:border-orange hover:text-orange transition-colors"
          >
            Book a call
          </a>
        </div>
      </div>
    </section>
  );
}
