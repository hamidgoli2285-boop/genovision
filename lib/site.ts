export const SITE = {
  name: "GenoVision",
  tagline: "Análisis genético de riesgo de cáncer",
  url: "https://genovision.mx",
  phoneDisplay: "999 366 0543",
  phoneIntl: "+529993660543",
  whatsappNumber: "529993660543",
  email: "contacto@genovision.mx",
  address: {
    line1: "CÉNIT Medical Center",
    line2: "C. 15 501-C 919, Col. Altabrisa",
    city: "Mérida",
    state: "Yucatán",
    zip: "97130",
    country: "México",
  },
};

export const NAV = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/productos" },
  { label: "Proceso", href: "/proceso" },
  { label: "Para Médicos", href: "/medicos" },
  { label: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
  { label: "Contacto", href: "/contacto" },
];

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola GenoVision, me interesa información sobre el Panel de Cáncer Hereditario.";
