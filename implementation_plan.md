# Implementation Plan - Mobile Responsiveness Refinement

Ensure the portfolio website is fully responsive, fits perfectly on all mobile devices (from 320px width up), and prevents any horizontal scrolling/overflow, while strictly preserving the desktop layout and visual aesthetics.

## User Review Required

> [!IMPORTANT]
> All changes are ring-fenced to mobile and tablet breakpoints using Tailwind CSS's responsive prefixes (e.g., base classes for mobile, overridden by `md:`, `lg:`, `xl:` for desktop). The desktop view remains completely untouched.

## Proposed Changes

### 2. Layout Components

#### [MODIFY] [Footer.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/girish-portfolio/components/layout/Footer.tsx)

- Add `relative` to the marquee container to prevent absolute positioned child elements from floating out of bounds.
- Apply the two-track seamless looping marquee structure using the new keyframe classes.
- Scale down the massive bottom "GIRISH" text on mobile from `clamp(4.5rem, 16vw, 18rem)` to Tailwind-controlled responsive font size classes (`text-[12vw] sm:text-[14vw] md:text-[clamp(4.5rem,16vw,18rem)]`) and adjust margins (`mx-0 md:-mx-[1%]`).

---

### 3. Sections

#### [MODIFY] [HeroSection.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/girish-portfolio/components/sections/HeroSection.tsx)

- Scale down the massive "GIRISH" hero name text on mobile using Tailwind responsive utility classes (`text-[12vw] sm:text-[14vw] md:text-[clamp(6rem,20vw,22rem)]`) instead of the hardcoded inline style `fontSize: "clamp(6rem, 20vw, 22rem)"`.
- Adjust character container margins (`mx-0 md:-mx-[2%]`) to keep letters properly aligned on mobile.
- Make the main background image container responsive (`w-[85vw] max-w-[320px] md:w-full md:max-w-[500px] md:h-[70vh] aspect-[3/4] h-auto`) to prevent viewport overflows.

#### [MODIFY] [AboutSection.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/girish-portfolio/components/sections/AboutSection.tsx)

- Adapt the Stats text sizes (`text-5xl sm:text-6xl md:text-7xl`) to avoid text wrapping awkwardly on small screens.
- Center the main portrait image on mobile viewports using standard margins (`mx-auto lg:mx-0`).

#### [MODIFY] [ProjectsSection.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/girish-portfolio/components/sections/ProjectsSection.tsx)

- Scale down the header "PROJECTS" on mobile (`text-5xl sm:text-6xl md:text-8xl lg:text-9xl`) to avoid clipping.

#### [MODIFY] [SkillsSection.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/girish-portfolio/components/sections/SkillsSection.tsx)

- Scale down the header "SKILLS" on mobile (`text-5xl sm:text-6xl md:text-8xl lg:text-9xl`) to prevent line wrapping.

#### [MODIFY] [DevProcessSection.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/girish-portfolio/components/sections/DevProcessSection.tsx)

- Scale down the header "DESIGN PROCESS" on mobile (`text-5xl sm:text-6xl md:text-8xl lg:text-9xl`).
- Update `ProcessCard.tsx` padding on mobile (`p-6 sm:p-10 md:p-12`) to afford more horizontal reading space.

#### [MODIFY] [BackgroundSection.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/girish-portfolio/components/sections/BackgroundSection.tsx)

- Align tab buttons horizontally on mobile with horizontal scrolling (`flex-row overflow-x-auto pb-4 lg:flex-col lg:pb-0 lg:overflow-x-visible`) and vertical on desktop.
- Center the portrait image on mobile (`mx-auto md:mx-0`).
- Scale down the header "BACKGROUND" on mobile (`text-5xl sm:text-6xl md:text-8xl lg:text-9xl`).

#### [MODIFY] [TestimonialsSection.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/girish-portfolio/components/sections/TestimonialsSection.tsx)

- Adjust quotes font size on mobile (`text-2xl sm:text-3xl md:text-4xl`).
- Make testimonial quote min-height responsive (`min-h-[220px] md:min-h-[300px]`) to reduce excessive whitespace.
- Scale down the header "TESTIMONIALS" on mobile (`text-5xl sm:text-6xl md:text-8xl lg:text-9xl`).

#### [MODIFY] [FAQSection.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/girish-portfolio/components/sections/FAQSection.tsx)

- Scale down the header "FAQS" on mobile (`text-5xl sm:text-6xl md:text-8xl lg:text-9xl`).
- Improve FAQ question and answer spacing/text size on mobile (`text-base sm:text-lg md:text-xl` for questions, `pl-8 md:pl-12 pr-4 md:pr-12` for answers).

#### [MODIFY] [ContactSection.tsx](file:///c:/Users/Girish%20Lade/OneDrive/Desktop/freelancer-portfolio/girish-portfolio/components/sections/ContactSection.tsx)

- Scale down the header "GET IN TOUCH" on mobile (`text-5xl sm:text-6xl md:text-8xl lg:text-9xl`).

---

## Verification Plan

### Automated Verification

- Verify that the app builds successfully: `npm run build`

### Manual Verification

- Launch the development server `npm run dev`.
- Run a browser subagent simulating mobile viewports (e.g. 375px width and 320px width) and verify:
  1. Horizontal scrolling is completely eliminated (width fits exactly within 100vw).
  2. Text sizes are readable and do not overlap.
  3. No elements extend outside the viewport boundary.
  4. The desktop view remains visually identical and functional.
