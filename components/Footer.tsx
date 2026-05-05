import Link from "next/link";
import Logo from "./Logo";
import { NAV, SITE, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="inline-flex rounded-xl bg-white/95 px-4 py-3 ring-1 ring-white/10">
              <Logo variant="light" size="xl" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Genómica clínica para identificar predisposición hereditaria al
              cáncer y orientar decisiones preventivas.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M20.5 3.5A11 11 0 0 0 3.6 17.3L2 22l4.8-1.6A11 11 0 1 0 20.5 3.5Z" />
                  </svg>
                  WhatsApp: {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneIntl}`}
                  className="inline-flex items-center gap-2 hover:text-white"
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
                    aria-hidden
                  >
                    <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7.21 10.79a16 16 0 0 0 6 6l2-1.59a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .79 1Z" />
                  </svg>
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                  className="mt-0.5 shrink-0"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                  <br />
                  {SITE.address.zip} {SITE.address.city}, {SITE.address.state},{" "}
                  {SITE.address.country}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Legal
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              La información de este sitio es educativa y no sustituye consulta
              médica. Los resultados genéticos deben ser interpretados por
              profesionales de salud calificados.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos
            reservados.
          </p>
          <p>Mérida, Yucatán, México</p>
        </div>
      </div>
    </footer>
  );
}
