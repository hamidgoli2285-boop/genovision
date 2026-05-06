"use client";

import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import IconCard from "@/components/IconCard";
import Timeline from "@/components/Timeline";
import ContactCTA from "@/components/ContactCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import SubpanelHero from "@/components/SubpanelHero";
import BackToMainPanel from "@/components/BackToMainPanel";
import Badge from "@/components/Badge";
import SubpanelGeneList from "@/components/SubpanelGeneList";
import { getSubpanelBySlug } from "@/lib/subpanels";
import { CORE_GENES } from "@/lib/subpanel-genes";
import { useLanguage } from "@/lib/language-context";

const SLUG = "panel-core-cancer-hereditario";
const baseSubpanel = getSubpanelBySlug(SLUG)!;

export default function CoreContent() {
  const { t } = useLanguage();
  const sc = t.subpanelCore;
  const sd = t.subpanelData[baseSubpanel.id];

  const subpanel = {
    ...baseSubpanel,
    title: sd?.title ?? baseSubpanel.title,
    shortTitle: sd?.shortTitle ?? baseSubpanel.shortTitle,
    badge: sd?.badge ?? baseSubpanel.badge,
  };

  return (
    <>
      <SubpanelHero subpanel={subpanel} subtitle={sc.subtitle} />

      <section className="container-x mt-16 lg:mt-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow={sc.whatEyebrow} title={sc.whatTitle} />
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              {sc.whatBody1}{" "}
              <strong className="font-semibold text-navy">{sc.whatBodyBold}</strong>{" "}
              {sc.whatBody2}
            </p>
          </div>
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader eyebrow={sc.whenEyebrow} title={sc.whenTitle} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {sc.useCases.map((c) => (
            <IconCard key={c.title} title={c.title} description={c.description} variant="compact" />
          ))}
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy-700 to-cobalt-700 p-7 text-white shadow-card">
            <Badge tone="cobalt" size="sm" className="bg-white/15 text-white ring-white/20">
              {sc.fullPanelBadge}
            </Badge>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
              {sc.fullPanelTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">{sc.fullPanelDesc}</p>
            <ul className="mt-5 space-y-2 text-sm text-white/85">
              {sc.fullPanelBenefits.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span aria-hidden className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-400/20 text-teal-300">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/productos/panel-cancer-hereditario"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-teal-200"
            >
              {sc.viewFullPanel}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-white p-7 ring-1 ring-slate-200 shadow-card">
            <Badge tone="teal" size="sm">{sc.coreBadge}</Badge>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-navy">{sc.coreTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{sc.coreDesc}</p>
            <ul className="mt-5 space-y-2 text-sm text-navy/85">
              {sc.coreBenefits.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span aria-hidden className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow={sc.limitationsEyebrow} title={sc.limitationsTitle} description={sc.limitationsDescription} />
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {sc.limitations.map((l) => (
                <li key={l} className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200 shadow-card">
                  <span aria-hidden className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber-50 text-amber-800">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
                  </span>
                  <p className="text-sm leading-relaxed text-navy/90 sm:text-base">{l}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader eyebrow={sc.genesEyebrow} title={sc.genesTitle} description={sc.genesDescription} />
        <div className="mt-10">
          <SubpanelGeneList genes={CORE_GENES} countLabel={sc.genesCountLabel} showSearch />
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader eyebrow={sc.processEyebrow} title={sc.processTitle} />
        <div className="mt-10 max-w-3xl">
          <Timeline items={sc.processSteps} />
        </div>
      </section>

      <section className="container-x mt-16 lg:mt-20">
        <MedicalDisclaimer />
        <div className="mt-6"><BackToMainPanel /></div>
      </section>

      <section className="mt-20 lg:mt-28">
        <ContactCTA
          title={sc.ctaTitle}
          subtitle={sc.ctaSubtitle}
          primaryLabel={sc.ctaPrimary}
          primaryMessage={baseSubpanel.whatsappMessage}
          secondaryLabel={sc.ctaSecondary}
          secondaryHref="/productos/panel-cancer-hereditario"
        />
      </section>
    </>
  );
}
