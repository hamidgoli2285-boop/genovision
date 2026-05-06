"use client";

import SectionHeader from "@/components/SectionHeader";
import IconCard from "@/components/IconCard";
import Timeline from "@/components/Timeline";
import ContactCTA from "@/components/ContactCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import SubpanelHero from "@/components/SubpanelHero";
import BackToMainPanel from "@/components/BackToMainPanel";
import SubpanelGeneList from "@/components/SubpanelGeneList";
import { getSubpanelBySlug } from "@/lib/subpanels";
import { COLORRECTAL_POLIPOSIS_GENES } from "@/lib/subpanel-genes";
import { useLanguage } from "@/lib/language-context";

const SLUG = "panel-cancer-colorrectal-poliposis";
const baseSubpanel = getSubpanelBySlug(SLUG)!;

export default function ColorrectalContent() {
  const { t } = useLanguage();
  const sc = t.subpanelColorrectal;
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
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">{sc.whatBody}</p>
          </div>
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader eyebrow={sc.whoEyebrow} title={sc.whoTitle} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {sc.candidates.map((c) => (
            <IconCard key={c.title} title={c.title} description={c.description} variant="compact" />
          ))}
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow={sc.warningEyebrow} title={sc.warningTitle} description={sc.warningDescription} />
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {sc.warningSigns.map((w) => (
                <li key={w} className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200 shadow-card">
                  <span aria-hidden className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cobalt-50 text-cobalt-700">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <p className="text-sm leading-relaxed text-navy/90 sm:text-base">{w}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader eyebrow={sc.relatedEyebrow} title={sc.relatedTitle} description={sc.relatedDescription} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {sc.relatedConditions.map((c) => (
            <IconCard key={c.title} title={c.title} description={c.description} variant="compact" />
          ))}
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader eyebrow={sc.genesEyebrow} title={sc.genesTitle} description={sc.genesDescription} />
        <div className="mt-10">
          <SubpanelGeneList genes={COLORRECTAL_POLIPOSIS_GENES} countLabel={sc.genesCountLabel} />
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
