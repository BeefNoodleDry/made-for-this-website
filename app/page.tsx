import Nav from "@/components/ui/Nav";
import JourneyMap from "@/components/ui/JourneyMap";
import HubSpotForm from "@/components/ui/HubSpotForm";

// ─────────────────────────────────────────────
// FEATURE CARD (dark grid)
// ─────────────────────────────────────────────
function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="border border-white/10 rounded-xl p-6 bg-white/5">
      <div className="mb-4 text-white/60">{icon}</div>
      <div className="text-sm font-medium text-white mb-2">{title}</div>
      <div className="text-sm text-white/50 font-light leading-relaxed">{body}</div>
    </div>
  );
}

// ─────────────────────────────────────────────
// PLAN CARD (dark 3-card)
// ─────────────────────────────────────────────
function PlanCard({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
        <span className="font-serif text-2xl font-black text-white/60">{num}</span>
      </div>
      <div>
        <div className="text-base font-medium text-white mb-2">{title}</div>
        <div className="text-sm text-white/50 font-light leading-relaxed">{body}</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// CREDENTIAL ROW
// ─────────────────────────────────────────────
function Credential({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 text-sm text-muted font-light border-l-2 border-accent pl-3 py-0.5">
      {text}
    </div>
  );
}

// ─────────────────────────────────────────────
// FAQ ITEM
// ─────────────────────────────────────────────
function FAQItem({
  num,
  question,
  answer,
}: {
  num: number;
  question: string;
  answer: string;
}) {
  return (
    <div className="flex gap-6 py-6 border-b border-gray-100 last:border-b-0">
      <div className="text-sm font-light text-muted w-6 flex-shrink-0 pt-0.5">{num}</div>
      <div>
        <div className="text-sm font-medium text-ink mb-2">{question}</div>
        <div className="text-sm text-muted font-light leading-relaxed">{answer}</div>
      </div>
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
          HERO
      ════════════════════════════════════ */}
      <section className="min-h-screen pt-24 pb-0 px-6 md:px-10 flex flex-col">
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">

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
              Now it&apos;s time
              <br />
              <span className="highlight-marker italic">to be seen.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-xl mb-8">
              You&apos;re a VA, coordinator, or analyst. Skilled, hardworking,
              and stuck behind the scenes.{" "}
              <strong className="text-ink font-medium">
                HubSpot Project Management
              </strong>{" "}
              is the career path you didn&apos;t know existed. Until now.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#register"
                className="text-xs font-medium tracking-widest uppercase text-white bg-ink px-7 py-3.5 rounded-full hover:bg-accent transition-colors duration-200"
              >
                Register Your Interest
              </a>
              <a
                href="#guide"
                className="text-xs font-medium tracking-widest uppercase text-ink border border-gray-200 px-7 py-3.5 rounded-full hover:border-accent hover:text-accent transition-colors duration-200"
              >
                Richie&apos;s Story
              </a>
            </div>
          </div>

          <div className="mt-10 md:mt-12 -mx-6 md:-mx-10">
            <JourneyMap />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          BENTO GRID — dark stats/facts
      ════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-10 bg-[#1A1714]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {/* Row 1: 3 stat cards */}
            <div className="border border-white/10 rounded-xl p-6 bg-white/5">
              <div className="font-serif text-4xl font-black text-white leading-none mb-2">3–4×</div>
              <div className="text-sm text-white/50 font-light leading-snug">Income increase vs general VA roles</div>
            </div>

            <div className="border border-white/10 rounded-xl p-6 bg-white/5">
              <div className="font-serif text-4xl font-black text-white leading-none mb-2">288K+</div>
              <div className="text-sm text-white/50 font-light leading-snug">Companies globally running HubSpot</div>
            </div>

            <div className="border border-white/10 rounded-xl p-6 bg-white/5">
              <div className="font-serif text-4xl font-black text-white leading-none mb-2">Top 1%</div>
              <div className="text-sm text-white/50 font-light leading-snug">Richie&apos;s agency in HubSpot&apos;s global network</div>
            </div>

            {/* Row 2: wide card + narrow card */}
            <div className="sm:col-span-2 border border-white/10 rounded-xl p-6 bg-white/5 flex flex-col justify-between gap-6">
              <div>
                <div className="font-serif text-3xl font-black text-white leading-tight mb-2">50–70%</div>
                <div className="text-sm text-white/50 font-light leading-snug max-w-xs">Of CRM projects fail without a skilled project manager. The gap is the opportunity.</div>
              </div>
              {/* Simple line-chart decoration */}
              <svg viewBox="0 0 240 60" className="w-full max-w-xs opacity-30" fill="none">
                <polyline
                  points="0,55 30,45 60,48 90,30 120,35 150,15 180,20 210,8 240,12"
                  stroke="#C4622D"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="border border-white/10 rounded-xl p-6 bg-white/5 flex flex-col justify-between">
              <div>
                <div className="text-sm font-medium text-white mb-2">Southeast Asian community</div>
                <div className="text-sm text-white/50 font-light leading-snug">Built for people who were never shown the door.</div>
              </div>
              {/* Avatar stack placeholder */}
              <div className="flex -space-x-2 mt-4">
                {["#C4622D", "#7A6F65", "#2C2420"].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#1A1714] flex items-center justify-center text-white text-xs font-medium"
                    style={{ backgroundColor: color }}
                  >
                    {["R", "A", "M"][i]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          HIGHLIGHT TEXT BLOCK
      ════════════════════════════════════ */}
      <section className="dot-grid py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-3xl md:text-5xl font-bold leading-[1.2] tracking-tight text-ink">
            You were never behind. We were just never shown{" "}
            <span className="highlight-marker">the door that was always ours.</span>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════
          PROBLEM — dark 3×2 feature grid
      ════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-10 bg-[#1A1714]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">The problem</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
              You&apos;re doing the work.
              <br />
              Someone else is{" "}
              <span className="italic text-accent">getting paid for it.</span>
            </h2>
            <p className="mt-4 text-sm text-white/50 font-light max-w-xl mx-auto leading-relaxed">
              The problem isn&apos;t your effort. It&apos;s the system. Nobody showed you the way out.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <FeatureCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" />
                </svg>
              }
              title="You're capable but invisible"
              body="You coordinate, analyse, support, and execute. But you're always behind the scenes. The client never knows your name."
            />
            <FeatureCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              }
              title="There's no clear path forward"
              body="Your current role has a ceiling everyone knows about. More effort doesn't mean more income. You're running on a treadmill."
            />
            <FeatureCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2v20M2 12h20" />
                </svg>
              }
              title="The opportunity was never shown to you"
              body="HubSpot PM is one of the most in-demand, highest-paid remote roles in the world right now. Most people in your position have never heard of it."
            />
            <FeatureCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              }
              title="HubSpot PM is the fastest growing remote role"
              body="Demand for HubSpot specialists is outpacing supply. Companies are hiring now and can't find qualified people."
            />
            <FeatureCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              }
              title="No degree required"
              body="Skills and systems beat credentials here. The HubSpot PM role rewards people who learn fast and execute well, not those with the right certificate."
            />
            <FeatureCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
                </svg>
              }
              title="The barrier is awareness, not ability"
              body="You already have what it takes. The only thing missing is someone who knows the path and is willing to show it to you."
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          GUIDE — Richie's Story
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
                  className="w-full aspect-[3/4] object-cover rounded-xl"
                />

              Option B (YouTube or Loom):
                <div className="relative w-full aspect-[3/4]">
                  <iframe
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    className="absolute inset-0 w-full h-full rounded-xl"
                    allowFullScreen
                  />
                </div>
              ════════════════════════════════════════
            */}
            <img
              src="/richie.jpg"
              alt="Richie Dharma"
              className="w-full aspect-[3/4] object-cover object-top rounded-xl"
            />

            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 md:-right-6 bg-accent text-white px-5 py-3.5 rounded-xl text-xs font-medium leading-snug shadow-lg">
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
              I didn&apos;t feel{" "}
              <span className="italic text-accent">made for this</span> either.
              <br />
              Then everything changed.
            </h2>

            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              I moved to Australia from Southeast Asia seven years ago. Ambitious,
              hungry and quietly terrified I wasn&apos;t enough. I got a sales
              job. I wasn&apos;t very good at it.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              In desperation, I started learning the company&apos;s CRM.{" "}
              <strong className="text-ink font-medium">
                HubSpot. I&apos;d never heard of it.
              </strong>{" "}
              I picked it up fast. Overnight, I became the most important person
              in the business. The CRM is the heart and brain of a company. Nobody was watching it.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-8">
              Four years later, I&apos;m Head of HubSpot at a Diamond agency in
              Australia, the top 1% of HubSpot&apos;s global partner network.{" "}
              <strong className="text-ink font-medium">
                I&apos;m building this course because I see myself in you.
              </strong>{" "}
              And I know, with everything I have, that it&apos;s our time.
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
          PLAN — dark 3-card features
      ════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-10 bg-[#1A1714]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">The plan</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
              Three steps to becoming a{" "}
              <span className="italic text-accent">HubSpot Project Manager</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PlanCard
              num="01"
              title="Discover the opportunity"
              body="Understand what HubSpot is, why it matters, and why the HubSpot PM role is one of the most in-demand, highest-paid remote positions available to Southeast Asians right now."
            />
            <PlanCard
              num="02"
              title="Learn the system"
              body="Master HubSpot from the ground up, the way an employer actually needs you to. Not just the features, but the frameworks, client communication, and project ownership that makes you irreplaceable."
            />
            <PlanCard
              num="03"
              title="Get the role"
              body="Land your first HubSpot PM position with confidence, backed by real skills, a portfolio, and guidance from someone actively hiring for this exact role right now."
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          STAKES — Failure vs Success
      ════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-10 bg-[#1A1714]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Failure */}
          <div className="border border-white/10 rounded-xl p-8">
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
          <div className="border border-white/10 rounded-xl p-8">
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
          HORIZONTAL CTA BANNER
      ════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-50 rounded-2xl px-8 md:px-12 py-10 grid md:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div>
              <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-ink mb-3">
                Register for the founding cohort
              </h2>
              <p className="text-sm text-muted font-light leading-relaxed mb-6">
                Limited seats. Real skills. The career path that was always waiting for you.
              </p>
              <a
                href="#register"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-white bg-ink px-6 py-3 rounded-full hover:bg-accent transition-colors duration-200"
              >
                Register Interest
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Right — checklist */}
            <div className="flex flex-col gap-3">
              {[
                "No prior HubSpot experience needed",
                "Taught by someone actively hiring for this role",
                "Southeast Asian community. You belong here.",
                "Founding cohort pricing. The lowest it will ever be.",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-muted font-light">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C4622D" strokeWidth="2" className="flex-shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          REGISTER — The form
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
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
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
          FAQ
      ════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-gray-100 rounded-full px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-muted mb-5">
              FAQ
            </span>
            <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight text-ink mb-3">
              Common Questions &amp; Answers
            </h2>
            <p className="text-sm text-muted font-light">
              Everything you need to know before you register.
            </p>
          </div>

          <div className="divide-y divide-gray-100">
            <FAQItem
              num={1}
              question="Do I need HubSpot experience?"
              answer="No prior experience needed. The course starts from zero and builds up systematically. All you need is a willingness to learn and apply."
            />
            <FAQItem
              num={2}
              question="Is this only for Southeast Asians?"
              answer="The course is built with the Southeast Asian experience in mind, but anyone is welcome. The skills, the path, and the community are open to all."
            />
            <FAQItem
              num={3}
              question="What will I be able to do after?"
              answer="You'll be equipped to apply for HubSpot PM roles, manage CRM projects from start to finish, and present yourself as a specialist, not just a generalist VA."
            />
            <FAQItem
              num={4}
              question="When does the course open?"
              answer="Register your interest now. The founding cohort will be notified first and will receive the lowest price the course will ever be offered at."
            />
            <FAQItem
              num={5}
              question="Who is teaching this?"
              answer="Richie Dharma, Head of HubSpot at a Diamond Agency in Australia, top 1% of HubSpot's global partner network, and someone who is actively hiring for this exact role."
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          FOOTER CTA — dot-grid, pill buttons
      ════════════════════════════════════ */}
      <section className="dot-grid py-24 px-6 md:px-10 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-5">
            It&apos;s our time.
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-black leading-tight tracking-tight mb-8">
            You were{" "}
            <span className="text-accent italic">made for this.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="#register"
              className="text-xs font-medium tracking-widest uppercase text-white bg-ink px-8 py-3.5 rounded-full hover:bg-accent transition-colors duration-200 text-center"
            >
              Register Your Interest
            </a>
            <a
              href="#guide"
              className="text-xs font-medium tracking-widest uppercase text-ink border border-gray-300 px-8 py-3.5 rounded-full hover:border-accent hover:text-accent transition-colors duration-200 text-center"
            >
              Richie&apos;s Story
            </a>
          </div>
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
