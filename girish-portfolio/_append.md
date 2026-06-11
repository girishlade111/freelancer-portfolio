- 🖼️ **`remotePatterns`** — Whitelists `placehold.co` for `next/image` optimization.
- 🛡️ **`dangerouslyAllowSVG`** — Allows inline SVG images (use with caution in production).
- 📎 **`contentDispositionType: "inline"`** — Renders SVGs inline in the browser.

### 📄 `tsconfig.json`

TypeScript is configured with **strict mode**, **path aliases** (`@/*` → root), and **bundler module resolution**:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "strict": true,
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "paths": { "@/*": ["./*"] }
  }
}
```

### 📄 `components.json`

shadcn/ui configuration with the **base-nova** style:

```json
{
  "style": "base-nova",
  "rsc": true,
  "tsx": true,
  "tailwind": { "config": "", "css": "app/globals.css" },
  "iconLibrary": "lucide"
}
```

- 🎨 **`style: "base-nova"`** — Modern shadcn variant with refined defaults.
- ⚛️ **`rsc: true`** — Components generated as React Server Components by default.
- 🖼️ **`iconLibrary: "lucide"`** — Uses Lucide icons for all UI primitives.

### 📄 `postcss.config.mjs`

```js
const config = { plugins: { "@tailwindcss/postcss": {} } };
export default config;
```

### 📄 `eslint.config.mjs`

Flat-config ESLint using `eslint-config-next` with **Core Web Vitals** and **TypeScript** rules.

### 🗂️ Path Aliases

| Alias          | Resolves To       | Usage                                   |
| -------------- | ----------------- | --------------------------------------- |
| `@/components` | `./components`    | `import Navbar from "@/components/..."` |
| `@/lib`        | `./lib`           | `import { cn } from "@/lib/utils"`      |
| `@/app`        | `./app`           | `import Layout from "@/app/layout"`     |
| `@/data`       | `./data`          | `import projects from "@/data/..."`     |
| `@/ui`         | `./components/ui` | `import { Button } from "@/ui/..."`     |

---

## 📊 GitHub Stats

> A live snapshot of repository activity, contribution streaks, and language breakdown.

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/girishlade111/freelancer-portfolio?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/girishlade111/freelancer-portfolio?style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/girishlade111/freelancer-portfolio?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/girishlade111/freelancer-portfolio?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/girishlade111/freelancer-portfolio?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/girishlade111/freelancer-portfolio?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/girishlade111/freelancer-portfolio?style=for-the-badge)
![GitHub watchers](https://img.shields.io/github/watchers/girishlade111/freelancer-portfolio?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/girishlade111/freelancer-portfolio?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/girishlade111/freelancer-portfolio?style=for-the-badge)

</div>

### 📈 Stats Card

<div align="center">

![Stats](https://github-readme-stats.vercel.app/api?username=girishlade111&show_icons=true&theme=tokyonight&hide_border=true&count_private=true)

</div>

### 🔥 Streak Stats

<div align="center">

![Streak](https://github-readme-streak-stats.herokuapp.com/?user=girishlade111&theme=tokyonight&hide_border=true)

</div>

### 🏆 Trophies

<div align="center">

![Trophies](https://github-profile-trophy.vercel.app/?username=girishlade111&theme=tokyonight&no-frame=true&no-bg=false&margin-w=4)

</div>

### 💻 Most Used Languages

<div align="center">

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=girishlade111&layout=compact&theme=tokyonight&hide_border=true)

</div>

### 📊 Project Stats Summary

- 📁 **Total Files:** 30+ organized across `app/`, `components/`, `data/`, `lib/`, and `public/`
- 🧩 **Components:** 9 section components + 4 UI primitives + 2 layout components
- 📊 **Data Sources:** 5 typed data files (projects, skills, process, testimonials, FAQs)
- 🎨 **Styling:** 100% Tailwind CSS v4 with utility-first approach
- ⚡ **Performance:** Server Components by default, Client Components on demand
- ♿ **Accessibility:** WCAG 2.2 AA target with keyboard-first interactions
- 🌐 **Browser Support:** Modern evergreen browsers (Chrome, Firefox, Safari, Edge)

---

## 🎨 Design System

> Token-driven, accessible, and implementation-focused. Built on a refined type scale, color palette, and motion system.

### 🖋️ Typography

| Token            | Value  | Use Case           |
| ---------------- | ------ | ------------------ |
| `font.size.xs`   | `12px` | Captions, badges   |
| `font.size.sm`   | `16px` | Body small         |
| `font.size.base` | `18px` | Default body       |
| `font.size.md`   | `18px` | Lead paragraphs    |
| `font.size.lg`   | `20px` | Subheadings        |
| `font.size.xl`   | `24px` | Section titles     |
| `font.size.2xl`  | `32px` | Major headings     |
| `font.size.3xl`  | `48px` | Hero titles        |
| `font.size.4xl`  | `64px` | Display typography |

### 🎨 Color Palette

| Token                  | Hex       | Usage           |
| ---------------------- | --------- | --------------- |
| `color.surface.base`   | `#000000` | Background base |
| `color.surface.raised` | `#f2f2f2` | Raised surfaces |
| `color.surface.strong` | `#171312` | Strong contrast |
| `color.text.secondary` | `#ffffff` | Primary text    |
| `color.text.tertiary`  | `#fc7200` | Accent / brand  |
| `color.text.inverse`   | `#0000ee` | Links & inverse |

### 📏 Spacing Scale

`4px · 5px · 8px · 10px · 24px · 32px · 80px · 100px`

### 🧩 Design Principles

- ✅ **Semantic tokens** over raw hex values.
- ✅ **State coverage** for every component: default, hover, focus-visible, active, disabled, loading, error.
- ✅ **Responsive behavior** specified for every component family.
- ✅ **Accessibility acceptance criteria** must be testable in implementation.

---

## ♿ Accessibility

> Built with a **WCAG 2.2 AA** target. Accessibility is not an afterthought.

- ⌨️ **Keyboard-First** — Every interactive element is fully reachable and operable via keyboard.
- 🔆 **Focus Visible** — Clear, high-contrast focus rings on all focusable elements.
- 🎨 **Color Contrast** — All text/background combinations meet AA contrast minimums.
- 🏷️ **Semantic HTML** — Proper landmarks (`<nav>`, `<main>`, `<footer>`, `<section>`).
- 🔊 **Screen Reader Friendly** — Meaningful labels, ARIA attributes where needed.
- 📐 **Responsive & Zoom** — Layouts remain usable at 200% zoom and on small screens.

---

## 🚢 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app is via the [Vercel Platform](https://vercel.com/new):

1. 🔼 Push your code to GitHub.
2. 🔗 Import the repository into Vercel.
3. ⚙️ Vercel auto-detects Next.js — no extra config required.
4. 🎉 Your portfolio is live at `https://your-project.vercel.app`.

### Other Platforms

- ▲ **Vercel** — Zero-config, edge-optimized
- 🌐 **Netlify** — Static + serverless
- 🚂 **Railway** — Container-based
- 🐳 **Docker** — Full control

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 🤝 Contributing

Contributions are **welcome and appreciated**! 💖

1. 🍴 **Fork** the repository
2. 🌿 **Create** your feature branch (`git checkout -b feature/AmazingFeature`)
3. ✅ **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 **Push** to the branch (`git push origin feature/AmazingFeature`)
5. 🔁 **Open** a Pull Request

### 📋 Contribution Guidelines

- Follow the existing code style and conventions.
- Run `npm run lint` before submitting a PR.
- Add tests or examples for new features when applicable.
- Update the README/docs for any user-facing changes.

---

## 📜 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

```
MIT License — feel free to use this project as inspiration for your own portfolio.
```

---

## 📬 Contact

**Girish Lade** — Freelance Developer

- 🌐 **Portfolio:** [girishlade.dev](https://girishlade.dev)
- 💼 **GitHub:** [@girishlade111](https://github.com/girishlade111)
- 🐦 **Twitter:** [@girishlade111](https://twitter.com/girishlade111)
- 💼 **LinkedIn:** [girishlade111](https://linkedin.com/in/girishlade111)
- ✉️ **Email:** [hello@girishlade.dev](mailto:hello@girishlade.dev)

---

## 🙏 Acknowledgments

- ⚡ [Next.js](https://nextjs.org/) — The React framework for production.
- 🎨 [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS.
- 🎞️ [Framer Motion](https://www.framer.com/motion/) — Motion library for React.
- 🧩 [shadcn/ui](https://ui.shadcn.com/) — Beautiful, accessible components.
- 🎯 [Lucide Icons](https://lucide.dev/) — Consistent icon set.
- 🖼️ [Placehold.co](https://placehold.co/) — Placeholder images for demos.

---

<div align="center">

### ⭐ If you found this project useful, please consider giving it a star!

**Made with ❤️ and ☕ by [Girish Lade](https://github.com/girishlade111)**

</div>
