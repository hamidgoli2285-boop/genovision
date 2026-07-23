"use client";

import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import { PRODUCT_CONTENT } from "@/lib/product-content";
import { whatsappLink } from "@/lib/site";
import { useLanguage } from "@/lib/language-context";
import { Timeline, Accordion, Callout, ConditionGroups, FactCards, type FactItem } from "./ProductDetailUI";

const NAVY = "#0A2240";
const CYAN = "#00C2D1";

function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-slate-100 py-8 lg:py-10">
      <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl" style={{ color: NAVY }}>
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2.5 sm:grid-cols-2">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-slate-700">
          <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: CYAN }} />
          {it}
        </li>
      ))}
    </ul>
  );
}

function ChipRow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it) => (
        <span
          key={it}
          className="inline-flex items-center rounded-full bg-cyan-50 px-3.5 py-1.5 text-[13px] font-semibold text-cyan-800 ring-1 ring-cyan-100"
        >
          {it}
        </span>
      ))}
    </div>
  );
}

export default function ProductDetail({ productId }: { productId: string }) {
  const { t, lang } = useLanguage();
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return null;

  const tr = t.products[productId];
  const c = PRODUCT_CONTENT[productId]?.[lang];
  const d = t.productos.productDetail;

  const title = tr?.title ?? product.title;
  const categoryLabel = tr?.categoryLabel ?? product.categoryLabel;
  const description = tr?.description ?? product.description;
  const badges = tr?.badges ?? product.badges;

  // `status` is the single source of truth for availability wording.
  // "upon-request" → newly-discovered products not yet offered; everything
  // else (existing approved catalog products) uses the standard request CTA.
  const isUponRequest = product.status === "upon-request";
  const contactLabel = isUponRequest ? d.ctaCheck : d.ctaAvailable;
  const waHref = whatsappLink(
    lang === "es"
      ? `Hola GenoVision, me interesa el estudio: ${title}.`
      : `Hi GenoVision, I'm interested in the study: ${title}.`
  );

  // ── Fact cards (technology / sample / turnaround) ──────────────────
  const facts: FactItem[] = [];
  if (c?.technology) facts.push({ label: d.technology, text: c.technology, icon: "tech" });
  if (c?.sample) facts.push({ label: d.sample, text: c.sample, icon: "sample" });
  if (c?.turnaround) facts.push({ label: d.turnaround, text: c.turnaround, icon: "time" });

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F2FBFD 100%)" }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid mask-fade-y opacity-40" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl"
        />
        <div className="container-x relative pb-10 pt-10 sm:pt-14 lg:pb-14 lg:pt-16">
          <Link
            href="/productos"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy/70 transition-colors hover:text-navy"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 19l-7-7 7-7" />
            </svg>
            {d.backToCatalog}
          </Link>

          <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#0B7C93" }}>
            {categoryLabel}
          </p>
          <h1
            className="mt-3 max-w-3xl font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.7rem]"
            style={{ color: NAVY }}
          >
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: "#3B5572" }}>
            {description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-[12px] font-semibold text-cyan-800 ring-1 ring-cyan-100"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full py-3 pl-6 pr-3 text-[15px] font-bold text-white shadow-[0_10px_28px_rgba(10,34,64,0.26)] transition-all hover:-translate-y-0.5"
              style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0E4D8C 100%)` }}
            >
              {contactLabel}
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Body sections — same template for every product; sections   */}
      {/*    without verified content are simply omitted.               */}
      <div className="container-x pb-4">
        {/* Overview — always shown */}
        <Section title={d.overview}>
          <p className="max-w-3xl text-[15px] leading-relaxed text-slate-700">
            {c?.overview ?? description}
          </p>
        </Section>

        {/* Clinical indications (sourced) or Clinical applications (badges fallback) — always shown */}
        {c?.indications && c.indications.length > 0 ? (
          <Section title={d.indications}>
            <BulletList items={c.indications} />
          </Section>
        ) : (
          badges.length > 0 && (
            <Section title={d.applications}>
              <ChipRow items={badges} />
            </Section>
          )
        )}

        {c?.whoShould && c.whoShould.length > 0 && (
          <Section title={d.whoShould}>
            <BulletList items={c.whoShould} />
          </Section>
        )}

        {c?.conditions && (
          <Section title={d.conditions}>
            {c.conditions.intro && (
              <p className="mb-5 max-w-3xl text-[15px] leading-relaxed text-slate-700">{c.conditions.intro}</p>
            )}
            {c.conditions.groups && c.conditions.groups.length > 0 && (
              <ConditionGroups groups={c.conditions.groups} searchPlaceholder={d.conditionsSearchPlaceholder} />
            )}
            {c.conditions.note && (
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-muted">{c.conditions.note}</p>
            )}
          </Section>
        )}

        {facts.length > 0 && (
          <Section title="">
            <FactCards facts={facts} />
          </Section>
        )}

        {c?.workflow && c.workflow.length > 0 && (
          <Section title={d.workflow}>
            <Timeline steps={c.workflow} />
          </Section>
        )}

        {/* GenoVision process — always shown */}
        <Section title={d.genoVisionProcess}>
          <Timeline steps={d.processSteps} />
        </Section>

        {c?.interpretation && c.interpretation.length > 0 && (
          <Section title={d.interpretation}>
            <div className="grid gap-4 sm:grid-cols-2">
              {c.interpretation.map((it) => (
                <div key={it.label} className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-100">
                  <p className="font-display text-base font-bold" style={{ color: NAVY }}>
                    {it.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{it.text}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {c?.limitations && (
          <Section title={d.limitations}>
            <Callout>{c.limitations}</Callout>
          </Section>
        )}

        {c?.faq && c.faq.length > 0 && (
          <Section title={d.faq}>
            <Accordion items={c.faq.map((qa) => ({ title: qa.q, content: qa.a }))} />
          </Section>
        )}
      </div>

      {/* ── Contact CTA — always shown ───────────────────────────────── */}
      <section className="container-x pb-20 pt-6 lg:pb-28">
        <div
          className="relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12"
          style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0E4D8C 100%)` }}
        >
          <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {d.contactTitle}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/80">{d.contactSubtitle}</p>
            <div className="mt-7">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white py-3 pl-6 pr-3 text-[15px] font-bold shadow-lg transition-all hover:-translate-y-0.5"
                style={{ color: NAVY }}
              >
                {contactLabel}
                <span className="grid h-8 w-8 place-items-center rounded-full text-white" style={{ background: CYAN }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
