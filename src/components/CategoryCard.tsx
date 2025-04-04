import React from "react";
import { Skill } from "../common/interfaces";

interface CategoryIcons {
  Icon: React.ElementType;
  color: string;
  bgColor: string;
}

interface CategoryCardProps {
  category: string;
  skills: Skill[];
  iconData: CategoryIcons;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, skills, iconData }) => {
  const Icon = iconData.Icon;
  
  return (
    <div className="rounded-lg p-4 shadow-md dark:shadow-white/20 transform hover:-translate-y-1 transition-all min-h-fit">
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-full ${iconData.bgColor}`}>
          {Icon && <Icon className={`${iconData.color} w-6 h-6`} />}
        </div>
        <h3 className="ml-3 text-xl font-bold text-gray-900 dark:text-white">{category}</h3>
      </div>
      <ul className="space-y-1 py-2">
        {skills.map((skill) => {
          const SkillIcon = skill.icon;
          return (
            <li
              key={skill.name}
              className="flex items-center p-1 text-black dark:text-white rounded-md hover:bg-gray-400 dark:hover:bg-gray-700 transition-colors"
            >
              <SkillIcon className="w-4 h-4 mr-2" />
              <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryCard;
