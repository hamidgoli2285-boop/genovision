import type { Locale } from "./types";

/**
 * Centralized translation dictionary for all visible UI strings.
 * Organized by namespace. Spanish is the source of truth (default locale).
 */
export type Dictionary = {
  nav: {
    home: string;
    productos: string;
    proceso: string;
    medicos: string;
    faq: string;
    contacto: string;
    whatsapp: string;
    openMenu: string;
    closeMenu: string;
    mainNav: string;
    mobileNav: string;
  };
  langSwitcher: {
    label: string;
    es: string;
    en: string;
    switchTo: string;
  };
  footer: {
    description: string;
    navigation: string;
    contact: string;
    legal: string;
    legalText: string;
    rights: string;
    location: string;
  };
  whatsappFloat: {
    aria: string;
  };
  contactCTA: {
    defaultTitle: string;
    defaultSubtitle: string;
    defaultPrimary: string;
    writeWhatsapp: string;
  };
  productCard: {
    statusDisponible: string;
    statusProximamente: string;
    featured: string;
    genesEvaluados: string; // "{n} genes evaluados"
    requestInfo: string;
  };
  subpanelCard: {
    geneCount: string; // "{n} genes"
    cta: string;
  };
  subpanelHero: {
    breadcrumbHome: string;
    breadcrumbProducts: string;
    breadcrumbMain: string;
    badgeSubpanel: string;
    titlePrefix: string; // "Panel de "
    scheduleEval: string;
    seeFullPanel: string;
  };
  medicalDisclaimer: {
    label: string;
    text: string;
  };
  backToMain: string;
  doctorReferral: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    forDoctors: string;
  };
  trustBar: {
    items: { label: string; sub?: string }[];
  };
  contactForm: {
    receivedTitle: string;
    receivedBody: string;
    continueWa: string;
    sendAnother: string;
    name: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    forWhom: string;
    forWhomPlaceholder: string;
    forMe: string;
    forFamily: string;
    family: string;
    familyPlaceholder: string;
    yes: string;
    no: string;
    notSure: string;
    message: string;
    messagePlaceholder: string;
    privacy: string;
    submit: string;
    waMessageHeader: string;
    waLineName: string;
    waLineFor: string;
    waLineFamily: string;
    waLineMessage: string;
  };
  comparisonTable: {
    option: string;
    genes: string;
    enfoque: string;
    mejorPara: string;
    nivel: string;
    cta: string;
    recommended: string;
    geneSuffix: string;
    primaryWa: string;
  };
  geneListPanel: {
    counter: string;
    searchPlaceholder: string;
    searchLabel: string;
    expand: string;
    collapse: string;
    noResults: string;
    disclaimer: string;
    resultSingular: string;
    resultPlural: string;
  };
  subpanelGeneList: {
    searchPlaceholder: string;
    searchLabel: string;
    noResults: string;
    disclaimer: string;
    resultSingular: string;
    resultPlural: string;
  };
  home: {
    heroBadge: string;
    heroTitle1: string;
    heroTitle2: string;
    heroDot: string;
    heroDescPart1: string;
    heroDesc161: string;
    heroDescPart2: string;
    scheduleWa: string;
    seePanel: string;
    reasons: { title: string; description: string }[];
    sectionWhyEyebrow: string;
    sectionWhyTitleA: string;
    sectionWhyTitleB: string;
    sectionWhyDesc: string;
    howEyebrow: string;
    howTitle: string;
    howDesc: string;
    howCta: string;
    steps: { title: string; description: string }[];
    featuredEyebrow: string;
    featuredTitle: string;
    featuredDesc: string;
    featuredBadges: string[];
    featuredCta1: string;
    featuredCta2: string;
    catalogPrompt: string;
    catalogLink: string;
    finalTitle: string;
    finalSubtitle: string;
    finalSecondary: string;
  };
  productosPage: {
    eyebrow: string;
    title: string;
    description: string;
    catalogEmpty: string;
    finalTitle: string;
    finalSubtitle: string;
    finalSecondary: string;
    subpanelsTitle: string;
    subpanelsEyebrow: string;
    subpanelsDesc: string;
    filterLabel: string;
    categoryAll: string;
  };
  procesoPage: {
    eyebrow: string;
    title: string;
    description: string;
    timelineEyebrow: string;
    timelineTitle: string;
    timelineDesc: string;
    sampleEyebrow: string;
    sampleTitle: string;
    sampleDesc: string;
    sampleItems: { t: string; d: string }[];
    finalTitle: string;
    finalSubtitle: string;
    finalSecondary: string;
    steps: { title: string; description: string }[];
  };
  medicosPage: {
    heroBadge: string;
    heroTitle: string;
    heroDesc: string;
    heroCta1: string;
    heroCta2: string;
    reasonsEyebrow: string;
    reasonsTitle: string;
    reasonsDesc: string;
    reasons: { title: string; description: string }[];
    indicationsEyebrow: string;
    indicationsTitle: string;
    indicationsDesc: string;
    indications: string[];
    indicationsFootnote: string;
    providesEyebrow: string;
    providesTitle: string;
    provides: { title: string; description: string }[];
    eduBadge: string;
    eduTitle: string;
    eduDesc: string;
    interpBadge: string;
    interpTitle: string;
    interpDesc: string;
    finalTitle: string;
    finalSubtitle: string;
    finalCta: string;
  };
  contactoPage: {
    eyebrow: string;
    title: string;
    description: string;
    contactDataTitle: string;
    waLabel: string;
    phoneLabel: string;
    addressLabel: string;
    waSendNow: string;
    mapTitle: string;
  };
  faqPage: {
    eyebrow: string;
    title: string;
    description: string;
    finalTitle: string;
    finalSubtitle: string;
    items: { q: string; a: string }[];
  };
  panelHereditarioPage: {
    breadcrumbCurrent: string;
    badgeAvailable: string;
    badgeFeatured: string;
    title: string;
    descPart1: string;
    desc161: string;
    descPart2: string;
    quickBadges: string[];
    scheduleEval: string;
    seeFullProcess: string;
    whatEyebrow: string;
    whatTitle: string;
    whatDescPart1: string;
    whatDescPart2: string;
    whatDescPart3: string;
    whoEyebrow: string;
    whoTitle: string;
    whoDesc: string;
    candidates: { title: string; description: string }[];
    typesEyebrow: string;
    typesTitle: string;
    typesDesc: string;
    cancerTypes: string[];
    techEyebrow: string;
    techTitle: string;
    techDesc: string;
    processEyebrow: string;
    processTitle: string;
    processDesc: string;
    processSteps: { title: string; description: string }[];
    resultsEyebrow: string;
    resultsTitle: string;
    resultsDesc: string;
    resultPositiveLabel: string;
    resultPositiveTitle: string;
    resultPositiveDesc: string;
    resultIntermediateLabel: string;
    resultIntermediateTitle: string;
    resultIntermediateDesc: string;
    resultReassuringLabel: string;
    resultReassuringTitle: string;
    resultReassuringDesc: string;
    importantNote: string;
    subpanelsEyebrow: string;
    subpanelsTitle: string;
    subpanelsDesc: string;
    subpanelsClose: string;
    comparisonEyebrow: string;
    comparisonTitle: string;
    comparisonDesc: string;
    familyEyebrow: string;
    familyTitle: string;
    familyDesc: string;
    familyItems: string[];
    geneListEyebrow: string;
    geneListTitle: string;
    geneListDesc: string;
    finalTitle: string;
    finalSubtitle: string;
    finalPrimary: string;
    finalSecondary: string;
  };
  subpanelPages: {
    sectionGeneListEyebrow: string;
    sectionGeneListTitle: string;
    sectionGeneListDesc: string;
    sectionWhatEvalEyebrow: string;
    sectionWhoConsiderEyebrow: string;
    sectionWhoConsiderTitle: string;
    sectionFamilyEyebrow: string;
    sectionFamilyTitle: string;
    sectionFamilyDesc: string;
    sectionProcessEyebrow: string;
    sectionProcessTitle: string;
    counterColorrectal: string;
    counterMama: string;
    counterCore: string;
    counterProstata: string;
    colorrectal: {
      whatTitle: string;
      whatDesc: string;
      candidates: { title: string; description: string }[];
      warningEyebrow: string;
      warningTitle: string;
      warningDesc: string;
      warningSigns: string[];
      relatedEyebrow: string;
      relatedTitle: string;
      relatedDesc: string;
      relatedConditions: { title: string; description: string }[];
      processSteps: { title: string; description: string }[];
      heroSubtitle: string;
      finalTitle: string;
      finalSubtitle: string;
    };
    mama: {
      whatTitle: string;
      whatDesc: string;
      candidates: { title: string; description: string }[];
      warningEyebrow: string;
      warningTitle: string;
      warningDesc: string;
      warningSigns: string[];
      familyImpact: { title: string; description: string }[];
      processSteps: { title: string; description: string }[];
      heroSubtitle: string;
      finalTitle: string;
      finalSubtitle: string;
    };
    core: {
      whatEyebrow: string;
      whatTitle: string;
      whatDesc1: string;
      whatDescStrong: string;
      whatDesc2: string;
      whenEyebrow: string;
      whenTitle: string;
      useCases: { title: string; description: string }[];
      compareCompletoBadge: string;
      compareCompleto161: string;
      compareCompletoDesc: string;
      compareCompletoBullets: string[];
      seeFullPanel: string;
      compareCoreBadge: string;
      compareCoreTitle: string;
      compareCoreDesc: string;
      compareCoreBullets: string[];
      limitationsEyebrow: string;
      limitationsTitle: string;
      limitationsDesc: string;
      limitations: string[];
      processSteps: { title: string; description: string }[];
      heroSubtitle: string;
      finalTitle: string;
      finalSubtitle: string;
    };
    prostata: {
      whatTitle: string;
      whatDesc: string;
      candidates: { title: string; description: string }[];
      warningEyebrow: string;
      warningTitle: string;
      warningDesc: string;
      warningSigns: string[];
      familyImpact: { title: string; description: string }[];
      processSteps: { title: string; description: string }[];
      heroSubtitle: string;
      finalTitle: string;
      finalSubtitle: string;
    };
  };
  // Bilingual product copy keyed by product id
  products: Record<
    string,
    { title: string; description: string; categoryLabel: string; ctaLabel: string }
  >;
  productCategories: Record<string, string>;
  // Bilingual subpanel copy keyed by subpanel id
  subpanels: Record<
    string,
    {
      title: string;
      shortTitle: string;
      description: string;
      indications: string[];
      enfoque: string;
      mejorPara: string;
      nivel: string;
      whatsappMessage: string;
    }
  >;
};

const es: Dictionary = {
  nav: {
    home: "Inicio",
    productos: "Productos",
    proceso: "Proceso",
    medicos: "Para Médicos",
    faq: "Preguntas Frecuentes",
    contacto: "Contacto",
    whatsapp: "WhatsApp",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    mainNav: "Principal",
    mobileNav: "Móvil",
  },
  langSwitcher: {
    label: "Idioma",
    es: "ES",
    en: "EN",
    switchTo: "Cambiar a",
  },
  footer: {
    description:
      "Genómica clínica para identificar predisposición hereditaria al cáncer y orientar decisiones preventivas.",
    navigation: "Navegación",
    contact: "Contacto",
    legal: "Legal",
    legalText:
      "La información de este sitio es educativa y no sustituye consulta médica. Los resultados genéticos deben ser interpretados por profesionales de salud calificados.",
    rights: "Todos los derechos reservados.",
    location: "Mérida, Yucatán, México",
  },
  whatsappFloat: { aria: "Escríbenos por WhatsApp" },
  contactCTA: {
    defaultTitle: "Si hay cáncer en tu familia, no lo ignores.",
    defaultSubtitle:
      "Habla con nuestro equipo y conoce el proceso completo del Panel de Cáncer Hereditario.",
    defaultPrimary: "Escríbenos por WhatsApp",
    writeWhatsapp: "Escríbenos por WhatsApp",
  },
  productCard: {
    statusDisponible: "Disponible",
    statusProximamente: "Próximamente",
    featured: "Destacado",
    genesEvaluados: "genes evaluados",
    requestInfo: "Solicitar información",
  },
  subpanelCard: { geneCount: "genes", cta: "Ver subpanel" },
  subpanelHero: {
    breadcrumbHome: "Inicio",
    breadcrumbProducts: "Productos",
    breadcrumbMain: "Panel de Cáncer Hereditario",
    badgeSubpanel: "Subpanel especializado",
    titlePrefix: "Panel de ",
    scheduleEval: "Agendar evaluación",
    seeFullPanel: "Ver panel completo (161 genes)",
  },
  medicalDisclaimer: {
    label: "Importante:",
    text: "Este análisis no diagnostica cáncer. Evalúa predisposición genética hereditaria y debe interpretarse junto con la historia personal, familiar y criterio médico.",
  },
  backToMain: "Ver panel completo de 161 genes",
  doctorReferral: {
    eyebrow: "Para médicos",
    title: "¿Eres médico? Conoce cómo referir pacientes",
    description:
      "Apoyamos a profesionales de la salud con análisis genético amplio, reportes claros y coordinación logística para integrar la genómica a la práctica clínica.",
    cta: "Ver información para médicos",
    forDoctors: "Para Médicos",
  },
  trustBar: {
    items: [
      { label: "161 genes", sub: "evaluados" },
      { label: "Tecnología NGS", sub: "secuenciación de nueva generación" },
      { label: "Muestra bucal o saliva", sub: "no invasiva" },
      { label: "Resultados aprox. 28 días", sub: "tiempo estimado" },
      { label: "Interpretación profesional", sub: "incluida" },
    ],
  },
  contactForm: {
    receivedTitle: "¡Recibimos tu información!",
    receivedBody:
      "Para responderte de inmediato, hemos preparado un mensaje en WhatsApp con tus datos. Solo da clic en el botón para enviarlo.",
    continueWa: "Continuar en WhatsApp",
    sendAnother: "Enviar otra solicitud",
    name: "Nombre",
    namePlaceholder: "Tu nombre completo",
    phone: "Teléfono",
    phonePlaceholder: "999 000 0000",
    email: "Correo",
    emailPlaceholder: "tu@correo.com",
    forWhom: "¿El estudio es para ti o para un familiar?",
    forWhomPlaceholder: "Selecciona una opción",
    forMe: "Para mí",
    forFamily: "Para un familiar",
    family: "¿Hay antecedentes de cáncer en tu familia?",
    familyPlaceholder: "Selecciona una opción",
    yes: "Sí",
    no: "No",
    notSure: "No estoy seguro/a",
    message: "Mensaje",
    messagePlaceholder: "Cuéntanos brevemente cómo podemos ayudarte",
    privacy:
      "Al enviar este formulario aceptas que GenoVision te contacte para brindarte información. Tus datos no se compartirán con terceros.",
    submit: "Enviar solicitud",
    waMessageHeader: "Hola GenoVision, me gustaría recibir información.",
    waLineName: "Nombre",
    waLineFor: "El estudio es",
    waLineFamily: "Antecedentes de cáncer en familia",
    waLineMessage: "Mensaje",
  },
  comparisonTable: {
    option: "Opción",
    genes: "Genes",
    enfoque: "Enfoque",
    mejorPara: "Mejor para",
    nivel: "Nivel de cobertura",
    cta: "CTA",
    recommended: "Recomendado",
    geneSuffix: "genes",
    primaryWa:
      "Hola GenoVision, me interesa agendar el Panel Completo de Cáncer Hereditario (161 genes).",
  },
  geneListPanel: {
    counter: "161 genes incluidos",
    searchPlaceholder: "Buscar gen…",
    searchLabel: "Buscar gen",
    expand: "Ver los 161 genes",
    collapse: "Ocultar lista",
    noResults: "No se encontró ese gen en la lista.",
    disclaimer:
      "La inclusión de un gen en el panel no significa diagnóstico de cáncer. Los resultados deben interpretarse junto con la historia personal, familiar y criterio médico.",
    resultSingular: "resultado",
    resultPlural: "resultados",
  },
  subpanelGeneList: {
    searchPlaceholder: "Buscar gen…",
    searchLabel: "Buscar gen",
    noResults: "No se encontró ese gen en la lista.",
    disclaimer:
      "La inclusión de un gen en este subpanel no significa diagnóstico de cáncer. Los resultados deben interpretarse junto con la historia personal, familiar y criterio médico.",
    resultSingular: "resultado",
    resultPlural: "resultados",
  },
  home: {
    heroBadge: "Genómica clínica en Mérida",
    heroTitle1: "Predice tu riesgo genético de cáncer",
    heroTitle2: "antes de que sea tarde",
    heroDot: ".",
    heroDescPart1: "En GenoVision analizamos ",
    heroDesc161: "161 genes",
    heroDescPart2:
      " relacionados con predisposición hereditaria al cáncer mediante tecnología NGS, para ayudarte a tomar decisiones preventivas con información clara y profesional.",
    scheduleWa: "Agendar consulta por WhatsApp",
    seePanel: "Ver panel de cáncer",
    reasons: [
      {
        title: "Antecedentes familiares",
        description:
          "Casos de cáncer en padres, hermanos o familiares cercanos pueden indicar un componente hereditario.",
      },
      {
        title: "Cáncer a edad temprana",
        description:
          "Diagnósticos antes de los 50 años en la familia son una señal a considerar.",
      },
      {
        title: "Múltiples casos en la familia",
        description:
          "Varios familiares afectados, incluso de distintas generaciones, sugieren predisposición genética.",
      },
      {
        title: "Prevención personalizada",
        description:
          "Conocer tu perfil genético permite ajustar revisiones, hábitos y vigilancia médica.",
      },
      {
        title: "Decisiones médicas informadas",
        description:
          "Información genética que apoya a tu médico para definir estrategias de seguimiento.",
      },
    ],
    sectionWhyEyebrow: "Por qué importa",
    sectionWhyTitleA: "El cáncer no siempre avisa.",
    sectionWhyTitleB: "Tu ADN puede dar señales antes.",
    sectionWhyDesc:
      "Identificar predisposición genética hereditaria permite anticiparse, vigilar y orientar decisiones preventivas con tu médico.",
    howEyebrow: "Cómo funciona",
    howTitle: "Un proceso clínico, claro y guiado",
    howDesc:
      "Desde la primera consulta hasta la entrega de resultados, te acompañamos en cada paso.",
    howCta: "Ver proceso completo",
    steps: [
      {
        title: "Consulta inicial",
        description:
          "Resolvemos tus dudas y revisamos antecedentes para definir si el panel es adecuado.",
      },
      {
        title: "Toma de muestra bucal o saliva",
        description: "Procedimiento sencillo, indoloro y no invasivo.",
      },
      {
        title: "Análisis genómico por NGS",
        description:
          "Secuenciación de nueva generación para evaluar múltiples genes simultáneamente.",
      },
      {
        title: "Interpretación profesional",
        description:
          "Tu resultado se interpreta dentro del contexto clínico y familiar.",
      },
      {
        title: "Recomendaciones de seguimiento",
        description:
          "Te orientamos para llevar el resultado a tu médico tratante y definir un plan.",
      },
    ],
    featuredEyebrow: "Producto destacado",
    featuredTitle: "Panel de Cáncer Hereditario",
    featuredDesc:
      "Evaluación avanzada de 161 genes asociados con predisposición hereditaria a distintos tipos de cáncer.",
    featuredBadges: ["161 genes", "NGS", "Prevención", "Riesgo hereditario"],
    featuredCta1: "Ver detalles del panel",
    featuredCta2: "Hablar con un especialista",
    catalogPrompt: "¿Buscas otros paneles?",
    catalogLink: "Ver catálogo completo",
    finalTitle: "Si hay cáncer en tu familia, no lo ignores.",
    finalSubtitle:
      "Una conversación puede ser el primer paso para definir si una evaluación genética es adecuada para ti.",
    finalSecondary: "Conocer el proceso",
  },
  productosPage: {
    eyebrow: "Catálogo",
    title: "Catálogo de análisis genéticos",
    description:
      "Explora nuestros análisis genómicos diseñados para prevención, riesgo hereditario y medicina personalizada. Algunos paneles están disponibles bajo solicitud y bajo indicación médica.",
    catalogEmpty: "No hay paneles en esta categoría todavía. Pronto agregaremos más.",
    finalTitle: "¿Necesitas orientación para elegir un panel?",
    finalSubtitle:
      "Cuéntanos tu caso y te ayudamos a definir si un análisis genético es adecuado para ti o tu familiar.",
    finalSecondary: "Conocer el proceso",
    subpanelsTitle: "Subpaneles de cáncer hereditario",
    subpanelsEyebrow: "Cáncer hereditario",
    subpanelsDesc:
      "Subpaneles enfocados derivados del Panel de Cáncer Hereditario de 161 genes, organizados por tipo de cáncer e indicación médica.",
    filterLabel: "Filtros de catálogo",
    categoryAll: "Todos",
  },
  procesoPage: {
    eyebrow: "Proceso completo",
    title: "Del ADN al resultado: así funciona",
    description:
      "Cada etapa del proceso de GenoVision está pensada para ofrecerte claridad, acompañamiento y rigor clínico.",
    timelineEyebrow: "Línea del tiempo",
    timelineTitle: "9 pasos, un acompañamiento continuo",
    timelineDesc:
      "Te guiamos desde la primera conversación hasta el plan de seguimiento con tu médico tratante.",
    sampleEyebrow: "Preparación de muestra",
    sampleTitle: "Indicaciones para muestra bucal",
    sampleDesc:
      "Para muestra bucal: lavar dientes antes de la toma y no comer durante 30 minutos. Puede beber agua. Estas indicaciones nos ayudan a obtener una muestra de calidad para el análisis genómico.",
    sampleItems: [
      { t: "Lavarse los dientes", d: "Antes de la toma de muestra." },
      { t: "Esperar 30 minutos", d: "Sin comer ni mascar chicle." },
      { t: "Sí puedes beber agua", d: "El agua no afecta la muestra." },
      {
        t: "Sigue las instrucciones del kit",
        d: "Te guiamos paso a paso durante la toma.",
      },
    ],
    finalTitle: "¿Listo para iniciar?",
    finalSubtitle:
      "Comienza con una conversación. Te explicamos todo el proceso y resolvemos tus dudas sin compromiso.",
    finalSecondary: "Ver panel de cáncer hereditario",
    steps: [
      {
        title: "Contacto por WhatsApp",
        description:
          "Inicia el proceso enviándonos un mensaje. Te responde nuestro equipo y resolvemos tus primeras dudas.",
      },
      {
        title: "Consulta de orientación",
        description:
          "Sesión inicial para conversar sobre tus motivos, expectativas y aclarar el alcance del estudio genético.",
      },
      {
        title: "Cuestionario de antecedentes familiares",
        description:
          "Documentamos los antecedentes oncológicos relevantes para interpretar el resultado en contexto.",
      },
      {
        title: "Toma de muestra bucal o saliva",
        description:
          "Procedimiento sencillo, indoloro y no invasivo. Te explicamos paso a paso cómo prepararte.",
      },
      {
        title: "Envío y análisis de muestra",
        description:
          "La muestra se procesa en condiciones controladas para mantener su trazabilidad e integridad.",
      },
      {
        title: "Secuenciación NGS",
        description:
          "Tecnología de secuenciación de nueva generación para evaluar múltiples genes simultáneamente.",
      },
      {
        title: "Bioinformática e interpretación",
        description:
          "Análisis bioinformático y revisión profesional para clasificar las variantes encontradas.",
      },
      {
        title: "Entrega de resultados",
        description:
          "Tu reporte se entrega en una sesión clara, con explicaciones de cada apartado.",
      },
      {
        title: "Recomendaciones para seguimiento médico",
        description:
          "Te orientamos para llevar el resultado a tu médico tratante y definir un plan personalizado.",
      },
    ],
  },
  medicosPage: {
    heroBadge: "Para profesionales de la salud",
    heroTitle: "Genómica clínica para apoyar decisiones médicas",
    heroDesc:
      "GenoVision trabaja como apoyo para médicos que desean integrar análisis genético en prevención, vigilancia y estratificación de riesgo hereditario al cáncer.",
    heroCta1: "Solicitar información",
    heroCta2: "Ver panel destacado",
    reasonsEyebrow: "Por qué referir pacientes",
    reasonsTitle: "Información que enriquece la práctica clínica",
    reasonsDesc:
      "El análisis genético, integrado al juicio médico, puede aportar un eje adicional para personalizar la atención.",
    reasons: [
      {
        title: "Estratificación de riesgo",
        description:
          "Información genética que complementa la evaluación clínica y los antecedentes familiares.",
      },
      {
        title: "Vigilancia personalizada",
        description:
          "Apoyo para definir esquemas de vigilancia ajustados al perfil hereditario de cada paciente.",
      },
      {
        title: "Estrategias preventivas",
        description:
          "Herramienta adicional al considerar prevención primaria y secundaria en familias con antecedentes.",
      },
      {
        title: "Orientación familiar",
        description:
          "Cuando aplica, el resultado puede orientar evaluación y vigilancia en familiares de primer grado.",
      },
    ],
    indicationsEyebrow: "Indicaciones clínicas",
    indicationsTitle: "Cuándo considerar el panel hereditario",
    indicationsDesc:
      "Algunos contextos clínicos en los que el análisis genético puede aportar información útil.",
    indications: [
      "Antecedentes personales o familiares de cáncer en uno o más familiares de primer grado.",
      "Diagnóstico de cáncer a edad temprana (≤50 años) en la familia.",
      "Cáncer de mama, ovario, colon, próstata, páncreas o melanoma con patrón sugestivo de síndrome hereditario.",
      "Múltiples casos de cáncer en distintas generaciones.",
      "Cáncer bilateral, multifocal o más de un tumor primario en un mismo paciente.",
      "Pacientes con interés en prevención personalizada bajo orientación médica.",
    ],
    indicationsFootnote:
      "Las indicaciones reales se definen por criterio clínico y guías vigentes según cada caso.",
    providesEyebrow: "Qué proporciona GenoVision",
    providesTitle: "Apoyo integral en cada etapa",
    provides: [
      {
        title: "Análisis genético amplio",
        description:
          "Panel de 161 genes asociados con predisposición hereditaria al cáncer mediante secuenciación NGS.",
      },
      {
        title: "Reporte clínico claro",
        description:
          "Reportes con clasificación de variantes y contexto clínico para apoyar tu interpretación.",
      },
      {
        title: "Coordinación logística",
        description:
          "Toma de muestra no invasiva, trazabilidad de la muestra y entrega oportuna de resultados.",
      },
      {
        title: "Material educativo",
        description:
          "Apoyo informativo para tus pacientes antes y después del estudio, en lenguaje claro.",
      },
    ],
    eduBadge: "Educación al paciente",
    eduTitle: "Material y orientación previa",
    eduDesc:
      "Apoyamos a tus pacientes con información clara antes y después del estudio, sin reemplazar la consulta médica. La conversación clínica clave permanece contigo.",
    interpBadge: "Interpretación de resultado",
    interpTitle: "Reportes preparados para uso clínico",
    interpDesc:
      "Cada reporte incluye contexto clínico, clasificación de variantes y notas relevantes para apoyar tu interpretación y decisiones.",
    finalTitle: "Refiere pacientes con un análisis genómico clínicamente útil",
    finalSubtitle:
      "Te apoyamos con material educativo, coordinación logística y reportes claros.",
    finalCta: "Solicitar información para referir pacientes",
  },
  contactoPage: {
    eyebrow: "Contacto",
    title: "Hablemos de tu caso",
    description:
      "Resolvemos tus dudas, te explicamos el proceso y te orientamos sin compromiso. La consulta inicial es el primer paso.",
    contactDataTitle: "Datos de contacto",
    waLabel: "WhatsApp",
    phoneLabel: "Teléfono",
    addressLabel: "Dirección",
    waSendNow: "Enviar WhatsApp ahora",
    mapTitle: "Mapa GenoVision - CÉNIT Medical Center",
  },
  faqPage: {
    eyebrow: "Preguntas frecuentes",
    title: "Resolvemos tus dudas",
    description:
      "Información clara y honesta sobre el Panel de Cáncer Hereditario, el proceso de toma de muestra y la interpretación del resultado.",
    finalTitle: "¿Tienes una duda que no está aquí?",
    finalSubtitle: "Escríbenos por WhatsApp y te respondemos directamente.",
    items: [
      {
        q: "¿Este estudio diagnostica cáncer?",
        a: "No. Este estudio identifica predisposición genética hereditaria. No sustituye estudios diagnósticos ni consulta médica.",
      },
      {
        q: "¿Qué muestra se necesita?",
        a: "Saliva o muestra bucal. Es un procedimiento sencillo y no invasivo que se puede realizar de forma cómoda.",
      },
      {
        q: "¿Cuánto tardan los resultados?",
        a: "Aproximadamente 28 días desde la recepción de la muestra en el laboratorio.",
      },
      {
        q: "¿Qué significa analizar 161 genes?",
        a: "Significa que se revisan múltiples genes asociados con predisposición hereditaria al cáncer en un solo análisis, lo que permite una visión amplia y eficiente.",
      },
      {
        q: "¿Quién debería hacerse el estudio?",
        a: "Personas con antecedentes familiares de cáncer, casos de cáncer a edad temprana en la familia, múltiples familiares afectados, o personas con interés en prevención personalizada bajo orientación médica.",
      },
      {
        q: "¿Qué pasa si sale una variante?",
        a: "El resultado debe revisarse profesionalmente para definir vigilancia, prevención y posible orientación familiar. Tu médico tratante es el encargado de integrar esta información a tu plan de salud.",
      },
      {
        q: "¿Puedo hacerlo aunque no tenga cáncer?",
        a: "Sí. El enfoque principal del estudio es prevención y evaluación de riesgo en personas sin diagnóstico oncológico.",
      },
      {
        q: "¿Sirve para toda mi familia?",
        a: "Un resultado puede orientar si otros familiares deberían considerar evaluación genética. Sin embargo, cada miembro de la familia debe valorarse de forma individual.",
      },
      {
        q: "¿Dónde están ubicados?",
        a: "CÉNIT Medical Center, C. 15 501-C 919, Col. Altabrisa, 97130 Mérida, Yucatán.",
      },
      {
        q: "¿Cómo agendo?",
        a: "Por WhatsApp al 999 366 0543. Te orientamos sobre los siguientes pasos.",
      },
    ],
  },
  panelHereditarioPage: {
    breadcrumbCurrent: "Panel de Cáncer Hereditario",
    badgeAvailable: "Disponible",
    badgeFeatured: "Producto destacado",
    title: "Panel de Cáncer Hereditario",
    descPart1: "Análisis genético avanzado de ",
    desc161: "161 genes",
    descPart2:
      " para identificar predisposición hereditaria al cáncer y orientar decisiones preventivas con tu médico.",
    quickBadges: [
      "161 genes",
      "NGS",
      "Muestra bucal o saliva",
      "Resultados aprox. 28 días",
      "Consulta inicial incluida",
    ],
    scheduleEval: "Agendar evaluación",
    seeFullProcess: "Ver proceso completo",
    whatEyebrow: "¿Qué es este estudio?",
    whatTitle: "Una visión amplia de tu predisposición hereditaria",
    whatDescPart1: "El ",
    whatDescPart2: "Panel de Cáncer Hereditario",
    whatDescPart3:
      " de GenoVision analiza genes relacionados con síndromes de predisposición hereditaria al cáncer. El objetivo es identificar variantes genéticas que puedan aumentar el riesgo y ayudar a definir estrategias de prevención, vigilancia médica y orientación familiar.",
    whoEyebrow: "¿Para quién es?",
    whoTitle: "Quién debería considerarlo",
    whoDesc:
      "Si te identificas con alguno de los siguientes escenarios, una evaluación genética puede aportarte información valiosa.",
    candidates: [
      {
        title: "Familiares diagnosticados con cáncer",
        description:
          "Padres, hermanos o familiares cercanos con antecedentes oncológicos.",
      },
      {
        title: "Cánceres específicos en la familia",
        description:
          "Mama, ovario, colon, próstata, páncreas o melanoma en uno o más familiares.",
      },
      {
        title: "Diagnóstico a edad temprana",
        description: "Casos diagnosticados antes de los 50 años en la familia.",
      },
      {
        title: "Múltiples generaciones afectadas",
        description:
          "Varios familiares con cáncer en diferentes generaciones del árbol familiar.",
      },
      {
        title: "Personas que buscan prevención",
        description:
          "Quienes desean tomar decisiones preventivas con información genética.",
      },
      {
        title: "Pacientes referidos por su médico",
        description:
          "Cuando un especialista considera útil la evaluación genética.",
      },
    ],
    typesEyebrow: "Tipos de cáncer evaluados",
    typesTitle: "Cobertura clínica del panel",
    typesDesc:
      "El panel incluye genes asociados con predisposición hereditaria a múltiples tipos de cáncer y síndromes oncológicos.",
    cancerTypes: [
      "Mama",
      "Ovario",
      "Colon / Lynch",
      "Próstata",
      "Páncreas",
      "Melanoma",
      "Endometrio",
      "Tiroides",
      "Gástrico",
      "Renal",
      "Otros síndromes hereditarios",
    ],
    techEyebrow: "Tecnología",
    techTitle: "Tecnología NGS",
    techDesc:
      "Utilizamos secuenciación de nueva generación para evaluar múltiples genes de forma simultánea. Esta tecnología permite una visión amplia de variantes asociadas con predisposición hereditaria al cáncer.",
    processEyebrow: "Cómo es el proceso",
    processTitle: "Del primer contacto al plan de seguimiento",
    processDesc:
      "Cada etapa está diseñada para ser clara, no invasiva y guiada por profesionales.",
    processSteps: [
      {
        title: "Orientación inicial",
        description:
          "Resolvemos dudas y revisamos si el panel es adecuado para ti.",
      },
      {
        title: "Historia familiar",
        description:
          "Documentamos antecedentes relevantes para interpretar el resultado en contexto.",
      },
      {
        title: "Toma de muestra no invasiva",
        description:
          "Muestra bucal o saliva, sin agujas ni procedimientos complejos.",
      },
      {
        title: "Análisis genético",
        description:
          "Secuenciación de nueva generación de 161 genes asociados con cáncer hereditario.",
      },
      {
        title: "Interpretación del resultado",
        description:
          "Tu reporte se interpreta clínicamente y se contextualiza con tu historia.",
      },
      {
        title: "Plan de seguimiento",
        description:
          "Recomendaciones para llevar el resultado a tu médico tratante.",
      },
    ],
    resultsEyebrow: "Qué puede mostrar el resultado",
    resultsTitle: "Tres posibles tipos de resultado",
    resultsDesc:
      "El reporte siempre se interpreta dentro del contexto clínico y familiar de cada persona.",
    resultPositiveLabel: "Resultado positivo",
    resultPositiveTitle: "Variante patogénica / probablemente patogénica",
    resultPositiveDesc:
      "Indica una mayor predisposición hereditaria. Permite definir vigilancia, prevención y orientar a familiares de primer grado.",
    resultIntermediateLabel: "Resultado intermedio",
    resultIntermediateTitle: "Variante de significado incierto",
    resultIntermediateDesc:
      "El significado clínico aún no está claramente establecido. Puede requerir reanálisis futuro y seguimiento profesional.",
    resultReassuringLabel: "Resultado tranquilizador",
    resultReassuringTitle: "Negativo o no informativo",
    resultReassuringDesc:
      "No se identificaron variantes con relevancia clínica conocida en los genes evaluados. No descarta otros factores de riesgo.",
    importantNote:
      "Un resultado genético no significa que una persona tenga cáncer ni garantiza que lo desarrollará. El resultado debe interpretarse junto con la historia personal, familiar y criterio médico.",
    subpanelsEyebrow: "Subpaneles enfocados",
    subpanelsTitle: "Subpaneles especializados",
    subpanelsDesc:
      "Además del panel completo de 161 genes, GenoVision organiza la evaluación en subpaneles enfocados según el antecedente familiar, el tipo de cáncer y la indicación médica.",
    subpanelsClose:
      "El panel completo de 161 genes sigue siendo la opción más amplia. Los subpaneles son alternativas enfocadas bajo criterio médico.",
    comparisonEyebrow: "Comparativa",
    comparisonTitle: "Comparativa de paneles",
    comparisonDesc:
      "Tabla comparativa entre el Panel Completo de 161 genes y los subpaneles enfocados disponibles.",
    familyEyebrow: "Impacto familiar",
    familyTitle: "Tu resultado también puede proteger a tu familia",
    familyDesc:
      "Cuando existe una variante hereditaria, otros familiares pueden beneficiarse de orientación genética y estrategias preventivas.",
    familyItems: [
      "Identificación temprana en familiares de primer grado",
      "Vigilancia médica personalizada",
      "Decisiones preventivas con orientación clínica",
    ],
    geneListEyebrow: "Genes incluidos",
    geneListTitle: "Genes analizados en el Panel de Cáncer Hereditario",
    geneListDesc:
      "El panel completo evalúa 161 genes relacionados con predisposición hereditaria a distintos tipos de cáncer y síndromes familiares.",
    finalTitle: "Si hay cáncer en tu familia, esperar puede ser el error más costoso.",
    finalSubtitle:
      "Habla hoy con nuestro equipo y conoce si una evaluación genética es adecuada para ti.",
    finalPrimary: "Agendar consulta por WhatsApp",
    finalSecondary: "Ver proceso completo",
  },
  subpanelPages: {
    sectionGeneListEyebrow: "Genes incluidos",
    sectionGeneListTitle: "Genes analizados en este subpanel",
    sectionGeneListDesc:
      "Este subpanel evalúa genes seleccionados relacionados con predisposición hereditaria según el tipo de cáncer y la indicación clínica.",
    sectionWhatEvalEyebrow: "¿Qué evalúa este subpanel?",
    sectionWhoConsiderEyebrow: "¿Quién debería considerarlo?",
    sectionWhoConsiderTitle: "Situaciones que pueden orientar la decisión",
    sectionFamilyEyebrow: "Importancia para familiares",
    sectionFamilyTitle: "Tu resultado también puede proteger a tu familia",
    sectionFamilyDesc:
      "Cuando se identifica una variante hereditaria, otros familiares pueden beneficiarse de orientación genética y estrategias preventivas.",
    sectionProcessEyebrow: "Proceso de muestra y resultado",
    sectionProcessTitle: "De la muestra al plan de seguimiento",
    counterColorrectal: "10 genes incluidos",
    counterMama: "11 genes incluidos",
    counterCore: "83 genes incluidos",
    counterProstata: "17 genes incluidos",
    colorrectal: {
      heroSubtitle:
        "Evaluación genética enfocada en predisposición hereditaria a cáncer colorrectal, síndrome de Lynch, poliposis y otros síndromes gastrointestinales.",
      whatTitle: "Genes asociados con riesgo gastrointestinal hereditario",
      whatDesc:
        "Este subpanel evalúa genes con relevancia clínica conocida para predisposición hereditaria a cáncer colorrectal, síndrome de Lynch, poliposis adenomatosa familiar y otros síndromes gastrointestinales hereditarios. Permite identificar variantes que pueden orientar vigilancia endoscópica, prevención y evaluación familiar.",
      candidates: [
        {
          title: "Cáncer de colon en la familia",
          description:
            "Familiares de primer o segundo grado con diagnóstico de cáncer colorrectal.",
        },
        {
          title: "Diagnóstico antes de los 50 años",
          description:
            "Casos de cáncer colorrectal de inicio temprano en la familia.",
        },
        {
          title: "Múltiples pólipos",
          description:
            "Hallazgo de pólipos adenomatosos múltiples en estudios endoscópicos.",
        },
        {
          title: "Antecedentes familiares amplios",
          description:
            "Historia familiar de cáncer de colon, endometrio, ovario, estómago o páncreas.",
        },
      ],
      warningEyebrow: "Señales de alerta familiar",
      warningTitle: "Cuándo conviene una evaluación genética",
      warningDesc:
        "Estas señales pueden orientar a una conversación con tu médico sobre la pertinencia del estudio.",
      warningSigns: [
        "Cáncer colorrectal en familiares de primer grado",
        "Más de 10 pólipos adenomatosos",
        "Diagnóstico de cáncer colorrectal antes de los 50 años",
        "Tumores múltiples en una misma persona",
        "Familiares con síndrome de Lynch o poliposis confirmados",
        "Cánceres de endometrio, ovario, gástrico o urinario en la familia",
      ],
      relatedEyebrow: "Relación con otros cánceres hereditarios",
      relatedTitle: "Síndromes y condiciones evaluadas",
      relatedDesc:
        "Algunos genes incluidos pueden asociarse con riesgo de tumores fuera del tracto gastrointestinal, lo que ayuda a contextualizar la historia familiar.",
      relatedConditions: [
        {
          title: "Síndrome de Lynch",
          description:
            "Predisposición hereditaria a cáncer colorrectal, endometrial, gástrico, ovárico, urinario y otros.",
        },
        {
          title: "Poliposis adenomatosa familiar",
          description:
            "Desarrollo de múltiples pólipos en colon y recto con riesgo elevado de progresión.",
        },
        {
          title: "Poliposis asociada a MUTYH",
          description:
            "Forma de poliposis con patrón de herencia y manejo diferenciado.",
        },
        {
          title: "Síndromes hamartomatosos",
          description:
            "Como Peutz-Jeghers o poliposis juvenil, con afectación gastrointestinal.",
        },
      ],
      processSteps: [
        {
          title: "Orientación inicial",
          description:
            "Conversamos sobre tus antecedentes y aclaramos el alcance del subpanel.",
        },
        {
          title: "Toma de muestra no invasiva",
          description:
            "Saliva o muestra bucal, sin agujas ni procedimientos complejos.",
        },
        {
          title: "Análisis NGS enfocado",
          description:
            "Secuenciación de los genes asociados con predisposición colorrectal y poliposis.",
        },
        {
          title: "Interpretación clínica",
          description:
            "Tu reporte se contextualiza con tu historia personal y familiar.",
        },
        {
          title: "Plan con tu médico",
          description:
            "Recomendaciones para llevar el resultado a vigilancia y prevención.",
        },
      ],
      finalTitle: "¿Tu historia familiar incluye cáncer de colon o poliposis?",
      finalSubtitle:
        "Habla con nuestro equipo y conoce si una evaluación genética enfocada es adecuada para ti.",
    },
    mama: {
      heroSubtitle:
        "Evaluación genética enfocada en genes asociados con predisposición hereditaria a cáncer de mama, ovario y síndromes familiares relacionados.",
      whatTitle: "Genes con relevancia clínica para mama y ovario",
      whatDesc:
        "Este subpanel evalúa genes asociados con predisposición hereditaria a cáncer de mama y ovario, incluyendo genes de alto y moderado riesgo. La información puede orientar vigilancia, prevención y evaluación de familiares cuando aplica.",
      candidates: [
        {
          title: "Cáncer de mama en edad temprana",
          description:
            "Diagnósticos antes de los 50 años en la persona o en familiares de primer grado.",
        },
        {
          title: "Cáncer de mama bilateral",
          description:
            "Antecedente personal o familiar de cáncer en ambas mamas.",
        },
        {
          title: "Cáncer de ovario en la familia",
          description:
            "Casos de cáncer de ovario, trompa o peritoneo en familiares cercanos.",
        },
        {
          title: "Variantes conocidas en la familia",
          description:
            "Familiares con BRCA1/BRCA2 u otras variantes de riesgo identificadas.",
        },
      ],
      warningEyebrow: "Cáncer de mama y ovario en la familia",
      warningTitle: "Señales que pueden indicar componente hereditario",
      warningDesc:
        "Estos antecedentes pueden orientar la conversación con tu médico sobre la pertinencia del estudio.",
      warningSigns: [
        "Cáncer de mama antes de los 50 años",
        "Cáncer de ovario en la familia",
        "Cáncer de mama bilateral",
        "Varios familiares afectados por cáncer de mama u ovario",
        "Cáncer de mama en hombre",
        "Familiares con mutaciones conocidas (BRCA1, BRCA2 u otras)",
      ],
      familyImpact: [
        {
          title: "Hijas y hermanas",
          description:
            "Pueden beneficiarse de orientación genética y vigilancia personalizada.",
        },
        {
          title: "Familiares masculinos",
          description:
            "Algunas variantes también incrementan el riesgo en hombres (mama, próstata, páncreas).",
        },
        {
          title: "Generaciones futuras",
          description:
            "Conocer la variante familiar permite orientar a las siguientes generaciones.",
        },
        {
          title: "Coordinación con tu médico",
          description:
            "El resultado puede integrarse a vigilancia clínica y mamográfica.",
        },
      ],
      processSteps: [
        {
          title: "Orientación inicial",
          description:
            "Revisamos contigo tus motivos y antecedentes para confirmar la pertinencia del subpanel.",
        },
        {
          title: "Toma de muestra no invasiva",
          description: "Saliva o muestra bucal, en un procedimiento sencillo.",
        },
        {
          title: "Análisis NGS enfocado",
          description:
            "Secuenciación de los genes relacionados con cáncer de mama y ovario hereditarios.",
        },
        {
          title: "Interpretación clínica",
          description:
            "El reporte considera tu historia personal y familiar para una lectura integral.",
        },
        {
          title: "Plan con tu médico",
          description:
            "Recomendaciones de vigilancia, prevención y orientación familiar.",
        },
      ],
      finalTitle: "¿Hay cáncer de mama u ovario en tu familia?",
      finalSubtitle:
        "Una evaluación genética enfocada puede aportar información clave para prevención y vigilancia.",
    },
    core: {
      heroSubtitle:
        "Una evaluación genética esencial para identificar variantes clínicamente relevantes asociadas con predisposición hereditaria al cáncer.",
      whatEyebrow: "¿Qué es un panel core?",
      whatTitle: "Una selección esencial de genes con relevancia clínica",
      whatDesc1:
        "Un panel core agrupa genes con evidencia clínica establecida en predisposición hereditaria al cáncer. Es una opción más enfocada que un panel amplio, pensada para evaluación inicial o para indicaciones médicas específicas. El panel core ",
      whatDescStrong: "no reemplaza",
      whatDesc2:
        " al panel completo de 161 genes; ofrece una vía dirigida cuando el contexto clínico lo justifica.",
      whenEyebrow: "¿Cuándo conviene usarlo?",
      whenTitle: "Situaciones donde el panel core puede ser una buena opción",
      useCases: [
        {
          title: "Evaluación inicial",
          description:
            "Cuando se busca una primera mirada al riesgo hereditario antes de considerar un panel más amplio.",
        },
        {
          title: "Historia familiar sugestiva",
          description:
            "Antecedentes que orientan hacia genes específicos de alta y moderada penetrancia.",
        },
        {
          title: "Opción más enfocada",
          description:
            "Pacientes que requieren una evaluación dirigida por criterio médico.",
        },
        {
          title: "Orientación preventiva",
          description:
            "Personas con interés en prevención, bajo conducción profesional.",
        },
      ],
      compareCompletoBadge: "Panel completo",
      compareCompleto161: "161 genes",
      compareCompletoDesc:
        "La evaluación más amplia de GenoVision para predisposición hereditaria al cáncer. Incluye múltiples síndromes y genes de alta y moderada penetrancia.",
      compareCompletoBullets: [
        "Mayor cobertura genética",
        "Útil en historia familiar compleja",
        "Visión amplia de variantes hereditarias",
      ],
      seeFullPanel: "Ver panel completo",
      compareCoreBadge: "Panel core",
      compareCoreTitle: "Selección esencial",
      compareCoreDesc:
        "Un grupo enfocado de genes con relevancia clínica establecida. Pensado como evaluación inicial o bajo indicación médica específica.",
      compareCoreBullets: [
        "Cobertura más enfocada",
        "Evaluación inicial dirigida",
        "Bajo criterio médico",
      ],
      limitationsEyebrow: "Limitaciones",
      limitationsTitle: "Qué tener en cuenta",
      limitationsDesc:
        "Conocer las limitaciones del panel core ayuda a tomar una decisión informada con tu médico.",
      limitations: [
        "No analiza la totalidad de los 161 genes incluidos en el panel completo.",
        "Puede no detectar variantes en genes fuera del panel core.",
        "Un resultado negativo no descarta predisposición hereditaria por completo.",
        "Las variantes de significado incierto pueden requerir reanálisis futuro.",
        "El alcance debe definirse con tu médico tratante según el contexto clínico.",
      ],
      processSteps: [
        {
          title: "Orientación inicial",
          description:
            "Te ayudamos a entender el alcance del panel core y si encaja con tus objetivos.",
        },
        {
          title: "Toma de muestra",
          description: "Saliva o muestra bucal, no invasiva.",
        },
        {
          title: "Análisis NGS enfocado",
          description: "Secuenciación de los genes seleccionados del panel core.",
        },
        {
          title: "Interpretación clínica",
          description:
            "Lectura del reporte considerando tu historia personal y familiar.",
        },
        {
          title: "Plan con tu médico",
          description:
            "Recomendaciones para integrar el resultado a tu seguimiento clínico.",
        },
      ],
      finalTitle: "¿Buscas una evaluación inicial?",
      finalSubtitle:
        "Conversemos para definir si el panel core o el panel completo es la opción adecuada para tu caso.",
    },
    prostata: {
      heroSubtitle:
        "Evaluación genética enfocada en genes asociados con predisposición hereditaria a cáncer de próstata, especialmente útil cuando existe historia familiar, diagnóstico temprano o enfermedad agresiva.",
      whatTitle: "Genes con relevancia clínica para cáncer de próstata",
      whatDesc:
        "Este subpanel evalúa genes asociados con predisposición hereditaria a cáncer de próstata, incluyendo variantes en genes de reparación del ADN. La información puede orientar vigilancia, prevención y evaluación de familiares cuando aplica.",
      candidates: [
        {
          title: "Cáncer de próstata en familiares",
          description:
            "Padre, hermanos u otros familiares cercanos con cáncer de próstata.",
        },
        {
          title: "Diagnóstico a edad temprana",
          description:
            "Casos diagnosticados antes de los 55–60 años en la familia o en la persona.",
        },
        {
          title: "Enfermedad agresiva o metastásica",
          description:
            "Antecedente personal o familiar de cáncer de próstata avanzado o metastásico.",
        },
        {
          title: "Otros cánceres relacionados",
          description:
            "Mama, ovario, páncreas o próstata en familiares cercanos pueden indicar componente hereditario.",
        },
      ],
      warningEyebrow: "Cáncer de próstata en la familia",
      warningTitle: "Señales que pueden indicar componente hereditario",
      warningDesc:
        "Estos antecedentes pueden orientar la conversación con tu médico sobre la pertinencia del estudio.",
      warningSigns: [
        "Cáncer de próstata diagnosticado antes de los 55–60 años",
        "Enfermedad metastásica o de alto riesgo",
        "Varios familiares con cáncer de próstata",
        "Familiares con cáncer de mama, ovario o páncreas",
        "Familiares con variantes BRCA1/BRCA2 u otras de riesgo",
        "Etnias con mayor prevalencia documentada bajo criterio médico",
      ],
      familyImpact: [
        {
          title: "Hijos y hermanos",
          description:
            "Pueden beneficiarse de orientación genética y vigilancia personalizada.",
        },
        {
          title: "Familiares mujeres",
          description:
            "Algunas variantes también incrementan el riesgo de mama, ovario o páncreas en familiares mujeres.",
        },
        {
          title: "Generaciones futuras",
          description:
            "Conocer la variante familiar permite orientar a las siguientes generaciones.",
        },
        {
          title: "Coordinación con tu médico",
          description:
            "El resultado puede integrarse a vigilancia clínica y al plan urológico.",
        },
      ],
      processSteps: [
        {
          title: "Orientación inicial",
          description:
            "Revisamos contigo motivos y antecedentes para confirmar la pertinencia del subpanel.",
        },
        {
          title: "Toma de muestra no invasiva",
          description: "Saliva o muestra bucal, en un procedimiento sencillo.",
        },
        {
          title: "Análisis NGS enfocado",
          description:
            "Secuenciación de los genes relacionados con cáncer de próstata hereditario y síndromes asociados.",
        },
        {
          title: "Interpretación clínica",
          description:
            "El reporte considera tu historia personal y familiar para una lectura integral.",
        },
        {
          title: "Plan con tu médico",
          description:
            "Recomendaciones de vigilancia, prevención y orientación familiar.",
        },
      ],
      finalTitle: "¿Hay cáncer de próstata en tu familia?",
      finalSubtitle:
        "Una evaluación genética enfocada puede aportar información clave para vigilancia y prevención.",
    },
  },
  products: {
    "panel-cancer-hereditario": {
      title: "Panel de Cáncer Hereditario",
      description:
        "Análisis de genes asociados a predisposición hereditaria a cáncer de mama, ovario, colon, próstata, páncreas, melanoma y otros síndromes hereditarios.",
      categoryLabel: "Cáncer hereditario",
      ctaLabel: "Ver panel",
    },
    "panel-cardio-pulmonar": {
      title: "Panel Cardio-Pulmonar",
      description:
        "Evaluación genética orientada a condiciones cardiovasculares y pulmonares hereditarias.",
      categoryLabel: "Salud cardiovascular",
      ctaLabel: "Solicitar información",
    },
    "panel-neurologico": {
      title: "Panel Neurológico",
      description:
        "Análisis genético para condiciones neurológicas hereditarias y neurodegenerativas seleccionadas.",
      categoryLabel: "Neurología",
      ctaLabel: "Solicitar información",
    },
    "panel-inmunologico": {
      title: "Panel Inmunológico",
      description:
        "Evaluación de variantes asociadas con inmunodeficiencias primarias y trastornos autoinmunes/autoinflamatorios.",
      categoryLabel: "Inmunología",
      ctaLabel: "Solicitar información",
    },
    "panel-diabetes": {
      title: "Panel de Diabetes",
      description:
        "Análisis genético enfocado en predisposición y formas monogénicas relacionadas con diabetes.",
      categoryLabel: "Diabetes",
      ctaLabel: "Solicitar información",
    },
    "panel-oftalmologico": {
      title: "Panel Oftalmológico",
      description:
        "Evaluación genética para trastornos oculares hereditarios y retinopatías.",
      categoryLabel: "Oftalmología",
      ctaLabel: "Solicitar información",
    },
    "panel-respiratorio": {
      title: "Panel Respiratorio",
      description:
        "Análisis de variantes asociadas a enfermedades respiratorias hereditarias o predisposición pulmonar.",
      categoryLabel: "Respiratorio",
      ctaLabel: "Solicitar información",
    },
    "panel-autismo": {
      title: "Panel de Autismo / Neurodesarrollo",
      description:
        "Análisis genético orientado a condiciones del neurodesarrollo bajo criterio médico.",
      categoryLabel: "Neurodesarrollo",
      ctaLabel: "Solicitar información",
    },
    "panel-farmacogenomica": {
      title: "Panel de Farmacogenómica",
      description:
        "Evaluación genética para orientar respuesta a medicamentos y metabolismo farmacológico.",
      categoryLabel: "Farmacogenómica",
      ctaLabel: "Solicitar información",
    },
    "panel-tiroides": {
      title: "Panel de Tiroides",
      description:
        "Evaluación genética relacionada con predisposición a trastornos tiroideos seleccionados.",
      categoryLabel: "Tiroides",
      ctaLabel: "Solicitar información",
    },
    "exoma-completo": {
      title: "Secuenciación de Exoma Completo (WES)",
      description:
        "Análisis de regiones codificantes del genoma para investigación clínica avanzada bajo indicación médica.",
      categoryLabel: "Exoma / Genoma",
      ctaLabel: "Solicitar información",
    },
    "reporte-cardiometabolico": {
      title: "Reporte Cardiometabólico / PRS",
      description:
        "Reporte de riesgo genético cardiometabólico para prevención personalizada.",
      categoryLabel: "Salud cardiovascular",
      ctaLabel: "Solicitar información",
    },
    "neuro-panel-wgs": {
      title: "Neuro Panel Whole Genome",
      description:
        "Análisis genómico amplio para condiciones neurológicas complejas bajo indicación médica.",
      categoryLabel: "Neurología",
      ctaLabel: "Solicitar información",
    },
  },
  productCategories: {
    all: "Todos",
    cancer: "Cáncer hereditario",
    cardiovascular: "Salud cardiovascular",
    neurologia: "Neurología",
    inmunologia: "Inmunología",
    diabetes: "Diabetes",
    oftalmologia: "Oftalmología",
    farmacogenomica: "Farmacogenómica",
    tiroides: "Tiroides",
    exoma: "Exoma / Genoma",
  },
  subpanels: {
    "colorrectal-poliposis": {
      title: "Cáncer Colorrectal Hereditario y Poliposis",
      shortTitle: "Panel Colorrectal y Poliposis",
      description:
        "Enfocado en genes asociados con cáncer colorrectal hereditario, síndrome de Lynch, poliposis adenomatosa familiar y otros síndromes gastrointestinales hereditarios.",
      indications: [
        "Cáncer de colon en la familia",
        "Diagnóstico antes de los 50 años",
        "Múltiples pólipos",
        "Historia familiar de cáncer de colon, endometrio, ovario, estómago o páncreas",
      ],
      enfoque: "Colon, Lynch, poliposis y gastrointestinal hereditario",
      mejorPara: "Antecedentes de colon o pólipos",
      nivel: "Enfocado",
      whatsappMessage:
        "Hola GenoVision, me interesa información sobre el Panel de Cáncer Colorrectal Hereditario y Poliposis.",
    },
    "mama-hereditario": {
      title: "Cáncer de Mama y Ovario Hereditario",
      shortTitle: "Panel Cáncer de Mama y Ovario Hereditario",
      description:
        "Enfocado en genes relacionados con predisposición hereditaria a cáncer de mama, ovario y síndromes familiares asociados.",
      indications: [
        "Cáncer de mama en edad temprana",
        "Cáncer de mama bilateral",
        "Cáncer de ovario en la familia",
        "Familiares con variantes BRCA1/BRCA2 u otros genes de riesgo",
      ],
      enfoque: "Mama, ovario y síndromes relacionados",
      mejorPara: "Antecedentes de mama u ovario",
      nivel: "Enfocado",
      whatsappMessage:
        "Hola GenoVision, me interesa información sobre el Panel de Cáncer de Mama y Ovario Hereditario.",
    },
    core: {
      title: "Panel Core de Cáncer Hereditario",
      shortTitle: "Panel Core",
      description:
        "Selección esencial de genes clínicamente relevantes para evaluación inicial de predisposición hereditaria al cáncer.",
      indications: [
        "Evaluación inicial de riesgo hereditario",
        "Historia familiar sugestiva",
        "Pacientes que requieren una opción más enfocada",
        "Orientación médica preventiva",
      ],
      enfoque: "Genes esenciales de riesgo hereditario",
      mejorPara: "Evaluación inicial o bajo criterio médico",
      nivel: "Básico / enfocado",
      whatsappMessage:
        "Hola GenoVision, me interesa información sobre el Panel Core de Cáncer Hereditario.",
    },
    "prostata-hereditario": {
      title: "Cáncer de Próstata Hereditario",
      shortTitle: "Panel Cáncer de Próstata Hereditario",
      description:
        "Enfocado en genes asociados con predisposición hereditaria a cáncer de próstata, especialmente cuando existe historia familiar o diagnóstico temprano/agresivo.",
      indications: [
        "Cáncer de próstata en familiares",
        "Diagnóstico temprano",
        "Enfermedad agresiva o metastásica en la familia",
        "Historia familiar de mama, ovario, páncreas o próstata",
      ],
      enfoque: "Próstata y síndromes relacionados",
      mejorPara: "Antecedentes de próstata agresiva o temprana",
      nivel: "Enfocado",
      whatsappMessage:
        "Hola GenoVision, me interesa información sobre el Panel de Cáncer de Próstata Hereditario.",
    },
  },
};

const en: Dictionary = {
  nav: {
    home: "Home",
    productos: "Products",
    proceso: "Process",
    medicos: "For Physicians",
    faq: "FAQ",
    contacto: "Contact",
    whatsapp: "WhatsApp",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main",
    mobileNav: "Mobile",
  },
  langSwitcher: {
    label: "Language",
    es: "ES",
    en: "EN",
    switchTo: "Switch to",
  },
  footer: {
    description:
      "Clinical genomics to identify hereditary predisposition to cancer and guide preventive decisions.",
    navigation: "Navigation",
    contact: "Contact",
    legal: "Legal",
    legalText:
      "The information on this site is educational and does not replace medical consultation. Genetic results must be interpreted by qualified healthcare professionals.",
    rights: "All rights reserved.",
    location: "Mérida, Yucatán, Mexico",
  },
  whatsappFloat: { aria: "Message us on WhatsApp" },
  contactCTA: {
    defaultTitle: "If there's cancer in your family, don't ignore it.",
    defaultSubtitle:
      "Talk to our team and learn the full process of the Hereditary Cancer Panel.",
    defaultPrimary: "Message us on WhatsApp",
    writeWhatsapp: "Message us on WhatsApp",
  },
  productCard: {
    statusDisponible: "Available",
    statusProximamente: "Coming soon",
    featured: "Featured",
    genesEvaluados: "genes evaluated",
    requestInfo: "Request information",
  },
  subpanelCard: { geneCount: "genes", cta: "View subpanel" },
  subpanelHero: {
    breadcrumbHome: "Home",
    breadcrumbProducts: "Products",
    breadcrumbMain: "Hereditary Cancer Panel",
    badgeSubpanel: "Specialized subpanel",
    titlePrefix: "",
    scheduleEval: "Schedule evaluation",
    seeFullPanel: "View full panel (161 genes)",
  },
  medicalDisclaimer: {
    label: "Important:",
    text: "This test does not diagnose cancer. It evaluates hereditary genetic predisposition and must be interpreted alongside personal and family history and medical judgment.",
  },
  backToMain: "View full 161-gene panel",
  doctorReferral: {
    eyebrow: "For physicians",
    title: "Are you a physician? Learn how to refer patients",
    description:
      "We support healthcare professionals with broad genetic analysis, clear reports, and logistical coordination to integrate genomics into clinical practice.",
    cta: "View information for physicians",
    forDoctors: "For Physicians",
  },
  trustBar: {
    items: [
      { label: "161 genes", sub: "evaluated" },
      { label: "NGS technology", sub: "next-generation sequencing" },
      { label: "Buccal or saliva sample", sub: "non-invasive" },
      { label: "Results in ~28 days", sub: "estimated turnaround" },
      { label: "Professional interpretation", sub: "included" },
    ],
  },
  contactForm: {
    receivedTitle: "We received your information!",
    receivedBody:
      "To respond right away, we've prepared a WhatsApp message with your details. Just click the button to send it.",
    continueWa: "Continue on WhatsApp",
    sendAnother: "Send another request",
    name: "Name",
    namePlaceholder: "Your full name",
    phone: "Phone",
    phonePlaceholder: "999 000 0000",
    email: "Email",
    emailPlaceholder: "you@email.com",
    forWhom: "Is the test for you or for a relative?",
    forWhomPlaceholder: "Select an option",
    forMe: "For me",
    forFamily: "For a relative",
    family: "Is there a family history of cancer?",
    familyPlaceholder: "Select an option",
    yes: "Yes",
    no: "No",
    notSure: "Not sure",
    message: "Message",
    messagePlaceholder: "Briefly tell us how we can help you",
    privacy:
      "By submitting this form you consent to GenoVision contacting you with information. Your data will not be shared with third parties.",
    submit: "Send request",
    waMessageHeader: "Hello GenoVision, I'd like to receive information.",
    waLineName: "Name",
    waLineFor: "The test is",
    waLineFamily: "Family history of cancer",
    waLineMessage: "Message",
  },
  comparisonTable: {
    option: "Option",
    genes: "Genes",
    enfoque: "Focus",
    mejorPara: "Best for",
    nivel: "Coverage level",
    cta: "CTA",
    recommended: "Recommended",
    geneSuffix: "genes",
    primaryWa:
      "Hello GenoVision, I'd like to schedule the Full Hereditary Cancer Panel (161 genes).",
  },
  geneListPanel: {
    counter: "161 genes included",
    searchPlaceholder: "Search gene…",
    searchLabel: "Search gene",
    expand: "View all 161 genes",
    collapse: "Hide list",
    noResults: "That gene was not found in the list.",
    disclaimer:
      "The inclusion of a gene in the panel does not mean a cancer diagnosis. Results must be interpreted alongside personal and family history and medical judgment.",
    resultSingular: "result",
    resultPlural: "results",
  },
  subpanelGeneList: {
    searchPlaceholder: "Search gene…",
    searchLabel: "Search gene",
    noResults: "That gene was not found in the list.",
    disclaimer:
      "The inclusion of a gene in this subpanel does not mean a cancer diagnosis. Results must be interpreted alongside personal and family history and medical judgment.",
    resultSingular: "result",
    resultPlural: "results",
  },
  home: {
    heroBadge: "Clinical genomics in Mérida",
    heroTitle1: "Predict your genetic cancer risk",
    heroTitle2: "before it's too late",
    heroDot: ".",
    heroDescPart1: "At GenoVision we analyze ",
    heroDesc161: "161 genes",
    heroDescPart2:
      " linked to hereditary cancer predisposition using NGS technology, helping you make preventive decisions with clear, professional information.",
    scheduleWa: "Schedule a consultation on WhatsApp",
    seePanel: "View cancer panel",
    reasons: [
      {
        title: "Family history",
        description:
          "Cancer cases in parents, siblings, or close relatives may indicate a hereditary component.",
      },
      {
        title: "Cancer at an early age",
        description:
          "Diagnoses before age 50 in the family are a signal worth considering.",
      },
      {
        title: "Multiple cases in the family",
        description:
          "Several relatives affected, even across different generations, suggest genetic predisposition.",
      },
      {
        title: "Personalized prevention",
        description:
          "Knowing your genetic profile lets you adjust check-ups, habits, and medical surveillance.",
      },
      {
        title: "Informed medical decisions",
        description:
          "Genetic information that supports your physician in defining follow-up strategies.",
      },
    ],
    sectionWhyEyebrow: "Why it matters",
    sectionWhyTitleA: "Cancer doesn't always warn you.",
    sectionWhyTitleB: "Your DNA can give signals beforehand.",
    sectionWhyDesc:
      "Identifying hereditary genetic predisposition lets you act early, monitor, and guide preventive decisions with your physician.",
    howEyebrow: "How it works",
    howTitle: "A clear, guided clinical process",
    howDesc:
      "From the first consultation to the delivery of results, we accompany you every step of the way.",
    howCta: "View full process",
    steps: [
      {
        title: "Initial consultation",
        description:
          "We answer your questions and review history to determine if the panel is appropriate.",
      },
      {
        title: "Buccal or saliva sample",
        description: "A simple, painless, and non-invasive procedure.",
      },
      {
        title: "NGS genomic analysis",
        description:
          "Next-generation sequencing to evaluate multiple genes simultaneously.",
      },
      {
        title: "Professional interpretation",
        description:
          "Your result is interpreted within your clinical and family context.",
      },
      {
        title: "Follow-up recommendations",
        description:
          "We guide you in sharing the result with your treating physician and defining a plan.",
      },
    ],
    featuredEyebrow: "Featured product",
    featuredTitle: "Hereditary Cancer Panel",
    featuredDesc:
      "Advanced evaluation of 161 genes associated with hereditary predisposition to various types of cancer.",
    featuredBadges: ["161 genes", "NGS", "Prevention", "Hereditary risk"],
    featuredCta1: "View panel details",
    featuredCta2: "Talk to a specialist",
    catalogPrompt: "Looking for other panels?",
    catalogLink: "View full catalog",
    finalTitle: "If there's cancer in your family, don't ignore it.",
    finalSubtitle:
      "A conversation may be the first step to determine whether a genetic evaluation is right for you.",
    finalSecondary: "Learn the process",
  },
  productosPage: {
    eyebrow: "Catalog",
    title: "Catalog of genetic tests",
    description:
      "Explore our genomic tests designed for prevention, hereditary risk, and personalized medicine. Some panels are available upon request and under medical indication.",
    catalogEmpty: "No panels in this category yet. We'll be adding more soon.",
    finalTitle: "Need help choosing a panel?",
    finalSubtitle:
      "Tell us your case and we'll help determine if a genetic test is right for you or a family member.",
    finalSecondary: "Learn the process",
    subpanelsTitle: "Hereditary cancer subpanels",
    subpanelsEyebrow: "Hereditary cancer",
    subpanelsDesc:
      "Focused subpanels derived from the 161-gene Hereditary Cancer Panel, organized by cancer type and medical indication.",
    filterLabel: "Catalog filters",
    categoryAll: "All",
  },
  procesoPage: {
    eyebrow: "Full process",
    title: "From DNA to result: how it works",
    description:
      "Every stage of the GenoVision process is designed to give you clarity, support, and clinical rigor.",
    timelineEyebrow: "Timeline",
    timelineTitle: "9 steps, continuous support",
    timelineDesc:
      "We guide you from the first conversation to the follow-up plan with your treating physician.",
    sampleEyebrow: "Sample preparation",
    sampleTitle: "Instructions for buccal sampling",
    sampleDesc:
      "For buccal sampling: brush teeth before collection and do not eat for 30 minutes. Drinking water is fine. These guidelines help us obtain a quality sample for genomic analysis.",
    sampleItems: [
      { t: "Brush your teeth", d: "Before collecting the sample." },
      { t: "Wait 30 minutes", d: "No eating or chewing gum." },
      { t: "Water is okay", d: "Water doesn't affect the sample." },
      { t: "Follow the kit instructions", d: "We guide you step by step during collection." },
    ],
    finalTitle: "Ready to start?",
    finalSubtitle:
      "Begin with a conversation. We explain the entire process and answer your questions with no commitment.",
    finalSecondary: "View hereditary cancer panel",
    steps: [
      {
        title: "WhatsApp contact",
        description:
          "Start the process by sending us a message. Our team replies and answers your initial questions.",
      },
      {
        title: "Orientation consultation",
        description:
          "Initial session to discuss your reasons, expectations, and clarify the scope of the genetic test.",
      },
      {
        title: "Family history questionnaire",
        description:
          "We document relevant oncology history to interpret the result in context.",
      },
      {
        title: "Buccal or saliva sample",
        description:
          "Simple, painless, and non-invasive. We walk you through how to prepare.",
      },
      {
        title: "Sample shipment and processing",
        description:
          "The sample is processed under controlled conditions to maintain traceability and integrity.",
      },
      {
        title: "NGS sequencing",
        description:
          "Next-generation sequencing technology to evaluate multiple genes simultaneously.",
      },
      {
        title: "Bioinformatics and interpretation",
        description:
          "Bioinformatic analysis and professional review to classify identified variants.",
      },
      {
        title: "Results delivery",
        description:
          "Your report is delivered in a clear session, with explanations of each section.",
      },
      {
        title: "Recommendations for medical follow-up",
        description:
          "We guide you in sharing the result with your treating physician and defining a personalized plan.",
      },
    ],
  },
  medicosPage: {
    heroBadge: "For healthcare professionals",
    heroTitle: "Clinical genomics to support medical decisions",
    heroDesc:
      "GenoVision works as a partner for physicians who want to integrate genetic testing into prevention, surveillance, and hereditary cancer risk stratification.",
    heroCta1: "Request information",
    heroCta2: "View featured panel",
    reasonsEyebrow: "Why refer patients",
    reasonsTitle: "Information that enriches clinical practice",
    reasonsDesc:
      "Genetic testing, integrated with clinical judgment, can add another axis for personalized care.",
    reasons: [
      {
        title: "Risk stratification",
        description:
          "Genetic information that complements clinical evaluation and family history.",
      },
      {
        title: "Personalized surveillance",
        description:
          "Support for defining surveillance schemes tailored to each patient's hereditary profile.",
      },
      {
        title: "Preventive strategies",
        description:
          "An additional tool when considering primary and secondary prevention in families with history.",
      },
      {
        title: "Family guidance",
        description:
          "When applicable, the result can guide evaluation and surveillance in first-degree relatives.",
      },
    ],
    indicationsEyebrow: "Clinical indications",
    indicationsTitle: "When to consider the hereditary panel",
    indicationsDesc:
      "Some clinical contexts where genetic testing can provide useful information.",
    indications: [
      "Personal or family history of cancer in one or more first-degree relatives.",
      "Cancer diagnosis at an early age (≤50 years) in the family.",
      "Breast, ovarian, colon, prostate, pancreatic, or melanoma cancer with a pattern suggesting a hereditary syndrome.",
      "Multiple cancer cases across generations.",
      "Bilateral, multifocal, or more than one primary tumor in the same patient.",
      "Patients interested in personalized prevention under medical guidance.",
    ],
    indicationsFootnote:
      "Actual indications are defined by clinical judgment and current guidelines for each case.",
    providesEyebrow: "What GenoVision provides",
    providesTitle: "Comprehensive support at every stage",
    provides: [
      {
        title: "Broad genetic analysis",
        description:
          "Panel of 161 genes associated with hereditary cancer predisposition using NGS sequencing.",
      },
      {
        title: "Clear clinical report",
        description:
          "Reports with variant classification and clinical context to support your interpretation.",
      },
      {
        title: "Logistical coordination",
        description:
          "Non-invasive sample collection, sample traceability, and timely delivery of results.",
      },
      {
        title: "Educational material",
        description:
          "Informational support for your patients before and after the test, in clear language.",
      },
    ],
    eduBadge: "Patient education",
    eduTitle: "Material and pre-test guidance",
    eduDesc:
      "We support your patients with clear information before and after the test, without replacing the medical consultation. The key clinical conversation stays with you.",
    interpBadge: "Result interpretation",
    interpTitle: "Reports prepared for clinical use",
    interpDesc:
      "Each report includes clinical context, variant classification, and relevant notes to support your interpretation and decisions.",
    finalTitle: "Refer patients with a clinically useful genomic test",
    finalSubtitle:
      "We support you with educational material, logistical coordination, and clear reports.",
    finalCta: "Request information to refer patients",
  },
  contactoPage: {
    eyebrow: "Contact",
    title: "Let's talk about your case",
    description:
      "We answer your questions, explain the process, and guide you with no commitment. The initial consultation is the first step.",
    contactDataTitle: "Contact details",
    waLabel: "WhatsApp",
    phoneLabel: "Phone",
    addressLabel: "Address",
    waSendNow: "Send WhatsApp now",
    mapTitle: "GenoVision map - CÉNIT Medical Center",
  },
  faqPage: {
    eyebrow: "Frequently asked questions",
    title: "We answer your questions",
    description:
      "Clear and honest information about the Hereditary Cancer Panel, sampling process, and result interpretation.",
    finalTitle: "Have a question that isn't here?",
    finalSubtitle: "Message us on WhatsApp and we'll reply directly.",
    items: [
      {
        q: "Does this test diagnose cancer?",
        a: "No. This test identifies hereditary genetic predisposition. It does not replace diagnostic studies or medical consultation.",
      },
      {
        q: "What sample is needed?",
        a: "Saliva or a buccal sample. It is a simple, non-invasive procedure that can be done comfortably.",
      },
      {
        q: "How long do results take?",
        a: "Approximately 28 days from when the laboratory receives the sample.",
      },
      {
        q: "What does it mean to analyze 161 genes?",
        a: "It means multiple genes associated with hereditary cancer predisposition are reviewed in a single analysis, giving a broad and efficient view.",
      },
      {
        q: "Who should take the test?",
        a: "People with family history of cancer, early-onset cancer in the family, multiple affected relatives, or those interested in personalized prevention under medical guidance.",
      },
      {
        q: "What happens if a variant is found?",
        a: "The result must be reviewed professionally to define surveillance, prevention, and possible family guidance. Your treating physician integrates this information into your health plan.",
      },
      {
        q: "Can I take the test even if I don't have cancer?",
        a: "Yes. The main focus of the test is prevention and risk evaluation in people without an oncology diagnosis.",
      },
      {
        q: "Does it apply to my whole family?",
        a: "A result can guide whether other relatives should consider genetic evaluation. However, each family member must be assessed individually.",
      },
      {
        q: "Where are you located?",
        a: "CÉNIT Medical Center, C. 15 501-C 919, Col. Altabrisa, 97130 Mérida, Yucatán.",
      },
      {
        q: "How do I book?",
        a: "By WhatsApp at 999 366 0543. We guide you on the next steps.",
      },
    ],
  },
  panelHereditarioPage: {
    breadcrumbCurrent: "Hereditary Cancer Panel",
    badgeAvailable: "Available",
    badgeFeatured: "Featured product",
    title: "Hereditary Cancer Panel",
    descPart1: "Advanced genetic analysis of ",
    desc161: "161 genes",
    descPart2:
      " to identify hereditary cancer predisposition and guide preventive decisions with your physician.",
    quickBadges: [
      "161 genes",
      "NGS",
      "Buccal or saliva sample",
      "Results in ~28 days",
      "Initial consultation included",
    ],
    scheduleEval: "Schedule evaluation",
    seeFullProcess: "View full process",
    whatEyebrow: "What is this test?",
    whatTitle: "A broad view of your hereditary predisposition",
    whatDescPart1: "GenoVision's ",
    whatDescPart2: "Hereditary Cancer Panel",
    whatDescPart3:
      " analyzes genes associated with hereditary cancer predisposition syndromes. The goal is to identify genetic variants that may increase risk and help define prevention strategies, medical surveillance, and family guidance.",
    whoEyebrow: "Who is it for?",
    whoTitle: "Who should consider it",
    whoDesc:
      "If you identify with any of the following scenarios, a genetic evaluation can provide valuable information.",
    candidates: [
      {
        title: "Relatives diagnosed with cancer",
        description:
          "Parents, siblings, or close relatives with an oncology history.",
      },
      {
        title: "Specific cancers in the family",
        description:
          "Breast, ovarian, colon, prostate, pancreatic, or melanoma in one or more relatives.",
      },
      {
        title: "Early-age diagnosis",
        description: "Cases diagnosed before age 50 in the family.",
      },
      {
        title: "Multiple generations affected",
        description:
          "Several relatives with cancer across different generations of the family tree.",
      },
      {
        title: "People seeking prevention",
        description:
          "Those who want to make preventive decisions with genetic information.",
      },
      {
        title: "Patients referred by their physician",
        description:
          "When a specialist considers a genetic evaluation useful.",
      },
    ],
    typesEyebrow: "Cancer types evaluated",
    typesTitle: "Clinical coverage of the panel",
    typesDesc:
      "The panel includes genes associated with hereditary predisposition to multiple cancer types and oncology syndromes.",
    cancerTypes: [
      "Breast",
      "Ovary",
      "Colon / Lynch",
      "Prostate",
      "Pancreas",
      "Melanoma",
      "Endometrium",
      "Thyroid",
      "Gastric",
      "Renal",
      "Other hereditary syndromes",
    ],
    techEyebrow: "Technology",
    techTitle: "NGS technology",
    techDesc:
      "We use next-generation sequencing to evaluate multiple genes simultaneously. This technology provides a broad view of variants associated with hereditary cancer predisposition.",
    processEyebrow: "How the process works",
    processTitle: "From first contact to follow-up plan",
    processDesc:
      "Every stage is designed to be clear, non-invasive, and professionally guided.",
    processSteps: [
      {
        title: "Initial guidance",
        description:
          "We answer questions and review whether the panel is appropriate for you.",
      },
      {
        title: "Family history",
        description:
          "We document relevant history to interpret the result in context.",
      },
      {
        title: "Non-invasive sample",
        description:
          "Buccal or saliva sample, no needles or complex procedures.",
      },
      {
        title: "Genetic analysis",
        description:
          "Next-generation sequencing of 161 genes associated with hereditary cancer.",
      },
      {
        title: "Result interpretation",
        description:
          "Your report is interpreted clinically and contextualized with your history.",
      },
      {
        title: "Follow-up plan",
        description:
          "Recommendations to share the result with your treating physician.",
      },
    ],
    resultsEyebrow: "What the result may show",
    resultsTitle: "Three possible types of result",
    resultsDesc:
      "The report is always interpreted within each person's clinical and family context.",
    resultPositiveLabel: "Positive result",
    resultPositiveTitle: "Pathogenic / likely pathogenic variant",
    resultPositiveDesc:
      "Indicates greater hereditary predisposition. Allows defining surveillance, prevention, and guidance for first-degree relatives.",
    resultIntermediateLabel: "Intermediate result",
    resultIntermediateTitle: "Variant of uncertain significance",
    resultIntermediateDesc:
      "Clinical meaning is not yet clearly established. May require future reanalysis and professional follow-up.",
    resultReassuringLabel: "Reassuring result",
    resultReassuringTitle: "Negative or non-informative",
    resultReassuringDesc:
      "No variants of known clinical relevance were identified in the evaluated genes. It does not rule out other risk factors.",
    importantNote:
      "A genetic result does not mean a person has cancer nor guarantees they will develop it. The result must be interpreted alongside personal and family history and medical judgment.",
    subpanelsEyebrow: "Focused subpanels",
    subpanelsTitle: "Specialized subpanels",
    subpanelsDesc:
      "In addition to the full 161-gene panel, GenoVision organizes evaluation into focused subpanels based on family history, cancer type, and medical indication.",
    subpanelsClose:
      "The full 161-gene panel remains the broadest option. The subpanels are focused alternatives under medical judgment.",
    comparisonEyebrow: "Comparison",
    comparisonTitle: "Panel comparison",
    comparisonDesc:
      "Comparison table between the Full 161-gene Panel and the available focused subpanels.",
    familyEyebrow: "Family impact",
    familyTitle: "Your result can also protect your family",
    familyDesc:
      "When a hereditary variant exists, other relatives can benefit from genetic guidance and preventive strategies.",
    familyItems: [
      "Early identification in first-degree relatives",
      "Personalized medical surveillance",
      "Preventive decisions with clinical guidance",
    ],
    geneListEyebrow: "Genes included",
    geneListTitle: "Genes analyzed in the Hereditary Cancer Panel",
    geneListDesc:
      "The full panel evaluates 161 genes associated with hereditary predisposition to various cancer types and family syndromes.",
    finalTitle:
      "If there's cancer in your family, waiting may be the costliest mistake.",
    finalSubtitle:
      "Talk to our team today and find out if a genetic evaluation is right for you.",
    finalPrimary: "Schedule a consultation on WhatsApp",
    finalSecondary: "View full process",
  },
  subpanelPages: {
    sectionGeneListEyebrow: "Genes included",
    sectionGeneListTitle: "Genes analyzed in this subpanel",
    sectionGeneListDesc:
      "This subpanel evaluates selected genes related to hereditary predisposition based on cancer type and clinical indication.",
    sectionWhatEvalEyebrow: "What does this subpanel evaluate?",
    sectionWhoConsiderEyebrow: "Who should consider it?",
    sectionWhoConsiderTitle: "Situations that may guide the decision",
    sectionFamilyEyebrow: "Importance for relatives",
    sectionFamilyTitle: "Your result can also protect your family",
    sectionFamilyDesc:
      "When a hereditary variant is identified, other relatives can benefit from genetic guidance and preventive strategies.",
    sectionProcessEyebrow: "Sample and result process",
    sectionProcessTitle: "From sample to follow-up plan",
    counterColorrectal: "10 genes included",
    counterMama: "11 genes included",
    counterCore: "83 genes included",
    counterProstata: "17 genes included",
    colorrectal: {
      heroSubtitle:
        "Genetic evaluation focused on hereditary predisposition to colorectal cancer, Lynch syndrome, polyposis, and other gastrointestinal syndromes.",
      whatTitle: "Genes associated with hereditary gastrointestinal risk",
      whatDesc:
        "This subpanel evaluates genes with established clinical relevance for hereditary predisposition to colorectal cancer, Lynch syndrome, familial adenomatous polyposis, and other hereditary gastrointestinal syndromes. It can identify variants that may guide endoscopic surveillance, prevention, and family evaluation.",
      candidates: [
        {
          title: "Colon cancer in the family",
          description:
            "First- or second-degree relatives diagnosed with colorectal cancer.",
        },
        {
          title: "Diagnosis before age 50",
          description: "Early-onset colorectal cancer cases in the family.",
        },
        {
          title: "Multiple polyps",
          description:
            "Discovery of multiple adenomatous polyps in endoscopic studies.",
        },
        {
          title: "Broad family history",
          description:
            "Family history of colon, endometrial, ovarian, gastric, or pancreatic cancer.",
        },
      ],
      warningEyebrow: "Family warning signs",
      warningTitle: "When a genetic evaluation is worth considering",
      warningDesc:
        "These signs may guide a conversation with your physician about whether the test is appropriate.",
      warningSigns: [
        "Colorectal cancer in first-degree relatives",
        "More than 10 adenomatous polyps",
        "Colorectal cancer diagnosed before age 50",
        "Multiple tumors in the same person",
        "Relatives with confirmed Lynch syndrome or polyposis",
        "Endometrial, ovarian, gastric, or urinary cancers in the family",
      ],
      relatedEyebrow: "Relation to other hereditary cancers",
      relatedTitle: "Syndromes and conditions evaluated",
      relatedDesc:
        "Some included genes can be associated with risk for tumors outside the gastrointestinal tract, helping contextualize family history.",
      relatedConditions: [
        {
          title: "Lynch syndrome",
          description:
            "Hereditary predisposition to colorectal, endometrial, gastric, ovarian, urinary, and other cancers.",
        },
        {
          title: "Familial adenomatous polyposis",
          description:
            "Development of multiple polyps in colon and rectum with high progression risk.",
        },
        {
          title: "MUTYH-associated polyposis",
          description:
            "A form of polyposis with distinct inheritance pattern and management.",
        },
        {
          title: "Hamartomatous syndromes",
          description:
            "Such as Peutz-Jeghers or juvenile polyposis, with gastrointestinal involvement.",
        },
      ],
      processSteps: [
        {
          title: "Initial guidance",
          description:
            "We discuss your history and clarify the scope of the subpanel.",
        },
        {
          title: "Non-invasive sample",
          description:
            "Saliva or buccal sample, no needles or complex procedures.",
        },
        {
          title: "Focused NGS analysis",
          description:
            "Sequencing of genes associated with colorectal predisposition and polyposis.",
        },
        {
          title: "Clinical interpretation",
          description:
            "Your report is contextualized with your personal and family history.",
        },
        {
          title: "Plan with your physician",
          description:
            "Recommendations to bring the result into surveillance and prevention.",
        },
      ],
      finalTitle: "Does your family history include colon cancer or polyposis?",
      finalSubtitle:
        "Talk to our team to find out if a focused genetic evaluation is right for you.",
    },
    mama: {
      heroSubtitle:
        "Genetic evaluation focused on genes associated with hereditary predisposition to breast and ovarian cancer and related family syndromes.",
      whatTitle: "Clinically relevant genes for breast and ovarian cancer",
      whatDesc:
        "This subpanel evaluates genes associated with hereditary predisposition to breast and ovarian cancer, including high- and moderate-risk genes. The information may guide surveillance, prevention, and family evaluation when applicable.",
      candidates: [
        {
          title: "Breast cancer at an early age",
          description:
            "Diagnoses before age 50 in the person or first-degree relatives.",
        },
        {
          title: "Bilateral breast cancer",
          description: "Personal or family history of cancer in both breasts.",
        },
        {
          title: "Ovarian cancer in the family",
          description:
            "Cases of ovarian, tubal, or peritoneal cancer in close relatives.",
        },
        {
          title: "Known variants in the family",
          description:
            "Relatives with BRCA1/BRCA2 or other identified risk variants.",
        },
      ],
      warningEyebrow: "Breast and ovarian cancer in the family",
      warningTitle: "Signs that may indicate a hereditary component",
      warningDesc:
        "These histories may guide a conversation with your physician about whether the test is appropriate.",
      warningSigns: [
        "Breast cancer before age 50",
        "Ovarian cancer in the family",
        "Bilateral breast cancer",
        "Several relatives affected by breast or ovarian cancer",
        "Male breast cancer",
        "Relatives with known mutations (BRCA1, BRCA2, or others)",
      ],
      familyImpact: [
        {
          title: "Daughters and sisters",
          description:
            "May benefit from genetic guidance and personalized surveillance.",
        },
        {
          title: "Male relatives",
          description:
            "Some variants also increase risk in men (breast, prostate, pancreas).",
        },
        {
          title: "Future generations",
          description:
            "Knowing the family variant helps guide subsequent generations.",
        },
        {
          title: "Coordination with your physician",
          description:
            "The result can be integrated into clinical and mammographic surveillance.",
        },
      ],
      processSteps: [
        {
          title: "Initial guidance",
          description:
            "We review your reasons and history to confirm the appropriateness of the subpanel.",
        },
        {
          title: "Non-invasive sample",
          description: "Saliva or buccal sample, in a simple procedure.",
        },
        {
          title: "Focused NGS analysis",
          description:
            "Sequencing of genes related to hereditary breast and ovarian cancer.",
        },
        {
          title: "Clinical interpretation",
          description:
            "The report considers your personal and family history for an integrated reading.",
        },
        {
          title: "Plan with your physician",
          description:
            "Recommendations for surveillance, prevention, and family guidance.",
        },
      ],
      finalTitle: "Is there breast or ovarian cancer in your family?",
      finalSubtitle:
        "A focused genetic evaluation can provide key information for prevention and surveillance.",
    },
    core: {
      heroSubtitle:
        "An essential genetic evaluation to identify clinically relevant variants associated with hereditary cancer predisposition.",
      whatEyebrow: "What is a core panel?",
      whatTitle: "An essential selection of clinically relevant genes",
      whatDesc1:
        "A core panel groups genes with established clinical evidence in hereditary cancer predisposition. It is a more focused option than a broad panel, designed for initial evaluation or specific medical indications. The core panel ",
      whatDescStrong: "does not replace",
      whatDesc2:
        " the full 161-gene panel; it offers a targeted path when the clinical context justifies it.",
      whenEyebrow: "When to use it?",
      whenTitle: "Situations where the core panel can be a good option",
      useCases: [
        {
          title: "Initial evaluation",
          description:
            "When you want a first look at hereditary risk before considering a broader panel.",
        },
        {
          title: "Suggestive family history",
          description:
            "History pointing toward specific high- and moderate-penetrance genes.",
        },
        {
          title: "More focused option",
          description:
            "Patients who require a targeted evaluation under medical judgment.",
        },
        {
          title: "Preventive guidance",
          description:
            "People interested in prevention, under professional guidance.",
        },
      ],
      compareCompletoBadge: "Full panel",
      compareCompleto161: "161 genes",
      compareCompletoDesc:
        "GenoVision's broadest evaluation for hereditary cancer predisposition. Includes multiple syndromes and high- and moderate-penetrance genes.",
      compareCompletoBullets: [
        "Greater genetic coverage",
        "Useful in complex family history",
        "Broad view of hereditary variants",
      ],
      seeFullPanel: "View full panel",
      compareCoreBadge: "Core panel",
      compareCoreTitle: "Essential selection",
      compareCoreDesc:
        "A focused group of genes with established clinical relevance. Designed as initial evaluation or under specific medical indication.",
      compareCoreBullets: [
        "More focused coverage",
        "Targeted initial evaluation",
        "Under medical judgment",
      ],
      limitationsEyebrow: "Limitations",
      limitationsTitle: "What to keep in mind",
      limitationsDesc:
        "Knowing the limitations of the core panel helps you make an informed decision with your physician.",
      limitations: [
        "Does not analyze all 161 genes included in the full panel.",
        "May not detect variants in genes outside the core panel.",
        "A negative result does not completely rule out hereditary predisposition.",
        "Variants of uncertain significance may require future reanalysis.",
        "The scope must be defined with your treating physician based on the clinical context.",
      ],
      processSteps: [
        {
          title: "Initial guidance",
          description:
            "We help you understand the scope of the core panel and whether it fits your goals.",
        },
        {
          title: "Sample collection",
          description: "Saliva or buccal sample, non-invasive.",
        },
        {
          title: "Focused NGS analysis",
          description: "Sequencing of the genes selected for the core panel.",
        },
        {
          title: "Clinical interpretation",
          description:
            "Reading of the report considering your personal and family history.",
        },
        {
          title: "Plan with your physician",
          description:
            "Recommendations to integrate the result into your clinical follow-up.",
        },
      ],
      finalTitle: "Looking for an initial evaluation?",
      finalSubtitle:
        "Let's talk to determine if the core panel or the full panel is the right option for your case.",
    },
    prostata: {
      heroSubtitle:
        "Genetic evaluation focused on genes associated with hereditary predisposition to prostate cancer, especially useful when there is family history, early diagnosis, or aggressive disease.",
      whatTitle: "Clinically relevant genes for prostate cancer",
      whatDesc:
        "This subpanel evaluates genes associated with hereditary predisposition to prostate cancer, including variants in DNA repair genes. The information may guide surveillance, prevention, and family evaluation when applicable.",
      candidates: [
        {
          title: "Prostate cancer in relatives",
          description:
            "Father, brothers, or other close relatives with prostate cancer.",
        },
        {
          title: "Early-age diagnosis",
          description:
            "Cases diagnosed before ages 55–60 in the family or in the person.",
        },
        {
          title: "Aggressive or metastatic disease",
          description:
            "Personal or family history of advanced or metastatic prostate cancer.",
        },
        {
          title: "Other related cancers",
          description:
            "Breast, ovary, pancreas, or prostate in close relatives may indicate a hereditary component.",
        },
      ],
      warningEyebrow: "Prostate cancer in the family",
      warningTitle: "Signs that may indicate a hereditary component",
      warningDesc:
        "These histories may guide a conversation with your physician about whether the test is appropriate.",
      warningSigns: [
        "Prostate cancer diagnosed before ages 55–60",
        "Metastatic or high-risk disease",
        "Several relatives with prostate cancer",
        "Relatives with breast, ovarian, or pancreatic cancer",
        "Relatives with BRCA1/BRCA2 or other risk variants",
        "Ethnicities with documented higher prevalence under medical judgment",
      ],
      familyImpact: [
        {
          title: "Sons and brothers",
          description:
            "May benefit from genetic guidance and personalized surveillance.",
        },
        {
          title: "Female relatives",
          description:
            "Some variants also increase the risk of breast, ovarian, or pancreatic cancer in female relatives.",
        },
        {
          title: "Future generations",
          description:
            "Knowing the family variant helps guide subsequent generations.",
        },
        {
          title: "Coordination with your physician",
          description:
            "The result can be integrated into clinical surveillance and the urological plan.",
        },
      ],
      processSteps: [
        {
          title: "Initial guidance",
          description:
            "We review your reasons and history to confirm the appropriateness of the subpanel.",
        },
        {
          title: "Non-invasive sample",
          description: "Saliva or buccal sample, in a simple procedure.",
        },
        {
          title: "Focused NGS analysis",
          description:
            "Sequencing of genes related to hereditary prostate cancer and associated syndromes.",
        },
        {
          title: "Clinical interpretation",
          description:
            "The report considers your personal and family history for an integrated reading.",
        },
        {
          title: "Plan with your physician",
          description:
            "Recommendations for surveillance, prevention, and family guidance.",
        },
      ],
      finalTitle: "Is there prostate cancer in your family?",
      finalSubtitle:
        "A focused genetic evaluation can provide key information for surveillance and prevention.",
    },
  },
  products: {
    "panel-cancer-hereditario": {
      title: "Hereditary Cancer Panel",
      description:
        "Analysis of genes associated with hereditary predisposition to breast, ovarian, colon, prostate, pancreatic, melanoma, and other hereditary syndromes.",
      categoryLabel: "Hereditary cancer",
      ctaLabel: "View panel",
    },
    "panel-cardio-pulmonar": {
      title: "Cardio-Pulmonary Panel",
      description:
        "Genetic evaluation oriented to hereditary cardiovascular and pulmonary conditions.",
      categoryLabel: "Cardiovascular health",
      ctaLabel: "Request information",
    },
    "panel-neurologico": {
      title: "Neurology Panel",
      description:
        "Genetic analysis for selected hereditary and neurodegenerative neurological conditions.",
      categoryLabel: "Neurology",
      ctaLabel: "Request information",
    },
    "panel-inmunologico": {
      title: "Immunology Panel",
      description:
        "Evaluation of variants associated with primary immunodeficiencies and autoimmune/autoinflammatory disorders.",
      categoryLabel: "Immunology",
      ctaLabel: "Request information",
    },
    "panel-diabetes": {
      title: "Diabetes Panel",
      description:
        "Genetic analysis focused on predisposition and monogenic forms related to diabetes.",
      categoryLabel: "Diabetes",
      ctaLabel: "Request information",
    },
    "panel-oftalmologico": {
      title: "Eye Disorders & Retinopathies Panel",
      description:
        "Genetic evaluation for hereditary eye disorders and retinopathies.",
      categoryLabel: "Ophthalmology",
      ctaLabel: "Request information",
    },
    "panel-respiratorio": {
      title: "Respiratory Disease Panel",
      description:
        "Analysis of variants associated with hereditary respiratory diseases or pulmonary predisposition.",
      categoryLabel: "Respiratory",
      ctaLabel: "Request information",
    },
    "panel-autismo": {
      title: "Autism Spectrum / Neurodevelopment Panel",
      description:
        "Genetic analysis oriented to neurodevelopmental conditions under medical criterion.",
      categoryLabel: "Neurodevelopment",
      ctaLabel: "Request information",
    },
    "panel-farmacogenomica": {
      title: "Pharmacogenomics Panel",
      description:
        "Genetic evaluation to guide drug response and pharmacological metabolism.",
      categoryLabel: "Pharmacogenomics",
      ctaLabel: "Request information",
    },
    "panel-tiroides": {
      title: "Thyroid Panel",
      description:
        "Genetic evaluation related to predisposition to selected thyroid disorders.",
      categoryLabel: "Thyroid",
      ctaLabel: "Request information",
    },
    "exoma-completo": {
      title: "Whole Exome Sequencing (WES)",
      description:
        "Analysis of the genome's coding regions for advanced clinical research under medical indication.",
      categoryLabel: "Exome / Genome",
      ctaLabel: "Request information",
    },
    "reporte-cardiometabolico": {
      title: "Cardiometabolic Report / PRS",
      description:
        "Cardiometabolic genetic risk report for personalized prevention.",
      categoryLabel: "Cardiovascular health",
      ctaLabel: "Request information",
    },
    "neuro-panel-wgs": {
      title: "Neuro Panel Whole Genome",
      description:
        "Broad genomic analysis for complex neurological conditions under medical indication.",
      categoryLabel: "Neurology",
      ctaLabel: "Request information",
    },
  },
  productCategories: {
    all: "All",
    cancer: "Hereditary cancer",
    cardiovascular: "Cardiovascular health",
    neurologia: "Neurology",
    inmunologia: "Immunology",
    diabetes: "Diabetes",
    oftalmologia: "Ophthalmology",
    farmacogenomica: "Pharmacogenomics",
    tiroides: "Thyroid",
    exoma: "Exome / Genome",
  },
  subpanels: {
    "colorrectal-poliposis": {
      title: "Hereditary Colorectal Cancer & Polyposis",
      shortTitle: "Colorectal & Polyposis Panel",
      description:
        "Focused on genes associated with hereditary colorectal cancer, Lynch syndrome, familial adenomatous polyposis, and other hereditary gastrointestinal syndromes.",
      indications: [
        "Colon cancer in the family",
        "Diagnosis before age 50",
        "Multiple polyps",
        "Family history of colon, endometrial, ovarian, gastric, or pancreatic cancer",
      ],
      enfoque: "Colon, Lynch, polyposis, and hereditary gastrointestinal",
      mejorPara: "Colon or polyp history",
      nivel: "Focused",
      whatsappMessage:
        "Hello GenoVision, I'd like information about the Hereditary Colorectal Cancer & Polyposis Panel.",
    },
    "mama-hereditario": {
      title: "Hereditary Breast & Ovarian Cancer",
      shortTitle: "Hereditary Breast & Ovarian Cancer Panel",
      description:
        "Focused on genes related to hereditary predisposition to breast and ovarian cancer and associated family syndromes.",
      indications: [
        "Breast cancer at an early age",
        "Bilateral breast cancer",
        "Ovarian cancer in the family",
        "Relatives with BRCA1/BRCA2 or other risk gene variants",
      ],
      enfoque: "Breast, ovary, and related syndromes",
      mejorPara: "Breast or ovarian history",
      nivel: "Focused",
      whatsappMessage:
        "Hello GenoVision, I'd like information about the Hereditary Breast & Ovarian Cancer Panel.",
    },
    core: {
      title: "Hereditary Cancer Panel - Core",
      shortTitle: "Core Panel",
      description:
        "Essential selection of clinically relevant genes for initial evaluation of hereditary cancer predisposition.",
      indications: [
        "Initial hereditary risk evaluation",
        "Suggestive family history",
        "Patients who need a more focused option",
        "Preventive medical guidance",
      ],
      enfoque: "Essential hereditary risk genes",
      mejorPara: "Initial evaluation or under medical criterion",
      nivel: "Basic / focused",
      whatsappMessage:
        "Hello GenoVision, I'd like information about the Core Hereditary Cancer Panel.",
    },
    "prostata-hereditario": {
      title: "Hereditary Prostate Cancer",
      shortTitle: "Hereditary Prostate Cancer Panel",
      description:
        "Focused on genes associated with hereditary predisposition to prostate cancer, especially when there is family history or early/aggressive diagnosis.",
      indications: [
        "Prostate cancer in relatives",
        "Early diagnosis",
        "Aggressive or metastatic disease in the family",
        "Family history of breast, ovarian, pancreatic, or prostate",
      ],
      enfoque: "Prostate and related syndromes",
      mejorPara: "Aggressive or early prostate history",
      nivel: "Focused",
      whatsappMessage:
        "Hello GenoVision, I'd like information about the Hereditary Prostate Cancer Panel.",
    },
  },
};

export const TRANSLATIONS: Record<Locale, Dictionary> = { es, en };
