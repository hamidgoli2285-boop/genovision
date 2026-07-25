"use client";

import { useId, useMemo, useState } from "react";
import type { CondGroup } from "@/lib/product-content";

const NAVY = "#0A2240";
const CYAN = "#00C2D1";

/* ── Timeline — for ordered process/workflow steps ─────────────────────── */
export function Timeline({ steps }: { steps: string[] }) {
  return (
    <ol className="relative">
      {steps.map((step, i) => (
        <li key={step} className="relative flex gap-4 pb-7 last:pb-0">
          {i < steps.length - 1 && (
            <span
              aria-hidden
              className="absolute left-[13px] top-7 h-[calc(100%-0.75rem)] w-px"
              style={{ background: "linear-gradient(to bottom, rgba(0,194,209,0.4), rgba(10,34,64,0.15))" }}
            />
          )}
          <span
            className="relative z-10 grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold text-white"
            style={{ background: `linear-gradient(135deg, ${CYAN} 0%, ${NAVY} 100%)` }}
          >
            {i + 1}
          </span>
          <span className="pt-0.5 text-[15px] leading-relaxed text-slate-700">{step}</span>
        </li>
      ))}
    </ol>
  );
}

/* ── Accordion — generic collapsible item group ─────────────────────────── */
export function Accordion({ items }: { items: { title: string; content: React.ReactNode }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  return (
    <div className="divide-y divide-slate-100 overflow-hidden rounded-2xl ring-1 ring-slate-200/70">
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-accordion-button-${i}`;
        const panelId = `${baseId}-accordion-panel-${i}`;
        return (
          <div key={item.title} className="bg-white">
            <button
              type="button"
              id={buttonId}
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50/70"
            >
              <span className="font-semibold text-navy">{item.title}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                className={`shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 pb-5 text-sm leading-relaxed text-slate-600"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ── Callout — highlighted note box (used for limitations / important notes) ── */
export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-200/70">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mt-0.5 shrink-0 text-amber-500"
        aria-hidden
      >
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
      <p className="text-[15px] leading-relaxed text-amber-900">{children}</p>
    </div>
  );
}

/* ── Condition groups — chip list, or searchable accordion when large ───── */
const SEARCH_THRESHOLD = 10;

export function ConditionGroups({
  groups,
  searchPlaceholder,
}: {
  groups: CondGroup[];
  searchPlaceholder: string;
}) {
  return (
    <div className="space-y-5">
      {groups.map((g) => (
        <ConditionGroupBlock key={g.label} group={g} searchPlaceholder={searchPlaceholder} />
      ))}
    </div>
  );
}

function ConditionGroupBlock({ group, searchPlaceholder }: { group: CondGroup; searchPlaceholder: string }) {
  const [query, setQuery] = useState("");
  const isLarge = group.items.length > SEARCH_THRESHOLD;

  const filtered = useMemo(() => {
    if (!query.trim()) return group.items;
    const q = query.toLowerCase();
    return group.items.filter((it) => it.toLowerCase().includes(q));
  }, [group.items, query]);

  return (
    <div>
      <p className="mb-2.5 text-[11px] font-bold uppercase tracking-wider" style={{ color: "#0B7C93" }}>
        {group.label}
      </p>
      {isLarge && (
        <div className="relative mb-3 max-w-sm">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm text-navy placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {filtered.map((it) => (
          <span
            key={it}
            className="inline-flex items-center rounded-lg bg-slate-50 px-3 py-1.5 text-[13px] font-medium text-navy ring-1 ring-slate-200"
          >
            {it}
          </span>
        ))}
        {filtered.length === 0 && (
          <span className="text-sm text-slate-400">—</span>
        )}
      </div>
    </div>
  );
}

/* ── Fact cards — compact spec row for technology / sample / turnaround ─── */
export type FactItem = { label: string; text: string; icon: "tech" | "sample" | "time" };

const FACT_ICONS: Record<FactItem["icon"], React.ReactNode> = {
  tech: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4a2 2 0 0 1 2 2v10a4 4 0 1 1-8 0V6a2 2 0 0 1 2-2Z" />
      <path d="M8.5 14.5h7" />
    </svg>
  ),
  sample: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 2h6M10 2v6.5L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 8.5V2" />
    </svg>
  ),
  time: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
};

export function FactCards({ facts }: { facts: FactItem[] }) {
  return (
    <div className={`grid gap-4 ${facts.length >= 3 ? "sm:grid-cols-3" : facts.length === 2 ? "sm:grid-cols-2" : ""}`}>
      {facts.map((f) => (
        <div key={f.label} className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-100">
          <div
            className="grid h-9 w-9 place-items-center rounded-xl"
            style={{ background: "rgba(0,194,209,0.1)", color: "#0B7C93" }}
          >
            {FACT_ICONS[f.icon]}
          </div>
          <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-slate-500">{f.label}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{f.text}</p>
        </div>
      ))}
    </div>
  );
}
