import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Braces,
  Lightbulb,
  Users,
  Mail,
  Phone,
  Sparkles,
  MessageCircle,
  GraduationCap,
  Landmark,
  Scale,
  Atom,
  Server,
  Database,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
} from "@/components/icons/brand";

// ============================================================
// CENTRALIZED PORTFOLIO DATA
// ============================================================

type BrandIcon = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
type ContactIcon = BrandIcon | LucideIcon;

export type Project = {
  name: string;
  featured?: boolean;
  description: string;
  stack: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: LucideIcon;
};

export type CertificateRecord = {
  id: string;
  title: string;
  organization: string;
  certificateType: string;
  date: string;
  category: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  timelineYear: string;
  featured?: boolean;
  assetMissing?: boolean;
};

export const portfolio = {
  name: {
    first: "NIRANJAN",
    last: "K",
    full: "NIRANJAN K",
  },
  role: "AI & ML Engineering Student",
  label: "PORTFOLIO",
  tagline:
    "Building AI-powered applications, exploring machine learning, and solving real-world problems with software.",
  bio: "Motivated Artificial Intelligence & Machine Learning undergraduate with strong interest in software development, AI-powered web applications, and problem solving. Experienced in building practical projects using Python, Java, and modern web technologies. Passionate about creating innovative solutions with real-world impact.",
  status: {
    label: "AVAILABLE FOR OPPORTUNITIES",
    short: "Open to opportunities",
    available: true,
  },
  location: "India",
  github: {
    label: "View GitHub",
    href: "https://github.com/niranjan20069019-pixel",
    username: "niranjan20069019-pixel",
  },
  phone: {
    display: "9019283698",
    href: "tel:9019283698",
  },
  email: {
    display: "niranjan20069019@gmail.com",
    href: "mailto:niranjan20069019@gmail.com",
  },
  portrait: {
    src: "/niru.jpeg",
    alt: "Portrait of Niranjan K",
  },
  floatingCard: {
    title: "AI & ML",
    subtitle: "BUILDING • LEARNING • CREATING",
  },
  currently: {
    label: "CURRENTLY",
    value: "AI & ML Engineering Student",
  },
  focus: {
    label: "FOCUS",
    items: [
      "Artificial Intelligence",
      "Machine Learning",
      "Software Development",
      "AI-powered Web Applications",
      "Problem Solving",
    ],
  },
  experience: {
    summary:
      "Currently building skills and projects while continuing my studies in Artificial Intelligence & Machine Learning.",
    items: [] as {
      title: string;
      org: string;
      period: string;
      description: string;
    }[],
  },
  certificates: [
    {
      id: "cybersecurity-tech-mahindra",
      title: "Cybersecurity",
      organization: "Tech Mahindra Foundation",
      certificateType: "Certificate of Participation",
      date: "March 12, 2026",
      category: "Cybersecurity / Professional Learning",
      description:
        "Successfully participated in the online skilling course on Cybersecurity.",
      imageSrc: "/certificates/cybersecurity-tech-mahindra.png",
      imageAlt: "Cybersecurity certificate from Tech Mahindra Foundation",
      timelineYear: "2026",
      featured: false,
    },
    {
      id: "nsttp-java-full-stack-react-ai",
      title: "National Level Short Term Training Program – 2K24",
      organization: "S.E.A College of Engineering & Technology",
      certificateType: "Student Participation",
      date: "December 2, 2024 – December 22, 2024",
      category: "Training Program / Full Stack Development / AI",
      description:
        "Participated in a National Level Short Term Training Program focused on Java Full Stack development with React JS and AI.",
      imageSrc: "/certificates/nsttp-java-full-stack-react-ai.png",
      imageAlt: "National Level Short Term Training Program certificate",
      timelineYear: "2024",
      featured: false,
    },
    {
      id: "next-gen-security-workshop",
      title: "Next-Gen Security: Attack Simulation and Analysis with Modern Tools",
      organization: "Department of AI & ML, ISE",
      certificateType: "Participation Certificate",
      date: "October 14, 2025 – October 18, 2025",
      category: "Cybersecurity / Workshop",
      description:
        "Completed a hands-on workshop on attack simulation and analysis with modern security tools as part of a Faculty Student Development Program.",
      imageSrc: "/certificates/next-gen-security-workshop.png",
      imageAlt: "Next-Gen Security workshop certificate",
      timelineYear: "2025",
      featured: false,
    },
    {
      id: "sap-hackfest-2025",
      title: "SAP HACKFEST 2025",
      organization: "SAP Labs India and NextGrids",
      certificateType: "Participation Certificate",
      date: "May 27, 2025",
      category: "Hackathon / Innovation / Teamwork",
      description:
        "Actively participated and presented an idea at SAP HACKFEST 2025 as part of Team Trailblazer, contributing innovative ideas addressing real-world challenges.",
      imageSrc: "/certificates/sap-hackfest-2025.png",
      imageAlt: "SAP HACKFEST 2025 certificate for Team Trailblazer",
      timelineYear: "2025",
      featured: true,
    },
    {
      id: "sih-2026",
      title: "Smart India Hackathon (SIH) 2026",
      organization: "S.E.A. College of Engineering & Technology",
      certificateType: "Certificate of Participation",
      date: "September 2, 2026",
      category: "Hackathon / Innovation / Problem Solving",
      description:
        "Actively participated in the College-Level Smart India Hackathon (SIH) 2026 held at S.E.A. College of Engineering & Technology.",
      imageSrc: "/certificates/sih-2026.png",
      imageAlt: "Smart India Hackathon 2026 participation certificate",
      timelineYear: "2026",
      featured: true,
    },
  ] as CertificateRecord[],
  education: [
    {
      degree: "B.E. in Artificial Intelligence & Machine Learning",
      institution: "S E A College of Engineering and Technology",
      cgpa: "8.9",
    },
  ],
  /** Skills from resume */
  skills: [
    { label: "Python", icon: Code2 },
    { label: "Java", icon: Braces },
    { label: "AI-assisted Web Development", icon: Sparkles },
    { label: "Problem Solving", icon: Lightbulb },
    { label: "Team Collaboration", icon: Users },
  ] as { label: string; icon: LucideIcon }[],
  /**
   * Technologies demonstrated in public GitHub projects.
   * Not claimed as professional work experience.
   */
  projectTechnologies: [
    { label: "React / Next.js", icon: Atom },
    { label: "TypeScript", icon: Code2 },
    { label: "Node.js / Express", icon: Server },
    { label: "PostgreSQL / Prisma", icon: Database },
    { label: "Socket.IO / WebRTC", icon: MessageCircle },
    { label: "Tailwind CSS", icon: Sparkles },
  ] as { label: string; icon: LucideIcon }[],
  projects: [
    {
      name: "ChatSphere",
      featured: true,
      description:
        "A modern real-time messaging platform inspired by apps like WhatsApp, Telegram, Discord, and Slack. Users connect through unique usernames instead of phone numbers.",
      stack: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "Framer Motion",
        "Node.js",
        "Express",
        "Socket.IO",
        "PostgreSQL",
        "Prisma",
        "JWT",
        "Cloudinary",
        "WebRTC",
      ],
      features: [
        "Real-time one-to-one and group messaging",
        "Voice / video calls and screen sharing",
        "Friend requests, block, and reporting",
        "Media sharing, voice notes, and documents",
        "Typing indicators and read receipts",
        "JWT auth with refresh token rotation",
      ],
      githubUrl: "https://github.com/niranjan20069019-pixel/ChatSphere",
      liveUrl: "https://chatsphere-ootu.onrender.com",
      icon: MessageCircle,
    },
    {
      name: "SkillBridge",
      featured: true,
      description:
        "An AI-powered education platform designed to help bridge the skill gap, particularly for rural India, through AI guidance, learning resources, multilingual support, and interactive learning features.",
      stack: [
        "React 18",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "shadcn/ui",
        "Axios",
        "Node.js",
        "Express",
        "Gemini API",
        "OpenAI API",
      ],
      features: [
        "AI-powered assistant (Gemini / OpenAI)",
        "Multilingual support and translation",
        "Voice input and text-to-speech",
        "Courses, progress, and learning streaks",
        "Authentication, profiles, and dashboard",
        "Analytics for learning activity",
      ],
      githubUrl: "https://github.com/niranjan20069019-pixel/skillbridge",
      icon: GraduationCap,
    },
    {
      name: "Civic Service Web",
      featured: false,
      description:
        "A civic issue reporting platform centered on secure reporting, authentication, issue management, role-based access control, and structured civic-service workflows — implemented as a production-ready REST API.",
      stack: [
        "Node.js",
        "Express",
        "JWT",
        "bcryptjs",
        "Joi",
        "Helmet",
        "Rate Limiting",
        "CORS",
        "Swagger / OpenAPI",
        "Winston",
        "Jest",
        "Supertest",
      ],
      features: [
        "JWT auth with refresh token rotation",
        "Role-based access control",
        "Issue creation, filtering, and pagination",
        "Status updates, assignment, and audit history",
        "Input validation and security hardening",
        "Swagger docs and automated tests",
      ],
      githubUrl: "https://github.com/niranjan20069019-pixel/Civic_Service_web",
      icon: Landmark,
    },
    {
      name: "Civic Service Resolution",
      featured: false,
      description:
        "A separate civic issue reporting system with frontend and backend/API structure, migrations, tests, and uploads — including JWT auth, RBAC, issue CRUD, validation, and API documentation.",
      stack: [
        "Node.js",
        "Express",
        "JWT",
        "bcryptjs",
        "Joi",
        "Helmet",
        "Rate Limiting",
        "CORS",
        "Swagger",
        "Winston",
        "Jest",
        "Supertest",
      ],
      features: [
        "Authentication and issue service layers",
        "CRUD operations for civic issues",
        "Refresh tokens and role-based access",
        "Validation, rate limiting, and error handling",
        "Audit history and security features",
        "Swagger/OpenAPI and automated tests",
      ],
      githubUrl:
        "https://github.com/niranjan20069019-pixel/civic_service_resolution",
      icon: Scale,
    },
  ] as Project[],
  contact: {
    heading: "LET'S WORK TOGETHER",
    blurb:
      "Interested in collaboration, AI projects, software development, and new opportunities. Reach out via email, phone, or socials.",
    links: [
      {
        label: "Email",
        value: "niranjan20069019@gmail.com",
        href: "mailto:niranjan20069019@gmail.com",
        icon: Mail as ContactIcon,
      },
      {
        label: "Phone",
        value: "9019283698",
        href: "tel:9019283698",
        icon: Phone as ContactIcon,
      },
      {
        label: "GitHub",
        value: "niranjan20069019-pixel",
        href: "https://github.com/niranjan20069019-pixel",
        icon: GithubIcon,
      },
      {
        label: "LinkedIn",
        value: "niranjan-k-b0606040a",
        href: "https://www.linkedin.com/in/niranjan-k-b0606040a",
        icon: LinkedinIcon,
      },
      {
        label: "Instagram",
        value: "@tech_with_niranjan",
        href: "https://www.instagram.com/tech_with_niranjan",
        icon: InstagramIcon,
      },
    ] as {
      label: string;
      value: string;
      href: string;
      icon: ContactIcon;
    }[],
  },
  social: [
    {
      label: "GitHub",
      href: "https://github.com/niranjan20069019-pixel",
      icon: GithubIcon,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/niranjan-k-b0606040a",
      icon: LinkedinIcon,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/tech_with_niranjan",
      icon: InstagramIcon,
    },
    {
      label: "Email",
      href: "mailto:niranjan20069019@gmail.com",
      icon: Mail as ContactIcon,
    },
  ] as { label: string; href: string; icon: ContactIcon }[],
  nav: [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Chapter" },
    { id: "contact", label: "Contact" },
  ] as const,
};

export type NavId = (typeof portfolio.nav)[number]["id"];
export type PortfolioData = typeof portfolio;
