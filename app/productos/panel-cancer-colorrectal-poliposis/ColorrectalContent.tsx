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
import { useT } from "@/lib/i18n/useT";

const SLUG = "panel-cancer-colorrectal-poliposis";
const subpanel = getSubpanelBySlug(SLUG)!;

export default function ColorrectalContent() {
  const { t } = useT();
  const c = t.subpanelPages.colorrectal;
  const sub = t.subpanelPages;
  const i18n = t.subpanels[subpanel.id];
  const whatsappMessage = i18n?.whatsappMessage ?? subpanel.whatsappMessage;

  return (
    <>
      <SubpanelHero subpanel={subpanel} subtitle={c.heroSubtitle} />

      <section className="container-x mt-16 lg:mt-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow={sub.sectionWhatEvalEyebrow}
              title={c.whatTitle}
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              {c.whatDesc}
            </p>
          </div>
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow={sub.sectionWhoConsiderEyebrow}
          title={sub.sectionWhoConsiderTitle}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {c.candidates.map((cand) => (
            <IconCard
              key={cand.title}
              title={cand.title}
              description={cand.description}
              variant="compact"
            />
          ))}
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow={c.warningEyebrow}
              title={c.warningTitle}
              description={c.warningDesc}
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {c.warningSigns.map((w) => (
                <li
                  key={w}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200 shadow-card"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cobalt-50 text-cobalt-700"
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
                  <p className="text-sm leading-relaxed text-navy/90 sm:text-base">
                    {w}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow={c.relatedEyebrow}
          title={c.relatedTitle}
          description={c.relatedDesc}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {c.relatedConditions.map((cond) => (
            <IconCard
              key={cond.title}
              title={cond.title}
              description={cond.description}
              variant="compact"
            />
          ))}
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow={sub.sectionGeneListEyebrow}
          title={sub.sectionGeneListTitle}
          description={sub.sectionGeneListDesc}
        />
        <div className="mt-10">
          <SubpanelGeneList
            genes={COLORRECTAL_POLIPOSIS_GENES}
            countLabel={sub.counterColorrectal}
          />
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow={sub.sectionProcessEyebrow}
          title={sub.sectionProcessTitle}
        />
        <div className="mt-10 max-w-3xl">
          <Timeline items={c.processSteps} />
        </div>
      </section>

      <section className="container-x mt-16 lg:mt-20">
        <MedicalDisclaimer />
        <div className="mt-6">
          <BackToMainPanel />
        </div>
      </section>

      <section className="mt-20 lg:mt-28">
        <ContactCTA
          title={c.finalTitle}
          subtitle={c.finalSubtitle}
          primaryMessage={whatsappMessage}
          secondaryLabel={t.subpanelHero.seeFullPanel}
          secondaryHref="/productos/panel-cancer-hereditario"
        />
      </section>
    </>
  );
}
