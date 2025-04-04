import React from "react";
import skills from "../data/skills";
import CategoryCard from '../components/CategoryCard';
import { Skill } from "../common/interfaces";
import { Server, Monitor, Cloud, Bolt, Database, NetworkIcon, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CategoryIcons {
  Icon: React.ElementType;
  color: string;
  bgColor: string;
}

const categoryIcons: { [key: string]: CategoryIcons } = {
    "Back-end": { Icon: Server, color: "text-green-400 dark:text-green-200", bgColor: "bg-green-800" },
    "Front-end": { Icon: Monitor, color: "text-purple-600 dark:text-purple-400", bgColor: "bg-purple-50 dark:bg-purple-950/30" },
    "DevOps & Deploy": { Icon: Cloud, color: "text-orange-600 dark:text-orange-400", bgColor: "bg-orange-50 dark:bg-orange-950/30" },
    "Tools": { Icon: Bolt, color: "text-yellow-600 dark:text-yellow-400", bgColor: "bg-yellow-50 dark:bg-yellow-950/30" },
    "DataBases": { Icon: Database, color: "text-teal-600 dark:text-teal-200", bgColor: "bg-teal-800 dark:bg-teal-700/30" },
    "Network": { Icon: NetworkIcon, color: "text-blue-400 dark:text-blue-200", bgColor: "bg-blue-800 dark:bg-blue-700/30" },
    "CyberSecurity": { Icon: Shield, color: "text-red-600 dark:text-red-400", bgColor: "bg-red-50 dark:bg-red-950/30" },
  };
  

const categories: { [key: string]: Skill[] } = {
  "Back-end": skills.filter((skill: Skill) => skill.type === "backend"),
  "Front-end": skills.filter((skill: Skill) => skill.type === "frontend"),
  "DevOps & Deploy": skills.filter((skill: Skill) => skill.type === "devops & deploy"),
  "Tools": skills.filter((skill: Skill) => skill.type === "tools"),
  "DataBases": skills.filter((skill: Skill) => skill.type === "database"),
  "Network": skills.filter((skill: Skill) => skill.type === "network"),
  "CyberSecurity": skills.filter((skill: Skill) => skill.type === "cybersecurity"),
};

const Skills: React.FC = () => {
       const { t } = useTranslation();
  return (
    <section className="p-4 mt-32">
             <h1 className=" text-black text-4xl ml-52 mb-14 dark:text-white">{t('skillsSectionTitle')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {Object.entries(categories).map(([category, skills]) => (
          <CategoryCard key={category} category={category} skills={skills} iconData={categoryIcons[category]} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
