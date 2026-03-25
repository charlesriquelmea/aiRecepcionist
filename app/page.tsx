"use client";
import { useState } from "react";
import { type Lang } from "@/lib/content";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PainSection } from "@/components/PainSection";
import { StatsSection } from "@/components/StatsSection";
import { BenchmarkSection } from "@/components/BenchmarkSection";
import { PricingSection } from "@/components/PricingSection";
import { HowItWorks } from "@/components/HowItWorks";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { MultiStepForm } from "@/components/MultiStepForm";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  const [lang, setLang] = useState<Lang>("en");
  const [formOpen, setFormOpen] = useState(false);

  return (
    <main className="bg-[#07070A] text-[#F5F5F0] overflow-x-hidden">
      <Navbar
        lang={lang}
        onLangChange={setLang}
        onOpenForm={() => setFormOpen(true)}
      />
      <Hero lang={lang} onOpenForm={() => setFormOpen(true)} />
      <PainSection lang={lang} />
      <StatsSection lang={lang} />
      <BenchmarkSection lang={lang} onOpenForm={() => setFormOpen(true)} />
      <PricingSection lang={lang} onOpenForm={() => setFormOpen(true)} />
      <HowItWorks lang={lang} />
      <GuaranteeSection lang={lang} onOpenForm={() => setFormOpen(true)} />
      <FAQSection lang={lang} />
      <FinalCTA lang={lang} onOpenForm={() => setFormOpen(true)} />
      <Footer lang={lang} />
      <MultiStepForm
        lang={lang}
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
      />
    </main>
  );
}
