export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  capabilities: string[];
  client: string;
  role: string;
  duration: string;
  year: string;
  summary: string;
  problem: string;
  approach: string;
  solution: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  bgDark: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "teachersathi",
    slug: "teacher-sathi",
    title: "Teacher Sathi",
    tagline: "AI-Powered Educational Co-Pilot & Automation System",
    category: "EdTech & AI Engineering",
    capabilities: ["AI Agents", "LLM Fine-tuning", "WhatsApp Automation", "Full-Stack Web App"],
    client: "Educational Institutions & Tutors",
    role: "Lead Systems Architect & Developer",
    duration: "6 Weeks",
    year: "2024",
    summary: "Teacher Sathi is an intelligent co-pilot designed to automate lesson planning, student performance tracking, and parental communication over WhatsApp for over 500+ educators.",
    problem: "Educators spend over 15 hours weekly manually crafting lesson plans, grading assignments, and responding to repetitive parent queries across non-standardized channels.",
    approach: "Engineered an AI agent framework with specialized prompt pipelines for curriculum mapping, integrated directly with a WhatsApp Business API gateway for instant broadcast messaging.",
    solution: "A unified web platform coupled with a 24/7 WhatsApp AI Assistant that generates contextual lesson plans, quizzes, and automated student progress cards in under 30 seconds.",
    technologies: ["Next.js 16", "Python FastAPI", "OpenAI GPT-4o", "PostgreSQL", "WhatsApp Cloud API", "Tailwind CSS"],
    metrics: [
      { label: "Time Saved / Week", value: "12+ Hours per Educator" },
      { label: "AI Generation Speed", value: "< 2.5s Response Time" },
      { label: "Active Users", value: "500+ Teachers" }
    ],
    accentColor: "#FF5A00",
    bgDark: "#120B04",
    githubUrl: "https://github.com/JayantOlhyan",
    featured: true,
  },
  {
    id: "healthkinator",
    slug: "healthkinator",
    title: "Healthkinator",
    tagline: "Intelligent Triage & AI Medical Symptom Checker",
    category: "Healthcare & AI Systems",
    capabilities: ["Medical AI Triage", "Natural Language Processing", "Interactive UI", "Real-Time Telemetry"],
    client: "ET GenAI Hackathon 2025 (Finalist Project)",
    role: "AI & Full-Stack Engineer",
    duration: "48 Hours",
    year: "2025",
    summary: "Built for the ET GenAI 2025 Hackathon, Healthkinator is a natural language medical symptom triage assistant that asks dynamic follow-up questions to provide preliminary health guidance.",
    problem: "Patients often struggle to articulate medical symptoms or accurately identify potential urgency levels, overcrowding emergency queues with non-critical inquiries.",
    approach: "Designed a state-machine conversational flow driven by medical knowledge graph embeddings and multi-turn clinical questioning algorithms.",
    solution: "An ultra-fast, empathetic web application that guides users through structured symptom assessment, generating concise summary reports formatted for physician review.",
    technologies: ["React 19", "Google Gemini 1.5 Pro", "FastAPI", "TypeScript", "Tailwind CSS", "Vercel AI SDK"],
    metrics: [
      { label: "Hackathon Standing", value: "Top 10 Finalist (ET GenAI)" },
      { label: "Triage Accuracy", value: "94% Benchmark Match" },
      { label: "Assessment Time", value: "< 90 Seconds" }
    ],
    accentColor: "#00C853",
    bgDark: "#03140A",
    featured: true,
  },
  {
    id: "sentinelai",
    slug: "sentinel-ai",
    title: "Sentinel AI",
    tagline: "Autonomous Threat Monitoring & Security Pipeline",
    category: "Cybersecurity & Automation",
    capabilities: ["Autonomous Security Agents", "Log Streaming", "Anomaly Detection", "Real-Time Dashboard"],
    client: "Enterprise Security Audit",
    role: "Systems Architect & Developer",
    duration: "4 Weeks",
    year: "2024",
    summary: "Sentinel AI is an autonomous security pipeline that ingests server logs in real time, flags anomalous API access patterns, and triggers instant slack/telegram escalation alerts.",
    problem: "Manual security log auditing fails to detect subtle rate-limiting abuses, multi-vector bot probes, and unauthorized credential stuffing attempts across distributed microservices.",
    approach: "Created a streaming log ingestion pipeline integrated with an isolated LLM evaluator that parses request payloads for signature-less zero-day anomaly indicators.",
    solution: "An enterprise dashboard providing real-time threat scores, auto-blocking IP configurations, and detailed incident breakdown reports.",
    technologies: ["Next.js App Router", "Python", "LangChain", "Supabase Vector DB", "Tailwind CSS", "WebSockets"],
    metrics: [
      { label: "Log Ingestion Rate", value: "10k Events / Sec" },
      { label: "Detection Latency", value: "< 150ms" },
      { label: "False Positive Reduction", value: "85%" }
    ],
    accentColor: "#2979FF",
    bgDark: "#040B17",
    featured: true,
  },
  {
    id: "msit-rebuild",
    slug: "msit-experience",
    title: "MSIT Digital Experience",
    tagline: "Modern Institutional Web Platform Rebuild",
    category: "Creative Technology & Web Engineering",
    capabilities: ["Institutional Architecture", "Design System", "Headless Content Management", "Performance Optimization"],
    client: "Maharaja Surajmal Institute of Technology",
    role: "Lead Frontend Engineer",
    duration: "5 Weeks",
    year: "2024",
    summary: "A complete conceptual redesign and modern technical implementation of MSIT's institutional web portal, focusing on accessibility, fast load times, and fluid navigation.",
    problem: "Legacy institutional web portals are slow, cluttered, poorly optimized for mobile devices, and difficult for prospective students and faculty to navigate.",
    approach: "Restructured information architecture, established a modern design system with institutional editorial typography, and built a lightweight static App Router frontend.",
    solution: "A high-performance digital portal featuring lightning-fast search, dynamic department directories, interactive course maps, and a 100/100 Lighthouse score.",
    technologies: ["Next.js 16", "TypeScript", "GSAP ScrollTrigger", "Lenis", "Tailwind CSS v4"],
    metrics: [
      { label: "Lighthouse Performance", value: "100 / 100 Score" },
      { label: "Page Load Time", value: "0.4s Global Avg" },
      { label: "Mobile Usability", value: "100% Score" }
    ],
    accentColor: "#7C4DFF",
    bgDark: "#0B0516",
    featured: true,
  }
];
