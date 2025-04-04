import React from "react";
import { Github, Linkedin, Mail, Copyright } from "lucide-react";
import { useTranslation } from "react-i18next";


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  
  return (
    <footer
      className="w-full dark:bg-gray-900 dark:border-gray-800 bg-gray-200 border-gray-100 backdrop-blur-sm border-t py-6 sm:py-8 md:py-10 mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg font-medium tracking-tight dark:text-white text-black">
              Gabriel Lisboa
            </h3>
           
          </div>
          
     
          <div className="hidden md:block">
          </div>
          
          <div className="space-y-3 sm:space-y-4 sm:justify-self-end md:justify-self-end">
            <h4 className="text-sm font-medium uppercase tracking-wider dark:text-gray-500 text-gray-400">
              {t('Connect')}
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Ga5000"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full dark:hover:bg-gray-800 hover:bg-gray-100 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 dark:text-gray-300 text-gray-600" />
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-lisboa05"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full dark:hover:bg-gray-800  hover:bg-gray-100 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 dark:text-gray-300 text-gray-600" />
              </a>
              <a
                href="mailto:gbr.lisboa@gmail.com"
                className="p-2 rounded-full dark:hover:bg-gray-800 hover:bg-gray-100 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 dark:text-gray-300 text-gray-600" />
              </a>
            </div>
          </div>
        </div>
        
     
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-400">
          <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Copyright className="w-3 h-3 sm:w-4 sm:h-4 dark:text-gray-400  text-gray-500" />
            <span className="dark:text-gray-400 text-gray-500">
              {currentYear} Gabriel Lisboa. {t('All rights')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;