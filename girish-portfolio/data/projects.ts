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
    image: "https://placehold.co/800x500/112240/C9A84C?text=LS+PDF",
    size: "large",
  },
  {
    id: 2,
    title: "LadeStack Coder",
    description:
      "Browser-based AI code playground with Gemini + NVIDIA NIM integration, real-time execution, and shareable snippets.",
    tags: ["NVIDIA NIM", "Gemini", "Monaco Editor"],
    url: "https://code.ladestack.in",
    image: "https://placehold.co/800x500/112240/C9A84C?text=LadeStack+Coder",
    size: "medium",
  },
  {
    id: 3,
    title: "LadeDesign",
    description:
      "AI-powered UI/UX design tool that generates multi-screen HTML app flows from a single product description.",
    tags: ["Claude API", "HTML Generation", "Next.js"],
    url: "https://design.ladestack.in",
    image: "https://placehold.co/800x500/112240/C9A84C?text=LadeDesign",
    size: "medium",
  },
  {
    id: 4,
    title: "LadeStack Notes",
    description:
      "NotebookLM-style AI research tool with RAG chat, document Q&A, and studio-style audio summaries powered by pgvector.",
    tags: ["Supabase", "pgvector", "NVIDIA NIM"],
    url: "https://ladestack.in",
    image: "https://placehold.co/800x500/112240/C9A84C?text=LadeStack+Notes",
    size: "large",
  },
  {
    id: 5,
    title: "LS Docs",
    description:
      "AI-powered Google Docs alternative — Tiptap rich text editor, spreadsheet tables, streaming AI, and full export system.",
    tags: ["Tiptap", "NVIDIA NIM", "Supabase"],
    url: "https://ladestack.in",
    image: "https://placehold.co/800x500/112240/C9A84C?text=LS+Docs",
    size: "medium",
  },
  {
    id: 6,
    title: "Awesome Free Stack",
    description:
      "Curated open-source list of 200+ free developer tools across 16 categories. 300+ GitHub stars.",
    tags: ["Open Source", "GitHub", "Dev Tools"],
    url: "https://github.com/girishlade/awesome-free-stack",
    image: "https://placehold.co/800x500/112240/C9A84C?text=Awesome+Free+Stack",
    size: "medium",
  },
];
