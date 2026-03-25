"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { content, type Lang } from "@/lib/content";
import { Lock, ShieldCheck, Zap } from "lucide-react";

interface FinalCTAProps {
  lang: Lang;
  onOpenForm: () => void;
}

const trustIcons = [Lock, ShieldCheck, Zap];

export function FinalCTA({ lang, onOpenForm }: FinalCTAProps) {
  const isEn = lang === "en";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-28 px-4 bg-[#0A0A0F] border-t-2 border-[#C9A84C] overflow-hidden"
    >
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Urgency badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[rgba(220,38,38,0.1)] border border-[rgba(220,38,38,0.3)] rounded-full px-5 py-2.5 mb-10"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
          <span className="font-sans text-xs font-bold text-[#DC2626] tracking-wide uppercase">
            {isEn ? content.finalCta.urgencyEn : content.finalCta.urgencyEs}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl sm:text-6xl font-bold text-[#F5F5F0] tracking-tight text-balance leading-tight mb-2"
        >
          {isEn ? content.finalCta.headlineEn : content.finalCta.headlineEs}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-3xl sm:text-4xl font-bold text-[#C9A84C] mb-10"
        >
          {isEn ? content.finalCta.subheadlineEn : content.finalCta.subheadlineEs}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.06, boxShadow: "0 0 50px rgba(201,168,76,0.45)" }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpenForm}
          className="bg-[#C9A84C] text-black font-bold text-xl px-14 py-5 rounded-full mb-6 transition-all"
        >
          {isEn ? content.finalCta.ctaEn : content.finalCta.ctaEs}
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-sans text-sm text-[#6B6B7A] mb-10 block"
        >
          {isEn ? content.finalCta.microcopyEn : content.finalCta.microcopyEs}
        </motion.p>

        {/* Trust icons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* TODO: descomentar cuando sepa que es */}
          {/* {(isEn ? content.finalCta.trustEn : content.finalCta.trustEs).map((item, i) => {
            const Icon = trustIcons[i];
            return (
              <div key={i} className="flex items-center gap-2 text-sm text-[#6B6B7A]">
                <Icon className="w-4 h-4 text-[#C9A84C]" />
                <span>{item}</span>
              </div>
            );
          })} */}
        </motion.div>
      </div>
    </section>
  );
}
