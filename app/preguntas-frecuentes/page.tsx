import type { Metadata } from "next";
import FAQContent from "./faq-content";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Resolvemos las dudas más comunes sobre el Panel de Cáncer Hereditario, la toma de muestra, los tiempos de entrega y la interpretación del resultado.",
};

export default function FAQPage() {
  return <FAQContent />;
}
