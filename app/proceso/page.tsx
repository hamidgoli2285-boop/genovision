import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import ContactCTA from "@/components/ContactCTA";
import DNAPipeline from "@/components/DNAPipeline";

export const metadata: Metadata = {
  title: "Del ADN al resultado: así funciona el proceso",
  description:
    "Conoce el proceso completo de GenoVision: desde el primer contacto por WhatsApp hasta la entrega de resultados y el plan de seguimiento médico.",
};

const steps = [
  {
    title: "Contacto por WhatsApp",
    description:
      "Inicia el proceso enviándonos un mensaje. Te responde nuestro equipo y resolvemos tus primeras dudas.",
  },
  {
    title: "Consulta de orientación",
    description:
      "Sesión inicial para conversar sobre tus motivos, expectativas y aclarar el alcance del estudio genético.",
  },
  {
    title: "Cuestionario de antecedentes familiares",
    description:
      "Documentamos los antecedentes oncológicos relevantes para interpretar el resultado en contexto.",
  },
  {
    title: "Toma de muestra bucal o saliva",
    description:
      "Procedimiento sencillo, indoloro y no invasivo. Te explicamos paso a paso cómo prepararte.",
  },
  {
    title: "Envío y análisis de muestra",
    description:
      "La muestra se procesa en condiciones controladas para mantener su trazabilidad e integridad.",
  },
  {
    title: "Secuenciación NGS",
    description:
      "Tecnología de secuenciación de nueva generación para evaluar múltiples genes simultáneamente.",
  },
  {
    title: "Bioinformática e interpretación",
    description:
      "Análisis bioinformático y revisión profesional para clasificar las variantes encontradas.",
  },
  {
    title: "Entrega de resultados",
    description:
      "Tu reporte se entrega en una sesión clara, con explicaciones de cada apartado.",
  },
  {
    title: "Recomendaciones para seguimiento médico",
    description:
      "Te orientamos para llevar el resultado a tu médico tratante y definir un plan personalizado.",
  },
];

export default function ProcesoPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid mask-fade-y opacity-50"
        />
        <div className="container-x relative pb-10 pt-12 sm:pt-16 lg:pb-14 lg:pt-20">
          <SectionHeader
            eyebrow="Proceso completo"
            title="Del ADN al resultado: así funciona"
            description="Cada etapa del proceso de GenoVision está pensada para ofrecerte claridad, acompañamiento y rigor clínico."
          />
        </div>
      </section>

      <section className="container-x">
        <DNAPipeline />
      </section>

      <section className="container-x mt-16 lg:mt-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Línea del tiempo"
              title="9 pasos, un acompañamiento continuo"
              description="Te guiamos desde la primera conversación hasta el plan de seguimiento con tu médico tratante."
            />
          </div>
          <div className="lg:col-span-7">
            <Timeline items={steps} />
          </div>
        </div>
      </section>

      <section className="container-x mt-16 lg:mt-24">
        <div className="overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-card sm:p-10">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-cobalt-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cobalt-700">
                Preparación de muestra
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                Indicaciones para muestra bucal
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                Para muestra bucal: lavar dientes antes de la toma y no comer
                durante 30 minutos. Puede beber agua. Estas indicaciones nos
                ayudan a obtener una muestra de calidad para el análisis
                genómico.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    t: "Lavarse los dientes",
                    d: "Antes de la toma de muestra.",
                  },
                  {
                    t: "Esperar 30 minutos",
                    d: "Sin comer ni mascar chicle.",
                  },
                  {
                    t: "Sí puedes beber agua",
                    d: "El agua no afecta la muestra.",
                  },
                  {
                    t: "Sigue las instrucciones del kit",
                    d: "Te guiamos paso a paso durante la toma.",
                  },
                ].map((item) => (
                  <li
                    key={item.t}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4"
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-navy">
                        {item.t}
                      </div>
                      <div className="text-xs text-ink-muted">{item.d}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 lg:mt-28">
        <ContactCTA
          title="¿Listo para iniciar?"
          subtitle="Comienza con una conversación. Te explicamos todo el proceso y resolvemos tus dudas sin compromiso."
          secondaryLabel="Ver panel de cáncer hereditario"
          secondaryHref="/productos/panel-cancer-hereditario"
        />
      </section>
    </>
  );
}
