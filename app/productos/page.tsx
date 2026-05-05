import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ContactCTA from "@/components/ContactCTA";
import SubpanelGrid from "@/components/SubpanelGrid";
import ProductsCatalog from "./ProductsCatalog";

export const metadata: Metadata = {
  title: "Catálogo de análisis genéticos",
  description:
    "Explora nuestros análisis genómicos diseñados para prevención, riesgo hereditario y medicina personalizada. Panel de cáncer hereditario disponible.",
};

export default function ProductosPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid mask-fade-y opacity-50"
        />
        <div className="container-x relative pb-10 pt-12 sm:pt-16 lg:pb-14 lg:pt-20">
          <SectionHeader
            eyebrow="Catálogo"
            title="Catálogo de análisis genéticos"
            description="Explora nuestros análisis genómicos diseñados para prevención, riesgo hereditario y medicina personalizada. Algunos paneles están disponibles bajo solicitud y bajo indicación médica."
          />
        </div>
      </section>

      <section className="container-x">
        <ProductsCatalog />
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow="Cáncer hereditario"
          title="Subpaneles de cáncer hereditario"
          description="Subpaneles enfocados derivados del Panel de Cáncer Hereditario de 161 genes, organizados por tipo de cáncer e indicación médica."
        />
        <SubpanelGrid className="mt-10" />
      </section>

      <section className="mt-20 lg:mt-28">
        <ContactCTA
          title="¿Necesitas orientación para elegir un panel?"
          subtitle="Cuéntanos tu caso y te ayudamos a definir si un análisis genético es adecuado para ti o tu familiar."
          primaryLabel="Hablar por WhatsApp"
          secondaryLabel="Conocer el proceso"
          secondaryHref="/proceso"
          variant="cobalt"
        />
      </section>
    </>
  );
}
