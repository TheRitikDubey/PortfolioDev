import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { featuredProjects, projects } from "../data/projects";

const ProjectsSection = () => {
  return (
    <div className="py-10">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Projects</h2>
        <div className="mt-2 w-24 h-1 bg-blue-500 mx-auto"></div>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto px-4">
          A few things I've built recently — from full-stack platforms to
          AI-powered systems.
        </p>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-evenly items-stretch max-w-7xl mx-auto">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="flex justify-center mt-2">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-6 py-2.5 rounded-lg transition-colors"
        >
          View All Projects ({projects.length})
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSection;
