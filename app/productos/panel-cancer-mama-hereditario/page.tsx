import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import IconCard from "@/components/IconCard";
import Timeline from "@/components/Timeline";
import ContactCTA from "@/components/ContactCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import SubpanelHero from "@/components/SubpanelHero";
import BackToMainPanel from "@/components/BackToMainPanel";
import SubpanelGeneList from "@/components/SubpanelGeneList";
import { getSubpanelBySlug } from "@/lib/subpanels";
import { MAMA_OVARIO_GENES } from "@/lib/subpanel-genes";

const SLUG = "panel-cancer-mama-hereditario";
const subpanel = getSubpanelBySlug(SLUG)!;

export const metadata: Metadata = {
  title: "Panel de Cáncer de Mama y Ovario Hereditario",
  description:
    "Subpanel enfocado en genes asociados con predisposición hereditaria a cáncer de mama, ovario y síndromes familiares relacionados.",
  alternates: { canonical: `/productos/${SLUG}` },
};

const candidates = [
  {
    title: "Cáncer de mama en edad temprana",
    description:
      "Diagnósticos antes de los 50 años en la persona o en familiares de primer grado.",
  },
  {
    title: "Cáncer de mama bilateral",
    description:
      "Antecedente personal o familiar de cáncer en ambas mamas.",
  },
  {
    title: "Cáncer de ovario en la familia",
    description:
      "Casos de cáncer de ovario, trompa o peritoneo en familiares cercanos.",
  },
  {
    title: "Variantes conocidas en la familia",
    description:
      "Familiares con BRCA1/BRCA2 u otras variantes de riesgo identificadas.",
  },
];

const warningSigns = [
  "Cáncer de mama antes de los 50 años",
  "Cáncer de ovario en la familia",
  "Cáncer de mama bilateral",
  "Varios familiares afectados por cáncer de mama u ovario",
  "Cáncer de mama en hombre",
  "Familiares con mutaciones conocidas (BRCA1, BRCA2 u otras)",
];

const familyImpact = [
  {
    title: "Hijas y hermanas",
    description:
      "Pueden beneficiarse de orientación genética y vigilancia personalizada.",
  },
  {
    title: "Familiares masculinos",
    description:
      "Algunas variantes también incrementan el riesgo en hombres (mama, próstata, páncreas).",
  },
  {
    title: "Generaciones futuras",
    description:
      "Conocer la variante familiar permite orientar a las siguientes generaciones.",
  },
  {
    title: "Coordinación con tu médico",
    description:
      "El resultado puede integrarse a vigilancia clínica y mamográfica.",
  },
];

const processSteps = [
  {
    title: "Orientación inicial",
    description:
      "Revisamos contigo tus motivos y antecedentes para confirmar la pertinencia del subpanel.",
  },
  {
    title: "Toma de muestra no invasiva",
    description: "Saliva o muestra bucal, en un procedimiento sencillo.",
  },
  {
    title: "Análisis NGS enfocado",
    description:
      "Secuenciación de los genes relacionados con cáncer de mama y ovario hereditarios.",
  },
  {
    title: "Interpretación clínica",
    description:
      "El reporte considera tu historia personal y familiar para una lectura integral.",
  },
  {
    title: "Plan con tu médico",
    description:
      "Recomendaciones de vigilancia, prevención y orientación familiar.",
  },
];

export default function MamaHereditarioPage() {
  return (
    <>
      <SubpanelHero
        subpanel={subpanel}
        subtitle="Evaluación genética enfocada en genes asociados con predisposición hereditaria a cáncer de mama, ovario y síndromes familiares relacionados."
      />

      {/* WHAT IT EVALUATES */}
      <section className="container-x mt-16 lg:mt-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="¿Qué evalúa este subpanel?"
              title="Genes con relevancia clínica para mama y ovario"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              Este subpanel evalúa genes asociados con predisposición
              hereditaria a cáncer de mama y ovario, incluyendo genes de alto
              y moderado riesgo. La información puede orientar vigilancia,
              prevención y evaluación de familiares cuando aplica.
            </p>
          </div>
        </div>
      </section>

      {/* WHO SHOULD CONSIDER */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow="¿Quién debería considerarlo?"
          title="Situaciones que pueden orientar la decisión"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {candidates.map((c) => (
            <IconCard
              key={c.title}
              title={c.title}
              description={c.description}
              variant="compact"
            />
          ))}
        </div>
      </section>

      {/* WARNING SIGNS */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Cáncer de mama y ovario en la familia"
              title="Señales que pueden indicar componente hereditario"
              description="Estos antecedentes pueden orientar la conversación con tu médico sobre la pertinencia del estudio."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {warningSigns.map((w) => (
                <li
                  key={w}
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
                    {w}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* IMPORTANCE FOR FAMILY */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow="Importancia para familiares"
          title="Tu resultado también puede proteger a tu familia"
          description="Cuando se identifica una variante hereditaria, otros familiares pueden beneficiarse de orientación genética y estrategias preventivas."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {familyImpact.map((c) => (
            <IconCard
              key={c.title}
              title={c.title}
              description={c.description}
              variant="compact"
            />
          ))}
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
            genes={MAMA_OVARIO_GENES}
            countLabel="11 genes incluidos"
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
          title="¿Hay cáncer de mama u ovario en tu familia?"
          subtitle="Una evaluación genética enfocada puede aportar información clave para prevención y vigilancia."
          primaryLabel="Agendar consulta por WhatsApp"
          primaryMessage={subpanel.whatsappMessage}
          secondaryLabel="Ver panel completo (161 genes)"
          secondaryHref="/productos/panel-cancer-hereditario"
        />
      </section>
    </>
  );
}
