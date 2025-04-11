import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Pencil, User } from "lucide-react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { 
      y: -10,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <motion.section
      className="py-24 px-6 flex justify-center items-center min-h-screen"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="max-w-4xl w-full">
        <motion.div className="text-center mb-16" variants={contentVariants}>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t("experience.header.first")}{" "}
            <span className="text-green-500">{t("experience.header.second")}</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {t("experience.description")}
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-8" variants={contentVariants}>
          <Link to="/projects">
            <motion.div 
              className="relative bg-zinc-900 border shadow-lg shadow-black rounded-xl p-8 cursor-pointer group flex flex-col h-full"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center mb-4">
                <Pencil size={24} className="text-green-500 mr-3" />
                <h3 className="text-xl font-semibold text-white">{t("experience.projectsTitle")}</h3>
              </div>
              
              <p className="text-zinc-400 mb-6 flex-grow">
                {t("experience.projectsDescription")}
              </p>
              
              <div className="flex items-center text-green-500 mt-auto transition-transform group-hover:translate-x-1">
                <span className="mr-1">{t("experience.projectsBtn")}</span>
                <ArrowRight size={16} className="ml-2" />
              </div>
              
              <div className="absolute bottom-0 left-0 h-1 bg-green-500 w-0 group-hover:w-full transition-all duration-300 rounded-b-xl"></div>
            </motion.div>
          </Link>

          <Link to="/about">
            <motion.div 
              className="relative bg-zinc-900 border shadow-lg shadow-black rounded-xl p-8 cursor-pointer group flex flex-col h-full"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center mb-4">
                <User size={24} className="text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold text-white">{t("experience.aboutTitle")}</h3>
              </div>
              
              <p className="text-zinc-400 mb-6 flex-grow">
                {t("experience.aboutDescription")}
              </p>
              
              <div className="flex items-center text-blue-500 mt-auto transition-transform group-hover:translate-x-1">
                <span className="mr-1">{t("experience.aboutBtn")}</span>
                <ArrowRight size={16} className="ml-2" />
              </div>
              
              <div className="absolute bottom-0 left-0 h-1 bg-blue-500 w-0 group-hover:w-full transition-all duration-300 rounded-b-xl"></div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
