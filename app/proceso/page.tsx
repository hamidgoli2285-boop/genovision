import type { Metadata } from "next";
import ProcesoContent from "./proceso-content";

export const metadata: Metadata = {
  title: "Del ADN al resultado: así funciona el proceso",
  description:
    "Conoce el proceso completo de GenoVision: desde el primer contacto por WhatsApp hasta la entrega de resultados y el plan de seguimiento médico.",
};

export default function ProcesoPage() {
  return <ProcesoContent />;
}
