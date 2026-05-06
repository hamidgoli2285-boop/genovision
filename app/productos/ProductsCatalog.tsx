"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { useLanguage } from "@/lib/language-context";

export default function ProductsCatalog() {
  const [active, setActive] = useState<string>("all");
  const { t } = useLanguage();

  const categories = t.productCategories;

  const filtered = useMemo(() => {
    if (active === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <div>
      <div
        role="tablist"
        aria-label={t.productos.filterLabel}
        className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
      >
        {categories.map((cat) => {
          const isActive = cat.id === active;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat.id)}
              className={[
                "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ring-1",
                isActive
                  ? "bg-navy text-white ring-navy shadow-sm"
                  : "bg-white text-navy/80 ring-slate-200 hover:bg-slate-50 hover:text-navy",
              ].join(" ")}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl bg-white p-10 text-center ring-1 ring-slate-200">
          <p className="text-base text-ink-muted">
            {t.productos.emptyCategory}
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              translatedProduct={t.products[p.id]}
            />
          ))}
        </div>
      )}
    </div>
  );
}
