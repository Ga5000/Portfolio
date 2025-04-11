import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import useTranslation
import { Server, Shield, Database, Network, Lock, Radar, Monitor, Cloud, FileCode2, Atom, Leaf, HardDrive, Container, Box, Coffee, CloudUpload, Terminal, Wrench, Zap, GitBranch, Feather, Github, Worm, Boxes, Cpu, CodeXml, DatabaseZap } from "lucide-react";
import TechCard from "../components/ui/techCard";

interface Category {
  id: string;
  labelKey: string; // Changed from label to labelKey
  icon: React.ReactNode;
}

interface Tech {
  name: string;
  category: string;
  logo: React.ReactNode;
}

const Stack = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories: Category[] = [
    { id: "all", labelKey: "stack.categories.all", icon: <Cpu size={18} className="text-white" /> },
    { id: "frontend", labelKey: "stack.categories.frontend", icon: <Monitor size={18} className="text-purple-700" /> },
    { id: "backend", labelKey: "stack.categories.backend", icon: <Server size={18} className="text-green-700" /> },
    { id: "database", labelKey: "stack.categories.database", icon: <Database size={18} className="text-cyan-700" /> },
    { id: "network", labelKey: "stack.categories.network", icon: <Network size={18} className="text-blue-700" /> },
    { id: "security", labelKey: "stack.categories.security", icon: <Shield size={18} className="text-red-700" /> },
    { id: "cloud&devops", labelKey: "stack.categories.cloud&devops", icon: <Cloud size={18} className="text-orange-700" /> },
    { id: "tools", labelKey: "stack.categories.tools", icon: <Wrench size={18} className="text-yellow-700" /> }
  ];

  const techStacks: Tech[] = [
    { name: "Spring Boot", category: "backend", logo: <Leaf size={28} className="text-green-400" /> },
    { name: "Java", category: "backend", logo: <Coffee size={28} className="text-red-500" /> },
    { name: "MySQL", category: "database", logo: <Database size={28} className="text-blue-400" /> },
    { name: "SQLite", category: "database", logo: <Database size={28} className="text-blue-400" /> },
    { name: "PostgreSQL", category: "database", logo: <Database size={28} className="text-blue-400" /> },
    { name: "Redis", category: "backend", logo: <HardDrive size={28} className="text-red-700" /> },
    { name: "Docker", category: "cloud&devops", logo: <Container size={28} className="text-blue-400" /> },
    { name: "AWS", category: "cloud&devops", logo: <Box size={28} className="text-orange-500" /> },
    { name: "MinIO", category: "cloud&devops", logo: <CloudUpload size={28} className="text-purple-800" /> },
    { name: "Wireshark", category: "network", logo: <Network size={28} className="text-blue-400" /> },
    { name: "Packet Tracer", category: "network", logo: <Boxes size={28} className="text-blue-600" /> },
    { name: "Nmap", category: "security", logo: <Radar size={28} className="text-green-500" /> },
    { name: "OpenSSL", category: "security", logo: <Lock size={28} className="text-red-400" /> },
    { name: "CLI", category: "security", logo: <Terminal size={28} className="text-gray-400" /> },
    { name: "React", category: "frontend", logo: <Atom size={28} className="text-blue-400" /> },
    { name: "TypeScript", category: "frontend", logo: <FileCode2 size={28} className="text-blue-800" /> },
    { name: "JavaScript", category: "frontend", logo: <FileCode2 size={28} className="text-yellow-400" /> },
    { name: "Git", category: "tools", logo: <GitBranch size={28} className="text-red-600" /> },
    { name: "Postman", category: "tools", logo: <Zap size={28} className="text-yellow-400" /> },
    { name: "Maven", category: "tools", logo: <Feather size={28} className="text-purple-400" /> },
    { name: "Github", category: "tools", logo: <Github size={28} className="text-black" /> },
    { name: "Python", category: "backend", logo: <Worm size={28} className="text-cyan-800" /> },
    { name: "VS Code", category: "tools", logo: <CodeXml size={28} className="text-blue-600" /> },
    { name: "IntelliJ IDEA", category: "tools", logo: <CodeXml size={28} className="text-red-600" /> },
    { name: "Dbeaver", category: "tools", logo: <DatabaseZap size={28} className="text-blue-400" /> },
  ];

  // Filter logic remains unchanged as it uses category IDs which are language-independent
  const filteredTechStacks = activeCategory === "all"
    ? techStacks
    : techStacks.filter(tech => tech.category === activeCategory);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const headingVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const categoryVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      className="py-12 px-4 md:py-24 md:px-12 lg:px-24"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          variants={headingVariants}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('stack.title').split(' ')[0]} <span className="text-green-500">{t('stack.title').split(' ')[1] || ''}</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            {t('stack.description')}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          variants={categoryVariants}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center cursor-pointer px-4 py-2 rounded-full transition-colors duration-300${activeCategory === category.id ? " shadow-lg text-white bg-zinc-900" : " shadow-md bg-zinc-800 text-zinc-400 hover:bg-zinc-800"}`}
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

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          variants={cardContainerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory} // Re-trigger animations when category changes
        >
          {filteredTechStacks.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`} // Use a more stable key if possible
              variants={cardVariants}
              layout // Animate layout changes
            >
              <TechCard tech={tech} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Stack;