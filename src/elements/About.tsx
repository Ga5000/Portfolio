import { FileUser, GithubIcon, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import profile from '../assets/proflie.png';
import resumeEn from '../assets/Gabriel Curriculum 2025-04 Back-end&Cybersecurity - EN.pdf';
import resumePt from '../assets/Gabriel Curriculum 2025-04 Back-end&Cybersecurity.pdf'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const isEnglish = navigator.language.startsWith('en');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.3, 
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.05, 
        delayChildren: 0.3 
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }
    }
  };

  return (
    <motion.section 
      className="py-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.h1 
              className="text-4xl font-bold text-white"
              variants={itemVariants}
            >
              {t('about.heading.main')} <span className="text-green-500">{t('about.heading.span')}</span>
            </motion.h1>
            
            <motion.p 
              className="text-zinc-400 leading-relaxed"
              variants={itemVariants}
            >
              {t('about.paragraph1')}
            </motion.p>

            <motion.p 
              className="text-zinc-400 leading-relaxed"
              variants={itemVariants}
            >
              {t('about.paragraph2')}
            </motion.p>

            <motion.p 
              className="text-zinc-400 leading-relaxed"
              variants={itemVariants}
            >
              {t('about.paragraph3')}
            </motion.p>

            <motion.div 
              className="pt-4"
              variants={itemVariants}
            >
              <motion.h3 
                className="text-xl font-semibold text-white mb-4"
                variants={itemVariants}
              >
                {t('about.connect')}
              </motion.h3>
              
              <motion.div 
                className="flex space-x-4"
                variants={socialVariants}
              >
                <motion.a
                  href="https://github.com/Ga5000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow-md shadow-black p-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300"
                  variants={iconVariants}
                  whileHover={{ 
                    y: -3, 
                    backgroundColor: "#27272a", 
                    transition: { duration: 0.15 } 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GithubIcon size={20} className="text-neutral-300" />
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/gabriel-lisboa05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow-md shadow-black p-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300"
                  variants={iconVariants}
                  whileHover={{ 
                    y: -3,
                    backgroundColor: "#27272a", 
                    transition: { duration: 0.15 } 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} className="text-neutral-300" />
                </motion.a>
                
                <motion.a
                  href="mailto:gbr.lisboa@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow-md shadow-black p-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300"
                  variants={iconVariants}
                  whileHover={{ 
                    y: -3,
                    backgroundColor: "#27272a", 
                    transition: { duration: 0.15 } 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} className="text-neutral-300" />
                </motion.a>
                
                <motion.a
                  href={isEnglish ? resumeEn : resumePt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow-md shadow-black p-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300"
                  variants={iconVariants}
                  whileHover={{ 
                    y: -3,
                    backgroundColor: "#27272a", 
                    transition: { duration: 0.15 } 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FileUser size={20} className="text-neutral-300"/>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-first lg:order-last flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { duration: 0.6 } 
              }}
            >
              <motion.div 
                className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-500/20 to-zinc-500/20 blur-lg"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.img
                src={profile}
                alt={t('about.imageAlt')}
                className="relative w-sm max-w-md object-cover rounded-lg shadow-2xl shadow-black z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.2 }
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;