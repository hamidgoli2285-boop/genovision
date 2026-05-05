import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import IconCard from "@/components/IconCard";
import Timeline from "@/components/Timeline";
import ContactCTA from "@/components/ContactCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import SubpanelHero from "@/components/SubpanelHero";
import BackToMainPanel from "@/components/BackToMainPanel";
import Badge from "@/components/Badge";
import SubpanelGeneList from "@/components/SubpanelGeneList";
import { getSubpanelBySlug } from "@/lib/subpanels";
import { CORE_GENES } from "@/lib/subpanel-genes";

const SLUG = "panel-core-cancer-hereditario";
const subpanel = getSubpanelBySlug(SLUG)!;

export const metadata: Metadata = {
  title: "Panel Core de Cáncer Hereditario",
  description:
    "Selección esencial de genes clínicamente relevantes para evaluación inicial de predisposición hereditaria al cáncer.",
  alternates: { canonical: `/productos/${SLUG}` },
};

const useCases = [
  {
    title: "Evaluación inicial",
    description:
      "Cuando se busca una primera mirada al riesgo hereditario antes de considerar un panel más amplio.",
  },
  {
    title: "Historia familiar sugestiva",
    description:
      "Antecedentes que orientan hacia genes específicos de alta y moderada penetrancia.",
  },
  {
    title: "Opción más enfocada",
    description:
      "Pacientes que requieren una evaluación dirigida por criterio médico.",
  },
  {
    title: "Orientación preventiva",
    description:
      "Personas con interés en prevención, bajo conducción profesional.",
  },
];

const limitations = [
  "No analiza la totalidad de los 161 genes incluidos en el panel completo.",
  "Puede no detectar variantes en genes fuera del panel core.",
  "Un resultado negativo no descarta predisposición hereditaria por completo.",
  "Las variantes de significado incierto pueden requerir reanálisis futuro.",
  "El alcance debe definirse con tu médico tratante según el contexto clínico.",
];

const processSteps = [
  {
    title: "Orientación inicial",
    description:
      "Te ayudamos a entender el alcance del panel core y si encaja con tus objetivos.",
  },
  {
    title: "Toma de muestra",
    description: "Saliva o muestra bucal, no invasiva.",
  },
  {
    title: "Análisis NGS enfocado",
    description: "Secuenciación de los genes seleccionados del panel core.",
  },
  {
    title: "Interpretación clínica",
    description:
      "Lectura del reporte considerando tu historia personal y familiar.",
  },
  {
    title: "Plan con tu médico",
    description:
      "Recomendaciones para integrar el resultado a tu seguimiento clínico.",
  },
];

export default function PanelCorePage() {
  return (
    <>
      <SubpanelHero
        subpanel={subpanel}
        subtitle="Una evaluación genética esencial para identificar variantes clínicamente relevantes asociadas con predisposición hereditaria al cáncer."
      />

      {/* WHAT IS A CORE PANEL */}
      <section className="container-x mt-16 lg:mt-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="¿Qué es un panel core?"
              title="Una selección esencial de genes con relevancia clínica"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              Un panel core agrupa genes con evidencia clínica establecida en
              predisposición hereditaria al cáncer. Es una opción más enfocada
              que un panel amplio, pensada para evaluación inicial o para
              indicaciones médicas específicas. El panel core{" "}
              <strong className="font-semibold text-navy">
                no reemplaza
              </strong>{" "}
              al panel completo de 161 genes; ofrece una vía dirigida cuando
              el contexto clínico lo justifica.
            </p>
          </div>
        </div>
      </section>

      {/* WHEN TO USE */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow="¿Cuándo conviene usarlo?"
          title="Situaciones donde el panel core puede ser una buena opción"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {useCases.map((c) => (
            <IconCard
              key={c.title}
              title={c.title}
              description={c.description}
              variant="compact"
            />
          ))}
        </div>
      </section>

      {/* DIFFERENCE WITH FULL PANEL */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy-700 to-cobalt-700 p-7 text-white shadow-card">
            <Badge tone="cobalt" size="sm" className="bg-white/15 text-white ring-white/20">
              Panel completo
            </Badge>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
              161 genes
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              La evaluación más amplia de GenoVision para predisposición
              hereditaria al cáncer. Incluye múltiples síndromes y genes de
              alta y moderada penetrancia.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/85">
              {[
                "Mayor cobertura genética",
                "Útil en historia familiar compleja",
                "Visión amplia de variantes hereditarias",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span aria-hidden className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-400/20 text-teal-300">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/productos/panel-cancer-hereditario"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-teal-200"
            >
              Ver panel completo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-white p-7 ring-1 ring-slate-200 shadow-card">
            <Badge tone="teal" size="sm">
              Panel core
            </Badge>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-navy">
              Selección esencial
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Un grupo enfocado de genes con relevancia clínica establecida.
              Pensado como evaluación inicial o bajo indicación médica
              específica.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-navy/85">
              {[
                "Cobertura más enfocada",
                "Evaluación inicial dirigida",
                "Bajo criterio médico",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span aria-hidden className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Limitaciones"
              title="Qué tener en cuenta"
              description="Conocer las limitaciones del panel core ayuda a tomar una decisión informada con tu médico."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {limitations.map((l) => (
                <li
                  key={l}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200 shadow-card"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber-50 text-amber-800"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
                  </span>
                  <p className="text-sm leading-relaxed text-navy/90 sm:text-base">
                    {l}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GENE LIST */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow="Genes incluidos"
          title="Genes analizados en este subpanel"
          description="Este subpanel evalúa genes seleccionados relacionados con predisposición hereditaria según el tipo de cáncer y la indicación clínica."
        />
        <div className="mt-10">
          <SubpanelGeneList
            genes={CORE_GENES}
            countLabel="83 genes incluidos"
            showSearch
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow="Proceso de muestra y resultado"
          title="De la muestra al plan de seguimiento"
        />
        <div className="mt-10 max-w-3xl">
          <Timeline items={processSteps} />
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="container-x mt-16 lg:mt-20">
        <MedicalDisclaimer />
        <div className="mt-6">
          <BackToMainPanel />
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 lg:mt-28">
        <ContactCTA
          title="¿Buscas una evaluación inicial?"
          subtitle="Conversemos para definir si el panel core o el panel completo es la opción adecuada para tu caso."
          primaryLabel="Hablar por WhatsApp"
          primaryMessage={subpanel.whatsappMessage}
          secondaryLabel="Ver panel completo (161 genes)"
          secondaryHref="/productos/panel-cancer-hereditario"
        />
      </section>
    </>
  );
}
