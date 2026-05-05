export type ProductStatus = "disponible" | "bajo-solicitud" | "proximamente";

export type ProductCategory =
  | "cancer"
  | "cardiovascular"
  | "neurologia"
  | "inmunologia"
  | "diabetes"
  | "oftalmologia"
  | "respiratorio"
  | "neurodesarrollo"
  | "farmacogenomica"
  | "tiroides"
  | "exoma"
  | "cardiometabolico";

export type Product = {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  category: ProductCategory;
  categoryLabel: string;
  status: ProductStatus;
  geneCount?: number;
  description: string;
  badges: string[];
  ctaLabel: string;
  featured?: boolean;
  href?: string;
};

export const CATEGORIES = [
  { id: "all", label: "Todos" },
  { id: "cancer", label: "Cáncer hereditario" },
  { id: "cardiovascular", label: "Salud cardiovascular" },
  { id: "neurologia", label: "Neurología" },
  { id: "inmunologia", label: "Inmunología" },
  { id: "diabetes", label: "Diabetes" },
  { id: "oftalmologia", label: "Oftalmología" },
  { id: "farmacogenomica", label: "Farmacogenómica" },
  { id: "tiroides", label: "Tiroides" },
  { id: "exoma", label: "Exoma / Genoma" },
] as const;

export const PRODUCTS: Product[] = [
  {
    id: "panel-cancer-hereditario",
    slug: "panel-cancer-hereditario",
    title: "Panel de Cáncer Hereditario",
    category: "cancer",
    categoryLabel: "Cáncer hereditario",
    status: "disponible",
    geneCount: 161,
    description:
      "Análisis de genes asociados a predisposición hereditaria a cáncer de mama, ovario, colon, próstata, páncreas, melanoma y otros síndromes hereditarios.",
    badges: ["161 genes", "NGS", "Prevención", "Riesgo hereditario"],
    ctaLabel: "Ver panel",
    featured: true,
    href: "/productos/panel-cancer-hereditario",
  },
  {
    id: "panel-cardio-pulmonar",
    slug: "panel-cardio-pulmonar",
    title: "Panel Cardio-Pulmonar",
    category: "cardiovascular",
    categoryLabel: "Salud cardiovascular",
    status: "bajo-solicitud",
    geneCount: 270,
    description:
      "Evaluación genética orientada a condiciones cardiovasculares y pulmonares hereditarias.",
    badges: ["NGS", "Cardiovascular"],
    ctaLabel: "Solicitar información",
  },
  {
    id: "panel-neurologico",
    slug: "panel-neurologico",
    title: "Panel Neurológico",
    category: "neurologia",
    categoryLabel: "Neurología",
    status: "bajo-solicitud",
    geneCount: 233,
    description:
      "Análisis genético para condiciones neurológicas hereditarias y neurodegenerativas seleccionadas.",
    badges: ["NGS", "Neurología"],
    ctaLabel: "Solicitar información",
  },
  {
    id: "panel-inmunologico",
    slug: "panel-inmunologico",
    title: "Panel Inmunológico",
    category: "inmunologia",
    categoryLabel: "Inmunología",
    status: "bajo-solicitud",
    geneCount: 497,
    description:
      "Evaluación de variantes asociadas con inmunodeficiencias primarias y trastornos autoinmunes/autoinflamatorios.",
    badges: ["NGS", "Inmunología"],
    ctaLabel: "Solicitar información",
  },
  {
    id: "panel-diabetes",
    slug: "panel-diabetes",
    title: "Panel de Diabetes",
    category: "diabetes",
    categoryLabel: "Diabetes",
    status: "bajo-solicitud",
    geneCount: 37,
    description:
      "Análisis genético enfocado en predisposición y formas monogénicas relacionadas con diabetes.",
    badges: ["NGS", "Metabolismo"],
    ctaLabel: "Solicitar información",
  },
  {
    id: "panel-oftalmologico",
    slug: "panel-oftalmologico",
    title: "Panel Oftalmológico",
    category: "oftalmologia",
    categoryLabel: "Oftalmología",
    status: "bajo-solicitud",
    geneCount: 194,
    description:
      "Evaluación genética para trastornos oculares hereditarios y retinopatías.",
    badges: ["NGS", "Oftalmología"],
    ctaLabel: "Solicitar información",
  },
  {
    id: "panel-respiratorio",
    slug: "panel-respiratorio",
    title: "Panel Respiratorio",
    category: "respiratorio",
    categoryLabel: "Respiratorio",
    status: "bajo-solicitud",
    geneCount: 78,
    description:
      "Análisis de variantes asociadas a enfermedades respiratorias hereditarias o predisposición pulmonar.",
    badges: ["NGS", "Respiratorio"],
    ctaLabel: "Solicitar información",
  },
  {
    id: "panel-autismo",
    slug: "panel-autismo-neurodesarrollo",
    title: "Panel de Autismo / Neurodesarrollo",
    category: "neurodesarrollo",
    categoryLabel: "Neurodesarrollo",
    status: "bajo-solicitud",
    geneCount: 64,
    description:
      "Análisis genético orientado a condiciones del neurodesarrollo bajo criterio médico.",
    badges: ["NGS", "Neurodesarrollo"],
    ctaLabel: "Solicitar información",
  },
  {
    id: "panel-farmacogenomica",
    slug: "panel-farmacogenomica",
    title: "Panel de Farmacogenómica",
    category: "farmacogenomica",
    categoryLabel: "Farmacogenómica",
    status: "bajo-solicitud",
    geneCount: 2,
    description:
      "Evaluación genética para orientar respuesta a medicamentos y metabolismo farmacológico.",
    badges: ["NGS", "Medicina personalizada"],
    ctaLabel: "Solicitar información",
  },
  {
    id: "panel-tiroides",
    slug: "panel-tiroides",
    title: "Panel de Tiroides",
    category: "tiroides",
    categoryLabel: "Tiroides",
    status: "bajo-solicitud",
    geneCount: 44,
    description:
      "Evaluación genética relacionada con predisposición a trastornos tiroideos seleccionados.",
    badges: ["NGS", "Endocrinología"],
    ctaLabel: "Solicitar información",
  },
  {
    id: "exoma-completo",
    slug: "secuenciacion-exoma-completo",
    title: "Secuenciación de Exoma Completo (WES)",
    category: "exoma",
    categoryLabel: "Exoma / Genoma",
    status: "bajo-solicitud",
    description:
      "Análisis de regiones codificantes del genoma para investigación clínica avanzada bajo indicación médica.",
    badges: ["WES", "Investigación clínica"],
    ctaLabel: "Solicitar información",
  },
  {
    id: "reporte-cardiometabolico",
    slug: "reporte-cardiometabolico-prs",
    title: "Reporte Cardiometabólico / PRS",
    category: "cardiovascular",
    categoryLabel: "Salud cardiovascular",
    status: "bajo-solicitud",
    description:
      "Reporte de riesgo genético cardiometabólico para prevención personalizada.",
    badges: ["PRS", "Prevención"],
    ctaLabel: "Solicitar información",
  },
  {
    id: "neuro-panel-wgs",
    slug: "neuro-panel-whole-genome",
    title: "Neuro Panel Whole Genome",
    category: "neurologia",
    categoryLabel: "Neurología",
    status: "bajo-solicitud",
    geneCount: 233,
    description:
      "Análisis genómico amplio para condiciones neurológicas complejas bajo indicación médica.",
    badges: ["WGS", "Neurología"],
    ctaLabel: "Solicitar información",
  },
];
