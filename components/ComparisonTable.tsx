"use client";

import Link from "next/link";
import Badge from "./Badge";
import { SUBPANELS, MAIN_PANEL_HREF } from "@/lib/subpanels";
import { whatsappLink } from "@/lib/site";
import { useLanguage } from "@/lib/language-context";

const PRIMARY_WA =
  "Hola GenoVision, me interesa agendar el Panel Completo de Cáncer Hereditario (193 genes).";

export default function ComparisonTable() {
  const { t } = useLanguage();
  const ct = t.comparisonTable;

  const rows = [
    {
      option: ct.fullPanelName,
      href: MAIN_PANEL_HREF,
      geneCount: 193,
      enfoque: ct.fullPanelFocus,
      mejorPara: ct.fullPanelBestFor,
      nivel: ct.fullPanelCoverage,
      nivelTone: "cobalt" as const,
      ctaLabel: ct.schedule,
      isPrimary: true,
      whatsappMessage: PRIMARY_WA,
    },
    ...SUBPANELS.map((sp) => ({
      option: ct.subpanelNames[sp.id] ?? sp.shortTitle,
      href: sp.href,
      geneCount: sp.geneCount,
      enfoque: ct.subpanelFocus[sp.id] ?? sp.enfoque,
      mejorPara: ct.subpanelBestFor[sp.id] ?? sp.mejorPara,
      nivel: ct.subpanelCoverage[sp.id] ?? sp.nivel,
      nivelTone: "teal" as const,
      ctaLabel: ct.view,
      isPrimary: false,
      whatsappMessage: undefined as string | undefined,
    })),
  ];

  return (
    <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 shadow-card">
      {/* Desktop table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50/80 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            <tr>
              <th scope="col" className="px-6 py-4 font-semibold">
                {ct.colOption}
              </th>
              <th scope="col" className="px-6 py-4 font-semibold">
                {ct.colGenes}
              </th>
              <th scope="col" className="px-6 py-4 font-semibold">
                {ct.colFocus}
              </th>
              <th scope="col" className="px-6 py-4 font-semibold">
                {ct.colBestFor}
              </th>
              <th scope="col" className="px-6 py-4 font-semibold">
                {ct.colCoverage}
              </th>
              <th scope="col" className="px-6 py-4 text-right font-semibold">
                {ct.colCta}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row) => (
              <tr
                key={row.option}
                className={`transition-colors ${
                  row.isPrimary ? "bg-cobalt-50/40" : "hover:bg-slate-50/60"
                }`}
              >
                <th
                  scope="row"
                  className={`px-6 py-5 align-top font-display text-[15px] ${
                    row.isPrimary
                      ? "font-semibold text-navy"
                      : "font-medium text-navy/90"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <span>{row.option}</span>
                    {row.isPrimary && (
                      <Badge tone="cobalt" size="sm">
                        {ct.recommended}
                      </Badge>
                    )}
                  </div>
                </th>
                <td className="px-6 py-5 align-top">
                  <span className="inline-flex items-center rounded-full bg-cobalt-50 px-2.5 py-1 text-xs font-semibold text-cobalt-700 ring-1 ring-cobalt-100">
                    {row.geneCount} genes
                  </span>
                </td>
                <td className="px-6 py-5 align-top text-ink-muted">
                  {row.enfoque}
                </td>
                <td className="px-6 py-5 align-top text-ink-muted">
                  {row.mejorPara}
                </td>
                <td className="px-6 py-5 align-top">
                  <Badge tone={row.nivelTone} size="sm">
                    {row.nivel}
                  </Badge>
                </td>
                <td className="px-6 py-5 align-top text-right">
                  {row.isPrimary ? (
                    <a
                      href={whatsappLink(row.whatsappMessage ?? PRIMARY_WA)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-cobalt px-4 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-cobalt-600"
                    >
                      {row.ctaLabel}
                    </a>
                  ) : (
                    <Link
                      href={row.href}
                      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-navy transition-all hover:-translate-y-px hover:border-cobalt-300 hover:text-cobalt-700"
                    >
                      {row.ctaLabel}
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="divide-y divide-slate-100 md:hidden">
        {rows.map((row) => (
          <div
            key={row.option}
            className={`p-5 ${row.isPrimary ? "bg-cobalt-50/40" : ""}`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone={row.nivelTone} size="sm">
                {row.nivel}
              </Badge>
              <Badge tone="teal" size="sm">
                {row.geneCount} genes
              </Badge>
              {row.isPrimary && (
                <Badge tone="cobalt" size="sm">
                  {ct.recommended}
                </Badge>
              )}
            </div>
            <h3 className="mt-2 font-display text-base font-semibold text-navy">
              {row.option}
            </h3>
            <dl className="mt-3 space-y-2 text-sm">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                  {ct.labelFocus}
                </dt>
                <dd className="text-navy/85">{row.enfoque}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                  {ct.labelBestFor}
                </dt>
                <dd className="text-navy/85">{row.mejorPara}</dd>
              </div>
            </dl>
            <div className="mt-4">
              {row.isPrimary ? (
                <a
                  href={whatsappLink(row.whatsappMessage ?? PRIMARY_WA)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-cobalt px-4 py-2 text-sm font-semibold text-white"
                >
                  {row.ctaLabel}
                </a>
              ) : (
                <Link
                  href={row.href}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-navy"
                >
                  {row.ctaLabel}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
