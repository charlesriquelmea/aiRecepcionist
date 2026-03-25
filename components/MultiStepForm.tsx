"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { content, type Lang } from "@/lib/content";
import { X, ArrowLeft, Check } from "lucide-react";

interface MultiStepFormProps {
  lang: Lang;
  isOpen: boolean;
  onClose: () => void;
}

type FormData = {
  businessType?: string;
  leadsPerMonth?: string;
  challenges?: string[];
  name?: string;
  whatsapp?: string;
  email?: string;
};

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? -100 : 100,
    opacity: 0,
  }),
};

export function MultiStepForm({ lang, isOpen, onClose }: MultiStepFormProps) {
  const isEn = lang === "en";
  const steps = content.form.stepsEn;
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [textInput, setTextInput] = useState("");

  const totalSteps = steps.length;
  const progress = ((currentStep) / (totalSteps - 1)) * 100;

  const goNext = useCallback(() => {
    if (currentStep < totalSteps - 1) {
      setDirection(1);
      setCurrentStep((s) => s + 1);
      setTextInput("");
    }
  }, [currentStep, totalSteps]);

  const goPrev = useCallback(() => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((s) => s - 1);
      setTextInput("");
    }
  }, [currentStep]);

  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(0);
      setFormData({});
      setTextInput("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!isOpen) return;
      const step = steps[currentStep];
      if (e.key === "Escape") onClose();
      if (e.key === "Enter") {
        if (step.type === "text" || step.type === "tel" || step.type === "email") {
          if (textInput.trim()) goNext();
        } else if (step.type === "welcome") {
          goNext();
        }
      }
      if (e.key === "Backspace" && textInput === "") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, currentStep, steps, textInput, goNext, goPrev, onClose]);

  const step = steps[currentStep];

  const handleSelect = (value: string) => {
    if (currentStep === 1) {
      setFormData((d) => ({ ...d, businessType: value }));
      setTimeout(goNext, 250);
    } else if (currentStep === 2) {
      setFormData((d) => ({ ...d, leadsPerMonth: value }));
      setTimeout(goNext, 250);
    }
  };

  const handleMultiSelect = (value: string) => {
    setFormData((d) => {
      const current = d.challenges || [];
      return {
        ...d,
        challenges: current.includes(value)
          ? current.filter((c) => c !== value)
          : [...current, value],
      };
    });
  };

  const handleTextNext = () => {
    if (!textInput.trim()) return;
    if (currentStep === 4) setFormData((d) => ({ ...d, name: textInput }));
    else if (currentStep === 5) setFormData((d) => ({ ...d, whatsapp: textInput }));
    else if (currentStep === 6) setFormData((d) => ({ ...d, email: textInput }));
    goNext();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-[#07070A]/95 backdrop-blur-xl flex flex-col"
        >
          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
            <motion.div
              className="h-full bg-[#C9A84C]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Close + Back */}
          <div className="flex items-center justify-between px-6 pt-6 pb-0">
            <button
              onClick={goPrev}
              className={`text-[#6B6B7A] hover:text-[#F5F5F0] transition-colors flex items-center gap-1 text-sm ${currentStep === 0 ? "invisible" : ""}`}
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <span className="font-sans text-xs text-[#6B6B7A]">
              {currentStep + 1} / {totalSteps}
            </span>
            <button
              onClick={onClose}
              className="text-[#6B6B7A] hover:text-[#F5F5F0] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Step content */}
          <div className="flex-1 flex items-center justify-center px-6 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentStep}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full max-w-xl"
              >
                {/* WELCOME */}
                {step.type === "welcome" && (
                  <div className="text-center">
                    <p className="font-sans text-xs uppercase tracking-widest text-[#C9A84C] mb-4">
                      {isEn ? "Revenue Audit" : "Auditoría de Revenue"}
                    </p>
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F5F0] mb-5 text-balance leading-tight">
                      {isEn ? step.headlineEn : step.headlineEs}
                    </h2>
                    <p className="font-sans text-[#6B6B7A] text-base leading-relaxed mb-10 max-w-sm mx-auto">
                      {isEn ? step.subtitleEn : step.subtitleEs}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(201,168,76,0.3)" }}
                      whileTap={{ scale: 0.97 }}
                      onClick={goNext}
                      className="bg-[#C9A84C] text-black font-semibold text-base px-10 py-4 rounded-full"
                    >
                      {isEn ? step.ctaEn : step.ctaEs}
                    </motion.button>
                  </div>
                )}

                {/* SELECT */}
                {step.type === "select" && (
                  <div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F5F0] mb-8 text-balance">
                      {isEn ? step.questionEn : step.questionEs}
                    </h2>
                    <div className="grid grid-cols-2 gap-3">
                      {step.options?.map((opt, i) => {
                        const label = isEn ? opt.labelEn : opt.labelEs;
                        const selected =
                          currentStep === 1
                            ? formData.businessType === label
                            : formData.leadsPerMonth === label;
                        return (
                          <motion.button
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleSelect(label)}
                            className={`py-4 px-6 rounded-xl text-left font-sans text-sm font-medium border transition-all ${
                              selected
                                ? "bg-[rgba(201,168,76,0.15)] border-[#C9A84C] text-[#C9A84C]"
                                : "bg-[#0F0F14] border-[rgba(255,255,255,0.08)] text-[#F5F5F0] hover:border-[rgba(201,168,76,0.4)]"
                            }`}
                          >
                            {label}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* MULTI-SELECT */}
                {step.type === "multi-select" && (
                  <div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F5F0] mb-2 text-balance">
                      {isEn ? step.questionEn : step.questionEs}
                    </h2>
                    <p className="font-sans text-xs text-[#6B6B7A] mb-7">
                      {isEn ? "Select all that apply" : "Selecciona todas las que apliquen"}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {step.options?.map((opt, i) => {
                        const label = isEn ? opt.labelEn : opt.labelEs;
                        const selected = (formData.challenges || []).includes(label);
                        return (
                          <motion.button
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleMultiSelect(label)}
                            className={`py-4 px-6 rounded-xl text-left font-sans text-sm font-medium border transition-all flex items-center justify-between gap-3 ${
                              selected
                                ? "bg-[rgba(201,168,76,0.15)] border-[#C9A84C] text-[#C9A84C]"
                                : "bg-[#0F0F14] border-[rgba(255,255,255,0.08)] text-[#F5F5F0] hover:border-[rgba(201,168,76,0.4)]"
                            }`}
                          >
                            <span>{label}</span>
                            {selected && <Check className="w-4 h-4 flex-shrink-0" />}
                          </motion.button>
                        );
                      })}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={goNext}
                      disabled={(formData.challenges || []).length === 0}
                      className="bg-[#C9A84C] text-black font-semibold text-sm px-8 py-3.5 rounded-full disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {isEn ? "Continue →" : "Continuar →"}
                    </motion.button>
                  </div>
                )}

                {/* TEXT / TEL / EMAIL */}
                {(step.type === "text" || step.type === "tel" || step.type === "email") && (
                  <div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F5F0] mb-8 text-balance">
                      {isEn ? step.questionEn : step.questionEs}
                    </h2>
                    <div className="border-b-2 border-[rgba(201,168,76,0.4)] focus-within:border-[#C9A84C] transition-colors mb-8 pb-3">
                      <input
                        autoFocus
                        type={step.type === "email" ? "email" : step.type === "tel" ? "tel" : "text"}
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                        placeholder={isEn ? step.placeholderEn : step.placeholderEs}
                        className="w-full bg-transparent font-sans text-xl text-[#F5F5F0] placeholder-[#6B6B7A]/50 outline-none"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleTextNext}
                      disabled={!textInput.trim()}
                      className="bg-[#C9A84C] text-black font-semibold text-sm px-8 py-3.5 rounded-full disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {isEn ? "Continue →" : "Continuar →"}
                    </motion.button>
                    <p className="font-sans text-xs text-[#6B6B7A] mt-4">
                      {isEn ? "Press Enter to continue" : "Presiona Enter para continuar"}
                    </p>
                  </div>
                )}

                {/* RESULTS */}
                {step.type === "results" && (
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-[rgba(201,168,76,0.15)] border border-[#C9A84C] flex items-center justify-center mx-auto mb-6">
                      <Check className="w-7 h-7 text-[#C9A84C]" />
                    </div>
                    {formData.name && (
                      <p className="font-sans text-[#C9A84C] text-sm mb-2">
                        {isEn ? `Hey ${formData.name}!` : `¡Hola ${formData.name}!`}
                      </p>
                    )}
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F5F0] mb-4 text-balance">
                      {isEn ? step.headlineEn : step.headlineEs}
                    </h2>
                    <p className="font-sans text-[#6B6B7A] text-base leading-relaxed mb-10 max-w-sm mx-auto">
                      {isEn ? step.subtitleEn : step.subtitleEs}
                    </p>
                    <motion.a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(201,168,76,0.3)" }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-block bg-[#C9A84C] text-black font-semibold text-base px-10 py-4 rounded-full"
                    >
                      {isEn ? step.ctaEn : step.ctaEs}
                    </motion.a>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
