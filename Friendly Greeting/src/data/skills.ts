export const skillGroups = [
  {
    category: "Programming",
    items: ["Python", "JavaScript", "TypeScript", "Dart", "SQL", "HTML", "CSS"],
  },
  {
    category: "AI / Generative AI",
    items: [
      "Generative AI",
      "Large Language Models",
      "Prompt Engineering",
      "AI Agents",
      "Agentic Workflows",
      "Function / Tool Calling",
      "RAG",
      "Embeddings",
      "Semantic Search",
      "NLP",
    ],
  },
  {
    category: "AI APIs",
    items: [
      "Google Gemini API",
      "Gemini Live API",
      "OpenAI",
      "Anthropic",
      "DeepSeek",
      "Groq",
      "LangChain Agents",
      "Deepgram (STT/TTS)",
      "Sarvam AI (STT/TTS)",
      "ElevenLabs",
    ],
  },
  {
    category: "Backend",
    items: [
      "FastAPI",
      "Express.js",
      "Node.js",
      "REST APIs",
      "WebSockets",
      "Async Programming",
      "Microservices",
      "Multi-tenant Architecture",
      "JWT Authentication",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL (pgvector)", "MySQL", "Redis", "Qdrant", "Vector Databases"],
  },
  {
    category: "Infrastructure",
    items: ["Git", "GitHub", "Docker", "Linux", "Vite", "React 19", "Tailwind CSS"],
  },
];

export const skillChains = [
  {
    title: "Backend Core",
    body: "Requests enter through async FastAPI services, call model APIs, and use Redis and PostgreSQL for state and persistence.",
    nodes: ["Python", "FastAPI", "AI APIs", "Redis", "PostgreSQL"],
  },
  {
    title: "Retrieval",
    body: "Source material is embedded into a vector store, retrieved by relevance, and passed to the model as grounded context.",
    nodes: ["RAG", "Embeddings", "Qdrant", "Retriever", "LLM"],
  },
  {
    title: "Voice AI",
    body: "Live audio streams over WebSockets, is transcribed, reasoned over by the model, and spoken back with minimal delay.",
    nodes: ["Voice AI", "WebSocket", "STT", "LLM", "TTS"],
  },
];
