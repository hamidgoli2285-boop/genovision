import type { Metadata } from "next";
import PanelContent from "./panel-content";

export const metadata: Metadata = {
  title: "Panel de Cáncer Hereditario | 193 genes con NGS",
  description:
    "Análisis genético avanzado de 193 genes para identificar predisposición hereditaria al cáncer. Tecnología NGS, muestra bucal o saliva, atención en Mérida.",
  alternates: { canonical: "/productos/panel-cancer-hereditario" },
};

export default function PanelCancerHereditarioPage() {
  return <PanelContent />;
}
