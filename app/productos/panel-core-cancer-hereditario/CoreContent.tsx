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
import { useT } from "@/lib/i18n/useT";

const SLUG = "panel-core-cancer-hereditario";
const subpanel = getSubpanelBySlug(SLUG)!;

export default function CoreContent() {
  const { t } = useT();
  const c = t.subpanelPages.core;
  const sub = t.subpanelPages;
  const i18n = t.subpanels[subpanel.id];
  const whatsappMessage = i18n?.whatsappMessage ?? subpanel.whatsappMessage;

  return (
    <>
      <SubpanelHero subpanel={subpanel} subtitle={c.heroSubtitle} />

      <section className="container-x mt-16 lg:mt-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow={c.whatEyebrow} title={c.whatTitle} />
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              {c.whatDesc1}
              <strong className="font-semibold text-navy">
                {c.whatDescStrong}
              </strong>
              {c.whatDesc2}
            </p>
          </div>
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader eyebrow={c.whenEyebrow} title={c.whenTitle} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {c.useCases.map((u) => (
            <IconCard
              key={u.title}
              title={u.title}
              description={u.description}
              variant="compact"
            />
          ))}
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy-700 to-cobalt-700 p-7 text-white shadow-card">
            <Badge
              tone="cobalt"
              size="sm"
              className="bg-white/15 text-white ring-white/20"
            >
              {c.compareCompletoBadge}
            </Badge>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
              {c.compareCompleto161}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              {c.compareCompletoDesc}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/85">
              {c.compareCompletoBullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
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
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/productos/panel-cancer-hereditario"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-teal-200"
            >
              {c.seeFullPanel}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-white p-7 ring-1 ring-slate-200 shadow-card">
            <Badge tone="teal" size="sm">
              {c.compareCoreBadge}
            </Badge>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-navy">
              {c.compareCoreTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {c.compareCoreDesc}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-navy/85">
              {c.compareCoreBullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700"
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
            <SectionHeader
              eyebrow={c.limitationsEyebrow}
              title={c.limitationsTitle}
              description={c.limitationsDesc}
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {c.limitations.map((l) => (
                <li
                  key={l}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200 shadow-card"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber-50 text-amber-800"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4M12 16h.01" />
                    </svg>
                  </span>
                  <p className="text-sm leading-relaxed text-navy/90 sm:text-base">
                    {l}
                  </p>
                </li>
              ))}
            </ul>
          </div>
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
            genes={CORE_GENES}
            countLabel={sub.counterCore}
            showSearch
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
