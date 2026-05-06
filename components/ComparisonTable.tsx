"use client";

import Link from "next/link";
import Badge from "./Badge";
import { SUBPANELS, MAIN_PANEL_HREF } from "@/lib/subpanels";
import { whatsappLink } from "@/lib/site";
import { useT } from "@/lib/i18n/useT";

type Row = {
  option: string;
  href: string;
  geneCount: number;
  enfoque: string;
  mejorPara: string;
  nivel: string;
  nivelTone: "cobalt" | "teal" | "navy";
  ctaLabel: string;
  isPrimary?: boolean;
  whatsappMessage?: string;
};

export default function ComparisonTable() {
  const { t, locale } = useT();

  const primaryWa = t.comparisonTable.primaryWa;
  const fullPanelOption =
    locale === "en"
      ? "Full Hereditary Cancer Panel"
      : "Panel Completo de Cáncer Hereditario";
  const fullPanelEnfoque =
    locale === "en"
      ? "161 genes related to multiple hereditary syndromes"
      : "161 genes relacionados con múltiples síndromes hereditarios";
  const fullPanelBest =
    locale === "en"
      ? "Broad evaluation, complex family history"
      : "Evaluación amplia, antecedentes familiares complejos";
  const fullPanelLevel =
    locale === "en" ? "Most complete" : "Más completo";
  const ctaSchedule = locale === "en" ? "Schedule" : "Agendar";
  const ctaView = locale === "en" ? "View" : "Ver";

  const subpanelOption = (id: string): string => {
    if (locale === "en") {
      switch (id) {
        case "core":
          return "Core Panel";
        case "mama-hereditario":
          return "Hereditary Breast & Ovarian Cancer Panel";
        case "colorrectal-poliposis":
          return "Colorectal & Polyposis Panel";
        default:
          return "Hereditary Prostate Cancer Panel";
      }
    }
    switch (id) {
      case "core":
        return "Panel Core";
      case "mama-hereditario":
        return "Panel Cáncer de Mama y Ovario Hereditario";
      case "colorrectal-poliposis":
        return "Panel Colorrectal y Poliposis";
      default:
        return "Panel Cáncer de Próstata Hereditario";
    }
  };

  const rows: Row[] = [
    {
      option: fullPanelOption,
      href: MAIN_PANEL_HREF,
      geneCount: 161,
      enfoque: fullPanelEnfoque,
      mejorPara: fullPanelBest,
      nivel: fullPanelLevel,
      nivelTone: "cobalt",
      ctaLabel: ctaSchedule,
      isPrimary: true,
      whatsappMessage: primaryWa,
    },
    ...SUBPANELS.map<Row>((sp) => {
      const i18n = t.subpanels[sp.id];
      return {
        option: subpanelOption(sp.id),
        href: sp.href,
        geneCount: sp.geneCount,
        enfoque: i18n?.enfoque ?? sp.enfoque,
        mejorPara: i18n?.mejorPara ?? sp.mejorPara,
        nivel: i18n?.nivel ?? sp.nivel,
        nivelTone: "teal",
        ctaLabel: ctaView,
      };
    }),
  ];

  return (
    <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 shadow-card">
      {/* Desktop table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50/80 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            <tr>
              <th scope="col" className="px-6 py-4 font-semibold">
                {t.comparisonTable.option}
              </th>
              <th scope="col" className="px-6 py-4 font-semibold">
                {t.comparisonTable.genes}
              </th>
              <th scope="col" className="px-6 py-4 font-semibold">
                {t.comparisonTable.enfoque}
              </th>
              <th scope="col" className="px-6 py-4 font-semibold">
                {t.comparisonTable.mejorPara}
              </th>
              <th scope="col" className="px-6 py-4 font-semibold">
                {t.comparisonTable.nivel}
              </th>
              <th scope="col" className="px-6 py-4 text-right font-semibold">
                {t.comparisonTable.cta}
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
                        {t.comparisonTable.recommended}
                      </Badge>
                    )}
                  </div>
                </th>
                <td className="px-6 py-5 align-top">
                  <span className="inline-flex items-center rounded-full bg-cobalt-50 px-2.5 py-1 text-xs font-semibold text-cobalt-700 ring-1 ring-cobalt-100">
                    {row.geneCount} {t.comparisonTable.geneSuffix}
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
                      href={whatsappLink(
                        row.whatsappMessage ?? primaryWa,
                      )}
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
                {row.geneCount} {t.comparisonTable.geneSuffix}
              </Badge>
              {row.isPrimary && (
                <Badge tone="cobalt" size="sm">
                  {t.comparisonTable.recommended}
                </Badge>
              )}
            </div>
            <h3 className="mt-2 font-display text-base font-semibold text-navy">
              {row.option}
            </h3>
            <dl className="mt-3 space-y-2 text-sm">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                  {t.comparisonTable.enfoque}
                </dt>
                <dd className="text-navy/85">{row.enfoque}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                  {t.comparisonTable.mejorPara}
                </dt>
                <dd className="text-navy/85">{row.mejorPara}</dd>
              </div>
            </dl>
            <div className="mt-4">
              {row.isPrimary ? (
                <a
                  href={whatsappLink(row.whatsappMessage ?? primaryWa)}
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
