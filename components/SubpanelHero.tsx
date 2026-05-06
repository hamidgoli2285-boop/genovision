"use client";

import Link from "next/link";
import CTAButton from "./CTAButton";
import Badge from "./Badge";
import SubpanelIcon from "./SubpanelIcon";
import type { Subpanel } from "@/lib/subpanels";
import { whatsappLink } from "@/lib/site";
import { useLanguage } from "@/lib/language-context";

type Props = {
  subpanel: Subpanel;
  subtitle: string;
};

export default function SubpanelHero({ subpanel, subtitle }: Props) {
  const { t } = useLanguage();
  const sh = t.subpanelHero;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cobalt-50/70 via-surface to-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid mask-fade-y opacity-50"
      />
      <div className="container-x relative pb-12 pt-12 sm:pt-16 lg:pb-16 lg:pt-20">
        <nav aria-label="breadcrumb" className="text-xs text-ink-muted">
          <Link href="/" className="hover:text-navy">
            {t.nav.items[0]?.label ?? "Inicio"}
          </Link>
          <span className="mx-2">/</span>
          <Link href="/productos" className="hover:text-navy">
            {t.nav.items[1]?.label ?? "Productos"}
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/productos/panel-cancer-hereditario"
            className="hover:text-navy"
          >
            {sh.breadcrumbPanel}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-navy">{subpanel.shortTitle}</span>
        </nav>

        <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-9">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="cobalt">{sh.specializedSubpanel}</Badge>
              <Badge tone="teal">{subpanel.badge}</Badge>
            </div>

            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-navy text-balance sm:text-5xl">
              {sh.titlePrefix} {subpanel.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-muted">
              {subtitle}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <CTAButton
                href={whatsappLink(subpanel.whatsappMessage)}
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
                {sh.schedule}
              </CTAButton>
              <CTAButton
                href="/productos/panel-cancer-hereditario"
                variant="secondary"
                size="lg"
              >
                {sh.viewFullPanel}
              </CTAButton>
            </div>
          </div>

          <div className="hidden lg:col-span-3 lg:block">
            <div className="relative grid h-full place-items-center">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-cobalt-100 via-teal-100 to-transparent blur-3xl opacity-70"
              />
              <div className="grid h-32 w-32 place-items-center rounded-3xl bg-white text-cobalt-700 ring-1 ring-cobalt-100 shadow-card">
                <SubpanelIcon kind={subpanel.iconKey} className="h-14 w-14" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
