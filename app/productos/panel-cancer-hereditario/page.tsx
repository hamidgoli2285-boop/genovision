import type { Metadata } from "next";
import PanelHereditarioContent from "./PanelHereditarioContent";

export const metadata: Metadata = {
  title: "Panel de Cáncer Hereditario | 161 genes con NGS",
  description:
    "Análisis genético avanzado de 161 genes para identificar predisposición hereditaria al cáncer. Tecnología NGS, muestra bucal o saliva, atención en Mérida.",
  alternates: { canonical: "/productos/panel-cancer-hereditario" },
};

export default function PanelCancerHereditarioPage() {
  return <PanelHereditarioContent />;
}
