"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, CATEGORY_ORDER, type Product, type ProductCategory } from "@/lib/products";
import { useLanguage } from "@/lib/language-context";

const NAVY = "#0A2240";
const CYAN = "#00C2D1";

/* ── Approved category images — used as-is, no generation/modification ── */
const CATEGORY_IMAGE: Record<ProductCategory, string> = {
  cancer: "/images/categories/category-cancer-oncology.jpeg",
  farmacogenomica: "/images/categories/category-pharmacogenomics.jpeg",
  reproductiva: "/images/categories/category-reproductive-family.jpeg",
  infecciosas: "/images/categories/category-infectious-disease.jpeg",
  genomica: "/images/categories/category-clinical-genomics.jpeg",
  personalizada: "/images/categories/category-personalized-health-microbiota.jpeg",
};

const CATEGORY_ALT: Record<ProductCategory, { es: string; en: string }> = {
  cancer: {
    es: "Imagen representativa de oncología y genética del cáncer",
    en: "Representative image of oncology and cancer genetics",
  },
  farmacogenomica: {
    es: "Imagen representativa de farmacogenómica y respuesta a medicamentos",
    en: "Representative image of pharmacogenomics and drug response",
  },
  reproductiva: {
    es: "Imagen representativa de genética reproductiva y prenatal",
    en: "Representative image of reproductive and prenatal genetics",
  },
  infecciosas: {
    es: "Imagen representativa de diagnóstico molecular de enfermedades infecciosas",
    en: "Representative image of molecular diagnostics for infectious disease",
  },
  genomica: {
    es: "Imagen representativa de genómica clínica y trastornos hereditarios",
    en: "Representative image of clinical genomics and inherited disorders",
  },
  personalizada: {
    es: "Imagen representativa de metabolismo, microbiota y salud personalizada",
    en: "Representative image of metabolism, microbiota and personalized health",
  },
};

/* ── One small icon per category — purely decorative, no clinical claim ── */
const CATEGORY_ICON: Record<ProductCategory, React.ReactNode> = {
  cancer: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3c0 4 4 6 4 9s-4 5-4 9M18 3c0 4-4 6-4 9s4 5 4 9" />
      <path d="M7 7h10M7 17h10" />
    </svg>
  ),
  farmacogenomica: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.5 20.5 3.5 13.5a5 5 0 1 1 7-7l7 7a5 5 0 0 1-7 7Z" />
      <path d="M8.5 8.5 11 11" />
    </svg>
  ),
  reproductiva: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="5" />
      <path d="M12 14v7M9 18h6" />
    </svg>
  ),
  infecciosas: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
      <path d="m9.5 12 2 2 3.5-3.5" />
    </svg>
  ),
  genomica: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3c0 5 12 5 12 10s-12 5-12 10M8 6h8M8 18h8M9 12h6" />
    </svg>
  ),
  personalizada: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    </svg>
  ),
};

export default function ProductsCatalog() {
  const { t, lang } = useLanguage();
  const p = t.productos;
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Each product belongs to exactly one section (its primary category) so it
  // never appears twice; additional specialties still show up as badges.
  const primaryCategoryOf = (prod: Product) => prod.categories[0];

  const itemsByCategory = (id: string) =>
    PRODUCTS.filter((prod) => primaryCategoryOf(prod) === id);

  const labelFor = (id: string) =>
    t.productCategories.find((c) => c.id === id)?.label ??
    CATEGORY_ORDER.find((c) => c.id === id)?.label ??
    id;

  const descriptionFor = (id: string) =>
    t.productCategories.find((c) => c.id === id)?.description ?? "";

  // Only one category open at a time; none open by default keeps the page compact.
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setOpenCategory((current) => (current === id ? null : id));
    // Let the section render/expand first, then scroll to it.
    requestAnimationFrame(() => {
      sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const resolve = (prod: Product) => {
    const tr = t.products[prod.id];
    const href = prod.href ?? `/productos/${prod.slug}`;
    return {
      title: tr?.title ?? prod.title,
      description: tr?.description ?? prod.description,
      badges: (tr?.badges ?? prod.badges).slice(0, 2),
      href,
    };
  };

  return (
    <div>
      {/* ── Premium category navigation tiles — the only category nav ──── */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORY_ORDER.map((cat) => {
          const count = itemsByCategory(cat.id).length;
          if (count === 0) return null;
          const isOpen = openCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleSelect(cat.id)}
              aria-expanded={isOpen}
              className={`group flex flex-col items-start overflow-hidden rounded-2xl text-left transition-all duration-200 ${
                isOpen
                  ? "bg-white shadow-[0_4px_10px_rgba(10,34,64,0.07),0_22px_44px_rgba(0,194,209,0.16)] ring-2 ring-cyan-400"
                  : "bg-white shadow-card ring-1 ring-slate-200/70 hover:-translate-y-0.5 hover:shadow-cardHover"
              }`}
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={CATEGORY_IMAGE[cat.id]}
                  alt={CATEGORY_ALT[cat.id][lang]}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, rgba(10,34,64,0) 55%, rgba(10,34,64,0.45) 100%)" }}
                />
                <span
                  className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl"
                  style={{
                    background: isOpen ? `linear-gradient(135deg, ${CYAN} 0%, ${NAVY} 100%)` : "rgba(255,255,255,0.9)",
                    color: isOpen ? "#FFFFFF" : "#0B7C93",
                  }}
                >
                  {CATEGORY_ICON[cat.id]}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold leading-snug" style={{ color: NAVY }}>
                  {labelFor(cat.id)}
                </h3>
                <p className="mt-1 text-[13px] leading-snug text-slate-500">{descriptionFor(cat.id)}</p>
                <span className="mt-3 inline-block text-[12px] font-semibold" style={{ color: "#0B7C93" }}>
                  {count} {t.common.studiesCount}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Expanded category — only the selected one renders products ─── */}
      {CATEGORY_ORDER.map((cat) => {
        const items = itemsByCategory(cat.id);
        if (items.length === 0 || openCategory !== cat.id) return null;

        return (
          <div
            key={cat.id}
            ref={(el) => {
              sectionRefs.current[cat.id] = el;
            }}
            className="scroll-mt-28 mt-8 animate-fade-up"
          >
            <div className="mb-4 flex items-center gap-3">
              <span
                aria-hidden
                className="h-5 w-1.5 rounded-full"
                style={{ background: `linear-gradient(to bottom, ${CYAN}, ${NAVY})` }}
              />
              <h3 className="font-display text-lg font-bold tracking-tight sm:text-xl" style={{ color: NAVY }}>
                {labelFor(cat.id)}
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((prod) => {
                const r = resolve(prod);
                return (
                  <div
                    key={prod.id}
                    className="flex flex-col rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-200/70 transition-shadow hover:shadow-cardHover"
                  >
                    <h4 className="font-semibold leading-snug text-navy">{r.title}</h4>
                    <p className="mt-1.5 line-clamp-1 text-sm leading-relaxed text-slate-500">{r.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {r.badges.map((b) => (
                        <span
                          key={b}
                          className="inline-flex items-center rounded-full bg-cyan-50 px-2.5 py-0.5 text-[11px] font-semibold text-cyan-800 ring-1 ring-cyan-100"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={r.href}
                      className="group mt-4 inline-flex items-center gap-1.5 self-start rounded-full bg-navy px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-cobalt-700"
                    >
                      {p.viewStudy}
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
