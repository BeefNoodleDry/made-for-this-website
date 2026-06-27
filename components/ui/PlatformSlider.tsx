"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const C = {
  red: "#CC0000",
  gold: "#C9A84C",
  grey: "#7A7A7A",
  offWhite: "#F0F0F0",
};

type Slide = {
  src: string;
  label: string;
  caption: string;
};

const SLIDES: Slide[] = [
  {
    src: "/hubspot/pipeline-map.png",
    label: "Customer Journey Map",
    caption: "Map every stage of your customer journey — from first touch to closed won",
  },
  {
    src: "/hubspot/workflow-automation.png",
    label: "Workflow Automation",
    caption: "Build logic-driven automations that run your business while you sleep",
  },
  {
    src: "/hubspot/contact-records.png",
    label: "Contact & Company Records",
    caption: "The single source of truth for every client relationship",
  },
  {
    src: "/hubspot/campaign-management.png",
    label: "Campaign Management",
    caption: "Own the full campaign — from brief to published assets to conversion data",
  },
];

const VARIANTS = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

export default function PlatformSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setIndex((next + SLIDES.length) % SLIDES.length);
    },
    []
  );

  const prev = () => go(index - 1, -1);
  const next = () => go(index + 1, 1);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => go(index + 1, 1), 4000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [index, paused, go]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const slide = SLIDES[index];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide frame */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: "16/9",
          border: "1px solid rgba(255,255,255,0.08)",
          background: "#0D0D1A",
        }}
      >
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            variants={VARIANTS}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.32, 0, 0.67, 0] }}
            className="absolute inset-0"
          >
            {/* Placeholder shown until real image is present */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div style={{ color: "rgba(255,255,255,0.06)" }} className="text-xs uppercase tracking-widest">
                {slide.label}
              </div>
            </div>
            <Image
              src={slide.src}
              alt={slide.label}
              fill
              className="object-cover object-top"
              quality={85}
              onError={() => {/* shows placeholder */}}
            />
          </motion.div>
        </AnimatePresence>

        {/* Arrow buttons */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 hover:opacity-80 transition-opacity"
          style={{ background: "rgba(0,0,0,0.5)", color: C.red, fontSize: "1.25rem", fontWeight: 900 }}
        >
          ←
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 hover:opacity-80 transition-opacity"
          style={{ background: "rgba(0,0,0,0.5)", color: C.red, fontSize: "1.25rem", fontWeight: 900 }}
        >
          →
        </button>
      </div>

      {/* Caption + dots */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <div style={{ color: C.offWhite, letterSpacing: "0.06em" }} className="text-sm font-semibold">
            {slide.label}
          </div>
          <div style={{ color: C.grey, letterSpacing: "0.05em" }} className="text-xs font-light mt-0.5">
            {slide.caption}
          </div>
        </div>
        <div className="flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > index ? 1 : -1)}
              aria-label={`Go to slide ${i + 1}`}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{ background: i === index ? C.gold : "rgba(255,255,255,0.2)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
