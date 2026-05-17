"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="font-serif text-lg font-bold tracking-tight text-ink">
        Made For{" "}
        <span className="text-accent italic">This</span>
      </div>

      <a
        href="#register"
        className="text-xs font-medium tracking-widest uppercase text-white bg-ink px-5 py-2.5 rounded-full hover:bg-accent transition-colors duration-200"
      >
        <span className="hidden sm:inline">Register Interest</span>
        <span className="sm:hidden">Register</span>
      </a>
    </nav>
  );
}
