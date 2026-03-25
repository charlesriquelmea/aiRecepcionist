"use client";
import { useState, useEffect, useRef } from "react";

export function useTypewriter(phrases: string[], speed = 60, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const current = phrases[phraseIndex] || 0;
    if (!deleting) {
      if (charIndex < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((i) => i + 1);
        }, speed);
      } else {
        timeoutRef.current = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (charIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((i) => i - 1);
        }, speed / 2);
      } else {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, deleting, phraseIndex, phrases, speed, pause]);

  // Reset when phrases change (language switch)
  useEffect(() => {
    setDisplayed("");
    setCharIndex(0);
    setDeleting(false);
    setPhraseIndex(0);
  }, [phrases]);

  return { displayed, showCursor };
}
