import React, { useState } from "react";
import { categories, CategoryType } from "../types";
import { Award, Cloud, Code, Globe, Network, Server, Shield } from "lucide-react";
import { Certificate } from "../common/interfaces";
import certificatesAndBadges from "../data/certificates&Badges";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import CategoryFilterButton from "../components/CategoryFilterButton";
import CertificateCard from "../components/CertificateCard";

const categoryStyles = {
  "All": { Icon: Award, color: "text-black dark:text-white", bgColor: "bg-gray-700/30" },
  "Back-end Development": { Icon: Server, color: "text-green-700 dark:text-green-200", bgColor: "bg-green-300 dark:bg-green-800/30" },
  "Coding": { Icon: Code, color: "text-yellow-400", bgColor: "bg-yellow-200 dark:bg-yellow-700/30" },
  "Networks": { Icon: Network, color: "text-blue-500 dark:text-blue-200", bgColor: "bg-blue-300 dark:bg-blue-700/30" },
  "CyberSecurity": { Icon: Shield, color: "text-red-600 dark:text-red-400", bgColor: "bg-red-300 dark:bg-red-900/30" },
  "Languages": { Icon: Globe, color: "text-purple-600 dark:text-purple-400", bgColor: "bg-purple-400 dark:bg-purple-950/30" },
  "Cloud": { Icon: Cloud, color: "text-orange-600 dark:text-orange-400", bgColor: "bg-orange-300 dark:bg-orange-900/30" },
  "Relevant Only": { Icon: Award, color: "text-black dark:text-white", bgColor: "bg-gray-700/30" },
};

const Certificates: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");
  const { t } = useTranslation();

  let filteredCertificates = certificatesAndBadges.filter((certificate: Certificate) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Relevant Only") return certificate.relevant === 1;
    return certificate.category === selectedCategory;
  });

  if (selectedCategory === "All") {
    filteredCertificates = filteredCertificates.sort((a, b) => a.relevant - b.relevant);
  }

  return (
    <section className="py-16 px-4 md:px-6 max-w-6xl mx-auto">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-16"
          >
            {t("certificatesSectionTitle")}
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const { Icon, color, bgColor } = categoryStyles[category];
              return (
                <CategoryFilterButton
                  key={category}
                  icon={Icon}
                  category={category}
                  iconColor={color}
                  bgWhenSeelected={selectedCategory === category ? bgColor : "bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"}
                  onClick={() => setSelectedCategory(category)}
                />
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((certificate: Certificate, index) => {
            const categoryStyle = categoryStyles[certificate.category as CategoryType] || categoryStyles["All"];
            return (
              <CertificateCard 
                key={`${certificate.title}-${index}`}
                certificate={certificate}
                categoryStyle={categoryStyle}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
