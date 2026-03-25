export type Lang = "en" | "es";

export const content = {
  nav: {
    logo: "PROTOLYLAT",
    spotsEn: "Only 3 spots",
    spotsEs: "Solo 3 spots",
    ctaEn: "Book Demo",
    ctaEs: "Ver Demo",
  },
  hero: {
    eyebrowEn: "MEDSPAS · NYC · AI IMPLEMENTATION · 3 SPOTS/MO",
    eyebrowEs: "MEDSPAS · NYC · IMPLEMENTACIÓN IA · 3 SPOTS/MES",
    typewriterEn: [
      "Your MedSpa loses $8,400/mo.",
      "Not from lack of clients.",
      "From lack of response.",
    ],
    typewriterEs: [
      "Tu MedSpa pierde $8,400/mes.",
      "No por falta de clientes.",
      "Por falta de respuesta.",
    ],
    subheadlineEn:
      "We install AI agent systems that capture, qualify, and book every lead in under 60 seconds — while your team focuses on what actually closes money.",
    subheadlineEs:
      "Instalamos sistemas de agentes IA que capturan, califican y agendan cada lead en menos de 60 segundos — mientras tu equipo se enfoca en lo que realmente cierra dinero.",
    cta1En: "Find My Revenue Leak",
    cta1Es: "Ver Mi Fuga de Revenue",
    cta2En: "See it live ↓",
    cta2Es: "Ver en vivo ↓",
    trustEn: [
      "No long contracts",
      "No IT access needed",
      "Results in 30 days or full refund",
    ],
    trustEs: [
      "Sin contratos largos",
      "Sin acceso a IT",
      "Resultados en 30 días o reembolso total",
    ],
  },
  pain: {
    headlineEn: "Sound familiar?",
    headlineEs: "¿Te suena familiar?",
    pointsEn: [
      "Your team can't respond to leads after 6 PM",
      "Website forms get answered when there's time",
      "A prospect messaged on Instagram 3 days ago — nobody saw it",
      "You know you're losing clients but don't know exactly how many",
      "You hired more staff and the problem is still the same",
    ],
    pointsEs: [
      "Tu equipo no puede responder leads después de las 6 PM",
      "Los formularios del sitio se responden cuando hay tiempo",
      "Un prospecto escribió por Instagram hace 3 días — nadie lo vio",
      "Sabes que estás perdiendo clientes pero no sabes cuántos exactamente",
      "Contrataste más personal y el problema sigue siendo el mismo",
    ],
    closingEn: "The problem isn't your team. It's the architecture.",
    closingEs: "El problema no es tu equipo. Es la arquitectura.",
  },
  stats: {
    headlineEn: "The math nobody wants to show you",
    headlineEs: "La matemática que nadie te quiere mostrar",
    statsEn: [
      { value: "9%", labelEn: "Calls answered during business hours", labelEs: "Llamadas respondidas en horario de oficina" },
      { value: "0.1%", labelEn: "Leads contacted in the first 5 minutes", labelEs: "Leads contactados en los primeros 5 minutos" },
      { value: "21x", labelEn: "More likely to buy if contacted within 5 min", labelEs: "Más probabilidad de compra si se contacta en 5 min" },
    ],
    withoutEn: "WITHOUT SYSTEM",
    withoutEs: "SIN SISTEMA",
    withEn: "WITH SYSTEM",
    withEs: "CON SISTEMA",
    withoutDetailEn: "80 leads × 12% = 9 clients = $3,150/mo",
    withoutDetailEs: "80 leads × 12% = 9 clientes = $3,150/mes",
    withDetailEn: "80 leads × 40% = 32 clients = $11,200/mo",
    withDetailEs: "80 leads × 40% = 32 clientes = $11,200/mes",
    differenceEn: "Difference: +$7,840/mo · System cost: $5,000 one-time · Payback: 19 days",
    differenceEs: "Diferencia: +$7,840/mes · Costo del sistema: $5,000 único pago · Retorno: 19 días",
  },
  pricing: {
    headlineEn: "An offer designed so that saying 'no' is the irrational choice",
    headlineEs: "Una oferta diseñada para que decir 'no' sea la opción irracional",
    plans: [
      {
        nameEn: "Quick Win",
        nameEs: "Quick Win",
        price: "$1,890",
        badgeEn: null,
        badgeEs: null,
        featuresEn: [
          "1 Lead Response Agent",
          "Auto-reply in <30s",
          "Web Chat",
          "Lead by email only",
          "Setup: 7 days",
        ],
        featuresEs: [
          "1 Agente de Respuesta de Leads",
          "Respuesta automática en <30s",
          "Web Chat",
          "Lead solo por email",
          "Configuración: 7 días",
        ],
        ctaEn: "Get Started",
        ctaEs: "Comenzar",
        featured: false,
        bestRoi: false,
      },
      {
        nameEn: "The Engine",
        nameEs: "El Motor",
        price: "$3,000",
        badgeEn: "MOST POPULAR",
        badgeEs: "MÁS POPULAR",
        featuresEn: [
          "Lead Capture Agent",
          "Voice Follow-Up Agent — 10 outbound calls/day max (5 min each)",
          "Extra minutes or calls: separate cost",
          "Multi-channel: Web Chat, WhatsApp + IG",
          "CRM Integration",
          "Setup: 4 days",
        ],
        featuresEs: [
          "Agente de Captura de Leads",
          "Agente de Seguimiento por Voz — 10 llamadas salientes/día máx (5 min c/u)",
          "Más minutos o llamadas: costo por separado",
          "Multi-canal: Chat Web, WhatsApp + IG",
          "Integración CRM",
          "Configuración: 4 días",
        ],
        ctaEn: "Choose The Engine",
        ctaEs: "Elegir El Motor",
        featured: true,
        bestRoi: false,
      },
      {
        nameEn: "Innovation Sprint",
        nameEs: "Innovation Sprint",
        price: "$5,000",
        originalPrice: "$6,900",
        badgeEn: "BEST ROI",
        badgeEs: "MEJOR ROI",
        featuresEn: [
          "3 fully integrated agents",
          "Real-time ROI Dashboard",
          "Team training (2 hrs)",
          "Setup: 5 days",
          "BONUS: Revenue Leak Audit ($800)",
          "BONUS: CRM Connect ($600)",
          "BONUS: 30-Day ROI War Room ($500)",
        ],
        featuresEs: [
          "3 agentes totalmente integrados",
          "Dashboard de ROI en tiempo real",
          "Entrenamiento del equipo (2 hrs)",
          "Configuración: 5 días",
          "BONO: Auditoría de Fuga de Revenue ($800)",
          "BONO: CRM Connect ($600)",
          "BONO: ROI War Room 30 días ($500)",
        ],
        ctaEn: "Reserve My Spot",
        ctaEs: "Reservar Mi Spot",
        featured: false,
        bestRoi: true,
      },
    ],
  },
  timeline: {
    headlineEn: "From zero to live in 5 days",
    headlineEs: "De cero a operativo en 5 días",
    stepsEn: [
      { day: "Day 1", titleEn: "Revenue Leak Audit", titleEs: "Auditoría de Fuga de Revenue" },
      { day: "Days 2–3", titleEn: "Architecture & Setup", titleEs: "Arquitectura y Configuración" },
      { day: "Day 4", titleEn: "Testing & Calibration", titleEs: "Pruebas y Calibración" },
      { day: "Day 5", titleEn: "Go Live 🚀", titleEs: "Lanzamiento 🚀" },
      { day: "Days 6–30", titleEn: "ROI War Room", titleEs: "ROI War Room" },
    ],
  },
  guarantee: {
    headlineEn: "The risk is 100% ours. Not yours.",
    headlineEs: "El riesgo es 100% nuestro. No tuyo.",
    bodyEn:
      "If you don't see measurable results in the first 30 days — more leads captured, faster response times, more booked appointments — we refund every dollar. No questions asked. No fine print. No risk on your side.",
    bodyEs:
      "Si no ves resultados medibles en los primeros 30 días — más leads capturados, tiempos de respuesta más rápidos, más citas agendadas — te devolvemos cada centavo. Sin preguntas. Sin letra pequeña. Sin riesgo de tu lado.",
    sealEn: "30-Day Total Guarantee · Zero Risk · Money Back",
    sealEs: "Garantía Total 30 Días · Riesgo Cero · Dinero de Vuelta",
    ctaEn: "I want zero risk →",
    ctaEs: "Quiero el riesgo cero →",
  },
  form: {
    steps: [
      {
        type: "welcome",
        headlineEn: "Let's find your revenue leak",
        headlineEs: "Encontremos tu fuga de revenue",
        subtitleEn: "Answer 6 quick questions. We'll show you exactly where you're losing money.",
        subtitleEs: "Responde 6 preguntas rápidas. Te mostramos exactamente dónde estás perdiendo dinero.",
        ctaEn: "Start Now →",
        ctaEs: "Empezar Ahora →",
      },
      {
        type: "select",
        questionEn: "What type of business?",
        questionEs: "¿Qué tipo de negocio?",
        options: [
          { labelEn: "MedSpa", labelEs: "MedSpa" },
          { labelEn: "Trucking", labelEs: "Transporte" },
          { labelEn: "Legal", labelEs: "Legal" },
          { labelEn: "Other", labelEs: "Otro" },
        ],
      },
      {
        type: "select",
        questionEn: "How many leads per month?",
        questionEs: "¿Cuántos leads al mes?",
        options: [
          { labelEn: "< 30", labelEs: "< 30" },
          { labelEn: "30–80", labelEs: "30–80" },
          { labelEn: "80–200", labelEs: "80–200" },
          { labelEn: "200+", labelEs: "200+" },
        ],
      },
      {
        type: "multi-select",
        questionEn: "What's your main challenge?",
        questionEs: "¿Cuál es tu principal reto?",
        options: [
          { labelEn: "Response speed", labelEs: "Velocidad de respuesta" },
          { labelEn: "Lead tracking", labelEs: "Seguimiento de leads" },
          { labelEn: "Team overload", labelEs: "Equipo sobrecargado" },
          { labelEn: "Missed after-hours", labelEs: "Perdidos fuera de horario" },
        ],
      },
      {
        type: "text",
        questionEn: "What's your name?",
        questionEs: "¿Cómo te llamás?",
        placeholderEn: "Your full name",
        placeholderEs: "Tu nombre completo",
      },
      {
        type: "tel",
        questionEn: "Best number to WhatsApp you?",
        questionEs: "¿Tu WhatsApp?",
        placeholderEn: "+1 (555) 000-0000",
        placeholderEs: "+1 (555) 000-0000",
      },
      {
        type: "email",
        questionEn: "Your email",
        questionEs: "Tu email",
        placeholderEn: "you@yourmedspa.com",
        placeholderEs: "tu@tumedspa.com",
      },
      {
        type: "results",
        headlineEn: "Your revenue leak analysis is ready.",
        headlineEs: "Tu análisis de fuga de revenue está listo.",
        subtitleEn:
          "Based on your answers, you're likely leaving significant money on the table every month. Let's fix that together.",
        subtitleEs:
          "Basado en tus respuestas, probablemente estás dejando dinero significativo sobre la mesa cada mes. Solucionémoslo juntos.",
        ctaEn: "Book Your Audit Call",
        ctaEs: "Reservar Mi Llamada de Auditoría",
      },
    ],
  },
  faq: {
    headlineEn: "Frequently Asked Questions",
    headlineEs: "Preguntas Frecuentes",
    items: [
      {
        questionEn: "Do I need to involve IT or go through Purchasing?",
        questionEs: "¿Necesito hablar con IT o pasar por Compras?",
        answerEn:
          "No. Our systems connect via API and webhook integrations that require zero IT involvement. We handle everything from setup to deployment. You just need access to your existing accounts (WhatsApp Business, Instagram, email).",
        answerEs:
          "No. Nuestros sistemas se conectan via API e integraciones webhook que no requieren intervención de IT. Nos encargamos de todo, desde la configuración hasta el despliegue. Solo necesitas acceso a tus cuentas existentes (WhatsApp Business, Instagram, email).",
      },
      {
        questionEn: "What if the AI breaks something that already works?",
        questionEs: "¿Qué pasa si la IA rompe algo que ya funciona?",
        answerEn:
          "Every implementation runs parallel to your existing workflow first. We never touch what's working — we add intelligence on top. If anything doesn't perform as expected, we roll back within hours.",
        answerEs:
          "Cada implementación corre en paralelo a tu flujo de trabajo existente primero. Nunca tocamos lo que funciona — agregamos inteligencia encima. Si algo no funciona como se espera, hacemos rollback en horas.",
      },
      {
        questionEn: "How soon do I see real results?",
        questionEs: "¿En cuánto tiempo veo resultados reales?",
        answerEn:
          "Most clients see their first AI-captured and booked lead within 48 hours of go-live. Full ROI analysis is provided at day 30. Our average client sees a 3.5x return in the first month.",
        answerEs:
          "La mayoría de los clientes ven su primer lead capturado y agendado por IA dentro de las 48 horas del lanzamiento. El análisis completo de ROI se entrega al día 30. Nuestro cliente promedio ve un retorno de 3.5x en el primer mes.",
      },
      {
        questionEn: "What businesses does this work best for?",
        questionEs: "¿Para qué negocios funciona mejor?",
        answerEn:
          "Any service business receiving inbound leads: MedSpas, aesthetic clinics, dental practices, law firms, and logistics companies. The higher the value per client, the faster the payback.",
        answerEs:
          "Cualquier negocio de servicios que recibe leads entrantes: MedSpas, clínicas estéticas, consultorios dentales, despachos legales y empresas de logística. A mayor valor por cliente, más rápido el retorno.",
      },
      {
        questionEn: "What if I want to cancel?",
        questionEs: "¿Qué pasa si quiero cancelar?",
        answerEn:
          "There are no long-term contracts. If you're not satisfied within the first 30 days, we refund your investment completely. After that, there are no cancellation fees — ever.",
        answerEs:
          "No hay contratos a largo plazo. Si no estás satisfecho dentro de los primeros 30 días, te reembolsamos tu inversión completamente. Después de eso, no hay cargos de cancelación — nunca.",
      },
    ],
  },
  finalCta: {
    headlineEn: "Every month you wait,",
    headlineEs: "Cada mes que esperas,",
    subheadlineEn: "is another month gifting clients to your competition.",
    subheadlineEs: "es otro mes regalándole clientes a tu competencia.",
    ctaEn: "Reserve My Spot",
    ctaEs: "Reservar Mi Spot",
    microcopyEn:
      "No commitment until we confirm your business qualifies. Response within 2 hours.",
    microcopyEs:
      "Sin compromiso hasta que confirmemos que tu negocio califica. Respuesta en 2 horas.",
    trustEn: ["Secure Payment", "30-Day Guarantee", "5-Day Setup"],
    trustEs: ["Pago Seguro", "Garantía 30 Días", "Configuración 5 Días"],
    urgencyEn: "ONLY 3 SPOTS THIS MONTH",
    urgencyEs: "SOLO 3 SPOTS ESTE MES",
  },
  footer: {
    taglineEn: "We don't sell AI. We install the system that closes while you sleep.",
    taglineEs: "No vendemos IA. Instalamos el sistema que cierra mientras duermes.",
    copyrightEn: "© 2026 Protolylat. All rights reserved.",
    copyrightEs: "© 2026 Protolylat. Todos los derechos reservados.",
  },
};
