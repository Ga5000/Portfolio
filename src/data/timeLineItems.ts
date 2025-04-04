import { Code, GraduationCap, BookOpen, FolderCog, Briefcase, Laptop } from "lucide-react";
import { TimeLineItem } from "../common/interfaces";

const isEnglish = navigator.language.startsWith('en');

const items: TimeLineItem[] = [
  {
    id: '1',
    title: isEnglish 
      ? "First Steps in Programming" 
      : "Primeiros Passos na Programação",
    description: isEnglish
      ? "Discovered my passion for coding and started learning the fundamentals of programming." 
      : "Descobri minha paixão por programação e comecei a aprender os fundamentos.",
    date: isEnglish ? "Oct 2022" : "Out 2022",
    icon: Code
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
    icon: GraduationCap,
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
    icon: BookOpen
  },
  {
    id: '4',
    title: isEnglish
      ? "Mastering Back-End Development with Java & Spring Boot" 
      : "Dominando Desenvolvimento Back-End com Java e Spring Boot",
    description: isEnglish
      ? "Specializing in back-end development with Java and Spring Boot, focusing on building scalable and efficient applications." 
      : "Especializando-me no desenvolvimento back-end com Java e Spring Boot, focando na criação de aplicações escaláveis e eficientes.",
    date: "Jan 2024",
    icon: FolderCog 
  },
  {
    id: '5',
    title: isEnglish
      ? "Preparing for Technical Interviews" 
      : "Preparação para Entrevistas Técnicas",
    description: isEnglish
      ? "Dedicated time to solving algorithm problems, system design concepts, and mock interviews. Participated in multiple interviews to gain real-world experience." 
      : "Dediquei tempo à resolução de problemas algorítmicos, conceitos de design de sistemas e entrevistas simuladas. Participei de diversas entrevistas para ganhar experiência prática.",
    date: isEnglish ? "June 2024" : "Jun 2024",
    icon: Briefcase
  },
  {
    id: '6',
    title: isEnglish 
      ? "Advancing in Algorithms, Data Structures, and System Design" 
      : "Aprofundando-se em Algoritmos, Estruturas de Dados e Design de Sistemas",
    description: isEnglish
      ? "Continuously improving problem-solving skills by studying data structures, algorithms, and system architecture to prepare for future challenges. Also focusing on personal projects to apply knowledge and explore new technologies." 
      : "Aprimorando continuamente as habilidades de resolução de problemas, estudando estruturas de dados, algoritmos e arquitetura de sistemas para me preparar para desafios futuros. Além disso, focando em projetos pessoais para aplicar conhecimento e explorar novas tecnologias.",
    date: isEnglish ? "September 2024" : "Set 2024",
    icon: Laptop
  },
  {
    id: '7',
    title: isEnglish 
      ? "Studying and Pursuing Online Certifications" 
      : "Estudando e Buscando Certificações Online",
    description: isEnglish
      ? "Engaged in studying various topics, completing online courses, and working towards certifications to enhance knowledge and advance my education." 
      : "Engajado no estudo de diversos tópicos, concluindo cursos online e buscando certificações para aprimorar o conhecimento e avançar na educação.",
    date: isEnglish ? "Present" : "Presente",
    icon: BookOpen
  }
];

export default items;
