import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, FolderGit2 } from "lucide-react";
import { scroller } from "react-scroll";
import ProjectCard from "../components/ProjectCard";
import { projects, projectCategories } from "../data/projects";

const AllProjects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const goToContact = () => {
    navigate("/");
    setTimeout(() => {
      scroller.scrollTo("ContactUs", { smooth: true, duration: 800 });
    }, 150);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Top bar */}
      <div className="flex items-center justify-between max-w-6xl mx-auto px-6 py-5">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <span className="text-xl text-white font-semibold">Ritik Dubey</span>
      </div>

      {/* Header */}
      <div className="text-center pt-8 px-4">
        <div className="inline-flex items-center gap-2 text-blue-400 font-medium mb-3">
          <FolderGit2 className="w-5 h-5" />
          My Work
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          All Projects
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Everything I've built and shipped — full-stack platforms, AI-powered
          systems, and frontend experiences. Filter by category to explore.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 mt-8 px-4">
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              activeCategory === category
                ? "bg-blue-600 border-blue-600 text-white"
                : "border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <AnimatePresence mode="popLayout">
          {visibleProjects.length > 0 ? (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 justify-items-center"
            >
              {visibleProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </motion.div>
          ) : (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-500 py-20"
            >
              Nothing here yet — projects in this category are coming soon.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Freelance CTA */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600/20 to-violet-600/10 border border-blue-500/30 rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Have a project in mind?
          </h2>
          <p className="text-gray-300 mt-3 max-w-xl mx-auto">
            I'm open to freelance work and senior full-stack / backend roles.
            Let's build something that scales.
          </p>
          <button
            onClick={goToContact}
            className="mt-6 bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
