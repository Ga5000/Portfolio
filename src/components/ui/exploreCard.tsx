import { useState } from "react";
import { ChevronRight} from "lucide-react";
import React from "react";
import { cn } from "../../lib/utils";
import { useTranslation } from "react-i18next";

interface ExploreCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ExploreCard = ({ icon, title, description } : ExploreCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      className="shadow-lg shadow-black rounded-lg p-6 transition-all duration-300 flex flex-col cursor-pointer transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-4">
        <div className="shadow-md shadow-neutral-700 p-3 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-zinc-400 mb-4">{description}</p>
      <div
        className={cn(
          "mt-auto flex items-center text-green-500 transition-all duration-300",
          isHovered && "translate-x-1"
        )}
      >
        <span className="mr-1">{t("explore.checkout")}</span>
        <ChevronRight size={16} />
      </div>
    </div>
  );
};

export default ExploreCard;
