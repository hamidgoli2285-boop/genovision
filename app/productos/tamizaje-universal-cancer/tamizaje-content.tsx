"use client";

import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import IconCard from "@/components/IconCard";
import Timeline from "@/components/Timeline";
import ContactCTA from "@/components/ContactCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import CTAButton from "@/components/CTAButton";
import Badge from "@/components/Badge";
import { Accordion } from "@/components/ProductDetailUI";
import { whatsappLink } from "@/lib/site";
import { SITE } from "@/lib/site";
import { useLanguage } from "@/lib/language-context";

const WHATSAPP_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.5 3.5A11 11 0 0 0 3.6 17.3L2 22l4.8-1.6A11 11 0 1 0 20.5 3.5Z" />
  </svg>
);

const RELEVANCE_ICONS = [
  // Multi-cancer evaluation — drop / sample
  <svg key="a" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 2.5c2.6 3.3 5.5 7.2 5.5 10.6a5.5 5.5 0 1 1-11 0c0-3.4 2.9-7.3 5.5-10.6Z" />
  </svg>,
  // Molecular information — DNA strand (minimal)
  <svg key="b" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M6 3c0 4 12 4 12 8s-12 4-12 8M8 5.5h8M8 18.5h8" />
  </svg>,
  // Non-invasive — shield/check
  <svg key="c" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3Z" /><path d="m9.5 12 1.8 1.8L14.8 10" />
  </svg>,
  // Clinical decision support — clipboard
  <svg key="d" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M9 11h6M9 15h4" />
  </svg>,
];

const APPLICATION_ICONS = [
  <svg key="a" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
  </svg>,
  <svg key="b" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
  </svg>,
  <svg key="c" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 19V9a2 2 0 0 1 2-2h3l2-2h2l2 2h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" /><circle cx="12" cy="13" r="3" />
  </svg>,
  <svg key="d" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0 0 12 3Z" />
  </svg>,
];

const NOT_REPLACE_ICONS = [
  <svg key="a" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" />
  </svg>,
];

export default function TamizajeContent() {
  const { t } = useLanguage();
  const p = t.tamizajeUniversal;
  const waHref = whatsappLink(p.whatsappMessage);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cobalt-50/70 via-surface to-surface">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid mask-fade-y opacity-50" />
        <div className="container-x relative pb-14 pt-12 sm:pt-16 lg:pb-20 lg:pt-20">
          <nav aria-label="breadcrumb" className="text-xs text-ink-muted">
            <Link href="/" className="hover:text-navy">{t.common.breadcrumbHome}</Link>
            <span className="mx-2">/</span>
            <Link href="/productos" className="hover:text-navy">{t.common.breadcrumbProducts}</Link>
            <span className="mx-2">/</span>
            <span className="text-navy">{p.heroTitle}</span>
          </nav>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge tone="emerald">{t.common.available}</Badge>
          </div>

          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-navy text-balance sm:text-5xl">
            {p.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {p.heroDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {p.heroBadges.map((b) => (
              <Badge key={b} tone="cobalt">{b}</Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="/contacto" variant="primary" size="lg">
              {p.heroCtaPrimary}
            </CTAButton>
            <CTAButton
              href={waHref}
              external
              variant="whatsapp"
              size="lg"
              icon={WHATSAPP_ICON}
              iconPosition="left"
            >
              {p.heroCtaSecondary}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="container-x mt-16 lg:mt-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader title={p.overviewTitle} />
          </div>
          <div className="lg:col-span-7 space-y-4">
            {p.overviewParagraphs.map((para) => (
              <p key={para} className="text-base leading-relaxed text-ink-muted sm:text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* WHY RELEVANT */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader title={p.relevanceTitle} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {p.relevanceCards.map((c, i) => (
            <IconCard key={c.title} title={c.title} description={c.description} icon={RELEVANCE_ICONS[i]} />
          ))}
        </div>
      </section>

      {/* WHO MAY CONSIDER */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader title={p.whoTitle} />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {p.whoProfiles.map((profile) => (
            <li
              key={profile}
              className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200 shadow-card"
            >
              <span aria-hidden className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cobalt-50 text-cobalt-700 ring-1 ring-cobalt-100">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span className="text-sm font-medium text-navy">{profile}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-muted">
          {p.whoNote}
        </p>
      </section>

      {/* CANCER TYPES EVALUATED */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader title={p.cancerTypesTitle} />
        <div className="mt-8 rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-card sm:p-8">
          <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
            {p.cancerTypesFallback}
          </p>
          <div className="mt-6">
            <CTAButton href={waHref} external variant="secondary" size="md">
              {p.cancerTypesCta}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-card sm:p-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeader title={p.howTitle} />
            </div>
            <div className="lg:col-span-7">
              <Timeline items={p.howSteps} />
            </div>
          </div>
        </div>
      </section>

      {/* REPORT CONTENT */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader title={p.reportTitle} />
        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {p.reportItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 rounded-xl bg-white p-4 text-sm font-medium text-navy ring-1 ring-slate-200 shadow-card"
            >
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              {item}
            </li>
          ))}
        </ul>
        <MedicalDisclaimer text={p.reportDisclaimer} className="mt-8" />
      </section>

      {/* CLINICAL APPLICATIONS */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader title={p.applicationsTitle} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {p.applicationsCards.map((c, i) => (
            <IconCard key={c.title} title={c.title} description={c.description} icon={APPLICATION_ICONS[i]} />
          ))}
        </div>
      </section>

      {/* WHAT IT DOES NOT REPLACE */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="rounded-3xl bg-white p-6 ring-2 ring-navy/10 shadow-card sm:p-10">
          <SectionHeader title={p.notReplaceTitle} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {p.notReplaceItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-navy ring-1 ring-slate-100"
              >
                <span aria-hidden className="shrink-0 text-slate-400">{NOT_REPLACE_ICONS[0]}</span>
                {item}
              </li>
            ))}
          </ul>
          <MedicalDisclaimer text={p.notReplaceNotice} className="mt-8" />
        </div>
      </section>

      {/* COMPARISON */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader title={p.comparisonTitle} description={p.comparisonIntro} />
        <div className="mt-8 overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 shadow-card">
          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50/80 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold">&nbsp;</th>
                  <th scope="col" className="px-6 py-4 font-semibold">{p.comparisonColStandard}</th>
                  <th scope="col" className="px-6 py-4 font-semibold">{p.comparisonColUniversal}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {p.comparisonRows.map((row) => (
                  <tr key={row.label} className="hover:bg-slate-50/60">
                    <th scope="row" className="px-6 py-5 align-top font-display text-[15px] font-semibold text-navy">
                      {row.label}
                    </th>
                    <td className="px-6 py-5 align-top text-ink-muted">{row.standard}</td>
                    <td className="px-6 py-5 align-top text-ink-muted">{row.universal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="divide-y divide-slate-100 md:hidden">
            {p.comparisonRows.map((row) => (
              <div key={row.label} className="p-5">
                <h3 className="font-display text-base font-semibold text-navy">{row.label}</h3>
                <dl className="mt-3 space-y-2 text-sm">
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                      {p.comparisonColStandard}
                    </dt>
                    <dd className="mt-0.5 text-navy/90">{row.standard}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                      {p.comparisonColUniversal}
                    </dt>
                    <dd className="mt-0.5 text-navy/90">{row.universal}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader title={p.technologyTitle} />
        <div className="mt-8 flex flex-wrap gap-2.5">
          {p.technologyTerms.map((term) => (
            <span
              key={term}
              className="inline-flex items-center rounded-full bg-cobalt-50 px-4 py-2 text-sm font-medium text-cobalt-800 ring-1 ring-cobalt-100"
            >
              {term}
            </span>
          ))}
        </div>
      </section>

      {/* SAMPLE INFORMATION */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader title={p.sampleTitle} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(
            [
              ["sample", p.sampleLabels.sample, p.sampleValues.sample],
              ["preparation", p.sampleLabels.preparation, p.sampleValues.preparation],
              ["turnaround", p.sampleLabels.turnaround, p.sampleValues.turnaround],
              ["report", p.sampleLabels.report, p.sampleValues.report],
            ] as const
          ).map(([key, label, value]) => (
            <div key={key} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200 shadow-card">
              <p className="text-[11px] font-bold uppercase tracking-wider text-cobalt-600">{label}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-navy">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader title={p.faqTitle} />
        <div className="mt-10 max-w-4xl">
          <Accordion items={p.faqItems.map((qa) => ({ title: qa.q, content: qa.a }))} />
        </div>
      </section>

      {/* WHY GENOVISION */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy-700 to-cobalt-700 px-6 py-12 text-white sm:px-12 sm:py-16">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-cobalt-400/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {p.whyTitle}
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {p.whyItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                  <span aria-hidden className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-400/20 text-teal-300">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mt-20 lg:mt-28">
        <ContactCTA
          title={p.finalCtaTitle}
          subtitle={p.finalCtaText}
          primaryLabel={p.finalCtaSecondary}
          primaryMessage={p.whatsappMessage}
          secondaryLabel={p.finalCtaPrimary}
          secondaryHref="/contacto"
          variant="cobalt"
        />
        <p className="mx-auto mt-6 max-w-7xl px-4 text-center text-sm text-ink-muted sm:px-6 lg:px-8">
          {SITE.name} — {SITE.address.line1} — {SITE.address.city}, {SITE.address.state}
        </p>
      </section>
    </>
  );
}
