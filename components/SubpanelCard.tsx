"use client";

import Link from "next/link";
import Badge from "./Badge";
import SubpanelIcon from "./SubpanelIcon";
import type { Subpanel } from "@/lib/subpanels";

type TranslatedSubpanel = {
  title?: string;
  shortTitle?: string;
  badge?: string;
  description?: string;
  indications?: string[];
  ctaLabel?: string;
};

type Props = {
  subpanel: Subpanel;
  translated?: TranslatedSubpanel;
};

export default function SubpanelCard({ subpanel, translated }: Props) {
  const title = translated?.title ?? subpanel.title;
  const badge = translated?.badge ?? subpanel.badge;
  const description = translated?.description ?? subpanel.description;
  const indications = translated?.indications ?? subpanel.indications;
  const ctaLabel = translated?.ctaLabel ?? subpanel.ctaLabel;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-slate-200/80 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover hover:ring-cobalt-200 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <div
          aria-hidden
          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cobalt-50 to-teal-50 text-cobalt-700 ring-1 ring-cobalt-100"
        >
          <SubpanelIcon kind={subpanel.iconKey} />
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <Badge tone="cobalt" size="sm">
            {badge}
          </Badge>
          <Badge tone="teal" size="sm">
            {subpanel.geneCount} genes
          </Badge>
        </div>
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-navy">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {description}
      </p>

      <ul className="mt-5 space-y-2 text-sm text-navy/85">
        {indications.map((ind) => (
          <li key={ind} className="flex items-start gap-2">
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
            <span className="leading-snug">{ind}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
        <Link
          href={subpanel.href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt hover:text-cobalt-700"
        >
          {ctaLabel}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-0.5"
            aria-hidden
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
