import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import SectionHeader from "@/components/SectionHeader";
import IconCard from "@/components/IconCard";
import Timeline from "@/components/Timeline";
import ContactCTA from "@/components/ContactCTA";
import DoctorReferralCard from "@/components/DoctorReferralCard";
import DNAVisual from "@/components/DNAVisual";
import TrustBar from "@/components/TrustBar";
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/site";

const reasons = [
  {
    title: "Antecedentes familiares",
    description:
      "Casos de cáncer en padres, hermanos o familiares cercanos pueden indicar un componente hereditario.",
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
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <circle cx="17" cy="7" r="3" />
        <path d="M21 21v-1.5a3.5 3.5 0 0 0-3-3.46" />
      </svg>
    ),
  },
  {
    title: "Cáncer a edad temprana",
    description:
      "Diagnósticos antes de los 50 años en la familia son una señal a considerar.",
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
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Múltiples casos en la familia",
    description:
      "Varios familiares afectados, incluso de distintas generaciones, sugieren predisposición genética.",
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
        <path d="M4 7h6v6H4zM14 11h6v6h-6z" />
        <path d="M10 10v4M14 14H10" />
      </svg>
    ),
  },
  {
    title: "Prevención personalizada",
    description:
      "Conocer tu perfil genético permite ajustar revisiones, hábitos y vigilancia médica.",
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
        <path d="M12 21s-7-4.35-7-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.65-7 11-7 11Z" />
      </svg>
    ),
  },
  {
    title: "Decisiones médicas informadas",
    description:
      "Información genética que apoya a tu médico para definir estrategias de seguimiento.",
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
        <path d="M9 12h6M12 9v6" />
        <rect x="3" y="3" width="18" height="18" rx="3" />
      </svg>
    ),
  },
];

const steps = [
  {
    title: "Consulta inicial",
    description:
      "Resolvemos tus dudas y revisamos antecedentes para definir si el panel es adecuado.",
  },
  {
    title: "Toma de muestra bucal o saliva",
    description: "Procedimiento sencillo, indoloro y no invasivo.",
  },
  {
    title: "Análisis genómico por NGS",
    description:
      "Secuenciación de nueva generación para evaluar múltiples genes simultáneamente.",
  },
  {
    title: "Interpretación profesional",
    description:
      "Tu resultado se interpreta dentro del contexto clínico y familiar.",
  },
  {
    title: "Recomendaciones de seguimiento",
    description:
      "Te orientamos para llevar el resultado a tu médico tratante y definir un plan.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-hero-glow"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid mask-fade-y opacity-60"
        />

        <div className="container-x relative grid gap-10 pb-16 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-12 lg:pb-24 lg:pt-20">
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cobalt-700 ring-1 ring-cobalt-100 shadow-sm">
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse-soft"
              />
              Genómica clínica en Mérida
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-navy text-balance sm:text-5xl lg:text-[3.5rem]">
              Predice tu riesgo genético de cáncer{" "}
              <span className="bg-gradient-to-r from-cobalt to-teal bg-clip-text text-transparent">
                antes de que sea tarde
              </span>
              .
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
              En GenoVision analizamos{" "}
              <strong className="font-semibold text-navy">161 genes</strong>{" "}
              relacionados con predisposición hereditaria al cáncer mediante
              tecnología NGS, para ayudarte a tomar decisiones preventivas con
              información clara y profesional.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CTAButton
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
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
                Agendar consulta por WhatsApp
              </CTAButton>
              <CTAButton
                href="/productos/panel-cancer-hereditario"
                variant="secondary"
                size="lg"
              >
                Ver panel de cáncer
              </CTAButton>
            </div>

            <div className="mt-10">
              <TrustBar />
            </div>
          </div>

          <div className="relative lg:col-span-5 xl:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-cobalt-100 via-teal-100 to-transparent blur-3xl opacity-70"
              />
              <DNAVisual className="h-full w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY GENETIC RISK MATTERS */}
      <section className="container-x mt-16 lg:mt-24">
        <SectionHeader
          eyebrow="Por qué importa"
          title={
            <>
              El cáncer no siempre avisa. <br className="hidden sm:inline" />
              Tu ADN puede dar señales antes.
            </>
          }
          description="Identificar predisposición genética hereditaria permite anticiparse, vigilar y orientar decisiones preventivas con tu médico."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {reasons.map((r) => (
            <IconCard
              key={r.title}
              title={r.title}
              description={r.description}
              icon={r.icon}
            />
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Cómo funciona"
              title="Un proceso clínico, claro y guiado"
              description="Desde la primera consulta hasta la entrega de resultados, te acompañamos en cada paso."
            />
            <div className="mt-8 hidden lg:block">
              <CTAButton href="/proceso" variant="secondary" size="md">
                Ver proceso completo
              </CTAButton>
            </div>
          </div>
          <div className="lg:col-span-7">
            <Timeline items={steps} />
            <div className="mt-8 lg:hidden">
              <CTAButton href="/proceso" variant="secondary" size="md">
                Ver proceso completo
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy-700 to-cobalt-700 text-white shadow-card">
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="p-8 sm:p-12 lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300 ring-1 ring-teal-400/30">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                Producto destacado
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Panel de Cáncer Hereditario
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                Evaluación avanzada de 161 genes asociados con predisposición
                hereditaria a distintos tipos de cáncer.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["161 genes", "NGS", "Prevención", "Riesgo hereditario"].map(
                  (b) => (
                    <span
                      key={b}
                      className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/15"
                    >
                      {b}
                    </span>
                  )
                )}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <CTAButton
                  href="/productos/panel-cancer-hereditario"
                  variant="primary"
                  size="lg"
                  className="bg-white text-navy hover:bg-teal-50 hover:text-navy"
                >
                  Ver detalles del panel
                </CTAButton>
                <CTAButton
                  href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                  external
                  variant="ghost"
                  size="lg"
                  className="bg-white/10 text-white hover:bg-white/15"
                >
                  Hablar con un especialista
                </CTAButton>
              </div>
            </div>

            <div className="relative hidden border-l border-white/10 lg:col-span-5 lg:block">
              <div className="grid h-full place-items-center p-8">
                <DNAVisual className="h-full max-h-[420px] w-full opacity-90" />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-ink-muted">
          ¿Buscas otros paneles?{" "}
          <Link
            href="/productos"
            className="font-semibold text-cobalt hover:text-cobalt-700"
          >
            Ver catálogo completo
          </Link>
        </p>
      </section>

      {/* DOCTOR REFERRAL */}
      <section className="container-x mt-20 lg:mt-28">
        <DoctorReferralCard />
      </section>

      {/* FINAL CTA */}
      <section className="mt-20 lg:mt-28">
        <ContactCTA
          title="Si hay cáncer en tu familia, no lo ignores."
          subtitle="Una conversación puede ser el primer paso para definir si una evaluación genética es adecuada para ti."
          secondaryLabel="Conocer el proceso"
          secondaryHref="/proceso"
        />
      </section>
    </>
  );
}
