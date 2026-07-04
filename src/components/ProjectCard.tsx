import { ArrowUpRight, Github } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Project } from "../data/projects";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <CardContainer containerClassName="py-6" className="inter-var h-full">
      <CardBody className="bg-gray-800/70 relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.1] border-gray-700/60 w-auto sm:w-[24rem] h-full rounded-2xl p-6 border flex flex-col">
        <CardItem translateZ="100" className="w-full">
          <img
            src={project.image}
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={project.title}
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white mt-4"
        >
          {project.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-400 text-sm mt-2 leading-relaxed"
        >
          {project.description}
        </CardItem>
        <CardItem translateZ="40" className="w-full mt-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-300 bg-gray-700/60 border border-gray-600/50 rounded-full px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardItem>
        <div className="flex justify-between items-center mt-auto pt-6">
          {project.liveUrl ? (
            <CardItem
              translateZ={20}
              as="a"
              href={project.liveUrl}
              target="_blank"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              Live Demo
              <ArrowUpRight className="w-4 h-4" />
            </CardItem>
          ) : (
            <span className="px-4 py-2 text-sm text-gray-500">
              Private build
            </span>
          )}
          {project.githubUrl && (
            <CardItem
              translateZ={20}
              as="a"
              href={project.githubUrl}
              target="_blank"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black text-sm font-bold hover:bg-gray-200"
            >
              <Github className="w-4 h-4" />
              GitHub
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
