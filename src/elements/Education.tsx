import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BookOpen, GraduationCap, Award as CertIcon, Box, Shield, Network, Server, Cloud, Globe, Code } from "lucide-react";
import EducationCard from "../components/ui/educationCard";

interface Category {
  id: string;
  labelKey: string;
  icon: React.ReactNode;
}

interface Education {
  id: string;
  type: string;
  titleKey: string;
  institutionKey: string;
  period: string;
  link: string;
  icon: React.ReactNode;
  category: { icon: React.ReactNode; name: string }[];
  relevance: number;
}

const Education = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCourseCategory, setActiveCourseCategory] = useState<string>("all");

  const categories: Category[] = [
    { id: "all", labelKey: "education.all", icon: <BookOpen size={18} className="text-white" /> },
    { id: "university", labelKey: "education.categories.university", icon: <GraduationCap size={18} className="text-blue-500" /> },
    { id: "certifications", labelKey: "education.categories.certifications", icon: <CertIcon size={18} className="text-[#CBA72D]" /> },
    { id: "courses", labelKey: "education.categories.courses", icon: <BookOpen size={18} className="text-emerald-500" /> },
  ];

  const educationList: Education[] = [
    {
      id: "edu1",
      type: "university",
      titleKey: "education.items.edu1.title",
      institutionKey: "education.items.edu1.institution",
      period: "2023 - 2026",
      link: "",
      icon: <GraduationCap size={24} className="text-blue-500" />,
      category: [],
      relevance: 1
    },
    {
      id: "edu2",
      type: "certifications",
      titleKey: "education.items.edu2.title",
      institutionKey: "education.items.edu2.institution",
      period: "2025",
      link: "",
      icon: <Shield size={24} className="text-red-600" />,
      category: [{ icon: <Shield size={16} className="text-red-600" />, name: "Security" }],
      relevance: 1
    },
    {
      id: "edu3",
      type: "courses",
      titleKey: "education.items.edu3.title",
      institutionKey: "education.items.edu3.institution",
      period: "2025",
      link: "https://drive.google.com/file/d/1sqGI9rIpoe7z3E8Tex-MPXCvjMwNLsvf/view",
      icon: <Network size={24} className="text-blue-500" />,
      category: [{ icon: <Network size={16} className="text-blue-500" />, name: "Networks" }],
      relevance: 2
    },
    {
        id: "edu4",
        type: "certifications",
        titleKey: "education.items.edu4.title",
        institutionKey: "education.items.edu4.institution",
        period: "2025",
        link: "",
        icon: <Box size={24} className="text-orange-500" />,
        category: [{ icon: <Cloud size={16} className="text-orange-500" />, name: "Cloud" }],
        relevance: 1
    },
    {
        id: "edu5",
        type: "courses",
        titleKey: "education.items.edu5.title",
        institutionKey: "education.items.edu5.institution",
        period: "2025",
        link: "",
        icon: <Server size={24} className="text-green-500" />,
        category: [{ icon: <Server size={16} className="text-green-500" />, name: "Back-end Development" }],
        relevance: 2
    },
    {
        id: "edu6",
        type: "courses",
        titleKey: "education.items.edu6.title",
        institutionKey: "education.items.edu6.institution",
        period: "2025",
        link: "",
        icon: <Network size={24} className="text-blue-500" />,
        category: [{ icon: <Network size={16} className="text-blue-500" />, name: "Networks" }],
        relevance: 3
    },
    {
        id: "edu7",
        type: "courses",
        titleKey: "education.items.edu7.title",
        institutionKey: "education.items.edu7.institution",
        period: "2025",
        link: "https://www.credly.com/badges/dc55a032-9809-4e48-ab44-c66a222c2ddf/public_url",
        icon: <Box size={24} className="text-orange-500" />,
        category: [{ icon: <Cloud size={16} className="text-orange-500" />, name: "Cloud" }],
        relevance: 2
    },
    {
        id: "edu8",
        type: "courses",
        titleKey: "education.items.edu8.title",
        institutionKey: "education.items.edu8.institution",
        period: "2025",
        link: "",
        icon: <Shield size={24} className="text-red-500" />,
        category: [{ icon: <Shield size={16} className="text-red-500" />, name: "Security" }],
        relevance: 2
    },
    {
        id: "edu9",
        type: "courses",
        titleKey: "education.items.edu9.title",
        institutionKey: "education.items.edu9.institution",
        period: "2018 - 2022",
        link: "https://drive.google.com/file/d/1-2yYT5KFXUYl_5fK-IVx7eWnlS7ynOo1/view",
        icon: <Globe size={24} className="text-purple-500" />,
        category: [{ icon: <Globe size={16} className="text-purple-500" />, name: "Languages" }],
        relevance: 1
    },
    {
        id: "edu10",
        type: "courses",
        titleKey: "education.items.edu10.title",
        institutionKey: "education.items.edu10.institution",
        period: "2024",
        link: "https://drive.google.com/file/d/1fFmjqbgz6uyhOpPILeM00SAq7-zg8zSC/view",
        icon: <Code size={24} className="text-yellow-500" />,
        category: [{ icon: <Code size={16} className="text-yellow-500" />, name: "Coding" }],
        relevance: 3
    },
    {
        id: "edu11",
        type: "courses",
        titleKey: "education.items.edu11.title",
        institutionKey: "education.items.edu11.institution",
        period: "2024",
        link: "https://drive.google.com/file/d/1Tri6KFDe1bk_lRkdMT0Hn6vSei6Kg7Q4/view",
        icon: <Code size={24} className="text-yellow-500" />,
        category: [{ icon: <Code size={16} className="text-yellow-500" />, name: "Coding" }],
        relevance: 3
    },
    {
        id: "edu12",
        type: "courses",
        titleKey: "education.items.edu12.title",
        institutionKey: "education.items.edu12.institution",
        period: "2024",
        link: "https://drive.google.com/drive/u/1/folders/1Mxs-K_ffqdMes0bC4gtP9qXAut94dU1f",
        icon: <Code size={24} className="text-yellow-500" />,
        category: [{ icon: <Code size={16} className="text-yellow-500" />, name: "Coding" }],
        relevance: 3
    },
  ];

  const courseCategories = Array.from(new Set(educationList.flatMap(edu => edu.category.map(cat => cat.name))));

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId !== "courses") {
      setActiveCourseCategory("all");
    }
  };

  const filteredEducation = educationList
    .filter((edu) => {
      const matchesType = activeCategory === "all" || edu.type === activeCategory;

      const translatedTitle = t(edu.titleKey);
      const translatedInstitution = t(edu.institutionKey);
      const matchesSearch =
        translatedTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        translatedInstitution.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCourseCategory =
        activeCategory !== "courses" ||
        activeCourseCategory === "all" ||
        edu.category.some(cat => cat.name === activeCourseCategory);

      return matchesType && matchesSearch && matchesCourseCategory;
    })
    .sort((a, b) => a.relevance - b.relevance);

  const sectionVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } };
  const headingVariants = { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } } };
  const categoryVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delayChildren: 0.3, staggerChildren: 0.1 } } };
  const cardContainerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delayChildren: 0.5, staggerChildren: 0.2 } } };
  const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };
  const dropdownVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } } };

  return (
    <motion.section
      className="py-12 px-4 md:py-24 md:px-12 lg:px-24"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-12" variants={headingVariants}>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('education.title')} <span className="text-green-500">{t('education.journey')}</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            {t('education.description')}
          </p>
        </motion.div>
        <motion.div className="flex flex-wrap justify-center gap-2 mb-6" variants={categoryVariants}>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`flex items-center cursor-pointer px-4 py-2 rounded-full transition-colors duration-300${
                activeCategory === category.id
                  ? " shadow-lg text-white bg-zinc-900"
                  : " shadow-md bg-zinc-800 text-zinc-400 hover:bg-zinc-800"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="mr-2">{category.icon}</span>
              {t(category.labelKey)}
            </motion.button>
          ))}
        </motion.div>
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('education.searchPlaceholder')}
            className="w-full max-w-md p-2 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:border-green-500"
          />
        </div>
        {activeCategory === "courses" && (
          <motion.div className="mb-8 flex justify-center" variants={dropdownVariants} initial="hidden" animate="visible">
            <select
              value={activeCourseCategory}
              onChange={(e) => setActiveCourseCategory(e.target.value)}
              className="w-full max-w-md p-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:border-green-500"
            >
              <option value="all">{t('education.all')}</option>
              {courseCategories.map((catName) => (
                <option key={catName} value={catName}>
                  {t(`education.courseCategories.${catName}`)}
                </option>
              ))}
            </select>
          </motion.div>
        )}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={cardContainerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory + searchQuery + activeCourseCategory + t('education.title')}
        >
          {filteredEducation.map((edu) => {
            const translatedEdu = {
                ...edu,
                title: t(edu.titleKey),
                institution: t(edu.institutionKey),
                category: edu.category.map(cat => ({
                    ...cat,
                    name: t(`education.courseCategories.${cat.name}`)
                }))
            };
            return (
              <motion.div key={edu.id} variants={cardVariants} layout>
                <EducationCard education={translatedEdu} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;