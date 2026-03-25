"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { content, type Lang } from "@/lib/content";

interface StatsProps {
  lang: Lang;
}

function StatCard({
  value,
  label,
  delay,
  inView,
}: {
  value: string;
  label: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ borderColor: "rgba(201,168,76,0.6)" }}
      className="bg-[#0F0F14] border border-[rgba(201,168,76,0.15)] rounded-2xl px-8 py-8 flex flex-col items-center gap-3 transition-colors"
    >
      <span className="font-serif text-5xl font-bold text-[#C9A84C]">{value}</span>
      <p className="font-sans text-sm text-[#6B6B7A] text-center leading-relaxed">{label}</p>
    </motion.div>
  );
}

export function StatsSection({ lang }: StatsProps) {
  const isEn = lang === "en";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const stats = content.stats.statsEn;
  return (
    <section ref={ref} className="py-24 px-4 bg-[#0A0A0F]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F5F0] tracking-tight mb-14 text-center text-balance"
        >
          {isEn ? content.stats.headlineEn : content.stats.headlineEs}
        </motion.h2>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {stats.map((s, i) => (
            <StatCard
              key={i}
              value={s.value}
              label={isEn ? s.labelEn : s.labelEs}
              delay={i * 0.15}
              inView={inView}
            />
          ))}
        </div>

        {/* Comparison box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-[#0F0F14] border border-[rgba(201,168,76,0.15)] rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Without */}
            <div className="px-8 py-8 border-b sm:border-b-0 sm:border-r border-[rgba(255,255,255,0.06)]">
              <p className="font-sans text-xs uppercase tracking-widest text-[#DC2626] mb-3 font-semibold">
                {isEn ? content.stats.withoutEn : content.stats.withoutEs}
              </p>
              <div className="w-10 h-0.5 bg-[#DC2626]/40 mb-4" />
              <p className="font-sans text-[#F5F5F0] text-lg leading-relaxed">
                {isEn ? content.stats.withoutDetailEn : content.stats.withoutDetailEs}
              </p>
            </div>
            {/* With */}
            <div className="px-8 py-8">
              <p className="font-sans text-xs uppercase tracking-widest text-emerald-400 mb-3 font-semibold">
                {isEn ? content.stats.withEn : content.stats.withEs}
              </p>
              <div className="w-10 h-0.5 bg-emerald-400/40 mb-4" />
              <p className="font-sans text-[#F5F5F0] text-lg leading-relaxed">
                {isEn ? content.stats.withDetailEn : content.stats.withDetailEs}
              </p>
            </div>
          </div>
          {/* Footer */}
          <div className="border-t border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.05)] px-8 py-4">
            <p className="font-sans text-sm text-[#C9A84C] font-semibold text-center">
              {isEn ? content.stats.differenceEn : content.stats.differenceEs}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
