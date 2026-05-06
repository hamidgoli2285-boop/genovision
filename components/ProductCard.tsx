"use client";

import Link from "next/link";
import Badge from "./Badge";
import type { Product } from "@/lib/products";
import { whatsappLink } from "@/lib/site";
import { useT } from "@/lib/i18n/useT";

type Props = {
  product: Product;
  highlight?: boolean;
};

const statusTone = {
  disponible: "emerald",
  "bajo-solicitud": "emerald",
  proximamente: "neutral",
} as const;

export default function ProductCard({ product, highlight }: Props) {
  const { t, locale } = useT();
  const isFeatured = highlight ?? product.featured;

  // Pull bilingual copy from the dictionary keyed by product id, with safe fallback to data
  const i18n = t.products[product.id];
  const title = i18n?.title ?? product.title;
  const description = i18n?.description ?? product.description;
  const categoryLabel = i18n?.categoryLabel ?? product.categoryLabel;
  const ctaLabel = i18n?.ctaLabel ?? product.ctaLabel;

  const statusLabel =
    product.status === "proximamente"
      ? t.productCard.statusProximamente
      : t.productCard.statusDisponible;

  const waText =
    locale === "en"
      ? `Hello GenoVision, I'd like information about the ${title}.`
      : `Hola GenoVision, me interesa información sobre el ${title}.`;

  const href = product.href ?? whatsappLink(waText);
  const isExternal = !product.href;

  return (
    <article
      className={[
        "group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 transition-all duration-300",
        isFeatured
          ? "ring-2 ring-cobalt shadow-cardHover sm:p-7"
          : "ring-1 ring-slate-200/80 shadow-card hover:-translate-y-1 hover:shadow-cardHover hover:ring-cobalt-200",
      ].join(" ")}
    >
      {isFeatured && (
        <div className="absolute right-4 top-4">
          <Badge tone="cobalt" size="sm">
            {t.productCard.featured}
          </Badge>
        </div>
      )}

      <div className="flex items-center gap-2">
        <Badge tone={statusTone[product.status]} size="sm">
          {statusLabel}
        </Badge>
        <span className="text-[11px] uppercase tracking-wider text-ink-muted">
          {categoryLabel}
        </span>
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-navy">
        {title}
      </h3>

      {product.geneCount && (
        <div className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-cobalt-700">
          <span
            aria-hidden
            className="grid h-5 w-5 place-items-center rounded-full bg-cobalt-50 text-[10px]"
          >
            G
          </span>
          {product.geneCount} {t.productCard.genesEvaluados}
        </div>
      )}

      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
        {description}
      </p>

      {product.badges.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {product.badges.map((b) => (
            <Badge key={b} tone="cobalt" size="sm">
              {b}
            </Badge>
          ))}
        </div>
      )}

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
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
          </a>
        ) : (
          <Link
            href={href}
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
        )}
      </div>
    </article>
  );
}
