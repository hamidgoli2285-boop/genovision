"use client";

import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import IconCard from "@/components/IconCard";
import Timeline from "@/components/Timeline";
import ContactCTA from "@/components/ContactCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import CTAButton from "@/components/CTAButton";
import Badge from "@/components/Badge";
import { useLanguage } from "@/lib/language-context";
import { whatsappLink } from "@/lib/site";

export default function MicrobiotaContent() {
  const { t } = useLanguage();
  const m = t.microbiotaIntestinal;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-cobalt-900 to-cobalt pb-20 pt-16 text-white lg:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-teal/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cobalt-400/20 blur-3xl"
        />

        <div className="container-x relative">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-1.5 text-xs text-white/50">
              <li>
                <Link href="/" className="hover:text-white/80 transition-colors">
                  {t.common.breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden className="text-white/30">›</li>
              <li>
                <Link href="/productos" className="hover:text-white/80 transition-colors">
                  {t.common.breadcrumbProducts}
                </Link>
              </li>
              <li aria-hidden className="text-white/30">›</li>
              <li className="text-white/70" aria-current="page">
                {m.heroTitle}
              </li>
            </ol>
          </nav>

          {/* Partner badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            {m.heroBadge}
          </div>

          <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {m.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg lg:text-xl">
            {m.heroSubtitle}
          </p>

          {/* Badges */}
          <div className="mt-7 flex flex-wrap gap-2">
            {m.heroBadges.map((b) => (
              <Badge key={b} tone="cobalt" size="sm">
                {b}
              </Badge>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton
              href={whatsappLink(m.whatsappMessage)}
              external
              variant="whatsapp"
              size="lg"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.5 3.5A11 11 0 0 0 3.6 17.3L2 22l4.8-1.6A11 11 0 1 0 20.5 3.5Zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.9.9.9-2.8-.2-.3A9 9 0 1 1 12 20.5Zm5-6.7c-.3-.1-1.6-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3 1 2.6 1.1 2.7.1.2 1.9 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z" />
                </svg>
              }
              iconPosition="left"
            >
              {m.heroCtaPrimary}
            </CTAButton>
            <CTAButton
              href="/proceso"
              variant="ghost"
              size="lg"
              className="bg-white/10 text-white hover:bg-white/15"
            >
              {m.heroCtaSecondary}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ── What is it ───────────────────────────────────────────────── */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow={m.whatEyebrow} title={m.whatTitle} />
          </div>
          <div className="space-y-4 lg:col-span-7">
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">{m.whatBody}</p>
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">{m.whatBody2}</p>

            {/* Partner card */}
            <div className="mt-6 flex items-start gap-4 rounded-2xl border border-cobalt-100 bg-cobalt-50/60 p-5">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cobalt text-white shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-cobalt-600">
                  {m.partnerNote}
                </p>
                <p className="mt-0.5 font-display text-base font-semibold text-navy">{m.partnerName}</p>
                <p className="mt-1 text-sm text-ink-muted">{m.partnerDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What it evaluates ────────────────────────────────────────── */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader eyebrow={m.evaluatesEyebrow} title={m.evaluatesTitle} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {m.evaluates.map((item) => (
            <IconCard
              key={item.title}
              title={item.title}
              description={item.description}
              variant="compact"
            />
          ))}
        </div>
      </section>

      {/* ── Who benefits ─────────────────────────────────────────────── */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow={m.whoEyebrow}
          title={m.whoTitle}
          description={m.whoDescription}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {m.candidates.map((c) => (
            <IconCard
              key={c.title}
              title={c.title}
              description={c.description}
              variant="compact"
            />
          ))}
        </div>
      </section>

      {/* ── Oncology context ─────────────────────────────────────────── */}
      <section className="mt-20 bg-gradient-to-br from-navy/5 to-cobalt-50/40 py-16 lg:mt-28 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader eyebrow={m.oncologyEyebrow} title={m.oncologyTitle} />
            </div>
            <div className="space-y-4 lg:col-span-7">
              <p className="text-base leading-relaxed text-ink-muted sm:text-lg">{m.oncologyBody}</p>
              <p className="text-base leading-relaxed text-ink-muted sm:text-lg">{m.oncologyBody2}</p>
              <div
                role="note"
                className="mt-2 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" aria-hidden>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
                <p>{m.oncologyNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────── */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader eyebrow={m.processEyebrow} title={m.processTitle} />
        <div className="mt-10 max-w-3xl">
          <Timeline items={m.processSteps} />
        </div>
      </section>

      {/* ── Physician benefits ───────────────────────────────────────── */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader eyebrow={m.physicianEyebrow} title={m.physicianTitle} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-6">
          {m.physicianItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-6 ring-1 ring-slate-200/80 shadow-card"
            >
              <div className="mb-3 grid h-9 w-9 place-items-center rounded-xl bg-navy text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h3 className="font-display text-base font-semibold text-navy sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Limitations ──────────────────────────────────────────────── */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow={m.limitationsEyebrow} title={m.limitationsTitle} />
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {m.limitations.map((l) => (
                <li
                  key={l}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200 shadow-card"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-500"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </span>
                  <p className="text-sm leading-relaxed text-navy/90 sm:text-base">{l}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-ink-muted italic">
              {m.limitationsNote}
            </p>
          </div>
        </div>
      </section>

      {/* ── Disclaimer + Back ────────────────────────────────────────── */}
      <section className="container-x mt-16 lg:mt-20">
        <MedicalDisclaimer />
        <div className="mt-6">
          <Link
            href="/productos"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-cobalt hover:text-cobalt-700 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            {t.common.viewFullCatalog}
          </Link>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="mt-20 lg:mt-28">
        <ContactCTA
          title={m.ctaTitle}
          subtitle={m.ctaSubtitle}
          primaryLabel={m.ctaPrimary}
          primaryMessage={m.whatsappMessage}
          secondaryLabel={m.ctaSecondary}
          secondaryHref="/productos"
        />
      </section>
    </>
  );
}
