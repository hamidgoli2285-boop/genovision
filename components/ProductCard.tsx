"use client";

import Link from "next/link";
import Badge from "./Badge";
import ProductIllustration from "./ProductIllustration";
import type { Product } from "@/lib/products";
import { whatsappLink } from "@/lib/site";
import { useLanguage } from "@/lib/language-context";

type Props = {
  product: Product;
  highlight?: boolean;
  translatedProduct?: {
    title?: string;
    categoryLabel?: string;
    description?: string;
    ctaLabel?: string;
    badges?: string[];
  };
};

const statusTone = {
  disponible: "emerald",
  "bajo-solicitud": "emerald",
  proximamente: "neutral",
} as const;

export default function ProductCard({ product, highlight, translatedProduct }: Props) {
  const { t } = useLanguage();
  const isFeatured = highlight ?? product.featured;

  const title = translatedProduct?.title ?? product.title;
  const categoryLabel = translatedProduct?.categoryLabel ?? product.categoryLabel;
  const description = translatedProduct?.description ?? product.description;
  const ctaLabel = translatedProduct?.ctaLabel ?? product.ctaLabel;
  const badges = translatedProduct?.badges ?? product.badges;

  const statusLabel: Record<string, string> = {
    disponible: t.common.available,
    "bajo-solicitud": t.common.available,
    proximamente: t.common.comingSoon,
  };

  const href =
    product.href ??
    whatsappLink(
      `Hola GenoVision, me interesa información sobre el ${product.title}.`
    );
  const isExternal = !product.href;

  return (
    <article
      className={[
        "group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300",
        isFeatured
          ? "ring-2 ring-cobalt shadow-cardHover"
          : "ring-1 ring-slate-200/80 shadow-card hover:-translate-y-1 hover:shadow-cardHover hover:ring-cobalt-200",
      ].join(" ")}
    >
      {/* Illustration */}
      <ProductIllustration
        productId={product.id}
        alt={title}
        className="w-full shrink-0"
      />

      {/* Featured badge — floated over illustration */}
      {isFeatured && (
        <div className="absolute left-3 top-3">
          <Badge tone="cobalt" size="sm">
            {t.common.featured}
          </Badge>
        </div>
      )}

      {/* Card body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <Badge tone={statusTone[product.status]} size="sm">
            {statusLabel[product.status]}
          </Badge>
          <span className="text-[11px] uppercase tracking-wider text-ink-muted">
            {categoryLabel}
          </span>
        </div>

        <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-navy">
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
          {product.geneCount} {t.common.genesEvaluated}
        </div>
      )}

      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
        {description}
      </p>

      {badges.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {badges.map((b) => (
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
      </div>{/* end card body */}
    </article>
  );
}
