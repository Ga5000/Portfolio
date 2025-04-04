import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { LaptopMinimal, LucideIcon, Moon, Sun, Github, Linkedin, Mail } from "lucide-react";
import { Theme } from "../types";
import ThemeButton from "../components/ThemeButton";
import { useTheme } from "../context/ThemeContext";
import SocialLink from "../components/SocialLink";

const HeroSection: React.FC = () => {

    const { t } = useTranslation();
    const { theme } = useTheme();
  
    const themeIcons: { icon: LucideIcon; theme: Theme }[] = [
      { icon: Sun, theme: "light" },
      { icon: Moon, theme: "dark" },
      { icon: LaptopMinimal, theme: "system" },
    ];
  
    const socialLinks: { icon: LucideIcon; link: string }[] = [
      { icon: Github, link: "https://github.com/Ga5000" },
      { icon: Linkedin, link: "https://www.linkedin.com/in/gabriel-lisboa05/" },
      { icon: Mail, link: "mailto:gbr.lisboa@gmail.com" },
    ];

    
  return (
    <>
      <div className="fixed top-4 right-4 flex items-center space-x-2 z-40">
        {themeIcons.map(({ icon: Icon, theme: mode }) => (
          <ThemeButton key={mode} Icon={Icon} mode={mode} selected={theme === mode} />
        ))}
      </div>
      <div className="h-screen overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex h-full flex-col justify-center items-start px-6 sm:px-12 md:px-24 max-w-5xl mx-auto transition-colors"
        >
          <div className="space-y-6 text-left">
            <h3 className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light">
              {t("greeting")}
            </h3>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight ml-6">
              Gabriel <span className="text-green-700 dark:text-green-500">Lisboa</span>
            </h1>
            <h3 className="text-2xl md:text-3xl lg:text-4xl ml-8 font-medium text-gray-600 dark:text-gray-400">
              {t("role")}
            </h3>
          </div>
          <div className="mt-10 ml-8 flex space-x-6">
            {socialLinks.map(({ icon: Icon, link }, index) => (
              <SocialLink key={index} Icon={Icon} link={link} />
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;