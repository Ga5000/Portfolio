import { motion } from 'framer-motion';
import { Atom, Brain, CloudUpload, Coffee, Container, Database, FileCode2, Fingerprint, HardDrive, Leaf, Zap } from 'lucide-react';
import ProjectCard, { ProjectProps } from '../components/ui/projectCard';
import blogAPI from '../assets/blogAPI.png';
import defaultProject from '../assets/defaultProject.png';
import portfolio from '../assets/portfolio.png';
import { useTranslation } from 'react-i18next';

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
};

const itemVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const Projects = () => {
  const { t } = useTranslation();

  const projects: ProjectProps[] = [
    {
      id: 1,
      title: "Blog API",
      description: t('projects.blogAPI.description'),
      date: t('projects.blogAPI.date'),
      image: blogAPI,
      githubUrl: "https://github.com/Ga5000/Blog-API",
      liveUrl: "",
      techStack: [
        { icon: <Leaf size={16} className="text-green-500" />, name: "Spring Boot" },
        { icon: <Coffee size={16} className="text-red-500" />, name: "Java" },
        { icon: <HardDrive size={16} className="text-red-700" />, name: "Redis" },
        { icon: <Database size={16} className="text-blue-400" />, name: "MySQL" },
        { icon: <Container size={16} className="text-blue-700" />, name: "Docker" },
        { icon: <CloudUpload size={16} className="text-purple-800" />, name: "MinIO" },
        { icon: <Zap size={16} className="text-yellow-500" />, name: "Postman" },
        { icon: <Fingerprint size={16} className="text-pink-400" />, name: "Oauth2" },
      ]
    },
    {
      id: 2,
      title: "PhishWatch",
      description: t('projects.phishWatch.description'),
      date: t('projects.phishWatch.date'),
      image: defaultProject,
      githubUrl: "https://github.com/Ga5000/PhishWatch",
      liveUrl: "",
      techStack: [
        { icon: <Leaf size={16} className="text-green-500" />, name: "Spring Boot" },
        { icon: <Coffee size={16} className="text-red-500" />, name: "Java" },
        { icon: <HardDrive size={16} className="text-red-700" />, name: "Redis" },
        { icon: <Database size={16} className="text-blue-400" />, name: "MySQL" },
        { icon: <Zap size={16} className="text-yellow-500" />, name: "Postman" },
        { icon: <Brain size={16} className="text-blue-900" />, name: "Gemini AI" },
        { icon: <Container size={16} className="text-blue-700" />, name: "Docker" },
        { icon: <Fingerprint size={16} className="text-pink-400" />, name: "Oauth2" },
        { icon: <Atom size={16} className="text-blue-400" />, name: "React" },
        { icon: <FileCode2 size={16} className="text-blue-600" />, name: "TypeScript" },
      ]
    },
    {
      id: 3,
      title: "Portfolio",
      description: t('projects.portfolio.description'),
      date: t('projects.portfolio.date'),
      image: portfolio,
      githubUrl: "https://github.com/Ga5000/Portfolio",
      liveUrl: "",
      techStack: [
        { icon: <Atom size={16} className="text-blue-400" />, name: "React" },
        { icon: <FileCode2 size={16} className="text-blue-600" />, name: "TypeScript" },
      ]
    }
  ];

  return (
    <motion.section
      className="py-16"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 className="text-3xl font-bold mb-12 text-center text-white" variants={itemVariants}>
          {t('projects.featured.title')} <span className="text-green-500">{t('projects.featured.span')}</span>
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;