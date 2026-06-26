export type Language = "es" | "en";

const es = {
  layout: {
    skipToContent: "Saltar al contenido principal",
    htmlLang: "es-MX",
  },
  nav: {
    items: [
      { label: "Inicio", href: "/" },
      { label: "Productos", href: "/productos" },
      { label: "Proceso", href: "/proceso" },
      { label: "Para Médicos", href: "/medicos" },
      { label: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
      { label: "Contacto", href: "/contacto" },
    ],
    whatsappCTA: "WhatsApp",
    whatsappMobile: "Escríbenos por WhatsApp",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    ariaLabel: "Principal",
    ariaLabelMobile: "Móvil",
  },
  footer: {
    tagline:
      "Genómica clínica para identificar predisposición hereditaria al cáncer y orientar decisiones preventivas.",
    navHeading: "Navegación",
    contactHeading: "Contacto",
    legalHeading: "Legal",
    legalText:
      "La información de este sitio es educativa y no sustituye consulta médica. Los resultados genéticos deben ser interpretados por profesionales de salud calificados.",
    rights: "Todos los derechos reservados.",
    location: "Mérida, Yucatán, México",
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
  common: {
    genesEvaluated: "genes evaluados",
    genesAnalyzed: "genes analizados",
    genesIncluded: "genes incluidos",
    available: "Disponible",
    comingSoon: "Próximamente",
    recommended: "Recomendado",
    featured: "Destacado",
    requestInfo: "Solicitar información",
    viewFullProcess: "Ver proceso completo",
    viewPanel: "Ver panel",
    viewSubpanel: "Ver subpanel",
    viewFullCatalog: "Ver catálogo completo",
    viewPanelDetails: "Ver detalles del panel",
    viewFullPanel: "Ver panel completo (161 genes)",
    backToFullPanel: "Ver panel completo de 161 genes",
    scheduleWhatsApp: "Agendar consulta por WhatsApp",
    writeWhatsApp: "Escríbenos por WhatsApp",
    sendWhatsApp: "Enviar WhatsApp ahora",
    talkSpecialist: "Hablar con un especialista",
    forDoctors: "Para profesionales de la salud",
    specializedSubpanel: "Subpanel especializado",
    breadcrumbHome: "Inicio",
    breadcrumbProducts: "Productos",
    breadcrumbPanel: "Panel de Cáncer Hereditario",
    step: "Paso",
    important: "Importante",
    genesLabel: "genes",
    searchGene: "Buscar gen…",
    searchGeneLabel: "Buscar gen",
    result: "resultado",
    results: "resultados",
    geneNotFound: "No se encontró ese gen en la lista.",
    geneDisclaimerSubpanel:
      "La inclusión de un gen en este subpanel no significa diagnóstico de cáncer. Los resultados deben interpretarse junto con la historia personal, familiar y criterio médico.",
    geneDisclaimerFull:
      "La inclusión de un gen en el panel no significa diagnóstico de cáncer. Los resultados deben interpretarse junto con la historia personal, familiar y criterio médico.",
    showAllGenes: "Ver los 161 genes",
    hideGenes: "Ocultar lista",
    genesIncludedCount: "161 genes incluidos",
  },
  home: {
    heroTitlePart1: "Genética del cáncer y ",
    heroTitleHighlight: "oncología de precisión",
    heroTitlePart2: " en Mérida",
    heroDescription:
      "Estudios genéticos que ayudan a médicos y familias a entender el riesgo hereditario de cáncer, las opciones de tratamiento y el monitoreo de la enfermedad.",
    ctaWhatsapp: "Agendar por WhatsApp",
    ctaViewStudies: "Ver estudios",

    decision: {
      eyebrow: "RUTA DE DECISIÓN CLÍNICA",
      heading: "Elige el estudio genético correcto para cada pregunta clínica.",
      paragraph:
        "En GenoVision ayudamos a pacientes y médicos a identificar qué estudio genético se adapta mejor al objetivo: riesgo hereditario, decisiones de tratamiento o monitoreo de la enfermedad.",
      ctaLabel: "Agendar orientación",
      cards: [
        {
          number: "01",
          title: "Riesgo hereditario",
          body: "Para familias con antecedentes de cáncer o pacientes que necesitan entender su predisposición hereditaria.",
          recommendedLabel: "Estudio recomendado",
          recommendedValue: "Panel de Cáncer Hereditario",
          ctaText: "",
        },
        {
          number: "02",
          title: "Decisiones de tratamiento",
          body: "Para pacientes oncológicos que necesitan información molecular relacionada con el tumor para orientar decisiones terapéuticas.",
          recommendedLabel: "Estudios recomendados",
          recommendedValue: "Biopsia Líquida · Farmacogenómica",
          ctaText: "",
        },
        {
          number: "03",
          title: "Monitoreo de enfermedad",
          body: "Para casos oncológicos seleccionados donde el seguimiento molecular o la evaluación de recurrencia puede ser clínicamente útil.",
          recommendedLabel: "Estudio recomendado",
          recommendedValue: "Biopsia Líquida",
          ctaText: "",
        },
        {
          number: "04",
          title: "¿No sabes cuál corresponde?",
          body: "Si el objetivo aún no está claro, GenoVision puede orientar el siguiente paso según el contexto clínico.",
          recommendedLabel: "",
          recommendedValue: "",
          ctaText: "Solicitar orientación",
        },
      ],
    },

    servicesEyebrow: "Estudios Genómicos",
    servicesTitle: "Genética del cáncer y oncología de precisión, en un solo lugar",
    servicesDescription:
      "Cada estudio responde a un objetivo clínico distinto: prevención, riesgo hereditario, selección de tratamiento o monitoreo — coordinados en Mérida con interpretación profesional incluida.",
    services: [
      {
        name: "Panel de Cáncer Hereditario",
        purpose: "Identifica mutaciones hereditarias asociadas con un mayor riesgo de cáncer.",
        useCase: "Útil para pacientes con historia personal o familiar de cáncer.",
      },
      {
        name: "Biopsia Líquida",
        purpose: "Analiza información genética relacionada con el tumor a partir de una muestra de sangre.",
        useCase: "Puede apoyar la selección de tratamiento y el monitoreo en casos oncológicos seleccionados.",
      },
      {
        name: "Farmacogenómica",
        purpose: "Ayuda a entender cómo puede responder un paciente a ciertos medicamentos.",
        useCase: "Útil para la planeación personalizada de medicamentos.",
      },
      {
        name: "NIPT",
        purpose: "Tamizaje prenatal no invasivo a partir de sangre materna.",
        useCase: "Evalúa condiciones cromosómicas comunes y sexo fetal desde la semana 10.",
      },
      {
        name: "Secuenciación del Genoma Completo",
        purpose: "Análisis amplio de la información genética.",
        useCase: "Útil cuando se requiere una evaluación genética más amplia.",
      },
      {
        name: "Microbiota Intestinal",
        purpose: "Evalúa la composición de la microbiota intestinal.",
        useCase: "Útil para contextos seleccionados de bienestar y apoyo clínico.",
      },
    ],
    availableLabel: "Disponible",
    featuredLabel: "Estudio principal",
    viewDetails: "Ver detalles",
    clinicalUseLabel: "Uso clínico: ",

    trustEyebrow: "Presencia local",
    trustTitle: "Coordinación local. Estudios de nivel internacional.",
    trustPoints: [
      "Con sede en Mérida, Yucatán",
      "Coordinación de pacientes en CÉNIT Medical Center",
      "Atención en español",
      "Comunicación por WhatsApp",
      "Enfoque en genética del cáncer y oncología de precisión",
      "Coordinación de muestra disponible localmente",
    ],

    finalCtaTitle: "¿Qué estudio genético necesita tu paciente?",
    finalCtaSubtitle:
      "Cada caso es diferente. GenoVision puede ayudar a identificar el estudio genético más adecuado según el objetivo clínico: prevención, apoyo diagnóstico, selección de tratamiento o monitoreo.",
    finalCtaPrimaryLabel: "Contactar por WhatsApp",
    finalCtaSecondaryLabel: "Ver estudios disponibles",
  },
  productos: {
    eyebrow: "Catálogo",
    title: "Catálogo de análisis genéticos",
    description:
      "Explora nuestros análisis genómicos diseñados para prevención, riesgo hereditario y medicina personalizada. Algunos paneles están disponibles bajo solicitud y bajo indicación médica.",
    subpanelsEyebrow: "Cáncer hereditario",
    subpanelsTitle: "Subpaneles de cáncer hereditario",
    subpanelsDescription:
      "Subpaneles enfocados derivados del Panel de Cáncer Hereditario de 161 genes, organizados por tipo de cáncer e indicación médica.",
    ctaTitle: "¿Necesitas orientación para elegir un panel?",
    ctaSubtitle:
      "Cuéntanos tu caso y te ayudamos a definir si un análisis genético es adecuado para ti o tu familiar.",
    ctaPrimary: "Hablar por WhatsApp",
    ctaSecondary: "Conocer el proceso",
    emptyCategory:
      "No hay paneles en esta categoría todavía. Pronto agregaremos más.",
    filterLabel: "Filtros de catálogo",
  },
  panelCancer: {
    badgeAvailable: "Disponible",
    badgeFeatured: "Producto destacado",
    title: "Panel de Cáncer Hereditario",
    descriptionPart1: "Análisis genético avanzado de",
    descriptionPart2:
      "genes para identificar predisposición hereditaria al cáncer y orientar decisiones preventivas con tu médico.",
    badges: [
      "161 genes",
      "NGS",
      "Muestra bucal o saliva",
      "Resultados aprox. 28 días",
      "Consulta inicial incluida",
    ],
    ctaSchedule: "Agendar evaluación",
    ctaProcess: "Ver proceso completo",
    whatIsEyebrow: "¿Qué es este estudio?",
    whatIsTitle: "Una visión amplia de tu predisposición hereditaria",
    whatIsBody:
      "El Panel de Cáncer Hereditario de GenoVision analiza genes relacionados con síndromes de predisposición hereditaria al cáncer. El objetivo es identificar variantes genéticas que puedan aumentar el riesgo y ayudar a definir estrategias de prevención, vigilancia médica y orientación familiar.",
    whoEyebrow: "¿Para quién es?",
    whoTitle: "Quién debería considerarlo",
    whoDescription:
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
    cancerTypesEyebrow: "Tipos de cáncer evaluados",
    cancerTypesTitle: "Cobertura clínica del panel",
    cancerTypesDescription:
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
    techDescription:
      "Utilizamos secuenciación de nueva generación para evaluar múltiples genes de forma simultánea. Esta tecnología permite una visión amplia de variantes asociadas con predisposición hereditaria al cáncer.",
    genesEyebrow: "Genes incluidos",
    genesTitle: "Genes analizados en el Panel de Cáncer Hereditario",
    genesDescription:
      "El panel completo evalúa 161 genes relacionados con predisposición hereditaria a distintos tipos de cáncer y síndromes familiares.",
    processEyebrow: "Cómo es el proceso",
    processTitle: "Del primer contacto al plan de seguimiento",
    processDescription:
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
    resultsDescription:
      "El reporte siempre se interpreta dentro del contexto clínico y familiar de cada persona.",
    resultCards: [
      {
        tone: "amber" as const,
        label: "Resultado positivo",
        title: "Variante patogénica / probablemente patogénica",
        description:
          "Indica una mayor predisposición hereditaria. Permite definir vigilancia, prevención y orientar a familiares de primer grado.",
      },
      {
        tone: "neutral" as const,
        label: "Resultado intermedio",
        title: "Variante de significado incierto",
        description:
          "El significado clínico aún no está claramente establecido. Puede requerir reanálisis futuro y seguimiento profesional.",
      },
      {
        tone: "emerald" as const,
        label: "Resultado tranquilizador",
        title: "Negativo o no informativo",
        description:
          "No se identificaron variantes con relevancia clínica conocida en los genes evaluados. No descarta otros factores de riesgo.",
      },
    ],
    importantDisclaimer:
      "Un resultado genético no significa que una persona tenga cáncer ni garantiza que lo desarrollará. El resultado debe interpretarse junto con la historia personal, familiar y criterio médico.",
    subpanelsEyebrow: "Subpaneles enfocados",
    subpanelsTitle: "Subpaneles especializados",
    subpanelsDescription:
      "Además del panel completo de 161 genes, GenoVision organiza la evaluación en subpaneles enfocados según el antecedente familiar, el tipo de cáncer y la indicación médica.",
    subpanelsNote:
      "El panel completo de {genes} genes sigue siendo la opción más amplia. Los subpaneles son alternativas enfocadas bajo criterio médico.",
    comparisonEyebrow: "Comparativa",
    comparisonTitle: "Comparativa de paneles",
    comparisonDescription:
      "Tabla comparativa entre el Panel Completo de 161 genes y los subpaneles enfocados disponibles.",
    familyImpactBadge: "Impacto familiar",
    familyImpactTitle: "Tu resultado también puede proteger a tu familia",
    familyImpactDescription:
      "Cuando existe una variante hereditaria, otros familiares pueden beneficiarse de orientación genética y estrategias preventivas.",
    familyBenefits: [
      "Identificación temprana en familiares de primer grado",
      "Vigilancia médica personalizada",
      "Decisiones preventivas con orientación clínica",
    ],
    ctaTitle:
      "Si hay cáncer en tu familia, esperar puede ser el error más costoso.",
    ctaSubtitle:
      "Habla hoy con nuestro equipo y conoce si una evaluación genética es adecuada para ti.",
    ctaPrimary: "Agendar consulta por WhatsApp",
    ctaSecondary: "Ver proceso completo",
  },
  comparisonTable: {
    colOption: "Opción",
    colGenes: "Genes",
    colFocus: "Enfoque",
    colBestFor: "Mejor para",
    colCoverage: "Nivel de cobertura",
    colCta: "CTA",
    labelFocus: "Enfoque",
    labelBestFor: "Mejor para",
    recommended: "Recomendado",
    schedule: "Agendar",
    view: "Ver",
    fullPanelName: "Panel Completo de Cáncer Hereditario",
    fullPanelFocus:
      "161 genes relacionados con múltiples síndromes hereditarios",
    fullPanelBestFor: "Evaluación amplia, antecedentes familiares complejos",
    fullPanelCoverage: "Más completo",
    subpanelNames: {
      "colorrectal-poliposis": "Panel Colorrectal y Poliposis",
      "mama-hereditario": "Panel Cáncer de Mama y Ovario Hereditario",
      core: "Panel Core",
      "prostata-hereditario": "Panel Cáncer de Próstata Hereditario",
    } as Record<string, string>,
    subpanelFocus: {
      "colorrectal-poliposis":
        "Colon, Lynch, poliposis y gastrointestinal hereditario",
      "mama-hereditario": "Mama, ovario y síndromes relacionados",
      core: "Genes esenciales de riesgo hereditario",
      "prostata-hereditario": "Próstata y síndromes relacionados",
    } as Record<string, string>,
    subpanelBestFor: {
      "colorrectal-poliposis": "Antecedentes de colon o pólipos",
      "mama-hereditario": "Antecedentes de mama u ovario",
      core: "Evaluación inicial o bajo criterio médico",
      "prostata-hereditario": "Antecedentes de próstata agresiva o temprana",
    } as Record<string, string>,
    subpanelCoverage: {
      "colorrectal-poliposis": "Enfocado",
      "mama-hereditario": "Enfocado",
      core: "Básico / enfocado",
      "prostata-hereditario": "Enfocado",
    } as Record<string, string>,
  },
  dnaPipeline: {
    step: "Paso",
    steps: [
      { label: "Muestra", sub: "Bucal o saliva" },
      { label: "Extracción", sub: "ADN purificado" },
      { label: "Secuenciación", sub: "Tecnología NGS" },
      { label: "Bioinformática", sub: "Análisis de variantes" },
      { label: "Reporte", sub: "Interpretación clínica" },
    ],
  },
  subpanelHero: {
    breadcrumbPanel: "Panel de Cáncer Hereditario",
    specializedSubpanel: "Subpanel especializado",
    schedule: "Agendar evaluación",
    viewFullPanel: "Ver panel completo (161 genes)",
    titlePrefix: "Panel de",
  },
  medicalDisclaimer: {
    important: "Importante",
    text: "Este análisis no diagnostica cáncer. Evalúa predisposición genética hereditaria y debe interpretarse junto con la historia personal, familiar y criterio médico.",
  },
  doctorReferral: {
    badge: "Para profesionales de la salud",
    title: "¿Eres médico?",
    description:
      "GenoVision puede apoyar a tus pacientes con análisis genético avanzado para identificar predisposición hereditaria y orientar estrategias de prevención y seguimiento.",
    benefits: [
      "Soporte en interpretación clínica",
      "Material educativo para pacientes",
      "Coordinación de toma de muestra",
      "Reportes claros y profesionales",
    ],
    ctaPrimary: "Solicitar información para médicos",
    ctaSecondary: "Ver detalles",
    exclusiveLine: "Línea exclusiva para médicos",
    referPatients:
      "Refiere pacientes con un análisis genómico clínicamente útil",
    contactLabel: "WhatsApp / Teléfono",
  },
  contactCTA: {
    defaultTitle: "Si hay cáncer en tu familia, no lo ignores.",
    defaultSubtitle:
      "Habla con nuestro equipo y conoce el proceso completo del Panel de Cáncer Hereditario.",
    defaultPrimaryLabel: "Escríbenos por WhatsApp",
  },
  contactForm: {
    title: "Envíanos un mensaje",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre completo",
    phoneLabel: "Teléfono",
    emailLabel: "Correo",
    forWhomLabel: "¿El estudio es para ti o para un familiar?",
    forWhomPlaceholder: "Selecciona una opción",
    forWhomSelf: "Para mí",
    forWhomFamily: "Para un familiar",
    historyLabel: "¿Hay antecedentes de cáncer en tu familia?",
    historyPlaceholder: "Selecciona una opción",
    historyYes: "Sí",
    historyNo: "No",
    historyUnsure: "No estoy seguro/a",
    messageLabel: "Mensaje",
    messagePlaceholder: "Cuéntanos brevemente cómo podemos ayudarte",
    privacyNote:
      "Al enviar este formulario aceptas que GenoVision te contacte para brindarte información. Tus datos no se compartirán con terceros.",
    submitLabel: "Enviar solicitud",
    successTitle: "¡Recibimos tu información!",
    successDescription:
      "Para responderte de inmediato, hemos preparado un mensaje en WhatsApp con tus datos. Solo da clic en el botón para enviarlo.",
    continueWhatsApp: "Continuar en WhatsApp",
    sendAnother: "Enviar otra solicitud",
    whatsappIntro: "Hola GenoVision, me gustaría recibir información.",
    whatsappName: "Nombre",
    whatsappPhone: "Teléfono",
    whatsappEmail: "Correo",
    whatsappForWhom: "El estudio es",
    whatsappHistory: "Antecedentes de cáncer en familia",
    whatsappMessage: "Mensaje",
    whatsappForSelf: "para mí",
    whatsappForFamily: "para un familiar",
    whatsappHistoryYes: "sí",
    whatsappHistoryNo: "no",
    whatsappHistoryUnsure: "no estoy seguro/a",
  },
  contacto: {
    eyebrow: "Contacto",
    title: "Hablemos de tu caso",
    description:
      "Resolvemos tus dudas, te explicamos el proceso y te orientamos sin compromiso. La consulta inicial es el primer paso.",
    contactDataTitle: "Datos de contacto",
    whatsappLabel: "WhatsApp",
    phoneLabel: "Teléfono",
    addressLabel: "Dirección",
    sendWhatsApp: "Enviar WhatsApp ahora",
    quickResponse: "Respuesta rápida por WhatsApp",
    emailLabel: "Correo profesional / laboratorio",
    mapTitle: "Mapa GenoVision - CÉNIT Medical Center",
    socialTitle: "Síguenos en redes",
    socialSubtitle: "Mantente al día con noticias, contenido educativo y actualizaciones.",
    instagramLabel: "Instagram",
    instagramCta: "Seguir en Instagram",
    instagramAria: "Visitar Instagram de GenoVision",
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Resolvemos tus dudas",
    description:
      "Información clara y honesta sobre el Panel de Cáncer Hereditario, el proceso de toma de muestra y la interpretación del resultado.",
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
    ctaTitle: "¿Tienes una duda que no está aquí?",
    ctaSubtitle: "Escríbenos por WhatsApp y te respondemos directamente.",
  },
  proceso: {
    eyebrow: "Proceso completo",
    title: "Del ADN al resultado: así funciona",
    description:
      "Cada etapa del proceso de GenoVision está pensada para ofrecerte claridad, acompañamiento y rigor clínico.",
    timelineEyebrow: "Línea del tiempo",
    timelineTitle: "9 pasos, un acompañamiento continuo",
    timelineDescription:
      "Te guiamos desde la primera conversación hasta el plan de seguimiento con tu médico tratante.",
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
    samplePrepBadge: "Preparación de muestra",
    samplePrepTitle: "Indicaciones para muestra bucal",
    samplePrepDescription:
      "Para muestra bucal: lavar dientes antes de la toma y no comer durante 30 minutos. Puede beber agua. Estas indicaciones nos ayudan a obtener una muestra de calidad para el análisis genómico.",
    sampleInstructions: [
      { t: "Lavarse los dientes", d: "Antes de la toma de muestra." },
      { t: "Esperar 30 minutos", d: "Sin comer ni mascar chicle." },
      { t: "Sí puedes beber agua", d: "El agua no afecta la muestra." },
      {
        t: "Sigue las instrucciones del kit",
        d: "Te guiamos paso a paso durante la toma.",
      },
    ],
    ctaTitle: "¿Listo para iniciar?",
    ctaSubtitle:
      "Comienza con una conversación. Te explicamos todo el proceso y resolvemos tus dudas sin compromiso.",
    ctaSecondaryLabel: "Ver panel de cáncer hereditario",
  },
  medicos: {
    badge: "Para profesionales de la salud",
    title: "Genómica clínica para apoyar decisiones médicas",
    description:
      "GenoVision trabaja como apoyo para médicos que desean integrar análisis genético en prevención, vigilancia y estratificación de riesgo hereditario al cáncer.",
    ctaPrimary: "Solicitar información",
    ctaSecondaryPanel: "Ver panel destacado",
    whyEyebrow: "Por qué referir pacientes",
    whyTitle: "Información que enriquece la práctica clínica",
    whyDescription:
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
    indicationsDescription:
      "Algunos contextos clínicos en los que el análisis genético puede aportar información útil.",
    indications: [
      "Antecedentes personales o familiares de cáncer en uno o más familiares de primer grado.",
      "Diagnóstico de cáncer a edad temprana (≤50 años) en la familia.",
      "Cáncer de mama, ovario, colon, próstata, páncreas o melanoma con patrón sugestivo de síndrome hereditario.",
      "Múltiples casos de cáncer en distintas generaciones.",
      "Cáncer bilateral, multifocal o más de un tumor primario en un mismo paciente.",
      "Pacientes con interés en prevención personalizada bajo orientación médica.",
    ],
    indicationsNote:
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
    educationBadge: "Educación al paciente",
    educationTitle: "Material y orientación previa",
    educationDescription:
      "Apoyamos a tus pacientes con información clara antes y después del estudio, sin reemplazar la consulta médica. La conversación clínica clave permanece contigo.",
    reportBadge: "Interpretación de resultado",
    reportTitle: "Reportes preparados para uso clínico",
    reportDescription:
      "Cada reporte incluye contexto clínico, clasificación de variantes y notas relevantes para apoyar tu interpretación y decisiones.",
    ctaTitle:
      "Refiere pacientes con un análisis genómico clínicamente útil",
    ctaSubtitle:
      "Te apoyamos con material educativo, coordinación logística y reportes claros.",
    ctaReferLabel: "Solicitar información para referir pacientes",
  },
  subpanelColorrectal: {
    subtitle:
      "Evaluación genética enfocada en predisposición hereditaria a cáncer colorrectal, síndrome de Lynch, poliposis y otros síndromes gastrointestinales.",
    whatEyebrow: "¿Qué evalúa este subpanel?",
    whatTitle: "Genes asociados con riesgo gastrointestinal hereditario",
    whatBody:
      "Este subpanel evalúa genes con relevancia clínica conocida para predisposición hereditaria a cáncer colorrectal, síndrome de Lynch, poliposis adenomatosa familiar y otros síndromes gastrointestinales hereditarios. Permite identificar variantes que pueden orientar vigilancia endoscópica, prevención y evaluación familiar.",
    whoEyebrow: "¿Quién debería considerarlo?",
    whoTitle:
      "Escenarios típicos en los que este subpanel aporta información",
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
    warningDescription:
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
    relatedDescription:
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
    genesEyebrow: "Genes incluidos",
    genesTitle: "Genes analizados en este subpanel",
    genesDescription:
      "Este subpanel evalúa genes seleccionados relacionados con predisposición hereditaria según el tipo de cáncer y la indicación clínica.",
    genesCountLabel: "10 genes incluidos",
    processEyebrow: "Proceso de muestra y resultado",
    processTitle: "De la muestra al plan de seguimiento",
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
    ctaTitle:
      "¿Tu historia familiar incluye cáncer de colon o poliposis?",
    ctaSubtitle:
      "Habla con nuestro equipo y conoce si una evaluación genética enfocada es adecuada para ti.",
    ctaPrimary: "Agendar consulta por WhatsApp",
    ctaSecondary: "Ver panel completo (161 genes)",
  },
  subpanelMama: {
    subtitle:
      "Evaluación genética enfocada en genes asociados con predisposición hereditaria a cáncer de mama, ovario y síndromes familiares relacionados.",
    whatEyebrow: "¿Qué evalúa este subpanel?",
    whatTitle: "Genes con relevancia clínica para mama y ovario",
    whatBody:
      "Este subpanel evalúa genes asociados con predisposición hereditaria a cáncer de mama y ovario, incluyendo genes de alto y moderado riesgo. La información puede orientar vigilancia, prevención y evaluación de familiares cuando aplica.",
    whoEyebrow: "¿Quién debería considerarlo?",
    whoTitle: "Situaciones que pueden orientar la decisión",
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
    warningDescription:
      "Estos antecedentes pueden orientar la conversación con tu médico sobre la pertinencia del estudio.",
    warningSigns: [
      "Cáncer de mama antes de los 50 años",
      "Cáncer de ovario en la familia",
      "Cáncer de mama bilateral",
      "Varios familiares afectados por cáncer de mama u ovario",
      "Cáncer de mama en hombre",
      "Familiares con mutaciones conocidas (BRCA1, BRCA2 u otras)",
    ],
    familyEyebrow: "Importancia para familiares",
    familyTitle: "Tu resultado también puede proteger a tu familia",
    familyDescription:
      "Cuando se identifica una variante hereditaria, otros familiares pueden beneficiarse de orientación genética y estrategias preventivas.",
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
    genesEyebrow: "Genes incluidos",
    genesTitle: "Genes analizados en este subpanel",
    genesDescription:
      "Este subpanel evalúa genes seleccionados relacionados con predisposición hereditaria según el tipo de cáncer y la indicación clínica.",
    genesCountLabel: "11 genes incluidos",
    processEyebrow: "Proceso de muestra y resultado",
    processTitle: "De la muestra al plan de seguimiento",
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
    ctaTitle: "¿Hay cáncer de mama u ovario en tu familia?",
    ctaSubtitle:
      "Una evaluación genética enfocada puede aportar información clave para prevención y vigilancia.",
    ctaPrimary: "Agendar consulta por WhatsApp",
    ctaSecondary: "Ver panel completo (161 genes)",
  },
  subpanelCore: {
    subtitle:
      "Una evaluación genética esencial para identificar variantes clínicamente relevantes asociadas con predisposición hereditaria al cáncer.",
    whatEyebrow: "¿Qué es un panel core?",
    whatTitle: "Una selección esencial de genes con relevancia clínica",
    whatBody1:
      "Un panel core agrupa genes con evidencia clínica establecida en predisposición hereditaria al cáncer. Es una opción más enfocada que un panel amplio, pensada para evaluación inicial o para indicaciones médicas específicas. El panel core",
    whatBodyBold: "no reemplaza",
    whatBody2:
      "al panel completo de 161 genes; ofrece una vía dirigida cuando el contexto clínico lo justifica.",
    whenEyebrow: "¿Cuándo conviene usarlo?",
    whenTitle:
      "Situaciones donde el panel core puede ser una buena opción",
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
    fullPanelBadge: "Panel completo",
    fullPanelTitle: "161 genes",
    fullPanelDesc:
      "La evaluación más amplia de GenoVision para predisposición hereditaria al cáncer. Incluye múltiples síndromes y genes de alta y moderada penetrancia.",
    fullPanelBenefits: [
      "Mayor cobertura genética",
      "Útil en historia familiar compleja",
      "Visión amplia de variantes hereditarias",
    ],
    viewFullPanel: "Ver panel completo",
    coreBadge: "Panel core",
    coreTitle: "Selección esencial",
    coreDesc:
      "Un grupo enfocado de genes con relevancia clínica establecida. Pensado como evaluación inicial o bajo indicación médica específica.",
    coreBenefits: [
      "Cobertura más enfocada",
      "Evaluación inicial dirigida",
      "Bajo criterio médico",
    ],
    limitationsEyebrow: "Limitaciones",
    limitationsTitle: "Qué tener en cuenta",
    limitationsDescription:
      "Conocer las limitaciones del panel core ayuda a tomar una decisión informada con tu médico.",
    limitations: [
      "No analiza la totalidad de los 161 genes incluidos en el panel completo.",
      "Puede no detectar variantes en genes fuera del panel core.",
      "Un resultado negativo no descarta predisposición hereditaria por completo.",
      "Las variantes de significado incierto pueden requerir reanálisis futuro.",
      "El alcance debe definirse con tu médico tratante según el contexto clínico.",
    ],
    genesEyebrow: "Genes incluidos",
    genesTitle: "Genes analizados en este subpanel",
    genesDescription:
      "Este subpanel evalúa genes seleccionados relacionados con predisposición hereditaria según el tipo de cáncer y la indicación clínica.",
    genesCountLabel: "83 genes incluidos",
    processEyebrow: "Proceso de muestra y resultado",
    processTitle: "De la muestra al plan de seguimiento",
    processSteps: [
      {
        title: "Orientación inicial",
        description:
          "Te ayudamos a entender el alcance del panel core y si encaja con tus objetivos.",
      },
      { title: "Toma de muestra", description: "Saliva o muestra bucal, no invasiva." },
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
    ctaTitle: "¿Buscas una evaluación inicial?",
    ctaSubtitle:
      "Conversemos para definir si el panel core o el panel completo es la opción adecuada para tu caso.",
    ctaPrimary: "Hablar por WhatsApp",
    ctaSecondary: "Ver panel completo (161 genes)",
  },
  subpanelProstata: {
    subtitle:
      "Evaluación genética enfocada en genes asociados con predisposición hereditaria a cáncer de próstata, especialmente útil cuando existe historia familiar, diagnóstico temprano o enfermedad agresiva.",
    whatEyebrow: "¿Qué evalúa este subpanel?",
    whatTitle: "Genes con relevancia clínica para cáncer de próstata",
    whatBody:
      "Este subpanel evalúa genes asociados con predisposición hereditaria a cáncer de próstata, incluyendo variantes en genes de reparación del ADN. La información puede orientar vigilancia, prevención y evaluación de familiares cuando aplica.",
    whoEyebrow: "¿Quién debería considerarlo?",
    whoTitle: "Situaciones que pueden orientar la decisión",
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
    warningDescription:
      "Estos antecedentes pueden orientar la conversación con tu médico sobre la pertinencia del estudio.",
    warningSigns: [
      "Cáncer de próstata diagnosticado antes de los 55–60 años",
      "Enfermedad metastásica o de alto riesgo",
      "Varios familiares con cáncer de próstata",
      "Familiares con cáncer de mama, ovario o páncreas",
      "Familiares con variantes BRCA1/BRCA2 u otras de riesgo",
      "Etnias con mayor prevalencia documentada bajo criterio médico",
    ],
    familyEyebrow: "Importancia para familiares",
    familyTitle: "Tu resultado también puede proteger a tu familia",
    familyDescription:
      "Cuando se identifica una variante hereditaria, otros familiares pueden beneficiarse de orientación genética y estrategias preventivas.",
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
    genesEyebrow: "Genes incluidos",
    genesTitle: "Genes analizados en este subpanel",
    genesDescription:
      "Este subpanel evalúa genes seleccionados relacionados con predisposición hereditaria según el tipo de cáncer y la indicación clínica.",
    genesCountLabel: "17 genes incluidos",
    processEyebrow: "Proceso de muestra y resultado",
    processTitle: "De la muestra al plan de seguimiento",
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
    ctaTitle: "¿Hay cáncer de próstata en tu familia?",
    ctaSubtitle:
      "Una evaluación genética enfocada puede aportar información clave para vigilancia y prevención.",
    ctaPrimary: "Agendar consulta por WhatsApp",
    ctaSecondary: "Ver panel completo (161 genes)",
  },
  products: {
    "panel-cancer-hereditario": {
      title: "Panel de Cáncer Hereditario",
      categoryLabel: "Cáncer hereditario",
      description:
        "Análisis de genes asociados a predisposición hereditaria a cáncer de mama, ovario, colon, próstata, páncreas, melanoma y otros síndromes hereditarios.",
      ctaLabel: "Ver panel",
      badges: ["161 genes", "NGS", "Prevención", "Riesgo hereditario"],
    },
    "panel-cardio-pulmonar": {
      title: "Panel Cardio-Pulmonar",
      categoryLabel: "Salud cardiovascular",
      description:
        "Evaluación genética orientada a condiciones cardiovasculares y pulmonares hereditarias.",
      ctaLabel: "Solicitar información",
      badges: ["NGS", "Cardiovascular"],
    },
    "panel-neurologico": {
      title: "Panel Neurológico",
      categoryLabel: "Neurología",
      description:
        "Análisis genético para condiciones neurológicas hereditarias y neurodegenerativas seleccionadas.",
      ctaLabel: "Solicitar información",
      badges: ["NGS", "Neurología"],
    },
    "panel-inmunologico": {
      title: "Panel Inmunológico",
      categoryLabel: "Inmunología",
      description:
        "Evaluación de variantes asociadas con inmunodeficiencias primarias y trastornos autoinmunes/autoinflamatorios.",
      ctaLabel: "Solicitar información",
      badges: ["NGS", "Inmunología"],
    },
    "panel-diabetes": {
      title: "Panel de Diabetes",
      categoryLabel: "Diabetes",
      description:
        "Análisis genético enfocado en predisposición y formas monogénicas relacionadas con diabetes.",
      ctaLabel: "Solicitar información",
      badges: ["NGS", "Metabolismo"],
    },
    "panel-oftalmologico": {
      title: "Panel Oftalmológico",
      categoryLabel: "Oftalmología",
      description:
        "Evaluación genética para trastornos oculares hereditarios y retinopatías.",
      ctaLabel: "Solicitar información",
      badges: ["NGS", "Oftalmología"],
    },
    "panel-respiratorio": {
      title: "Panel Respiratorio",
      categoryLabel: "Respiratorio",
      description:
        "Análisis de variantes asociadas a enfermedades respiratorias hereditarias o predisposición pulmonar.",
      ctaLabel: "Solicitar información",
      badges: ["NGS", "Respiratorio"],
    },
    "panel-autismo": {
      title: "Panel de Autismo / Neurodesarrollo",
      categoryLabel: "Neurodesarrollo",
      description:
        "Análisis genético orientado a condiciones del neurodesarrollo bajo criterio médico.",
      ctaLabel: "Solicitar información",
      badges: ["NGS", "Neurodesarrollo"],
    },
    "panel-farmacogenomica": {
      title: "Panel de Farmacogenómica",
      categoryLabel: "Farmacogenómica",
      description:
        "Evaluación genética para orientar respuesta a medicamentos y metabolismo farmacológico.",
      ctaLabel: "Solicitar información",
      badges: ["NGS", "Medicina personalizada"],
    },
    "panel-tiroides": {
      title: "Panel de Tiroides",
      categoryLabel: "Tiroides",
      description:
        "Evaluación genética relacionada con predisposición a trastornos tiroideos seleccionados.",
      ctaLabel: "Solicitar información",
      badges: ["NGS", "Endocrinología"],
    },
    "exoma-completo": {
      title: "Secuenciación de Exoma Completo (WES)",
      categoryLabel: "Exoma / Genoma",
      description:
        "Análisis de regiones codificantes del genoma para investigación clínica avanzada bajo indicación médica.",
      ctaLabel: "Solicitar información",
      badges: ["WES", "Investigación clínica"],
    },
    "reporte-cardiometabolico": {
      title: "Reporte Cardiometabólico / PRS",
      categoryLabel: "Salud cardiovascular",
      description:
        "Reporte de riesgo genético cardiometabólico para prevención personalizada.",
      ctaLabel: "Solicitar información",
      badges: ["PRS", "Prevención"],
    },
    "neuro-panel-wgs": {
      title: "Neuro Panel Whole Genome",
      categoryLabel: "Neurología",
      description:
        "Análisis genómico amplio para condiciones neurológicas complejas bajo indicación médica.",
      ctaLabel: "Solicitar información",
      badges: ["WGS", "Neurología"],
    },
    "microbiota-intestinal": {
      title: "Microbiota Intestinal",
      categoryLabel: "Microbioma",
      description:
        "Análisis del ecosistema bacteriano intestinal para evaluar diversidad microbiana, disbiosis y orientar estrategias nutricionales y de salud digestiva.",
      ctaLabel: "Ver análisis",
      badges: ["Secuenciación 16S", "Pangea Lab", "Microbioma", "Salud digestiva"],
    },
  } as Record<string, { title: string; categoryLabel: string; description: string; ctaLabel: string; badges: string[] }>,
  productCategories: [
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
    { id: "microbioma", label: "Microbioma" },
  ],
  microbiotaIntestinal: {
    heroBadge: "En colaboración con Pangea Laboratory",
    heroTitle: "Microbiota Intestinal",
    heroSubtitle:
      "Conoce el ecosistema bacteriano de tu intestino. Identifica desequilibrios, orientados a mejorar tu salud digestiva, inmunológica y metabólica.",
    heroBadges: ["Secuenciación 16S", "Pangea Lab", "Resultados aprox. 21 días", "Muestra en casa"],
    heroCtaPrimary: "Solicitar información por WhatsApp",
    heroCtaSecondary: "Ver proceso",
    whatEyebrow: "¿Qué es este estudio?",
    whatTitle: "Un mapa de tu ecosistema intestinal",
    whatBody:
      "El análisis de Microbiota Intestinal identifica y cuantifica las bacterias presentes en tu intestino a partir de una muestra de heces. Utilizamos secuenciación del gen 16S rRNA, una tecnología de referencia en microbiología clínica, para obtener un perfil detallado de la composición bacteriana intestinal y detectar patrones de disbiosis.",
    whatBody2:
      "El estudio es realizado por Pangea Laboratory, laboratorio especializado en análisis del microbioma, y la interpretación clínica es integrada por GenoVision en el contexto de la salud del paciente.",
    evaluatesEyebrow: "¿Qué evalúa?",
    evaluatesTitle: "Dimensiones clave del microbioma",
    evaluates: [
      {
        title: "Diversidad microbiana (alfa y beta)",
        description:
          "Índices de riqueza y diversidad de especies bacterianas, indicadores clave de un microbioma saludable.",
      },
      {
        title: "Abundancia relativa por phylum y género",
        description:
          "Proporción de los principales grupos bacterianos: Firmicutes, Bacteroidetes, Proteobacteria y otros.",
      },
      {
        title: "Detección de disbiosis",
        description:
          "Identificación de desequilibrios en la comunidad bacteriana asociados con síntomas digestivos o inflamación.",
      },
      {
        title: "Bacterias beneficiosas y oportunistas",
        description:
          "Presencia y abundancia de géneros protectores (Lactobacillus, Bifidobacterium) y oportunistas relevantes.",
      },
      {
        title: "Indicadores de permeabilidad intestinal",
        description:
          "Patrones bacterianos asociados con compromiso de la barrera intestinal.",
      },
      {
        title: "Orientación nutricional personalizada",
        description:
          "El reporte incluye recomendaciones basadas en el perfil bacteriano para apoyar intervenciones dietéticas.",
      },
    ],
    whoEyebrow: "¿Para quién es?",
    whoTitle: "Candidatos ideales para este análisis",
    whoDescription:
      "El análisis de microbiota intestinal es especialmente útil para quienes presentan síntomas digestivos persistentes o buscan optimizar su salud desde un enfoque preventivo.",
    candidates: [
      {
        title: "Síntomas digestivos crónicos",
        description:
          "Personas con distensión, estreñimiento, diarrea recurrente, gases o síndrome de intestino irritable.",
      },
      {
        title: "Seguimiento post-antibiótico",
        description:
          "Evaluación de la recuperación del microbioma tras tratamientos antibióticos prolongados o frecuentes.",
      },
      {
        title: "Condiciones metabólicas e inflamatorias",
        description:
          "Diabetes tipo 2, obesidad, enfermedades autoinmunes o inflamatorias con posible componente intestinal.",
      },
      {
        title: "Fatiga crónica y neblina mental",
        description:
          "Síntomas sistémicos que pueden asociarse con el eje intestino-cerebro y alteraciones del microbioma.",
      },
      {
        title: "Optimización del bienestar",
        description:
          "Personas que buscan personalizar su alimentación y estilo de vida con base en su perfil microbiano.",
      },
      {
        title: "Seguimiento oncológico",
        description:
          "Pacientes en tratamiento o seguimiento oncológico donde el estado del microbioma puede ser clínicamente relevante.",
      },
    ],
    oncologyEyebrow: "Contexto oncológico",
    oncologyTitle: "Microbioma y cáncer: evidencia emergente",
    oncologyBody:
      "La investigación científica ha identificado asociaciones entre la composición del microbioma intestinal y el riesgo, progresión y respuesta al tratamiento en algunos tipos de cáncer, particularmente colorrectal, hepático y de pulmón. La evidencia también sugiere que el microbioma influye en la respuesta a inmunoterapia.",
    oncologyBody2:
      "En GenoVision, ofrecemos este análisis como complemento al seguimiento clínico en pacientes oncológicos bajo indicación médica, con el objetivo de identificar disbiosis que puedan ser abordadas como parte del plan de cuidado integral.",
    oncologyNote:
      "Este análisis no es diagnóstico de cáncer ni lo descarta. Su interpretación debe hacerse siempre en el contexto clínico del paciente.",
    processEyebrow: "¿Cómo funciona?",
    processTitle: "Un proceso sencillo desde casa",
    processSteps: [
      {
        title: "Orientación inicial",
        description:
          "Conversamos sobre tu caso y confirmamos si el análisis es adecuado para ti.",
      },
      {
        title: "Envío del kit de recolección",
        description:
          "Recibes un kit de toma de muestra en casa. La recolección es sencilla, en la comodidad de tu hogar.",
      },
      {
        title: "Envío de la muestra",
        description:
          "La muestra se envía al laboratorio Pangea siguiendo las instrucciones del kit.",
      },
      {
        title: "Análisis por secuenciación 16S",
        description:
          "Pangea Laboratory realiza el análisis de microbioma con tecnología de secuenciación genómica.",
      },
      {
        title: "Reporte e interpretación",
        description:
          "GenoVision integra el reporte con contexto clínico y te acompaña en la comprensión de los resultados.",
      },
    ],
    physicianEyebrow: "Para el médico",
    physicianTitle: "Utilidad clínica para el profesional de la salud",
    physicianItems: [
      {
        title: "Guía intervenciones dietéticas y probióticas",
        description:
          "El perfil microbiano permite personalizar recomendaciones de alimentación y suplementación con base en evidencia.",
      },
      {
        title: "Monitoreo post-antibiótico",
        description:
          "Evaluación objetiva de la recuperación del microbioma tras antibioticoterapia.",
      },
      {
        title: "Complemento en seguimiento oncológico",
        description:
          "Información microbiana potencialmente relevante en pacientes bajo tratamiento o vigilancia oncológica.",
      },
      {
        title: "Reporte clínico estructurado",
        description:
          "Resultado en formato interpretado, con índices de diversidad, perfiles por phylum/género y hallazgos destacados.",
      },
    ],
    limitationsEyebrow: "Limitaciones y alcance",
    limitationsTitle: "Lo que este análisis no hace",
    limitations: [
      "No detecta genes hereditarios ni variantes de ADN del paciente.",
      "No diagnostica ni descarta enfermedades digestivas, infecciosas o neoplásicas.",
      "La secuenciación 16S no identifica a nivel de especie con la misma precisión que metagenómica shotgun.",
      "Los resultados deben interpretarse en el contexto clínico por un profesional de salud.",
      "Las asociaciones entre microbioma y enfermedad representan correlaciones, no causalidad establecida.",
    ],
    limitationsNote:
      "Este análisis es una herramienta de apoyo clínico. No reemplaza la evaluación médica ni el diagnóstico endoscópico o microbiológico específico.",
    ctaTitle: "¿Te interesa conocer tu microbioma?",
    ctaSubtitle:
      "Escríbenos por WhatsApp y te orientamos sobre si este análisis es adecuado para ti o tu paciente.",
    ctaPrimary: "Solicitar información",
    ctaSecondary: "Ver catálogo completo",
    partnerNote: "Análisis realizado por",
    partnerName: "Pangea Laboratory",
    partnerDescription:
      "Laboratorio especializado en análisis de microbioma con tecnología de secuenciación genómica de alta resolución.",
    whatsappMessage:
      "Hola GenoVision, me interesa información sobre el análisis de Microbiota Intestinal.",
  },
  subpanelData: {
    "colorrectal-poliposis": {
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
      enfoque: "Colon, Lynch, poliposis y gastrointestinal hereditario",
      mejorPara: "Antecedentes de colon o pólipos",
      nivel: "Enfocado",
    },
    "mama-hereditario": {
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
      enfoque: "Mama, ovario y síndromes relacionados",
      mejorPara: "Antecedentes de mama u ovario",
      nivel: "Enfocado",
    },
    core: {
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
      enfoque: "Genes esenciales de riesgo hereditario",
      mejorPara: "Evaluación inicial o bajo criterio médico",
      nivel: "Básico / enfocado",
    },
    "prostata-hereditario": {
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
      enfoque: "Próstata y síndromes relacionados",
      mejorPara: "Antecedentes de próstata agresiva o temprana",
      nivel: "Enfocado",
    },
  } as Record<string, { title: string; shortTitle: string; badge: string; description: string; indications: string[]; ctaLabel: string; enfoque: string; mejorPara: string; nivel: string }>,
};

const en: typeof es = {
  layout: {
    skipToContent: "Skip to main content",
    htmlLang: "en",
  },
  nav: {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/productos" },
      { label: "Process", href: "/proceso" },
      { label: "For Physicians", href: "/medicos" },
      { label: "FAQ", href: "/preguntas-frecuentes" },
      { label: "Contact", href: "/contacto" },
    ],
    whatsappCTA: "WhatsApp",
    whatsappMobile: "Message us on WhatsApp",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    ariaLabel: "Main",
    ariaLabelMobile: "Mobile",
  },
  footer: {
    tagline:
      "Clinical genomics to identify hereditary cancer predisposition and guide preventive decisions.",
    navHeading: "Navigation",
    contactHeading: "Contact",
    legalHeading: "Legal",
    legalText:
      "The information on this site is educational and does not substitute medical consultation. Genetic results must be interpreted by qualified healthcare professionals.",
    rights: "All rights reserved.",
    location: "Mérida, Yucatán, Mexico",
  },
  trustBar: {
    items: [
      { label: "161 genes", sub: "evaluated" },
      { label: "NGS Technology", sub: "next-generation sequencing" },
      { label: "Buccal swab or saliva", sub: "non-invasive" },
      { label: "Results approx. 28 days", sub: "estimated time" },
      { label: "Professional interpretation", sub: "included" },
    ],
  },
  common: {
    genesEvaluated: "genes evaluated",
    genesAnalyzed: "genes analyzed",
    genesIncluded: "genes included",
    available: "Available",
    comingSoon: "Coming soon",
    recommended: "Recommended",
    featured: "Featured",
    requestInfo: "Request information",
    viewFullProcess: "View full process",
    viewPanel: "View panel",
    viewSubpanel: "View subpanel",
    viewFullCatalog: "View full catalog",
    viewPanelDetails: "View panel details",
    viewFullPanel: "View full panel (161 genes)",
    backToFullPanel: "View full panel of 161 genes",
    scheduleWhatsApp: "Schedule consultation via WhatsApp",
    writeWhatsApp: "Message us on WhatsApp",
    sendWhatsApp: "Send WhatsApp now",
    talkSpecialist: "Talk to a specialist",
    forDoctors: "For healthcare professionals",
    specializedSubpanel: "Specialized subpanel",
    breadcrumbHome: "Home",
    breadcrumbProducts: "Products",
    breadcrumbPanel: "Hereditary Cancer Panel",
    step: "Step",
    important: "Important",
    genesLabel: "genes",
    searchGene: "Search gene…",
    searchGeneLabel: "Search gene",
    result: "result",
    results: "results",
    geneNotFound: "That gene was not found in the list.",
    geneDisclaimerSubpanel:
      "The inclusion of a gene in this subpanel does not mean a cancer diagnosis. Results must be interpreted alongside personal, family history and medical judgment.",
    geneDisclaimerFull:
      "The inclusion of a gene in the panel does not mean a cancer diagnosis. Results must be interpreted alongside personal, family history and medical judgment.",
    showAllGenes: "Show all 161 genes",
    hideGenes: "Hide list",
    genesIncludedCount: "161 genes included",
  },
  home: {
    heroTitlePart1: "Cancer genetics and ",
    heroTitleHighlight: "precision oncology",
    heroTitlePart2: " in Mérida",
    heroDescription:
      "Genetic studies that help physicians and families understand hereditary cancer risk, treatment options, and disease monitoring.",
    ctaWhatsapp: "Schedule via WhatsApp",
    ctaViewStudies: "View studies",

    decision: {
      eyebrow: "CLINICAL DECISION PATHWAY",
      heading: "Choose the right genetic study for the right clinical question.",
      paragraph:
        "GenoVision helps patients and physicians identify which genetic test best fits the goal: hereditary risk, treatment decisions, or disease monitoring.",
      ctaLabel: "Schedule guidance",
      cards: [
        {
          number: "01",
          title: "Hereditary risk",
          body: "For families with a history of cancer or patients who need to understand hereditary cancer predisposition.",
          recommendedLabel: "Recommended study",
          recommendedValue: "Hereditary Cancer Panel",
          ctaText: "",
        },
        {
          number: "02",
          title: "Treatment decisions",
          body: "For oncology patients who need tumor-related molecular information to support treatment planning.",
          recommendedLabel: "Recommended studies",
          recommendedValue: "Liquid Biopsy · Pharmacogenomics",
          ctaText: "",
        },
        {
          number: "03",
          title: "Disease monitoring",
          body: "For selected oncology cases where molecular follow-up or recurrence assessment may be clinically useful.",
          recommendedLabel: "Recommended study",
          recommendedValue: "Liquid Biopsy",
          ctaText: "",
        },
        {
          number: "04",
          title: "Not sure what fits?",
          body: "If the goal is not clear yet, GenoVision can help orient the next step based on the clinical context.",
          recommendedLabel: "",
          recommendedValue: "",
          ctaText: "Ask for guidance",
        },
      ],
    },

    servicesEyebrow: "Genomic Studies",
    servicesTitle: "Cancer genetics and precision oncology, all in one place",
    servicesDescription:
      "Each study addresses a distinct clinical goal: prevention, hereditary risk, treatment selection, or monitoring — coordinated in Mérida with professional interpretation included.",
    services: [
      {
        name: "Hereditary Cancer Panel",
        purpose: "Identifies hereditary mutations associated with increased cancer risk.",
        useCase: "Useful for patients with a personal or family history of cancer.",
      },
      {
        name: "Liquid Biopsy",
        purpose: "Analyzes tumor-related genetic information from a blood sample.",
        useCase: "May support treatment selection and monitoring in selected oncology cases.",
      },
      {
        name: "Pharmacogenomics",
        purpose: "Helps understand how a patient may respond to certain medications.",
        useCase: "Useful for personalized medication planning.",
      },
      {
        name: "NIPT",
        purpose: "Non-invasive prenatal screening from maternal blood.",
        useCase: "Assesses common chromosomal conditions and fetal sex from week 10.",
      },
      {
        name: "Whole Genome Sequencing",
        purpose: "Broad analysis of genetic information.",
        useCase: "Useful when a broader genetic evaluation is needed.",
      },
      {
        name: "Gut Microbiota",
        purpose: "Assesses the composition of the gut microbiota.",
        useCase: "Useful for selected wellness and clinical support contexts.",
      },
    ],
    availableLabel: "Available",
    featuredLabel: "Featured study",
    viewDetails: "View details",
    clinicalUseLabel: "Clinical use: ",

    trustEyebrow: "Local presence",
    trustTitle: "Local coordination. International-level studies.",
    trustPoints: [
      "Based in Mérida, Yucatán",
      "Patient coordination at CÉNIT Medical Center",
      "Service in Spanish",
      "Communication via WhatsApp",
      "Focus on cancer genetics and precision oncology",
      "Local sample coordination available",
    ],

    finalCtaTitle: "Which genetic test does your patient need?",
    finalCtaSubtitle:
      "Every case is different. GenoVision can help identify the most appropriate genetic test based on the clinical goal: prevention, diagnostic support, treatment selection, or monitoring.",
    finalCtaPrimaryLabel: "Contact via WhatsApp",
    finalCtaSecondaryLabel: "View available studies",
  },
  productos: {
    eyebrow: "Catalog",
    title: "Genetic analysis catalog",
    description:
      "Explore our genomic analyses designed for prevention, hereditary risk, and personalized medicine. Some panels are available on request and under medical indication.",
    subpanelsEyebrow: "Hereditary cancer",
    subpanelsTitle: "Hereditary cancer subpanels",
    subpanelsDescription:
      "Focused subpanels derived from the 161-gene Hereditary Cancer Panel, organized by cancer type and medical indication.",
    ctaTitle: "Need guidance choosing a panel?",
    ctaSubtitle:
      "Tell us your case and we'll help determine whether genetic testing is right for you or your family member.",
    ctaPrimary: "Chat on WhatsApp",
    ctaSecondary: "Learn about the process",
    emptyCategory:
      "No panels in this category yet. More coming soon.",
    filterLabel: "Catalog filters",
  },
  panelCancer: {
    badgeAvailable: "Available",
    badgeFeatured: "Featured product",
    title: "Hereditary Cancer Panel",
    descriptionPart1: "Advanced genetic analysis of",
    descriptionPart2:
      "genes to identify hereditary cancer predisposition and guide preventive decisions with your physician.",
    badges: [
      "161 genes",
      "NGS",
      "Buccal swab or saliva",
      "Results approx. 28 days",
      "Initial consultation included",
    ],
    ctaSchedule: "Schedule evaluation",
    ctaProcess: "View full process",
    whatIsEyebrow: "What is this test?",
    whatIsTitle: "A broad view of your hereditary predisposition",
    whatIsBody:
      "GenoVision's Hereditary Cancer Panel analyzes genes related to hereditary cancer predisposition syndromes. The goal is to identify genetic variants that may increase risk and help define prevention strategies, medical surveillance, and family guidance.",
    whoEyebrow: "Who is it for?",
    whoTitle: "Who should consider it",
    whoDescription:
      "If you identify with any of the following scenarios, genetic testing may provide you with valuable information.",
    candidates: [
      {
        title: "Relatives diagnosed with cancer",
        description:
          "Parents, siblings, or close relatives with oncological history.",
      },
      {
        title: "Specific cancers in the family",
        description:
          "Breast, ovarian, colon, prostate, pancreatic, or melanoma in one or more relatives.",
      },
      {
        title: "Early-onset diagnosis",
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
          "When a specialist considers genetic testing to be useful.",
      },
    ],
    cancerTypesEyebrow: "Cancer types evaluated",
    cancerTypesTitle: "Clinical coverage of the panel",
    cancerTypesDescription:
      "The panel includes genes associated with hereditary predisposition to multiple cancer types and oncological syndromes.",
    cancerTypes: [
      "Breast",
      "Ovarian",
      "Colon / Lynch",
      "Prostate",
      "Pancreatic",
      "Melanoma",
      "Endometrial",
      "Thyroid",
      "Gastric",
      "Renal",
      "Other hereditary syndromes",
    ],
    techEyebrow: "Technology",
    techTitle: "NGS Technology",
    techDescription:
      "We use next-generation sequencing to evaluate multiple genes simultaneously. This technology provides a broad view of variants associated with hereditary cancer predisposition.",
    genesEyebrow: "Genes included",
    genesTitle: "Genes analyzed in the Hereditary Cancer Panel",
    genesDescription:
      "The full panel evaluates 161 genes associated with hereditary predisposition to various cancer types and familial syndromes.",
    processEyebrow: "How the process works",
    processTitle: "From first contact to follow-up plan",
    processDescription:
      "Each stage is designed to be clear, non-invasive, and guided by professionals.",
    processSteps: [
      {
        title: "Initial guidance",
        description:
          "We answer questions and review whether the panel is right for you.",
      },
      {
        title: "Family history",
        description:
          "We document relevant history to interpret the result in context.",
      },
      {
        title: "Non-invasive sample collection",
        description:
          "Buccal swab or saliva — no needles or complex procedures.",
      },
      {
        title: "Genetic analysis",
        description:
          "Next-generation sequencing of 161 genes associated with hereditary cancer.",
      },
      {
        title: "Result interpretation",
        description:
          "Your report is clinically interpreted and contextualized with your history.",
      },
      {
        title: "Follow-up plan",
        description:
          "Recommendations on how to bring the result to your treating physician.",
      },
    ],
    resultsEyebrow: "What the result may show",
    resultsTitle: "Three possible result types",
    resultsDescription:
      "The report is always interpreted within the clinical and family context of each individual.",
    resultCards: [
      {
        tone: "amber" as const,
        label: "Positive result",
        title: "Pathogenic / likely pathogenic variant",
        description:
          "Indicates increased hereditary predisposition. Allows defining surveillance, prevention, and guidance for first-degree relatives.",
      },
      {
        tone: "neutral" as const,
        label: "Intermediate result",
        title: "Variant of uncertain significance",
        description:
          "Clinical significance has not been clearly established. May require future reanalysis and professional follow-up.",
      },
      {
        tone: "emerald" as const,
        label: "Reassuring result",
        title: "Negative or uninformative",
        description:
          "No variants with known clinical significance were identified in the genes evaluated. Does not rule out other risk factors.",
      },
    ],
    importantDisclaimer:
      "A genetic result does not mean a person has cancer or guarantees they will develop it. The result must be interpreted alongside personal history, family history, and medical judgment.",
    subpanelsEyebrow: "Focused subpanels",
    subpanelsTitle: "Specialized subpanels",
    subpanelsDescription:
      "In addition to the full 161-gene panel, GenoVision organizes evaluation into focused subpanels based on family history, cancer type, and medical indication.",
    subpanelsNote:
      "The full panel of {genes} genes remains the broadest option. Subpanels are focused alternatives under medical judgment.",
    comparisonEyebrow: "Comparison",
    comparisonTitle: "Panel comparison",
    comparisonDescription:
      "Comparative table between the Full 161-gene Panel and the available focused subpanels.",
    familyImpactBadge: "Family impact",
    familyImpactTitle: "Your result can also protect your family",
    familyImpactDescription:
      "When a hereditary variant exists, other family members can benefit from genetic guidance and preventive strategies.",
    familyBenefits: [
      "Early identification in first-degree relatives",
      "Personalized medical surveillance",
      "Preventive decisions with clinical guidance",
    ],
    ctaTitle:
      "If cancer runs in your family, waiting may be the costliest mistake.",
    ctaSubtitle:
      "Talk to our team today and find out whether genetic testing is right for you.",
    ctaPrimary: "Schedule consultation via WhatsApp",
    ctaSecondary: "View full process",
  },
  comparisonTable: {
    colOption: "Option",
    colGenes: "Genes",
    colFocus: "Focus",
    colBestFor: "Best for",
    colCoverage: "Coverage level",
    colCta: "CTA",
    labelFocus: "Focus",
    labelBestFor: "Best for",
    recommended: "Recommended",
    schedule: "Schedule",
    view: "View",
    fullPanelName: "Full Hereditary Cancer Panel",
    fullPanelFocus:
      "161 genes related to multiple hereditary syndromes",
    fullPanelBestFor: "Broad evaluation, complex family history",
    fullPanelCoverage: "Most comprehensive",
    subpanelNames: {
      "colorrectal-poliposis": "Colorectal & Polyposis Panel",
      "mama-hereditario": "Hereditary Breast & Ovarian Cancer Panel",
      core: "Core Panel",
      "prostata-hereditario": "Hereditary Prostate Cancer Panel",
    } as Record<string, string>,
    subpanelFocus: {
      "colorrectal-poliposis":
        "Colon, Lynch, polyposis and hereditary gastrointestinal",
      "mama-hereditario": "Breast, ovarian and related syndromes",
      core: "Essential hereditary risk genes",
      "prostata-hereditario": "Prostate and related syndromes",
    } as Record<string, string>,
    subpanelBestFor: {
      "colorrectal-poliposis": "Colon or polyp history",
      "mama-hereditario": "Breast or ovarian history",
      core: "Initial evaluation or under medical guidance",
      "prostata-hereditario": "Aggressive or early prostate history",
    } as Record<string, string>,
    subpanelCoverage: {
      "colorrectal-poliposis": "Focused",
      "mama-hereditario": "Focused",
      core: "Basic / focused",
      "prostata-hereditario": "Focused",
    } as Record<string, string>,
  },
  dnaPipeline: {
    step: "Step",
    steps: [
      { label: "Sample", sub: "Buccal swab or saliva" },
      { label: "Extraction", sub: "Purified DNA" },
      { label: "Sequencing", sub: "NGS Technology" },
      { label: "Bioinformatics", sub: "Variant analysis" },
      { label: "Report", sub: "Clinical interpretation" },
    ],
  },
  subpanelHero: {
    breadcrumbPanel: "Hereditary Cancer Panel",
    specializedSubpanel: "Specialized subpanel",
    schedule: "Schedule evaluation",
    viewFullPanel: "View full panel (161 genes)",
    titlePrefix: "Panel of",
  },
  medicalDisclaimer: {
    important: "Important",
    text: "This analysis does not diagnose cancer. It evaluates hereditary genetic predisposition and must be interpreted alongside personal history, family history, and medical judgment.",
  },
  doctorReferral: {
    badge: "For healthcare professionals",
    title: "Are you a physician?",
    description:
      "GenoVision can support your patients with advanced genetic analysis to identify hereditary predisposition and guide prevention and surveillance strategies.",
    benefits: [
      "Clinical interpretation support",
      "Educational materials for patients",
      "Sample collection coordination",
      "Clear, professional reports",
    ],
    ctaPrimary: "Request physician information",
    ctaSecondary: "View details",
    exclusiveLine: "Exclusive physician line",
    referPatients:
      "Refer patients with a clinically useful genomic analysis",
    contactLabel: "WhatsApp / Phone",
  },
  contactCTA: {
    defaultTitle: "If cancer runs in your family, don't ignore it.",
    defaultSubtitle:
      "Talk to our team and learn the full process of the Hereditary Cancer Panel.",
    defaultPrimaryLabel: "Message us on WhatsApp",
  },
  contactForm: {
    title: "Send us a message",
    nameLabel: "Name",
    namePlaceholder: "Your full name",
    phoneLabel: "Phone",
    emailLabel: "Email",
    forWhomLabel: "Is this test for you or a family member?",
    forWhomPlaceholder: "Select an option",
    forWhomSelf: "For me",
    forWhomFamily: "For a family member",
    historyLabel: "Is there a history of cancer in your family?",
    historyPlaceholder: "Select an option",
    historyYes: "Yes",
    historyNo: "No",
    historyUnsure: "I'm not sure",
    messageLabel: "Message",
    messagePlaceholder: "Tell us briefly how we can help you",
    privacyNote:
      "By submitting this form you agree for GenoVision to contact you with information. Your data will not be shared with third parties.",
    submitLabel: "Send request",
    successTitle: "We received your information!",
    successDescription:
      "To respond immediately, we've prepared a WhatsApp message with your details. Just click the button to send it.",
    continueWhatsApp: "Continue on WhatsApp",
    sendAnother: "Send another request",
    whatsappIntro: "Hello GenoVision, I'd like to receive information.",
    whatsappName: "Name",
    whatsappPhone: "Phone",
    whatsappEmail: "Email",
    whatsappForWhom: "The test is",
    whatsappHistory: "Family cancer history",
    whatsappMessage: "Message",
    whatsappForSelf: "for me",
    whatsappForFamily: "for a family member",
    whatsappHistoryYes: "yes",
    whatsappHistoryNo: "no",
    whatsappHistoryUnsure: "not sure",
  },
  contacto: {
    eyebrow: "Contact",
    title: "Let's talk about your case",
    description:
      "We answer your questions, explain the process, and guide you with no commitment. The initial consultation is the first step.",
    contactDataTitle: "Contact information",
    whatsappLabel: "WhatsApp",
    phoneLabel: "Phone",
    addressLabel: "Address",
    sendWhatsApp: "Send WhatsApp now",
    quickResponse: "Fast response via WhatsApp",
    emailLabel: "Professional / lab email",
    mapTitle: "GenoVision Map - CÉNIT Medical Center",
    socialTitle: "Follow us on social",
    socialSubtitle: "Stay up to date with news, educational content and updates.",
    instagramLabel: "Instagram",
    instagramCta: "Follow on Instagram",
    instagramAria: "Visit GenoVision on Instagram",
  },
  faq: {
    eyebrow: "Frequently asked questions",
    title: "We answer your questions",
    description:
      "Clear, honest information about the Hereditary Cancer Panel, the sample collection process, and result interpretation.",
    items: [
      {
        q: "Does this test diagnose cancer?",
        a: "No. This test identifies hereditary genetic predisposition. It does not substitute diagnostic studies or medical consultation.",
      },
      {
        q: "What sample is needed?",
        a: "Saliva or buccal swab. It is a simple, painless, and non-invasive procedure that can be done comfortably.",
      },
      {
        q: "How long do results take?",
        a: "Approximately 28 days from the laboratory's receipt of the sample.",
      },
      {
        q: "What does analyzing 161 genes mean?",
        a: "It means multiple genes associated with hereditary cancer predisposition are reviewed in a single analysis, enabling a broad and efficient view.",
      },
      {
        q: "Who should get tested?",
        a: "People with a family history of cancer, early-onset cancer cases in the family, multiple affected relatives, or individuals interested in personalized prevention under medical guidance.",
      },
      {
        q: "What happens if a variant is found?",
        a: "The result must be professionally reviewed to define surveillance, prevention, and possible family guidance. Your treating physician integrates this information into your health plan.",
      },
      {
        q: "Can I do it even if I don't have cancer?",
        a: "Yes. The primary focus of this test is prevention and risk assessment in people without an oncological diagnosis.",
      },
      {
        q: "Does it apply to my whole family?",
        a: "A result can guide whether other relatives should consider genetic testing. However, each family member must be evaluated individually.",
      },
      {
        q: "Where are you located?",
        a: "CÉNIT Medical Center, C. 15 501-C 919, Col. Altabrisa, 97130 Mérida, Yucatán.",
      },
      {
        q: "How do I schedule?",
        a: "Via WhatsApp at 999 366 0543. We'll guide you through the next steps.",
      },
    ],
    ctaTitle: "Have a question that's not here?",
    ctaSubtitle: "Message us on WhatsApp and we'll answer directly.",
  },
  proceso: {
    eyebrow: "Full process",
    title: "From DNA to results: here's how it works",
    description:
      "Every stage of the GenoVision process is designed to provide clarity, guidance, and clinical rigor.",
    timelineEyebrow: "Timeline",
    timelineTitle: "9 steps, continuous guidance",
    timelineDescription:
      "We guide you from the first conversation to the follow-up plan with your treating physician.",
    steps: [
      {
        title: "WhatsApp contact",
        description:
          "Start the process by sending us a message. Our team responds and resolves your initial questions.",
      },
      {
        title: "Orientation consultation",
        description:
          "Initial session to discuss your reasons, expectations, and clarify the scope of the genetic test.",
      },
      {
        title: "Family history questionnaire",
        description:
          "We document relevant oncological history to interpret the result in context.",
      },
      {
        title: "Buccal swab or saliva sample",
        description:
          "Simple, painless, and non-invasive procedure. We explain step by step how to prepare.",
      },
      {
        title: "Sample shipment and analysis",
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
          "Bioinformatic analysis and professional review to classify the variants found.",
      },
      {
        title: "Results delivery",
        description:
          "Your report is delivered in a clear session with explanations of each section.",
      },
      {
        title: "Medical follow-up recommendations",
        description:
          "We guide you on how to bring the result to your treating physician and define a personalized plan.",
      },
    ],
    samplePrepBadge: "Sample preparation",
    samplePrepTitle: "Instructions for buccal sample",
    samplePrepDescription:
      "For buccal swab: brush teeth before collection and do not eat for 30 minutes. You may drink water. These instructions help us obtain a quality sample for genomic analysis.",
    sampleInstructions: [
      { t: "Brush your teeth", d: "Before the sample collection." },
      { t: "Wait 30 minutes", d: "Without eating or chewing gum." },
      { t: "You may drink water", d: "Water does not affect the sample." },
      {
        t: "Follow the kit instructions",
        d: "We guide you step by step during collection.",
      },
    ],
    ctaTitle: "Ready to start?",
    ctaSubtitle:
      "Begin with a conversation. We'll explain the entire process and answer your questions with no commitment.",
    ctaSecondaryLabel: "View hereditary cancer panel",
  },
  medicos: {
    badge: "For healthcare professionals",
    title: "Clinical genomics to support medical decisions",
    description:
      "GenoVision works as a support tool for physicians who want to integrate genetic analysis into prevention, surveillance, and hereditary cancer risk stratification.",
    ctaPrimary: "Request information",
    ctaSecondaryPanel: "View featured panel",
    whyEyebrow: "Why refer patients",
    whyTitle: "Information that enriches clinical practice",
    whyDescription:
      "Genetic analysis, integrated with medical judgment, can provide an additional axis for personalizing care.",
    reasons: [
      {
        title: "Risk stratification",
        description:
          "Genetic information that complements clinical evaluation and family history.",
      },
      {
        title: "Personalized surveillance",
        description:
          "Support in defining surveillance schemes tailored to each patient's hereditary profile.",
      },
      {
        title: "Preventive strategies",
        description:
          "An additional tool when considering primary and secondary prevention in families with a history.",
      },
      {
        title: "Family guidance",
        description:
          "When applicable, the result can guide evaluation and surveillance in first-degree relatives.",
      },
    ],
    indicationsEyebrow: "Clinical indications",
    indicationsTitle: "When to consider the hereditary panel",
    indicationsDescription:
      "Some clinical contexts in which genetic analysis may provide useful information.",
    indications: [
      "Personal or family history of cancer in one or more first-degree relatives.",
      "Cancer diagnosis at an early age (≤50 years) in the family.",
      "Breast, ovarian, colon, prostate, pancreatic, or melanoma cancer with a pattern suggestive of a hereditary syndrome.",
      "Multiple cancer cases across different generations.",
      "Bilateral, multifocal cancer, or more than one primary tumor in the same patient.",
      "Patients with an interest in personalized prevention under medical guidance.",
    ],
    indicationsNote:
      "Actual indications are defined by clinical judgment and current guidelines for each case.",
    providesEyebrow: "What GenoVision provides",
    providesTitle: "Comprehensive support at every stage",
    provides: [
      {
        title: "Broad genetic analysis",
        description:
          "Panel of 161 genes associated with hereditary cancer predisposition via NGS sequencing.",
      },
      {
        title: "Clear clinical report",
        description:
          "Reports with variant classification and clinical context to support your interpretation.",
      },
      {
        title: "Logistical coordination",
        description:
          "Non-invasive sample collection, sample traceability, and timely results delivery.",
      },
      {
        title: "Educational materials",
        description:
          "Informational support for your patients before and after the test, in clear language.",
      },
    ],
    educationBadge: "Patient education",
    educationTitle: "Materials and prior guidance",
    educationDescription:
      "We support your patients with clear information before and after the test, without replacing the medical consultation. The key clinical conversation remains with you.",
    reportBadge: "Result interpretation",
    reportTitle: "Reports prepared for clinical use",
    reportDescription:
      "Each report includes clinical context, variant classification, and relevant notes to support your interpretation and decisions.",
    ctaTitle:
      "Refer patients with a clinically useful genomic analysis",
    ctaSubtitle:
      "We support you with educational materials, logistical coordination, and clear reports.",
    ctaReferLabel: "Request information to refer patients",
  },
  subpanelColorrectal: {
    subtitle:
      "Genetic evaluation focused on hereditary predisposition to colorectal cancer, Lynch syndrome, polyposis, and other hereditary gastrointestinal syndromes.",
    whatEyebrow: "What does this subpanel evaluate?",
    whatTitle: "Genes associated with hereditary gastrointestinal risk",
    whatBody:
      "This subpanel evaluates genes with known clinical relevance for hereditary predisposition to colorectal cancer, Lynch syndrome, familial adenomatous polyposis, and other hereditary gastrointestinal syndromes. It helps identify variants that may guide endoscopic surveillance, prevention, and family evaluation.",
    whoEyebrow: "Who should consider it?",
    whoTitle:
      "Typical scenarios in which this subpanel provides useful information",
    candidates: [
      {
        title: "Colon cancer in the family",
        description:
          "First- or second-degree relatives diagnosed with colorectal cancer.",
      },
      {
        title: "Diagnosis before age 50",
        description:
          "Early-onset colorectal cancer cases in the family.",
      },
      {
        title: "Multiple polyps",
        description:
          "Finding of multiple adenomatous polyps on endoscopic studies.",
      },
      {
        title: "Broad family history",
        description:
          "Family history of colon, endometrial, ovarian, gastric, or pancreatic cancer.",
      },
    ],
    warningEyebrow: "Family warning signs",
    warningTitle: "When genetic testing may be warranted",
    warningDescription:
      "These signs may guide a conversation with your physician about the relevance of testing.",
    warningSigns: [
      "Colorectal cancer in first-degree relatives",
      "More than 10 adenomatous polyps",
      "Colorectal cancer diagnosis before age 50",
      "Multiple tumors in the same person",
      "Relatives with confirmed Lynch syndrome or polyposis",
      "Endometrial, ovarian, gastric, or urinary cancers in the family",
    ],
    relatedEyebrow: "Relation to other hereditary cancers",
    relatedTitle: "Syndromes and conditions evaluated",
    relatedDescription:
      "Some included genes may be associated with tumor risk outside the gastrointestinal tract, which helps contextualize family history.",
    relatedConditions: [
      {
        title: "Lynch Syndrome",
        description:
          "Hereditary predisposition to colorectal, endometrial, gastric, ovarian, urinary, and other cancers.",
      },
      {
        title: "Familial Adenomatous Polyposis",
        description:
          "Development of multiple polyps in the colon and rectum with high risk of progression.",
      },
      {
        title: "MUTYH-Associated Polyposis",
        description:
          "A form of polyposis with a distinct inheritance pattern and management approach.",
      },
      {
        title: "Hamartomatous syndromes",
        description:
          "Such as Peutz-Jeghers or juvenile polyposis, with gastrointestinal involvement.",
      },
    ],
    genesEyebrow: "Genes included",
    genesTitle: "Genes analyzed in this subpanel",
    genesDescription:
      "This subpanel evaluates selected genes related to hereditary predisposition based on cancer type and clinical indication.",
    genesCountLabel: "10 genes included",
    processEyebrow: "Sample and result process",
    processTitle: "From sample to follow-up plan",
    processSteps: [
      {
        title: "Initial guidance",
        description:
          "We discuss your history and clarify the scope of the subpanel.",
      },
      {
        title: "Non-invasive sample collection",
        description:
          "Saliva or buccal swab — no needles or complex procedures.",
      },
      {
        title: "Focused NGS analysis",
        description:
          "Sequencing of genes associated with colorectal and polyposis predisposition.",
      },
      {
        title: "Clinical interpretation",
        description:
          "Your report is contextualized with your personal and family history.",
      },
      {
        title: "Plan with your physician",
        description:
          "Recommendations for follow-up, surveillance, and prevention.",
      },
    ],
    ctaTitle:
      "Does your family history include colon cancer or polyposis?",
    ctaSubtitle:
      "Talk to our team and find out if a focused genetic evaluation is right for you.",
    ctaPrimary: "Schedule consultation via WhatsApp",
    ctaSecondary: "View full panel (161 genes)",
  },
  subpanelMama: {
    subtitle:
      "Genetic evaluation focused on genes associated with hereditary predisposition to breast cancer, ovarian cancer, and related familial syndromes.",
    whatEyebrow: "What does this subpanel evaluate?",
    whatTitle: "Genes with clinical relevance for breast and ovarian cancer",
    whatBody:
      "This subpanel evaluates genes associated with hereditary predisposition to breast and ovarian cancer, including high- and moderate-risk genes. The information can guide surveillance, prevention, and family evaluation when applicable.",
    whoEyebrow: "Who should consider it?",
    whoTitle: "Situations that may guide the decision",
    candidates: [
      {
        title: "Early-onset breast cancer",
        description:
          "Diagnoses before age 50 in the individual or first-degree relatives.",
      },
      {
        title: "Bilateral breast cancer",
        description:
          "Personal or family history of cancer in both breasts.",
      },
      {
        title: "Ovarian cancer in the family",
        description:
          "Cases of ovarian, fallopian tube, or peritoneal cancer in close relatives.",
      },
      {
        title: "Known variants in the family",
        description:
          "Relatives with BRCA1/BRCA2 or other identified risk variants.",
      },
    ],
    warningEyebrow: "Breast and ovarian cancer in the family",
    warningTitle: "Signs that may indicate a hereditary component",
    warningDescription:
      "These factors may guide the conversation with your physician about the relevance of testing.",
    warningSigns: [
      "Breast cancer before age 50",
      "Ovarian cancer in the family",
      "Bilateral breast cancer",
      "Multiple relatives affected by breast or ovarian cancer",
      "Male breast cancer",
      "Relatives with known mutations (BRCA1, BRCA2, or others)",
    ],
    familyEyebrow: "Importance for family members",
    familyTitle: "Your result can also protect your family",
    familyDescription:
      "When a hereditary variant is identified, other family members can benefit from genetic guidance and preventive strategies.",
    familyImpact: [
      {
        title: "Daughters and sisters",
        description:
          "They may benefit from genetic guidance and personalized surveillance.",
      },
      {
        title: "Male relatives",
        description:
          "Some variants also increase risk in men (breast, prostate, pancreatic cancer).",
      },
      {
        title: "Future generations",
        description:
          "Knowing the family variant allows guiding subsequent generations.",
      },
      {
        title: "Coordination with your physician",
        description:
          "The result can be integrated into clinical and mammographic surveillance.",
      },
    ],
    genesEyebrow: "Genes included",
    genesTitle: "Genes analyzed in this subpanel",
    genesDescription:
      "This subpanel evaluates selected genes related to hereditary predisposition based on cancer type and clinical indication.",
    genesCountLabel: "11 genes included",
    processEyebrow: "Sample and result process",
    processTitle: "From sample to follow-up plan",
    processSteps: [
      {
        title: "Initial guidance",
        description:
          "We review your reasons and history to confirm the relevance of the subpanel.",
      },
      {
        title: "Non-invasive sample collection",
        description: "Saliva or buccal swab — simple procedure.",
      },
      {
        title: "Focused NGS analysis",
        description:
          "Sequencing of genes related to hereditary breast and ovarian cancer.",
      },
      {
        title: "Clinical interpretation",
        description:
          "The report considers your personal and family history for a comprehensive reading.",
      },
      {
        title: "Plan with your physician",
        description:
          "Recommendations for surveillance, prevention, and family guidance.",
      },
    ],
    ctaTitle: "Is there breast or ovarian cancer in your family?",
    ctaSubtitle:
      "A focused genetic evaluation can provide key information for prevention and surveillance.",
    ctaPrimary: "Schedule consultation via WhatsApp",
    ctaSecondary: "View full panel (161 genes)",
  },
  subpanelCore: {
    subtitle:
      "An essential genetic evaluation to identify clinically relevant variants associated with hereditary cancer predisposition.",
    whatEyebrow: "What is a core panel?",
    whatTitle: "An essential selection of genes with clinical relevance",
    whatBody1:
      "A core panel groups genes with established clinical evidence in hereditary cancer predisposition. It is a more focused option than a broad panel, designed for initial evaluation or specific medical indications. The core panel",
    whatBodyBold: "does not replace",
    whatBody2:
      "the full 161-gene panel; it offers a directed approach when the clinical context justifies it.",
    whenEyebrow: "When is it appropriate?",
    whenTitle:
      "Situations where the core panel may be a good option",
    useCases: [
      {
        title: "Initial evaluation",
        description:
          "When seeking a first look at hereditary risk before considering a broader panel.",
      },
      {
        title: "Suggestive family history",
        description:
          "History pointing toward specific high- and moderate-penetrance genes.",
      },
      {
        title: "More focused option",
        description:
          "Patients requiring a directed evaluation under medical judgment.",
      },
      {
        title: "Preventive guidance",
        description:
          "Individuals interested in prevention, under professional guidance.",
      },
    ],
    fullPanelBadge: "Full panel",
    fullPanelTitle: "161 genes",
    fullPanelDesc:
      "GenoVision's broadest evaluation for hereditary cancer predisposition. Includes multiple syndromes and high- and moderate-penetrance genes.",
    fullPanelBenefits: [
      "Greater genetic coverage",
      "Useful in complex family history",
      "Broad view of hereditary variants",
    ],
    viewFullPanel: "View full panel",
    coreBadge: "Core panel",
    coreTitle: "Essential selection",
    coreDesc:
      "A focused group of genes with established clinical relevance. Designed as an initial evaluation or under specific medical indication.",
    coreBenefits: [
      "More focused coverage",
      "Directed initial evaluation",
      "Under medical judgment",
    ],
    limitationsEyebrow: "Limitations",
    limitationsTitle: "What to keep in mind",
    limitationsDescription:
      "Understanding the core panel's limitations helps make an informed decision with your physician.",
    limitations: [
      "Does not analyze all 161 genes included in the full panel.",
      "May not detect variants in genes outside the core panel.",
      "A negative result does not completely rule out hereditary predisposition.",
      "Variants of uncertain significance may require future reanalysis.",
      "Scope must be defined with your treating physician based on clinical context.",
    ],
    genesEyebrow: "Genes included",
    genesTitle: "Genes analyzed in this subpanel",
    genesDescription:
      "This subpanel evaluates selected genes related to hereditary predisposition based on cancer type and clinical indication.",
    genesCountLabel: "83 genes included",
    processEyebrow: "Sample and result process",
    processTitle: "From sample to follow-up plan",
    processSteps: [
      {
        title: "Initial guidance",
        description:
          "We help you understand the scope of the core panel and whether it fits your goals.",
      },
      { title: "Sample collection", description: "Saliva or buccal swab — non-invasive." },
      {
        title: "Focused NGS analysis",
        description: "Sequencing of the selected core panel genes.",
      },
      {
        title: "Clinical interpretation",
        description:
          "Report review considering your personal and family history.",
      },
      {
        title: "Plan with your physician",
        description:
          "Recommendations for integrating the result into your clinical follow-up.",
      },
    ],
    ctaTitle: "Looking for an initial evaluation?",
    ctaSubtitle:
      "Let's discuss whether the core panel or the full panel is the right option for your case.",
    ctaPrimary: "Chat on WhatsApp",
    ctaSecondary: "View full panel (161 genes)",
  },
  subpanelProstata: {
    subtitle:
      "Genetic evaluation focused on genes associated with hereditary predisposition to prostate cancer, especially useful when there is family history, early diagnosis, or aggressive disease.",
    whatEyebrow: "What does this subpanel evaluate?",
    whatTitle: "Genes with clinical relevance for prostate cancer",
    whatBody:
      "This subpanel evaluates genes associated with hereditary predisposition to prostate cancer, including variants in DNA repair genes. The information can guide surveillance, prevention, and family evaluation when applicable.",
    whoEyebrow: "Who should consider it?",
    whoTitle: "Situations that may guide the decision",
    candidates: [
      {
        title: "Prostate cancer in relatives",
        description:
          "Father, brothers, or other close relatives with prostate cancer.",
      },
      {
        title: "Early-onset diagnosis",
        description:
          "Cases diagnosed before ages 55–60 in the family or in the individual.",
      },
      {
        title: "Aggressive or metastatic disease",
        description:
          "Personal or family history of advanced or metastatic prostate cancer.",
      },
      {
        title: "Other related cancers",
        description:
          "Breast, ovarian, pancreatic, or prostate cancer in close relatives may indicate a hereditary component.",
      },
    ],
    warningEyebrow: "Prostate cancer in the family",
    warningTitle: "Signs that may indicate a hereditary component",
    warningDescription:
      "These factors may guide the conversation with your physician about the relevance of testing.",
    warningSigns: [
      "Prostate cancer diagnosed before ages 55–60",
      "Metastatic or high-risk disease",
      "Multiple relatives with prostate cancer",
      "Relatives with breast, ovarian, or pancreatic cancer",
      "Relatives with BRCA1/BRCA2 or other risk variants",
      "Ethnicities with documented higher prevalence under medical guidance",
    ],
    familyEyebrow: "Importance for family members",
    familyTitle: "Your result can also protect your family",
    familyDescription:
      "When a hereditary variant is identified, other family members can benefit from genetic guidance and preventive strategies.",
    familyImpact: [
      {
        title: "Sons and brothers",
        description:
          "They may benefit from genetic guidance and personalized surveillance.",
      },
      {
        title: "Female relatives",
        description:
          "Some variants also increase risk of breast, ovarian, or pancreatic cancer in female relatives.",
      },
      {
        title: "Future generations",
        description:
          "Knowing the family variant allows guiding subsequent generations.",
      },
      {
        title: "Coordination with your physician",
        description:
          "The result can be integrated into clinical and urological surveillance.",
      },
    ],
    genesEyebrow: "Genes included",
    genesTitle: "Genes analyzed in this subpanel",
    genesDescription:
      "This subpanel evaluates selected genes related to hereditary predisposition based on cancer type and clinical indication.",
    genesCountLabel: "17 genes included",
    processEyebrow: "Sample and result process",
    processTitle: "From sample to follow-up plan",
    processSteps: [
      {
        title: "Initial guidance",
        description:
          "We review your reasons and history to confirm the relevance of the subpanel.",
      },
      {
        title: "Non-invasive sample collection",
        description: "Saliva or buccal swab — simple procedure.",
      },
      {
        title: "Focused NGS analysis",
        description:
          "Sequencing of genes related to hereditary prostate cancer and associated syndromes.",
      },
      {
        title: "Clinical interpretation",
        description:
          "The report considers your personal and family history for a comprehensive reading.",
      },
      {
        title: "Plan with your physician",
        description:
          "Recommendations for surveillance, prevention, and family guidance.",
      },
    ],
    ctaTitle: "Is there prostate cancer in your family?",
    ctaSubtitle:
      "A focused genetic evaluation can provide key information for surveillance and prevention.",
    ctaPrimary: "Schedule consultation via WhatsApp",
    ctaSecondary: "View full panel (161 genes)",
  },
  products: {
    "panel-cancer-hereditario": {
      title: "Hereditary Cancer Panel",
      categoryLabel: "Hereditary cancer",
      description:
        "Analysis of genes associated with hereditary predisposition to breast, ovarian, colon, prostate, pancreatic, melanoma, and other hereditary syndromes.",
      ctaLabel: "View panel",
      badges: ["161 genes", "NGS", "Prevention", "Hereditary risk"],
    },
    "panel-cardio-pulmonar": {
      title: "Cardio-Pulmonary Panel",
      categoryLabel: "Cardiovascular health",
      description:
        "Genetic evaluation focused on hereditary cardiovascular and pulmonary conditions.",
      ctaLabel: "Request information",
      badges: ["NGS", "Cardiovascular"],
    },
    "panel-neurologico": {
      title: "Neurological Panel",
      categoryLabel: "Neurology",
      description:
        "Genetic analysis for selected hereditary and neurodegenerative neurological conditions.",
      ctaLabel: "Request information",
      badges: ["NGS", "Neurology"],
    },
    "panel-inmunologico": {
      title: "Immunological Panel",
      categoryLabel: "Immunology",
      description:
        "Evaluation of variants associated with primary immunodeficiencies and autoimmune/autoinflammatory disorders.",
      ctaLabel: "Request information",
      badges: ["NGS", "Immunology"],
    },
    "panel-diabetes": {
      title: "Diabetes Panel",
      categoryLabel: "Diabetes",
      description:
        "Genetic analysis focused on predisposition and monogenic forms related to diabetes.",
      ctaLabel: "Request information",
      badges: ["NGS", "Metabolism"],
    },
    "panel-oftalmologico": {
      title: "Ophthalmological Panel",
      categoryLabel: "Ophthalmology",
      description:
        "Genetic evaluation for hereditary eye disorders and retinopathies.",
      ctaLabel: "Request information",
      badges: ["NGS", "Ophthalmology"],
    },
    "panel-respiratorio": {
      title: "Respiratory Panel",
      categoryLabel: "Respiratory",
      description:
        "Analysis of variants associated with hereditary respiratory diseases or pulmonary predisposition.",
      ctaLabel: "Request information",
      badges: ["NGS", "Respiratory"],
    },
    "panel-autismo": {
      title: "Autism / Neurodevelopment Panel",
      categoryLabel: "Neurodevelopment",
      description:
        "Genetic analysis for neurodevelopmental conditions under medical guidance.",
      ctaLabel: "Request information",
      badges: ["NGS", "Neurodevelopment"],
    },
    "panel-farmacogenomica": {
      title: "Pharmacogenomics Panel",
      categoryLabel: "Pharmacogenomics",
      description:
        "Genetic evaluation to guide drug response and pharmacological metabolism.",
      ctaLabel: "Request information",
      badges: ["NGS", "Personalized medicine"],
    },
    "panel-tiroides": {
      title: "Thyroid Panel",
      categoryLabel: "Thyroid",
      description:
        "Genetic evaluation related to predisposition to selected thyroid disorders.",
      ctaLabel: "Request information",
      badges: ["NGS", "Endocrinology"],
    },
    "exoma-completo": {
      title: "Whole Exome Sequencing (WES)",
      categoryLabel: "Exome / Genome",
      description:
        "Analysis of coding regions of the genome for advanced clinical research under medical indication.",
      ctaLabel: "Request information",
      badges: ["WES", "Clinical research"],
    },
    "reporte-cardiometabolico": {
      title: "Cardiometabolic Report / PRS",
      categoryLabel: "Cardiovascular health",
      description:
        "Cardiometabolic genetic risk report for personalized prevention.",
      ctaLabel: "Request information",
      badges: ["PRS", "Prevention"],
    },
    "neuro-panel-wgs": {
      title: "Neuro Panel Whole Genome",
      categoryLabel: "Neurology",
      description:
        "Broad genomic analysis for complex neurological conditions under medical indication.",
      ctaLabel: "Request information",
      badges: ["WGS", "Neurology"],
    },
    "microbiota-intestinal": {
      title: "Gut Microbiome",
      categoryLabel: "Microbiome",
      description:
        "Analysis of the intestinal bacterial ecosystem to assess microbial diversity, dysbiosis, and guide nutritional and digestive health strategies.",
      ctaLabel: "View analysis",
      badges: ["16S Sequencing", "Pangea Lab", "Microbiome", "Digestive health"],
    },
  } as Record<string, { title: string; categoryLabel: string; description: string; ctaLabel: string; badges: string[] }>,
  productCategories: [
    { id: "all", label: "All" },
    { id: "cancer", label: "Hereditary cancer" },
    { id: "cardiovascular", label: "Cardiovascular health" },
    { id: "neurologia", label: "Neurology" },
    { id: "inmunologia", label: "Immunology" },
    { id: "diabetes", label: "Diabetes" },
    { id: "oftalmologia", label: "Ophthalmology" },
    { id: "farmacogenomica", label: "Pharmacogenomics" },
    { id: "tiroides", label: "Thyroid" },
    { id: "exoma", label: "Exome / Genome" },
    { id: "microbioma", label: "Microbiome" },
  ],
  microbiotaIntestinal: {
    heroBadge: "In collaboration with Pangea Laboratory",
    heroTitle: "Gut Microbiome",
    heroSubtitle:
      "Discover the bacterial ecosystem of your gut. Identify imbalances to improve your digestive, immune, and metabolic health.",
    heroBadges: ["16S Sequencing", "Pangea Lab", "Results approx. 21 days", "Home sample collection"],
    heroCtaPrimary: "Request information via WhatsApp",
    heroCtaSecondary: "View process",
    whatEyebrow: "What is this analysis?",
    whatTitle: "A map of your intestinal ecosystem",
    whatBody:
      "The Gut Microbiome analysis identifies and quantifies the bacteria present in your intestine from a stool sample. We use 16S rRNA gene sequencing, a reference technology in clinical microbiology, to obtain a detailed profile of your intestinal bacterial composition and detect dysbiosis patterns.",
    whatBody2:
      "The analysis is performed by Pangea Laboratory, a laboratory specialized in microbiome analysis, and the clinical interpretation is integrated by GenoVision in the context of the patient's health.",
    evaluatesEyebrow: "What does it evaluate?",
    evaluatesTitle: "Key dimensions of the microbiome",
    evaluates: [
      {
        title: "Microbial diversity (alpha and beta)",
        description:
          "Richness and diversity indices of bacterial species — key indicators of a healthy microbiome.",
      },
      {
        title: "Relative abundance by phylum and genus",
        description:
          "Proportion of major bacterial groups: Firmicutes, Bacteroidetes, Proteobacteria, and others.",
      },
      {
        title: "Dysbiosis detection",
        description:
          "Identification of imbalances in the bacterial community associated with digestive symptoms or inflammation.",
      },
      {
        title: "Beneficial and opportunistic bacteria",
        description:
          "Presence and abundance of protective genera (Lactobacillus, Bifidobacterium) and relevant opportunistic ones.",
      },
      {
        title: "Intestinal permeability indicators",
        description:
          "Bacterial patterns associated with intestinal barrier compromise.",
      },
      {
        title: "Personalized nutritional guidance",
        description:
          "The report includes recommendations based on the bacterial profile to support dietary interventions.",
      },
    ],
    whoEyebrow: "Who is it for?",
    whoTitle: "Ideal candidates for this analysis",
    whoDescription:
      "Gut microbiome analysis is especially useful for those with persistent digestive symptoms or looking to optimize their health through a preventive approach.",
    candidates: [
      {
        title: "Chronic digestive symptoms",
        description:
          "People with bloating, constipation, recurrent diarrhea, gas, or irritable bowel syndrome.",
      },
      {
        title: "Post-antibiotic follow-up",
        description:
          "Assessment of microbiome recovery after prolonged or frequent antibiotic treatments.",
      },
      {
        title: "Metabolic and inflammatory conditions",
        description:
          "Type 2 diabetes, obesity, autoimmune or inflammatory diseases with a possible intestinal component.",
      },
      {
        title: "Chronic fatigue and brain fog",
        description:
          "Systemic symptoms that may be associated with the gut-brain axis and microbiome alterations.",
      },
      {
        title: "Wellness optimization",
        description:
          "People seeking to personalize their diet and lifestyle based on their microbial profile.",
      },
      {
        title: "Oncology follow-up",
        description:
          "Patients in treatment or oncology surveillance where microbiome status may be clinically relevant.",
      },
    ],
    oncologyEyebrow: "Oncology context",
    oncologyTitle: "Microbiome and cancer: emerging evidence",
    oncologyBody:
      "Scientific research has identified associations between gut microbiome composition and the risk, progression, and treatment response in some cancers, particularly colorectal, hepatic, and lung. Evidence also suggests that the microbiome influences immunotherapy response.",
    oncologyBody2:
      "At GenoVision, we offer this analysis as a complement to clinical follow-up in oncology patients under medical indication, with the goal of identifying dysbiosis that may be addressed as part of the comprehensive care plan.",
    oncologyNote:
      "This analysis does not diagnose or rule out cancer. Its interpretation must always be made in the patient's clinical context by a healthcare professional.",
    processEyebrow: "How does it work?",
    processTitle: "A simple process from home",
    processSteps: [
      {
        title: "Initial guidance",
        description:
          "We discuss your case and confirm whether the analysis is appropriate for you.",
      },
      {
        title: "Collection kit delivery",
        description:
          "You receive a home sample collection kit. Collection is simple and comfortable at home.",
      },
      {
        title: "Sample shipment",
        description:
          "The sample is sent to Pangea Laboratory following the kit instructions.",
      },
      {
        title: "16S sequencing analysis",
        description:
          "Pangea Laboratory performs the microbiome analysis using high-resolution genomic sequencing technology.",
      },
      {
        title: "Report and interpretation",
        description:
          "GenoVision integrates the report with clinical context and guides you through understanding the results.",
      },
    ],
    physicianEyebrow: "For physicians",
    physicianTitle: "Clinical utility for healthcare professionals",
    physicianItems: [
      {
        title: "Guides dietary and probiotic interventions",
        description:
          "The microbial profile allows personalized evidence-based dietary and supplementation recommendations.",
      },
      {
        title: "Post-antibiotic monitoring",
        description:
          "Objective assessment of microbiome recovery following antibiotic therapy.",
      },
      {
        title: "Complement in oncology follow-up",
        description:
          "Potentially relevant microbial information for patients undergoing treatment or oncology surveillance.",
      },
      {
        title: "Structured clinical report",
        description:
          "Results in an interpreted format with diversity indices, phylum/genus profiles, and highlighted findings.",
      },
    ],
    limitationsEyebrow: "Limitations and scope",
    limitationsTitle: "What this analysis does not do",
    limitations: [
      "Does not detect hereditary genes or patient DNA variants.",
      "Does not diagnose or rule out digestive, infectious, or neoplastic diseases.",
      "16S sequencing does not identify to species level with the same precision as shotgun metagenomics.",
      "Results must be interpreted in clinical context by a healthcare professional.",
      "Associations between microbiome and disease represent correlations, not established causality.",
    ],
    limitationsNote:
      "This analysis is a clinical support tool. It does not replace medical evaluation or specific endoscopic or microbiological diagnosis.",
    ctaTitle: "Interested in knowing your microbiome?",
    ctaSubtitle:
      "Contact us via WhatsApp and we will guide you on whether this analysis is right for you or your patient.",
    ctaPrimary: "Request information",
    ctaSecondary: "View full catalog",
    partnerNote: "Analysis performed by",
    partnerName: "Pangea Laboratory",
    partnerDescription:
      "A laboratory specialized in microbiome analysis using high-resolution genomic sequencing technology.",
    whatsappMessage:
      "Hello GenoVision, I'm interested in information about the Gut Microbiome analysis.",
  },
  subpanelData: {
    "colorrectal-poliposis": {
      title: "Hereditary Colorectal Cancer and Polyposis",
      shortTitle: "Colorectal & Polyposis Panel",
      badge: "Colon / Polyposis",
      description:
        "Focused on genes associated with hereditary colorectal cancer, Lynch syndrome, familial adenomatous polyposis, and other hereditary gastrointestinal syndromes.",
      indications: [
        "Colon cancer in the family",
        "Diagnosis before age 50",
        "Multiple polyps",
        "Family history of colon, endometrial, ovarian, gastric, or pancreatic cancer",
      ],
      ctaLabel: "View subpanel",
      enfoque: "Colon, Lynch, polyposis and hereditary gastrointestinal",
      mejorPara: "Colon or polyp history",
      nivel: "Focused",
    },
    "mama-hereditario": {
      title: "Hereditary Breast and Ovarian Cancer",
      shortTitle: "Hereditary Breast & Ovarian Cancer Panel",
      badge: "Breast / Ovarian",
      description:
        "Focused on genes related to hereditary predisposition to breast cancer, ovarian cancer, and associated familial syndromes.",
      indications: [
        "Early-onset breast cancer",
        "Bilateral breast cancer",
        "Ovarian cancer in the family",
        "Relatives with BRCA1/BRCA2 or other risk gene variants",
      ],
      ctaLabel: "View subpanel",
      enfoque: "Breast, ovarian and related syndromes",
      mejorPara: "Breast or ovarian history",
      nivel: "Focused",
    },
    core: {
      title: "Core Hereditary Cancer Panel",
      shortTitle: "Core Panel",
      badge: "Core",
      description:
        "Essential selection of clinically relevant genes for initial evaluation of hereditary cancer predisposition.",
      indications: [
        "Initial hereditary risk evaluation",
        "Suggestive family history",
        "Patients requiring a more focused option",
        "Preventive medical guidance",
      ],
      ctaLabel: "View subpanel",
      enfoque: "Essential hereditary risk genes",
      mejorPara: "Initial evaluation or under medical guidance",
      nivel: "Basic / focused",
    },
    "prostata-hereditario": {
      title: "Hereditary Prostate Cancer",
      shortTitle: "Hereditary Prostate Cancer Panel",
      badge: "Prostate",
      description:
        "Focused on genes associated with hereditary predisposition to prostate cancer, especially when there is family history or early/aggressive diagnosis.",
      indications: [
        "Prostate cancer in relatives",
        "Early-onset diagnosis",
        "Aggressive or metastatic disease in the family",
        "Family history of breast, ovarian, pancreatic, or prostate cancer",
      ],
      ctaLabel: "View subpanel",
      enfoque: "Prostate and related syndromes",
      mejorPara: "Aggressive or early prostate history",
      nivel: "Focused",
    },
  } as Record<string, { title: string; shortTitle: string; badge: string; description: string; indications: string[]; ctaLabel: string; enfoque: string; mejorPara: string; nivel: string }>,
};

export const translations: Record<Language, typeof es> = { es, en };
