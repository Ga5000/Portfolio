import {Database, Network, Waypoints, GlobeLock, MonitorCog, GitBranch, Box, Container, Github, Package, FileCode2, Atom, Zap, 
  Leaf, HardDrive, CloudUpload, Shield, ShieldUser, ShieldPlus, ShieldAlert, Cctv, AlertTriangle, FileLock2, SquareTerminal } from "lucide-react";
import { Skill } from "../common/interfaces";


const skills: Skill[] = [
  {
    icon: Leaf,
    name: "Spring Boot",
    type: "backend",
  },
  {
    icon: HardDrive,
    name: "Redis",
    type: "backend",
  },
  {
    icon: FileCode2,
    name: "Java",
    type: "backend",
  },
  {
    icon: FileCode2,
    name: "Python",
    type: "backend",
  },
  {
    icon: Atom,
    name: "React JS",
    type: "frontend",
  },
  {
    icon: FileCode2,
    name: "TypeScript",
    type: "frontend",
  },
  {
    icon: FileCode2,
    name: "JavaScript",
    type: "frontend",
  },
  {
    icon: Box,
    name: "AWS",
    type: "devops & deploy",
  },
  {
    icon: Container,
    name: "Docker",
    type: "devops & deploy",
  },
  {
    icon: CloudUpload,
    name: "MinIO",
    type: "devops & deploy",
  },
  {
    icon: GitBranch,
    name: "Git",
    type: "tools",
  },
  {
    icon: Github,
    name: "GitHub",
    type: "tools",
  },
  {
    icon: Zap,
    name: "Postman",
    type: "tools",
  },
  {
    icon: Package,
    name: "Maven",
    type: "tools",
  },
  {
    icon: SquareTerminal,
    name: "CLI (Command Line Interface)",
    type: "tools",
  },
  {
    icon: Database,
    name: "MySQL",
    type: "database",
  },
  {
    icon: Database,
    name: "PostgreSQL",
    type: "database",
  },
  {
    icon: Network,
    name: "Ipv4 & Ipv6",
    type: "network",
  },
  {
    icon: Waypoints,
    name: "LAN & WAN",
    type: "network",
  },
  {
    icon: Waypoints,
    name: "TCP/IP & UDP",
    type: "network",
  },
  {
    icon: GlobeLock,
    name: "Network Security",
    type: "network",
  },
  {
    icon: MonitorCog,
    name: "Device Configuration",
    type: "network",
  },
  {
    icon: ShieldUser,
    name: "CIA Triad",
    type: "cybersecurity",
  },
  {
    icon: Shield,
    name: "OWASP",
    type: "cybersecurity",
  },
  {
    icon: ShieldPlus,
    name: "NIST Framework",
    type: "cybersecurity",
  },
  {
    icon: ShieldAlert,
    name: "SIEM",
    type: "cybersecurity"
  },
  {
    icon: AlertTriangle,
    name: "Phishing Awareness",
    type: "cybersecurity"
  },
  {
    icon: FileLock2,
    name: "Password Management",
    type: "cybersecurity"
  },
  {
    icon: Cctv,
    name: "Wireshark",
    type: "cybersecurity"
  }
];

export default skills;
