import Image from "next/image";
import Nav from "@/components/ui/Nav";
import JourneyMap from "@/components/ui/JourneyMap";
import HubSpotForm from "@/components/ui/HubSpotForm";

// ─────────────────────────────────────────────
// STAT CARD
// ─────────────────────────────────────────────
function StatCard({
  num,
  label,
}: {
  num: string;
  label: string;
}) {
  return (
    <div className="border border-gray-100 rounded-sm px-5 py-4 bg-white">
      <div className="font-serif text-2xl font-bold text-ink leading-none mb-1">
        {num}
      </div>
      <div className="text-xs text-muted leading-snug font-light">{label}</div>
    </div>
  );
}

// ─────────────────────────────────────────────
// PROBLEM CARD
// ─────────────────────────────────────────────
function ProblemCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="border border-gray-100 rounded-sm p-6 bg-white hover:border-accent/30 transition-colors group">
      <div className="flex gap-4">
        <div className="w-1 flex-shrink-0 bg-accent group-hover:bg-accent mt-1 transition-all duration-300 group-hover:h-full rounded-full" style={{minHeight: '1.5rem'}} />
        <div>
          <h3 className="font-serif text-lg font-bold text-ink mb-1.5 leading-snug">{title}</h3>
          <p className="text-sm text-muted font-light leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// TRANSFORMATION CARD
// ─────────────────────────────────────────────
function TransformationCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-sm p-5 hover:border-accent/30 hover:shadow-sm transition-all group">
      <div className="text-xl mb-3">{icon}</div>
      <div className="text-sm font-medium text-ink mb-1.5 leading-snug">{title}</div>
      <div className="text-xs text-muted font-light leading-relaxed">{body}</div>
    </div>
  );
}

// ─────────────────────────────────────────────
// PLAN STEP
// ─────────────────────────────────────────────
function PlanStep({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-5">
      <div className="font-serif text-5xl font-black text-accent/15 leading-none flex-shrink-0 w-12">
        {num}
      </div>
      <div className="pt-1">
        <div className="text-sm font-medium text-ink mb-1.5">{title}</div>
        <div className="text-sm text-muted font-light leading-relaxed">{body}</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// CREDENTIAL ROW
// ─────────────────────────────────────────────
function Credential({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 text-sm text-muted font-light">
      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
      {text}
    </div>
  );
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function Home() {
  return (
    <main className="bg-white text-ink overflow-x-hidden">
      <Nav />

      {/* ═══════════════════════════════════
          HERO — Character + Map Visual
          StoryBrand: The ICP is the hero.
          The map makes the journey visible.
      ════════════════════════════════════ */}
      <section className="min-h-screen pt-24 pb-0 px-6 md:px-10 flex flex-col">
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">

          {/* Top text block */}
          <div className="pt-12 md:pt-20 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-accent" />
              <span className="text-xs font-medium tracking-widest uppercase text-accent">
                A course by Richie Dharma
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-black leading-[1.0] tracking-tight mb-6">
              You were always{" "}
              <span className="italic text-accent">capable.</span>
              <br />
              Now it&apos;s time{" "}
              <span className="italic">to be seen.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-xl mb-8">
              You&apos;re a VA, coordinator, or analyst. Skilled, hardworking,
              and stuck behind the scenes.{" "}
              <strong className="text-ink font-medium">
                CRM Project Management
              </strong>{" "}
              is the career path you didn&apos;t know existed. The person who
              runs the system every business depends on, using HubSpot, the
              world&apos;s most adopted CRM. Until now, nobody showed you the door.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#register"
                className="text-xs font-medium tracking-widest uppercase text-white bg-ink px-7 py-3.5 rounded-sm hover:bg-accent transition-colors duration-200"
              >
                Register Your Interest
              </a>
              <a
                href="#guide"
                className="text-xs font-medium tracking-widest uppercase text-ink border border-gray-200 px-7 py-3.5 rounded-sm hover:border-accent hover:text-accent transition-colors duration-200"
              >
                Richie&apos;s Story
              </a>
            </div>
          </div>

          {/* Journey Map — scroll animated */}
          <div className="mt-10 md:mt-12 -mx-6 md:-mx-10">
            <JourneyMap />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="border-y border-gray-100 bg-surface py-8 px-6 md:px-10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="3–4×" label="Income increase vs general VA roles" />
          <StatCard num="288K+" label="Companies globally running HubSpot" />
          <StatCard num="50–70%" label="Of CRM projects fail without a skilled PM" />
          <StatCard num="Top 1%" label="Richie's agency in HubSpot's global network" />
        </div>
      </div>

      {/* ═══════════════════════════════════
          PROBLEM — StoryBrand Step 2
          External, internal, philosophical
      ════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-accent" />
            <span className="text-xs font-medium tracking-widest uppercase text-accent">
              The problem
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-0">
                You&apos;re already doing the work.
                <br />
                <span className="italic text-accent">Just behind the scenes.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <ProblemCard
                title="You're capable but invisible"
                body="You coordinate, analyse, support, and execute. But you're always behind the scenes. The client never knows your name."
              />
              <ProblemCard
                title="There's no clear path forward"
                body="Your current role has a ceiling everyone knows about. More effort doesn't mean more income. You're running on a treadmill."
              />
              <ProblemCard
                title="The opportunity was never shown to you"
                body="HubSpot PM is one of the most in-demand, highest-paid remote roles in the world right now. Most people in your position have never heard of it."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          GUIDE — StoryBrand Step 3
          Richie. Empathy first. Then authority.
      ════════════════════════════════════ */}
      <section
        id="guide"
        className="py-24 px-6 md:px-10 bg-surface border-y border-gray-100"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Photo / video placeholder */}
          <div className="relative">
            {/*
              ════════════════════════════════════════
              RICHIE — ADD YOUR PHOTO OR VIDEO HERE
              ════════════════════════════════════════
              Option A (photo):
                Replace the placeholder div below with:
                <img
                  src="/richie.jpg"
                  alt="Richie Dharma"
                  className="w-full aspect-[3/4] object-cover rounded-sm"
                />

              Option B (YouTube or Loom):
                <div className="relative w-full aspect-[3/4]">
                  <iframe
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    className="absolute inset-0 w-full h-full rounded-sm"
                    allowFullScreen
                  />
                </div>
              ════════════════════════════════════════
            */}
            <div className="relative w-full aspect-[3/4]">
              <Image
                src="/richie.jpg"
                alt="Richie Dharma"
                fill
                className="object-cover object-top rounded-sm"
                quality={90}
                priority
              />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 md:-right-6 bg-accent text-white px-5 py-3.5 rounded-sm text-xs font-medium leading-snug">
              <div className="font-serif text-base font-bold tracking-tight mb-0.5">
                Richie Dharma
              </div>
              Head of HubSpot
              <br />
              Diamond Agency · Australia
            </div>
          </div>

          {/* Content */}
          <div className="pt-4">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-accent" />
              <span className="text-xs font-medium tracking-widest uppercase text-accent">
                Your guide
              </span>
            </div>

            <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight mb-6">
              I didn&apos;t feel like I was{" "}
              <span className="italic text-accent">made for this</span> either.
              <br />
              Then everything changed.
            </h2>

            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              I moved to Australia from Southeast Asia 10 years ago. I was ambitious
              and hungry, but deep down I was terrified that I wasn&apos;t good enough.
              Things here were unfamiliar. I managed to land my first job in sales, and
              frankly, I wasn&apos;t very good at it.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              In a last act of desperation, I started learning the company&apos;s CRM.{" "}
              <strong className="text-ink font-medium">
                HubSpot. I&apos;d never heard of it,
              </strong>{" "}
              but I picked it up fast. Overnight, I became the most important person
              in the business. The CRM is the heart and brain of a company, and at
              that time, nobody was paying attention.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-8">
              Four years later, I&apos;m Head of HubSpot at a Diamond agency in
              Australia, the top 1% of HubSpot&apos;s global partner network.{" "}
              <strong className="text-ink font-medium">
                I&apos;m building this course because I see myself in you.
              </strong>{" "}
              And I know, with everything I have learned and foresee for the future,
              that it&apos;s our time.
            </p>

            <div className="flex flex-col gap-3 pt-6 border-t border-gray-100">
              <Credential text="Head of HubSpot at Diamond Partner Agency, Australia (top 1% globally)" />
              <Credential text="Led global HubSpot consolidations across multiple industries" />
              <Credential text="Actively hiring HubSpot PMs. I know exactly what employers want." />
              <Credential text="Southeast Asian migrant. I've lived the path I'm teaching." />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          PLAN — StoryBrand Step 4
          Three steps. Make it feel possible.
      ════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-accent" />
            <span className="text-xs font-medium tracking-widest uppercase text-accent">
              The plan
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Three steps to becoming the{" "}
                <span className="italic text-accent">
                  systems person every business needs
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-8">
              <PlanStep
                num="01"
                title="Discover the opportunity"
                body="Understand what CRM systems are, why they matter, and why the HubSpot Project Manager role is one of the most in-demand, highest-paid remote positions available to Southeast Asians right now. Almost nobody knows it exists yet."
              />
              <div className="w-px h-6 bg-gray-100 ml-14" />
              <PlanStep
                num="02"
                title="Learn the system"
                body="Master HubSpot and CRM operations from the ground up, the way an employer actually needs you to. Not just the features, but the frameworks, client communication, project ownership, and systems thinking that makes you irreplaceable."
              />
              <div className="w-px h-6 bg-gray-100 ml-14" />
              <PlanStep
                num="03"
                title="Get the role"
                body="Land your first CRM Project Manager position with confidence, backed by real skills, a practical portfolio, and guidance from someone who is actively hiring for this exact role right now."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          TRANSFORMATION — What you'll be able to do
          Added per user feedback: make the after state
          specific and vivid, not just implied.
      ════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-10 bg-surface border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-accent" />
            <span className="text-xs font-medium tracking-widest uppercase text-accent">
              The after
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-end mb-14">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                This is what being{" "}
                <span className="italic text-accent">irreplaceable</span>{" "}
                actually looks like.
              </h2>
            </div>
            <div>
              <p className="text-sm text-muted font-light leading-relaxed">
                After Made For This, you don&apos;t just understand HubSpot or CRM systems.
                You become the person a manager turns to when something needs to get done.
                The conduit between every team, every tool, every vendor. The one who
                owns the outcome, talks to the client, and holds the whole system together.
                That person has a title. A salary. And is in serious demand right now.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <TransformationCard
              icon="🎯"
              title="Show up to client calls and run them"
              body="Walk into a kickoff, a project review, or a scope conversation with confidence. You lead it. You set the agenda. You close with clear next steps."
            />
            <TransformationCard
              icon="🗺️"
              title="Build a Customer Journey Map from scratch"
              body="Design how a customer moves through a business, from first touch to loyal client, and map that entire journey inside a CRM system."
            />
            <TransformationCard
              icon="🔗"
              title="Be the bridge between every team"
              body="Sit between sales, marketing, operations, and the vendor team. Translate between them. Own the process that connects them all."
            />
            <TransformationCard
              icon="🛡️"
              title="Handle scope creep without flinching"
              body="Recognise when a project is growing beyond its boundaries, have the conversation, reset expectations, and keep the engagement on track."
            />
            <TransformationCard
              icon="🧠"
              title="Diagnose and fix broken systems"
              body="Audit a CRM that isn&apos;t working, identify exactly what&apos;s wrong, and build a clear plan to fix it in language a founder can understand."
            />
            <TransformationCard
              icon="📈"
              title="Become the person managers rely on"
              body="Not the person who waits for instructions. The one who gets called when it&apos;s complicated, when it matters, when it has to get done right."
            />
          </div>

          {/* Richie's voice — the bottom line */}
          <div className="mt-12 border-t border-gray-100 pt-10 max-w-2xl">
            <p className="font-serif text-xl md:text-2xl font-bold text-ink leading-snug">
              &ldquo;This isn&apos;t a HubSpot course. It&apos;s a course on how to
              become the most valuable person in any room that runs on a CRM system.
              And right now, that&apos;s almost every room.&rdquo;
            </p>
            <p className="text-sm text-muted font-light mt-4">
              Richie Dharma, Head of HubSpot · Diamond Partner Agency · Australia
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          STAKES — StoryBrand Step 6 & 7
          Failure vs Success
      ════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-10 bg-ink">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Failure */}
          <div>
            <div className="text-xs font-medium tracking-widest uppercase text-white/30 mb-4">
              If you do nothing
            </div>
            <h3 className="font-serif text-2xl font-bold text-white/40 line-through decoration-accent/40 mb-5 leading-tight">
              Still behind the scenes.
              <br />
              Still underpaid.
            </h3>
            <div className="flex flex-col gap-3">
              {[
                "Invisible to the clients who need you most",
                "A ceiling that never moves no matter how hard you work",
                "Watching others step into roles you were built for",
                "The opportunity passes. Someone else takes the seat.",
              ].map((item) => (
                <div
                  key={item}
                  className="text-sm text-white/30 pl-4 border-l border-white/10 font-light leading-snug"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Success */}
          <div>
            <div className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
              With Made For This
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-5 leading-tight">
              Customer-facing. Trusted.
              <br />
              <span className="italic text-accent">
                Paid what you&apos;re worth.
              </span>
            </h3>
            <div className="flex flex-col gap-3">
              {[
                "The client knows your name and asks for you specifically",
                "3–4× the income of a general VA role",
                "A clear career path with real room to grow into leadership",
                "The most valuable person in the room. You run the system.",
              ].map((item) => (
                <div
                  key={item}
                  className="text-sm text-white/70 pl-4 border-l-2 border-accent font-light leading-snug"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          REGISTER — StoryBrand Step 5
          The form. One clear ask.
      ════════════════════════════════════ */}
      <section id="register" className="py-24 px-6 md:px-10 bg-surface border-t border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-accent" />
              <span className="text-xs font-medium tracking-widest uppercase text-accent">
                Founding cohort
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-black leading-tight tracking-tight mb-5">
              You were{" "}
              <span className="italic text-accent">made for this.</span>
            </h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Register your interest in the Made For This founding cohort.
              Limited seats. Real skills. A career path that was always waiting
              for you. You just needed someone to show you the door.
            </p>

            <div className="flex flex-col gap-2.5">
              {[
                "No prior HubSpot experience needed",
                "Taught by someone actively hiring for this role",
                "Southeast Asian community. You belong here.",
                "Founding cohort pricing. The lowest it will ever be.",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-muted font-light">
                  <span className="text-accent font-medium">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right — HubSpot form */}
          <div className="bg-white border border-gray-100 rounded-sm p-8 shadow-sm">
            <div className="text-xs font-medium tracking-widest uppercase text-muted mb-1">
              Limited seats
            </div>
            <h3 className="font-serif text-2xl font-bold text-ink mb-1.5">
              Register your interest
            </h3>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Be first to know when Made For This opens. No spam, just the
              information you need, when you need it.
            </p>

            {/*
              ════════════════════════════════════════
              HUBSPOT FORM EMBED — PASTE YOUR CODE HERE
              ════════════════════════════════════════
              Step 1: In HubSpot → Marketing → Forms
              Step 2: Create or select your enquiry form
              Step 3: Click "Share" → "Embed code"
              Step 4: Paste the full <script> embed below,
                      replacing the placeholder div.
              The globals.css file already contains
              overrides to style the form to match.
              ════════════════════════════════════════
            */}
            <HubSpotForm />

            <p className="text-xs text-muted text-center mt-4 font-light">
              No commitment required. No spam. Just opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          FINAL CTA — Direct. Warm. Personal.
      ════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-10 bg-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
            It&apos;s our time.
            <br />
            <span className="italic text-accent">And I mean that.</span>
          </h2>
          <p className="text-sm text-muted font-light leading-relaxed mb-8">
            We were never behind. We were just never shown the door.
          </p>
          <a
            href="#register"
            className="inline-block text-xs font-medium tracking-widest uppercase text-white bg-ink px-10 py-4 rounded-sm hover:bg-accent transition-colors duration-200"
          >
            Register Your Interest
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 px-6 md:px-10 py-6 flex items-center justify-between bg-white">
        <div className="font-serif text-base font-bold text-ink">
          Made For <span className="italic text-accent">This</span>
        </div>
        <div className="text-xs text-muted font-light">
          © 2026 Richie Dharma. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
