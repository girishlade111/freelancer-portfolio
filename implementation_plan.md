# Goal Description

Build a single-page, scroll-based developer portfolio website for Girish Lade using Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. The design is inspired by the Carolina editorial template and features a Dark Navy & Gold palette. The project must strictly adhere to the accessibility and component state rules defined in `DESIGN.md` and `SKILL.md` (WCAG 2.2 AA, focus-visible rules, states handling).

## User Review Required

> [!IMPORTANT]
> - The application will be bootstrapped with `create-next-app` and configured inside `girish-portfolio`. Do you want it directly in `c:\Users\Girish Lade\OneDrive\Desktop\freelancer-portfolio` or inside the `girish-portfolio` subdirectory? The plan assumes bootstrapping inside `freelancer-portfolio` to avoid deep nesting since we are already in the project directory, but using `--src-dir=false` as requested. I will run `npx create-next-app@latest .` to initialize in the current directory if it's empty, or create the subfolder if you prefer. Please confirm if initializing in the current directory is acceptable.
> - The prompt mentions using placehold.co for placeholder images. I'll use those.
> - `shadcn/ui` initialization requires some interactive prompts when running `npx shadcn@latest init`, but I will use the `-y` flag or provide a components.json to ensure an automated setup.

## Open Questions

> [!WARNING]
> - For the `CustomCursor` and mobile touch events, should we completely disable the custom cursor on devices matching `(pointer: coarse)` as described? 
> - Are there any specific GitHub, Twitter, or LinkedIn URLs you would like pre-filled in the Contact Section, or should I use placeholders for now?

## Proposed Changes

### 1. Project Initialization & Dependencies
- Run `npx create-next-app@latest . --typescript --tailwind --app --src-dir=false --eslint`
- Install `framer-motion`, `lucide-react`, `react-hook-form`, `@hookform/resolvers`, `zod`, `clsx`, `tailwind-merge`.
- Initialize `shadcn/ui` and add `accordion` and `sheet` components.

---

### 2. Configuration & Design System
#### [MODIFY] [tailwind.config.ts](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/tailwind.config.ts)
Add custom color tokens (Navy, Gold, Cream) and typography scales. Implement semantic token mapping for Carolina design system.

#### [MODIFY] [app/globals.css](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/app/globals.css)
Add CSS variables, custom scrollbar styling, section utility classes, and global focus-visible accessibility rules.

#### [MODIFY] [app/layout.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/app/layout.tsx)
Configure `next/font/google` for Bricolage Grotesk, Inter, and JetBrains Mono. Set up `CustomCursor` and metadata.

---

### 3. Data Layer
Create data models to populate the UI.
#### [NEW] [data/projects.ts](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/data/projects.ts)
#### [NEW] [data/skills.ts](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/data/skills.ts)
#### [NEW] [data/process.ts](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/data/process.ts)
#### [NEW] [data/testimonials.ts](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/data/testimonials.ts)
#### [NEW] [data/faqs.ts](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/data/faqs.ts)

---

### 4. Utilities and Shared UI
#### [NEW] [lib/utils.ts](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/lib/utils.ts)
#### [NEW] [lib/animations.ts](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/lib/animations.ts)
Shared Framer Motion variants including `sectionEntry`, stagger containers, and `useReducedMotion` logic.
#### [NEW] [components/ui/CustomCursor.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/components/ui/CustomCursor.tsx)
#### [NEW] [components/ui/ScrollIndicator.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/components/ui/ScrollIndicator.tsx)
#### [NEW] [components/ui/MarqueeStrip.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/components/ui/MarqueeStrip.tsx)

---

### 5. Layout and Sections
Implement the core visual sections sequentially.

#### [NEW] [components/layout/Navbar.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/components/layout/Navbar.tsx)
Fixed, animated top nav with mobile sheet.
#### [NEW] [components/layout/Footer.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/components/layout/Footer.tsx)
Includes image mosaic and scrolling marquee strips.
#### [NEW] [components/sections/HeroSection.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/components/sections/HeroSection.tsx)
#### [NEW] [components/sections/ProjectsSection.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/components/sections/ProjectsSection.tsx)
#### [NEW] [components/sections/SkillsSection.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/components/sections/SkillsSection.tsx)
#### [NEW] [components/sections/DevProcessSection.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/components/sections/DevProcessSection.tsx)
#### [NEW] [components/sections/TestimonialsSection.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/components/sections/TestimonialsSection.tsx)
#### [NEW] [components/sections/FAQSection.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/components/sections/FAQSection.tsx)
#### [NEW] [components/sections/ContactSection.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/components/sections/ContactSection.tsx)

---

### 6. Main Page Assembly
#### [MODIFY] [app/page.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/app/page.tsx)
Assemble all the created sections in order.

## Verification Plan
### Automated Tests
- Run `npm run build` to ensure the project compiles with no TypeScript or ESLint errors.
### Manual Verification
- Start the dev server (`npm run dev`) and test responsive behavior on desktop and mobile viewports.
- Check accessibility: verify all buttons and links are navigable via keyboard with visible focus rings.
- Check animations: ensure framer-motion triggers properly on scroll and that `useReducedMotion` functions correctly.
