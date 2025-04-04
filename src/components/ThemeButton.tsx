import { LucideIcon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import React from "react";
import { Theme } from "../types";

interface ThemeButtonProps {
  Icon: LucideIcon;
  mode: Theme;
  selected : boolean;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ Icon, mode, selected }) => {
    const { setTheme } = useTheme();
  
    return (
      <button
        onClick={() => setTheme(mode)}
        className={`${selected ? "bg-gray-500/20 dark:bg-gray-300/20" : ""} cursor-pointer p-2 rounded-full transition-colors hover:bg-gray-500/20 dark:hover:bg-gray-300/20`}
      >
        <Icon size={20} className="text-black dark:text-gray-200 transition-colors" />
      </button>
    );
  };
  
  export default ThemeButton;
  
  