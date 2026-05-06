"use client";

import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import ContactCTA from "@/components/ContactCTA";
import DNAPipeline from "@/components/DNAPipeline";
import { useLanguage } from "@/lib/language-context";

export default function ProcesoContent() {
  const { t } = useLanguage();
  const p = t.proceso;

  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid mask-fade-y opacity-50" />
        <div className="container-x relative pb-10 pt-12 sm:pt-16 lg:pb-14 lg:pt-20">
          <SectionHeader eyebrow={p.eyebrow} title={p.title} description={p.description} />
        </div>
      </section>

      <section className="container-x">
        <DNAPipeline />
      </section>

      <section className="container-x mt-16 lg:mt-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow={p.timelineEyebrow}
              title={p.timelineTitle}
              description={p.timelineDescription}
            />
          </div>
          <div className="lg:col-span-7">
            <Timeline items={p.steps} />
          </div>
        </div>
      </section>

      <section className="container-x mt-16 lg:mt-24">
        <div className="overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-card sm:p-10">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-cobalt-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cobalt-700">
                {p.samplePrepBadge}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                {p.samplePrepTitle}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                {p.samplePrepDescription}
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-3 sm:grid-cols-2">
                {p.sampleInstructions.map((item) => (
                  <li
                    key={item.t}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4"
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-navy">{item.t}</div>
                      <div className="text-xs text-ink-muted">{item.d}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 lg:mt-28">
        <ContactCTA
          title={p.ctaTitle}
          subtitle={p.ctaSubtitle}
          secondaryLabel={p.ctaSecondaryLabel}
          secondaryHref="/productos/panel-cancer-hereditario"
        />
      </section>
    </>
  );
}
