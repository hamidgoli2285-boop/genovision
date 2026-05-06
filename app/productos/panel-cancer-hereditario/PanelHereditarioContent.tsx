"use client";

import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import SectionHeader from "@/components/SectionHeader";
import IconCard from "@/components/IconCard";
import Timeline from "@/components/Timeline";
import ContactCTA from "@/components/ContactCTA";
import DNAVisual from "@/components/DNAVisual";
import DNAPipeline from "@/components/DNAPipeline";
import GeneCountBadge from "@/components/GeneCountBadge";
import Badge from "@/components/Badge";
import SubpanelGrid from "@/components/SubpanelGrid";
import GeneListPanel from "@/components/GeneListPanel";
import ComparisonTable from "@/components/ComparisonTable";
import { whatsappLink } from "@/lib/site";
import { CANCER_HEREDITARIO_GENES } from "@/lib/genes-cancer-hereditario";
import { useT } from "@/lib/i18n/useT";

const PANEL_WHATSAPP_ES =
  "Hola GenoVision, me interesa agendar una evaluación para el Panel de Cáncer Hereditario.";
const PANEL_WHATSAPP_EN =
  "Hello GenoVision, I'd like to schedule an evaluation for the Hereditary Cancer Panel.";

export default function PanelHereditarioContent() {
  const { t, locale } = useT();
  const PANEL_WHATSAPP =
    locale === "en" ? PANEL_WHATSAPP_EN : PANEL_WHATSAPP_ES;

  const candidateIcon = (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );

  const resultCards = [
    {
      tone: "amber" as const,
      label: t.panelHereditarioPage.resultPositiveLabel,
      title: t.panelHereditarioPage.resultPositiveTitle,
      description: t.panelHereditarioPage.resultPositiveDesc,
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 9v4M12 17h.01" />
          <path d="M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.41 0Z" />
        </svg>
      ),
    },
    {
      tone: "neutral" as const,
      label: t.panelHereditarioPage.resultIntermediateLabel,
      title: t.panelHereditarioPage.resultIntermediateTitle,
      description: t.panelHereditarioPage.resultIntermediateDesc,
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16h.01M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" />
        </svg>
      ),
    },
    {
      tone: "emerald" as const,
      label: t.panelHereditarioPage.resultReassuringLabel,
      title: t.panelHereditarioPage.resultReassuringTitle,
      description: t.panelHereditarioPage.resultReassuringDesc,
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cobalt-50/70 via-surface to-surface">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid mask-fade-y opacity-50"
        />
        <div className="container-x relative grid gap-10 pb-14 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-14 lg:pb-20 lg:pt-20">
          <div className="lg:col-span-7">
            <nav aria-label="breadcrumb" className="text-xs text-ink-muted">
              <Link href="/" className="hover:text-navy">
                {t.subpanelHero.breadcrumbHome}
              </Link>
              <span className="mx-2">/</span>
              <Link href="/productos" className="hover:text-navy">
                {t.subpanelHero.breadcrumbProducts}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-navy">
                {t.panelHereditarioPage.breadcrumbCurrent}
              </span>
            </nav>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge tone="emerald">{t.panelHereditarioPage.badgeAvailable}</Badge>
              <Badge tone="cobalt">{t.panelHereditarioPage.badgeFeatured}</Badge>
            </div>

            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-navy text-balance sm:text-5xl">
              {t.panelHereditarioPage.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
              {t.panelHereditarioPage.descPart1}
              <strong className="font-semibold text-navy">
                {t.panelHereditarioPage.desc161}
              </strong>
              {t.panelHereditarioPage.descPart2}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {t.panelHereditarioPage.quickBadges.map((b) => (
                <Badge key={b} tone="cobalt">
                  {b}
                </Badge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton
                href={whatsappLink(PANEL_WHATSAPP)}
                external
                variant="whatsapp"
                size="lg"
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M20.5 3.5A11 11 0 0 0 3.6 17.3L2 22l4.8-1.6A11 11 0 1 0 20.5 3.5Z" />
                  </svg>
                }
                iconPosition="left"
              >
                {t.panelHereditarioPage.scheduleEval}
              </CTAButton>
              <CTAButton href="/proceso" variant="secondary" size="lg">
                {t.panelHereditarioPage.seeFullProcess}
              </CTAButton>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-cobalt-100 via-teal-100 to-transparent blur-3xl opacity-70"
              />
              <DNAVisual className="h-full w-full" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-2xl bg-white px-4 py-3 ring-1 ring-slate-200 shadow-card">
                <GeneCountBadge count={161} size="md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS THIS TEST? */}
      <section className="container-x mt-16 lg:mt-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow={t.panelHereditarioPage.whatEyebrow}
              title={t.panelHereditarioPage.whatTitle}
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              {t.panelHereditarioPage.whatDescPart1}
              <strong className="font-semibold text-navy">
                {t.panelHereditarioPage.whatDescPart2}
              </strong>
              {t.panelHereditarioPage.whatDescPart3}
            </p>
          </div>
        </div>
      </section>

      {/* WHO SHOULD CONSIDER */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow={t.panelHereditarioPage.whoEyebrow}
          title={t.panelHereditarioPage.whoTitle}
          description={t.panelHereditarioPage.whoDesc}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {t.panelHereditarioPage.candidates.map((c) => (
            <IconCard
              key={c.title}
              title={c.title}
              description={c.description}
              icon={candidateIcon}
            />
          ))}
        </div>
      </section>

      {/* CANCER TYPES COVERED */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow={t.panelHereditarioPage.typesEyebrow}
          title={t.panelHereditarioPage.typesTitle}
          description={t.panelHereditarioPage.typesDesc}
        />
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {t.panelHereditarioPage.cancerTypes.map((ct) => (
            <li
              key={ct}
              className="flex items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-cardHover hover:ring-cobalt-200"
            >
              <span
                aria-hidden
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-cobalt-50 to-teal-50 text-cobalt-700 ring-1 ring-cobalt-100"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z" />
                  <path d="M9 12h6M12 9v6" />
                </svg>
              </span>
              <span className="text-sm font-medium text-navy">{ct}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* TECHNOLOGY */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-card sm:p-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow={t.panelHereditarioPage.techEyebrow}
                title={t.panelHereditarioPage.techTitle}
                description={t.panelHereditarioPage.techDesc}
              />
            </div>
            <div className="lg:col-span-7">
              <DNAPipeline />
            </div>
          </div>
        </div>
      </section>

      {/* GENE LIST */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow={t.panelHereditarioPage.geneListEyebrow}
          title={t.panelHereditarioPage.geneListTitle}
          description={t.panelHereditarioPage.geneListDesc}
        />
        <div className="mt-10">
          <GeneListPanel genes={CANCER_HEREDITARIO_GENES} />
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow={t.panelHereditarioPage.processEyebrow}
          title={t.panelHereditarioPage.processTitle}
          description={t.panelHereditarioPage.processDesc}
        />
        <div className="mt-10 max-w-3xl">
          <Timeline items={t.panelHereditarioPage.processSteps} />
        </div>
      </section>

      {/* RESULTS */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow={t.panelHereditarioPage.resultsEyebrow}
          title={t.panelHereditarioPage.resultsTitle}
          description={t.panelHereditarioPage.resultsDesc}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {resultCards.map((r) => (
            <article
              key={r.title}
              className="relative h-full overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-card sm:p-7"
            >
              <Badge tone={r.tone} size="sm">
                {r.label}
              </Badge>
              <div
                aria-hidden
                className="mt-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cobalt-50 to-teal-50 text-cobalt-700 ring-1 ring-cobalt-100"
              >
                {r.icon}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {r.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/60 p-5 text-sm leading-relaxed text-amber-900 sm:p-6">
          <div className="flex items-start gap-3">
            <span
              aria-hidden
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-amber-100 text-amber-800"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
            </span>
            <p>
              <strong className="font-semibold">
                {t.medicalDisclaimer.label}
              </strong>{" "}
              {t.panelHereditarioPage.importantNote}
            </p>
          </div>
        </div>
      </section>

      {/* SPECIALIZED SUBPANELS */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow={t.panelHereditarioPage.subpanelsEyebrow}
          title={t.panelHereditarioPage.subpanelsTitle}
          description={t.panelHereditarioPage.subpanelsDesc}
        />
        <SubpanelGrid className="mt-10" />
        <p className="mt-6 text-sm text-ink-muted">
          {t.panelHereditarioPage.subpanelsClose}
        </p>

        <div className="mt-12">
          <SectionHeader
            eyebrow={t.panelHereditarioPage.comparisonEyebrow}
            title={t.panelHereditarioPage.comparisonTitle}
            description={t.panelHereditarioPage.comparisonDesc}
          />
          <div className="mt-8">
            <ComparisonTable />
          </div>
        </div>
      </section>

      {/* FAMILY IMPACT */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy-700 to-cobalt-700 px-6 py-12 text-white sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-teal/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-cobalt-400/20 blur-3xl"
          />
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 ring-1 ring-white/15">
                {t.panelHereditarioPage.familyEyebrow}
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                {t.panelHereditarioPage.familyTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                {t.panelHereditarioPage.familyDesc}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur">
                <ul className="space-y-3 text-sm text-white/85">
                  {t.panelHereditarioPage.familyItems.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span
                        aria-hidden
                        className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-400/20 text-teal-300"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 lg:mt-28">
        <ContactCTA
          title={t.panelHereditarioPage.finalTitle}
          subtitle={t.panelHereditarioPage.finalSubtitle}
          primaryLabel={t.panelHereditarioPage.finalPrimary}
          primaryMessage={PANEL_WHATSAPP}
          secondaryLabel={t.panelHereditarioPage.finalSecondary}
          secondaryHref="/proceso"
        />
      </section>
    </>
  );
}
