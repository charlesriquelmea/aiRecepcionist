"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { content, type Lang } from "@/lib/content";
import { X } from "lucide-react";

interface PainSectionProps {
  lang: Lang;
}

export function PainSection({ lang }: PainSectionProps) {
  const isEn = lang === "en";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const points = isEn ? content.pain.pointsEn : content.pain.pointsEs;

  return (
    <section
      id="pain-section"
      ref={ref}
      className="relative py-24 px-4 bg-[#07070A]"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F5F0] tracking-tight mb-12 text-center text-balance"
        >
          {isEn ? content.pain.headlineEn : content.pain.headlineEs}
        </motion.h2>

        <div className="flex flex-col gap-4">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 bg-[#0F0F14] border-l-2 border-[#DC2626] rounded-r-xl px-5 py-4"
            >
              <X className="text-[#DC2626] w-5 h-5 mt-0.5 flex-shrink-0" />
              <p className="font-sans text-[#F5F5F0] text-base leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center font-serif text-xl sm:text-2xl font-bold text-[#C9A84C] mt-12"
        >
          {isEn ? content.pain.closingEn : content.pain.closingEs}
        </motion.p>
      </div>
    </section>
  );
}
