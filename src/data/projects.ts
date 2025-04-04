import { Atom, CloudUpload, Database, FileCode2, HandCoins, HardDrive, Leaf, LogIn, Paintbrush, Zap } from "lucide-react";
import { ProjectInterface, StatusEN, StatusPT } from "../common/interfaces";

const isEnglish = navigator.language.startsWith("en");

const projects: ProjectInterface[] = [
  {
    id: 1,
    title: isEnglish ? "E-commerce API" : "API de E-commerce",
    description: isEnglish
      ? "Robust API with Spring Boot, Stripe, and MinIO."
      : "API robusta com Spring Boot, Stripe e MinIO.",
    status: isEnglish ? StatusEN.Active : StatusPT.Ativo,
    repo: "https://github.com/Ga5000/E-commerce",
    stacks: [
      { icon: Leaf, name: "Spring Boot" },
      { icon: Database, name: "MySQL" },
      { icon: CloudUpload, name: "MinIO" },
      { icon: Zap, name: "Postman" },
      { icon: HardDrive, name: "Redis" },
      { icon: HandCoins, name: "Stripe" }
    ],
  },
  {
    id: 2,
    title: isEnglish ? "Blog API" : "API de Blog",
    description: isEnglish
      ? "Scalable API with Spring Boot, JWT, Redis, OAuth2, and MinIO."
      : "API escalável com Spring Boot, JWT, Redis, OAuth2 e MinIO.",
    status: isEnglish ? StatusEN.Completed : StatusPT.Completo,
    repo: "https://github.com/Ga5000/Blog-API",
    stacks: [
      { icon: Leaf, name: "Spring Boot" },
      { icon: Database, name: "MySQL" },
      { icon: CloudUpload, name: "MinIO" },
      { icon: Zap, name: "Postman" },
      { icon: HardDrive, name: "Redis" },
      { icon: LogIn, name: "Oauth2" }
    ],
  },
  {
    id: 3,
    title: isEnglish ? "PortFolio" : "Portfolio",
    description: isEnglish
      ? "Personal portfolio showcasing projects."
      : "Portfólio pessoal exibindo projetos.",
    status: isEnglish ? StatusEN.Archived : StatusPT.Arquivado,
    repo: "https://github.com/Ga5000/Portfolio",
    stacks: [
      { icon: Atom, name: "React" },
      { icon: FileCode2, name: "TypeScript" },
      { icon: Paintbrush, name: "Tailwind CSS" }
    ]
  },
  {
    id: 4,
    title: isEnglish ? "Sudoku Solver" : "Solvedor de Sudoku",
    description: isEnglish
      ? "Java Sudoku solver with Swing and backtracking."
      : "Resolvedor de Sudoku em Java com Swing e retrocesso.",
    status: isEnglish ? StatusEN.Completed : StatusPT.Completo,
    repo: "https://github.com/Ga5000/SudokuSolver",
    stacks: [{ icon: FileCode2, name: "Java" }]
  }
];

export default projects;
