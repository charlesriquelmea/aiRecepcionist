"use client";
import { motion } from "framer-motion";
import { content, type Lang } from "@/lib/content";

interface NavbarProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  onOpenForm: () => void;
}

export function Navbar({ lang, onLangChange, onOpenForm }: NavbarProps) {
  const isEn = lang === "en";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex flex-col leading-none">
          <span className="font-sans text-[10px] uppercase tracking-widest text-[#6B6B7A] font-medium">
            AI Receptionist For MedSpa in NYC/NJ
          </span>
          <span className="font-serif text-lg font-bold tracking-tight text-[#C9A84C]">
            by Protolylat
          </span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Spots badge */}
          <div className="hidden sm:flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span className="text-xs text-[#F5F5F0] font-sans">
              {isEn ? content.nav.spotsEn : content.nav.spotsEs}
            </span>
          </div>

          {/* Language toggle */}
          <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/10">
            <button
              onClick={() => onLangChange("en")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                lang === "en"
                  ? "bg-[#C9A84C] text-black"
                  : "text-[#6B6B7A] hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLangChange("es")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                lang === "es"
                  ? "bg-[#C9A84C] text-black"
                  : "text-[#6B6B7A] hover:text-white"
              }`}
            >
              ES
            </button>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenForm}
            className="bg-[#C9A84C] text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#E8D5B7] transition-colors"
          >
            {isEn ? content.nav.ctaEn : content.nav.ctaEs}
          </motion.button>
        </div>
      </div>
    </header>
  );
}
