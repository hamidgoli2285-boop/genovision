import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import SectionHeader from "@/components/SectionHeader";
import IconCard from "@/components/IconCard";
import Timeline from "@/components/Timeline";
import ContactCTA from "@/components/ContactCTA";
import DNAVisual from "@/components/DNAVisual";
import DNAPipeline from "@/components/DNAPipeline";
import GeneCountBadge from "@/components/GeneCountBadge";
import Badge from "@/components/Badge";
import SubpanelGrid from "@/components/SubpanelGrid";
import GeneListPanel from "@/components/GeneListPanel";
import ComparisonTable from "@/components/ComparisonTable";
import { whatsappLink } from "@/lib/site";
import { CANCER_HEREDITARIO_GENES } from "@/lib/genes-cancer-hereditario";

const PANEL_WHATSAPP =
  "Hola GenoVision, me interesa agendar una evaluación para el Panel de Cáncer Hereditario.";

export const metadata: Metadata = {
  title: "Panel de Cáncer Hereditario | 161 genes con NGS",
  description:
    "Análisis genético avanzado de 161 genes para identificar predisposición hereditaria al cáncer. Tecnología NGS, muestra bucal o saliva, atención en Mérida.",
  alternates: { canonical: "/productos/panel-cancer-hereditario" },
};

const candidates = [
  {
    title: "Familiares diagnosticados con cáncer",
    description:
      "Padres, hermanos o familiares cercanos con antecedentes oncológicos.",
  },
  {
    title: "Cánceres específicos en la familia",
    description:
      "Mama, ovario, colon, próstata, páncreas o melanoma en uno o más familiares.",
  },
  {
    title: "Diagnóstico a edad temprana",
    description: "Casos diagnosticados antes de los 50 años en la familia.",
  },
  {
    title: "Múltiples generaciones afectadas",
    description:
      "Varios familiares con cáncer en diferentes generaciones del árbol familiar.",
  },
  {
    title: "Personas que buscan prevención",
    description:
      "Quienes desean tomar decisiones preventivas con información genética.",
  },
  {
    title: "Pacientes referidos por su médico",
    description:
      "Cuando un especialista considera útil la evaluación genética.",
  },
];

const cancerTypes = [
  "Mama",
  "Ovario",
  "Colon / Lynch",
  "Próstata",
  "Páncreas",
  "Melanoma",
  "Endometrio",
  "Tiroides",
  "Gástrico",
  "Renal",
  "Otros síndromes hereditarios",
];

const processSteps = [
  {
    title: "Orientación inicial",
    description: "Resolvemos dudas y revisamos si el panel es adecuado para ti.",
  },
  {
    title: "Historia familiar",
    description:
      "Documentamos antecedentes relevantes para interpretar el resultado en contexto.",
  },
  {
    title: "Toma de muestra no invasiva",
    description: "Muestra bucal o saliva, sin agujas ni procedimientos complejos.",
  },
  {
    title: "Análisis genético",
    description:
      "Secuenciación de nueva generación de 161 genes asociados con cáncer hereditario.",
  },
  {
    title: "Interpretación del resultado",
    description:
      "Tu reporte se interpreta clínicamente y se contextualiza con tu historia.",
  },
  {
    title: "Plan de seguimiento",
    description:
      "Recomendaciones para llevar el resultado a tu médico tratante.",
  },
];

const resultCards = [
  {
    tone: "amber" as const,
    label: "Resultado positivo",
    title: "Variante patogénica / probablemente patogénica",
    description:
      "Indica una mayor predisposición hereditaria. Permite definir vigilancia, prevención y orientar a familiares de primer grado.",
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
        <path d="M12 9v4M12 17h.01" />
        <path d="M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.41 0Z" />
      </svg>
    ),
  },
  {
    tone: "neutral" as const,
    label: "Resultado intermedio",
    title: "Variante de significado incierto",
    description:
      "El significado clínico aún no está claramente establecido. Puede requerir reanálisis futuro y seguimiento profesional.",
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
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16h.01M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" />
      </svg>
    ),
  },
  {
    tone: "emerald" as const,
    label: "Resultado tranquilizador",
    title: "Negativo o no informativo",
    description:
      "No se identificaron variantes con relevancia clínica conocida en los genes evaluados. No descarta otros factores de riesgo.",
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
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
  },
];

export default function PanelCancerHereditarioPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cobalt-50/70 via-surface to-surface">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid mask-fade-y opacity-50"
        />
        <div className="container-x relative grid gap-10 pb-14 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-14 lg:pb-20 lg:pt-20">
          <div className="lg:col-span-7">
            <nav aria-label="breadcrumb" className="text-xs text-ink-muted">
              <Link href="/" className="hover:text-navy">
                Inicio
              </Link>
              <span className="mx-2">/</span>
              <Link href="/productos" className="hover:text-navy">
                Productos
              </Link>
              <span className="mx-2">/</span>
              <span className="text-navy">Panel de Cáncer Hereditario</span>
            </nav>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge tone="emerald">Disponible</Badge>
              <Badge tone="cobalt">Producto destacado</Badge>
            </div>

            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-navy text-balance sm:text-5xl">
              Panel de Cáncer Hereditario
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Análisis genético avanzado de{" "}
              <strong className="font-semibold text-navy">161 genes</strong>{" "}
              para identificar predisposición hereditaria al cáncer y orientar
              decisiones preventivas con tu médico.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "161 genes",
                "NGS",
                "Muestra bucal o saliva",
                "Resultados aprox. 28 días",
                "Consulta inicial incluida",
              ].map((b) => (
                <Badge key={b} tone="cobalt">
                  {b}
                </Badge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton
                href={whatsappLink(PANEL_WHATSAPP)}
                external
                variant="whatsapp"
                size="lg"
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M20.5 3.5A11 11 0 0 0 3.6 17.3L2 22l4.8-1.6A11 11 0 1 0 20.5 3.5Z" />
                  </svg>
                }
                iconPosition="left"
              >
                Agendar evaluación
              </CTAButton>
              <CTAButton href="/proceso" variant="secondary" size="lg">
                Ver proceso completo
              </CTAButton>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-cobalt-100 via-teal-100 to-transparent blur-3xl opacity-70"
              />
              <DNAVisual className="h-full w-full" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-2xl bg-white px-4 py-3 ring-1 ring-slate-200 shadow-card">
                <GeneCountBadge count={161} size="md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS THIS TEST? */}
      <section className="container-x mt-16 lg:mt-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="¿Qué es este estudio?"
              title="Una visión amplia de tu predisposición hereditaria"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              El{" "}
              <strong className="font-semibold text-navy">
                Panel de Cáncer Hereditario
              </strong>{" "}
              de GenoVision analiza genes relacionados con síndromes de
              predisposición hereditaria al cáncer. El objetivo es identificar
              variantes genéticas que puedan aumentar el riesgo y ayudar a
              definir estrategias de prevención, vigilancia médica y
              orientación familiar.
            </p>
          </div>
        </div>
      </section>

      {/* WHO SHOULD CONSIDER */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow="¿Para quién es?"
          title="Quién debería considerarlo"
          description="Si te identificas con alguno de los siguientes escenarios, una evaluación genética puede aportarte información valiosa."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {candidates.map((c) => (
            <IconCard
              key={c.title}
              title={c.title}
              description={c.description}
              icon={
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
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              }
            />
          ))}
        </div>
      </section>

      {/* CANCER TYPES COVERED */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow="Tipos de cáncer evaluados"
          title="Cobertura clínica del panel"
          description="El panel incluye genes asociados con predisposición hereditaria a múltiples tipos de cáncer y síndromes oncológicos."
        />
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {cancerTypes.map((t) => (
            <li
              key={t}
              className="flex items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-cardHover hover:ring-cobalt-200"
            >
              <span
                aria-hidden
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-cobalt-50 to-teal-50 text-cobalt-700 ring-1 ring-cobalt-100"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z" />
                  <path d="M9 12h6M12 9v6" />
                </svg>
              </span>
              <span className="text-sm font-medium text-navy">{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* TECHNOLOGY */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-card sm:p-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Tecnología"
                title="Tecnología NGS"
                description="Utilizamos secuenciación de nueva generación para evaluar múltiples genes de forma simultánea. Esta tecnología permite una visión amplia de variantes asociadas con predisposición hereditaria al cáncer."
              />
            </div>
            <div className="lg:col-span-7">
              <DNAPipeline />
            </div>
          </div>
        </div>
      </section>

      {/* GENE LIST */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow="Genes incluidos"
          title="Genes analizados en el Panel de Cáncer Hereditario"
          description="El panel completo evalúa 161 genes relacionados con predisposición hereditaria a distintos tipos de cáncer y síndromes familiares."
        />
        <div className="mt-10">
          <GeneListPanel genes={CANCER_HEREDITARIO_GENES} />
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow="Cómo es el proceso"
          title="Del primer contacto al plan de seguimiento"
          description="Cada etapa está diseñada para ser clara, no invasiva y guiada por profesionales."
        />
        <div className="mt-10 max-w-3xl">
          <Timeline items={processSteps} />
        </div>
      </section>

      {/* RESULTS */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow="Qué puede mostrar el resultado"
          title="Tres posibles tipos de resultado"
          description="El reporte siempre se interpreta dentro del contexto clínico y familiar de cada persona."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {resultCards.map((r) => (
            <article
              key={r.title}
              className="relative h-full overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-card sm:p-7"
            >
              <Badge tone={r.tone} size="sm">
                {r.label}
              </Badge>
              <div
                aria-hidden
                className="mt-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cobalt-50 to-teal-50 text-cobalt-700 ring-1 ring-cobalt-100"
              >
                {r.icon}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {r.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/60 p-5 text-sm leading-relaxed text-amber-900 sm:p-6">
          <div className="flex items-start gap-3">
            <span
              aria-hidden
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-amber-100 text-amber-800"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
            </span>
            <p>
              <strong className="font-semibold">Importante:</strong> Un
              resultado genético no significa que una persona tenga cáncer ni
              garantiza que lo desarrollará. El resultado debe interpretarse
              junto con la historia personal, familiar y criterio médico.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIALIZED SUBPANELS */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow="Subpaneles enfocados"
          title="Subpaneles especializados"
          description="Además del panel completo de 161 genes, GenoVision organiza la evaluación en subpaneles enfocados según el antecedente familiar, el tipo de cáncer y la indicación médica."
        />
        <SubpanelGrid className="mt-10" />
        <p className="mt-6 text-sm text-ink-muted">
          El panel completo de{" "}
          <strong className="font-semibold text-navy">161 genes</strong> sigue
          siendo la opción más amplia. Los subpaneles son alternativas
          enfocadas bajo criterio médico.
        </p>

        <div className="mt-12">
          <SectionHeader
            eyebrow="Comparativa"
            title="Comparativa de paneles"
            description="Tabla comparativa entre el Panel Completo de 161 genes y los subpaneles enfocados disponibles."
          />
          <div className="mt-8">
            <ComparisonTable />
          </div>
        </div>
      </section>

      {/* FAMILY IMPACT */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy-700 to-cobalt-700 px-6 py-12 text-white sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-teal/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-cobalt-400/20 blur-3xl"
          />
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 ring-1 ring-white/15">
                Impacto familiar
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Tu resultado también puede proteger a tu familia
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                Cuando existe una variante hereditaria, otros familiares pueden
                beneficiarse de orientación genética y estrategias preventivas.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur">
                <ul className="space-y-3 text-sm text-white/85">
                  {[
                    "Identificación temprana en familiares de primer grado",
                    "Vigilancia médica personalizada",
                    "Decisiones preventivas con orientación clínica",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span
                        aria-hidden
                        className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-400/20 text-teal-300"
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
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 lg:mt-28">
        <ContactCTA
          title="Si hay cáncer en tu familia, esperar puede ser el error más costoso."
          subtitle="Habla hoy con nuestro equipo y conoce si una evaluación genética es adecuada para ti."
          primaryLabel="Agendar consulta por WhatsApp"
          primaryMessage={PANEL_WHATSAPP}
          secondaryLabel="Ver proceso completo"
          secondaryHref="/proceso"
        />
      </section>
    </>
  );
}
