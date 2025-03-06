import { ProjectInterface } from "./interfaces";
import { SiSpringboot, SiTypescript, SiMinio, SiPostman, SiStripe } from "react-icons/si";
import { FaReact, FaJava} from "react-icons/fa";
import { DiMysql} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";

const userLanguage = navigator.language.toLowerCase();
const isEnglish = userLanguage.startsWith("en");

enum StatusEN {
  Active = "active",
  Completed = "completed",
  Archived = "archived",
}

enum StatusPT {
  Ativo = "ativo",
  Completo = "completo",
  Arquivado = "arquivado",
}

const projects: ProjectInterface[] = [
  {
    id: 1,
    title: isEnglish ? "E-commerce API" : "API de E-commerce",
    description: isEnglish
      ? "A robust e-commerce platform built with Java and Spring Boot, supporting user authentication, product management, and payment processing via Stripe API. It also integrates MinioS3 for secure file storage."
      : "Uma plataforma de e-commerce robusta desenvolvida com Java e Spring Boot, oferecendo autenticação de usuários, gerenciamento de produtos e processamento de pagamentos via Stripe API. Além disso, integra MinioS3 para armazenamento seguro de arquivos.",
    status: isEnglish ? StatusEN.Active : StatusPT.Ativo,
    repo: "https://github.com/Ga5000/E-commerce",
    stacks: [FaJava, SiSpringboot, DiMysql, SiPostman, SiStripe, SiMinio]
  },
  {
    id: 2,
    title: isEnglish ? "Blog API" : "API de Blog",
    description: isEnglish
      ? "A powerful and scalable Blog API built with Java and Spring Boot, designed to manage posts, users, and comments efficiently. It includes user authentication, role-based access control, and RESTful endpoints for seamless integration. The API supports CRUD operations, pagination, and search functionality to enhance content management. It also ensures security with JWT authentication and integrates with a relational database for structured data storage."
      : "Uma API de Blog poderosa e escalável desenvolvida com Java e Spring Boot, projetada para gerenciar posts, usuários e comentários de forma eficiente. Inclui autenticação de usuários, controle de acesso baseado em funções e endpoints RESTful para fácil integração. A API suporta operações CRUD, paginação e funcionalidade de busca para otimizar a gestão de conteúdo. Além disso, garante segurança com autenticação JWT e se integra a um banco de dados relacional para armazenamento estruturado de dados.",
    status: isEnglish ? StatusEN.Active : StatusPT.Ativo,
    repo: "https://github.com/Ga5000/Blog-API",
    stacks: [FaJava, DiMysql, SiSpringboot, SiPostman, SiMinio]
  },
  {
    id: 3,
    title: isEnglish ? "PortFolio" : "Portfolio",
    description: isEnglish
      ? "This portfolio website you are currently viewing is designed to showcase my projects and achievements. It evolves over time, receiving updates such as new projects, added features, and ongoing improvements."
      : "Este site de portfólio que você está visualizando foi desenvolvido para exibir meus projetos e conquistas. Ele evolui ao longo do tempo, recebendo atualizações como novos projetos, recursos adicionados e melhorias contínuas.",
    status: isEnglish ? StatusEN.Archived : StatusPT.Arquivado,
    repo: "https://github.com/Ga5000/Portfolio",
    stacks: [FaReact, SiTypescript, RiTailwindCssFill]
  },
  {
    id: 4,
    title: isEnglish ? "Sudoku Solver" : "Solvedor de Sudoku",
    description: isEnglish
      ? "A Java-based Sudoku solver featuring a graphical interface built with Java Swing. Users can input numbers into a 9x9 board and press the 'Solve' button to receive an instant solution, leveraging backtracking algorithms to efficiently compute the correct answer."
      : "Um resolvedor de Sudoku desenvolvido em Java com uma interface gráfica construída em Java Swing. Os usuários podem inserir números em um tabuleiro 9x9 e pressionar o botão 'Resolver' para obter instantaneamente a solução correta, utilizando algoritmos de retrocesso para calcular a resposta de forma eficiente.",
    status: isEnglish ? StatusEN.Completed : StatusPT.Completo,
    repo: "https://github.com/Ga5000/SudokuSolver",
    stacks: [FaJava]
  }
];

export default projects;