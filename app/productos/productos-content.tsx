"use client";

import SectionHeader from "@/components/SectionHeader";
import ContactCTA from "@/components/ContactCTA";
import ProductsCatalog from "./ProductsCatalog";
import { useLanguage } from "@/lib/language-context";

export default function ProductosContent() {
  const { t } = useLanguage();
  const p = t.productos;

  return (
    <>
      {/* ── Compact hero + category catalog (single navigation system) ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F2FBFD 100%)" }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid mask-fade-y opacity-40" />
        <div className="container-x relative pb-14 pt-10 sm:pt-14 lg:pb-16 lg:pt-16">
          <SectionHeader eyebrow={p.eyebrow} title={p.title} description={p.description} />
          <div className="mt-10 lg:mt-12">
            <ProductsCatalog />
          </div>
        </div>
      </section>

      {/* ── Contact CTA ───────────────────────────────────────────── */}
      <section className="mt-16 lg:mt-24">
        <ContactCTA
          title={p.ctaTitle}
          subtitle={p.ctaSubtitle}
          primaryLabel={p.ctaPrimary}
          secondaryLabel={p.ctaSecondary}
          secondaryHref="/proceso"
          variant="cobalt"
        />
      </section>
    </>
  );
}
