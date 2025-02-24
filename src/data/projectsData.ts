import { ProjectInterface } from "./interfaces";

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
      ? "A robust e-commerce platform built with Java and Spring Boot, supporting user authentication, product management, and payment processing via Stripe API. It also integrates MinioS3 for secure file."
      : "Uma plataforma de e-commerce robusta desenvolvida com Java e Spring Boot, oferecendo autenticação de usuários, gerenciamento de produtos e processamento de pagamentos via Stripe API. Além disso, integra MinioS3 para armazenamento seguro de arquivos.",
    status: isEnglish ? StatusEN.Active : StatusPT.Ativo,
    repo: "https://github.com/Ga5000/E-commerce",
    stacks: ["Java", "MySQL", "Spring Boot", "PostMan", "Stripe API", "MinioS3"]
  },
  {
    id: 2,
    title: isEnglish ? "Sudoku Solver" : "Solvedor de Sudoku",
    description: isEnglish
      ? "A Java-based Sudoku solver featuring a graphical interface built with Java Swing. Users can input numbers into a 9x9 board and press the 'Solve' button to receive an instant solution, leveraging backtracking algorithms to efficiently compute the correct answer."
      : "Um resolvedor de Sudoku desenvolvido em Java com uma interface gráfica construída em Java Swing. Os usuários podem inserir números em um tabuleiro 9x9 e pressionar o botão 'Resolver' para obter instantaneamente a solução correta, utilizando algoritmos de retrocesso para calcular a resposta de forma eficiente.",
    status: isEnglish ? StatusEN.Completed : StatusPT.Completo,
    repo: "https://github.com/Ga5000/SudokuSolver",
    stacks: ["Java", "Java Swing"]
  }
  ];


  export default projects;