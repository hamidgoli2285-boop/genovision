"use client";

import CTAButton from "./CTAButton";
import { whatsappLink } from "@/lib/site";
import { useLanguage } from "@/lib/language-context";

const DOCTOR_MSG =
  "Hola GenoVision, soy médico y me interesa información sobre referencia de pacientes para el Panel de Cáncer Hereditario.";

type Props = {
  variant?: "compact" | "full";
};

export default function DoctorReferralCard({ variant = "full" }: Props) {
  const { t } = useLanguage();
  const d = t.doctorReferral;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-slate-200 shadow-card sm:p-12">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 -translate-y-12 translate-x-12 rounded-full bg-cobalt-50/70 blur-3xl"
      />
      <div className="relative grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-cobalt-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cobalt-700">
            {d.badge}
          </span>
          <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            {d.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            {d.description}
          </p>
          {variant === "full" && (
            <ul className="mt-5 grid gap-2 text-sm text-navy-700 sm:grid-cols-2">
              {d.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className="grid h-5 w-5 place-items-center rounded-full bg-teal-50 text-teal-700"
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
          )}
          <div className="mt-7 flex flex-wrap gap-3">
            <CTAButton
              href={whatsappLink(DOCTOR_MSG)}
              external
              variant="primary"
              size="lg"
            >
              {d.ctaPrimary}
            </CTAButton>
            <CTAButton href="/medicos" variant="secondary" size="lg">
              {d.ctaSecondary}
            </CTAButton>
          </div>
        </div>

        <div className="hidden lg:col-span-2 lg:block">
          <div className="relative h-full min-h-[260px] overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy-700 to-cobalt-700 p-6 text-white">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-teal/20 blur-2xl"
            />
            <p className="text-xs uppercase tracking-[0.18em] text-white/65">
              {d.exclusiveLine}
            </p>
            <p className="mt-2 font-display text-2xl font-semibold leading-snug">
              {d.referPatients}
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-white/80">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10">
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
              </span>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-white/60">
                  {d.contactLabel}
                </div>
                <div className="font-semibold">999 366 0543</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
