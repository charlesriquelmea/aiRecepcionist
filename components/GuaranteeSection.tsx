"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { content, type Lang } from "@/lib/content";
import { ShieldCheck } from "lucide-react";

interface GuaranteeProps {
  lang: Lang;
  onOpenForm: () => void;
}

export function GuaranteeSection({ lang, onOpenForm }: GuaranteeProps) {
  const isEn = lang === "en";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-28 px-4 bg-[#07070A] overflow-hidden"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <ShieldCheck className="w-20 h-20 text-[#C9A84C]" strokeWidth={1.2} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F5F0] tracking-tight mb-6 text-balance"
        >
          {isEn
            ? "30-Day Guarantee"
            : "Garantía de 30 días"}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-[#A0A0B0] text-base leading-relaxed mb-4"
        >
          {isEn
            ? "If we don't book 15 effective appointments, we refund up to 50% of the setup fee — with the commitment that you must drive organic or paid traffic to the agent or website."
            : "Si no efectivizamos 15 citas, devolvemos hasta el 50% del set up con el compromiso que tú debes llevarle tráfico orgánico o pagado al agente o web site."}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-sans text-[#6B6B7A] text-xs leading-relaxed mb-8 italic"
        >
          {isEn
            ? "Disclaimer: if you don't drive traffic, we cannot guarantee results."
            : "Disclaimer: si no le llevas tráfico no podemos asegurar la garantia."}
        </motion.p>

        {/* Seal badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.3)] rounded-full px-6 py-3 mb-10"
        >
          <ShieldCheck className="w-4 h-4 text-[#C9A84C]" />
          <span className="font-sans text-xs font-semibold text-[#C9A84C] tracking-wide">
            {isEn ? content.guarantee.sealEn : content.guarantee.sealEs}
          </span>
        </motion.div>

        <br />

        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(201,168,76,0.35)" }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpenForm}
          className="bg-[#C9A84C] text-black font-semibold text-base px-10 py-4 rounded-full transition-all"
        >
          {isEn ? content.guarantee.ctaEn : content.guarantee.ctaEs}
        </motion.button>
      </div>
    </section>
  );
}
