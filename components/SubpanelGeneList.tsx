"use client";

import { useId, useMemo, useState } from "react";
import { useT } from "@/lib/i18n/useT";

type Props = {
  genes: string[];
  countLabel: string;
  showSearch?: boolean;
};

export default function SubpanelGeneList({
  genes,
  countLabel,
  showSearch = false,
}: Props) {
  const { t } = useT();
  const [query, setQuery] = useState("");
  const inputId = useId();

  const filtered = useMemo(() => {
    if (!showSearch) return genes;
    const q = query.trim().toLowerCase();
    if (!q) return genes;
    return genes.filter((g) => g.toLowerCase().includes(q));
  }, [genes, query, showSearch]);

  const isSearching = showSearch && query.trim().length > 0;
  const hasResults = filtered.length > 0;

  return (
    <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-card sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-cobalt-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cobalt-700 ring-1 ring-cobalt-100">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-teal" />
          {countLabel}
        </span>
        {isSearching && (
          <span className="text-xs text-ink-muted">
            {filtered.length}{" "}
            {filtered.length === 1
              ? t.subpanelGeneList.resultSingular
              : t.subpanelGeneList.resultPlural}
          </span>
        )}
      </div>

      {showSearch && (
        <div className="mt-5">
          <label htmlFor={inputId} className="sr-only">
            {t.subpanelGeneList.searchLabel}
          </label>
          <div className="relative">
            <span
              aria-hidden
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </span>
            <input
              id={inputId}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.subpanelGeneList.searchPlaceholder}
              autoComplete="off"
              spellCheck={false}
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-navy placeholder:text-ink-muted focus:border-cobalt-300 focus:outline-none focus:ring-2 focus:ring-cobalt-100"
            />
          </div>
        </div>
      )}

      <div className="mt-6">
        {hasResults ? (
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {filtered.map((g) => (
              <li
                key={g}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-center text-sm font-medium text-navy transition-colors hover:border-cobalt-300 hover:bg-cobalt-50/60 hover:text-cobalt-700"
              >
                {g}
              </li>
            ))}
          </ul>
        ) : (
          <p className="rounded-xl bg-slate-50 p-6 text-center text-sm text-ink-muted ring-1 ring-slate-100">
            {t.subpanelGeneList.noResults}
          </p>
        )}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-ink-muted">
        {t.subpanelGeneList.disclaimer}
      </p>
    </div>
  );
}
