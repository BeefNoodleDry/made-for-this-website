import HubSpotForm from "@/components/ui/HubSpotForm";
import Image from "next/image";

// ─────────────────────────────────────────────
// DESIGN SYSTEM — MadeForThis_DesignPrinciples.md
// Background: #1A1A1A | Headlines: #CC0000 | Body: #F0F0F0
// Accent/Gold: #C9A84C | Card surface: #F5F0E8 | Muted: #7A7A7A
// ─────────────────────────────────────────────

const C = {
  bg: "#1A1A1A",
  bgAlt: "#111124",
  red: "#CC0000",
  offWhite: "#F0F0F0",
  gold: "#C9A84C",
  goldLight: "#E8C97A",
  grey: "#7A7A7A",
  cream: "#F5F0E8",
  yellow: "#F5E97A",
};

// ─────────────────────────────────────────────
// STAT CARD
// ─────────────────────────────────────────────
function StatCard({ num, label }: { num: string; label: string }) {
  return (
    <div
      style={{
        borderColor: "rgba(201,168,76,0.2)",
        background: "rgba(255,255,255,0.03)",
      }}
      className="border rounded-none p-6"
    >
      <div
        style={{ color: C.red, fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}
        className="text-3xl font-black leading-none mb-2"
      >
        {num}
      </div>
      <div style={{ color: C.grey, letterSpacing: "0.08em" }} className="text-xs font-light leading-snug uppercase">
        {label}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// NUMBERED INSIGHT
// ─────────────────────────────────────────────
function Insight({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className="flex gap-6">
      <div
        style={{ color: C.red, fontFamily: "var(--font-serif)", lineHeight: 1 }}
        className="text-5xl font-black flex-shrink-0 w-12"
      >
        {num}
      </div>
      <div className="pt-1">
        <div style={{ color: C.offWhite }} className="font-semibold text-base mb-2 leading-snug">
          {title}
        </div>
        <div style={{ color: C.grey, letterSpacing: "0.06em" }} className="text-sm font-light leading-relaxed">
          {body}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// CALLOUT CARD
// ─────────────────────────────────────────────
function CalloutCard({ title, body }: { title: string; body: string }) {
  return (
    <div
      style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }}
      className="border p-6"
    >
      <div className="flex items-start gap-3 mb-3">
        <span style={{ color: C.red }} className="text-lg font-black leading-none mt-0.5">→</span>
        <div style={{ color: C.offWhite }} className="font-semibold text-sm leading-snug">{title}</div>
      </div>
      <div style={{ color: C.grey, letterSpacing: "0.06em" }} className="text-sm font-light leading-relaxed pl-6">
        {body}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function Home() {
  return (
    <main style={{ background: C.bg, color: C.offWhite }} className="overflow-x-hidden">

      {/* ═══ NAV ═══ */}
      <nav className="px-8 md:px-16 py-5 flex items-center justify-between border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div style={{ color: C.gold, fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }} className="text-sm md:text-base font-bold whitespace-nowrap">
          MADE FOR THIS
        </div>
        <a
          href="#register"
          style={{ background: C.red, color: C.offWhite, letterSpacing: "0.12em" }}
          className="text-xs font-semibold uppercase px-6 py-2.5 hover:opacity-90 transition-opacity"
        >
          Register Interest
        </a>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="px-8 md:px-16 pt-24 pb-20">
        <div style={{ color: C.gold, letterSpacing: "0.14em" }} className="text-xs uppercase font-medium mb-6 flex items-center gap-3">
          <span style={{ color: C.gold }}>✦</span> A course by Richie Dharma
        </div>

        <h1
          style={{ color: C.red, fontFamily: "var(--font-serif)", letterSpacing: "-0.02em", lineHeight: 0.95 }}
          className="text-6xl md:text-8xl font-black uppercase mb-8"
        >
          You were<br />
          always<br />
          <span style={{ color: C.offWhite }}>capable.</span>
        </h1>

        <p style={{ color: C.offWhite, letterSpacing: "0.07em", maxWidth: "540px" }} className="text-base font-light leading-relaxed mb-10">
          You're a VA, coordinator, or analyst. Skilled, hardworking, and stuck behind the scenes.
          CRM Project Management is the career path you didn't know existed.
          Until now, nobody showed you the door.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#register"
            style={{ background: C.red, color: C.offWhite, letterSpacing: "0.12em" }}
            className="text-xs font-semibold uppercase px-8 py-4 hover:opacity-90 transition-opacity"
          >
            Register Your Interest
          </a>
          <a
            href="#guide"
            style={{ borderColor: "rgba(255,255,255,0.2)", color: C.offWhite, letterSpacing: "0.12em" }}
            className="border text-xs font-semibold uppercase px-8 py-4 hover:border-white/50 transition-colors"
          >
            Richie's Story
          </a>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="px-8 md:px-16 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatCard num="3–4×" label="Income increase vs general VA roles" />
          <StatCard num="288K+" label="Companies globally running HubSpot" />
          <StatCard num="50–70%" label="Of CRM projects fail without a skilled PM" />
          <StatCard num="Top 1%" label="Richie's agency in HubSpot's global network" />
        </div>
      </section>

      {/* ═══ PULL QUOTE ═══ */}
      <section style={{ background: C.bgAlt, borderTop: `1px solid rgba(255,255,255,0.06)`, borderBottom: `1px solid rgba(255,255,255,0.06)` }} className="px-8 md:px-16 py-20">
        <div className="max-w-3xl mx-auto">
          <div style={{ color: C.red, fontFamily: "var(--font-serif)" }} className="text-7xl font-black leading-none mb-6">"</div>
          <p style={{ color: C.offWhite, fontFamily: "var(--font-serif)", lineHeight: 1.2 }} className="text-3xl md:text-4xl font-bold mb-2">
            You were never behind.{" "}
            <span style={{ background: C.yellow, color: "#1A1A1A", padding: "0 6px" }}>
              You were just never shown the door.
            </span>
          </p>
          <p style={{ color: C.grey, letterSpacing: "0.12em" }} className="text-xs uppercase mt-6">
            — Richie Dharma
          </p>
        </div>
      </section>

      {/* ═══ PROBLEM ═══ */}
      <section className="px-8 md:px-16 py-24">
        <div className="max-w-5xl mx-auto">
          <div style={{ color: C.gold, letterSpacing: "0.14em" }} className="text-xs uppercase font-medium mb-4 flex items-center gap-3">
            <span>✦</span> The problem
          </div>
          <h2 style={{ color: C.red, fontFamily: "var(--font-serif)", letterSpacing: "-0.01em" }} className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            You're already doing the work.
          </h2>
          <p style={{ color: C.grey, letterSpacing: "0.06em" }} className="text-sm font-light mb-16 max-w-md leading-relaxed">
            Just behind the scenes.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <CalloutCard
              title="You're capable but invisible"
              body="You coordinate, analyse, support, and execute. But you're always behind the scenes. The client never knows your name."
            />
            <CalloutCard
              title="There's no clear path forward"
              body="Your current role has a ceiling everyone knows about. More effort doesn't mean more income. You're running on a treadmill."
            />
            <CalloutCard
              title="The opportunity was never shown to you"
              body="HubSpot PM is one of the most in-demand, highest-paid remote roles in the world right now. Most people in your position have never heard of it."
            />
          </div>
        </div>
      </section>

      {/* ═══ GUIDE ═══ */}
      <section
        id="guide"
        style={{ background: C.bgAlt, borderTop: `1px solid rgba(255,255,255,0.06)`, borderBottom: `1px solid rgba(255,255,255,0.06)` }}
        className="px-8 md:px-16 py-24"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div style={{ color: C.gold, letterSpacing: "0.14em" }} className="text-xs uppercase font-medium mb-6 flex items-center gap-3">
              <span>✦</span> Your guide
            </div>
            <h2 style={{ color: C.red, fontFamily: "var(--font-serif)", letterSpacing: "-0.01em" }} className="text-4xl font-bold leading-tight mb-8">
              I didn't feel like I was made for this either.
              <br />
              <span style={{ color: C.offWhite }}>Then everything changed.</span>
            </h2>
            <p style={{ color: C.grey, letterSpacing: "0.06em" }} className="text-sm font-light leading-relaxed mb-4">
              I moved to Australia from Southeast Asia 10 years ago. I was ambitious and hungry, but deep down I was terrified that I wasn't good enough. Things here were unfamiliar. I managed to land my first job in sales, and frankly, I wasn't very good at it.
            </p>
            <p style={{ color: C.grey, letterSpacing: "0.06em" }} className="text-sm font-light leading-relaxed mb-4">
              In a last act of desperation, I started learning the company's CRM.{" "}
              <strong style={{ color: C.offWhite }}>HubSpot. I'd never heard of it,</strong>{" "}
              but I picked it up fast. Overnight, I became the most important person in the business. The CRM is the heart and brain of a company, and at that time, nobody was paying attention.
            </p>
            <p style={{ color: C.grey, letterSpacing: "0.06em" }} className="text-sm font-light leading-relaxed mb-10">
              Four years later, I'm Head of HubSpot at a Diamond agency in Australia, the top 1% of HubSpot's global partner network.{" "}
              <strong style={{ color: C.offWhite }}>I'm building this course because I see myself in you.</strong>{" "}
              And I know, with everything I have learned and foresee for the future, that it's our time.
            </p>

            <div className="flex flex-col gap-3" style={{ borderTop: `1px solid rgba(255,255,255,0.08)`, paddingTop: "24px" }}>
              {[
                "Head of HubSpot at Diamond Partner Agency, Australia (top 1% globally)",
                "Led global HubSpot consolidations across multiple industries",
                "Actively hiring HubSpot PMs. I know exactly what employers want.",
                "Southeast Asian migrant. I've lived the path I'm teaching.",
              ].map((text) => (
                <div key={text} className="flex items-start gap-3 text-sm font-light" style={{ color: C.grey, letterSpacing: "0.05em" }}>
                  <span style={{ color: C.gold }} className="mt-0.5 flex-shrink-0">✦</span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="relative">
            <div style={{ background: "#232323", aspectRatio: "4/5" }} className="w-full overflow-hidden relative">
              <Image
                src="/richie.jpg"
                alt="Richie Dharma"
                fill
                className="object-cover"
                style={{ filter: "grayscale(20%)", objectPosition: "50% 65%" }}
                quality={90}
                priority
              />
            </div>
            <div
              style={{ background: C.red, bottom: "0", right: "0" }}
              className="absolute px-5 py-3.5 text-xs font-medium leading-snug"
            >
              <div style={{ fontFamily: "var(--font-serif)", color: C.offWhite }} className="text-base font-bold tracking-tight mb-0.5">
                Richie Dharma
              </div>
              <div style={{ color: "rgba(255,255,255,0.7)", letterSpacing: "0.06em" }} className="text-xs">
                Head of HubSpot · Diamond Agency · Australia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLAN ═══ */}
      <section className="px-8 md:px-16 py-24">
        <div className="max-w-5xl mx-auto">
          <div style={{ color: C.gold, letterSpacing: "0.14em" }} className="text-xs uppercase font-medium mb-4 flex items-center gap-3">
            <span>✦</span> The plan
          </div>
          <h2 style={{ color: C.red, fontFamily: "var(--font-serif)", letterSpacing: "-0.01em" }} className="text-4xl md:text-5xl font-bold mb-16 leading-tight max-w-2xl">
            Three steps to becoming the systems person every business needs.
          </h2>

          <div className="flex flex-col gap-12">
            <Insight
              num="01"
              title="Discover the opportunity"
              body="Understand what CRM systems are, why they matter, and why the HubSpot Project Manager role is one of the most in-demand, highest-paid remote positions available to Southeast Asians right now. Almost nobody knows it exists yet."
            />
            <div style={{ borderTop: `1px solid rgba(255,255,255,0.06)` }} />
            <Insight
              num="02"
              title="Learn the system"
              body="Master HubSpot and CRM operations from the ground up, the way an employer actually needs you to. Not just the features, but the frameworks, client communication, project ownership, and systems thinking that makes you irreplaceable."
            />
            <div style={{ borderTop: `1px solid rgba(255,255,255,0.06)` }} />
            <Insight
              num="03"
              title="Get the role"
              body="Land your first CRM Project Manager position with confidence, backed by real skills, a practical portfolio, and guidance from someone who is actively hiring for this exact role right now."
            />
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ═══ */}
      <section style={{ background: C.bgAlt, borderTop: `1px solid rgba(255,255,255,0.06)`, borderBottom: `1px solid rgba(255,255,255,0.06)` }} className="px-8 md:px-16 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

          {/* Before */}
          <div style={{ background: C.cream }} className="p-8">
            <div style={{ color: "#1A1A1A", letterSpacing: "0.16em" }} className="text-xs font-black uppercase mb-4">Before</div>
            <h3 style={{ color: "#1A1A1A", fontFamily: "var(--font-serif)", textDecoration: "line-through", textDecorationColor: C.red }} className="text-2xl font-bold mb-6 leading-tight">
              Still behind the scenes.<br />Still underpaid.
            </h3>
            <div className="flex flex-col gap-3">
              {[
                "Invisible to the clients who need you most",
                "A ceiling that never moves no matter how hard you work",
                "Watching others step into roles you were built for",
                "The opportunity passes. Someone else takes the seat.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-light" style={{ color: "#444", letterSpacing: "0.04em" }}>
                  <span style={{ color: C.red }} className="mt-0.5 flex-shrink-0">→</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div style={{ background: C.cream }} className="p-8">
            <div style={{ color: C.red, letterSpacing: "0.16em" }} className="text-xs font-black uppercase mb-4">After</div>
            <h3 style={{ color: "#1A1A1A", fontFamily: "var(--font-serif)" }} className="text-2xl font-bold mb-6 leading-tight">
              Customer-facing. Trusted.<br /><span style={{ color: C.red }}>Paid what you're worth.</span>
            </h3>
            <div className="flex flex-col gap-3">
              {[
                "The client knows your name and asks for you specifically",
                "3–4× the income of a general VA role",
                "A clear career path with real room to grow into leadership",
                "The most valuable person in the room. You run the system.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-light" style={{ color: "#444", letterSpacing: "0.04em" }}>
                  <span style={{ color: C.red }} className="mt-0.5 flex-shrink-0">→</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CLOSING PULL QUOTE ═══ */}
      <section className="px-8 md:px-16 py-24">
        <div className="max-w-3xl mx-auto">
          <div style={{ color: C.red, fontFamily: "var(--font-serif)" }} className="text-7xl font-black leading-none mb-6">"</div>
          <p style={{ color: C.offWhite, fontFamily: "var(--font-serif)", lineHeight: 1.15 }} className="text-3xl md:text-4xl font-bold mb-8">
            This isn't a HubSpot course. It's a course on how to become the most valuable person in any room that runs on a CRM system.{" "}
            <span style={{ background: C.yellow, color: "#1A1A1A", padding: "0 4px" }}>
              And right now, that's almost every room.
            </span>
          </p>
          <p style={{ color: C.red, letterSpacing: "0.12em" }} className="text-sm uppercase font-semibold">
            Richie Dharma
          </p>
          <p style={{ color: C.grey, letterSpacing: "0.10em" }} className="text-xs uppercase mt-1">
            Head of HubSpot · Diamond Partner Agency · Australia
          </p>
        </div>
      </section>

      {/* ═══ REGISTER ═══ */}
      <section
        id="register"
        style={{ background: C.bgAlt, borderTop: `1px solid rgba(255,255,255,0.06)` }}
        className="px-8 md:px-16 py-24"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div style={{ color: C.gold, letterSpacing: "0.14em" }} className="text-xs uppercase font-medium mb-4 flex items-center gap-3">
              <span>✦</span> Founding cohort
            </div>
            <h2 style={{ color: C.red, fontFamily: "var(--font-serif)", letterSpacing: "-0.01em" }} className="text-4xl md:text-5xl font-black uppercase mb-5 leading-tight">
              You were made<br />
              <span style={{ color: C.offWhite }}>for this.</span>
            </h2>
            <p style={{ color: C.grey, letterSpacing: "0.06em" }} className="text-sm font-light leading-relaxed mb-8">
              Register your interest in the Made For This founding cohort.
              Limited seats. Real skills. A career path that was always waiting for you.
              You just needed someone to show you the door.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "No prior HubSpot experience needed",
                "Taught by someone actively hiring for this role",
                "Southeast Asian community. You belong here.",
                "Founding cohort pricing. The lowest it will ever be.",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-light" style={{ color: C.grey, letterSpacing: "0.05em" }}>
                  <span style={{ color: C.gold }}>✦</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#232323", border: `1px solid rgba(255,255,255,0.08)` }} className="p-8">
            <div style={{ color: C.grey, letterSpacing: "0.14em" }} className="text-xs uppercase mb-1">Limited seats</div>
            <h3 style={{ color: C.offWhite, fontFamily: "var(--font-serif)" }} className="text-2xl font-bold mb-1.5">
              Register your interest
            </h3>
            <p style={{ color: C.grey, letterSpacing: "0.05em" }} className="text-sm font-light mb-6 leading-relaxed">
              Be first to know when Made For This opens. No spam, just the information you need, when you need it.
            </p>
            <HubSpotForm />
            <p style={{ color: C.grey, letterSpacing: "0.06em" }} className="text-xs text-center mt-4 font-light">
              No commitment required. No spam. Just opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ borderTop: `1px solid rgba(255,255,255,0.08)` }} className="px-8 md:px-16 py-6 flex items-center justify-between">
        <div style={{ color: C.gold, fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }} className="text-base font-bold whitespace-nowrap">
          MADE FOR THIS
        </div>
        <div style={{ color: C.grey, letterSpacing: "0.08em" }} className="text-xs uppercase text-right">
          © 2026 Richie Dharma. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
