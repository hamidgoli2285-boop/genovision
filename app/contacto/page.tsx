import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import CTAButton from "@/components/CTAButton";
import { SITE, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos por WhatsApp, teléfono o visítanos en CÉNIT Medical Center, Mérida, Yucatán. Atención profesional para análisis genético hereditario.",
};

const mapsQuery = encodeURIComponent(
  "CÉNIT Medical Center, Calle 15 501-C 919, Altabrisa, 97130 Mérida, Yucatán"
);

export default function ContactoPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid mask-fade-y opacity-50"
        />
        <div className="container-x relative pb-10 pt-12 sm:pt-16 lg:pb-14 lg:pt-20">
          <SectionHeader
            eyebrow="Contacto"
            title="Hablemos de tu caso"
            description="Resolvemos tus dudas, te explicamos el proceso y te orientamos sin compromiso. La consulta inicial es el primer paso."
          />
        </div>
      </section>

      <section className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <aside className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-card sm:p-8">
              <h3 className="font-display text-xl font-semibold text-navy">
                Datos de contacto
              </h3>

              <div className="mt-6 space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#25D366]/10 text-[#25D366]"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.5 3.5A11 11 0 0 0 3.6 17.3L2 22l4.8-1.6A11 11 0 1 0 20.5 3.5Z" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                      WhatsApp
                    </div>
                    <a
                      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-navy hover:text-cobalt-700"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cobalt-50 text-cobalt-700"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7.21 10.79a16 16 0 0 0 6 6l2-1.59a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .79 1Z" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                      Teléfono
                    </div>
                    <a
                      href={`tel:${SITE.phoneIntl}`}
                      className="text-base font-semibold text-navy hover:text-cobalt-700"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-teal-50 text-teal-700"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                      Dirección
                    </div>
                    <p className="text-base font-medium text-navy">
                      {SITE.address.line1}
                    </p>
                    <p className="text-sm text-ink-muted">
                      {SITE.address.line2}
                      <br />
                      {SITE.address.zip} {SITE.address.city},{" "}
                      {SITE.address.state}, {SITE.address.country}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <CTAButton
                  href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                  external
                  variant="whatsapp"
                  size="md"
                  fullWidth
                >
                  Enviar WhatsApp ahora
                </CTAButton>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-card">
              <div className="aspect-[4/3] w-full">
                <iframe
                  title="Mapa GenoVision - CÉNIT Medical Center"
                  src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          </aside>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <div className="mt-16 lg:mt-24" />
    </>
  );
}
