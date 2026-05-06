"use client";

import SectionHeader from "@/components/SectionHeader";
import ContactCTA from "@/components/ContactCTA";
import SubpanelGrid from "@/components/SubpanelGrid";
import ProductsCatalog from "./ProductsCatalog";
import { useT } from "@/lib/i18n/useT";

export default function ProductosContent() {
  const { t } = useT();

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid mask-fade-y opacity-50"
        />
        <div className="container-x relative pb-10 pt-12 sm:pt-16 lg:pb-14 lg:pt-20">
          <SectionHeader
            eyebrow={t.productosPage.eyebrow}
            title={t.productosPage.title}
            description={t.productosPage.description}
          />
        </div>
      </section>

      <section className="container-x">
        <ProductsCatalog />
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow={t.productosPage.subpanelsEyebrow}
          title={t.productosPage.subpanelsTitle}
          description={t.productosPage.subpanelsDesc}
        />
        <SubpanelGrid className="mt-10" />
      </section>

      <section className="mt-20 lg:mt-28">
        <ContactCTA
          title={t.productosPage.finalTitle}
          subtitle={t.productosPage.finalSubtitle}
          secondaryLabel={t.productosPage.finalSecondary}
          secondaryHref="/proceso"
          variant="cobalt"
        />
      </section>
    </>
  );
}
