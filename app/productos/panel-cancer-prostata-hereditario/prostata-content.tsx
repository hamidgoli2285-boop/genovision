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
import { PROSTATA_GENES } from "@/lib/subpanel-genes";
import { useLanguage } from "@/lib/language-context";

const SLUG = "panel-cancer-prostata-hereditario";
const baseSubpanel = getSubpanelBySlug(SLUG)!;

export default function ProstataContent() {
  const { t } = useLanguage();
  const sp = t.subpanelProstata;
  const sd = t.subpanelData[baseSubpanel.id];

  const subpanel = {
    ...baseSubpanel,
    title: sd?.title ?? baseSubpanel.title,
    shortTitle: sd?.shortTitle ?? baseSubpanel.shortTitle,
    badge: sd?.badge ?? baseSubpanel.badge,
  };

  return (
    <>
      <SubpanelHero subpanel={subpanel} subtitle={sp.subtitle} />

      <section className="container-x mt-16 lg:mt-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow={sp.whatEyebrow} title={sp.whatTitle} />
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">{sp.whatBody}</p>
          </div>
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader eyebrow={sp.whoEyebrow} title={sp.whoTitle} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {sp.candidates.map((c) => (
            <IconCard key={c.title} title={c.title} description={c.description} variant="compact" />
          ))}
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow={sp.warningEyebrow} title={sp.warningTitle} description={sp.warningDescription} />
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {sp.warningSigns.map((w) => (
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
        <SectionHeader eyebrow={sp.familyEyebrow} title={sp.familyTitle} description={sp.familyDescription} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {sp.familyImpact.map((c) => (
            <IconCard key={c.title} title={c.title} description={c.description} variant="compact" />
          ))}
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader eyebrow={sp.genesEyebrow} title={sp.genesTitle} description={sp.genesDescription} />
        <div className="mt-10">
          <SubpanelGeneList genes={PROSTATA_GENES} countLabel={sp.genesCountLabel} />
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader eyebrow={sp.processEyebrow} title={sp.processTitle} />
        <div className="mt-10 max-w-3xl">
          <Timeline items={sp.processSteps} />
        </div>
      </section>

      <section className="container-x mt-16 lg:mt-20">
        <MedicalDisclaimer />
        <div className="mt-6"><BackToMainPanel /></div>
      </section>

      <section className="mt-20 lg:mt-28">
        <ContactCTA
          title={sp.ctaTitle}
          subtitle={sp.ctaSubtitle}
          primaryLabel={sp.ctaPrimary}
          primaryMessage={baseSubpanel.whatsappMessage}
          secondaryLabel={sp.ctaSecondary}
          secondaryHref="/productos/panel-cancer-hereditario"
        />
      </section>
    </>
  );
}
