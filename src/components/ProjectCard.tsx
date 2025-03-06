import React, { useState } from "react";
import { ProjectInterface } from "../data/interfaces";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProjectCardProps {
  darkMode: boolean;
  isEnglish: boolean; 
  project: ProjectInterface;
}

const statusTranslations = {
  en: {
    ativo: "active",
    completo: "completed",
    arquivado: "archived",
  },
  pt: {
    ativo: "ativo",
    completo: "completo",
    arquivado: "arquivado",
  },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ darkMode, isEnglish, project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getStatusDisplay = () => {
  
    const t = isEnglish ? statusTranslations.en : statusTranslations.pt;
    return t[project.status as keyof typeof t] || project.status;
  };

  const getStatusColor = () => {
  
    const normalizedStatus = isEnglish
      ? statusTranslations.en[project.status as keyof typeof statusTranslations.en] || project.status
      : project.status;
    switch (normalizedStatus) {
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
    <div
      className={`backdrop-blur-lg shadow-md ${
        darkMode ? "shadow-white/20" : "shadow-gray-500/30"
      }`}
    >
      <div className="p-1">
        <div className="flex items-center justify-between mb-1">
          <h3
            className={`${
              darkMode ? "text-white" : "text-black"
            } text-lg font-semibold truncate flex-1 p-2 italic`}
          >
            {project.title}
          </h3>
          <div className="flex items-center gap-3">
            <span
              className={`${getStatusColor()} text-white text-xs font-medium px-2 py-0.5 rounded-full`}
            >
              {getStatusDisplay()}
            </span>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors duration-200`}
              title="View Repository"
              onClick={(e) => e.stopPropagation()}
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-lg"
                style={{ color: darkMode ? "white" : "black" }}
              />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none rounded-full p-2 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors duration-200"
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`text-lg transition-transform duration-500 cursor-pointer ${
                  isOpen ? "rotate-180" : ""
                }`}
                style={{ color: darkMode ? "white" : "black" }}
              />
            </button>
          </div>
        </div>
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <p
            className={`${
              darkMode ? "text-gray-300" : "text-gray-600"
            } text-sm mb-4 p-3`}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 p-2">
  {project.stacks.map((Stack, index) => (
    <span
      key={index}
      className={`inline-flex items-center justify-center ${
        darkMode ? "border-gray-600" : "bg-gray-100 border-gray-300"
      } px-2 py-1 rounded-full border`}
    >
      <Stack
        size={16}
        className={darkMode ? "text-gray-200" : "text-black"}
      />
    </span>
  ))}
</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;