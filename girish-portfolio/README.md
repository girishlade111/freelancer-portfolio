<div align="center">

# 🚀 Girish Lade — Freelancer Portfolio

> A modern, blazing-fast, and visually stunning personal portfolio website built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Showcasing projects, skills, process, testimonials, and a contact form — all wrapped in a sleek, accessible UI.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Live Demo](#) · [Report Bug](https://github.com/girishlade111/freelancer-portfolio/issues) · [Request Feature](https://github.com/girishlade111/freelancer-portfolio/issues)

</div>

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🏗️ System Architecture](#️-system-architecture)
- [📂 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
- [⚙️ Configuration](#️-configuration)
- [📊 GitHub Stats](#-github-stats)
- [🎨 Design System](#-design-system)
- [♿ Accessibility](#-accessibility)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [📬 Contact](#-contact)

---

## ✨ Features

> A curated list of standout features that make this portfolio unique, performant, and developer-friendly.

### 🎯 Core Highlights

- ⚡ **Blazing Fast Performance** — Powered by **Next.js 16** with the **App Router**, React Server Components, and automatic code splitting.
- 🎨 **Stunning UI/UX** — Modern, clean, and responsive design with smooth animations powered by **Framer Motion**.
- 📱 **Fully Responsive** — Mobile-first design that looks beautiful on every screen size — from phones to ultrawide monitors.
- 🌗 **Dark Mode Optimized** — Sleek dark theme with carefully tuned color tokens.
- 🧩 **Reusable Component Architecture** — Modular components organized by `layout`, `sections`, and `ui`.
- 🪝 **Form Validation** — Type-safe form handling using **React Hook Form** + **Zod** resolvers.
- 🎭 **Custom Animated Cursor** — A unique, branded cursor that elevates the browsing experience.
- 🖼️ **Optimized Image Loading** — Configured with `next/image` for remote patterns, SVG support, and inline content disposition.
- 🔍 **SEO Ready** — Semantic HTML, proper meta tags, and clean URL structure.
- ♿ **Accessible by Design** — WCAG 2.2 AA compliance with keyboard-first interactions and focus-visible rules.

### 📦 Section Breakdown

- **🏠 Hero Section** — Captivating introduction with animated typography.
- **👤 About Section** — Personal story, values, and what drives the work.
- **💼 Projects Section** — Showcase of featured work with rich project cards.
- **🧠 Skills Section** — Technical skills, tools, and expertise areas.
- **🛠️ Dev Process Section** — Step-by-step walkthrough of the development workflow.
- **📚 Background Section** — Professional journey, experience, and education.
- **💬 Testimonials Section** — Social proof from happy clients and collaborators.
- **❓ FAQ Section** — Answers to common questions, dynamically loaded from data.
- **📨 Contact Section** — Functional contact form with validation and feedback.
- **🧭 Sticky Navbar** — Smooth-scroll navigation with active section highlighting.
- **🦶 Footer** — Quick links, social media, and copyright information.

---

## 🛠️ Tech Stack

> The complete toolkit used to build, style, animate, validate, and deploy this portfolio.

### 🧱 Core Framework

| Technology                                                                                                                     | Version  | Purpose                                               |
| ------------------------------------------------------------------------------------------------------------------------------ | -------- | ----------------------------------------------------- |
| ![Next.js](https://img.shields.io/badge/Next.js-000?style=flat-square&logo=next.js&logoColor=white) **Next.js**                | `16.2.9` | React framework with App Router, SSR/SSG, and routing |
| ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) **React**                    | `19.2.4` | UI library for building component-based interfaces    |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white) **TypeScript** | `^5`     | Static typing for JavaScript with full type safety    |

### 🎨 Styling & UI

| Technology                                                                                                                             | Version   | Purpose                                        |
| -------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------------------------------------------- |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) **Tailwind CSS** | `^4`      | Utility-first CSS framework                    |
| ![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=flat-square&logo=postcss&logoColor=white) **@tailwindcss/postcss**        | `^4`      | PostCSS plugin for Tailwind v4                 |
| ![shadcn](https://img.shields.io/badge/shadcn/ui-000?style=flat-square&logo=shadcnui&logoColor=white) **shadcn**                       | `^4.11.0` | Re-usable component registry (base-nova style) |
| ![Base UI](https://img.shields.io/badge/Base_UI-1.5.0-0070F3?style=flat-square) **@base-ui/react**                                     | `^1.5.0`  | Unstyled, accessible UI primitives             |
| ![Lucide](https://img.shields.io/badge/Lucide-1.17.0-F56565?style=flat-square) **lucide-react**                                        | `^1.17.0` | Beautiful, consistent icon library             |
| **tw-animate-css**                                                                                                                     | `^1.4.0`  | Animation utilities for Tailwind CSS           |
| **class-variance-authority**                                                                                                           | `^0.7.1`  | Type-safe component variants                   |
| **clsx**                                                                                                                               | `^2.1.1`  | Conditional `className` utility                |
| **tailwind-merge**                                                                                                                     | `^3.6.0`  | Intelligent Tailwind class merger              |

### ✨ Animations & Interactions

| Technology                                                                                                                          | Version    | Purpose                                   |
| ----------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------------------------------------- |
| ![Framer Motion](https://img.shields.io/badge/Framer_Motion-FF0055?style=flat-square&logo=framer&logoColor=white) **framer-motion** | `^12.40.0` | Production-ready motion library for React |

### 📝 Forms & Validation

| Technology                                                                      | Version   | Purpose                            |
| ------------------------------------------------------------------------------- | --------- | ---------------------------------- |
| **react-hook-form**                                                             | `^7.78.0` | Performant, flexible form library  |
| **@hookform/resolvers**                                                         | `^5.4.0`  | Validation resolver bridge         |
| ![Zod](https://img.shields.io/badge/Zod-4.4.3-3E67B1?style=flat-square) **zod** | `^4.4.3`  | TypeScript-first schema validation |

### 🛠️ Developer Tools

| Technology                                                                                                     | Version                                           | Purpose                           |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | --------------------------------- |
| ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=flat-square&logo=eslint&logoColor=white) **ESLint** | `^9`                                              | Linting with `eslint-config-next` |
| **TypeScript Types**                                                                                           | `@types/node`, `@types/react`, `@types/react-dom` | Type definitions                  |

---

## 🏗️ System Architecture

> A high-level view of how requests, components, data, and styling flow through the application.

```mermaid
flowchart TB
    %% ===== External Layer =====
    subgraph EXT["🌐 External Layer"]
        USER["👤 User Browser"]
        REMOTE["🖼️ Remote Images<br/>(placehold.co)"]
    end

    %% ===== Edge / Server Layer =====
    subgraph EDGE["⚡ Next.js 16 Edge / Server"]
        ROUTER["🔀 App Router<br/>(app/)"]
        LAYOUT["📐 Root Layout<br/>(app/layout.tsx)"]
        PAGE["📄 Home Page<br/>(app/page.tsx)"]
    end

    %% ===== Rendering Layer =====
    subgraph RENDER["🎨 Rendering Layer"]
        SSR["🖥️ React Server Components"]
        CLIENT["💻 Client Components<br/>('use client')"]
        FONT["🔤 next/font<br/>(Geist)"]
    end

    %% ===== UI Components Layer =====
    subgraph LAYOUT_C["🧭 Layout Components"]
        NAVBAR["🧭 Navbar"]
        FOOTER["🦶 Footer"]
    end

    subgraph SECTIONS["📚 Section Components"]
        HERO["🏠 HeroSection"]
        ABOUT["👤 AboutSection"]
        PROJ["💼 ProjectsSection"]
        SKILLS["🧠 SkillsSection"]
        PROCESS["🛠️ DevProcessSection"]
        BG["📚 BackgroundSection"]
        TEST["💬 TestimonialsSection"]
        FAQ["❓ FAQSection"]
        CONTACT["📨 ContactSection"]
    end

    subgraph UI_C["🧩 UI Primitives"]
        CARD["🃏 ProjectCard"]
        PCARD["🃏 ProcessCard"]
        ICONS["🎯 Icons"]
        CURSOR["🖱️ CustomCursor"]
    end

    %% ===== State / Data Layer =====
    subgraph STATE["🔄 State & Data Layer"]
        RHF["📝 React Hook Form<br/>+ Zod Validation"]
        FM["🎞️ Framer Motion<br/>(animations.ts)"]
    end

    subgraph DATA["📊 Static Data"]
        D_PROJ["data/projects.ts"]
        D_SKILL["data/skills.ts"]
        D_PROC["data/process.ts"]
        D_TEST["data/testimonials.ts"]
        D_FAQ["data/faqs.ts"]
    end

    %% ===== Styling Layer =====
    subgraph STYLE["🎨 Styling Pipeline"]
        TW["💎 Tailwind CSS v4"]
        POSTCSS["⚙️ PostCSS Plugin"]
        CVA["🏷️ CVA Variants"]
        TW_MERGE["🔀 tailwind-merge"]
        UTILS["🛠️ lib/utils.ts"]
    end

    %% ===== Build / Deploy =====
    subgraph BUILD["📦 Build & Deploy"]
        TS["📘 TypeScript Compiler"]
        LINT["🧹 ESLint"]
        VERCEL["▲ Vercel Deployment"]
    end

    %% ===== Flow Connections =====
    USER -->|HTTPS Request| ROUTER
    ROUTER --> LAYOUT
    LAYOUT --> PAGE
    LAYOUT --> FONT

    PAGE --> NAVBAR
    PAGE --> SECTIONS
    PAGE --> FOOTER

    NAVBAR --> UI_C
    FOOTER --> UI_C
    HERO --> FM
    ABOUT --> CURSOR
    PROJ --> CARD
    PROCESS --> PCARD
    SKILLS --> ICONS
    CONTACT --> RHF

    SECTIONS --> CLIENT
    PAGE --> SSR

    CARD --> D_PROJ
    SKILLS --> D_SKILL
    PROCESS --> D_PROC
    PCARD --> D_PROC
    TEST --> D_TEST
    FAQ --> D_FAQ

    REMOTE -.->|next/image| PROJ

    UI_C --> CVA
    UI_C --> TW_MERGE
    SECTIONS --> UTILS

    TW --> POSTCSS
    CVA --> UTILS
    UTILS --> TW

    RHF -->|Zod Schema| ZOD[("🛡️ Zod<br/>Validation")]

    %% Build pipeline
    TS -.->|Compiles| PAGE
    LINT -.->|Lints| SECTIONS
    BUILD -.->|Output| VERCEL
    VERCEL -.->|Serves| USER

    %% Styling
    classDef ext fill:#1e293b,stroke:#3b82f6,stroke-width:2px,color:#fff
    classDef edge fill:#0f172a,stroke:#8b5cf6,stroke-width:2px,color:#fff
    classDef render fill:#1e1b4b,stroke:#06b6d4,stroke-width:2px,color:#fff
    classDef comp fill:#1f2937,stroke:#10b981,stroke-width:2px,color:#fff
    classDef data fill:#292524,stroke:#f59e0b,stroke-width:2px,color:#fff
    classDef style fill:#3f1d38,stroke:#ec4899,stroke-width:2px,color:#fff
    classDef build fill:#1c1917,stroke:#f97316,stroke-width:2px,color:#fff

    class EXT ext
    class EDGE edge
    class RENDER render
    class LAYOUT_C,SECTIONS,UI_C comp
    class STATE,DATA data
    class STYLE style
    class BUILD build
```

### 🔍 Architecture Highlights

- **🏝️ Islands of Interactivity** — Server Components by default, Client Components only where needed (animations, forms, cursor).
- **🧩 Component Colocation** — Logical grouping in `components/{layout,sections,ui}` for maintainability.
- **📊 Data-Driven Sections** — Content sourced from `data/*.ts` files for easy updates without touching components.
- **🎨 Token-Based Styling** — Design tokens flow through Tailwind v4 + CSS variables for theming consistency.
- **⚡ Edge-Ready** — Built on Next.js 16 for optimal performance on Vercel's edge network.

---

## 📂 Project Structure

```
girish-portfolio/
├── 📁 app/                          # Next.js App Router
│   ├── 🎨 globals.css              # Global styles + Tailwind directives
│   ├── 📄 layout.tsx               # Root layout (fonts, metadata)
│   ├── 📄 page.tsx                 # Home page composition
│   └── 🖼️ favicon.ico
│
├── 📁 components/
│   ├── 📁 layout/                  # Layout-level components
│   │   ├── 🧭 Navbar.tsx
│   │   └── 🦶 Footer.tsx
│   │
│   ├── 📁 sections/                # Page sections
│   │   ├── 🏠 HeroSection.tsx
│   │   ├── 👤 AboutSection.tsx
│   │   ├── 💼 ProjectsSection.tsx
│   │   ├── 🧠 SkillsSection.tsx
│   │   ├── 🛠️ DevProcessSection.tsx
│   │   ├── 📚 BackgroundSection.tsx
│   │   ├── 💬 TestimonialsSection.tsx
│   │   ├── ❓ FAQSection.tsx
│   │   └── 📨 ContactSection.tsx
│   │
│   └── 📁 ui/                      # Reusable UI primitives
│       ├── 🃏 ProjectCard.tsx
│       ├── 🃏 ProcessCard.tsx
│       ├── 🎯 Icons.tsx
│       └── 🖱️ CustomCursor.tsx
│
├── 📁 data/                        # Static data sources
│   ├── ❓ faqs.ts
│   ├── 🛠️ process.ts
│   ├── 💼 projects.ts
│   ├── 🧠 skills.ts
│   └── 💬 testimonials.ts
│
├── 📁 lib/                         # Utility libraries
│   ├── 🛠️ utils.ts                # cn() className merger
│   └── 🎞️ animations.ts           # Framer Motion variants
│
├── 📁 public/                      # Static assets
│   ├── 🖼️ images/
│   └── 📄 file.svg, globe.svg, etc.
│
├── ⚙️ .gitignore
├── 🤖 AGENTS.md
├── 🤖 CLAUDE.md
├── ⚙️ components.json             # shadcn config
├── ⚙️ eslint.config.mjs           # ESLint flat config
├── ⚙️ next.config.ts              # Next.js configuration
├── 📦 package.json
├── ⚙️ postcss.config.mjs          # PostCSS config
├── ⚙️ tsconfig.json               # TypeScript config
└── 📖 README.md
```

---

## 🚀 Getting Started

> Get the portfolio running locally in under 2 minutes.

### Prerequisites

Make sure you have the following installed on your machine:

- ✅ **Node.js** `>= 18.18` (LTS recommended — `v20+`)
- ✅ **Package Manager** — `npm`, `yarn`, `pnpm`, or `bun`
- ✅ **Git** — for cloning the repository

### Installation

1. **📥 Clone the repository**

   ```bash
   git clone https://github.com/girishlade111/freelancer-portfolio.git
   cd freelancer-portfolio/girish-portfolio
   ```

2. **📦 Install dependencies**

   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using pnpm
   pnpm install

   # Using bun
   bun install
   ```

3. **▶️ Start the development server**

   ```bash
   npm run dev
   ```

4. **🌐 Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) and enjoy
