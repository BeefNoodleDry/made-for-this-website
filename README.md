# Made For This — Richie Dharma
## Setup Instructions for Claude Code

---

### STEP 1 — Open this folder in Claude Code
Open Claude Code and navigate to this folder, or drag it into your editor.

---

### STEP 2 — Install dependencies
In the Claude Code terminal, run:

```bash
npm install
```

---

### STEP 3 — Start the dev server
```bash
npm run dev
```

Then open your browser at: **http://localhost:3000**

---

### STEP 4 — Add your HubSpot form
1. In HubSpot → Marketing → Forms
2. Create your enquiry form (Name, Email, Current Role)
3. Click "Share" → "Embed code"
4. Open `app/page.tsx`
5. Find the comment `HUBSPOT FORM EMBED — PASTE YOUR CODE HERE`
6. Replace the placeholder `<div>` with your HubSpot `<script>` embed code

---

### STEP 5 — Add your photo or video
Open `app/page.tsx` and find the comment `RICHIE — ADD YOUR PHOTO OR VIDEO HERE`.

**Option A — Photo:**
```tsx
<img
  src="/richie.jpg"
  alt="Richie Dharma"
  className="w-full aspect-[3/4] object-cover rounded-sm"
/>
```
Place `richie.jpg` inside the `/public` folder.

**Option B — YouTube or Loom embed:**
```tsx
<div className="relative w-full aspect-[3/4]">
  <iframe
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
    className="absolute inset-0 w-full h-full rounded-sm"
    allowFullScreen
  />
</div>
```

---

### STEP 6 — Deploy
When ready to go live, run:
```bash
npm run build
```
Then deploy to **Vercel** (recommended — free tier works perfectly):
1. Push this folder to a GitHub repo
2. Connect the repo to vercel.com
3. Deploy with one click — Vercel auto-detects Next.js

---

### FILE STRUCTURE
```
made-for-this-v2/
├── app/
│   ├── globals.css        ← Global styles + HubSpot form overrides
│   ├── layout.tsx         ← Root layout + metadata/SEO
│   └── page.tsx           ← Main landing page (all sections here)
├── components/ui/
│   ├── Nav.tsx            ← Sticky navbar
│   └── JourneyMap.tsx     ← Scroll-animated SVG journey map
├── public/                ← Add richie.jpg here
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

### JOURNEY MAP — Customising the milestones
Open `components/ui/JourneyMap.tsx` and edit the `milestones` array:

```tsx
const milestones = [
  { id: 1, label: "Invisible",      sublabel: "Skilled but unseen",     x: 112, y: 310, delay: 0   },
  { id: 2, label: "Skilled",        sublabel: "HubSpot certified",       x: 280, y: 195, delay: 0.3 },
  { id: 3, label: "Trusted",        sublabel: "Client-facing PM",        x: 460, y: 130, delay: 0.6 },
  { id: 4, label: "Indispensable",  sublabel: "Most valuable in the room", x: 650, y: 75, delay: 0.9 },
];
```

Change `label` and `sublabel` to match your course modules if needed.
