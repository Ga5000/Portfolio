import React from "react";
import { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  Icon: LucideIcon;
  link: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-2 rounded-full transition-transform duration-300 hover:scale-110 focus:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <Icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-green-700 dark:group-hover:text-green-500 transition-colors duration-300" />
    </a>
  );
};

export default SocialLink;
