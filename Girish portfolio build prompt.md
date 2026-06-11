# GIRISH LADE — Freelance Developer Portfolio

## Pixel-Perfect Build Prompt (Claude Code / Cursor Ready)

---

## 🎯 PROJECT BRIEF

Build a **single-page, scroll-based developer portfolio website** for **Girish Lade**, Full-Stack + AI Product Builder and founder of LadeStack (ladestack.in). The design is inspired by the **Carolina editorial Framer template** — large display typography, mixed editorial project grid, accordion-based skills and FAQ, testimonials, and a marquee footer — re-skinned in a **Dark Navy + Gold palette** for a premium developer identity.

**Target Audience**: Agencies and clients looking to hire a senior full-stack + AI developer for freelance projects.

**Primary Goal**: Communicate quality, credibility, and technical range. Every pixel must say "hire this person."

---

## 📦 TECH STACK & INSTALLATION

```bash
npx create-next-app@latest girish-portfolio --typescript --tailwind --app --src-dir=false --eslint
cd girish-portfolio
npm install framer-motion lucide-react
npx shadcn@latest init
npx shadcn@latest add accordion sheet
npm install react-hook-form @hookform/resolvers zod clsx tailwind-merge
```

- **Framework**: Next.js 14 App Router (`/app` directory, RSC-first)
- **Language**: TypeScript strict mode
- **Styling**: Tailwind CSS v3 with custom theme tokens
- **Animations**: Framer Motion v11
- **Icons**: Lucide React
- **UI Primitives**: shadcn/ui (Accordion, Sheet for mobile nav only)
- **Fonts**: Google Fonts via `next/font/google`
  - `Bricolage_Grotesk` — weights 400, 600, 700, 800 (hero, headings)
  - `Inter` — weights 400, 500 (body text, nav, labels)
  - `JetBrains_Mono` — weights 400, 500 (skill tags, code refs, monospace labels)
- **Images**: `next/image` throughout

---

## 🎨 DESIGN SYSTEM

### Color Tokens — add to `tailwind.config.ts`

```ts
theme: {
  extend: {
    colors: {
      navy: {
        950: '#05090F',   // deepest black-navy (footer bg)
        900: '#0B1628',   // primary page background
        800: '#0D1B2A',   // alternate section background
        700: '#112240',   // card background
        600: '#1C3A5E',   // border / divider lines
        500: '#2A4F7A',   // muted border / hover state
      },
      gold: {
        300: '#F5D87A',   // highlight / glow
        400: '#F0C94A',   // light gold / hover
        500: '#D4A017',   // primary gold — CTA buttons
        600: '#C9A84C',   // main accent gold
        700: '#A0842A',   // dark gold / pressed state
        800: '#7A6220',   // very muted gold
      },
      cream: {
        50:  '#FDFAF5',   // brightest white-cream
        100: '#F8F4EE',   // primary heading text
        200: '#EDE5D8',   // secondary text
        500: '#A8B2C1',   // body text / muted
        600: '#8896A9',   // placeholder text
        700: '#6B7A8D',   // very subtle text
      },
    },
    fontFamily: {
      bricolage: ['var(--font-bricolage)', 'sans-serif'],
      inter:     ['var(--font-inter)', 'sans-serif'],
      mono:      ['var(--font-jetbrains)', 'monospace'],
    },
  },
}
```

### CSS Variables — add to `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-bricolage: "Bricolage Grotesk", sans-serif;
  --font-inter: "Inter", sans-serif;
  --font-jetbrains: "JetBrains Mono", monospace;

  --bg-primary: #0b1628;
  --bg-card: #112240;
  --bg-alt: #0d1b2a;
  --gold: #c9a84c;
  --gold-light: #f0c94a;
  --gold-dark: #a0842a;
  --text-primary: #f8f4ee;
  --text-muted: #a8b2c1;
  --text-subtle: #6b7a8d;
  --border: rgba(201, 168, 76, 0.15);
  --border-hover: rgba(201, 168, 76, 0.45);
}

html {
  scroll-behavior: smooth;
  background-color: var(--bg-primary);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 3px;
}
::-webkit-scrollbar-track {
  background: #0b1628;
}
::-webkit-scrollbar-thumb {
  background: #c9a84c;
  border-radius: 2px;
}

/* Section title utility class */
.section-title {
  @apply font-bricolage font-bold uppercase tracking-widest text-cream-100;
  font-size: clamp(2.2rem, 4.5vw, 5rem);
  line-height: 1;
}

/* Section padding utility */
.section-padding {
  @apply px-6 md:px-12 lg:px-20 xl:px-28 py-24 md:py-32;
}

/* Max content width utility */
.content-max {
  @apply max-w-screen-xl mx-auto;
}
```

### Typography Scale

| Role          | Class                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------- |
| Hero Name     | `font-bricolage font-extrabold leading-none tracking-tight` `text-[clamp(4.5rem,13vw,16rem)]`   |
| Section Title | `.section-title`                                                                                |
| Card Title    | `font-bricolage font-bold text-2xl md:text-3xl text-cream-100`                                  |
| Section Label | `font-mono text-[10px] uppercase tracking-[0.25em] text-gold-600`                               |
| Body Text     | `font-inter text-sm md:text-base leading-relaxed text-cream-500`                                |
| Skill Tag     | `font-mono text-[10px] uppercase tracking-widest border border-gold/25 text-gold-600 px-2 py-1` |
| Nav Link      | `font-inter text-sm font-medium tracking-wide text-cream-500`                                   |

---

## 📁 FILE STRUCTURE

```
girish-portfolio/
├── app/
│   ├── layout.tsx            ← Root layout: fonts, metadata, CustomCursor
│   ├── page.tsx              ← Renders all sections in sequence
│   └── globals.css           ← Design tokens, utility classes, scrollbar
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        ← Fixed top nav with hide/show on scroll
│   │   └── Footer.tsx        ← Image mosaic + bottom marquee + bar
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── DevProcessSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── MarqueeStrip.tsx
│       ├── ProjectCard.tsx
│       ├── SkillAccordionItem.tsx
│       ├── ProcessCard.tsx
│       ├── ScrollIndicator.tsx
│       └── CustomCursor.tsx
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   ├── process.ts
│   ├── testimonials.ts
│   └── faqs.ts
├── lib/
│   ├── utils.ts              ← cn() helper
│   └── animations.ts         ← Shared Framer Motion variants
└── public/
    └── images/
        ├── profile.jpg
        └── projects/
            ├── ls-pdf.jpg
            ├── ladestack-coder.jpg
            ├── ladedesign.jpg
            ├── ladestack-notes.jpg
            ├── ls-docs.jpg
            └── awesome-free-stack.jpg
```

---

## 📊 DATA FILES

### `data/projects.ts`

```ts
export type ProjectSize = "large" | "medium" | "small";

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  url: string;
  image: string;
  size: ProjectSize;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "LS PDF",
    description:
      "Client-side PDF toolkit — merge, split, compress, rotate, and convert PDFs entirely in the browser. Zero uploads, full privacy.",
    tags: ["Next.js", "pdf-lib", "React"],
    url: "https://pdf.ladestack.in",
    image: "/images/projects/ls-pdf.jpg",
    size: "large",
  },
  {
    id: 2,
    title: "LadeStack Coder",
    description:
      "Browser-based AI code playground with Gemini + NVIDIA NIM integration, real-time execution, and shareable snippets.",
    tags: ["NVIDIA NIM", "Gemini", "Monaco Editor"],
    url: "https://code.ladestack.in",
    image: "/images/projects/ladestack-coder.jpg",
    size: "medium",
  },
  {
    id: 3,
    title: "LadeDesign",
    description:
      "AI-powered UI/UX design tool that generates multi-screen HTML app flows from a single product description.",
    tags: ["Claude API", "HTML Generation", "Next.js"],
    url: "https://design.ladestack.in",
    image: "/images/projects/ladedesign.jpg",
    size: "medium",
  },
  {
    id: 4,
    title: "LadeStack Notes",
    description:
      "NotebookLM-style AI research tool with RAG chat, document Q&A, and studio-style audio summaries powered by pgvector.",
    tags: ["Supabase", "pgvector", "NVIDIA NIM"],
    url: "https://ladestack.in",
    image: "/images/projects/ladestack-notes.jpg",
    size: "large",
  },
  {
    id: 5,
    title: "LS Docs",
    description:
      "AI-powered Google Docs alternative — Tiptap rich text editor, spreadsheet tables, streaming AI, and full export system.",
    tags: ["Tiptap", "NVIDIA NIM", "Supabase"],
    url: "https://ladestack.in",
    image: "/images/projects/ls-docs.jpg",
    size: "medium",
  },
  {
    id: 6,
    title: "Awesome Free Stack",
    description:
      "Curated open-source list of 200+ free developer tools across 16 categories. 300+ GitHub stars.",
    tags: ["Open Source", "GitHub", "Dev Tools"],
    url: "https://github.com/girishlade/awesome-free-stack",
    image: "/images/projects/awesome-free-stack.jpg",
    size: "medium",
  },
];
```

### `data/skills.ts`

```ts
export const skills = [
  {
    id: "01",
    title: "React / Next.js / TypeScript",
    description:
      "Building production-grade web apps with Next.js 14 App Router, React Server Components, TypeScript strict mode, and API routes. From marketing pages to full SaaS dashboards with real users.",
    tags: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "App Router",
      "RSC",
      "Zustand",
    ],
  },
  {
    id: "02",
    title: "Supabase / PostgreSQL / Firebase",
    description:
      "Designing and implementing scalable backends — auth flows, real-time subscriptions, row-level security, pgvector for AI embeddings, and clean REST APIs that don't break at scale.",
    tags: ["Supabase", "PostgreSQL", "pgvector", "Firebase", "Prisma", "Auth"],
  },
  {
    id: "03",
    title: "AI Integration (NVIDIA NIM, OpenAI, Gemini)",
    description:
      "Integrating state-of-the-art AI APIs into production products — RAG pipelines, AI chat interfaces, code generation, SSE streaming, and multi-agent architectures.",
    tags: [
      "NVIDIA NIM",
      "OpenAI",
      "Gemini",
      "RAG",
      "SSE Streaming",
      "LangChain",
    ],
  },
  {
    id: "04",
    title: "UI/UX + Framer Motion / Tailwind",
    description:
      "Designing and implementing premium interfaces with Tailwind CSS, shadcn/ui, and Framer Motion. Responsive, accessible, and smooth — from first click to final pixel.",
    tags: [
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
      "Figma",
      "Accessibility",
    ],
  },
];
```

### `data/process.ts`

```ts
export const processSteps = [
  {
    id: "01",
    step: "Discover",
    icon: "Search", // Lucide icon name
    description:
      "Deep-dive into your goals, users, and constraints. No code is written until the vision is crystal clear.",
  },
  {
    id: "02",
    step: "Plan",
    icon: "LayoutTemplate",
    description:
      "Architecture decisions, tech stack selection, scope definition, and a clear milestone timeline agreed upfront.",
  },
  {
    id: "03",
    step: "Build",
    icon: "Code2",
    description:
      "Clean, scalable code shipped in iterations. Daily commits, async updates, and zero black-box surprises.",
  },
  {
    id: "04",
    step: "Deploy",
    icon: "Rocket",
    description:
      "Production-ready launch with CI/CD, performance tuning, full documentation, and post-launch support.",
  },
];
```

### `data/testimonials.ts`

```ts
export const testimonials = [
  {
    id: 1,
    name: "Client Name",
    role: "Founder, Startup",
    quote:
      "Girish delivered a production-ready SaaS product in under 3 weeks. His AI integration skills and attention to UX detail are exceptional — every feature shipped exactly as envisioned. Will hire again without hesitation.",
    image: "/images/testimonials/client1.jpg",
  },
  {
    id: 2,
    name: "Agency Lead",
    role: "CTO, Agency",
    quote:
      "We needed someone who could own both the frontend and backend without hand-holding. Girish nailed it. Clean code, fast delivery, and proactive communication throughout.",
    image: "/images/testimonials/client2.jpg",
  },
];
```

### `data/faqs.ts`

```ts
export const faqs = [
  {
    question: "What type of projects do you take on?",
    answer:
      "Full-stack web apps, SaaS products, AI-powered tools, and developer-facing products. Ideal projects have a clear scope, real users, and a team that values craft over shortcuts.",
  },
  {
    question: "How do you communicate during a project?",
    answer:
      "Daily async updates via Slack or email, weekly video syncs, and a shared project board (Notion or Linear). You'll always know exactly where things stand — no surprises.",
  },
  {
    question: "What's your typical project timeline?",
    answer:
      "MVPs: 2–4 weeks. Full products: 6–12 weeks. Timeline depends on scope, integrations, and how quickly feedback arrives. I scope everything clearly before a single line is written.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes — IST, GMT, and EST timezones covered. Payments via Stripe, Wise, PayPal, or direct transfer. No timezone has stopped a good project yet.",
  },
  {
    question: "What happens after project launch?",
    answer:
      "Two weeks of free bug-fix support post-launch. Long-term maintenance, feature additions, and scaling support available under a monthly retainer.",
  },
];
```

---

## 🧩 COMPONENT SPECIFICATIONS

---

### `app/layout.tsx`

```tsx
import { Bricolage_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";

const bricolage = Bricolage_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-bricolage",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

export const metadata = {
  title: "Girish Lade — Full-Stack + AI Product Builder",
  description:
    "Available for freelance. Building fast, scalable, AI-powered products for agencies and startups.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="bg-navy-900 text-cream-100 overflow-x-hidden">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
```

---

### `app/page.tsx`

```tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import DevProcessSection from "@/components/sections/DevProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection /> {/* id="hero" */}
        <ProjectsSection /> {/* id="projects" */}
        <SkillsSection /> {/* id="skills" */}
        <DevProcessSection /> {/* id="process" */}
        <TestimonialsSection />
        {/* id="testimonials" */}
        <FAQSection /> {/* id="faq" */}
        <ContactSection /> {/* id="contact" */}
      </main>
      <Footer />
    </>
  );
}
```

---

### `components/layout/Navbar.tsx`

```
LAYOUT:
  Fixed top, full-width, z-50, height 64px
  Three zones: Left | Center | Right

LEFT:
  "GIRISH." in font-bricolage font-bold text-sm tracking-[0.2em] text-cream-100
  Followed by a tiny gold circle: w-1.5 h-1.5 rounded-full bg-gold-600 inline-block ml-1

CENTER:
  Nav links: About · Projects · Skills · Process · Contact
  font-inter text-sm text-cream-500 hover:text-gold-600 transition-colors duration-200
  Underline grows from center on hover: use pseudo-element via Framer Motion layoutId

RIGHT:
  <a href="#contact"> button:
    border border-gold-600 text-gold-600 text-sm font-medium tracking-widest
    px-5 py-2 uppercase
    hover:bg-gold-600 hover:text-navy-900 transition-all duration-300

BACKGROUND BEHAVIOR:
  Default: bg-transparent
  On scroll > 60px: bg-navy-900/90 backdrop-blur-md border-b border-gold/10
  Use useScroll from framer-motion + useMotionValue + useTransform

HIDE/SHOW ON SCROLL:
  Scrolling DOWN: translateY(-100%) — navbar slides out of view
  Scrolling UP: translateY(0) — navbar slides back in
  Threshold: 100px directional delta before triggering
  Wrap in <motion.nav> and animate the translateY

MOBILE (< 768px):
  Hide center nav links
  Right side: hamburger icon (Menu from lucide-react) → opens shadcn Sheet
  Sheet content: vertical nav links in bricolage font-bold text-2xl + "Hire Me" CTA
  Sheet background: bg-navy-950, closed with X icon
```

---

### `components/sections/HeroSection.tsx`

```
LAYOUT:
  min-h-screen, relative, flex flex-col
  Background: bg-navy-900 with a faint noise texture overlay
  Add a noise texture: create a 200x200 SVG noise pattern or use
    <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
         style={{ backgroundImage: "url('/noise.svg')" }} />

TOP AREA (pt-28 px-6 md:px-12 lg:px-20 xl:px-28):
  Flex row — justify-between — align items-start

  LEFT: Profile photo
    Container: w-44 h-60 md:w-52 md:h-72 relative overflow-hidden
    next/image fill object-cover object-top
    Slight warm tone: apply mix-blend-multiply overlay div bg-navy-600/20
    Photo border: very subtle border border-gold/10
    Framer Motion: initial={{ opacity:0, x:-24 }} animate={{ opacity:1, x:0 }}
                   transition={{ duration:0.7, delay:0.2 }}

  RIGHT: Bio + availability badge
    max-w-xs text-right
    Text: "The engineer behind the products — driven by curiosity, built with intent."
          font-inter text-sm text-cream-500 leading-relaxed
    Below text: inline badge
      "Available for Hire"
      font-mono text-[10px] uppercase tracking-widest
      border border-gold/30 text-gold-600 px-3 py-1.5 mt-4 inline-block
    Framer Motion: initial={{ opacity:0, x:24 }} animate={{ opacity:1, x:0 }}
                   transition={{ duration:0.7, delay:0.4 }}

HERO NAME (flex-1 flex items-end pb-4 overflow-hidden px-4 md:px-8 lg:px-16):
  <h1> containing "GIRISH LADE" as individual characters split into spans

  CHARACTER REVEAL ANIMATION:
    Each character wrapped in:
      <span className="inline-block overflow-hidden">
        <motion.span
          className="inline-block"
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{
            delay: 0.6 + index * 0.04,
            duration: 0.65,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      </span>

  Font styles:
    font-bricolage font-extrabold leading-none tracking-tight text-cream-50
    fontSize: clamp(4.5rem, 13vw, 16rem)
    Do NOT use a fixed font-size class. Use inline style for clamp.

BOTTOM STRIP (flex justify-between items-center px-6 md:px-12 lg:px-20 pb-8):
  LEFT:
    <motion.span initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.4 }}>
      "Full-Stack + AI Product Builder"
      font-mono text-[11px] uppercase tracking-[0.25em] text-gold-600
    </motion.span>

  RIGHT:
    <ScrollIndicator /> — see below

THIN GOLD LINE:
  At the very bottom of the section:
  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent" />
```

---

### `components/ui/ScrollIndicator.tsx`

```tsx
// Animated down arrow to indicate scroll
// Container: flex flex-col items-center gap-2 cursor-pointer
// Top: small "Scroll" text in font-mono text-[9px] text-cream-700 tracking-widest rotate-90 or vertical
// Bottom: ChevronDown icon from lucide-react, text-gold-600, size 18
// Animation: infinite bounce — animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}
// On click: smooth scroll to #projects section
```

---

### `components/sections/ProjectsSection.tsx`

```
BACKGROUND: bg-navy-800 (section contrast from hero)
PADDING: section-padding

SECTION HEADER:
  Flex row justify-between items-end mb-14
  Left: <h2 className="section-title">PROJECTS</h2>
  Right: <a href="#"> "View All →" font-mono text-xs text-gold-600 tracking-widest
                       hover:underline underline-offset-4 transition-all

GRID LAYOUT:
  Use CSS grid with 3 columns and 4px gap
  Mobile: single column (grid-cols-1)
  Desktop (md+): grid-cols-3

  ROWS:
    Row 1: [col-span-2] projects[0]  [col-span-1] projects[1]
    Row 2: [col-span-1] projects[2]  [col-span-2] projects[3]
    Row 3: [col-span-2] projects[4]  [col-span-1] projects[5]

  Note: This creates a zigzag large-small pattern that mirrors the Carolina editorial grid.
  Each row should have equal height: h-[320px] md:h-[420px] lg:h-[480px]

  Use <motion.div whileInView with stagger on children:
    Parent: variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    Child: initial={{ opacity:0, scale:0.97 }} whileInView={{ opacity:1, scale:1 }}
           viewport={{ once:true, margin:"-60px" }}
```

### `components/ui/ProjectCard.tsx`

```
Props: { project: Project }

CONTAINER:
  relative w-full h-full overflow-hidden cursor-pointer group
  className on the motion.div wrapping:
    motion.div whileHover={{ scale: 1.015 }} transition={{ duration: 0.4 }}

IMAGE:
  next/image fill object-cover object-center
  className="transition-transform duration-700 group-hover:scale-105"

OVERLAY (gradient):
  absolute inset-0
  bg-gradient-to-t from-navy-950/96 via-navy-950/35 to-transparent

GOLD BORDER ON HOVER:
  absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-all duration-300

TOP-RIGHT TAGS (absolute top-4 right-4):
  flex gap-2 flex-wrap justify-end
  Each tag: font-mono text-[9px] uppercase tracking-widest
            bg-navy-900/80 border border-gold/25 text-gold-600 px-2 py-0.5
            backdrop-blur-sm

BOTTOM CONTENT (absolute bottom-0 left-0 right-0 p-5 md:p-6):
  Flex row justify-between items-end

  LEFT:
    Project title: font-bricolage font-bold text-xl md:text-2xl text-cream-50
    Below title (hidden by default, reveals on hover with AnimatePresence):
      <motion.p initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:8 }}>
        project.url shown as small link
        font-mono text-[10px] text-gold-600/70 underline underline-offset-2
      </motion.p>

  RIGHT:
    ArrowUpRight icon from lucide-react
    size 20
    text-gold-600 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5
    transition-all duration-300
```

---

### `components/sections/SkillsSection.tsx`

```
BACKGROUND: bg-navy-900
PADDING: section-padding

SECTION HEADER ROW (flex flex-col md:flex-row justify-between items-start gap-6 mb-0):
  Left: <h2 className="section-title">SKILLS</h2>
  Right: <p className="max-w-sm text-sm text-cream-500 leading-relaxed md:text-right">
    "The stack I've used to ship 10+ products from idea to production."
  </p>

ACCORDION LIST:
  mt-12 space-y-0
  Render each skill using <SkillAccordionItem>
  First item gets border-t border-gold/15
  Each item gets border-b border-gold/15
  Only ONE item open at a time (controlled state in parent)
```

### `components/ui/SkillAccordionItem.tsx`

```
Props: { skill, isOpen, onToggle }

CONTAINER:
  py-6 md:py-8 cursor-pointer select-none

TRIGGER ROW (flex justify-between items-center):
  LEFT: flex items-center gap-4 md:gap-7
    - ID badge: font-mono text-xs text-cream-700 w-8
    - Skill title: font-bricolage font-semibold text-cream-100
                   text-[clamp(1.3rem,2.5vw,2.2rem)]

  RIGHT:
    motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}
    "+" character: text-gold-600 text-2xl font-light leading-none

EXPANDED CONTENT:
  AnimatePresence mode="wait"
  motion.div:
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: "auto", opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="overflow-hidden"

  Inner content (pt-4 pl-12 md:pl-[4.5rem]):
    Two-column flex on desktop:
    Left: description — font-inter text-sm text-cream-500 leading-relaxed max-w-lg
    Right: tags flex-wrap gap-2 justify-start md:justify-end
           Each tag: skill-tag class (font-mono text-[10px] border border-gold/25 text-gold-600 px-2.5 py-1.5 uppercase tracking-widest)
```

---

### `components/sections/DevProcessSection.tsx`

```
BACKGROUND: bg-navy-800
PADDING: section-padding

SECTION HEADER (flex flex-col md:flex-row justify-between items-start gap-6 mb-16):
  Left: <h2 className="section-title">DEV PROCESS</h2>
  Right:
    <p className="max-w-sm text-sm text-cream-500 leading-relaxed md:text-right">
      "Every project follows the same disciplined workflow — so nothing falls through the cracks."
    </p>

PROCESS CARDS GRID:
  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4
  Stagger animation: whileInView with staggerChildren 0.12s
```

### `components/ui/ProcessCard.tsx`

```
Props: { step }

OUTER:
  motion.div
  whileHover={{ y: -4, borderColor: "rgba(201,168,76,0.45)" }}
  transition={{ duration: 0.25 }}
  className="bg-navy-700 border border-gold/10 p-6 md:p-8 flex flex-col gap-6 h-full"

TOP ROW (flex justify-between items-center):
  Left: step.id — font-mono text-xs text-gold-600/50
  Right: Icon container — w-11 h-11 rounded-full border border-gold/25
         flex items-center justify-center
         Background on hover: bg-gold-600/10 transition-colors
         <LucideIcon name={step.icon} size={18} className="text-gold-600" />

STEP TITLE:
  font-bricolage font-bold text-xl md:text-2xl text-cream-100

DESCRIPTION:
  font-inter text-sm text-cream-500 leading-relaxed flex-1

NOTE: Render Lucide icons dynamically using a map:
const iconMap = { Search, LayoutTemplate, Code2, Rocket };
const Icon = iconMap[step.icon];
```

---

### `components/sections/TestimonialsSection.tsx`

```
BACKGROUND: bg-navy-900
PADDING: section-padding

SECTION HEADER (mb-16):
  <h2 className="section-title">TESTIMONIALS</h2>

MAIN TESTIMONIAL LAYOUT:
  grid grid-cols-1 md:grid-cols-2 gap-12 items-center

LEFT SIDE (controlled by active index with AnimatePresence mode="wait"):
  AnimatePresence mode="wait" key={active}
  motion.div: initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-20 }}
              transition={{ duration: 0.45 }}

  QUOTE MARK: font-bricolage text-[7rem] leading-none text-gold-600/20 select-none
              -mb-10 (pulls the quote text up visually)

  QUOTE TEXT: font-bricolage text-xl md:text-2xl text-cream-100 leading-relaxed
              font-medium (not italic — editorial magazines use medium weight, not italic)

  ATTRIBUTION ROW (mt-8 flex items-center gap-4):
    Small avatar: w-12 h-12 rounded-full overflow-hidden relative
                  next/image fill object-cover
    Name: font-bricolage font-semibold text-cream-100 text-base
    Role: font-mono text-[10px] text-gold-600 uppercase tracking-widest mt-0.5

  NAVIGATION DOTS (mt-10 flex gap-3):
    Each: button w-10 h-[2px] transition-all duration-300
    Active: bg-gold-600
    Inactive: bg-navy-600 hover:bg-navy-500

RIGHT SIDE (photo panel):
  relative h-[400px] md:h-[520px] overflow-hidden
  AnimatePresence mode="wait" key={active}
  motion.div: initial={{ opacity:0, scale:1.04 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0 }}
              transition={{ duration: 0.5 }}
    next/image fill object-cover object-top
    After image: gradient overlay absolute inset-0
    bg-gradient-to-t from-navy-950/40 to-transparent
    thin gold border: absolute inset-0 border border-gold/10
```

---

### `components/sections/FAQSection.tsx`

```
BACKGROUND: bg-navy-800
PADDING: section-padding

SECTION HEADER (mb-12):
  flex justify-between items-end
  Left: <h2 className="section-title">FAQS</h2>
  Right: small subtitle "Have more questions? Reach out."
         font-inter text-sm text-cream-500

FAQ ACCORDION:
  mt-8 space-y-0
  Same border-t / border-b border-gold/15 pattern as Skills
  All items start collapsed
  Multiple items can be open at once (each manages own state via local isOpen)

EACH FAQ ITEM:
  py-5 md:py-6 cursor-pointer

  TRIGGER ROW (flex justify-between items-center gap-8):
    Question: font-bricolage font-semibold text-cream-100
              text-lg md:text-xl flex-1
    Icon: motion.div rotate 45 on open — same gold "+" as Skills

  ANSWER (AnimatePresence same pattern as Skills):
    font-inter text-sm text-cream-500 leading-relaxed pt-3 max-w-3xl
```

---

### `components/sections/ContactSection.tsx`

```
BACKGROUND: bg-navy-900
PADDING: section-padding

SECTION LABEL (mb-4):
  font-mono text-[10px] uppercase tracking-[0.25em] text-gold-600
  "LET'S BUILD SOMETHING"

MAIN HEADING:
  font-bricolage font-extrabold text-cream-50
  fontSize: clamp(3rem, 7vw, 7rem)
  leading-none mb-4
  "Say hello."
  The period is in text-gold-600

SUBTITLE (mb-12):
  font-inter text-sm text-cream-500 max-w-sm
  "Available for freelance projects, long-term contracts, and agency partnerships."

TWO-COLUMN LAYOUT (grid grid-cols-1 md:grid-cols-2 gap-16 items-start):

LEFT COLUMN:
  EMAIL (block mt-2 mb-8):
    <a href="mailto:girish@ladestack.in">
    font-mono text-sm md:text-base text-gold-600 hover:text-gold-400
    transition-colors tracking-wide

  SOCIAL LINKS (flex gap-3 mt-6):
    GitHub: <a href="https://github.com/girishlade">
    Twitter/X: social link
    LinkedIn: social link
    Each: w-11 h-11 border border-gold/20 hover:border-gold/60 hover:bg-gold-600/10
          flex items-center justify-center transition-all duration-300
          Icon: Github, Twitter, Linkedin (all from lucide-react) size 16 text-cream-500

  AVAILABILITY BADGE (mt-8):
    inline-flex items-center gap-2
    Pulsing green dot: w-2 h-2 rounded-full bg-emerald-400 animate-pulse
    Text: "Available for new projects" — font-mono text-[11px] text-cream-500 tracking-wide

RIGHT COLUMN (contact form):
  Use React Hook Form + Zod for validation

  All inputs share base style:
    w-full bg-navy-700 border border-gold/15 focus:border-gold/45 focus:outline-none
    px-4 py-3.5 text-cream-100 text-sm placeholder:text-cream-700
    transition-colors duration-200 rounded-none (sharp corners — editorial feel)

  FIELDS:
    - Name input (type="text" placeholder="Your name")
    - Email input (type="email" placeholder="Email address")
    - Message textarea (rows=5 resize-none placeholder="Tell me about your project...")

  SUBMIT BUTTON:
    w-full bg-gold-600 text-navy-900 font-bricolage font-bold py-4 px-8
    uppercase tracking-[0.15em] text-sm
    hover:bg-gold-400 transition-colors duration-300
    Active state: scale 0.99
    Loading state: show Loader2 icon spin from lucide-react
    Text: "Send Message →"

  SUCCESS STATE:
    Replace form with motion.div:
    CheckCircle icon text-gold-600 size 32
    "Message sent. I'll get back to you within 24 hours."
    font-bricolage text-xl text-cream-100
```

---

### `components/ui/MarqueeStrip.tsx`

```
Props: { variant: 'top' | 'bottom' }

VARIANT "top" (used above Footer):
  Background: bg-gold-600
  Text color: text-navy-900
  Font: font-bricolage font-extrabold
  Size: text-4xl md:text-6xl lg:text-7xl
  Content: "AVAILABLE FOR HIRE · FULL-STACK DEVELOPER · AI PRODUCT BUILDER · LADESTACK.IN · "
  Repeat content twice for seamless loop

VARIANT "bottom" (very bottom of Footer):
  Background: bg-navy-950
  Text color: text-cream-100/20
  Font: font-bricolage font-bold
  Size: text-2xl md:text-4xl
  Content: "GIRISH LADE · GET IN TOUCH · HIRE ME · LADESTACK.IN · "
  Repeat content twice

ANIMATION (both variants):
  <div className="overflow-hidden">
    <motion.div
      className="flex whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,   // top: 30s, bottom: 22s
          ease: "linear",
        },
      }}
    >
      {/* Render the content string 2x */}
      <span className="inline-block">{content}</span>
      <span className="inline-block">{content}</span>
    </motion.div>
  </div>

DOT SEPARATOR between items: use " · " as separator in the content string
```

---

### `components/layout/Footer.tsx`

```
Background: bg-navy-950

STRUCTURE (top to bottom):

1. TOP MARQUEE STRIP:
   <MarqueeStrip variant="top" />
   Full-width, py-4 to give breathing room above/below text

2. IMAGE MOSAIC GRID:
   grid grid-cols-3 md:grid-cols-6 gap-1
   Height: h-40 md:h-56
   Each cell: relative overflow-hidden group cursor-pointer
     - next/image fill object-cover
     - className="group-hover:scale-110 transition-transform duration-700"
     - Gold tint overlay on hover:
       absolute inset-0 bg-gold-600/0 group-hover:bg-gold-600/15 transition-all duration-300
   Show all 6 project images

3. FOOTER BAR (px-6 md:px-12 lg:px-20 py-6):
   flex flex-col md:flex-row justify-between items-center gap-4
   border-t border-gold/10

   Left:  © 2025 Girish Lade
          font-mono text-[11px] text-cream-700

   Center: "girish.ladestack.in"
           font-mono text-[11px] text-gold-600/60 hover:text-gold-600 transition-colors

   Right: Social icons (same as contact section, smaller — size 14)

4. BOTTOM MARQUEE STRIP:
   <MarqueeStrip variant="bottom" />
   border-t border-gold/5
```

---

### `components/ui/CustomCursor.tsx`

```
DESKTOP ONLY (hidden on touch devices):

STATE VARIANTS:
  1. Default: 8px gold circle
  2. Hover on links/buttons: 40px circle, bg-gold-600/15, border-gold-600
  3. Hover on project cards: 64px circle containing "View" text

IMPLEMENTATION:
  - Track mouse position with useMotionValue(0) for x and y
  - Apply spring smoothing: useSpring(x, { stiffness: 800, damping: 50 })
  - Outer ring: 40px circle, border border-gold-600/30, mix-blend-difference
  - Inner dot: 8px circle, bg-gold-600
  - On link hover (add data-cursor="link" to interactive elements):
    animate outer ring to scale(1.5) with opacity increase
  - On project card hover (data-cursor="view"):
    show "View" text inside expanded cursor
  - Set CSS: body { cursor: none } for desktop
  - Use useEffect to add/remove event listeners
  - Check for (window.matchMedia('(pointer: coarse)').matches) to skip on touch
```

---

## ✨ `lib/animations.ts` — Shared Framer Motion Variants

```ts
import { Variants } from "framer-motion";

// Standard section entry
export const sectionEntry = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

// Stagger child (for project cards, process cards)
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

// Fade in from below
export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

// Hero letter reveal
export const heroLetterReveal = (index: number) => ({
  initial: { y: "110%", opacity: 0 },
  animate: { y: "0%", opacity: 1 },
  transition: {
    delay: 0.6 + index * 0.038,
    duration: 0.65,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
});
```

**Apply `sectionEntry` to the `<section>` wrapper of every section component using `<motion.section {...sectionEntry}>`.**

---

## 📱 RESPONSIVE SPECIFICATIONS

| Breakpoint        | Projects Grid               | Process Cards | Navbar             | Typography                   |
| ----------------- | --------------------------- | ------------- | ------------------ | ---------------------------- |
| Mobile < 640px    | Single column               | 1 col         | Hamburger menu     | clamp(4rem, 13vw, ...)       |
| Tablet 640–1024px | 3-col with same span rules  | 2x2           | Full links visible | clamp values scale naturally |
| Desktop > 1024px  | Full editorial 3-col zigzag | 4-col row     | Full navbar        | Full clamp max values        |

**Mobile adjustments:**

- Section padding: `px-5 py-16`
- Hero name overflow: allow horizontal scroll with `overflow-x-hidden` on body
- Project cards: `h-[260px]` on mobile
- Contact form: single column only

---

## ⚙️ SECTIONS INCLUDED / EXCLUDED

| Section                | Status         | Notes                               |
| ---------------------- | -------------- | ----------------------------------- |
| Navbar                 | ✅ Include     |                                     |
| Hero                   | ✅ Include     | No stats row                        |
| Stats / About numbers  | ❌ **REMOVED** | Do not build this section           |
| Projects Grid          | ✅ Include     | 6 projects, zigzag editorial layout |
| Skills Accordion       | ✅ Include     | 4 skills                            |
| Dev Process            | ✅ Include     | Discover → Plan → Build → Deploy    |
| Background / Education | ❌ **REMOVED** | Do not build this section           |
| Testimonials           | ✅ Include     | Slider with 2 testimonials          |
| FAQ                    | ✅ Include     | 5 questions                         |
| Contact                | ✅ Include     | Form + social links                 |
| Top Marquee            | ✅ Include     | Gold bg, navy text                  |
| Footer Image Mosaic    | ✅ Include     |                                     |
| Bottom Marquee         | ✅ Include     | Dark bg                             |

---

## 🔧 FINAL IMPLEMENTATION NOTES

1. **Color philosophy**: Navy is the canvas, Gold is the signal. Use gold only for CTAs, accents, tags, icon lines, and hover states. Never use gold as a large solid background except the MarqueeStrip.

2. **Border radius**: Zero everywhere. `rounded-none` on all cards, inputs, buttons. Editorial sharpness is a deliberate design choice.

3. **Placeholder images**: Until real project screenshots exist, use:
   `https://placehold.co/800x500/112240/C9A84C?text=LS+PDF`
   Adjust query params per project.

4. **All images use `next/image`**. Hero profile uses `priority`. All others use default lazy loading.

5. **Accessibility**: All buttons have `aria-label`. All links have descriptive text. Focus rings: `focus-visible:outline-2 focus-visible:outline-gold-600 focus-visible:outline-offset-2`.

6. **Reduced motion**: Wrap all animations in `useReducedMotion()` check:

   ```ts
   const prefersReduced = useReducedMotion();
   const animProps = prefersReduced ? {} : sectionEntry;
   ```

7. **Section IDs** for anchor nav: `#hero` `#projects` `#skills` `#process` `#testimonials` `#faq` `#contact`

8. **Performance**: Use `import dynamic from 'next/dynamic'` with `ssr: false` for `CustomCursor` to avoid hydration mismatch.

9. **No `<form>` elements** — use div-based form with React Hook Form's register() and controlled inputs. Submit button type="button" with onClick.

10. **The "." in "Say hello." is gold** — implement as:
    ```tsx
    <>
      Say hello<span className="text-gold-600">.</span>
    </>
    ```

---

_Build this iteratively: Navbar → Hero → Projects → Skills → Process → Testimonials → FAQ → Contact → Footer. Test each section at mobile and desktop before moving on._
