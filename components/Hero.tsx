"use client";
import { motion } from "framer-motion";
import { content, type Lang } from "@/lib/content";
import { useTypewriter } from "@/hooks/useTypewriter";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  lang: Lang;
  onOpenForm: () => void;
}

export function Hero({ lang, onOpenForm }: HeroProps) {
  const isEn = lang === "en";
  const phrases = isEn ? content.hero.typewriterEn : content.hero.typewriterEs;
  const { displayed, showCursor } = useTypewriter(phrases, 60, 2200);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />
      {/* Scan-line texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 3px)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-xs uppercase tracking-[0.25em] text-[#C9A84C] mb-6"
        >
          {isEn ? content.hero.eyebrowEn : content.hero.eyebrowEs}
        </motion.p>

        {/* Typewriter headline */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F5F5F0] leading-tight mb-6 min-h-[1.2em]"
        >
          {displayed}
          <span
            className="inline-block w-0.75 h-[0.8em] bg-[#C9A84C] ml-1 align-middle"
            style={{ opacity: showCursor ? 1 : 0, transition: "opacity 0.1s" }}
          />
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-base sm:text-lg text-[#6B6B7A] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {isEn ? content.hero.subheadlineEn : content.hero.subheadlineEs}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(201,168,76,0.4)" }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenForm}
            className="bg-[#C9A84C] text-black font-semibold text-base px-8 py-4 rounded-full transition-all w-full sm:w-auto"
          >
            {isEn ? content.hero.cta1En : content.hero.cta1Es}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              document.getElementById("pain-section")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border border-white/30 text-[#F5F5F0] font-medium text-base px-8 py-4 rounded-full hover:border-white/60 transition-all w-full sm:w-auto"
          >
            {isEn ? content.hero.cta2En : content.hero.cta2Es}
          </motion.button>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          {(isEn ? content.hero.trustEn : content.hero.trustEs).map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-[#6B6B7A]">
              <span className="text-emerald-400 text-base">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      >
        <ChevronDown className="text-[#C9A84C] w-6 h-6 opacity-60" />
      </motion.div>
    </section>
  );
}
