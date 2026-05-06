"use client";

import SectionHeader from "@/components/SectionHeader";
import ContactCTA from "@/components/ContactCTA";
import SubpanelGrid from "@/components/SubpanelGrid";
import ProductsCatalog from "./ProductsCatalog";
import { useLanguage } from "@/lib/language-context";

export default function ProductosContent() {
  const { t } = useLanguage();
  const p = t.productos;

  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid mask-fade-y opacity-50" />
        <div className="container-x relative pb-10 pt-12 sm:pt-16 lg:pb-14 lg:pt-20">
          <SectionHeader eyebrow={p.eyebrow} title={p.title} description={p.description} />
        </div>
      </section>

      <section className="container-x">
        <ProductsCatalog />
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader eyebrow={p.subpanelsEyebrow} title={p.subpanelsTitle} description={p.subpanelsDescription} />
        <SubpanelGrid className="mt-10" />
      </section>

      <section className="mt-20 lg:mt-28">
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
