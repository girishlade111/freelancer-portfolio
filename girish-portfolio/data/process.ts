import { Search, LayoutTemplate, Code2, Rocket } from "lucide-react";

export const processSteps = [
  {
    id: "01",
    step: "Discover",
    icon: Search, // Store the component directly to make rendering easy
    description:
      "Deep-dive into your goals, users, and constraints. No code is written until the vision is crystal clear.",
  },
  {
    id: "02",
    step: "Plan",
    icon: LayoutTemplate,
    description:
      "Architecture decisions, tech stack selection, scope definition, and a clear milestone timeline agreed upfront.",
  },
  {
    id: "03",
    step: "Build",
    icon: Code2,
    description:
      "Clean, scalable code shipped in iterations. Daily commits, async updates, and zero black-box surprises.",
  },
  {
    id: "04",
    step: "Deploy",
    icon: Rocket,
    description:
      "Production-ready launch with CI/CD, performance tuning, full documentation, and post-launch support.",
  },
];
