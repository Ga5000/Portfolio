import React, { useEffect, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import { ProjectInterface } from "../data/interfaces";

interface ProjectProps {
  darkMode: boolean;
  isEnglish: boolean; 
  projects: ProjectInterface[];
}

const Projects: React.FC<ProjectProps> = ({ darkMode, isEnglish, projects }) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            ref.classList.add("animate-project-reveal");
            ref.style.animationDelay = `${index * 100}ms`;
          } else {
            ref.classList.remove("animate-project-reveal");
          }
        },
        {
          threshold: 0.2,
          rootMargin: "0px",
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [projects]);

  return (
    <section className="mt-60 mb-60 relative" id="projects-section">
      <h1
        className={`${
          darkMode ? "text-white" : "text-black"
        } text-5xl italic ml-40 transition-all duration-500 ease-in-out transform translate-x-0 opacity-100`}
      >
        {isEnglish ? "Projects" : "Projetos"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-40">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <ProjectCard
              darkMode={darkMode}
              isEnglish={isEnglish} 
              project={project}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;