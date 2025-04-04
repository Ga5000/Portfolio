import React from "react";
import { Link } from "lucide-react";
import { Certificate } from "../common/interfaces";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface CertificateCardProps {
  certificate: Certificate;
  categoryStyle: {
    Icon: React.ElementType;
    color: string;
    bgColor: string;
  };
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, categoryStyle }) => {
  const { t } = useTranslation();
  const { Icon } = categoryStyle;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="p-6 rounded-lg shadow-lg dark:shadow-white/10 flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{certificate.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{certificate.issuer} • {certificate.date}</p>
        </div>
        <div className={`p-2 rounded-full ${categoryStyle.bgColor}`}>
          <Icon className={`w-5 h-5 ${categoryStyle.color}`} />
        </div>
      </div>
      
      <div className={`mt-2 px-3 py-1 rounded-full text-xs font-medium inline-block self-start ${categoryStyle.bgColor} ${categoryStyle.color}`}>
        {certificate.category}
      </div>
      
      <div className="mt-auto pt-4">
        {certificate.link ? (
          <a 
            href={certificate.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-md transition transform hover:scale-105 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md hover:shadow-lg"
          >
            <span className="font-semibold">{t("viewCertificate")}</span>
            <Link className="w-5 h-5" />
          </a>
        ) : (
          <div className="flex items-center justify-center px-6 py-3 rounded-md transition transform hover:scale-105 bg-gray-500 text-white shadow-md hover:shadow-lg">
            <span className="font-semibold">{t("inProgress")}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CertificateCard;
