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
    <section 
      className="mt-20 sm:mt-32 md:mt-40 lg:mt-60 mb-20 sm:mb-32 md:mb-40 lg:mb-60 relative px-4 sm:px-6 md:px-8" 
      id="projects-section"
    >
      <h1
        className={`${
          darkMode ? "text-white" : "text-black"
        } text-3xl sm:text-4xl md:text-5xl italic ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-40 transition-all duration-500 ease-in-out transform translate-x-0 opacity-100`}
      >
        {isEnglish ? "Projects" : "Projetos"}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8 mx-4 sm:mx-6 md:mx-10 lg:mx-16 xl:mx-40">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="w-full"
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