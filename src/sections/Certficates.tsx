import { useState } from "react";
import { motion } from "framer-motion";
import CertificateCard from "../components/CertificateCard"; 

const categories = ["All", "Back-end Development", "Coding", "Networks", "Cyber Security", "Languages", "Cloud", "Relevant Only"] as const;
const userLanguage = navigator.language.toLowerCase();
const isEnglish = userLanguage.startsWith("en");

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  category: typeof categories[number];
  link: string;
  relevant: number; 
}

const certificates: Certificate[] = [
  {
    title: "Decola Tech 2025 - Avanade",
    issuer: "DIO",
    date: "2025",
    category: "Back-end Development",
    link: "",
    relevant: 1  
  },
  {
    title: "Java Basic",
    issuer: "HackerRank",
    date: "2025",
    category: "Coding",
    link: "https://drive.google.com/file/d/1fFmjqbgz6uyhOpPILeM00SAq7-zg8zSC/view?usp=drive_link",
    relevant: 3 
  },
  {
    title: "SQL Basic",
    issuer: "HackerRank",
    date: "2025",
    category: "Coding",
    link: "https://drive.google.com/file/d/1Tri6KFDe1bk_lRkdMT0Hn6vSei6Kg7Q4/view?usp=drive_link",
    relevant: 3 
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Coursera",
    date: "2025",
    category: "Cyber Security",
    link: "",
    relevant: 1 
  },
  {
    title : "Introduction to Cloud 101",
    issuer: "AWS",
    date: "2025",
    category: "Cloud",
    link: "",
    relevant: 1
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "2025",
    category: "Networks",
    link: "https://drive.google.com/file/d/1sqGI9rIpoe7z3E8Tex-MPXCvjMwNLsvf/view?usp=drive_link",
    relevant: 2 
  },
  {
    title: "Introduction to Cyber Security",
    issuer: "Cisco Networking Academy",
    date: "2025",
    category: "Cyber Security",
    link: "",
    relevant: 2 
  },
  {
    title: "General Coding Courses",
    issuer: "LinkedIn Learning",
    date: "2024",
    category: "Coding",
    link: "https://drive.google.com/drive/folders/1Mxs-K_ffqdMes0bC4gtP9qXAut94dU1f?usp=drive_link",
    relevant: 3 
  },
  {
    title: "English Course",
    issuer: "Kumon",
    date: "2022",
    category: "Languages",
    link: "",
    relevant: 1 
  }
];

interface CertificatesProps {
  darkMode: boolean;
}

const translations = {
  en: {
    achievements: "Achievements",
    title: "Certificates & Courses",
    description: "A collection of professional certifications and completed courses that showcase my commitment to continuous learning and skill development.",
    categories: {
      All: "All",
      "Back-end Development": "Back-end Development",
      Coding: "Coding",
      Networks: "Networks",
      "Cyber Security": "Cyber Security",
      Languages: "Languages",
      Cloud: "Cloud",
      "Relevant Only": "Relevant Only"
    },
    viewCertificate: "View Certificate",
    inProgress: "In Progress",
    noCertificate: "No Certificate Available"
  },
  pt: {
    achievements: "Conquistas",
    title: "Certificados e Cursos",
    description: "Uma coleção de certificações profissionais e cursos concluídos que demonstram meu compromisso com o aprendizado contínuo e o desenvolvimento de habilidades.",
    categories: {
      All: "Todos",
      "Back-end Development": "Desenvolvimento Back-end",
      Coding: "Codificação",
      Networks: "Redes",
      "Cyber Security": "Segurança Cibernética",
      Languages: "Idiomas",
      Cloud: "Nuvem",
      "Relevant Only": "Apenas Relevantes"
    },
    viewCertificate: "Ver Certificado",
    inProgress: "Em Progresso",
    noCertificate: "Certificado Não Disponível"
  }
};

const Certificates: React.FC<CertificatesProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>("All");
  const currentYear = new Date().getFullYear().toString();
  const t = isEnglish ? translations.en : translations.pt; 

  const filteredCertificates = certificates
    .filter(cert => {
      if (selectedCategory === "All") return true;
      if (selectedCategory === "Relevant Only") return cert.relevant <= 1; 
      return cert.category === selectedCategory;
    })
    .sort((a, b) => a.relevant - b.relevant); 

  return (
    <section className={`py-16 px-4 md:px-6 max-w-7xl mx-auto`} id="certificates">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <span className={`inline-block px-4 py-1 text-sm font-medium rounded-full ${
            darkMode 
              ? 'bg-green-900 text-white' 
              : 'bg-green-500 text-black'
          }`}>
            {t.achievements}
          </span>
          <h2 className={`text-3xl md:text-4xl font-semibold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {t.title}
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.description}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full cursor-pointer text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? darkMode
                    ? 'bg-green-900 text-white'
                    : 'bg-green-500 text-black'
                  : darkMode
                    ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                    : 'bg-gray-300 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t.categories[category]}
            </button>
          ))}
        </div>
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CertificateCard 
                darkMode={darkMode} 
                {...cert} 
                category={t.categories[cert.category]} 
                viewCertificateText={t.viewCertificate}
                inProgressText={t.inProgress}
                noCertificateText={t.noCertificate}
                currentYear={currentYear}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;