import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import { GraduationCap, Code, FolderCog, Laptop, Server, BookOpen, Briefcase } from "lucide-react";
import TimeLine from "./sections/TimeLine";
import { TimeLineItem } from "data/interfaces";
import Projects from "./sections/Projects";
import projects from './data/projectsData';
import Certificates from "./sections/Certficates";
import Footer from "./sections/Footer";
import { Analytics } from "@vercel/analytics/react"

const App: React.FC = () => {
  const userLanguage = navigator.language.toLowerCase();
  const isEnglish = userLanguage.startsWith("en");

  const timelineItems: TimeLineItem[] = [
    {
      id: '1',
      title: isEnglish 
        ? "First Steps in Programming" 
        : "Primeiros Passos na Programação",
      description: isEnglish
        ? "Discovered my passion for coding and started learning the fundamentals of programming." 
        : "Descobri minha paixão por programação e comecei a aprender os fundamentos.",
      date: isEnglish ? "Oct 2022" : "Out 2022",
      icon: <Code color='green' />
    },
    {
      id: '2',
      title: isEnglish 
        ? "Starting a Bachelor's in Computer Science" 
        : "Início do Bacharelado em Ciência da Computação",
      description: isEnglish
        ? "Enrolled in Computer Science to deepen my knowledge and build a strong technical foundation." 
        : "Iniciei minha graduação em Ciência da Computação para aprofundar meu conhecimento e construir uma base técnica sólida.",
      date: isEnglish ? "Feb 2023" : "Fev 2023",
      icon: <GraduationCap color='green' />,
    },
    {
      id: '3',
      title: isEnglish 
        ? "Expanding Knowledge Through Online Courses" 
        : "Expandindo Conhecimento com Cursos Online",
      description: isEnglish
        ? "Investing time in online courses and certifications to enhance my skills in back-end development, databases, and system architecture." 
        : "Dedicando tempo a cursos online e certificações para aprimorar minhas habilidades em desenvolvimento back-end, bancos de dados e arquitetura de sistemas.",
      date: isEnglish ? "Mid 2023" : "Meados de 2023",
      icon: <BookOpen color='green' />
    },
    {
      id: '4',
      title: isEnglish
        ? "Mastering Back-End Development with Java & Spring Boot" 
        : "Dominando Desenvolvimento Back-End com Java e Spring Boot",
      description: isEnglish
        ? "Specializing in back-end development with Java and Spring Boot, focusing on building scalable and efficient applications." 
        : "Especializando-me no desenvolvimento back-end com Java e Spring Boot, focando na criação de aplicações escaláveis e eficientes.",
      date: isEnglish ? "Jan 2024" : "Jan 2024", 
      icon: <FolderCog color='green' />
    },
    {
      id: '5',
      title: isEnglish
        ? "Preparing for Technical Interviews" 
        : "Preparação para Entrevistas Técnicas",
      description: isEnglish
        ? "Dedicated time to solving algorithm problems, system design concepts, and mock interviews. Participated in multiple interviews to gain real-world experience." 
        : "Dediquei tempo à resolução de problemas algorítmicos, conceitos de design de sistemas e entrevistas simuladas. Participei de diversas entrevistas para ganhar experiência prática.",
      date: isEnglish ? "Mid 2024" : "Meados de 2024",
      icon: <Briefcase color='green' />
    },
    {
      id: '6',
      title: isEnglish 
        ? "Exploring Computer Networks and Cisco Certification" 
        : "Explorando Redes de Computadores e Certificação Cisco",
      description: isEnglish
        ? "Developed a strong interest in networking, completed the Cisco Networking Basics course, and started exploring network protocols and security." 
        : "Desenvolvi um grande interesse por redes, concluí o curso Cisco Networking Basics e comecei a explorar protocolos de rede e segurança.",
      date: isEnglish ? "Jan 2025" : "Jan 2025",
      icon: <Server color='green' />
    },
    {
      id: '7',
      title: isEnglish 
        ? "Advancing in Algorithms, Data Structures, and System Design" 
        : "Aprofundando-se em Algoritmos, Estruturas de Dados e Design de Sistemas",
      description: isEnglish
        ? "Continuously improving problem-solving skills by studying data structures, algorithms, and system architecture to prepare for future challenges. Also focusing on personal projects to apply knowledge and explore new technologies." 
        : "Aprimorando continuamente as habilidades de resolução de problemas, estudando estruturas de dados, algoritmos e arquitetura de sistemas para me preparar para desafios futuros. Além disso, focando em projetos pessoais para aplicar conhecimento e explorar novas tecnologias.",
      date: isEnglish ? "Present" : "Presente",
      icon: <Laptop color='green' />
    }
  ];

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = "#000";
    } else {
      document.body.style.backgroundColor = "#f0f0f0";
    }
  }, [isDarkMode]);

  return (
    <div className="flex flex-col">
      <Header darkMode={isDarkMode} toggleMode={toggleMode} />
      <main className="flex-grow">
        <Home darkMode={isDarkMode} isEnglish={isEnglish} />
        <Skills darkMode={isDarkMode}/>
        <TimeLine darkMode={isDarkMode} items={timelineItems} />
        <Projects darkMode={isDarkMode} isEnglish={isEnglish} projects={projects} />
        <Certificates darkMode={isDarkMode} />
        <Footer darkMode={isDarkMode} isEnglish={isEnglish} />
      </main>
      <Analytics />
    </div>
  );
};

export default App;