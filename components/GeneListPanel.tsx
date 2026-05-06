"use client";

import { useId, useMemo, useState } from "react";
import { useT } from "@/lib/i18n/useT";

type Props = {
  genes: string[];
};

const PREVIEW_COUNT = 28;

export default function GeneListPanel({ genes }: Props) {
  const { t } = useT();
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const inputId = useId();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return genes;
    return genes.filter((g) => g.toLowerCase().includes(q));
  }, [genes, query]);

  const isSearching = expanded && query.trim().length > 0;
  const visible = expanded ? filtered : genes.slice(0, PREVIEW_COUNT);
  const hasResults = visible.length > 0;

  return (
    <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-card sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-cobalt-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cobalt-700 ring-1 ring-cobalt-100">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-teal" />
          {t.geneListPanel.counter}
        </span>
        {isSearching && (
          <span className="text-xs text-ink-muted">
            {filtered.length}{" "}
            {filtered.length === 1
              ? t.geneListPanel.resultSingular
              : t.geneListPanel.resultPlural}
          </span>
        )}
      </div>

      {expanded && (
        <div className="mt-5">
          <label htmlFor={inputId} className="sr-only">
            {t.geneListPanel.searchLabel}
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
              placeholder={t.geneListPanel.searchPlaceholder}
              autoComplete="off"
              spellCheck={false}
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-navy placeholder:text-ink-muted focus:border-cobalt-300 focus:outline-none focus:ring-2 focus:ring-cobalt-100"
            />
          </div>
        </div>
      )}

      <div className="mt-6">
        {hasResults ? (
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
            {visible.map((g) => (
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
            {t.geneListPanel.noResults}
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {!expanded ? (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy-700"
          >
            {t.geneListPanel.expand}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setExpanded(false);
              setQuery("");
            }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-cobalt-300 hover:text-cobalt-700"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
            {t.geneListPanel.collapse}
          </button>
        )}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-ink-muted">
        {t.geneListPanel.disclaimer}
      </p>
    </div>
  );
}
