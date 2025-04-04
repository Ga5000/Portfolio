import React, { useState } from "react";
import { ProjectInterface } from "../common/interfaces";
import { useTranslation } from "react-i18next";
import { ArrowUp, Github } from "lucide-react";

interface ProjectCardProps {
  project: ProjectInterface;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const getStatusColor = () => {
    switch (project.status) {
      case "active":
      case "ativo":
        return "bg-green-500";
      case "completed":
      case "completo":
        return "bg-blue-500";
      case "archived":
      case "arquivado":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className={`project-card backdrop-blur-lg shadow-md shadow-gray-500/30 dark:shadow-white/20 ${isOpen ? "open" : ""}`}>
      <div className="p-1">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-semibold truncate flex-1 p-2 italic text-black dark:text-white">
            {project.title}
          </h3>
          <div className="flex items-center gap-3">
            <span className={`${getStatusColor()} text-white text-xs font-medium px-2 py-0.5 rounded-full`}>
              {t(project.status)}
            </span>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              title="View Repository"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none rounded-full p-2 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors duration-200"
            >
              <ArrowUp
                className={`text-lg transition-transform duration-500 cursor-pointer ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-sm mb-4 p-3 text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 p-2">
            {project.stacks.map((stack, index) => {
              const IconComponent = stack.icon;
              return (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-2 py-1 shadow-md dark:shadow-white/10"
                >
                  <IconComponent size={16} className="text-black dark:text-gray-200" />
                  <span className="text-xs text-gray-800 dark:text-gray-200">{stack.name}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
