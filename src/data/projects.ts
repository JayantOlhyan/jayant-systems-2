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
  bgLight: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  image?: string;
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
    accentColor: "#E7A83E",
    bgDark: "#315C4B",
    bgLight: "#F4EBD8",
    githubUrl: "https://github.com/JayantOlhyan",
    featured: true,
    image: "/assets/3d/teacher_sathi_3d.png"
  },
  {
    id: "khelclan",
    slug: "khel-clan",
    title: "Khel Clan",
    tagline: "Modern Esports & Gaming Community Platform",
    category: "Gaming & Community Platforms",
    capabilities: ["Community Architecture", "Real-time Leaderboards", "Tournament Management", "Identity Design"],
    client: "Khel Clan Gaming",
    role: "Lead Full-Stack Developer",
    duration: "8 Weeks",
    year: "2025",
    summary: "A high-performance community platform built for competitive gaming, featuring live tournament brackets, real-time player statistics, and automated matchmaking queues.",
    problem: "Fragmented communication across Discord and Google Sheets made tournament organization inefficient and stunted community growth.",
    approach: "Developed a centralized Next.js application with a Supabase backend to handle real-time state synchronization for active matches and leaderboards.",
    solution: "An immersive, neon-driven web platform that automates tournament check-ins, tracks player ELO, and serves as the ultimate digital clubhouse for the clan.",
    technologies: ["React 19", "Next.js", "Supabase", "TypeScript", "Tailwind CSS v4"],
    metrics: [
      { label: "Active Players", value: "2,500+" },
      { label: "Tournament Automation", value: "100% Automated Brackets" },
      { label: "Community Engagement", value: "3x Increase" }
    ],
    accentColor: "#DFFF63",
    bgDark: "#173C2B",
    bgLight: "#F4F1E8",
    featured: true,
    image: "/assets/3d/khel_clan_3d.png"
  },
  {
    id: "arhamestate",
    slug: "arham-estate",
    title: "Arham Estate",
    tagline: "Premium Real Estate Discovery & CRM Integration",
    category: "Real Estate & Lead Generation",
    capabilities: ["Property Filtering", "CRM Integration", "Immersive Visuals", "SEO Architecture"],
    client: "Arham Estate Agency",
    role: "Frontend Architect",
    duration: "5 Weeks",
    year: "2024",
    summary: "A luxurious digital storefront for high-end properties, integrated with a bespoke CRM to manage incoming leads and automate property tour scheduling.",
    problem: "The client's previous website suffered from slow image loading, poor mobile responsiveness, and zero integration with their internal sales pipeline.",
    approach: "Implemented a headless CMS structure for effortless property updates, paired with an ultra-fast Next.js frontend and GSAP for cinematic property reveals.",
    solution: "A highly visual, fast-loading property discovery platform that captures leads seamlessly into their sales CRM via custom API webhooks.",
    technologies: ["Next.js App Router", "Sanity CMS", "GSAP ScrollTrigger", "Tailwind CSS"],
    metrics: [
      { label: "Lead Conversion", value: "+45% Increase" },
      { label: "Page Load Latency", value: "< 1.2s Global" },
      { label: "Mobile Traffic", value: "65% of Total Users" }
    ],
    accentColor: "#0BAADC",
    bgDark: "#153B32",
    bgLight: "#F4F0E7",
    featured: true,
    image: "/assets/3d/arham_estate_3d.png"
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
    accentColor: "#D89D32",
    bgDark: "#7B1818",
    bgLight: "#EEE8DC",
    featured: true,
    image: "/assets/3d/msit_3d.png"
  }
];
