import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import IconCard from "@/components/IconCard";
import CTAButton from "@/components/CTAButton";
import ContactCTA from "@/components/ContactCTA";
import Badge from "@/components/Badge";
import { whatsappLink } from "@/lib/site";

const DOCTOR_MSG =
  "Hola GenoVision, soy médico y me interesa información sobre referencia de pacientes y el Panel de Cáncer Hereditario.";

export const metadata: Metadata = {
  title: "Para Médicos | Genómica clínica de apoyo",
  description:
    "GenoVision apoya a médicos en prevención, vigilancia y estratificación de riesgo hereditario al cáncer mediante análisis genético avanzado.",
};

const reasons = [
  {
    title: "Estratificación de riesgo",
    description:
      "Información genética que complementa la evaluación clínica y los antecedentes familiares.",
  },
  {
    title: "Vigilancia personalizada",
    description:
      "Apoyo para definir esquemas de vigilancia ajustados al perfil hereditario de cada paciente.",
  },
  {
    title: "Estrategias preventivas",
    description:
      "Herramienta adicional al considerar prevención primaria y secundaria en familias con antecedentes.",
  },
  {
    title: "Orientación familiar",
    description:
      "Cuando aplica, el resultado puede orientar evaluación y vigilancia en familiares de primer grado.",
  },
];

const indications = [
  "Antecedentes personales o familiares de cáncer en uno o más familiares de primer grado.",
  "Diagnóstico de cáncer a edad temprana (≤50 años) en la familia.",
  "Cáncer de mama, ovario, colon, próstata, páncreas o melanoma con patrón sugestivo de síndrome hereditario.",
  "Múltiples casos de cáncer en distintas generaciones.",
  "Cáncer bilateral, multifocal o más de un tumor primario en un mismo paciente.",
  "Pacientes con interés en prevención personalizada bajo orientación médica.",
];

const provides = [
  {
    title: "Análisis genético amplio",
    description:
      "Panel de 161 genes asociados con predisposición hereditaria al cáncer mediante secuenciación NGS.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M7 10v4M11 10v4M15 10v4M19 10v4" />
      </svg>
    ),
  },
  {
    title: "Reporte clínico claro",
    description:
      "Reportes con clasificación de variantes y contexto clínico para apoyar tu interpretación.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M9 13h6M9 17h4" />
      </svg>
    ),
  },
  {
    title: "Coordinación logística",
    description:
      "Toma de muestra no invasiva, trazabilidad de la muestra y entrega oportuna de resultados.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M3 7h13l5 5v5h-2" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
        <path d="M9 18h6" />
      </svg>
    ),
  },
  {
    title: "Material educativo",
    description:
      "Apoyo informativo para tus pacientes antes y después del estudio, en lenguaje claro.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2zM22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z" />
      </svg>
    ),
  },
];

export default function MedicosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-navy via-navy to-cobalt-700 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cobalt-400/15 blur-3xl"
        />
        <div className="container-x relative pb-16 pt-12 sm:pt-16 lg:pb-24 lg:pt-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 ring-1 ring-white/15">
            Para profesionales de la salud
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
            Genómica clínica para apoyar decisiones médicas
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
            GenoVision trabaja como apoyo para médicos que desean integrar
            análisis genético en prevención, vigilancia y estratificación de
            riesgo hereditario al cáncer.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CTAButton
              href={whatsappLink(DOCTOR_MSG)}
              external
              variant="whatsapp"
              size="lg"
            >
              Solicitar información
            </CTAButton>
            <CTAButton
              href="/productos/panel-cancer-hereditario"
              variant="ghost"
              size="lg"
              className="bg-white/10 text-white hover:bg-white/15"
            >
              Ver panel destacado
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="container-x mt-16 lg:mt-24">
        <SectionHeader
          eyebrow="Por qué referir pacientes"
          title="Información que enriquece la práctica clínica"
          description="El análisis genético, integrado al juicio médico, puede aportar un eje adicional para personalizar la atención."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {reasons.map((r) => (
            <IconCard
              key={r.title}
              title={r.title}
              description={r.description}
              variant="compact"
            />
          ))}
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Indicaciones clínicas"
              title="Cuándo considerar el panel hereditario"
              description="Algunos contextos clínicos en los que el análisis genético puede aportar información útil."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {indications.map((ind) => (
                <li
                  key={ind}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200 shadow-card"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cobalt-50 text-cobalt-700"
                  >
                    <svg
                      width="12"
                      height="12"
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
                  <p className="text-sm leading-relaxed text-navy/90 sm:text-base">
                    {ind}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-ink-muted">
              Las indicaciones reales se definen por criterio clínico y guías
              vigentes según cada caso.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow="Qué proporciona GenoVision"
          title="Apoyo integral en cada etapa"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-6">
          {provides.map((p) => (
            <IconCard
              key={p.title}
              title={p.title}
              description={p.description}
              icon={p.icon}
            />
          ))}
        </div>
      </section>

      <section className="container-x mt-20 lg:mt-28">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-card sm:p-8">
            <Badge tone="cobalt" size="sm">
              Educación al paciente
            </Badge>
            <h3 className="mt-4 font-display text-xl font-semibold text-navy">
              Material y orientación previa
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Apoyamos a tus pacientes con información clara antes y después del
              estudio, sin reemplazar la consulta médica. La conversación
              clínica clave permanece contigo.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-card sm:p-8">
            <Badge tone="teal" size="sm">
              Interpretación de resultado
            </Badge>
            <h3 className="mt-4 font-display text-xl font-semibold text-navy">
              Reportes preparados para uso clínico
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Cada reporte incluye contexto clínico, clasificación de variantes
              y notas relevantes para apoyar tu interpretación y decisiones.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20 lg:mt-28">
        <ContactCTA
          title="Refiere pacientes con un análisis genómico clínicamente útil"
          subtitle="Te apoyamos con material educativo, coordinación logística y reportes claros."
          primaryLabel="Solicitar información para referir pacientes"
          primaryMessage={DOCTOR_MSG}
          variant="cobalt"
        />
      </section>
    </>
  );
}
