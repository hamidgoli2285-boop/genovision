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
import { COLORRECTAL_POLIPOSIS_GENES } from "@/lib/subpanel-genes";

const SLUG = "panel-cancer-colorrectal-poliposis";
const subpanel = getSubpanelBySlug(SLUG)!;

export const metadata: Metadata = {
  title: "Panel de Cáncer Colorrectal Hereditario y Poliposis",
  description:
    "Subpanel enfocado en genes asociados con cáncer colorrectal hereditario, síndrome de Lynch, poliposis adenomatosa familiar y otros síndromes gastrointestinales hereditarios.",
  alternates: { canonical: `/productos/${SLUG}` },
};

const candidates = [
  {
    title: "Cáncer de colon en la familia",
    description:
      "Familiares de primer o segundo grado con diagnóstico de cáncer colorrectal.",
  },
  {
    title: "Diagnóstico antes de los 50 años",
    description:
      "Casos de cáncer colorrectal de inicio temprano en la familia.",
  },
  {
    title: "Múltiples pólipos",
    description:
      "Hallazgo de pólipos adenomatosos múltiples en estudios endoscópicos.",
  },
  {
    title: "Antecedentes familiares amplios",
    description:
      "Historia familiar de cáncer de colon, endometrio, ovario, estómago o páncreas.",
  },
];

const warningSigns = [
  "Cáncer colorrectal en familiares de primer grado",
  "Más de 10 pólipos adenomatosos",
  "Diagnóstico de cáncer colorrectal antes de los 50 años",
  "Tumores múltiples en una misma persona",
  "Familiares con síndrome de Lynch o poliposis confirmados",
  "Cánceres de endometrio, ovario, gástrico o urinario en la familia",
];

const relatedConditions = [
  {
    title: "Síndrome de Lynch",
    description:
      "Predisposición hereditaria a cáncer colorrectal, endometrial, gástrico, ovárico, urinario y otros.",
  },
  {
    title: "Poliposis adenomatosa familiar",
    description:
      "Desarrollo de múltiples pólipos en colon y recto con riesgo elevado de progresión.",
  },
  {
    title: "Poliposis asociada a MUTYH",
    description:
      "Forma de poliposis con patrón de herencia y manejo diferenciado.",
  },
  {
    title: "Síndromes hamartomatosos",
    description:
      "Como Peutz-Jeghers o poliposis juvenil, con afectación gastrointestinal.",
  },
];

const processSteps = [
  {
    title: "Orientación inicial",
    description:
      "Conversamos sobre tus antecedentes y aclaramos el alcance del subpanel.",
  },
  {
    title: "Toma de muestra no invasiva",
    description: "Saliva o muestra bucal, sin agujas ni procedimientos complejos.",
  },
  {
    title: "Análisis NGS enfocado",
    description:
      "Secuenciación de los genes asociados con predisposición colorrectal y poliposis.",
  },
  {
    title: "Interpretación clínica",
    description:
      "Tu reporte se contextualiza con tu historia personal y familiar.",
  },
  {
    title: "Plan con tu médico",
    description:
      "Recomendaciones para llevar el resultado a vigilancia y prevención.",
  },
];

export default function ColorrectalPoliposisPage() {
  return (
    <>
      <SubpanelHero
        subpanel={subpanel}
        subtitle="Evaluación genética enfocada en predisposición hereditaria a cáncer colorrectal, síndrome de Lynch, poliposis y otros síndromes gastrointestinales."
      />

      {/* WHAT IT EVALUATES */}
      <section className="container-x mt-16 lg:mt-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="¿Qué evalúa este subpanel?"
              title="Genes asociados con riesgo gastrointestinal hereditario"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              Este subpanel evalúa genes con relevancia clínica conocida para
              predisposición hereditaria a cáncer colorrectal, síndrome de
              Lynch, poliposis adenomatosa familiar y otros síndromes
              gastrointestinales hereditarios. Permite identificar variantes
              que pueden orientar vigilancia endoscópica, prevención y
              evaluación familiar.
            </p>
          </div>
        </div>
      </section>

      {/* WHO SHOULD CONSIDER */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow="¿Quién debería considerarlo?"
          title="Escenarios típicos en los que este subpanel aporta información"
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

      {/* FAMILY WARNING SIGNS */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Señales de alerta familiar"
              title="Cuándo conviene una evaluación genética"
              description="Estas señales pueden orientar a una conversación con tu médico sobre la pertinencia del estudio."
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

      {/* RELATION WITH OTHER CONDITIONS */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeader
          eyebrow="Relación con otros cánceres hereditarios"
          title="Síndromes y condiciones evaluadas"
          description="Algunos genes incluidos pueden asociarse con riesgo de tumores fuera del tracto gastrointestinal, lo que ayuda a contextualizar la historia familiar."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {relatedConditions.map((c) => (
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
            genes={COLORRECTAL_POLIPOSIS_GENES}
            countLabel="10 genes incluidos"
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
          title="¿Tu historia familiar incluye cáncer de colon o poliposis?"
          subtitle="Habla con nuestro equipo y conoce si una evaluación genética enfocada es adecuada para ti."
          primaryLabel="Agendar consulta por WhatsApp"
          primaryMessage={subpanel.whatsappMessage}
          secondaryLabel="Ver panel completo (161 genes)"
          secondaryHref="/productos/panel-cancer-hereditario"
        />
      </section>
    </>
  );
}
