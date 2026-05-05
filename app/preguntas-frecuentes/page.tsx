import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Resolvemos las dudas más comunes sobre el Panel de Cáncer Hereditario, la toma de muestra, los tiempos de entrega y la interpretación del resultado.",
};

const faqs: FAQItem[] = [
  {
    q: "¿Este estudio diagnostica cáncer?",
    a: "No. Este estudio identifica predisposición genética hereditaria. No sustituye estudios diagnósticos ni consulta médica.",
  },
  {
    q: "¿Qué muestra se necesita?",
    a: "Saliva o muestra bucal. Es un procedimiento sencillo y no invasivo que se puede realizar de forma cómoda.",
  },
  {
    q: "¿Cuánto tardan los resultados?",
    a: "Aproximadamente 28 días desde la recepción de la muestra en el laboratorio.",
  },
  {
    q: "¿Qué significa analizar 161 genes?",
    a: "Significa que se revisan múltiples genes asociados con predisposición hereditaria al cáncer en un solo análisis, lo que permite una visión amplia y eficiente.",
  },
  {
    q: "¿Quién debería hacerse el estudio?",
    a: "Personas con antecedentes familiares de cáncer, casos de cáncer a edad temprana en la familia, múltiples familiares afectados, o personas con interés en prevención personalizada bajo orientación médica.",
  },
  {
    q: "¿Qué pasa si sale una variante?",
    a: "El resultado debe revisarse profesionalmente para definir vigilancia, prevención y posible orientación familiar. Tu médico tratante es el encargado de integrar esta información a tu plan de salud.",
  },
  {
    q: "¿Puedo hacerlo aunque no tenga cáncer?",
    a: "Sí. El enfoque principal del estudio es prevención y evaluación de riesgo en personas sin diagnóstico oncológico.",
  },
  {
    q: "¿Sirve para toda mi familia?",
    a: "Un resultado puede orientar si otros familiares deberían considerar evaluación genética. Sin embargo, cada miembro de la familia debe valorarse de forma individual.",
  },
  {
    q: "¿Dónde están ubicados?",
    a: "CÉNIT Medical Center, C. 15 501-C 919, Col. Altabrisa, 97130 Mérida, Yucatán.",
  },
  {
    q: "¿Cómo agendo?",
    a: "Por WhatsApp al 999 366 0543. Te orientamos sobre los siguientes pasos.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid mask-fade-y opacity-50"
        />
        <div className="container-x relative pb-10 pt-12 sm:pt-16 lg:pb-14 lg:pt-20">
          <SectionHeader
            eyebrow="Preguntas frecuentes"
            title="Resolvemos tus dudas"
            description="Información clara y honesta sobre el Panel de Cáncer Hereditario, el proceso de toma de muestra y la interpretación del resultado."
          />
        </div>
      </section>

      <section className="container-x">
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="mt-20 lg:mt-28">
        <ContactCTA
          title="¿Tienes una duda que no está aquí?"
          subtitle="Escríbenos por WhatsApp y te respondemos directamente."
        />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }),
        }}
      />
    </>
  );
}
