"use client";

import { useState, type FormEvent } from "react";
import CTAButton from "./CTAButton";
import { whatsappLink } from "@/lib/site";
import { useT } from "@/lib/i18n/useT";

type FormState = {
  nombre: string;
  telefono: string;
  correo: string;
  paraQuien: string;
  antecedentes: string;
  mensaje: string;
};

const initialState: FormState = {
  nombre: "",
  telefono: "",
  correo: "",
  paraQuien: "",
  antecedentes: "",
  mensaje: "",
};

export default function ContactForm() {
  const { t } = useT();
  const [data, setData] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState<string | null>(null);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      t.contactForm.waMessageHeader,
      ``,
      `${t.contactForm.waLineName}: ${data.nombre}`,
      `${t.contactForm.phone}: ${data.telefono}`,
      `${t.contactForm.email}: ${data.correo}`,
      data.paraQuien
        ? `${t.contactForm.waLineFor}: ${data.paraQuien}`
        : "",
      data.antecedentes
        ? `${t.contactForm.waLineFamily}: ${data.antecedentes}`
        : "",
      data.mensaje ? `${t.contactForm.waLineMessage}: ${data.mensaje}` : "",
    ].filter(Boolean);

    setWaLink(whatsappLink(lines.join("\n")));
    setSubmitted(true);
  };

  if (submitted && waLink) {
    return (
      <div className="rounded-2xl bg-white p-8 ring-1 ring-slate-200 shadow-card">
        <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-emerald-50 text-emerald-700">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-semibold text-navy">
          {t.contactForm.receivedTitle}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {t.contactForm.receivedBody}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <CTAButton href={waLink} external variant="whatsapp" size="lg">
            {t.contactForm.continueWa}
          </CTAButton>
          <CTAButton
            variant="secondary"
            size="lg"
            onClick={() => {
              setData(initialState);
              setSubmitted(false);
              setWaLink(null);
            }}
          >
            {t.contactForm.sendAnother}
          </CTAButton>
        </div>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy placeholder:text-ink-muted/70 focus:border-cobalt focus:outline-none focus:ring-2 focus:ring-cobalt/20";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-card sm:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="nombre"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            {t.contactForm.name} <span className="text-cobalt">*</span>
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            value={data.nombre}
            onChange={(e) => update("nombre", e.target.value)}
            className={inputCls}
            placeholder={t.contactForm.namePlaceholder}
          />
        </div>
        <div>
          <label
            htmlFor="telefono"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            {t.contactForm.phone} <span className="text-cobalt">*</span>
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            value={data.telefono}
            onChange={(e) => update("telefono", e.target.value)}
            className={inputCls}
            placeholder={t.contactForm.phonePlaceholder}
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="correo"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            {t.contactForm.email}
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            value={data.correo}
            onChange={(e) => update("correo", e.target.value)}
            className={inputCls}
            placeholder={t.contactForm.emailPlaceholder}
          />
        </div>
        <div>
          <label
            htmlFor="paraQuien"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            {t.contactForm.forWhom}
          </label>
          <select
            id="paraQuien"
            name="paraQuien"
            value={data.paraQuien}
            onChange={(e) => update("paraQuien", e.target.value)}
            className={inputCls}
          >
            <option value="">{t.contactForm.forWhomPlaceholder}</option>
            <option value={t.contactForm.forMe}>{t.contactForm.forMe}</option>
            <option value={t.contactForm.forFamily}>
              {t.contactForm.forFamily}
            </option>
          </select>
        </div>
        <div>
          <label
            htmlFor="antecedentes"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            {t.contactForm.family}
          </label>
          <select
            id="antecedentes"
            name="antecedentes"
            value={data.antecedentes}
            onChange={(e) => update("antecedentes", e.target.value)}
            className={inputCls}
          >
            <option value="">{t.contactForm.familyPlaceholder}</option>
            <option value={t.contactForm.yes}>{t.contactForm.yes}</option>
            <option value={t.contactForm.no}>{t.contactForm.no}</option>
            <option value={t.contactForm.notSure}>
              {t.contactForm.notSure}
            </option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="mensaje"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            {t.contactForm.message}
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            value={data.mensaje}
            onChange={(e) => update("mensaje", e.target.value)}
            className={inputCls}
            placeholder={t.contactForm.messagePlaceholder}
          />
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-ink-muted">
        {t.contactForm.privacy}
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <CTAButton type="submit" variant="primary" size="lg">
          {t.contactForm.submit}
        </CTAButton>
      </div>
    </form>
  );
}
