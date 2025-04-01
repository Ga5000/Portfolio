import { useState } from "react";
import { motion } from "framer-motion";
import { Server, Code, Network, Shield, Globe, Cloud, Award } from "lucide-react";
import CertificateCard from "../components/CertificateCard";

const categories = [
  "All",
  "Back-end Development",
  "Coding",
  "Networks",
  "Cyber Security",
  "Languages",
  "Cloud",
  "Relevant Only",
] as const;

type CategoryType = typeof categories[number];

const userLanguage = navigator.language.toLowerCase();
const isEnglish = userLanguage.startsWith("en");

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  category: CategoryType;
  link: string;
  relevant: number;
}

const certificates: Certificate[] = [
  {
    title: "Java Basic",
    issuer: "HackerRank",
    date: "2025",
    category: "Coding",
    link: "https://drive.google.com/file/d/1fFmjqbgz6uyhOpPILeM00SAq7-zg8zSC/view?usp=drive_link",
    relevant: 3,
  },
  {
    title: "SQL Basic",
    issuer: "HackerRank",
    date: "2025",
    category: "Coding",
    link: "https://drive.google.com/file/d/1Tri6KFDe1bk_lRkdMT0Hn6vSei6Kg7Q4/view?usp=drive_link",
    relevant: 3,
  },
  {
    title: "Google Cybersecurity Professional",
    issuer: "Google",
    date: "2025",
    category: "Cyber Security",
    link: "",
    relevant: 1,
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "AWS",
    date: "2025",
    category: "Cloud",
    link: "",
    relevant: 1,
  },
  {
    title: "Introduction to Cloud 101",
    issuer: "AWS",
    date: "2025",
    category: "Cloud",
    link: "https://www.credly.com/badges/dc55a032-9809-4e48-ab44-c66a222c2ddf/public_url",
    relevant: 2,
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "2025",
    category: "Networks",
    link: "https://drive.google.com/file/d/1sqGI9rIpoe7z3E8Tex-MPXCvjMwNLsvf/view?usp=drive_link",
    relevant: 2,
  },
  {
    title: "Networking Devices and Initial Configuration",
    issuer: "Cisco Networking Academy",
    date: "2025",
    category: "Networks",
    link: "",
    relevant: 3,
  },
  {
    title: "Introduction to Cyber Security",
    issuer: "Cisco Networking Academy",
    date: "2025",
    category: "Cyber Security",
    link: "https://drive.google.com/file/d/18nYeQ7KPRwQYMn_-QYwIUrjjd4QRFZAP/view?usp=sharing",
    relevant: 2,
  },
  {
    title: "General Coding Courses",
    issuer: "LinkedIn Learning",
    date: "2024",
    category: "Coding",
    link: "https://drive.google.com/drive/folders/1Mxs-K_ffqdMes0bC4gtP9qXAut94dU1f?usp=drive_link",
    relevant: 3,
  },
  {
    title: "English Course",
    issuer: "Kumon",
    date: "2022",
    category: "Languages",
    link: "",
    relevant: 1,
  },
];

interface CertificatesProps {
  darkMode: boolean;
}

const translations = {
  en: {
    achievements: "Achievements",
    title: "Certificates & Courses",
    description:
      "A curated list of certifications and courses reflecting my dedication to growth and expertise.",
    categories: {
      All: "All",
      "Back-end Development": "Back-end Development",
      Coding: "Coding",
      Networks: "Networks",
      "Cyber Security": "Cyber Security",
      Languages: "Languages",
      Cloud: "Cloud",
      "Relevant Only": "Relevant Only",
    },
    viewCertificate: "View Certificate",
    inProgress: "In Progress",
    noCertificate: "No Certificate Available",
  },
  pt: {
    achievements: "Conquistas",
    title: "Certificados e Cursos",
    description:
      "Uma lista selecionada de certificações e cursos que refletem minha dedicação ao crescimento e à expertise.",
    categories: {
      All: "Todos",
      "Back-end Development": "Desenvolvimento Back-end",
      Coding: "Codificação",
      Networks: "Redes",
      "Cyber Security": "Segurança Cibernética",
      Languages: "Idiomas",
      Cloud: "Nuvem",
      "Relevant Only": "Apenas Relevantes",
    },
    viewCertificate: "Ver Certificado",
    inProgress: "Em Progresso",
    noCertificate: "Certificado Não Disponível",
  },
};

// Category icon mapping with proper typing
const categoryIcons: Record<CategoryType, React.ElementType> = {
  All: Award,
  "Back-end Development": Server,
  Coding: Code,
  Networks: Network,
  "Cyber Security": Shield,
  Languages: Globe,
  Cloud: Cloud,
  "Relevant Only": Award,
};

const Certificates: React.FC<CertificatesProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");
  const currentYear = new Date().getFullYear().toString();
  const t = isEnglish ? translations.en : translations.pt;

  // Calculate the number of certificates per category with proper typing
  const categoryCounts = categories.reduce<Record<CategoryType, number>>(
    (acc, category) => {
      if (category === "All") {
        acc[category] = certificates.length;
      } else if (category === "Relevant Only") {
        acc[category] = certificates.filter((cert) => cert.relevant <= 1).length;
      } else {
        acc[category] = certificates.filter((cert) => cert.category === category).length;
      }
      return acc;
    },
    {} as Record<CategoryType, number>
  );

  // Function to get the background class for selected buttons
  const getSelectedBgClass = (category: CategoryType) => {
    const colorMap: Record<CategoryType, string> = {
      All: "gray",
      "Relevant Only": "gray",
      "Back-end Development": "green",
      Coding: "yellow",
      Networks: "blue",
      "Cyber Security": "blue",
      Languages: "purple",
      Cloud: "orange",
    };
    const color = colorMap[category] || "gray";
    return darkMode ? `bg-${color}-900/30` : `bg-${color}-100`;
  };

  // Function to get the icon color class based on category and selection state
  const getIconColorClass = (category: CategoryType, isSelected: boolean) => {
    if (!isSelected) {
      return darkMode ? "text-gray-400" : "text-gray-500";
    }
    if (category === "All" || category === "Relevant Only") {
      return darkMode ? "text-white" : "text-black";
    }
    const colorMap: Record<string, string> = {
      "Back-end Development": "green",
      Coding: "yellow",
      Networks: "blue",
      "Cyber Security": "blue",
      Languages: "purple",
      Cloud: "orange",
    };
    const color = colorMap[category] || "gray";
    return darkMode ? `text-${color}-400` : `text-${color}-600`;
  };

  // Filter and sort certificates by relevancy
  const filteredCertificates = certificates
    .filter((cert) => {
      if (selectedCategory === "All") return true;
      if (selectedCategory === "Relevant Only") return cert.relevant <= 1;
      return cert.category === selectedCategory;
    })
    .sort((a, b) => a.relevant - b.relevant);

  return (
    <section className={`py-16 px-4 md:px-6 max-w-6xl mx-auto`} id="certificates">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
              darkMode ? "bg-green-900/30 text-green-400" : "bg-green-100 text-green-700"
            }`}
          >
            {t.achievements}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className={`text-3xl md:text-4xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`text-sm max-w-xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t.description}
          </motion.p>
        </div>

        {/* Visual Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => {
            const CategoryIcon = categoryIcons[category];
            const isSelected = selectedCategory === category;

            return (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center justify-center space-x-2 px-5 py-2 rounded-xl transition-all 
                  ${
                    isSelected
                      ? `${getSelectedBgClass(category)} ${
                          darkMode ? "text-white" : "text-gray-900"
                        } shadow-md`
                      : darkMode
                      ? "bg-gray-800 text-gray-300"
                      : "bg-white text-gray-700"
                  }
                  ${
                    !isSelected
                      ? darkMode
                        ? "hover:bg-gray-700"
                        : "hover:bg-gray-50"
                      : ""
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center p-1">
                  <CategoryIcon
                    className={`w-4 h-4 ${getIconColorClass(category, isSelected)}`}
                  />
                </span>
                <div className="flex flex-col items-start">
                  <span
                    className={`text-sm font-medium ${
                      isSelected
                        ? darkMode
                          ? "text-white"
                          : "text-gray-900"
                        : darkMode
                        ? "text-gray-300"
                        : "text-gray-700"
                    }`}
                  >
                    {t.categories[category]}
                  </span>
                  <span
                    className={`text-xs ${
                      isSelected
                        ? darkMode
                          ? "text-gray-400"
                          : "text-gray-600"
                        : "text-gray-500"
                    }`}
                  >
                    ({categoryCounts[category]})
                  </span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Certificates Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.length > 0 ? (
            filteredCertificates.map((cert, index) => (
              <motion.div
                key={`${cert.title}-${cert.issuer}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.4 }}
              >
                <CertificateCard
                  darkMode={darkMode}
                  title={cert.title}
                  issuer={cert.issuer}
                  date={cert.date}
                  category={t.categories[cert.category]}
                  originalCategory={cert.category}
                  link={cert.link}
                  viewCertificateText={t.viewCertificate}
                  inProgressText={t.inProgress}
                  noCertificateText={t.noCertificate}
                  currentYear={currentYear}
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`col-span-full text-center py-12 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              No certificates found for this category
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;