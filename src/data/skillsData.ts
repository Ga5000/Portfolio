
import { Skill } from "./interfaces";
import { SiSpringboot, SiTypescript, SiMinio, SiVercel, SiRender, SiRailway, SiApachemaven, SiPostman, SiRedis } from "react-icons/si";
import { FaGitAlt, FaGithub, FaReact, FaJava, FaAws, FaDocker, FaLinux, FaWindows } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMysql, DiPostgresql } from "react-icons/di";
import { GiNetworkBars } from "react-icons/gi"; 
import { BiNetworkChart } from "react-icons/bi"; 

const skills: Skill[] = [
  {
    image: FaJava,
    name: "Java",
    type: "backend",
  },
  {
    image: SiSpringboot,
    name: "Spring Boot",
    type: "backend",
  },
  {
    image: SiRedis,
    name: "Redis",
    type: "backend"
  },
  {
    image: FaReact,
    name: "React JS",
    type: "frontend",
  },
  {
    image: SiTypescript,
    name: "TypeScript",
    type: "frontend",
  },
  {
    image: IoLogoJavascript,
    name: "JavaScript",
    type: "frontend",
  },
  {
    image: FaAws,
    name: "AWS",
    type: "devops & deploy",
  },
  {
    image: SiMinio,
    name: "Minio",
    type: "devops & deploy",
  },
  {
    image: SiVercel,
    name: "Vercel",
    type: "devops & deploy",
  },
  {
    image: SiRender,
    name: "Render",
    type: "devops & deploy",
  },
  {
    image: SiRailway,
    name: "Railway",
    type: "devops & deploy",
  },
  {
    image: FaDocker,
    name: "Docker",
    type: "tools",
  },
  {
    image: FaGitAlt,
    name: "Git",
    type: "tools",
  },
  {
    image: FaGithub,
    name: "GitHub",
    type: "tools",
  },
  {
    image: SiApachemaven,
    name: "Maven",
    type: "tools",
  },
  {
    image: SiPostman,
    name: "Postman",
    type: "tools",
  },
  {
    image: DiMysql,
    name: "MySQL",
    type: "database",
  },
  {
    image: DiPostgresql,
    name: "PostgreSQL",
    type: "database",
  },

  {
    image: GiNetworkBars,
    name: "IPv4 & IPv6",
    type: "network",
  },
 
  {
    image: GiNetworkBars,
    name: "LAN & WAN",
    type: "network",
  },
  
  {
    image: FaLinux,
    name: "Linux",
    type: "tools",
  },
  {
    image: FaWindows,
    name: "Windows",
    type: "tools",
  },
  {
    image: GiNetworkBars,
    name: "Wireless Networks",
    type: "network",
  },
  {
    image: BiNetworkChart,
    name: "TCP & UDP",
    type: "network",
  },
  {
    image: BiNetworkChart,
    name: "TCP/IP & OSI",
    type: "network",
  }
];

export default skills;