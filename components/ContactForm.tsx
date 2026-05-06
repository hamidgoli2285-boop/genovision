"use client";

import { useState, type FormEvent } from "react";
import CTAButton from "./CTAButton";
import { whatsappLink } from "@/lib/site";
import { useLanguage } from "@/lib/language-context";

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
  const [data, setData] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState<string | null>(null);
  const { t } = useLanguage();
  const cf = t.contactForm;

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      cf.whatsappIntro,
      ``,
      `${cf.whatsappName}: ${data.nombre}`,
      `${cf.whatsappPhone}: ${data.telefono}`,
      `${cf.whatsappEmail}: ${data.correo}`,
      data.paraQuien ? `${cf.whatsappForWhom}: ${data.paraQuien}` : "",
      data.antecedentes
        ? `${cf.whatsappHistory}: ${data.antecedentes}`
        : "",
      data.mensaje ? `${cf.whatsappMessage}: ${data.mensaje}` : "",
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
          {cf.successTitle}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {cf.successDescription}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <CTAButton href={waLink} external variant="whatsapp" size="lg">
            {cf.continueWhatsApp}
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
            {cf.sendAnother}
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
            {cf.nameLabel} <span className="text-cobalt">*</span>
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            value={data.nombre}
            onChange={(e) => update("nombre", e.target.value)}
            className={inputCls}
            placeholder={cf.namePlaceholder}
          />
        </div>
        <div>
          <label
            htmlFor="telefono"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            {cf.phoneLabel} <span className="text-cobalt">*</span>
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            value={data.telefono}
            onChange={(e) => update("telefono", e.target.value)}
            className={inputCls}
            placeholder="999 000 0000"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="correo"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            {cf.emailLabel}
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            value={data.correo}
            onChange={(e) => update("correo", e.target.value)}
            className={inputCls}
            placeholder="tu@correo.com"
          />
        </div>
        <div>
          <label
            htmlFor="paraQuien"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            {cf.forWhomLabel}
          </label>
          <select
            id="paraQuien"
            name="paraQuien"
            value={data.paraQuien}
            onChange={(e) => update("paraQuien", e.target.value)}
            className={inputCls}
          >
            <option value="">{cf.forWhomPlaceholder}</option>
            <option value={cf.whatsappForSelf}>{cf.forWhomSelf}</option>
            <option value={cf.whatsappForFamily}>{cf.forWhomFamily}</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="antecedentes"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            {cf.historyLabel}
          </label>
          <select
            id="antecedentes"
            name="antecedentes"
            value={data.antecedentes}
            onChange={(e) => update("antecedentes", e.target.value)}
            className={inputCls}
          >
            <option value="">{cf.historyPlaceholder}</option>
            <option value={cf.whatsappHistoryYes}>{cf.historyYes}</option>
            <option value={cf.whatsappHistoryNo}>{cf.historyNo}</option>
            <option value={cf.whatsappHistoryUnsure}>{cf.historyUnsure}</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="mensaje"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            {cf.messageLabel}
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            value={data.mensaje}
            onChange={(e) => update("mensaje", e.target.value)}
            className={inputCls}
            placeholder={cf.messagePlaceholder}
          />
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-ink-muted">
        {cf.privacyNote}
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <CTAButton type="submit" variant="primary" size="lg">
          {cf.submitLabel}
        </CTAButton>
      </div>
    </form>
  );
}
