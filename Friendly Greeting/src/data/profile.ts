import photo from "@/assets/sahil-wable.jpg.asset.json";
import resume from "@/assets/sahil-wable-resume.pdf.asset.json";

export const profile = {
  name: "Sahil Wable",
  initials: "SW",
  role: "AI Engineer",
  specialization: "Generative AI • LLMs • AI Agents • RAG • Voice AI • Backend Engineering",
  heroStatement: "Building intelligent systems beyond the chatbot.",
  heroSupport:
    "Generative AI, LLM applications, AI agents, RAG systems, and real-time voice AI.",
  positioning:
    "AI Engineer focused on building production-oriented Generative AI applications, LLM systems, AI agents, RAG pipelines, and real-time voice AI systems.",
  summary:
    "AI Application Engineer designing and deploying production-grade GenAI systems: RAG pipelines, multi-tenant AI platforms, and real-time voice agentic workflows for enterprise clients. I work across Python, Node.js/TypeScript, FastAPI, LangChain, PostgreSQL (pgvector), Qdrant, and Redis.",
  philosophy: [
    "I build AI systems, not AI demos. A model call is the easy part — the system around it decides whether it survives production.",
    "My work connects LLMs with real applications: APIs, databases, retrieval layers, real-time communication, and backend infrastructure.",
    "I care about latency, state, failure handling, and grounding. Those are the differences between a prototype and a platform.",
  ],
  // Real contact details — update here to change them everywhere.
  email: "sahilwable.in@gmail.com",
  phone: "+91 87674 48964",
  linkedin: "https://linkedin.com/in/sahil-wable",
  github: "https://github.com/SahilWable07",
  linkedinLabel: "linkedin.com/in/sahil-wable",
  githubLabel: "github.com/SahilWable07",
  location: "Sangamner, Maharashtra, India",
  // Replace the uploaded files to change these.
  photoUrl: photo.url,
  resumeUrl: resume.url,
};

export const capabilities = [
  "LLM Applications",
  "AI Agents",
  "RAG Systems",
  "Voice AI",
  "FastAPI",
  "Real-Time Systems",
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "University of Mysore",
    period: "2023 – 2026",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Experience", to: "/experience" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
] as const;
