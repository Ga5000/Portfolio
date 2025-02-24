import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  category: string;
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
  link,
  darkMode,
  viewCertificateText,
  inProgressText,
  noCertificateText,
  currentYear
}: CertificateCardProps) => {
  const getLinkText = () => {
    if (link && link !== "") return viewCertificateText;
    return date === currentYear ? inProgressText : noCertificateText;
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative p-6 rounded-xl backdrop-blur-lg shadow-md ${darkMode ? ' shadow-white/20' : ' shadow-gray-500/30'}`}
    >
      <div className="absolute top-4 right-4">
        <Award className={`w-6 h-6 opacity-50 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`} />
      </div>
      <div className="space-y-4">
        <div>
          <span
            className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}
          >
            {category}
          </span>
        </div>
        <h3 className={`text-xl font-semibold ${darkMode ? ' text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <div className="space-y-1">
          <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {issuer}
          </p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{date}</p>
        </div>
        {link !== undefined && (
          <a
            href={link || "#"} 
            target={link ? "_blank" : "_self"} 
            rel={link ? "noopener noreferrer" : ""}
            className={`inline-flex items-center text-sm transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'} ${!link && 'pointer-events-none opacity-50'}`} // Disable interaction if no link
          >
            {getLinkText()}
            {link && <ExternalLink className="ml-1 w-4 h-4" />}
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default CertificateCard;