export type ProductStatus = "available" | "upon-request";

/** Catalog categories (aligned with the approved GenoVision catalog). */
export type ProductCategory =
  | "cancer"
  | "farmacogenomica"
  | "reproductiva"
  | "infecciosas"
  | "genomica"
  | "personalizada";

export type Product = {
  id: string;
  slug: string;
  /** English fallback title (translations provide the display title per language). */
  title: string;
  shortTitle?: string;
  /** A product may appear under more than one category (e.g. Cancer-PGx). */
  categories: ProductCategory[];
  /** English fallback category label. */
  categoryLabel: string;
  status: ProductStatus;
  geneCount?: number;
  /** English fallback description. */
  description: string;
  badges: string[];
  /** English fallback CTA label. */
  ctaLabel: string;
  featured?: boolean;
  /** Only set when a dedicated detail page exists. */
  href?: string;
};

/** Ordered category definitions used to group the catalog. */
export const CATEGORY_ORDER: { id: ProductCategory; label: string }[] = [
  { id: "cancer", label: "Cancer & Oncology" },
  { id: "farmacogenomica", label: "Pharmacogenomics" },
  { id: "reproductiva", label: "Reproductive & Family Testing" },
  { id: "infecciosas", label: "Infectious Disease Panels" },
  { id: "genomica", label: "Clinical Genomics & Inherited Disorders" },
  { id: "personalizada", label: "Personalized Health, Metabolism & Microbiota" },
];

export const PRODUCTS: Product[] = [
  /* ─── A. Cancer & Oncology ─────────────────────────────────────────── */
  {
    id: "familial-cancer-panel",
    slug: "panel-cancer-hereditario",
    title: "Familial Cancer Panel",
    categories: ["cancer"],
    categoryLabel: "Cancer & Oncology",
    status: "available",
    geneCount: 193,
    description:
      "Comprehensive analysis of 193 genes associated with hereditary predisposition to breast, ovarian, colorectal, prostate, pancreatic, melanoma and other cancer syndromes.",
    badges: ["193 genes", "NGS", "Hereditary risk", "Prevention"],
    ctaLabel: "View study",
    featured: true,
    href: "/productos/panel-cancer-hereditario",
  },
  {
    id: "universal-cancer-screening",
    slug: "tamizaje-universal-cancer",
    title: "Universal Cancer Screening (Liquid Biopsy)",
    categories: ["cancer"],
    categoryLabel: "Cancer & Oncology",
    status: "available",
    description:
      "Blood-based liquid biopsy that screens for tumor-related molecular signals to support early detection and monitoring across multiple cancer types.",
    badges: ["Liquid biopsy", "Multi-cancer", "Blood sample"],
    ctaLabel: "Request information",
    featured: true,
    href: "/productos/tamizaje-universal-cancer",
  },
  {
    id: "cancer-pgx",
    slug: "cancer-pgx",
    title: "Cancer-PGx Panel",
    categories: ["cancer", "farmacogenomica"],
    categoryLabel: "Cancer & Oncology",
    status: "available",
    description:
      "Pharmacogenomic analysis focused on oncology drugs, helping guide chemotherapy and targeted-therapy selection and dosing.",
    badges: ["PGx", "Oncology", "Drug response"],
    ctaLabel: "Request information",
  },

  /* ─── B. Pharmacogenomics ──────────────────────────────────────────── */
  {
    id: "comprehensive-pgx",
    slug: "farmacogenomica-integral",
    title: "Comprehensive Pharmacogenomics (PGx)",
    categories: ["farmacogenomica"],
    categoryLabel: "Pharmacogenomics",
    status: "available",
    description:
      "Broad pharmacogenomic profile evaluating how a patient may metabolize and respond to a wide range of medications.",
    badges: ["PGx", "Drug response", "Personalized dosing"],
    ctaLabel: "Request information",
  },
  {
    id: "pain-pgx",
    slug: "pain-pgx",
    title: "Pain-PGx Panel",
    categories: ["farmacogenomica"],
    categoryLabel: "Pharmacogenomics",
    status: "available",
    description:
      "Pharmacogenomic panel focused on analgesics and pain-management medications to support safer, personalized prescribing.",
    badges: ["PGx", "Pain management"],
    ctaLabel: "Request information",
  },
  {
    id: "psychiatric-pgx",
    slug: "psychiatric-pgx",
    title: "Psychiatric-PGx Panel",
    categories: ["farmacogenomica"],
    categoryLabel: "Pharmacogenomics",
    status: "available",
    description:
      "Pharmacogenomic panel for psychiatric medications, informing antidepressant, antipsychotic and mood-stabilizer selection.",
    badges: ["PGx", "Psychiatry"],
    ctaLabel: "Request information",
  },
  {
    id: "cardiac-pgx",
    slug: "cardiac-pgx",
    title: "Cardiac-PGx Panel",
    categories: ["farmacogenomica"],
    categoryLabel: "Pharmacogenomics",
    status: "available",
    description:
      "Pharmacogenomic panel for cardiovascular medications, including anticoagulants, antiplatelets and statins.",
    badges: ["PGx", "Cardiology"],
    ctaLabel: "Request information",
  },

  /* ─── C. Reproductive & Family Testing ─────────────────────────────── */
  {
    id: "gender-reveal",
    slug: "revelacion-sexo-fetal",
    title: "Gender Reveal Test",
    categories: ["reproductiva"],
    categoryLabel: "Reproductive & Family Testing",
    status: "available",
    description:
      "Early, blood-based fetal sex determination from a maternal sample.",
    badges: ["Blood sample", "Early result"],
    ctaLabel: "Request information",
  },
  {
    id: "nipt",
    slug: "tamizaje-prenatal-no-invasivo",
    title: "Non-Invasive Prenatal Screening (NIPS/NIPT)",
    categories: ["reproductiva"],
    categoryLabel: "Reproductive & Family Testing",
    status: "available",
    description:
      "Non-invasive prenatal screening from maternal blood for common chromosomal conditions and fetal sex from week 10.",
    badges: ["NIPS/NIPT", "Non-invasive", "From week 10"],
    ctaLabel: "Request information",
  },
  {
    id: "prenatal-paternity",
    slug: "paternidad-prenatal",
    title: "Prenatal Paternity Test",
    categories: ["reproductiva"],
    categoryLabel: "Reproductive & Family Testing",
    status: "available",
    description:
      "Non-invasive prenatal paternity testing from a maternal blood sample, safe during pregnancy.",
    badges: ["Non-invasive", "Prenatal"],
    ctaLabel: "Request information",
  },
  {
    id: "carrier-detection",
    slug: "deteccion-portadores",
    title: "Carrier Detection Test",
    categories: ["reproductiva"],
    categoryLabel: "Reproductive & Family Testing",
    status: "available",
    description:
      "Carrier screening to identify inherited variants that could be passed on to future children.",
    badges: ["Carrier screening", "Family planning"],
    ctaLabel: "Request information",
  },
  {
    id: "paternity-relationship",
    slug: "paternidad-relacion",
    title: "Paternity & Relationship Test",
    categories: ["reproductiva"],
    categoryLabel: "Reproductive & Family Testing",
    status: "available",
    description:
      "DNA testing to confirm paternity and other biological family relationships.",
    badges: ["DNA testing", "Relationship"],
    ctaLabel: "Request information",
  },

  /* ─── D. Infectious Disease Panels ─────────────────────────────────── */
  {
    id: "covid-rtpcr",
    slug: "covid-rt-pcr",
    title: "COVID RT-PCR Test",
    categories: ["infecciosas"],
    categoryLabel: "Infectious Disease Panels",
    status: "available",
    description: "Gold-standard RT-PCR detection of SARS-CoV-2.",
    badges: ["RT-PCR", "SARS-CoV-2"],
    ctaLabel: "Request information",
  },
  {
    id: "covid-flu-rsv",
    slug: "covid-flu-rsv",
    title: "COVID-FLU-RSV Panel",
    categories: ["infecciosas"],
    categoryLabel: "Infectious Disease Panels",
    status: "available",
    description:
      "Combined molecular panel detecting COVID-19, Influenza A/B and RSV from a single sample.",
    badges: ["Multiplex", "COVID / FLU / RSV"],
    ctaLabel: "Request information",
  },
  {
    id: "respiratory-pathogen",
    slug: "patogenos-respiratorios",
    title: "Respiratory Pathogen Panels (RPP LITE / RPP / PLUS)",
    categories: ["infecciosas"],
    categoryLabel: "Infectious Disease Panels",
    status: "available",
    description:
      "Respiratory pathogen panels detecting a broad range of viral and bacterial respiratory pathogens.",
    badges: ["RPP", "Multiplex", "LITE / RPP / PLUS"],
    ctaLabel: "Request information",
  },
  {
    id: "uti-panel",
    slug: "infeccion-urinaria-uti",
    title: "UTI Panels (LITE / UTI / PLUS, w/AMR)",
    categories: ["infecciosas"],
    categoryLabel: "Infectious Disease Panels",
    status: "available",
    description:
      "Urinary tract infection panels with antimicrobial resistance (AMR) markers to guide treatment.",
    badges: ["UTI", "AMR", "LITE / UTI / PLUS"],
    ctaLabel: "Request information",
  },
  {
    id: "wound-panel",
    slug: "heridas-wound",
    title: "Wound Panels (LITE / WOUND / PLUS)",
    categories: ["infecciosas"],
    categoryLabel: "Infectious Disease Panels",
    status: "available",
    description:
      "Wound infection panels identifying pathogens and resistance markers to guide treatment.",
    badges: ["Wound", "AMR", "LITE / WOUND / PLUS"],
    ctaLabel: "Request information",
  },
  {
    id: "vaginitis-panel",
    slug: "vaginitis",
    title: "Vaginitis Panel",
    categories: ["infecciosas"],
    categoryLabel: "Infectious Disease Panels",
    status: "available",
    description:
      "Molecular panel for the common causes of vaginitis and vaginal infections.",
    badges: ["Vaginitis", "Molecular"],
    ctaLabel: "Request information",
  },
  {
    id: "hpv-panel",
    slug: "vph-hpv",
    title: "HPV (Human Papillomavirus) Panel",
    categories: ["infecciosas"],
    categoryLabel: "Infectious Disease Panels",
    status: "available",
    description:
      "Human Papillomavirus (HPV) genotyping panel, including high-risk types.",
    badges: ["HPV", "Genotyping", "High-risk types"],
    ctaLabel: "Request information",
  },

  /* ─── E. Clinical Genomics & Inherited Disorders ───────────────────── */
  {
    id: "clinical-wgs",
    slug: "genoma-completo",
    title: "Clinical Whole Genome Sequencing",
    categories: ["genomica"],
    categoryLabel: "Clinical Genomics & Inherited Disorders",
    status: "available",
    description:
      "Clinical whole genome sequencing for broad diagnostic evaluation of rare and inherited disease.",
    badges: ["WGS", "Diagnostic"],
    ctaLabel: "Request information",
  },
  {
    id: "clinical-wes",
    slug: "exoma-completo",
    title: "Clinical Whole Exome Sequencing",
    categories: ["genomica"],
    categoryLabel: "Clinical Genomics & Inherited Disorders",
    status: "available",
    description:
      "Clinical whole exome sequencing analyzing coding regions for inherited and undiagnosed conditions.",
    badges: ["WES", "Diagnostic"],
    ctaLabel: "Request information",
  },
  {
    id: "inherited-disorders",
    slug: "trastornos-hereditarios",
    title: "Inherited Disorders Panel",
    categories: ["genomica"],
    categoryLabel: "Clinical Genomics & Inherited Disorders",
    status: "available",
    description: "Panel for a broad range of inherited genetic disorders.",
    badges: ["NGS", "Inherited disease"],
    ctaLabel: "Request information",
  },
  {
    id: "immune-panel",
    slug: "inmunologico",
    title: "Immune Panel (Immunological / Sarcoidosis / Immunodeficiency)",
    categories: ["genomica"],
    categoryLabel: "Clinical Genomics & Inherited Disorders",
    status: "available",
    description:
      "Immune panel covering immunological disorders, sarcoidosis and immunodeficiencies.",
    badges: ["Immunology", "Immunodeficiency"],
    ctaLabel: "Request information",
  },
  {
    id: "dementia-neuro",
    slug: "demencia-neurologico",
    title: "Dementia & Neurological Disorders Panel",
    categories: ["genomica"],
    categoryLabel: "Clinical Genomics & Inherited Disorders",
    status: "available",
    description: "Panel for dementia and hereditary neurological disorders.",
    badges: ["Neurology", "Dementia"],
    ctaLabel: "Request information",
  },
  {
    id: "eye-retinopathies",
    slug: "enfermedades-oculares-retinopatias",
    title: "Eye Disorders & Retinopathies Panel",
    categories: ["genomica"],
    categoryLabel: "Clinical Genomics & Inherited Disorders",
    status: "available",
    description: "Panel for inherited eye disorders and retinopathies.",
    badges: ["Ophthalmology", "Retinopathies"],
    ctaLabel: "Request information",
  },
  {
    id: "adult-metabolic",
    slug: "metabolico-adultos",
    title: "Adult Metabolic Disorders Panel",
    categories: ["genomica"],
    categoryLabel: "Clinical Genomics & Inherited Disorders",
    status: "available",
    description:
      "Panel for inherited metabolic disorders presenting in adults.",
    badges: ["Metabolic", "Adult onset"],
    ctaLabel: "Request information",
  },
  {
    id: "developmental-metabolic",
    slug: "metabolico-desarrollo",
    title: "Developmental Metabolic Disorders Panel",
    categories: ["genomica"],
    categoryLabel: "Clinical Genomics & Inherited Disorders",
    status: "available",
    description:
      "Panel for developmental and pediatric-onset metabolic disorders.",
    badges: ["Metabolic", "Developmental"],
    ctaLabel: "Request information",
  },

  /* ─── New panels from documentation (not yet available) ────────────── */
  {
    id: "cardio-pulmonary",
    slug: "cardio-pulmonar",
    title: "Cardio-Pulmonary Disorders Panel",
    categories: ["genomica"],
    categoryLabel: "Clinical Genomics & Inherited Disorders",
    status: "upon-request",
    description:
      "Germline NGS panel for inherited cardio-pulmonary disease — cardiomyopathies, cardiac arrhythmias, congenital heart disease, Noonan syndrome, pulmonary fibrosis, bronchiectasis, primary ciliary dyskinesia and aortic aneurysm/dissection.",
    badges: ["NGS", "Cardiac", "Pulmonary"],
    ctaLabel: "Available upon request",
  },
  {
    id: "thyroid-panel",
    slug: "tiroides",
    title: "Thyroid Disorders & Thyroid Cancer Panel",
    categories: ["genomica"],
    categoryLabel: "Clinical Genomics & Inherited Disorders",
    status: "upon-request",
    description:
      "Germline NGS panel for thyroid-related disorders — dyshormonogenesis, hyperthyroidism, hypothyroidism and hereditary predisposition to thyroid cancers.",
    badges: ["NGS", "Thyroid", "Endocrinology"],
    ctaLabel: "Available upon request",
  },
  {
    id: "hearing-impairment",
    slug: "hipoacusia",
    title: "Hearing Impairment Panel",
    categories: ["genomica"],
    categoryLabel: "Clinical Genomics & Inherited Disorders",
    status: "upon-request",
    description:
      "Germline NGS panel for syndromic and non-syndromic hereditary hearing loss, covering autosomal recessive, autosomal dominant and X-linked forms of deafness.",
    badges: ["NGS", "Audiology", "Syndromic / non-syndromic"],
    ctaLabel: "Available upon request",
  },
  {
    id: "hematological-panel",
    slug: "hematologico",
    title: "Hematological Panel",
    categories: ["genomica"],
    categoryLabel: "Clinical Genomics & Inherited Disorders",
    status: "upon-request",
    description:
      "Comprehensive germline NGS panel for inherited blood and lymphatic-system disease — anemias, coagulopathies, thrombotic microangiopathies, bone-marrow-failure syndromes and hematologic malignancy predisposition.",
    badges: ["NGS", "Hematology"],
    ctaLabel: "Available upon request",
  },
  {
    id: "mitochondrial-disorders",
    slug: "mitocondrial",
    title: "Mitochondrial Disorders (Nuclear-Mito) Panel",
    categories: ["genomica"],
    categoryLabel: "Clinical Genomics & Inherited Disorders",
    status: "upon-request",
    description:
      "Germline NGS panel focused on nuclear-DNA variations that impair mitochondrial function, including oxidative-phosphorylation (complex I–V) deficiencies affecting multiple organ systems.",
    badges: ["NGS", "Mitochondrial", "Nuclear DNA"],
    ctaLabel: "Available upon request",
  },
  {
    id: "neuromuscular-disease",
    slug: "neuromuscular",
    title: "Neuromuscular Disease Panel",
    categories: ["genomica"],
    categoryLabel: "Clinical Genomics & Inherited Disorders",
    status: "upon-request",
    description:
      "Germline NGS panel for hereditary neuromuscular disease — Charcot-Marie-Tooth disease, hereditary spastic paraplegia, amyotrophic lateral sclerosis (ALS), spinal muscular atrophy and inherited neuropathies.",
    badges: ["NGS", "Neuromuscular"],
    ctaLabel: "Available upon request",
  },
  {
    id: "musculoskeletal-disease",
    slug: "musculoesqueletico",
    title: "Musculoskeletal Disease Panel",
    categories: ["genomica"],
    categoryLabel: "Clinical Genomics & Inherited Disorders",
    status: "upon-request",
    description:
      "Germline NGS panel for hereditary musculoskeletal disease — limb-girdle and other muscular dystrophies, myopathies, chondrodysplasias, Ehlers-Danlos syndrome and osteogenesis imperfecta.",
    badges: ["NGS", "Musculoskeletal"],
    ctaLabel: "Available upon request",
  },
  {
    id: "respiratory-genetic",
    slug: "respiratorio-genetico",
    title: "Comprehensive Respiratory Disease Panel",
    categories: ["genomica"],
    categoryLabel: "Clinical Genomics & Inherited Disorders",
    status: "upon-request",
    description:
      "Germline NGS panel for hereditary respiratory disease and predisposition — including asthma, COPD, pulmonary fibrosis and autoimmune/autoinflammatory lung involvement. (Distinct from the infectious Respiratory Pathogen Panels.)",
    badges: ["NGS", "Respiratory", "Hereditary"],
    ctaLabel: "Available upon request",
  },
  {
    id: "autism-neurodevelopment",
    slug: "autismo-neurodesarrollo",
    title: "Autism Spectrum Disorder (ASD) Panel",
    categories: ["genomica"],
    categoryLabel: "Clinical Genomics & Inherited Disorders",
    status: "upon-request",
    description:
      "Germline NGS panel analyzing more than 100 genes reported in autism spectrum disorder and neurodevelopmental conditions, to support diagnostic evaluation of social, behavioral and communication differences.",
    badges: ["NGS", "Neurodevelopment", "100+ genes"],
    ctaLabel: "Available upon request",
  },

  /* ─── F. Personalized Health, Metabolism & Microbiota ──────────────── */
  {
    id: "diabetes-type2",
    slug: "prediccion-diabetes-tipo2",
    title: "Type II Diabetes Mellitus Prediction Panel",
    categories: ["personalizada"],
    categoryLabel: "Personalized Health, Metabolism & Microbiota",
    status: "available",
    description:
      "Genetic prediction panel for Type II Diabetes Mellitus risk and predisposition.",
    badges: ["Diabetes", "Risk prediction"],
    ctaLabel: "Request information",
  },
  {
    id: "ancestry-heritage",
    slug: "ancestria-herencia",
    title: "Ancestry and Heritage",
    categories: ["personalizada"],
    categoryLabel: "Personalized Health, Metabolism & Microbiota",
    status: "available",
    description: "Explore your genetic ancestry and heritage.",
    badges: ["Ancestry", "Heritage"],
    ctaLabel: "Request information",
  },
  {
    id: "microbiota-intestinal",
    slug: "microbiota-intestinal",
    title: "Intestinal Microbiota Panel",
    shortTitle: "Intestinal Microbiota",
    categories: ["personalizada"],
    categoryLabel: "Personalized Health, Metabolism & Microbiota",
    status: "available",
    description:
      "Analysis of the gut bacterial ecosystem to assess microbial diversity, dysbiosis and guide nutrition and digestive-health strategies.",
    badges: ["16S sequencing", "Microbiome", "Digestive health"],
    ctaLabel: "View study",
    href: "/productos/microbiota-intestinal",
  },
];
