import React from "react";
import { Github, Linkedin, Mail, Copyright } from "lucide-react";

interface FooterProps {
  darkMode: boolean;
  isEnglish: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode, isEnglish }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer
      className={`w-full ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-200 border-gray-100'} backdrop-blur-sm border-t py-6 sm:py-8 md:py-10`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      
          <div className="space-y-3 sm:space-y-4">
            <h3 className={`text-lg font-medium tracking-tight ${darkMode ? 'text-white' : 'text-black'}`}>
              Gabriel Lisboa
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} leading-relaxed`}>
              {isEnglish
                ? "Building robust and scalable backend systems with a focus on efficiency and reliability."
                : "Desenvolvendo sistemas backend robustos e escaláveis com foco em eficiência e confiabilidade."}
            </p>
          </div>
          
     
          <div className="hidden md:block">
          </div>
          
          <div className="space-y-3 sm:space-y-4 sm:justify-self-end md:justify-self-end">
            <h4 className={`text-sm font-medium uppercase tracking-wider ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              {isEnglish ? "Connect" : "Conectar"}
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Ga5000"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors duration-200`}
                aria-label="GitHub"
              >
                <Github className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-lisboa05"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors duration-200`}
                aria-label="LinkedIn"
              >
                <Linkedin className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              </a>
              <a
                href="mailto:gbr.lisboa@gmail.com"
                className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors duration-200`}
                aria-label="Email"
              >
                <Mail className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              </a>
            </div>
          </div>
        </div>
        
     
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-400">
          <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Copyright className={`w-3 h-3 sm:w-4 sm:h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {currentYear} Gabriel Lisboa. {isEnglish ? "All rights reserved." : "Todos os direitos reservados."}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;