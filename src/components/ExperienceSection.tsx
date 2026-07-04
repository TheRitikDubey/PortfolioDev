import { Timeline } from "./ui/timeline";
import { ArrowUpRight } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  url: string;
  summary: string;
  achievements: string[];
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Full Stack Developer",
    company: "Techolution",
    url: "https://www.techolution.com/",
    period: "2023 — Present",
    summary:
      "Leading a 10+ engineer team shipping enterprise products on GCP — from AI-powered code generation platforms to inventory systems serving 100,000+ users.",
    achievements: [
      "Architected AI features with LangChain, OpenAI API, and RAG pipelines powering conversational AI experiences in production",
      "Reduced backend latency by 35% and improved data ingestion speed by 3x across production services",
      "Designed and scaled microservices handling 100,000+ concurrent users with Node.js, GraphQL, MongoDB, and Redis",
      "Drove code quality across the team through reviews, architecture decisions, and CI/CD best practices",
    ],
    tech: ["Node.js", "React.js", "GCP", "LangChain", "GraphQL", "MongoDB", "Redis", "Docker"],
  },
  {
    title: "Frontend Developer Intern",
    company: "Genwise",
    url: "https://www.genwise.club/",
    period: "Early 2023",
    summary:
      "Built responsive, pixel-perfect web interfaces for a fast-moving consumer startup.",
    achievements: [
      "Developed responsive UI features with React.js used by thousands of daily users",
      "Created a library of reusable components that sped up feature delivery",
      "Shipped UI/UX designs to production and iterated based on code-review feedback",
    ],
    tech: ["React.js", "JavaScript", "CSS", "REST APIs"],
  },
  {
    title: "AI Software Engineer Intern",
    company: "ByteLearn.AI",
    url: "https://bytelearn.ai/",
    period: "2022 — 2023",
    summary:
      "Worked hands-on with ML models and data pipelines for an AI-powered ed-tech platform.",
    achievements: [
      "Developed and optimized ML models with measurable accuracy and performance improvements",
      "Built data-engineering pipelines to clean, transform, and serve training data at scale",
      "Collaborated cross-functionally with product and data-science teams to ship AI features",
    ],
    tech: ["Python", "ML Models", "Data Pipelines", "APIs"],
  },
];

const ExperienceCard = ({ experience }: { experience: ExperienceItem }) => (
  <div className="bg-gray-800/70 border border-gray-700/60 rounded-2xl p-6 hover:border-blue-500/50 transition-colors duration-300">
    <div>
      <h3 className="text-xl font-bold text-white">{experience.title}</h3>
      <a
        href={experience.url}
        target="_blank"
        className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium mt-0.5"
      >
        {experience.company}
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>

    <p className="text-gray-300 mt-4 leading-relaxed">{experience.summary}</p>

    <ul className="mt-4 space-y-2.5">
      {experience.achievements.map((achievement, idx) => (
        <li key={idx} className="flex items-start gap-2.5">
          <span className="text-blue-400 mt-1">▹</span>
          <span className="text-gray-400 text-sm leading-relaxed">{achievement}</span>
        </li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-1.5 mt-5">
      {experience.tech.map((item) => (
        <span
          key={item}
          className="text-xs text-gray-300 bg-gray-700/60 border border-gray-600/50 rounded-full px-2.5 py-1"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const ExperienceSection = () => {
  const timelineData = experiences.map((experience) => ({
    title: experience.period,
    content: <ExperienceCard experience={experience} />,
  }));

  return (
    <div className="bg-gray-900 py-10 px-4 md:px-8">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
        <div className="mt-2 w-24 h-1 bg-blue-500 mx-auto"></div>
      </div>
      <Timeline data={timelineData} />
    </div>
  );
};

export default ExperienceSection;
