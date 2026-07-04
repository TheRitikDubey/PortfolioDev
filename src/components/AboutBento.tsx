import { motion } from "framer-motion";
import {
  BrainCircuit,
  Briefcase,
  Cloud,
  Code2,
  Database,
  Gauge,
  Layers,
  Rocket,
  Server,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

const stats = [
  { icon: Briefcase, value: "3+", label: "Years Experience" },
  { icon: Users, value: "100K+", label: "Users Served" },
  { icon: Gauge, value: "35%", label: "Latency Reduced" },
  { icon: Zap, value: "3x", label: "Faster Data Ingestion" },
];

const techStack = [
  {
    icon: Server,
    title: "Backend",
    color: "text-emerald-400",
    items: ["Node.js", "Express.js", "Python", "REST APIs", "GraphQL", "Microservices"],
  },
  {
    icon: Layers,
    title: "Frontend",
    color: "text-sky-400",
    items: ["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Databases",
    color: "text-amber-400",
    items: ["MongoDB", "Redis", "MySQL"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "text-violet-400",
    items: ["GCP", "AWS", "Docker", "GitHub Actions", "Jenkins"],
  },
  {
    icon: BrainCircuit,
    title: "AI / ML",
    color: "text-rose-400",
    items: ["LangChain", "OpenAI API", "RAG Pipelines", "Conversational AI"],
  },
];

const achievements = [
  { highlight: "Top 0.2%", text: "on LeetCode with 750+ problems solved" },
  { highlight: "2000+", text: "DSA problems solved across platforms" },
  { highlight: "Rank 1", text: "Institute Rank on GeeksforGeeks" },
  { highlight: "Rank 208", text: "Global Rank in CodeChef FIZZBUZZ" },
];

const AboutBento = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4">
        {/* Bio — large card */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="sm:col-span-2 md:col-span-8 bg-gray-800/70 border border-gray-700/60 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 transition-colors duration-300"
        >
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Who I Am</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Hey there! 👋 I'm Ritik — a{" "}
            <span className="text-white font-medium">Senior Full Stack Developer</span>{" "}
            with 3+ years of experience building AI-powered, production-scale
            backend systems and web platforms. I love building things that work
            at scale and writing code that's clean, performant, and maintainable.
          </p>
          <p className="text-gray-400 leading-relaxed mt-3">
            Open to Senior Backend Engineer and Senior Full Stack Developer
            roles at product-based companies. If that sounds like a fit — let's
            connect! 🚀
          </p>
        </motion.div>

        {/* Current role */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="sm:col-span-2 md:col-span-4 relative overflow-hidden bg-gradient-to-br from-blue-600/20 to-violet-600/10 border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400/60 transition-colors duration-300"
        >
          <Rocket className="w-5 h-5 text-blue-400 mb-4" />
          <p className="text-sm text-blue-300 font-medium mb-1">Currently at</p>
          <h3 className="text-xl font-bold text-white mb-3">Techolution</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Leading a 10+ engineer team shipping enterprise products on GCP —
            from AI-powered code generation platforms to inventory systems
            serving 100,000+ users.
          </p>
        </motion.div>

        {/* Stats row */}
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            custom={2 + i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{ y: -4 }}
            className="md:col-span-3 bg-gray-800/70 border border-gray-700/60 rounded-2xl p-5 flex items-center gap-4 hover:border-gray-500 transition-colors duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-500/15 flex items-center justify-center shrink-0">
              <stat.icon className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white leading-tight">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          </motion.div>
        ))}

        {/* Tech stack — wide card */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="sm:col-span-2 md:col-span-8 bg-gray-800/70 border border-gray-700/60 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 transition-colors duration-300"
        >
          <div className="flex items-center gap-2 mb-5">
            <Layers className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">What I Work With</h3>
          </div>
          <div className="space-y-4">
            {techStack.map((group) => (
              <div key={group.title} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                <div className={`flex items-center gap-1.5 w-36 shrink-0 ${group.color}`}>
                  <group.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{group.title}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-gray-300 bg-gray-700/60 border border-gray-600/50 rounded-full px-2.5 py-1 hover:bg-gray-600/60 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          custom={7}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="sm:col-span-2 md:col-span-4 bg-gray-800/70 border border-gray-700/60 rounded-2xl p-6 hover:border-amber-500/50 transition-colors duration-300"
        >
          <div className="flex items-center gap-2 mb-5">
            <Trophy className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-semibold text-white">Achievements</h3>
          </div>
          <ul className="space-y-4">
            {achievements.map((item) => (
              <li key={item.highlight + item.text} className="flex items-start gap-3">
                <span className="text-amber-400 font-bold text-sm whitespace-nowrap mt-0.5">
                  {item.highlight}
                </span>
                <span className="text-gray-300 text-sm leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutBento;
