import SNImg from "../assets/SNImg.png";
import PortfolioImg from "../assets/DevProfile.png";
import EcomImg from "../assets/EcomImg.png";

export type ProjectCategory = "Full Stack" | "Frontend" | "Backend" | "AI / ML";

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// Single source of truth for all projects.
// To add a new project: append an object here (and set `featured: true`
// if it should appear on the home page — keep featured to 3-4 max).
export const projects: Project[] = [
  {
    slug: "studynotion-edtech",
    title: "StudyNotion EdTech",
    description:
      "A full-stack ed-tech platform where instructors publish courses and students learn — with secure JWT authentication, payment flow, media uploads, and a rich course-builder.",
    image: SNImg,
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    category: "Full Stack",
    liveUrl: "https://study-notion-edtech-fe.vercel.app/",
    githubUrl: "https://github.com/TheRitikDubey/StudyNotionEdtech",
    featured: true,
  },
  {
    slug: "modern-portfolio",
    title: "Modern Portfolio",
    description:
      "This site — a fast, animated developer portfolio built with TypeScript, Tailwind CSS, Aceternity UI, and Framer Motion, with an Express.js backend powering the contact form.",
    image: PortfolioImg,
    tags: ["TypeScript", "React.js", "Tailwind CSS", "Framer Motion", "Express"],
    category: "Frontend",
    liveUrl: "https://ritik-portfolio-psi.vercel.app/",
    githubUrl: "https://github.com/TheRitikDubey/PortfolioDev",
    featured: true,
  },
  {
    slug: "ecommerce-website",
    title: "E-commerce Website",
    description:
      "A full-stack store with JWT and Google Sign-In (Firebase) authentication, role-based authorization, product catalog, and cart — React.js frontend with a Node.js, Express, and MongoDB backend.",
    image: EcomImg,
    tags: ["React.js", "Firebase", "Node.js", "Express", "MongoDB"],
    category: "Full Stack",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "AI / ML",
];
