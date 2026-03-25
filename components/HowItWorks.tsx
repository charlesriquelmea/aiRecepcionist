"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { content, type Lang } from "@/lib/content";

interface TimelineProps {
  lang: Lang;
}

export function HowItWorks({ lang }: TimelineProps) {
  const isEn = lang === "en";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const steps = content.timeline.stepsEn;

  return (
    <section ref={ref} className="py-24 px-4 bg-[#0A0A0F]">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F5F0] tracking-tight mb-14 text-center text-balance"
        >
          {isEn ? content.timeline.headlineEn : content.timeline.headlineEs}
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[rgba(201,168,76,0.2)]" />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex items-start gap-6 pb-10 last:pb-0"
              >
                {/* Circle */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-[#0F0F14] border-2 border-[#C9A84C] flex items-center justify-center">
                  <span className="font-serif font-bold text-[#C9A84C] text-base">{i + 1}</span>
                </div>

                {/* Content */}
                <div className="pt-2.5">
                  <p className="font-sans text-xs uppercase tracking-widest text-[#C9A84C] mb-1">
                    {step.day}
                  </p>
                  <p className="font-sans text-[#F5F5F0] text-lg font-medium leading-snug">
                    {isEn ? step.titleEn : step.titleEs}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
