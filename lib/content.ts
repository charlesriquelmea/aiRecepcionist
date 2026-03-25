export type Lang = "en" | "es";

export type PricingPlan = {
  nameEn: string;
  nameEs: string;
  price: string;
  originalPrice?: string;
  badgeEn: string | null;
  badgeEs: string | null;
  featuresEn: string[];
  featuresEs: string[];
  ctaEn: string;
  ctaEs: string;
  featured: boolean;
  bestRoi: boolean;
};

export const content = {
  nav: {
    logo: "by Protolylat",
    ctaEn: "Book a Call",
    ctaEs: "Agendar Llamada",
  },
  hero: {
    headlineEn: "Your MedSpa is losing patients right now.",
    headlineEs: "Tu MedSpa está perdiendo pacientes ahora mismo.",
    subheadEn:
      "Every unanswered message after hours is a booking your competitor just stole. We install an AI agent that captures, qualifies, and books every lead in under 30 seconds — 24/7, bilingual, HIPAA-compliant.",
    subheadEs:
      "Cada mensaje sin respuesta fuera de horario es una cita que se llevó tu competencia. Instalamos un agente IA que captura, califica y agenda cada lead en menos de 30 segundos — 24/7, bilingüe, con cumplimiento HIPAA.",
    phrasesEn: [
      "Books appointments while you sleep.",
      "Replies in under 30 seconds.",
      "Speaks English & Spanish fluently.",
      "Never calls in sick.",
    ],
    phrasesEs: [
      "Agenda citas mientras duermes.",
      "Responde en menos de 30 segundos.",
      "Habla inglés y español perfectamente.",
      "Nunca falta al trabajo.",
    ],
    ctaEn: "Get Your AI Agent",
    ctaEs: "Obtener Mi Agente IA",
    trustEn: ["HIPAA Compliant", "Bilingual EN/ES", "Setup in 5–7 days", "No long-term contract"],
    trustEs: ["Cumple HIPAA", "Bilingüe EN/ES", "Instalación en 5–7 días", "Sin contrato largo"],
    typewriterEn: {

    },
    typewriterEs:{
      
    }
  },
  pain: {
    headlineEn: "Sound familiar?",
    headlineEs: "¿Te suena familiar?",
    itemsEn: [
      {
        title: "Leads ghosted after hours",
        body: "Your front desk leaves at 6pm. Inquiries at 9pm go cold. The patient books someone else by morning.",
      },
      {
        title: "No-shows draining revenue",
        body: "A single no-show costs $200–$600. Multiply by 4–8/week and you're bleeding $4,000–8,000/mo silently.",
      },
      {
        title: "Staff burned out on repeat questions",
        body: '"What\'s the price of Botox?" answered 40 times a week by staff who should focus on in-clinic patients.',
      },
      {
        title: "Leads lost in DMs and voicemails",
        body: "Instagram DMs, missed calls, web forms — no unified inbox means leads fall through every crack.",
      },
    ],
    itemsEs: [
      {
        title: "Leads ignorados fuera de horario",
        body: "Tu recepción cierra a las 6pm. Consultas a las 9pm se enfrían. El paciente agenda con otro antes del amanecer.",
      },
      {
        title: "No-shows drenando ingresos",
        body: "Un solo no-show cuesta $200–$600. Multiplica por 4–8/semana y pierdes $4,000–8,000/mes en silencio.",
      },
      {
        title: "Staff agotado respondiendo lo mismo",
        body: '"¿Cuánto cuesta el Botox?" respondido 40 veces por semana por alguien que debería atender pacientes.',
      },
      {
        title: "Leads perdidos en DMs y mensajes",
        body: "DMs de Instagram, llamadas perdidas, formularios web — sin bandeja unificada, los leads caen por cada grieta.",
      },
    ],
  },
  stats: {
    statsEn: [
      { value: "78%", labelEn: "of patients book the first responder", labelEs: "de pacientes agendan con quien responde primero" },
      { value: "<30s", labelEn: "average agent response time", labelEs: "tiempo de respuesta promedio del agente" },
      { value: "$697", labelEn: "monthly retainer vs $3,200 receptionist", labelEs: "retainer mensual vs $3,200 recepcionista" },
      { value: "24/7", labelEn: "always on, never sick, never late", labelEs: "siempre activo, nunca enfermo, nunca tarde" },
    ],
  },
  pricing: {
    headlineEn: "Simple, transparent pricing.",
    headlineEs: "Precios simples y transparentes.",
    plans: [
      {
        nameEn: "Quick Win",
        nameEs: "Quick Win",
        price: "$1,890",
        originalPrice: "$1,500",
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
        originalPrice: undefined,
        badgeEn: "MOST POPULAR",
        badgeEs: "MÁS POPULAR",
        featuresEn: [
          "Full AI Receptionist Agent",
          "Multi-channel: Web Chat + WhatsApp + IG",
          "RAG clinical knowledge base (Pinecone Enterprise)",
          "CRM API integration",
          "Stripe deposit collection (Stripe Health)",
          "HIPAA: BAA + AES-256 + Zero-Retention",
          "Voice Follow-Up: 10 outbound calls/day max (5 min each)",
          "Extra calls or minutes: separate cost",
          "No-show prevention: reminders at 24h + 2h before",
          "WhatsApp Meta Business: separate cost",
          "Onboarding: 5–7 business days (managed by you)",
        ],
        featuresEs: [
          "Agente Recepcionista IA completo",
          "Multi-canal: Chat Web + WhatsApp + IG",
          "RAG base de conocimiento clínico (Pinecone Enterprise)",
          "Integración CRM API",
          "Cobro de depósito automático (Stripe Health)",
          "HIPAA: BAA + AES-256 + Zero-Retention",
          "Seguimiento por Voz: 10 llamadas salientes/día máx (5 min c/u)",
          "Llamadas o minutos extra: costo por separado",
          "Prevención de no-shows: recordatorios 24h + 2h antes",
          "WhatsApp Meta Business: costo por separado",
          "Incorporación: 5–7 días hábiles (gestionado por ti)",
        ],
        ctaEn: "Get The Engine",
        ctaEs: "Obtener El Motor",
        featured: true,
        bestRoi: false,
      },
      {
        nameEn: "Innovation Sprint",
        nameEs: "Innovation Sprint",
        price: "$4,500",
        originalPrice: "$6,900",
        badgeEn: "BEST ROI",
        badgeEs: "MEJOR ROI",
        featuresEn: [
          "Everything in The Engine",
          "Custom AI persona & brand voice",
          "Advanced analytics dashboard",
          "Reactivation campaign for dormant patients",
          "Priority support & monthly optimization",
          "Setup: 7–10 business days",
        ],
        featuresEs: [
          "Todo lo de El Motor",
          "Persona IA personalizada y voz de marca",
          "Dashboard de analíticas avanzadas",
          "Campaña de reactivación de pacientes inactivos",
          "Soporte prioritario y optimización mensual",
          "Configuración: 7–10 días hábiles",
        ],
        ctaEn: "Start Sprint",
        ctaEs: "Iniciar Sprint",
        featured: false,
        bestRoi: true,
      },
    ] as PricingPlan[],
  },
  timeline: {
    headlineEn: "How it works",
    headlineEs: "Cómo funciona",
    steps: [
      { day: "Day 1", titleEn: "Discovery Call", titleEs: "Llamada de Descubrimiento", bodyEn: "We map your services, pricing, booking flow, and brand voice.", bodyEs: "Mapeamos tus servicios, precios, flujo de agendamiento y voz de marca." },
      { day: "Days 2–3", titleEn: "Build & Train", titleEs: "Construcción y Entrenamiento", bodyEn: "We build the agent, train it on your clinical knowledge base, and wire all channels.", bodyEs: "Construimos el agente, lo entrenamos con tu base clínica y conectamos todos los canales." },
      { day: "Days 4–5", titleEn: "Test & QA", titleEs: "Pruebas y Control de Calidad", bodyEn: "You test every scenario. We fix until satisfied. Zero surprises on launch.", bodyEs: "Pruebas cada escenario. Corregimos hasta que estés satisfecho. Sin sorpresas en el lanzamiento." },
      { day: "Day 6–7", titleEn: "Go Live", titleEs: "Lanzamiento", bodyEn: "Agent goes live. We monitor the first 48h and hand you the keys.", bodyEs: "El agente sale en vivo. Monitoreamos las primeras 48h y te entregamos el control." },
    ],
  },
  guarantee: {
    headlineEn: "30-Day Guarantee",
    headlineEs: "Garantía de 30 días",
    bodyEn: "If we don't book 15 effective appointments, we refund up to 50% of the setup fee — with the commitment that you drive organic or paid traffic to the agent or website.",
    bodyEs: "Si no efectivizamos 15 citas, devolvemos hasta el 50% del setup con el compromiso que tú debes llevarle tráfico orgánico o pagado al agente o website.",
    disclaimerEn: "Disclaimer: if you don't drive traffic, we cannot guarantee results.",
    disclaimerEs: "Disclaimer: si no le llevas tráfico no podemos asegurar la garantia.",
  },
  faq: {
    headlineEn: "Frequently Asked Questions",
    headlineEs: "Preguntas Frecuentes",
    items: [
      {
        questionEn: "Is this really HIPAA compliant?",
        questionEs: "¿Realmente cumple con HIPAA?",
        answerEn: "Yes. Every deployment includes a signed BAA, AES-256 encryption at rest and in transit, and zero patient data retention on our infrastructure.",
        answerEs: "Sí. Cada implementación incluye un BAA firmado, cifrado AES-256 en reposo y en tránsito, y retención cero de datos de pacientes en nuestra infraestructura.",
      },
      {
        questionEn: "What channels does the agent cover?",
        questionEs: "¿Qué canales cubre el agente?",
        answerEn: "The Engine covers Web Chat, WhatsApp (Meta Business API), and Instagram DMs. Quick Win covers Web Chat only.",
        answerEs: "El Motor cubre Chat Web, WhatsApp (API de Meta Business) e Instagram DMs. Quick Win solo cubre Chat Web.",
      },
      {
        questionEn: "Do I need to manage the agent?",
        questionEs: "¿Tengo que gestionar el agente?",
        answerEn: "Onboarding is managed by our team. After go-live you only see results — new bookings in your calendar.",
        answerEs: "El onboarding es gestionado por nuestro equipo. Después del lanzamiento solo ves resultados — nuevas citas en tu calendario.",
      },
      {
        questionEn: "What if a patient asks something the agent can't handle?",
        questionEs: "¿Qué pasa si un paciente pregunta algo que el agente no puede manejar?",
        answerEn: "The agent has a built-in escalation tool. If confidence drops below threshold it transfers the conversation to a human in real time.",
        answerEs: "El agente tiene una herramienta de escalada integrada. Si la confianza baja del umbral, transfiere la conversación a un humano en tiempo real.",
      },
      {
        questionEn: "What is the Voice Follow-Up limit?",
        questionEs: "¿Cuál es el límite del Seguimiento por Voz?",
        answerEn: "The Engine includes 10 outbound calls per day, max 5 minutes each. Additional minutes or calls are billed separately.",
        answerEs: "El Motor incluye 10 llamadas salientes por día, máximo 5 minutos cada una. Minutos o llamadas adicionales se cobran por separado.",
      },
    ],
  },
  finalCta: {
    headlineEn: "1 of 6 technical spots this month.",
    headlineEs: "1 de 6 cupos técnicos este mes.",
    subEn: "We limit onboardings to guarantee quality. Once all spots are taken, the waitlist opens.",
    subEs: "Limitamos los onboardings para garantizar calidad. Una vez tomados los cupos, abre la lista de espera.",
    ctaEn: "Claim Your Spot Now",
    ctaEs: "Reservar Mi Cupo Ahora",
    trustEn: ["HIPAA Compliant", "Bilingual EN/ES", "Setup in 5–7 days", "No long-term contract"],
    trustEs: ["Cumple HIPAA", "Bilingüe EN/ES", "Instalación en 5–7 días", "Sin contrato largo"],
  },
  footer: {
    taglineEn: "We install the system that closes while you sleep.",
    taglineEs: "Instalamos el sistema que cierra mientras duermes.",
    copyrightEn: "© 2026 Protolylat. All rights reserved.",
    copyrightEs: "© 2026 Protolylat. Todos los derechos reservados.",
  },
  form: {
    stepsEn: [
      { day: "Day 1", titleEn: "Discovery Call", titleEs: "Llamada de Descubrimiento", bodyEn: "We map your services, pricing, booking flow, and brand voice.", bodyEs: "Mapeamos tus servicios, precios, flujo de agendamiento y voz de marca." },
      { day: "Days 2–3", titleEn: "Build & Train", titleEs: "Construcción y Entrenamiento", bodyEn: "We build the agent, train it on your clinical knowledge base, and wire all channels.", bodyEs: "Construimos el agente, lo entrenamos con tu base clínica y conectamos todos los canales." },
      { day: "Days 4–5", titleEn: "Test & QA", titleEs: "Pruebas y Control de Calidad", bodyEn: "You test every scenario. We fix until satisfied. Zero surprises on launch.", bodyEs: "Pruebas cada escenario. Corregimos hasta que estés satisfecho. Sin sorpresas en el lanzamiento." },
      { day: "Day 6–7", titleEn: "Go Live", titleEs: "Lanzamiento", bodyEn: "Agent goes live. We monitor the first 48h and hand you the keys.", bodyEs: "El agente sale en vivo. Monitoreamos las primeras 48h y te entregamos el control." },
    ],

    stepsEs: [
      { day: "Day 1", titleEn: "Discovery Call", titleEs: "Llamada de Descubrimiento", bodyEn: "We map your services, pricing, booking flow, and brand voice.", bodyEs: "Mapeamos tus servicios, precios, flujo de agendamiento y voz de marca." },
      { day: "Days 2–3", titleEn: "Build & Train", titleEs: "Construcción y Entrenamiento", bodyEn: "We build the agent, train it on your clinical knowledge base, and wire all channels.", bodyEs: "Construimos el agente, lo entrenamos con tu base clínica y conectamos todos los canales." },
      { day: "Days 4–5", titleEn: "Test & QA", titleEs: "Pruebas y Control de Calidad", bodyEn: "You test every scenario. We fix until satisfied. Zero surprises on launch.", bodyEs: "Pruebas cada escenario. Corregimos hasta que estés satisfecho. Sin sorpresas en el lanzamiento." },
      { day: "Day 6–7", titleEn: "Go Live", titleEs: "Lanzamiento", bodyEn: "Agent goes live. We monitor the first 48h and hand you the keys.", bodyEs: "El agente sale en vivo. Monitoreamos las primeras 48h y te entregamos el control." },
    ],
  }
};
