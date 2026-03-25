"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { content, type Lang, type PricingPlan } from "@/lib/content";
import { Check, X, Zap, Brain, Calendar, Database, CreditCard, Bell, TrendingDown } from "lucide-react";

// Inline savings mini-component
function SavingsBadge({ isEn }: { isEn: boolean }) {
  // Receptionist: $3,200/mo | Retainer: $697/mo | Savings: $2,503/mo
  const saving = 3200 - 697;
  return (
    <div className="flex flex-col items-end gap-0.5 shrink-0">
      <div className="flex items-center gap-1 bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.25)] rounded-full px-2 py-0.5">
        <TrendingDown className="w-3 h-3 text-emerald-400" />
        <span className="font-sans text-[10px] font-bold text-emerald-400 whitespace-nowrap">
          {isEn ? `Save $${saving.toLocaleString()}/mo` : `Ahorra $${saving.toLocaleString()}/mes`}
        </span>
      </div>
      <span className="font-sans text-[9px] text-[#6B6B7A] text-right whitespace-nowrap">
        {isEn ? "vs. $3,200 NJ receptionist" : "vs. recepcionista NJ $3,200"}
      </span>
    </div>
  );
}

interface PricingProps {
  lang: Lang;
  onOpenForm: () => void;
}

const pricingAddons = {
  en: [
    "RAG clinical Pinecone Enterprise",
    "CRM API Integration",
    "Automatic deposit charge Stripe Health",
    "HIPAA: BAA + AES-256 + Zero-Retention",
    "WhatsApp Meta Business Integration (separate cost)",
  ],
  es: [
    "RAG clínico Pinecone Enterprise",
    "Integración CRM API",
    "Cobro depósito automático Stripe Health",
    "HIPAA: BAA + AES-256 + Zero-Retention",
    "WhatsApp Meta Business Integración (costo por separado)",
  ],
};

const opportunityCost = {
  headlineEn: "What you're already paying",
  headlineEs: "Lo que ya estás pagando",
  rowsEn: [
    { label: "Bilingual receptionist NJ", value: "$3,200/mo" },
    { label: "Revenue lost to no-shows", value: "$4,000–8,000/mo" },
    { label: "Leads lost after hours", value: "Incalculable" },
  ],
  rowsEs: [
    { label: "Recepcionista bilingüe NJ", value: "$3,200/mes" },
    { label: "Revenue perdido por no-shows", value: "$4,000–8,000/mes" },
    { label: "Leads perdidos fuera de horario", value: "Incontable" },
  ],
  totalEn: "Cost of inaction: $7,000–11,000/mo",
  totalEs: "Costo de no actuar: $7,000–11,000/mes",
};

const agentCapabilities = {
  headlineEn: "One agent. Multiple capabilities.",
  headlineEs: "Un agente. Múltiples capacidades.",
  subtitleEn:
    "A single LLM brain decides which tool to use based on context — no brittle if/else logic, just intelligent orchestration.",
  subtitleEs:
    "Un solo cerebro LLM decide qué herramienta usar según el contexto — sin lógica frágil, solo orquestación inteligente.",
  tools: [
    {
      icon: Zap,
      labelEn: "Conversation Tool",
      labelEs: "Tool de conversación",
      descEn: "Omnichannel chat: Web, WhatsApp, IG",
      descEs: "Chat omnicanal: Web, WhatsApp, IG",
    },
    {
      icon: Brain,
      labelEn: "RAG Tool",
      labelEs: "Tool de RAG",
      descEn: "Protocols & services knowledge base",
      descEs: "Base de conocimiento de protocolos y servicios",
    },
    {
      icon: Calendar,
      labelEn: "Booking Tool",
      labelEs: "Tool de Booking",
      descEn: "Appointment setter & calendar sync",
      descEs: "Agendamiento y sincronización de calendario",
    },
    {
      icon: Database,
      labelEn: "CRM Tool",
      labelEs: "Tool de CRM",
      descEn: "Patient record registration & update",
      descEs: "Registro y actualización de pacientes",
    },
    {
      icon: CreditCard,
      labelEn: "Payment Tool",
      labelEs: "Tool de cobro",
      descEn: "Deposit capture via Stripe",
      descEs: "Captura de depósito via Stripe",
    },
  ],
  noShowHeadlineEn: "No-show prevention flow",
  noShowHeadlineEs: "Flujo de prevención de no-shows",
  noShowIcon: Bell,
  noShowStepsEn: [
    "Reminder 24h before (WhatsApp / SMS / Call)",
    "Reminder 2h before",
    "No confirmation? The agent calls or escalates to human",
    "Cancels? Agent automatically offers to reschedule",
  ],
  noShowStepsEs: [
    "Recordatorio 24h antes (WhatsApp / SMS / Llamada)",
    "Recordatorio 2h antes",
    "Sin confirmación → el agente llama o escala a humano",
    "Cancela → el agente ofrece reagendar automáticamente",
  ],
};

export function PricingSection({ lang, onOpenForm }: PricingProps) {
  const isEn = lang === "en";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const agentRef = useRef(null);
  const agentInView = useInView(agentRef, { once: true, margin: "-80px" });

  const ocRows = isEn ? opportunityCost.rowsEn : opportunityCost.rowsEs;
  const addons = isEn ? pricingAddons.en : pricingAddons.es;
  const tools = agentCapabilities.tools;
  const noShowSteps = isEn ? agentCapabilities.noShowStepsEn : agentCapabilities.noShowStepsEs;

  return (
    <>
      <section ref={ref} id="pricing" className="py-24 px-4 bg-[#07070A]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-[#F5F5F0] tracking-tight mb-4 text-center max-w-2xl mx-auto text-balance"
          >
            {isEn ? content.pricing.headlineEn : content.pricing.headlineEs}
          </motion.h2>

          {/* Spots urgency */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex justify-center mb-12"
          >
            <div className="flex items-center gap-2 bg-[rgba(220,38,38,0.1)] border border-[rgba(220,38,38,0.3)] rounded-full px-5 py-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
              <span className="font-sans text-xs font-semibold text-[#DC2626] tracking-wide">
                {isEn
                  ? "Technical spots this month: 1 of 6 taken"
                  : "Cupos técnicos este mes: 1 de 6 tomados"}
              </span>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible">
            {(content.pricing.plans as PricingPlan[]).map((plan, i) => {
              const name = isEn ? plan.nameEn : plan.nameEs;
              const features = isEn ? plan.featuresEn : plan.featuresEs;
              const cta = isEn ? plan.ctaEn : plan.ctaEs;
              const badge = isEn ? plan.badgeEn : plan.badgeEs;
              const isQuickWin = i === 0;
              const isEngine = i === 1;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={`
                    relative shrink-0 w-72 sm:w-auto snap-center rounded-2xl p-7 flex flex-col gap-5
                    bg-[#0F0F14] border transition-all duration-300
                    ${plan.featured ? "border-[#C9A84C]" : plan.bestRoi ? "border-[rgba(201,168,76,0.5)]" : "border-[rgba(255,255,255,0.07)]"}
                  `}
                  style={
                    plan.bestRoi
                      ? { boxShadow: "0 0 40px rgba(201,168,76,0.18)" }
                      : undefined
                  }
                >
                  {/* Badge */}
                  {badge && (
                    <div
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${plan.featured
                        ? "bg-[#C9A84C] text-black"
                        : "bg-[#DC2626] text-white"
                        }`}
                    >
                      {plan.bestRoi && "★ "}{badge}
                    </div>
                  )}

                  {/* Name + Price */}
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-[#6B6B7A] mb-2">
                      {name}
                    </p>
                    {/* <div className="flex items-end gap-2">
                      {plan.originalPrice && (
                        <span className="font-sans text-[#6B6B7A] line-through text-lg">
                          {plan.originalPrice}
                        </span>
                      )}
                      <span className="font-serif text-4xl font-bold text-[#F5F5F0]">
                        {plan.price}
                      </span>
                    </div>
                    <p className="font-sans text-[10px] text-[#6B6B7A] mt-1">
                      {isQuickWin
                        ? isEn
                          ? "one-time setup · 2 installments: 50% to start, 50% on delivery"
                          : "pago único · 2 cuotas: 50% al comenzar, 50% al entregar"
                        : isEn
                        ? "one-time setup"
                        : "pago único de configuración"}
                    </p> */}

                    <div className="flex items-end gap-2">
                      {plan.originalPrice && (
                        <span className="font-sans text-[#6B6B7A] line-through text-lg">
                          {plan.originalPrice}
                        </span>
                      )}
                      <span className="font-serif text-4xl font-bold text-[#F5F5F0]">
                        {plan.price}
                      </span>
                    </div>

                    {/* Subtexto de pago */}
                    <p className="font-sans text-[10px] text-[#6B6B7A] mt-1">
                      {isQuickWin
                        ? isEn
                          ? "one-time setup"
                          : "pago único de configuración"
                        : isEn
                          ? "one-time setup"
                          : "pago único de configuración"}
                    </p>

                    {/* Pill de cuotas — SOLO para Quick Win */}
                    {isQuickWin && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.45, delay: 0.2 }}
                        className="mt-3 rounded-xl border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.06)] px-4 py-3"
                      >
                        <p className="font-sans text-xs font-semibold text-[#E8D5B7]">
                          {isEn ? "💳 2 interest-free payments" : "💳 2 cuotas sin interés"}
                        </p>
                        <p className="font-sans text-[10px] text-[#6B6B7A] mt-1">
                          {isEn
                            ? "50% upfront · 50% on delivery"
                            : "50% al comenzar · 50% al entregar"}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-[rgba(255,255,255,0.06)]" />

                  {/* Features */}
                  <ul className="flex flex-col gap-3 flex-1">
                    {features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <Check
                          className={`w-4 h-4 mt-0.5 shrink-0 ${feat.startsWith("BONUS") || feat.startsWith("BONO")
                            ? "text-[#C9A84C]"
                            : "text-emerald-400"
                            }`}
                        />
                        <span
                          className={`font-sans text-sm leading-relaxed ${feat.startsWith("BONUS") || feat.startsWith("BONO")
                            ? "text-[#C9A84C]"
                            : "text-[#F5F5F0]"
                            }`}
                        >
                          {feat}
                        </span>
                      </li>
                    ))}

                    {/* Channel clarity */}
                    {isQuickWin && (
                      <li className="flex items-start gap-2.5 mt-1 pt-3 border-t border-[rgba(255,255,255,0.06)]">
                        <X className="w-4 h-4 mt-0.5 shrink-0 text-[#6B6B7A]" />
                        <span className="font-sans text-xs text-[#6B6B7A] leading-relaxed">
                          {isEn
                            ? "No WhatsApp + Email + IG (only Web Chat)"
                            : "Sin WhatsApp + Email + IG (solo Web Chat)"}
                        </span>
                      </li>
                    )}
                    {isEngine && (
                      <li className="flex items-start gap-2.5 mt-1 pt-3 border-t border-[rgba(255,255,255,0.06)]">
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" />
                        <span className="font-sans text-xs text-emerald-400 font-medium leading-relaxed">
                          {isEn
                            ? "Multi-channel: Web Chat, WhatsApp + IG"
                            : "Multi-canal: Chat Web, WhatsApp + IG"}
                        </span>
                      </li>
                    )}

                    {/* Disclaimer Voice Agent — solo para The Engine */}
                    {isEngine && (
                      <motion.li
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.35 }}
                        className="flex items-start gap-2 mt-2 pl-4 border-l-2 border-[rgba(201,168,76,0.2)]"
                      >
                        <span className="font-sans text-[10px] text-[#6B6B7A] leading-relaxed italic">
                          {isEn
                            ? "Voice Follow-Up includes up to 10 outbound calls/day, max 5 min each. Additional minutes or calls billed separately."
                            : "Voice Follow-Up incluye hasta 10 llamadas salientes/día, máx. 5 min c/u. Minutos o llamadas adicionales se cobran aparte."}
                        </span>
                      </motion.li>
                    )}

                  </ul>

                  {/* Per-appointment pricing box */}
                  <div className="rounded-xl bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.18)] p-4 flex flex-col gap-2">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-[#C9A84C] font-semibold">
                      {isEn ? "Per effective appointment" : "Por cita efectivizada"}
                    </p>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                        <span className="font-sans text-xs text-[#F5F5F0]">
                          {isEn
                            ? "$30 until May 23 · then $50 · pay only when patient arrives"
                            : "$30 hasta el 23 de mayo · luego $50 · solo pagas si el paciente llega"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-[10px] text-[#6B6B7A] pl-3.5">
                          {isEn ? "or" : "o"}
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#6B6B7A] mt-0.5" />
                          <span className="font-sans text-xs text-[#A0A0B0]">
                            {isEn
                              ? "Monthly retainer $697 USD"
                              : "Retainer mensual $697 USD"}
                          </span>
                        </div>
                        {/* Savings vs receptionist */}
                        <SavingsBadge isEn={isEn} />
                      </div>
                    </div>
                  </div>

                  {/* Add-ons list */}
                  <ul className="flex flex-col gap-2 border-t border-[rgba(255,255,255,0.06)] pt-4">
                    {addons.map((addon, k) => (
                      <li key={k} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#6B6B7A] mt-2 shrink-0" />
                        <span className="font-sans text-[11px] text-[#6B6B7A] leading-relaxed">
                          {addon}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Onboarding note */}
                  <p className="font-sans text-[11px] text-[#6B6B7A] italic leading-relaxed border-t border-[rgba(255,255,255,0.06)] pt-3">
                    {isEn
                      ? "Onboarding process managed by you in 5 to 7 business days"
                      : "Proceso de incorporación gestionado por usted en 5 a 7 días hábiles"}
                  </p>

                  {/* CTA */}
                  <motion.button
                    whileHover={{
                      scale: 1.04,
                      boxShadow:
                        plan.featured || plan.bestRoi
                          ? "0 0 24px rgba(201,168,76,0.4)"
                          : undefined,
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={onOpenForm}
                    className={`
                      w-full py-3.5 rounded-full font-semibold text-sm transition-all
                      ${plan.featured || plan.bestRoi
                        ? "bg-[#C9A84C] text-black"
                        : "border border-[rgba(255,255,255,0.2)] text-[#F5F5F0] hover:border-[#C9A84C] hover:text-[#C9A84C]"
                      }
                    `}
                  >
                    {cta}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>

          {/* Opportunity cost strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-12 rounded-2xl bg-[#0F0F14] border border-[rgba(220,38,38,0.25)] p-6 sm:p-8"
          >
            <p className="font-sans text-xs uppercase tracking-widest text-[#DC2626] font-semibold mb-6">
              {isEn ? opportunityCost.headlineEn : opportunityCost.headlineEs}
            </p>
            <div className="flex flex-col divide-y divide-[rgba(255,255,255,0.05)]">
              {ocRows.map((row, i) => (
                <div key={i} className="flex items-center justify-between py-3">
                  <span className="font-sans text-sm text-[#A0A0B0]">{row.label}</span>
                  <span
                    className={`font-sans text-sm font-semibold ${row.value === "Incalculable" || row.value === "Incontable"
                      ? "text-[#6B6B7A] italic"
                      : "text-[#DC2626]"
                      }`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-[rgba(220,38,38,0.3)] flex items-center justify-between">
              <span className="font-serif text-base font-bold text-[#F5F5F0]">
                {isEn ? opportunityCost.totalEn : opportunityCost.totalEs}
              </span>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenForm}
                className="bg-[#DC2626] text-white font-semibold text-xs px-5 py-2.5 rounded-full"
              >
                {isEn ? "Stop the bleeding →" : "Detener el sangrado →"}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agent capabilities section */}
      <section
        ref={agentRef}
        className="py-20 px-4 bg-[#0A0A0E] border-t border-[rgba(255,255,255,0.04)]"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={agentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F5F0] tracking-tight mb-3 text-balance">
              {isEn
                ? agentCapabilities.headlineEn
                : agentCapabilities.headlineEs}
            </h3>
            <p className="font-sans text-[#6B6B7A] text-sm leading-relaxed max-w-xl mx-auto">
              {isEn
                ? agentCapabilities.subtitleEn
                : agentCapabilities.subtitleEs}
            </p>
          </motion.div>

          {/* Tools grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {tools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={agentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col gap-3 rounded-xl bg-[#0F0F14] border border-[rgba(255,255,255,0.07)] p-5"
                >
                  <div className="w-9 h-9 rounded-lg bg-[rgba(201,168,76,0.1)] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold text-[#F5F5F0] mb-1">
                      {isEn ? tool.labelEn : tool.labelEs}
                    </p>
                    <p className="font-sans text-[11px] text-[#6B6B7A] leading-relaxed">
                      {isEn ? tool.descEn : tool.descEs}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* No-show prevention */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={agentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="rounded-2xl bg-[#0F0F14] border border-[rgba(201,168,76,0.2)] p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-[rgba(201,168,76,0.1)] flex items-center justify-center">
                <Bell className="w-4 h-4 text-[#C9A84C]" />
              </div>
              <h4 className="font-sans text-sm font-semibold text-[#F5F5F0] tracking-wide">
                {isEn
                  ? agentCapabilities.noShowHeadlineEn
                  : agentCapabilities.noShowHeadlineEs}
              </h4>
            </div>
            <div className="relative pl-6 flex flex-col gap-0">
              {/* Vertical line */}
              <div className="absolute left-2 top-2 bottom-2 w-px bg-[rgba(201,168,76,0.2)]" />
              {noShowSteps.map((step, i) => (
                <div key={i} className="relative flex items-start gap-4 pb-5 last:pb-0">
                  <div className="absolute -left-4 top-1 w-3 h-3 rounded-full border-2 border-[#C9A84C] bg-[#0F0F14] shrink-0" />
                  <p className="font-sans text-sm text-[#A0A0B0] leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
