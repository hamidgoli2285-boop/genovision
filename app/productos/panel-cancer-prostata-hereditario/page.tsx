import type { Metadata } from "next";
import ProstataContent from "./prostata-content";

const SLUG = "panel-cancer-prostata-hereditario";

export const metadata: Metadata = {
  title: "Panel de Cáncer de Próstata Hereditario",
  description:
    "Subpanel enfocado en genes asociados con predisposición hereditaria a cáncer de próstata, especialmente en casos con historia familiar o diagnóstico temprano o agresivo.",
  alternates: { canonical: `/productos/${SLUG}` },
};

export default function ProstataHereditarioPage() {
  return <ProstataContent />;
}
