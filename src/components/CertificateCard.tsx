import { motion } from "framer-motion";
import { Award, ExternalLink, Server, Code, Network, Shield, Globe, Cloud } from "lucide-react";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  category: string;
  originalCategory: string;
  link?: string;
  darkMode: boolean;
  viewCertificateText: string;
  inProgressText: string;
  noCertificateText: string;
  currentYear: string;
}

const CertificateCard = ({
  title,
  issuer,
  date,
  category,
  originalCategory,
  link,
  darkMode,
  viewCertificateText,
  inProgressText,
  noCertificateText,
  currentYear,
}: CertificateCardProps) => {
  // Define category styles based on original category and dark mode
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "Back-end Development":
        return {
          Icon: Server,
          color: darkMode ? "text-green-400" : "text-green-600",
          bgColor: darkMode ? "bg-green-900/20" : "bg-green-50",
          borderColor: darkMode ? "border-green-800" : "border-green-100",
          ribbonColor: darkMode ? "from-green-900 to-green-800" : "from-green-100 to-green-200",
        };
      case "Coding":
        return {
          Icon: Code,
          color: darkMode ? "text-yellow-400" : "text-yellow-600",
          bgColor: darkMode ? "bg-yellow-900/20" : "bg-yellow-50",
          borderColor: darkMode ? "border-yellow-800" : "border-yellow-100",
          ribbonColor: darkMode ? "from-yellow-900 to-yellow-800" : "from-yellow-100 to-yellow-200",
        };
      case "Networks":
        return {
          Icon: Network,
          color: darkMode ? "text-blue-400" : "text-blue-600",
          bgColor: darkMode ? "bg-blue-900/20" : "bg-blue-50",
          borderColor: darkMode ? "border-blue-800" : "border-blue-100",
          ribbonColor: darkMode ? "from-blue-900 to-blue-800" : "from-blue-100 to-blue-200",
        };
      case "Cyber Security":
        return {
          Icon: Shield,
          color: darkMode ? "text-blue-400" : "text-blue-600",
          bgColor: darkMode ? "bg-blue-900/20" : "bg-blue-50",
          borderColor: darkMode ? "border-blue-800" : "border-blue-100",
          ribbonColor: darkMode ? "from-blue-900 to-blue-800" : "from-blue-100 to-blue-200",
        };
      case "Languages":
        return {
          Icon: Globe,
          color: darkMode ? "text-purple-400" : "text-purple-600",
          bgColor: darkMode ? "bg-purple-900/20" : "bg-purple-50",
          borderColor: darkMode ? "border-purple-800" : "border-purple-100",
          ribbonColor: darkMode ? "from-purple-900 to-purple-800" : "from-purple-100 to-purple-200",
        };
      case "Cloud":
        return {
          Icon: Cloud,
          color: darkMode ? "text-orange-400" : "text-orange-600",
          bgColor: darkMode ? "bg-orange-900/20" : "bg-orange-50",
          borderColor: darkMode ? "border-orange-800" : "border-orange-100",
          ribbonColor: darkMode ? "from-orange-900 to-orange-800" : "from-orange-100 to-orange-200",
        };
      default:
        return {
          Icon: Award,
          color: darkMode ? "text-gray-400" : "text-gray-600",
          bgColor: darkMode ? "bg-gray-900/20" : "bg-gray-50",
          borderColor: darkMode ? "border-gray-800" : "border-gray-100",
          ribbonColor: darkMode ? "from-gray-900 to-gray-800" : "from-gray-100 to-gray-200",
        };
    }
  };

  const { Icon: CategoryIcon, color, bgColor, borderColor, ribbonColor } = getCategoryStyles(originalCategory);

  // Determine link text or status
  const getLinkText = () => {
    if (link && link !== "") return viewCertificateText;
    return date === currentYear ? inProgressText : noCertificateText;
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative p-6 rounded-lg overflow-hidden ${
        darkMode ? " shadow-lg" : "bg-white shadow-md"
      } ${borderColor} border border-opacity-40`}
    >
      <div className="space-y-4">
        {/* Category with icon */}
        <div className="flex items-center space-x-2">
          <span className={`flex items-center justify-center p-2 rounded-full ${bgColor}`}>
            <CategoryIcon className={`w-4 h-4 ${color}`} />
          </span>
          <span className={`text-xs font-medium ${color}`}>{category}</span>
        </div>
        
        {/* Title */}
        <h3 className={`font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>{title}</h3>
        
        {/* Issuer and date */}
        <div className="flex justify-between items-center">
          <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{issuer}</p>
          <p className={`text-xs px-2 py-1 rounded-full ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"}`}>
            {date}
          </p>
        </div>
        
        {/* Link or Status */}
        {link !== undefined && (
          <a
            href={link || "#"}
            target={link ? "_blank" : "_self"}
            rel={link ? "noopener noreferrer" : ""}
            className={`inline-flex items-center mt-2 text-xs font-medium p-2 rounded-full transition-colors ${
              darkMode 
                ? link ? "bg-blue-900/30 text-blue-400 hover:bg-blue-800/50" : "bg-gray-700/50 text-gray-400" 
                : link ? "bg-blue-50 text-blue-600 hover:bg-blue-100" : "bg-gray-100 text-gray-500"
            } ${!link && "pointer-events-none"}`}
          >
            {getLinkText()}
            {link && <ExternalLink className="ml-1 w-3 h-3" />}
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default CertificateCard;