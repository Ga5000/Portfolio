// src/pages/Explore.jsx
import { User, Briefcase, GraduationCap, Pencil, Layers2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ExploreCard from "../components/ui/exploreCard";
import { useTranslation } from "react-i18next";

const Explore = () => {
  const { t } = useTranslation();

  const exploreItems = [
    {
      icon: <Pencil size={24} className="text-neutral-300" />,
      title: t('projects.title'),
      description: t('projects.description'),
      path: "/projects"
    },
    {
      icon: <Briefcase size={24} className="text-neutral-300" />,
      title: t('experience.header.first'),
      description: t('experience.description'),
      path: "/experience"
    },
    {
      icon: <Layers2 size={24} className="text-neutral-300" />,
      title: t('stack.title'),
      description: t('stack.description'),
      path: "/stack"
    },
    {
      icon: <GraduationCap size={24} className="text-neutral-300" />,
      title: t('education.title'),
      description: t('education.description'),
      path: "/education"
    },
    {
      icon: <User size={24} className="text-neutral-300" />,
      title: t('about.title'),
      description: t('about.description'),
      path: "/about"
    }
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.7,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="py-10"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl font-bold text-white mb-6"
            variants={headerVariants}
          >
            {t('explore.header')}
            <span className="text-green-500">Gabriel</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto"
            variants={textVariants}
          >
            {t('explore.subheader')}
          </motion.p>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={cardContainerVariants}
        >
          {exploreItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <Link to={item.path}>
                <ExploreCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Explore;
