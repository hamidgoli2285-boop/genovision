export type SubpanelIconKey = "colon" | "breast" | "core" | "prostate";

export type Subpanel = {
  id: string;
  slug: string;
  href: string;
  title: string;
  shortTitle: string;
  badge: string;
  description: string;
  indications: string[];
  ctaLabel: string;
  whatsappMessage: string;
  geneCount: number;
  // Comparison table fields
  enfoque: string;
  mejorPara: string;
  nivel: string;
  iconKey: SubpanelIconKey;
};

const subpanelHrefBase = "/productos";

export const SUBPANELS: Subpanel[] = [
  {
    id: "colorrectal-poliposis",
    slug: "panel-cancer-colorrectal-poliposis",
    href: `${subpanelHrefBase}/panel-cancer-colorrectal-poliposis`,
    title: "Cáncer Colorrectal Hereditario y Poliposis",
    shortTitle: "Panel Colorrectal y Poliposis",
    badge: "Colon / Poliposis",
    description:
      "Enfocado en genes asociados con cáncer colorrectal hereditario, síndrome de Lynch, poliposis adenomatosa familiar y otros síndromes gastrointestinales hereditarios.",
    indications: [
      "Cáncer de colon en la familia",
      "Diagnóstico antes de los 50 años",
      "Múltiples pólipos",
      "Historia familiar de cáncer de colon, endometrio, ovario, estómago o páncreas",
    ],
    ctaLabel: "Ver subpanel",
    whatsappMessage:
      "Hola GenoVision, me interesa información sobre el Panel de Cáncer Colorrectal Hereditario y Poliposis.",
    geneCount: 10,
    enfoque: "Colon, Lynch, poliposis y gastrointestinal hereditario",
    mejorPara: "Antecedentes de colon o pólipos",
    nivel: "Enfocado",
    iconKey: "colon",
  },
  {
    id: "mama-hereditario",
    slug: "panel-cancer-mama-hereditario",
    href: `${subpanelHrefBase}/panel-cancer-mama-hereditario`,
    title: "Cáncer de Mama y Ovario Hereditario",
    shortTitle: "Panel Cáncer de Mama y Ovario Hereditario",
    badge: "Mama / Ovario",
    description:
      "Enfocado en genes relacionados con predisposición hereditaria a cáncer de mama, ovario y síndromes familiares asociados.",
    indications: [
      "Cáncer de mama en edad temprana",
      "Cáncer de mama bilateral",
      "Cáncer de ovario en la familia",
      "Familiares con variantes BRCA1/BRCA2 u otros genes de riesgo",
    ],
    ctaLabel: "Ver subpanel",
    whatsappMessage:
      "Hola GenoVision, me interesa información sobre el Panel de Cáncer de Mama y Ovario Hereditario.",
    geneCount: 11,
    enfoque: "Mama, ovario y síndromes relacionados",
    mejorPara: "Antecedentes de mama u ovario",
    nivel: "Enfocado",
    iconKey: "breast",
  },
  {
    id: "core",
    slug: "panel-core-cancer-hereditario",
    href: `${subpanelHrefBase}/panel-core-cancer-hereditario`,
    title: "Panel Core de Cáncer Hereditario",
    shortTitle: "Panel Core",
    badge: "Core",
    description:
      "Selección esencial de genes clínicamente relevantes para evaluación inicial de predisposición hereditaria al cáncer.",
    indications: [
      "Evaluación inicial de riesgo hereditario",
      "Historia familiar sugestiva",
      "Pacientes que requieren una opción más enfocada",
      "Orientación médica preventiva",
    ],
    ctaLabel: "Ver subpanel",
    whatsappMessage:
      "Hola GenoVision, me interesa información sobre el Panel Core de Cáncer Hereditario.",
    geneCount: 83,
    enfoque: "Genes esenciales de riesgo hereditario",
    mejorPara: "Evaluación inicial o bajo criterio médico",
    nivel: "Básico / enfocado",
    iconKey: "core",
  },
  {
    id: "prostata-hereditario",
    slug: "panel-cancer-prostata-hereditario",
    href: `${subpanelHrefBase}/panel-cancer-prostata-hereditario`,
    title: "Cáncer de Próstata Hereditario",
    shortTitle: "Panel Cáncer de Próstata Hereditario",
    badge: "Próstata",
    description:
      "Enfocado en genes asociados con predisposición hereditaria a cáncer de próstata, especialmente cuando existe historia familiar o diagnóstico temprano/agresivo.",
    indications: [
      "Cáncer de próstata en familiares",
      "Diagnóstico temprano",
      "Enfermedad agresiva o metastásica en la familia",
      "Historia familiar de mama, ovario, páncreas o próstata",
    ],
    ctaLabel: "Ver subpanel",
    whatsappMessage:
      "Hola GenoVision, me interesa información sobre el Panel de Cáncer de Próstata Hereditario.",
    geneCount: 17,
    enfoque: "Próstata y síndromes relacionados",
    mejorPara: "Antecedentes de próstata agresiva o temprana",
    nivel: "Enfocado",
    iconKey: "prostate",
  },
];

export const MAIN_PANEL_HREF = `${subpanelHrefBase}/panel-cancer-hereditario`;

export function getSubpanelBySlug(slug: string): Subpanel | undefined {
  return SUBPANELS.find((s) => s.slug === slug);
}
