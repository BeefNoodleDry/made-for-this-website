import Image from "next/image";
import HubSpotFormEbook from "@/components/ui/HubSpotFormEbook";

const C = {
  bg: "#1A1A1A",
  bgAlt: "#111124",
  red: "#CC0000",
  offWhite: "#F0F0F0",
  gold: "#C9A84C",
  grey: "#7A7A7A",
  cream: "#F5F0E8",
  yellow: "#F5E97A",
};

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

export default function EbookPage() {
  return (
    <main style={{ background: C.bg, color: C.offWhite }} className="overflow-x-hidden">

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
        <a
          href="#download"
          style={{ background: C.red, color: C.offWhite, letterSpacing: "0.12em" }}
          className="text-xs font-semibold uppercase px-6 py-2.5 hover:opacity-90 transition-opacity"
        >
          Get the free guide
        </a>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="px-8 md:px-16 pt-24 pb-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div
              style={{ color: C.gold, letterSpacing: "0.14em" }}
              className="text-xs uppercase font-medium mb-6 flex items-center gap-3"
            >
              <span>✦</span> Free Career Guide
            </div>

            <h1
              style={{ color: C.red, fontFamily: "var(--font-serif)", letterSpacing: "-0.02em", lineHeight: 0.95 }}
              className="text-6xl md:text-7xl font-black uppercase mb-6"
            >
              You were<br />
              always<br />
              <span style={{ color: C.offWhite }}>capable.</span>
            </h1>

            <p
              style={{ color: C.offWhite, letterSpacing: "0.06em" }}
              className="text-lg font-light mb-2 leading-snug"
            >
              Nobody showed you the door.
            </p>

            <p
              style={{ color: C.grey, letterSpacing: "0.06em", maxWidth: "480px" }}
              className="text-sm font-light leading-relaxed mb-10 mt-5"
            >
              You coordinate, follow up, manage expectations, and hold the whole operation together —
              while someone else takes the credit and the title.
              <br /><br />
              What you're doing already has a name. It has a career path. And it pays 3–4× what you're earning now.
              <br /><br />
              This free guide is the thing I wish someone had handed me when I was exactly where you are.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#download"
                style={{ background: C.red, color: C.offWhite, letterSpacing: "0.12em" }}
                className="text-xs font-semibold uppercase px-8 py-4 hover:opacity-90 transition-opacity"
              >
                Download the free guide →
              </a>
              <a
                href="#guide"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: C.offWhite, letterSpacing: "0.12em" }}
                className="border text-xs font-semibold uppercase px-8 py-4 hover:border-white/50 transition-colors"
              >
                Richie's story
              </a>
            </div>
          </div>

          {/* Ebook cover */}
          <div className="flex justify-center md:justify-end">
            <div
              style={{
                background: "#232323",
                border: `1px solid rgba(201,168,76,0.25)`,
                aspectRatio: "3/4",
                width: "100%",
                maxWidth: "340px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Placeholder shown until ebook-cover.png is added */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8"
                style={{ background: "#0D0D1A" }}
              >
                <div
                  style={{ color: C.gold, letterSpacing: "0.18em", fontFamily: "var(--font-serif)" }}
                  className="text-xs uppercase font-bold"
                >
                  ✦ Made For This
                </div>
                <div
                  style={{
                    color: C.red,
                    fontFamily: "var(--font-serif)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    textAlign: "center",
                  }}
                  className="text-4xl font-black uppercase"
                >
                  Career<br />Accelerator
                </div>
                <div
                  style={{
                    width: "40px",
                    height: "2px",
                    background: C.gold,
                    opacity: 0.4,
                  }}
                />
                <div
                  style={{ color: C.grey, letterSpacing: "0.12em" }}
                  className="text-xs uppercase text-center"
                >
                  A free guide by<br />Richie Dharma
                </div>
              </div>
              {/* Real cover image — drop public/ebook-cover.png to activate */}
              <Image
                src="/ebook-cover.png"
                alt="Made For This — Career Accelerator ebook"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM ═══ */}
      <section
        style={{
          background: C.bgAlt,
          borderTop: `1px solid rgba(255,255,255,0.06)`,
          borderBottom: `1px solid rgba(255,255,255,0.06)`,
        }}
        className="px-8 md:px-16 py-24"
      >
        <div className="max-w-5xl mx-auto">
          <div
            style={{ color: C.gold, letterSpacing: "0.14em" }}
            className="text-xs uppercase font-medium mb-4 flex items-center gap-3"
          >
            <span>✦</span> The problem
          </div>
          <h2
            style={{ color: C.red, fontFamily: "var(--font-serif)", letterSpacing: "-0.01em" }}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          >
            You're already doing the work.
          </h2>
          <p style={{ color: C.grey, letterSpacing: "0.06em" }} className="text-sm font-light mb-16 max-w-md leading-relaxed">
            Just behind the scenes.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-16">
            <CalloutCard
              title="You coordinate and execute — but the client doesn't know your name"
              body="You make sure the right information gets to the right person at the right time. That is not support work. That is project management."
            />
            <CalloutCard
              title="There's no clear path forward from where you are"
              body="Your role has a ceiling everyone knows about. More effort doesn't mean more income. You're running on a treadmill."
            />
            <CalloutCard
              title="The opportunity exists — nobody told you about it"
              body="HubSpot PM is one of the most in-demand, hardest-to-fill remote roles in the world. Western companies are spending billions on it and failing to find the right people."
            />
          </div>

          {/* Stat pull */}
          <div
            style={{
              borderTop: `1px solid rgba(255,255,255,0.06)`,
              paddingTop: "32px",
            }}
            className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8"
          >
            <div
              style={{ color: C.red, fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}
              className="text-3xl md:text-4xl font-black"
            >
              $500 – $1,200/mth
            </div>
            <div style={{ color: C.gold }} className="text-2xl font-light hidden md:block">→</div>
            <div
              style={{ color: C.offWhite, fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}
              className="text-3xl md:text-4xl font-black"
            >
              $3,500 – $4,800/mth
            </div>
            <div style={{ color: C.grey, letterSpacing: "0.06em" }} className="text-xs font-light md:ml-4">
              One skill set. One system. Up to 4× the income.
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GUIDE ═══ */}
      <section id="guide" className="px-8 md:px-16 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div
              style={{ color: C.gold, letterSpacing: "0.14em" }}
              className="text-xs uppercase font-medium mb-6 flex items-center gap-3"
            >
              <span>✦</span> Your guide
            </div>
            <h2
              style={{ color: C.red, fontFamily: "var(--font-serif)", letterSpacing: "-0.01em" }}
              className="text-4xl font-bold leading-tight mb-8"
            >
              I didn't feel like I was made for this either.
              <br />
              <span style={{ color: C.offWhite }}>Then everything changed.</span>
            </h2>

            <p style={{ color: C.grey, letterSpacing: "0.06em" }} className="text-sm font-light leading-relaxed mb-4">
              I landed in Australia eight years ago with no degree, a suitcase, and enough ambition
              to paper over how terrified I actually was.
            </p>
            <p style={{ color: C.grey, letterSpacing: "0.06em" }} className="text-sm font-light leading-relaxed mb-4">
              My first job was in sales. I was barely hitting targets. Then I noticed something — the
              only system connecting every department, every lead, every dollar, was a CRM called HubSpot.{" "}
              <strong style={{ color: C.offWhite }}>And nobody was running it.</strong>
            </p>
            <p style={{ color: C.grey, letterSpacing: "0.06em" }} className="text-sm font-light leading-relaxed mb-4">
              So I started learning it. I built a nurture sequence. Overnight I went from a struggling
              sales rep to the person who made everyone's numbers better. That was the beginning.
            </p>
            <p style={{ color: C.grey, letterSpacing: "0.06em" }} className="text-sm font-light leading-relaxed mb-10">
              Four years later I'm Head of HubSpot at a Diamond-tier agency in Australia — top 1% of
              HubSpot partners globally. And when I look at Southeast Asia, at the VAs and coordinators
              and BPO workers, I see exactly who I was.{" "}
              <strong style={{ color: C.offWhite }}>
                I wrote this guide because you deserve to know what took me years to figure out.
              </strong>
            </p>

            <div
              className="flex flex-col gap-3"
              style={{ borderTop: `1px solid rgba(255,255,255,0.08)`, paddingTop: "24px" }}
            >
              {[
                "Head of HubSpot, Diamond Agency Australia (Top 1% globally)",
                "Actively hiring HubSpot PMs — I know exactly what employers want",
                "Southeast Asian migrant. I lived every step of this path.",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-start gap-3 text-sm font-light"
                  style={{ color: C.grey, letterSpacing: "0.05em" }}
                >
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
              />
            </div>
            <div
              style={{ background: C.red, bottom: "0", right: "0" }}
              className="absolute px-5 py-3.5 text-xs font-medium leading-snug"
            >
              <div
                style={{ fontFamily: "var(--font-serif)", color: C.offWhite }}
                className="text-base font-bold tracking-tight mb-0.5"
              >
                Richie Dharma
              </div>
              <div style={{ color: "rgba(255,255,255,0.7)", letterSpacing: "0.06em" }} className="text-xs">
                Head of HubSpot · Diamond Agency · Australia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT'S INSIDE ═══ */}
      <section
        style={{
          background: C.bgAlt,
          borderTop: `1px solid rgba(255,255,255,0.06)`,
          borderBottom: `1px solid rgba(255,255,255,0.06)`,
        }}
        className="px-8 md:px-16 py-24"
      >
        <div className="max-w-5xl mx-auto">
          <div
            style={{ color: C.gold, letterSpacing: "0.14em" }}
            className="text-xs uppercase font-medium mb-4 flex items-center gap-3"
          >
            <span>✦</span> Inside the free guide
          </div>
          <h2
            style={{ color: C.red, fontFamily: "var(--font-serif)", letterSpacing: "-0.01em" }}
            className="text-4xl md:text-5xl font-bold mb-16 leading-tight max-w-2xl"
          >
            What you'll learn in this guide
          </h2>

          <div className="flex flex-col gap-12">
            <Insight
              num="01"
              title="The role most people have never heard of"
              body="What a HubSpot Project Manager actually does, why it's one of the most in-demand remote roles available right now, and why almost nobody in your position has been told it exists."
            />
            <div style={{ borderTop: `1px solid rgba(255,255,255,0.06)` }} />
            <Insight
              num="02"
              title="What changes when you make the leap"
              body="A direct before/after comparison: income, title, client relationship, career path, and how you see yourself. One skill set. One system. Up to 4× the income."
            />
            <div style={{ borderTop: `1px solid rgba(255,255,255,0.06)` }} />
            <Insight
              num="03"
              title="What employers are actually looking for"
              body="The gap between a good candidate and a great one has almost nothing to do with certifications. Here's what actually gets people hired — and it isn't what most people think."
            />
            <div style={{ borderTop: `1px solid rgba(255,255,255,0.06)` }} />
            <Insight
              num="04"
              title="Whether you're already closer than you think"
              body="If you've ever coordinated a project, tracked tasks, or stopped something from falling through the cracks, you've already been doing fragments of this job. You just didn't know the name for it."
            />
          </div>
        </div>
      </section>

      {/* ═══ PULL QUOTE ═══ */}
      <section className="px-8 md:px-16 py-24">
        <div className="max-w-3xl mx-auto">
          <div
            style={{ color: C.red, fontFamily: "var(--font-serif)" }}
            className="text-7xl font-black leading-none mb-6"
          >
            "
          </div>
          <p
            style={{ color: C.offWhite, fontFamily: "var(--font-serif)", lineHeight: 1.2 }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            The seat has been empty for years. Companies are paying for software they can't use, hiring
            people who can't deliver on it, and quietly waiting for{" "}
            <span style={{ background: C.yellow, color: "#1A1A1A", padding: "0 6px" }}>
              someone like you to walk through the door.
            </span>
          </p>
          <p style={{ color: C.grey, letterSpacing: "0.12em" }} className="text-xs uppercase mt-6">
            — Richie Dharma
          </p>
        </div>
      </section>

      {/* ═══ DOWNLOAD FORM ═══ */}
      <section
        id="download"
        style={{
          background: C.bgAlt,
          borderTop: `1px solid rgba(255,255,255,0.06)`,
        }}
        className="px-8 md:px-16 py-24"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div
              style={{ color: C.gold, letterSpacing: "0.14em" }}
              className="text-xs uppercase font-medium mb-4 flex items-center gap-3"
            >
              <span>✦</span> Free download
            </div>
            <h2
              style={{ color: C.red, fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}
              className="text-4xl md:text-5xl font-black uppercase mb-5 leading-tight"
            >
              Get the<br />
              <span style={{ color: C.offWhite }}>free guide.</span>
            </h2>
            <p style={{ color: C.grey, letterSpacing: "0.06em" }} className="text-sm font-light leading-relaxed mb-8">
              Everything I wish someone had told me when I was exactly where you are.
              No spam. Instant delivery to your inbox.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "The HubSpot PM role explained — clearly",
                "Before/after income comparison",
                "What employers actually look for",
                "Whether you're already closer than you think",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-light"
                  style={{ color: C.grey, letterSpacing: "0.05em" }}
                >
                  <span style={{ color: C.gold }}>✦</span>
                  {item}
                </div>
              ))}
            </div>
            <div
              style={{ borderTop: `1px solid rgba(255,255,255,0.08)`, paddingTop: "24px" }}
              className="mt-8"
            >
              <a
                href="/"
                style={{ color: C.grey, letterSpacing: "0.08em" }}
                className="text-xs uppercase hover:text-white/70 transition-colors"
              >
                Or learn about the full course →
              </a>
            </div>
          </div>

          <div
            style={{ background: "#232323", border: `1px solid rgba(255,255,255,0.08)` }}
            className="p-8"
          >
            <div style={{ color: C.grey, letterSpacing: "0.14em" }} className="text-xs uppercase mb-1">
              Free — instant delivery
            </div>
            <h3 style={{ color: C.offWhite, fontFamily: "var(--font-serif)" }} className="text-2xl font-bold mb-1.5">
              Download the guide
            </h3>
            <p style={{ color: C.grey, letterSpacing: "0.05em" }} className="text-sm font-light mb-6 leading-relaxed">
              Enter your email and we'll send it straight to your inbox.
            </p>
            <HubSpotFormEbook />
            <p style={{ color: C.grey, letterSpacing: "0.06em" }} className="text-xs text-center mt-4 font-light">
              No commitment. No spam. Just the guide.
            </p>
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
