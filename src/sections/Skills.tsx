import React from 'react';
import { Skill } from '../data/interfaces';
import skills from '../data/skillsData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconType } from "react-icons";
import { Cloud, Server, Bolt, Monitor, Database, NetworkIcon } from "lucide-react";

interface SkillsProps {
  darkMode?: boolean;
}

function Skills({ darkMode }: SkillsProps): JSX.Element {
  const language = navigator.language.startsWith("pt") ? "pt" : "en";
  const categories = {
    "Back-end": skills.filter((skill) => skill.type === "backend"),
    "Front-end": skills.filter((skill) => skill.type === "frontend"),
    "DevOps & Deploy": skills.filter((skill) => skill.type === "devops & deploy"),
    "Tools": skills.filter((skill) => skill.type === "tools"),
    "DataBases": skills.filter((skill) => skill.type === "database"),
    "Network": skills.filter((skill) => skill.type === "network"),
  };

  const categoryIcons = {
    "Back-end": { Icon: Server, color: darkMode ? "text-green-400" : "text-green-600", bgColor: darkMode ? "bg-green-950/30" : "bg-green-50" },
    "Front-end": { Icon: Monitor, color: darkMode ? "text-purple-400" : "text-purple-600", bgColor: darkMode ? "bg-purple-950/30" : "bg-purple-50" },
    "DevOps & Deploy": { Icon: Cloud, color: darkMode ? "text-orange-400" : "text-orange-600", bgColor: darkMode ? "bg-orange-950/30" : "bg-orange-50" },
    "Tools": { Icon: Bolt, color: darkMode ? "text-yellow-400" : "text-yellow-600", bgColor: darkMode ? "bg-yellow-950/30" : "bg-yellow-50" },
    "DataBases": { Icon: Database, color: darkMode ? "text-teal-400" : "text-teal-600", bgColor: darkMode ? "bg-teal-950/30" : "bg-teal-50" },
    "Network": { Icon: NetworkIcon, color: darkMode ? "text-blue-400" : "text-blue-600", bgColor: darkMode ? "bg-blue-950/30" : "bg-blue-50" },
  };

  return (
    <section
      className="w-full py-16 px-4 sm:px-6"
      id="skills-section"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-5xl font-light italic mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`} style={{marginRight: "1100px"}}>
            {language === "pt" ? "Habilidades" : "Skills"}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {Object.entries(categories).map(([type, skillList]) => {
            if (skillList.length === 0) return null;
            
            const { Icon, color, bgColor } = categoryIcons[type as keyof typeof categoryIcons];
            
            return (
              <div
                key={type}
                className={`rounded-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-lg shadow-md ${
                  darkMode ? "shadow-white/20" : "shadow-gray-500/30"
                }`}
              >
                <div className={`p-5 border-b rounded-t-xl flex items-center gap-3 ${
                  darkMode ? "border-gray-700" : "border-gray-100"
                }`}>
                  <div className={`p-2 rounded-lg ${bgColor}`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <h3 className={`text-xl font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}>
                    {type}
                  </h3>
                </div>
                
                <ul className="p-5 space-y-3">
                  {skillList.map((skill) => (
                    <li 
                      key={skill.name}
                      className={`flex items-center gap-3 p-2 rounded-lg transition-colors duration-200 ${
                        darkMode 
                          ? "hover:bg-gray-700/50 text-gray-300" 
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center text-lg ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}>
                        {typeof skill.image === "function" ? (
                          React.createElement(skill.image as IconType, { size: 20 })
                        ) : (
                          <FontAwesomeIcon
                            icon={skill.image}
                            className="w-5 h-5"
                          />
                        )}
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;