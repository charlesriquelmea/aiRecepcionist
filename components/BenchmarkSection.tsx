"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { type Lang } from "@/lib/content";
import { X, Check, TrendingDown, Users, Lock } from "lucide-react";

// Savings mini-component for the competitive section
/* function SavingsCallout({ isEn }: { isEn: boolean }) {
  const receptionist = 3200;
  const retainer = 697;
  const saving = receptionist - retainer;
  const pct = Math.round((saving / receptionist) * 100);
  return (
    <div className="mt-3 rounded-xl bg-[rgba(16,185,129,0.06)] border border-[rgba(16,185,129,0.2)] p-3 flex items-center justify-between gap-3">
      <div className="flex flex-col gap-0.5">
        <span className="font-sans text-[10px] uppercase tracking-widest text-[#6B6B7A]">
          {isEn ? "NJ Bilingual Receptionist" : "Recepcionista bilingüe NJ"}
        </span>
        <span className="font-sans text-sm font-bold text-[#6B6B7A] line-through">${receptionist.toLocaleString()}/mo</span>
      </div>
      <div className="text-center">
        <TrendingDown className="w-4 h-4 text-emerald-400 mx-auto" />
        <span className="font-sans text-[9px] text-[#6B6B7A]">{pct}% less</span>
      </div>
      <div className="flex flex-col gap-0.5 items-end">
        <span className="font-sans text-[10px] uppercase tracking-widest text-emerald-400">
          {isEn ? "Our retainer" : "Nuestro retainer"}
        </span>
        <span className="font-sans text-sm font-bold text-emerald-400">${retainer}/mo</span>
      </div>
    </div>
  );
} */

function SavingsCallout({ isEn }: { isEn: boolean }) {
  const receptionist = 3200;
  const retainer = 697;
  const saving = receptionist - retainer;       // 2,503
  const pct = Math.round((saving / receptionist) * 100); // 78

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-4 rounded-2xl border border-[rgba(201,168,76,0.2)] bg-[#0F0F14] px-5 py-4 space-y-3"
    >
      {/* Label */}
      <p className="font-sans text-[10px] uppercase tracking-widest text-[#6B6B7A]">
        💡 {isEn
          ? "vs. hiring a bilingual receptionist in NJ"
          : "vs. contratar una recepcionista bilingüe en NJ"}
      </p>

      {/* Human row */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span className="text-[#F5F5F0]">
            {isEn ? "Human hire" : "Empleada"}
          </span>
          <span className="text-[#DC2626] font-semibold">$3,200/mo</span>
        </div>
        <motion.div
          className="h-1.5 rounded-full bg-[rgba(220,38,38,0.45)]"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      {/* AI row */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span className="text-[#F5F5F0]">Protolylat</span>
          <span className="text-[#C9A84C] font-semibold">$697/mo</span>
        </div>
        <motion.div
          className="h-1.5 rounded-full bg-[rgba(201,168,76,0.65)]"
          initial={{ width: 0 }}
          whileInView={{ width: "22%" }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      {/* Savings callout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.65, duration: 0.4 }}
        viewport={{ once: true }}
        className="text-center rounded-xl bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.25)] py-2 px-3"
      >
        <p className="font-sans text-[#C9A84C] font-bold text-xs">
          {isEn
            ? `You save $${saving.toLocaleString()}/mo — ${pct}% less`
            : `Ahorrás $${saving.toLocaleString()}/mes — un ${pct}% menos`}
        </p>
      </motion.div>
    </motion.div>
  );
}

interface BenchmarkProps {
  lang: Lang;
  onOpenForm: () => void;
}

const copy = {
  eyebrow: { en: "COMPETITIVE ANALYSIS", es: "ANÁLISIS COMPETITIVO" },
  headline: {
    en: "Why SaaS tools keep you stuck — and why clinics are switching",
    es: "Por qué los SaaS te mantienen estancado — y por qué las clínicas están migrando",
  },
  tableHeadSaas: { en: "GlossGenius / Aesthetic Record", es: "GlossGenius / Aesthetic Record" },
  tableHeadAI: { en: "AI Receptionist 2.0", es: "AI Receptionist 2.0" },
  rows: [
    {
      dimension: { en: "Architecture", es: "Arquitectura" },
      saas: { en: "Rigid click-and-form flows. Breaks on edge cases.", es: "Flujos rígidos de clics. Se rompe con excepciones." },
      ai: { en: "Natural language + context. Handles anything.", es: "Lenguaje natural + contexto. Maneja cualquier caso." },
    },
    {
      dimension: { en: "Cost structure", es: "Estructura de costos" },
      saas: { en: "$15–$148/mo + 2.6% per transaction + staff to run it.", es: "$15–$148/mes + 2.6% por transacción + personal que lo opere." },
      ai: { en: "One setup fee. Retainer replaces bilingual staff at 1/5 the cost.", es: "Un pago de configuración. El retainer reemplaza personal bilingüe a 1/5 del costo." },
    },
    {
      dimension: { en: "Patient UX", es: "Experiencia del paciente" },
      saas: { en: "Self-serve calendar portals. High abandonment.", es: "Portales de autogestión. Alta tasa de abandono." },
      ai: { en: "Conversation in 30 seconds. Books while the patient is still interested.", es: "Conversación en 30 segundos. Agenda mientras el paciente sigue interesado." },
    },
    {
      dimension: { en: "Integrations", es: "Integraciones" },
      saas: { en: "Walled garden. Pay more for each connector.", es: "Ecosistema cerrado. Paga extra por cada integración." },
      ai: { en: "Open architecture via n8n + any EHR/CRM. You own your data.", es: "Arquitectura abierta via n8n + cualquier EHR/CRM. Tú dueño de tus datos." },
    },
  ],
  uvpHeadline: {
    en: "3 reasons clinic owners are making the switch",
    es: "3 razones por las que los dueños de clínicas están migrando",
  },
  uvps: [
    {
      icon: TrendingDown,
      titleEn: "Proactive, not passive",
      titleEs: "Proactivo, no pasivo",
      bodyEn:
        "SaaS sits on a web page waiting. Our agent contacts every inbound lead in seconds and reactivates dormant patients — without you touching a thing.",
      bodyEs:
        "El SaaS espera pasivamente en una página web. Nuestro agente contacta cada lead en segundos y reactiva pacientes inactivos — sin que toques nada.",
      showSavings: false,
    },
    {
      icon: Users,
      titleEn: "Replaces payroll, not adds to it",
      titleEs: "Reemplaza nómina, no la incrementa",
      bodyEn:
        "A bilingual NJ receptionist costs $3,200/mo in salary alone — before taxes, benefits, or turnover. Our retainer is $697. The payback happens before the first invoice is paid.",
      bodyEs:
        "Una recepcionista bilingüe en NJ cuesta $3,200/mes solo en salario — sin impuestos, beneficios ni rotación. Nuestro retainer es $697. El retorno ocurre antes de que llegue la primera factura.",
      showSavings: true,
    },
    {
      icon: Lock,
      titleEn: "You own the infrastructure",
      titleEs: "Tú eres dueño de la infraestructura",
      bodyEn:
        "Stop renting standardized features in a closed ecosystem. Get a custom system wired to your exact workflows — with full data sovereignty.",
      bodyEs:
        "Deja de alquilar funciones estándar en un ecosistema cerrado. Obtén un sistema a medida conectado a tus flujos exactos — con soberanía total de tus datos.",
      showSavings: false,
    },
  ],
  cta: { en: "See how it applies to my clinic →", es: "Ver cómo aplica a mi clínica →" },
};

export function BenchmarkSection({ lang, onOpenForm }: BenchmarkProps) {
  const isEn = lang === "en";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const uvpRef = useRef(null);
  const uvpInView = useInView(uvpRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 px-4 bg-[#0A0A0E] border-t border-[rgba(255,255,255,0.04)]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow + headline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-sans text-xs uppercase tracking-widest text-[#C9A84C] font-semibold text-center mb-4"
        >
          {isEn ? copy.eyebrow.en : copy.eyebrow.es}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F5F0] tracking-tight text-center max-w-2xl mx-auto text-balance mb-14"
        >
          {isEn ? copy.headline.en : copy.headline.es}
        </motion.h2>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-[rgba(255,255,255,0.07)] overflow-hidden mb-16"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 bg-[#0F0F14]">
            <div className="p-4 border-r border-[rgba(255,255,255,0.06)]" />
            <div className="p-4 border-r border-[rgba(255,255,255,0.06)] flex items-center gap-2">
              <X className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
              <span className="font-sans text-[11px] font-semibold text-[#6B6B7A] uppercase tracking-wider leading-tight">
                {isEn ? copy.tableHeadSaas.en : copy.tableHeadSaas.es}
              </span>
            </div>
            <div className="p-4 flex items-center gap-2 bg-[rgba(201,168,76,0.05)]">
              <Check className="w-3.5 h-3.5 text-[#C9A84C] shrink-0" />
              <span className="font-sans text-[11px] font-semibold text-[#C9A84C] uppercase tracking-wider leading-tight">
                {isEn ? copy.tableHeadAI.en : copy.tableHeadAI.es}
              </span>
            </div>
          </div>

          {/* Rows */}
          {copy.rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 border-t border-[rgba(255,255,255,0.05)] ${i % 2 === 0 ? "bg-[#07070A]" : "bg-[#0A0A0E]"
                }`}
            >
              <div className="p-4 border-r border-[rgba(255,255,255,0.05)] flex items-center">
                <span className="font-sans text-xs font-semibold text-[#F5F5F0] uppercase tracking-widest leading-tight">
                  {isEn ? row.dimension.en : row.dimension.es}
                </span>
              </div>
              <div className="p-4 border-r border-[rgba(255,255,255,0.05)]">
                <p className="font-sans text-xs text-[#6B6B7A] leading-relaxed">
                  {isEn ? row.saas.en : row.saas.es}
                </p>
              </div>
              <div className="p-4 bg-[rgba(201,168,76,0.03)]">
                <p className="font-sans text-xs text-[#F5F5F0] leading-relaxed">
                  {isEn ? row.ai.en : row.ai.es}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* UVP cards */}
        <div ref={uvpRef}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={uvpInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F5F0] text-center mb-10 text-balance"
          >
            {isEn ? copy.uvpHeadline.en : copy.uvpHeadline.es}
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {copy.uvps.map((uvp, i) => {
              const Icon = uvp.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={uvpInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="rounded-2xl bg-[#0F0F14] border border-[rgba(255,255,255,0.07)] p-6 flex flex-col gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[rgba(201,168,76,0.1)] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-bold text-[#F5F5F0] mb-2 leading-snug">
                      {isEn ? uvp.titleEn : uvp.titleEs}
                    </p>
                    <p className="font-sans text-xs text-[#6B6B7A] leading-relaxed">
                      {isEn ? uvp.bodyEn : uvp.bodyEs}
                    </p>
                    {/* {uvp.showSavings && <SavingsCallout isEn={isEn} />} */}
                    
                    {uvp.showSavings && (
                      <>
                        <SavingsCallout isEn={isEn} />
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.9, duration: 0.5 }}
                          viewport={{ once: true }}
                          className="font-sans text-[#C9A84C] font-bold text-xs text-center mt-3"
                        >
                          {isEn
                            ? "The payback happens before the first invoice is paid."
                            : "El retorno ocurre antes de que llegue la primera factura."}
                        </motion.p>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={uvpInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(201,168,76,0.35)" }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenForm}
              className="bg-[#C9A84C] text-black font-semibold text-sm px-8 py-4 rounded-full"
            >
              {isEn ? copy.cta.en : copy.cta.es}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
