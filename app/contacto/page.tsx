import type { Metadata } from "next";
import ContactoContent from "./contacto-content";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos por WhatsApp, teléfono o visítanos en CÉNIT Medical Center, Mérida, Yucatán. Atención profesional para análisis genético hereditario.",
};

export default function ContactoPage() {
  return <ContactoContent />;
}
