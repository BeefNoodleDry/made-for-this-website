"use client";

import { useEffect, useRef } from "react";

const C = {
  bg: "#1A1A1A",
  bgAlt: "#111124",
  red: "#CC0000",
  offWhite: "#F0F0F0",
  gold: "#C9A84C",
  grey: "#7A7A7A",
  yellow: "#F5E97A",
};

export default function ThankYouPage() {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    linkRef.current?.click();
  }, []);

  return (
    <main style={{ background: C.bg, color: C.offWhite }} className="overflow-x-hidden min-h-screen flex flex-col">

      {/* Hidden auto-download trigger */}
      <a ref={linkRef} href="/ebook.pdf" download aria-hidden="true" className="hidden" />

      {/* ═══ NAV ═══ */}
      <nav
        className="px-8 md:px-16 py-5 flex items-center justify-between border-b"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <a
          href="/"
          style={{ color: C.gold, fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          className="text-sm md:text-base font-bold whitespace-nowrap"
        >
          MADE FOR THIS
        </a>
      </nav>

      {/* ═══ CONFIRMATION ═══ */}
      <section className="flex-1 flex items-center px-8 md:px-16 py-24">
        <div className="max-w-2xl mx-auto w-full">
          <div
            style={{ color: C.gold, letterSpacing: "0.14em" }}
            className="text-xs uppercase font-medium mb-6 flex items-center gap-3"
          >
            <span>✦</span> You're in.
          </div>

          <h1
            style={{ color: C.red, fontFamily: "var(--font-serif)", letterSpacing: "-0.02em", lineHeight: 1 }}
            className="text-5xl md:text-6xl font-black mb-6"
          >
            Your guide is ready.
            <br />
            <span style={{ color: C.offWhite }}>Click below to download.</span>
          </h1>

          <p
            style={{ color: C.grey, letterSpacing: "0.06em", maxWidth: "480px" }}
            className="text-sm font-light leading-relaxed mb-10"
          >
            Tap the button below to get your copy of the Made For This career guide.
          </p>

          <a
            href="/ebook.pdf"
            download
            style={{ background: C.red, color: C.offWhite, letterSpacing: "0.12em" }}
            className="inline-block text-xs font-semibold uppercase px-8 py-4 hover:opacity-90 transition-opacity"
          >
            Download the ebook →
          </a>

          {/* Divider */}
          <div
            style={{ borderTop: `1px solid rgba(255,255,255,0.08)` }}
            className="mt-16 pt-12"
          >
            <p
              style={{ color: C.offWhite, fontFamily: "var(--font-serif)", lineHeight: 1.2 }}
              className="text-2xl md:text-3xl font-bold mb-6"
            >
              Ready to go further?{" "}
              <span style={{ background: C.yellow, color: "#1A1A1A", padding: "0 6px" }}>
                The course is open.
              </span>
            </p>
            <p style={{ color: C.grey, letterSpacing: "0.06em" }} className="text-sm font-light leading-relaxed mb-6 max-w-md">
              The ebook is the door. The course is what's on the other side —
              8 weeks of real HubSpot PM training from someone who hires for this exact role.
            </p>
            <a
              href="/"
              style={{ borderColor: "rgba(255,255,255,0.2)", color: C.offWhite, letterSpacing: "0.12em" }}
              className="inline-block border text-xs font-semibold uppercase px-8 py-4 hover:border-white/50 transition-colors"
            >
              Learn about the course →
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer
        style={{ borderTop: `1px solid rgba(255,255,255,0.08)` }}
        className="px-8 md:px-16 py-6 flex items-center justify-between"
      >
        <div
          style={{ color: C.gold, fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          className="text-base font-bold whitespace-nowrap"
        >
          MADE FOR THIS
        </div>
        <div style={{ color: C.grey, letterSpacing: "0.08em" }} className="text-xs uppercase text-right">
          © 2026 Richie Dharma. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
