import React from "react";
import { LucideIcon } from "lucide-react";
import { CategoryType } from "../types";

interface CategoryFilterButtonProps {
  icon: LucideIcon;
  category: CategoryType;
  iconColor: string;
  bgWhenSeelected: string;
  onClick: () => void;
}

const CategoryFilterButton: React.FC<CategoryFilterButtonProps> = ({
  icon: Icon,
  category,
  iconColor,
  bgWhenSeelected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 rounded-3xl flex items-center space-x-2 ${bgWhenSeelected} transition-all hover:opacity-80 focus:outline-none cursor-pointer`}
    >
      <Icon className={`w-5 h-5 ${iconColor}`} />
      <span className="font-medium">{category}</span>
    </button>
  );
};

export default CategoryFilterButton;
