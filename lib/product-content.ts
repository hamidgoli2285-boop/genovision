/**
 * Structured, per-product detail-page content.
 *
 * Built from the approved clinical documentation for each study. Only sections
 * with a documented source are included; missing sections are intentionally
 * omitted (never fabricated). Products without a dedicated document fall back
 * to a light page rendered from the catalog translation data.
 *
 * Supplier-identifying information is not included. Technical platform names
 * (NGS, Twist Exome 2.0, Illumina NovaSeq6000 / NovaSeq X Plus, DRAGEN, GRCh38,
 * ACMG SF v3.3) are retained where the source documents them.
 */

export type QA = { q: string; a: string };
export type CondGroup = { label: string; items: string[] };
export type InterpItem = { label: string; text: string };

export type ProductPage = {
  summary?: string;
  overview?: string;
  whoShould?: string[];
  indications?: string[];
  conditions?: { intro?: string; groups?: CondGroup[]; note?: string };
  technology?: string;
  sample?: string;
  turnaround?: string;
  workflow?: string[];
  interpretation?: InterpItem[];
  limitations?: string;
  faq?: QA[];
};

export type ProductContent = { es: ProductPage; en: ProductPage };

/* ── Shared blocks for germline NGS panels (documented across the brochures) ── */

const TECH_NGS_ES =
  "El análisis se realiza mediante secuenciación de nueva generación (NGS) basada en captura de exoma (Twist Exome 2.0) en plataforma Illumina NovaSeq6000, evaluando las variantes germinales del paciente respecto al genoma humano de referencia.";
const TECH_NGS_EN =
  "Analysis is performed by next-generation sequencing (NGS) using exome capture (Twist Exome 2.0) on the Illumina NovaSeq6000 platform, evaluating the patient's germline variants against the human reference genome.";

const INTERP_ES: InterpItem[] = [
  {
    label: "Resultado positivo",
    text: "Se identificó una variante patogénica o probablemente patogénica asociada con la condición evaluada, lo que permite orientar el manejo, la vigilancia y la evaluación de los familiares.",
  },
  {
    label: "Variante de significado incierto (VUS)",
    text: "Se detectó un cambio genético que aún no se asocia claramente con la enfermedad; su significado es incierto y habitualmente no se utiliza para tomar decisiones clínicas. Puede reclasificarse a medida que aumenta la evidencia.",
  },
  {
    label: "Resultado negativo",
    text: "No se identificaron variantes asociadas en los genes analizados. Un resultado negativo no descarta por completo una causa genética no cubierta por el panel.",
  },
];
const INTERP_EN: InterpItem[] = [
  {
    label: "Positive result",
    text: "A pathogenic or likely pathogenic variant associated with the evaluated condition was identified, which can help guide management, surveillance and evaluation of family members.",
  },
  {
    label: "Variant of uncertain significance (VUS)",
    text: "A genetic change was detected that is not yet clearly associated with the disease; its significance is uncertain and it is usually not used to make clinical decisions. It may be reclassified as evidence accumulates.",
  },
  {
    label: "Negative result",
    text: "No associated variants were identified in the genes analyzed. A negative result does not completely rule out a genetic cause not covered by the panel.",
  },
];

const LIMITS_ES =
  "La secuenciación de nueva generación (NGS) no detecta de forma fiable expansiones por repetición, grandes deleciones o duplicaciones ni variantes en número de copias, y no analiza variantes en regiones reguladoras o intrónicas fuera de los exones. Ciertos reordenamientos estructurales, el mosaicismo de bajo nivel y las regiones con pseudogenes pueden no detectarse. Se recomienda asesoramiento genético para interpretar los resultados.";
const LIMITS_EN =
  "Next-generation sequencing (NGS) does not reliably detect repeat expansions, large deletions or duplications, or copy-number variants, and does not analyze variants in regulatory or intronic regions outside the exons. Certain structural rearrangements, low-level mosaicism and regions with pseudogenes may not be detected. Genetic counseling is recommended to interpret the results.";

/** Standard germline-panel skeleton shared by most disease panels. */
function germlinePanel(es: Partial<ProductPage>, en: Partial<ProductPage>): ProductContent {
  return {
    es: {
      technology: TECH_NGS_ES,
      interpretation: INTERP_ES,
      limitations: LIMITS_ES,
      ...es,
    },
    en: {
      technology: TECH_NGS_EN,
      interpretation: INTERP_EN,
      limitations: LIMITS_EN,
      ...en,
    },
  };
}

export const PRODUCT_CONTENT: Record<string, ProductContent> = {
  /* ─── Comprehensive Pharmacogenomics (PGx) ─────────────────────────── */
  "comprehensive-pgx": {
    es: {
      overview:
        "La farmacogenómica estudia cómo el perfil genético influye en la respuesta a los medicamentos: quién se beneficia, quién no responde y quién puede presentar reacciones adversas. Este panel evalúa variantes en genes relacionados con el metabolismo y la respuesta a fármacos para apoyar decisiones de prescripción más personalizadas.",
      whoShould: [
        "Pacientes que inician o ajustan tratamientos en áreas cardiovascular, de dolor, psiquiátrica, neurológica u oncológica",
        "Personas con antecedentes de reacciones adversas o falta de respuesta a medicamentos",
        "Médicos que buscan orientar la selección y la dosis de un fármaco",
      ],
      indications: [
        "Optimización de la terapia farmacológica y de la dosis",
        "Prevención de reacciones adversas a medicamentos",
        "Apoyo a la prescripción en enfermedad cardiovascular, manejo del dolor, condiciones psiquiátricas, neurología, oncología y asma",
      ],
      conditions: {
        intro:
          "El panel evalúa genes del sistema del citocromo P450 (CYP), responsables de metabolizar una gran proporción de los fármacos de prescripción, junto con otros genes de respuesta farmacológica.",
        groups: [
          {
            label: "Genes representativos",
            items: [
              "CYP2D6",
              "CYP2C19",
              "CYP2C9",
              "CYP3A4 / CYP3A5",
              "VKORC1",
              "TPMT",
              "SLCO1B1",
              "DPYD-relacionados y otros genes de respuesta a fármacos",
            ],
          },
        ],
        note:
          "La FDA incluye información farmacogenómica en la etiqueta de aproximadamente 200 medicamentos.",
      },
      technology:
        "Análisis de variantes (SNP) en genes relacionados con el metabolismo y la respuesta a los medicamentos, con especial atención al sistema del citocromo P450 (CYP).",
      interpretation: [
        {
          label: "Metabolizador (fenotipo)",
          text: "El informe estima cómo el paciente metaboliza determinados fármacos y ofrece orientación sobre dosis, posibles efectos secundarios o diferencias de efectividad.",
        },
      ],
      limitations:
        "El informe de farmacogenómica describe cómo el organismo metaboliza los fármacos y es solo uno de los componentes de la respuesta a un medicamento. Las reacciones pueden deberse a otros mecanismos —como hipersensibilidad (alergias), intolerancia o interacciones farmacológicas— por lo que debe utilizarse junto con la historia clínica y el criterio del profesional de salud.",
      faq: [
        {
          q: "¿La farmacogenómica indica qué medicamento tomar?",
          a: "No sustituye el juicio clínico. Aporta información sobre cómo el paciente puede metabolizar y responder a ciertos fármacos, que el médico integra con la historia clínica.",
        },
        {
          q: "¿Con qué frecuencia se repite el estudio?",
          a: "El perfil genético no cambia, por lo que en general el resultado es útil a lo largo del tiempo para distintas decisiones terapéuticas.",
        },
      ],
    },
    en: {
      overview:
        "Pharmacogenomics studies how a person's genetic profile influences their response to medications — who benefits, who does not respond and who may experience adverse reactions. This panel evaluates variants in drug-metabolism and drug-response genes to support more personalized prescribing decisions.",
      whoShould: [
        "Patients starting or adjusting therapy across cardiovascular, pain, psychiatric, neurology or oncology care",
        "People with a history of adverse drug reactions or lack of response to medications",
        "Physicians seeking to guide drug selection and dosing",
      ],
      indications: [
        "Optimization of drug therapy and dosing",
        "Prevention of adverse drug reactions",
        "Prescribing support across cardiovascular disease, pain management, psychiatric conditions, neurology, oncology and asthma",
      ],
      conditions: {
        intro:
          "The panel evaluates cytochrome P450 (CYP) system genes — which metabolize a large proportion of prescription drugs — along with other drug-response genes.",
        groups: [
          {
            label: "Representative genes",
            items: [
              "CYP2D6",
              "CYP2C19",
              "CYP2C9",
              "CYP3A4 / CYP3A5",
              "VKORC1",
              "TPMT",
              "SLCO1B1",
              "DPYD-related and other drug-response genes",
            ],
          },
        ],
        note:
          "The FDA includes pharmacogenomic information on the labels of roughly 200 medications.",
      },
      technology:
        "Analysis of variants (SNPs) in genes related to drug metabolism and response, with particular focus on the cytochrome P450 (CYP) system.",
      interpretation: [
        {
          label: "Metabolizer (phenotype)",
          text: "The report estimates how the patient metabolizes certain drugs and offers guidance on dose, possible side effects or differences in effectiveness.",
        },
      ],
      limitations:
        "The pharmacogenomic report describes how the body metabolizes drugs and is only one component of a person's response to a medication. Reactions may be caused by other mechanisms — such as hypersensitivity (allergies), intolerance or drug interactions — so it must be used together with the clinical history and the health-care provider's judgment.",
      faq: [
        {
          q: "Does pharmacogenomics tell me which medication to take?",
          a: "It does not replace clinical judgment. It provides information on how a patient may metabolize and respond to certain drugs, which the physician integrates with the clinical history.",
        },
        {
          q: "How often is the test repeated?",
          a: "The genetic profile does not change, so the result is generally useful over time for different therapeutic decisions.",
        },
      ],
    },
  },

  /* ─── NIPT ─────────────────────────────────────────────────────────── */
  "nipt": {
    es: {
      overview:
        "El tamizaje prenatal no invasivo (NIPT/NIPS) es una técnica de cribado que detecta anomalías cromosómicas en el feto en desarrollo. Durante el embarazo, fragmentos de ADN fetal circulan en la sangre materna; desde la semana 10 de gestación su cantidad es suficiente para un resultado altamente específico y sensible.",
      whoShould: [
        "Personas embarazadas a partir de la semana 10 que desean un cribado seguro de aneuploidías",
        "Embarazos en los que se busca evitar el riesgo de procedimientos invasivos",
        "Quienes desean conocer el sexo fetal junto con el cribado cromosómico",
      ],
      indications: [
        "Cribado de trisomía 21 (síndrome de Down), 18 (Edwards) y 13 (Patau)",
        "Evaluación de aneuploidías de los cromosomas sexuales",
        "Detección de microdeleciones y grandes deleciones bajo solicitud médica",
      ],
      conditions: {
        groups: [
          {
            label: "Evaluado",
            items: [
              "Trisomía 21 (síndrome de Down)",
              "Trisomía 18 (síndrome de Edwards)",
              "Trisomía 13 (síndrome de Patau)",
              "Aneuploidías de cromosomas sexuales",
              "Sexo fetal",
              "Microdeleciones (bajo solicitud)",
            ],
          },
        ],
      },
      technology:
        "Análisis del ADN fetal libre circulante presente en la sangre materna mediante secuenciación en plataforma Illumina NovaSeq6000.",
      sample:
        "Una muestra de sangre materna, tomada a partir de la semana 10 de gestación.",
      interpretation: [
        {
          label: "Alto rendimiento",
          text: "Aproximadamente 99% de sensibilidad y 95% de especificidad para las trisomías, incluso con fracciones fetales bajas y en embarazos gemelares.",
        },
        {
          label: "Confirmación",
          text: "Todo resultado que indique la presencia de una anomalía cromosómica debe confirmarse mediante amniocentesis y cariotipo.",
        },
      ],
      limitations:
        "El NIPT es una prueba de tamizaje, no diagnóstica. Los resultados positivos requieren confirmación mediante pruebas diagnósticas (amniocentesis y cariotipo).",
      faq: [
        {
          q: "¿Es seguro para el embarazo?",
          a: "Sí. Es una técnica no invasiva que solo requiere una muestra de sangre materna, sin riesgo de aborto.",
        },
        {
          q: "¿Desde cuándo puede realizarse?",
          a: "A partir de la semana 10 de gestación, cuando hay suficiente ADN fetal en la sangre materna.",
        },
      ],
    },
    en: {
      overview:
        "Non-invasive prenatal testing (NIPT/NIPS) is a screening technique that detects chromosomal abnormalities in the developing fetus. During pregnancy, fragments of fetal DNA circulate in the maternal blood; from week 10 of gestation their amount is sufficient for a highly specific and sensitive result.",
      whoShould: [
        "Pregnant people from week 10 who want safe aneuploidy screening",
        "Pregnancies where invasive-procedure risk is best avoided",
        "Those who wish to learn fetal sex alongside chromosomal screening",
      ],
      indications: [
        "Screening for trisomy 21 (Down syndrome), 18 (Edwards) and 13 (Patau)",
        "Assessment of sex-chromosome aneuploidies",
        "Detection of microdeletions and large deletions on physician request",
      ],
      conditions: {
        groups: [
          {
            label: "Assessed",
            items: [
              "Trisomy 21 (Down syndrome)",
              "Trisomy 18 (Edwards syndrome)",
              "Trisomy 13 (Patau syndrome)",
              "Sex-chromosome aneuploidies",
              "Fetal sex",
              "Microdeletions (on request)",
            ],
          },
        ],
      },
      technology:
        "Analysis of cell-free fetal DNA circulating in maternal blood by sequencing on the Illumina NovaSeq6000 platform.",
      sample: "A maternal blood sample, drawn from week 10 of gestation.",
      interpretation: [
        {
          label: "High performance",
          text: "Approximately 99% sensitivity and 95% specificity for trisomies, even at low fetal fractions and in twin pregnancies.",
        },
        {
          label: "Confirmation",
          text: "Any result indicating the presence of a chromosomal abnormality should be confirmed by amniocentesis and karyotyping.",
        },
      ],
      limitations:
        "NIPT is a screening test, not a diagnostic one. Positive results require confirmation by diagnostic testing (amniocentesis and karyotyping).",
      faq: [
        {
          q: "Is it safe for the pregnancy?",
          a: "Yes. It is a non-invasive technique requiring only a maternal blood sample, with no miscarriage risk.",
        },
        {
          q: "When can it be performed?",
          a: "From week 10 of gestation, when there is enough fetal DNA in the maternal blood.",
        },
      ],
    },
  },

  /* ─── Clinical Whole Genome Sequencing ─────────────────────────────── */
  "clinical-wgs": {
    es: {
      overview:
        "La secuenciación del genoma completo (WGS) está indicada para el diagnóstico de enfermedades genéticas raras en pacientes con fenotipos inexplicados y sospecha de un trastorno genético. Detecta y reporta variantes de un solo nucleótido (SNV), inserciones/deleciones (indels) y variantes estructurales en genes relacionados con el fenotipo del paciente.",
      whoShould: [
        "Pacientes con fenotipos inexplicados y sospecha de enfermedad genética",
        "Casos sin diagnóstico tras estudios previos",
        "Familias que requieren análisis del probando o análisis familiar (trío o dúo)",
      ],
      indications: [
        "Diagnóstico de enfermedades raras y no diagnosticadas",
        "Evaluación de fenotipos complejos codificados en formato HPO",
        "Análisis familiar (trío/dúo) según las muestras disponibles",
      ],
      conditions: {
        intro:
          "El análisis clínico cubre SNV, indels, variantes en número de copias (CNV), otros defectos estructurales en regiones codificantes e, incluidas inversiones y expansiones por repetición.",
        note:
          "Incluye un análisis opcional de hallazgos secundarios que evalúa las variantes de los 84 genes recomendados por la lista ACMG SF v3.3; el paciente y sus familiares pueden optar por incluirlo o no.",
      },
      technology:
        "El análisis se realiza mediante secuenciación con biblioteca PCR-free en la plataforma Illumina NovaSeq X Plus (2×150 pb, profundidad media mínima 30×), con procesamiento mediante DRAGEN sobre el genoma de referencia GRCh38. Las variantes se clasifican conforme a las guías ACMG-AMP.",
      sample:
        "Sangre total en tubo con EDTA; también se aceptan saliva, hisopados bucales y capa leucocitaria en dispositivos aprobados. Para análisis familiar se incluyen las muestras de los progenitores.",
      turnaround: "Aproximadamente 4 a 6 semanas desde la recepción de la muestra.",
      workflow: [
        "Recepción de la muestra y control de calidad del ADN",
        "Secuenciación del genoma completo (NGS)",
        "Alineamiento y llamada de variantes con DRAGEN",
        "Anotación, análisis e interpretación de variantes",
        "Curación por especialistas y firma del informe por un director médico",
      ],
      interpretation: [
        {
          label: "Variantes reportadas",
          text: "Se realiza interpretación clínica de SNV, indels y CNV; se reportan las variantes patogénicas (P) o probablemente patogénicas (LP) en un estado cigótico consistente con la enfermedad asociada.",
        },
        {
          label: "Estándar de clasificación",
          text: "Todas las variantes se clasifican según las guías ACMG-AMP, con soporte de referencias de la literatura.",
        },
      ],
      limitations:
        "El ensayo cubre aproximadamente el 95% del genoma humano y excluye regiones de alta homología (pseudogenes o duplicaciones segmentarias) y de baja complejidad; no está diseñado para detectar mosaicismo ni alteraciones de metilación. Las variantes que indican estado de portador para condiciones recesivas no se reportan de forma rutinaria.",
      faq: [
        {
          q: "¿Qué muestra se necesita?",
          a: "Sangre total (EDTA), saliva, hisopado bucal o capa leucocitaria recogidos en dispositivos aprobados.",
        },
        {
          q: "¿Puede analizarse a la familia?",
          a: "Sí. El estudio admite análisis del probando o análisis familiar en trío (probando y ambos progenitores) o dúo, según las muestras disponibles.",
        },
      ],
    },
    en: {
      overview:
        "Whole genome sequencing (WGS) is intended for the diagnosis of rare genetic disease in patients with unexplained phenotypes suspected of a genetic disorder. It detects and reports single-nucleotide variants (SNVs), insertions/deletions (indels) and structural variants in genes related to the patient's phenotype.",
      whoShould: [
        "Patients with unexplained phenotypes suspected of genetic disease",
        "Cases that remain undiagnosed after prior testing",
        "Families requiring proband-only or family-based (trio/duo) analysis",
      ],
      indications: [
        "Diagnosis of rare and undiagnosed disease",
        "Evaluation of complex phenotypes coded in HPO format",
        "Family-based (trio/duo) analysis depending on available specimens",
      ],
      conditions: {
        intro:
          "Clinical analysis covers SNVs, indels, copy-number variants (CNVs) and other structural defects in coding regions, including inversions and repeat expansions.",
        note:
          "Includes an optional secondary-findings analysis evaluating variants in the 84 genes recommended by the ACMG SF v3.3 list; patients and family members may opt in or out.",
      },
      technology:
        "Analysis is performed by PCR-free library sequencing on the Illumina NovaSeq X Plus platform (2×150 bp, ≥30× mean depth), with DRAGEN processing against the GRCh38 reference genome. Variants are classified per the ACMG-AMP guidelines.",
      sample:
        "Whole blood in an EDTA tube; saliva, buccal swabs and buffy coats collected in approved devices are also accepted. For family-based analysis, parental samples are included.",
      turnaround: "Approximately 4 to 6 weeks from sample receipt.",
      workflow: [
        "Sample receipt and DNA quality control",
        "Whole genome sequencing (NGS)",
        "Alignment and variant calling with DRAGEN",
        "Variant annotation, analysis and interpretation",
        "Curation by specialists and report sign-off by a medical director",
      ],
      interpretation: [
        {
          label: "Reported variants",
          text: "Clinical interpretation is performed on SNVs, indels and CNVs; pathogenic (P) or likely pathogenic (LP) variants in a zygotic state consistent with the associated disease are reported.",
        },
        {
          label: "Classification standard",
          text: "All variants are classified per the ACMG-AMP guidelines, supported by literature references.",
        },
      ],
      limitations:
        "The assay covers approximately 95% of the human genome and excludes high-homology regions (pseudogenes or segmental duplications) and low-complexity stretches; it is not designed to detect mosaicism or methylation abnormalities. Variants indicating carrier status for recessive conditions are not routinely reported.",
      faq: [
        {
          q: "What sample is needed?",
          a: "Whole blood (EDTA), saliva, buccal swab or buffy coat collected in approved devices.",
        },
        {
          q: "Can the family be analyzed?",
          a: "Yes. The study supports proband-only analysis or family-based analysis as a trio (proband and both parents) or duo, depending on available specimens.",
        },
      ],
    },
  },

  /* ─── Immune Panel ─────────────────────────────────────────────────── */
  "immune-panel": germlinePanel(
    {
      overview:
        "Panel que investiga variantes germinales relacionadas con trastornos autoinmunes, sarcoidosis e inmunodeficiencias congénitas (inborn). También puede ser relevante ante COVID persistente (long COVID), infecciones virales, fúngicas o bacterianas recurrentes y alergias graves.",
      whoShould: [
        "Personas con antecedente personal o familiar de infecciones frecuentes, fiebres o erupciones",
        "Infecciones recurrentes o difíciles de tratar, que requieren hospitalización o antibióticos IV",
        "Sospecha de inmunodeficiencia primaria o trastorno autoinmune",
      ],
      indications: [
        "Sospecha de inmunodeficiencia primaria (congénita)",
        "Trastornos autoinmunes y sarcoidosis",
        "Infecciones recurrentes, long COVID o alergias graves",
      ],
      conditions: {
        groups: [
          {
            label: "Áreas cubiertas",
            items: [
              "Inmunodeficiencias primarias (inborn)",
              "Trastornos autoinmunes",
              "Sarcoidosis",
              "Infecciones recurrentes / long COVID",
              "Alergias graves",
            ],
          },
        ],
      },
    },
    {
      overview:
        "A panel investigating germline variants related to autoimmune disorders, sarcoidosis and inborn immunodeficiencies. It may also be relevant with long COVID, recurrent viral, fungal or bacterial infections and severe allergies.",
      whoShould: [
        "People with a personal or family history of frequent infections, fevers or rash",
        "Recurrent or difficult-to-treat infections requiring hospitalization or IV antibiotics",
        "Suspected primary immunodeficiency or autoimmune disorder",
      ],
      indications: [
        "Suspected primary (inborn) immunodeficiency",
        "Autoimmune disorders and sarcoidosis",
        "Recurrent infections, long COVID or severe allergies",
      ],
      conditions: {
        groups: [
          {
            label: "Areas covered",
            items: [
              "Primary (inborn) immunodeficiencies",
              "Autoimmune disorders",
              "Sarcoidosis",
              "Recurrent infections / long COVID",
              "Severe allergies",
            ],
          },
        ],
      },
    }
  ),

  /* ─── Dementia & Neurological Disorders Panel (merged: ADP / Neuro / Comprehensive Neuro) ─ */
  "dementia-neuro": germlinePanel(
    {
      overview:
        "Panel para trastornos neurológicos hereditarios. Los trastornos neurológicos afectan el cerebro, la médula espinal y los nervios; en muchos casos tienen una base genética y se presentan en varios miembros de una familia. Disponible en un nivel enfocado en Alzheimer, demencia y Parkinson (ADP) y en un nivel integral con más de 400 genes.",
      whoShould: [
        "Personas con antecedente personal o familiar de trastornos neurológicos",
        "Cuando la condición afecta a más de un familiar, requiere hospitalización o genera discapacidad prolongada",
        "Apoyo al diagnóstico y a la orientación del tratamiento",
      ],
      indications: [
        "Confirmación o apoyo diagnóstico de trastornos neurológicos hereditarios",
        "Orientación del manejo y de estrategias preventivas",
        "Antecedente familiar de enfermedad neurodegenerativa",
      ],
      conditions: {
        intro: "El panel cubre un amplio espectro de condiciones neurológicas hereditarias.",
        groups: [
          {
            label: "Condiciones representativas",
            items: [
              "Enfermedad de Alzheimer",
              "Demencia frontotemporal (DFT)",
              "Enfermedad de Parkinson",
              "Ataxias",
              "Enfermedad de Charcot-Marie-Tooth (CMT)",
              "Paraplejía espástica",
              "Esclerosis lateral amiotrófica (ELA)",
              "Epilepsia",
            ],
          },
        ],
        note:
          "Niveles disponibles: enfocado (Alzheimer, demencia y Parkinson) e integral con más de 400 genes.",
      },
    },
    {
      overview:
        "A panel for hereditary neurological disorders. Neurological disorders affect the brain, spinal cord and nerves; in many cases they have a genetic basis and occur in several family members. Available in a focused Alzheimer, dementia and Parkinson (ADP) tier and a comprehensive tier of 400+ genes.",
      whoShould: [
        "People with a personal or family history of neurological disorders",
        "When the condition affects more than one family member, requires hospitalization or causes long-term disability",
        "Support for diagnosis and treatment guidance",
      ],
      indications: [
        "Confirmation or diagnostic support of hereditary neurological disorders",
        "Guidance of management and preventive strategies",
        "Family history of neurodegenerative disease",
      ],
      conditions: {
        intro: "The panel covers a broad spectrum of hereditary neurological conditions.",
        groups: [
          {
            label: "Representative conditions",
            items: [
              "Alzheimer's disease",
              "Frontotemporal dementia (FTD)",
              "Parkinson's disease",
              "Ataxias",
              "Charcot-Marie-Tooth disease (CMT)",
              "Spastic paraplegia",
              "Amyotrophic lateral sclerosis (ALS)",
              "Epilepsy",
            ],
          },
        ],
        note: "Tiers available: focused (Alzheimer, dementia and Parkinson) and comprehensive with 400+ genes.",
      },
    }
  ),

  /* ─── Eye Disorders & Retinopathies ────────────────────────────────── */
  "eye-retinopathies": germlinePanel(
    {
      overview:
        "Panel que investiga variantes germinales relacionadas con trastornos oculares hereditarios y retinopatías. La genética desempeña un papel principal en la mayoría de estas condiciones.",
      whoShould: [
        "Personas con antecedente personal o familiar de trastornos oculares hereditarios",
        "Pérdida visual de causa no aclarada con sospecha de origen genético",
      ],
      indications: [
        "Apoyo diagnóstico de retinopatías y distrofias retinianas hereditarias",
        "Evaluación de trastornos oculares congénitos o de inicio temprano",
      ],
      conditions: {
        groups: [
          {
            label: "Condiciones representativas",
            items: [
              "Retinosis pigmentaria",
              "Ceguera nocturna y cromática",
              "Nistagmo",
              "Degeneración macular asociada a la edad",
              "Cataratas",
              "Glaucomas",
              "Microftalmía",
            ],
          },
        ],
      },
    },
    {
      overview:
        "A panel investigating germline variants related to inherited eye disorders and retinopathies. Genetics plays a leading role in most of these conditions.",
      whoShould: [
        "People with a personal or family history of inherited eye disorders",
        "Unexplained vision loss with suspected genetic origin",
      ],
      indications: [
        "Diagnostic support for inherited retinopathies and retinal dystrophies",
        "Evaluation of congenital or early-onset eye disorders",
      ],
      conditions: {
        groups: [
          {
            label: "Representative conditions",
            items: [
              "Retinitis pigmentosa",
              "Night and color blindness",
              "Nystagmus",
              "Age-related macular degeneration",
              "Cataract",
              "Glaucoma",
              "Microphthalmia",
            ],
          },
        ],
      },
    }
  ),

  /* ─── Adult Metabolic, Wound Care & Healing ────────────────────────── */
  "adult-metabolic": germlinePanel(
    {
      overview:
        "Panel integral diseñado para identificar variantes génicas asociadas con trastornos metabólicos de inicio en la adultez y con el cuidado y la cicatrización de heridas.",
      whoShould: [
        "Adultos con antecedente personal o familiar de trastornos metabólicos",
        "Personas con complicaciones vasculares asociadas a la diabetes o dificultades de cicatrización",
      ],
      indications: [
        "Evaluación de trastornos metabólicos de inicio en la adultez",
        "Apoyo en complicaciones vasculares y de cicatrización asociadas a la diabetes",
      ],
      conditions: {
        groups: [
          {
            label: "Condiciones representativas",
            items: [
              "Hipercolesterolemia e hiperlipidemia",
              "Hipertensión",
              "Diabetes",
              "Gota",
              "Porfiria",
              "Hemocromatosis",
              "Pie diabético y complicaciones vasculares",
              "Trastornos de cicatrización de heridas",
            ],
          },
        ],
      },
    },
    {
      overview:
        "A comprehensive panel designed to identify gene variants associated with adult-onset metabolic disorders and with wound care and healing.",
      whoShould: [
        "Adults with a personal or family history of metabolic disorders",
        "People with diabetes-associated vascular complications or wound-healing difficulties",
      ],
      indications: [
        "Evaluation of adult-onset metabolic disorders",
        "Support in diabetes-associated vascular and wound-healing complications",
      ],
      conditions: {
        groups: [
          {
            label: "Representative conditions",
            items: [
              "Hypercholesterolemia and hyperlipidemia",
              "Hypertension",
              "Diabetes",
              "Gout",
              "Porphyria",
              "Hemochromatosis",
              "Diabetic foot and vascular complications",
              "Wound-healing disorders",
            ],
          },
        ],
      },
    }
  ),

  /* ─── Developmental Metabolic Disorders (Met) ──────────────────────── */
  "developmental-metabolic": germlinePanel(
    {
      overview:
        "Panel que identifica variantes en genes asociados con trastornos metabólicos del desarrollo — un grupo de trastornos genéticos que afectan las vías metabólicas del organismo, causados por mutaciones en genes clave de estas rutas.",
      whoShould: [
        "Pacientes pediátricos o con inicio en el desarrollo y sospecha de trastorno metabólico",
        "Antecedente familiar de errores congénitos del metabolismo",
      ],
      indications: [
        "Apoyo diagnóstico de errores congénitos del metabolismo",
        "Evaluación de fenotipos metabólicos del desarrollo",
      ],
      conditions: {
        groups: [
          {
            label: "Grupos de trastornos",
            items: [
              "Aminoacidopatías",
              "Acidemias orgánicas",
              "Trastornos de depósito lisosomal",
              "Trastornos de la oxidación de ácidos grasos",
            ],
          },
        ],
      },
    },
    {
      overview:
        "A panel identifying variants in genes associated with developmental metabolic disorders — a group of genetic disorders affecting the body's metabolic pathways, caused by mutations in key genes of these routes.",
      whoShould: [
        "Pediatric or developmental-onset patients with suspected metabolic disorder",
        "Family history of inborn errors of metabolism",
      ],
      indications: [
        "Diagnostic support for inborn errors of metabolism",
        "Evaluation of developmental metabolic phenotypes",
      ],
      conditions: {
        groups: [
          {
            label: "Disorder groups",
            items: [
              "Aminoacidopathies",
              "Organic acidemias",
              "Lysosomal storage disorders",
              "Fatty-acid oxidation disorders",
            ],
          },
        ],
      },
    }
  ),

  /* ─── Type II Diabetes / Diabetes Panel ────────────────────────────── */
  "diabetes-type2": germlinePanel(
    {
      overview:
        "Panel que investiga variantes relacionadas con la diabetes mellitus tipo 1 y tipo 2, factores de riesgo genético y complicaciones multiorgánicas. La diabetes mellitus es una enfermedad metabólica caracterizada por niveles de glucosa inapropiadamente elevados (hiperglucemia).",
      whoShould: [
        "Personas con antecedente familiar de diabetes o de sus complicaciones",
        "Sospecha de formas monogénicas (MODY), neonatales o congénitas de diabetes",
      ],
      indications: [
        "Evaluación del riesgo y la predisposición a diabetes mellitus",
        "Apoyo al diagnóstico de MODY y de formas neonatales/congénitas",
        "Confirmación diagnóstica para orientar el plan de manejo",
      ],
      conditions: {
        intro:
          "Se han descrito alrededor de 250 variantes genéticas que contribuyen al riesgo de diabetes tipo 2; el panel también cubre formas monogénicas y de inicio temprano.",
        groups: [
          {
            label: "Formas evaluadas",
            items: [
              "Diabetes tipo 1 y tipo 2",
              "Diabetes del joven de inicio en la madurez (MODY)",
              "Diabetes neonatal / congénita",
              "Diabetes gestacional",
              "Complicaciones multiorgánicas",
            ],
          },
        ],
      },
    },
    {
      overview:
        "A panel investigating variants related to type 1 and type 2 diabetes mellitus, genetic risk factors and multi-organ complications. Diabetes mellitus is a metabolic disease characterized by inappropriately elevated glucose levels (hyperglycemia).",
      whoShould: [
        "People with a family history of diabetes or its complications",
        "Suspected monogenic (MODY), neonatal or congenital forms of diabetes",
      ],
      indications: [
        "Evaluation of risk and predisposition to diabetes mellitus",
        "Diagnostic support for MODY and neonatal/congenital forms",
        "Diagnostic confirmation to guide the management plan",
      ],
      conditions: {
        intro:
          "About 250 genetic variants have been described contributing to type 2 diabetes risk; the panel also covers monogenic and early-onset forms.",
        groups: [
          {
            label: "Forms assessed",
            items: [
              "Type 1 and type 2 diabetes",
              "Maturity-onset diabetes of the young (MODY)",
              "Neonatal / congenital diabetes",
              "Gestational diabetes",
              "Multi-organ complications",
            ],
          },
        ],
      },
    }
  ),

  /* ─── NEW: Cardio-Pulmonary Disorders Panel ────────────────────────── */
  "cardio-pulmonary": germlinePanel(
    {
      overview:
        "Panel que investiga variantes germinales relacionadas con enfermedades cardio-pulmonares hereditarias.",
      whoShould: [
        "Personas con antecedente personal o familiar de enfermedad cardio-pulmonar",
        "Cuando la condición afecta a más de un familiar, requiere hospitalización o genera discapacidad prolongada",
      ],
      indications: [
        "Apoyo diagnóstico de miocardiopatías, arritmias y cardiopatías congénitas hereditarias",
        "Evaluación de enfermedad pulmonar hereditaria y aneurisma/disección aórtica",
      ],
      conditions: {
        groups: [
          {
            label: "Condiciones representativas",
            items: [
              "Miocardiopatías",
              "Arritmias cardíacas y fibrilación auricular",
              "Cardiopatías congénitas",
              "Síndrome de Noonan",
              "Fibrosis pulmonar",
              "Bronquiectasias",
              "Discinesia ciliar primaria",
              "Aneurisma/disección aórtica",
              "Síndrome de hiper-IgE",
            ],
          },
        ],
      },
    },
    {
      overview: "A panel investigating germline variants related to inherited cardio-pulmonary disease.",
      whoShould: [
        "People with a personal or family history of cardio-pulmonary disease",
        "When the condition affects more than one family member, requires hospitalization or causes long-term disability",
      ],
      indications: [
        "Diagnostic support for inherited cardiomyopathies, arrhythmias and congenital heart disease",
        "Evaluation of inherited lung disease and aortic aneurysm/dissection",
      ],
      conditions: {
        groups: [
          {
            label: "Representative conditions",
            items: [
              "Cardiomyopathies",
              "Cardiac arrhythmias and atrial fibrillation",
              "Congenital heart disease",
              "Noonan syndrome",
              "Pulmonary fibrosis",
              "Bronchiectasis",
              "Primary ciliary dyskinesia",
              "Aortic aneurysm/dissection",
              "Hyper-IgE syndrome",
            ],
          },
        ],
      },
    }
  ),

  /* ─── NEW: Thyroid Disorders & Thyroid Cancer ──────────────────────── */
  "thyroid-panel": germlinePanel(
    {
      overview:
        "Panel que investiga variantes germinales relacionadas con trastornos tiroideos y con la predisposición hereditaria a cánceres de tiroides.",
      whoShould: [
        "Personas con antecedente personal o familiar de trastornos tiroideos",
        "Cuando la condición afecta a más de un familiar o es refractaria al tratamiento",
      ],
      indications: [
        "Apoyo diagnóstico de trastornos tiroideos hereditarios",
        "Evaluación de predisposición a cáncer de tiroides",
      ],
      conditions: {
        groups: [
          {
            label: "Condiciones representativas",
            items: [
              "Dishormonogénesis tiroidea",
              "Hipertiroidismo",
              "Hipotiroidismo",
              "Cánceres de tiroides",
              "Reducción secundaria de hormona tiroidea",
            ],
          },
        ],
      },
    },
    {
      overview:
        "A panel investigating germline variants related to thyroid disorders and hereditary predisposition to thyroid cancers.",
      whoShould: [
        "People with a personal or family history of thyroid disorders",
        "When the condition affects more than one family member or is refractory to treatment",
      ],
      indications: [
        "Diagnostic support for inherited thyroid disorders",
        "Evaluation of thyroid-cancer predisposition",
      ],
      conditions: {
        groups: [
          {
            label: "Representative conditions",
            items: [
              "Thyroid dyshormonogenesis",
              "Hyperthyroidism",
              "Hypothyroidism",
              "Thyroid cancers",
              "Secondary reduction of thyroid hormone",
            ],
          },
        ],
      },
    }
  ),

  /* ─── NEW: Hearing Impairment ──────────────────────────────────────── */
  "hearing-impairment": germlinePanel(
    {
      overview:
        "Panel diseñado para identificar variantes en genes asociados con la hipoacusia. Incluye formas sindrómicas (asociadas a otros órganos y tejidos) y no sindrómicas (solo pérdida auditiva), con herencia autosómica recesiva, autosómica dominante y ligada al X.",
      whoShould: [
        "Personas con hipoacusia congénita o de inicio temprano",
        "Antecedente familiar de sordera hereditaria",
      ],
      indications: [
        "Apoyo diagnóstico de hipoacusia hereditaria",
        "Clasificación de sordera sindrómica y no sindrómica",
      ],
      conditions: {
        groups: [
          {
            label: "Formas cubiertas",
            items: [
              "Hipoacusia no sindrómica",
              "Hipoacusia sindrómica",
              "Herencia autosómica recesiva",
              "Herencia autosómica dominante",
              "Herencia ligada al X",
            ],
          },
        ],
      },
    },
    {
      overview:
        "A panel designed to identify variants in genes associated with hearing impairment. It includes syndromic forms (linked with other organs and tissues) and non-syndromic forms (deafness only), with autosomal recessive, autosomal dominant and X-linked inheritance.",
      whoShould: [
        "People with congenital or early-onset hearing loss",
        "Family history of hereditary deafness",
      ],
      indications: [
        "Diagnostic support for hereditary hearing loss",
        "Classification of syndromic and non-syndromic deafness",
      ],
      conditions: {
        groups: [
          {
            label: "Forms covered",
            items: [
              "Non-syndromic hearing loss",
              "Syndromic hearing loss",
              "Autosomal recessive inheritance",
              "Autosomal dominant inheritance",
              "X-linked inheritance",
            ],
          },
        ],
      },
    }
  ),

  /* ─── NEW: Hematological Panel ──────────────────────────────────────── */
  "hematological-panel": germlinePanel(
    {
      overview:
        "Panel integral que investiga variantes germinales relacionadas con enfermedades de la sangre y del sistema linfático, permitiendo la evaluación simultánea de múltiples genes que pueden contribuir a presentaciones clínicas superpuestas.",
      whoShould: [
        "Personas con antecedente personal o familiar de anemia inexplicada, trombocitopenia, sangrado anormal o eventos de coagulación",
        "Sospecha de enfermedad hematológica hereditaria",
      ],
      indications: [
        "Apoyo diagnóstico de anemias, coagulopatías y falla medular hereditarias",
        "Evaluación de predisposición a neoplasias hematológicas",
      ],
      conditions: {
        groups: [
          {
            label: "Áreas cubiertas",
            items: [
              "Anemias",
              "Coagulopatías",
              "Microangiopatías trombóticas",
              "Síndromes de falla de la médula ósea",
              "Malformaciones vasculares",
              "Enfermedades del sistema linfático",
              "Predisposición a malignidades hematológicas (p. ej., leucemia)",
            ],
          },
        ],
      },
    },
    {
      overview:
        "A comprehensive panel investigating germline variants related to blood and lymphatic-system disease, enabling simultaneous assessment of multiple genes that may contribute to overlapping clinical presentations.",
      whoShould: [
        "People with a personal or family history of unexplained anemia, thrombocytopenia, abnormal bleeding or clotting events",
        "Suspected hereditary hematologic disease",
      ],
      indications: [
        "Diagnostic support for inherited anemias, coagulopathies and marrow failure",
        "Evaluation of predisposition to hematologic malignancies",
      ],
      conditions: {
        groups: [
          {
            label: "Areas covered",
            items: [
              "Anemias",
              "Coagulopathies",
              "Thrombotic microangiopathies",
              "Bone-marrow-failure syndromes",
              "Vascular malformations",
              "Lymphatic-system diseases",
              "Predisposition to hematologic malignancies (e.g., leukemia)",
            ],
          },
        ],
      },
    }
  ),

  /* ─── NEW: Mitochondrial Disorders (Nuclear-Mito) ──────────────────── */
  "mitochondrial-disorders": germlinePanel(
    {
      overview:
        "Panel diseñado para identificar variantes en genes asociados con trastornos mitocondriales. Las mitocondrias producen energía, principalmente mediante la fosforilación oxidativa. Este panel se centra en las variantes del ADN nuclear que pueden afectar la función mitocondrial.",
      whoShould: [
        "Pacientes con sospecha de enfermedad mitocondrial con compromiso multiorgánico",
        "Antecedente familiar de trastornos mitocondriales",
      ],
      indications: [
        "Apoyo diagnóstico de trastornos mitocondriales de origen nuclear",
        "Evaluación de deficiencias de la fosforilación oxidativa",
      ],
      conditions: {
        intro:
          "Los trastornos mitocondriales pueden afectar corazón, ojos, hígado, páncreas, riñones, sistema endocrino, oídos y tracto gastrointestinal.",
        groups: [
          {
            label: "Alcance",
            items: [
              "Variantes del ADN nuclear que afectan la función mitocondrial",
              "Deficiencias de los complejos I a V de la fosforilación oxidativa",
              "Compromiso multiorgánico",
            ],
          },
        ],
      },
    },
    {
      overview:
        "A panel designed to identify variants in genes associated with mitochondrial disorders. Mitochondria produce energy, primarily via oxidative phosphorylation. This panel focuses on nuclear-DNA variations that can affect mitochondrial function.",
      whoShould: [
        "Patients with suspected mitochondrial disease with multi-organ involvement",
        "Family history of mitochondrial disorders",
      ],
      indications: [
        "Diagnostic support for nuclear-origin mitochondrial disorders",
        "Evaluation of oxidative-phosphorylation deficiencies",
      ],
      conditions: {
        intro:
          "Mitochondrial disorders may affect the heart, eyes, liver, pancreas, kidneys, endocrine system, ears and gastrointestinal tract.",
        groups: [
          {
            label: "Scope",
            items: [
              "Nuclear-DNA variants affecting mitochondrial function",
              "Oxidative-phosphorylation complex I–V deficiencies",
              "Multi-organ involvement",
            ],
          },
        ],
      },
    }
  ),

  /* ─── NEW: Neuromuscular Disease ────────────────────────────────────── */
  "neuromuscular-disease": germlinePanel(
    {
      overview:
        "Panel que investiga variantes germinales relacionadas con trastornos neuromusculares, que involucran cerebelo, neuronas, médula espinal y uniones neuromusculares y afectan la función muscular.",
      whoShould: [
        "Personas con antecedente personal o familiar de CMT, paraplejía espástica, neuropatía o debilidad general",
        "Síntomas persistentes o progresivos que no responden a tratamientos de primera línea",
      ],
      indications: [
        "Apoyo diagnóstico de enfermedad neuromuscular hereditaria",
        "Orientación del manejo en debilidad progresiva de origen genético",
      ],
      conditions: {
        groups: [
          {
            label: "Condiciones representativas",
            items: [
              "Enfermedad de Charcot-Marie-Tooth (CMT)",
              "Paraplejía espástica",
              "Esclerosis lateral amiotrófica (ELA)",
              "Atrofia muscular espinal",
              "Neuropatías hereditarias",
            ],
          },
        ],
      },
    },
    {
      overview:
        "A panel investigating germline variants related to neuromuscular disorders, which involve the cerebellum, neurons, spinal cord and neuromuscular junctions and affect muscle function.",
      whoShould: [
        "People with a personal or family history of CMT, spastic paraplegia, neuropathy or general weakness",
        "Persistent or progressive symptoms not responding to first-line treatments",
      ],
      indications: [
        "Diagnostic support for hereditary neuromuscular disease",
        "Management guidance in progressive weakness of genetic origin",
      ],
      conditions: {
        groups: [
          {
            label: "Representative conditions",
            items: [
              "Charcot-Marie-Tooth disease (CMT)",
              "Spastic paraplegia",
              "Amyotrophic lateral sclerosis (ALS)",
              "Spinal muscular atrophy",
              "Hereditary neuropathies",
            ],
          },
        ],
      },
    }
  ),

  /* ─── NEW: Musculoskeletal Disease ─────────────────────────────────── */
  "musculoskeletal-disease": germlinePanel(
    {
      overview:
        "Panel que investiga variantes germinales relacionadas con trastornos musculoesqueléticos, que involucran músculo, articulaciones, tejido conectivo y hueso.",
      whoShould: [
        "Personas con antecedente personal o familiar de distrofia muscular, miopatías, condrodisplasia u osteogénesis imperfecta",
        "Síntomas persistentes o progresivos que no responden a tratamientos de primera línea",
      ],
      indications: [
        "Apoyo diagnóstico de enfermedad musculoesquelética hereditaria",
        "Evaluación de displasias óseas y del tejido conectivo",
      ],
      conditions: {
        groups: [
          {
            label: "Condiciones representativas",
            items: [
              "Distrofia muscular de cinturas y otras",
              "Miopatías (incluida la nemalínica)",
              "Condrodisplasias",
              "Síndrome de Ehlers-Danlos",
              "Osteogénesis imperfecta",
              "Miopatía de Bethlem",
            ],
          },
        ],
      },
    },
    {
      overview:
        "A panel investigating germline variants related to musculoskeletal disorders, which involve muscle, joints, connective tissue and bone.",
      whoShould: [
        "People with a personal or family history of muscular dystrophy, myopathies, chondrodysplasia or osteogenesis imperfecta",
        "Persistent or progressive symptoms not responding to first-line treatments",
      ],
      indications: [
        "Diagnostic support for hereditary musculoskeletal disease",
        "Evaluation of skeletal and connective-tissue dysplasias",
      ],
      conditions: {
        groups: [
          {
            label: "Representative conditions",
            items: [
              "Limb-girdle and other muscular dystrophies",
              "Myopathies (including nemaline)",
              "Chondrodysplasias",
              "Ehlers-Danlos syndrome",
              "Osteogenesis imperfecta",
              "Bethlem myopathy",
            ],
          },
        ],
      },
    }
  ),

  /* ─── NEW: Comprehensive Respiratory Disease (genetic) ─────────────── */
  "respiratory-genetic": germlinePanel(
    {
      overview:
        "Panel que investiga variantes germinales relacionadas con la genética de la enfermedad pulmonar y respiratoria, incluidas condiciones autoinmunes y autoinflamatorias. (Distinto de los Paneles de Patógenos Respiratorios infecciosos.)",
      whoShould: [
        "Personas con antecedente personal o familiar de enfermedad respiratoria de posible origen genético",
        "Enfermedad pulmonar crónica sin causa aclarada",
      ],
      indications: [
        "Apoyo diagnóstico de enfermedad respiratoria hereditaria",
        "Evaluación de predisposición pulmonar y de compromiso autoinmune/autoinflamatorio",
      ],
      conditions: {
        groups: [
          {
            label: "Condiciones representativas",
            items: [
              "Asma",
              "EPOC",
              "Fibrosis pulmonar",
              "Trastornos autoinmunes / autoinflamatorios con compromiso pulmonar",
            ],
          },
        ],
      },
    },
    {
      overview:
        "A panel investigating germline variants related to pulmonary and respiratory disease genetics, including autoimmune and autoinflammatory conditions. (Distinct from the infectious Respiratory Pathogen Panels.)",
      whoShould: [
        "People with a personal or family history of respiratory disease of possible genetic origin",
        "Chronic lung disease with no clear cause",
      ],
      indications: [
        "Diagnostic support for hereditary respiratory disease",
        "Evaluation of pulmonary predisposition and autoimmune/autoinflammatory involvement",
      ],
      conditions: {
        groups: [
          {
            label: "Representative conditions",
            items: [
              "Asthma",
              "COPD",
              "Pulmonary fibrosis",
              "Autoimmune / autoinflammatory disorders with lung involvement",
            ],
          },
        ],
      },
    }
  ),

  /* ─── NEW: Autism Spectrum Disorder (ASD) ──────────────────────────── */
  "autism-neurodevelopment": germlinePanel(
    {
      overview:
        "Panel que investiga variantes germinales relacionadas con el trastorno del espectro autista (TEA), un término colectivo para un amplio rango de condiciones caracterizadas por diferencias sociales, conductuales y de comunicación en niños y jóvenes.",
      whoShould: [
        "Personas con retraso en los hitos del neurodesarrollo",
        "Dificultades en la interacción social, el contacto visual o la comunicación",
        "Presencia de sensibilidades sensoriales u otros problemas de salud asociados (p. ej., convulsiones, sueño)",
      ],
      indications: [
        "Apoyo a la evaluación diagnóstica del TEA y de condiciones del neurodesarrollo",
        "Antecedente familiar de trastornos del neurodesarrollo",
      ],
      conditions: {
        intro:
          "Se analizan más de 100 genes reportados en asociación con el autismo.",
        groups: [
          {
            label: "Alcance",
            items: [
              "Trastorno del espectro autista (TEA)",
              "Condiciones del neurodesarrollo",
              "Más de 100 genes asociados",
            ],
          },
        ],
      },
    },
    {
      overview:
        "A panel investigating germline variants related to autism spectrum disorder (ASD) — a collective term for a wide range of conditions characterized by social, behavioral and communication differences in children and young adults.",
      whoShould: [
        "People with delay in neurodevelopmental milestones",
        "Difficulties in social interaction, eye contact or communication",
        "Presence of sensory sensitivities or other associated health issues (e.g., seizures, sleep)",
      ],
      indications: [
        "Support for diagnostic evaluation of ASD and neurodevelopmental conditions",
        "Family history of neurodevelopmental disorders",
      ],
      conditions: {
        intro: "More than 100 genes reported in association with autism are analyzed.",
        groups: [
          {
            label: "Scope",
            items: [
              "Autism spectrum disorder (ASD)",
              "Neurodevelopmental conditions",
              "More than 100 associated genes",
            ],
          },
        ],
      },
    }
  ),
};
