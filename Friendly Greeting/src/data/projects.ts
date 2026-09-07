export type FlowNode = { id: string; label: string; detail: string };

export type CaseSection = { heading: string; body: string; bullets?: string[] };

export type Project = {
  slug: string;
  index: string;
  name: string;
  badge: string;
  categories: string[];
  visual: "voice" | "rag" | "resume" | "docs";
  short: string;
  subtitle: string;
  stack: string[];
  flow: FlowNode[];
  sections: CaseSection[];
  caseStudy: boolean;
};

export const projects: Project[] = [
  {
    slug: "ai-calling-agent",
    index: "01",
    name: "AI Calling Agent",
    badge: "VOICE AI",
    categories: ["Voice AI", "AI Agents", "Backend", "RAG"],
    visual: "voice",
    short:
      "Real-time AI voice calling system connecting telephony audio, WebSockets, speech processing, LLM reasoning, and text-to-speech.",
    subtitle: "Real-time conversational voice AI",
    stack: [
      "Node.js",
      "TypeScript",
      "Express",
      "React 19",
      "PostgreSQL (pgvector)",
      "Redis",
      "Twilio / Vobiz / Plivo",
      "Sarvam AI",
      "Deepgram",
      "ElevenLabs",
      "Gemini Live API",
      "OpenAI",
      "Anthropic",
    ],
    flow: [
      { id: "caller", label: "Caller", detail: "A real phone call from an inbound or outbound campaign." },
      { id: "telephony", label: "Telephony Provider", detail: "Twilio, Vobiz, or Plivo bridges the call into the platform as a media stream." },
      { id: "ws", label: "WebSocket", detail: "Bi-directional streaming carries 8kHz mu-law audio in both directions with no buffering stalls." },
      { id: "audio", label: "Audio Processing", detail: "Decoding, resampling, and chunking of telephony audio for the speech layer." },
      { id: "stt", label: "Speech-to-Text", detail: "Sarvam AI or Deepgram transcribes the caller's speech incrementally as they talk." },
      { id: "llm", label: "LLM / AI Agent", detail: "Gemini Live, OpenAI, or Anthropic reasons over conversation context and decides to answer or call a tool." },
      { id: "tts", label: "Text-to-Speech", detail: "Sarvam AI or ElevenLabs renders the reply, streamed back the moment the first tokens arrive." },
      { id: "back", label: "Caller", detail: "Audio returns to the caller with barge-in support, so they can interrupt the agent naturally." },
    ],
    sections: [
      {
        heading: "Problem",
        body: "Enterprise phone workflows — lead capture, appointment booking, follow-ups — are high volume and low variance, but scripted IVR trees fail the moment a caller phrases something unexpectedly. The system needed to hold a natural conversation over a normal phone line, for multiple client organisations at once, without the pauses that make an AI voice unusable.",
      },
      {
        heading: "Architecture",
        body: "A multi-tenant platform with a Node.js/TypeScript backend and a React 19 + Vite dashboard. Every tenant has isolated configuration, knowledge, voices, and telephony credentials.",
        bullets: [
          "Multi-provider telephony abstraction across Twilio, Vobiz, and Plivo",
          "Bi-directional WebSocket audio bridge for streaming media",
          "Pluggable STT, LLM, and TTS providers behind one interface",
          "PostgreSQL with pgvector for tenant-scoped retrieval",
          "Redis for session, conversation, and call state",
        ],
      },
      {
        heading: "Real-Time Pipeline",
        body: "Audio → STT → LLM → TTS → Audio, with each stage streaming into the next rather than waiting for completion. Partial transcripts start the reasoning step, and the first synthesised audio frames leave while the model is still generating. End-to-end response latency lands under one second, with real-time barge-in and interruption handling.",
      },
      {
        heading: "Backend",
        body: "The service layer handles concurrency, provider failover, and campaign orchestration.",
        bullets: [
          "Async streaming services over Express and WebSockets",
          "Outbound campaign batch dispatcher with calling-window enforcement",
          "Wallet pre-flight checks before a call is placed",
          "Easebuzz payment gateway with SHA-512 signed transactions",
          "JWT-secured developer APIs and a Super Admin control centre with audit logging",
        ],
      },
      {
        heading: "AI Layer",
        body: "The agent is more than a prompt — it maintains context and acts.",
        bullets: [
          "Prompt engineering tuned for spoken, interruptible dialogue",
          "Conversation context and memory carried across turns",
          "Dynamic tool calling for appointment booking, lead capture, and CRM writes",
          "RAG-based knowledge retrieval with pgvector for grounded answers",
          "Post-call AI analyzer producing summaries and sentiment labels",
        ],
      },
      {
        heading: "Engineering Challenges",
        body: "Voice is unforgiving — a delay that is invisible in a chat UI is a broken conversation on a phone call.",
        bullets: [
          "Latency budget shared across STT, LLM, and TTS",
          "Streaming and chunk boundaries without audible artefacts",
          "8kHz mu-law telephony audio conversion in both directions",
          "Interruption handling: cancelling in-flight generation cleanly",
          "State management per call, per tenant, under concurrency",
          "Provider reliability and failover across telephony and AI vendors",
        ],
      },
    ],
    caseStudy: true,
  },
  {
    slug: "boardview-ai-hub",
    index: "02",
    name: "BoardView AI Hub",
    badge: "GENERATIVE AI",
    categories: ["Generative AI", "RAG", "AI Agents", "Backend"],
    visual: "rag",
    short:
      "AI-powered platform involving document intelligence, retrieval, LLM workflows, backend APIs, Redis, and vector search.",
    subtitle: "Enterprise AI platform for document intelligence and agentic workflows",
    stack: [
      "Python",
      "FastAPI",
      "LangChain",
      "Qdrant",
      "PostgreSQL",
      "Redis",
      "Gemini",
      "DeepSeek",
      "Docker",
    ],
    flow: [
      { id: "documents", label: "Documents", detail: "Client-supplied source material: policies, catalogues, records, and knowledge bases." },
      { id: "processing", label: "Processing", detail: "Extraction and normalisation of raw documents into clean, consistent text." },
      { id: "chunking", label: "Chunking", detail: "Splitting content into retrievable units that preserve meaning and context." },
      { id: "embeddings", label: "Embeddings", detail: "Each chunk is embedded into a vector representation for semantic comparison." },
      { id: "qdrant", label: "Qdrant", detail: "Vector store holding tenant-isolated collections so clients never see each other's knowledge." },
      { id: "retriever", label: "Retriever", detail: "Selects the most relevant chunks for the incoming question before any generation happens." },
      { id: "llm", label: "LLM", detail: "Gemini or DeepSeek generates the answer grounded strictly in retrieved context, and can call tools." },
      { id: "response", label: "Response", detail: "A structured, context-aware response returned through the platform APIs." },
    ],
    sections: [
      {
        heading: "Problem",
        body: "Enterprise teams hold their real knowledge in documents that no interface can search meaningfully. A general-purpose model answers confidently and wrongly. The platform needed grounded answers per client, with strict isolation between tenants.",
      },
      {
        heading: "Multi-Tenant Architecture",
        body: "Each client gets its own knowledge base, tool integrations, and configuration. Isolation is enforced at the vector-collection and query level, not just in the UI, so retrieval can never cross a tenant boundary.",
      },
      {
        heading: "RAG & Vector Search",
        body: "Documents are processed, chunked, embedded, and stored in Qdrant. Retrieval runs before generation so the model answers from source material instead of memory, which is what makes the output defensible to a business user.",
      },
      {
        heading: "Agentic Workflows",
        body: "A dynamic tool execution framework lets the model act rather than only answer.",
        bullets: [
          "AI-driven appointment booking and lead capture",
          "Business process automation through callable tools",
          "Live information retrieval during a conversation",
          "Conversational memory across a session",
        ],
      },
      {
        heading: "Backend & Infrastructure",
        body: "FastAPI services expose the workflows, Redis carries session and conversational state, PostgreSQL holds application data, and Docker packages the deployment for horizontal scaling.",
      },
    ],
    caseStudy: true,
  },
  {
    slug: "digital-document-library",
    index: "03",
    name: "Digital Document Library",
    badge: "DOCUMENT INTELLIGENCE",
    categories: ["Generative AI", "RAG", "Backend"],
    visual: "docs",
    short:
      "AI-powered document search platform that makes the content inside PDFs, office files, images, and scanned documents findable through natural-language queries.",
    subtitle: "Content-based document retrieval with hybrid search and OCR",
    stack: [
      "Python",
      "REST APIs",
      "Qdrant",
      "PostgreSQL",
      "OCR",
      "Embeddings",
      "Vector Search",
      "Hybrid Search",
    ],
    flow: [
      { id: "upload", label: "Document Upload", detail: "Users upload PDF, DOCX, XLSX, PPTX, JPG, PNG, or scanned documents into the library." },
      { id: "extract", label: "Extraction", detail: "The system reads the document and pulls out its text content, format by format." },
      { id: "ocr", label: "OCR", detail: "Scanned pages and images are passed through OCR so their contents also become searchable." },
      { id: "process", label: "Processing", detail: "Extracted content is cleaned and prepared into units suitable for retrieval." },
      { id: "index", label: "Search Index", detail: "Content is indexed into Qdrant for vector search, with metadata held in PostgreSQL." },
      { id: "query", label: "Search Query", detail: "The user searches in plain language, e.g. 'Saish Jape birth certificate'." },
      { id: "hybrid", label: "Keyword + Semantic", detail: "Exact-term matching and semantic similarity run together so different wording still matches." },
      { id: "rank", label: "Ranking", detail: "Results are ranked by relevance, with the matched passage and page surfaced." },
      { id: "result", label: "Matching Documents", detail: "The user opens or downloads the document, even when its filename says nothing useful." },
    ],
    sections: [
      {
        heading: "Problem",
        body: "Organisations store thousands of documents across folders, and the useful information lives inside the file rather than in its name. A file called document_4387.pdf may in fact be a birth certificate for a specific person on a specific date. Filename search cannot find it, and scanned PDFs have no selectable text at all.",
      },
      {
        heading: "Solution",
        body: "The platform makes the actual document content searchable. Upload, extraction, OCR, processing, indexing, search, retrieval, and ranking form one pipeline, so a document can be located from information contained inside it rather than from how it was named.",
      },
      {
        heading: "Document Processing",
        body: "Multiple document formats are handled through a single ingestion path.",
        bullets: [
          "PDF, DOCX, XLSX, and PPTX text extraction",
          "OCR for scanned PDFs and image documents",
          "Content preparation and indexing for retrieval",
          "Document metadata handling in PostgreSQL",
        ],
      },
      {
        heading: "Hybrid Search",
        body: "Keyword search handles exact terms such as a name, an Aadhaar reference, or a date. Semantic search handles different phrasing, so a query for 'identity proof of Saish' can still surface an Aadhaar card. Combining both is what makes the retrieval reliable across how people actually search.",
      },
      {
        heading: "Results & Retrieval",
        body: "A result explains itself: the document type, the person it refers to, the page, a relevance score, and the matched passage. From there the document can be opened or downloaded directly.",
      },
      {
        heading: "Architecture Note",
        body: "The design is retrieval-augmented in shape, but deliberately keeps document finding in the retrieval layer rather than making an LLM responsible for locating the file. Retrieval and ranking decide the answer; that keeps results traceable to real source documents.",
      },
      {
        heading: "My Role",
        body: "AI / Backend Developer, working on the intelligent document processing and search functionality.",
        bullets: [
          "Document upload and content extraction workflow",
          "OCR-based processing for scanned documents",
          "Keyword, semantic, and hybrid search implementation",
          "Document indexing and search result ranking",
          "Search API development and metadata handling",
        ],
      },
    ],
    caseStudy: true,
  },
  {
    slug: "qdrant-management",
    index: "04",
    name: "Qdrant Management",
    badge: "RAG",
    categories: ["RAG", "Backend"],
    visual: "rag",
    short:
      "Vector database management system for collections, documents, embeddings, and vector-search workflows.",
    subtitle: "Vector database operations tooling",
    stack: ["Python", "Qdrant", "Embeddings", "Vector Search", "REST APIs"],
    flow: [],
    sections: [],
    caseStudy: false,
  },
  {
    slug: "rapid-bot",
    index: "05",
    name: "Rapid Bot",
    badge: "AI AGENTS",
    categories: ["AI Agents", "Generative AI"],
    visual: "resume",
    short: "Conversational AI application demonstrating LLM interaction and backend API integration.",
    subtitle: "Conversational AI application",
    stack: ["Python", "LLM APIs", "FastAPI"],
    flow: [],
    sections: [],
    caseStudy: false,
  },
];

export const projectFilters = ["All", "Generative AI", "AI Agents", "Voice AI", "RAG", "Backend"];

export const featuredProjects = projects.filter((p) => p.caseStudy);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
