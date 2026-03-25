"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { content, type Lang } from "@/lib/content";
import { ChevronDown } from "lucide-react";

interface FAQProps {
  lang: Lang;
}

export function FAQSection({ lang }: FAQProps) {
  const isEn = lang === "en";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = content.faq.items;

  return (
    <section ref={ref} className="py-24 px-4 bg-[#07070A]">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F5F0] tracking-tight mb-12 text-center text-balance"
        >
          {isEn ? content.faq.headlineEn : content.faq.headlineEs}
        </motion.h2>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`bg-[#0F0F14] rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[rgba(201,168,76,0.5)]"
                    : "border-[rgba(255,255,255,0.06)]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-sans font-medium text-[#F5F5F0] text-sm leading-relaxed">
                    {isEn ? item.questionEn : item.questionEs}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                  >
                    <ChevronDown className={`w-4 h-4 ${isOpen ? "text-[#C9A84C]" : "text-[#6B6B7A]"}`} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-sm text-[#6B6B7A] leading-relaxed px-6 pb-5">
                        {isEn ? item.answerEn : item.answerEs}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
