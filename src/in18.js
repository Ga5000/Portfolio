import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      explore: {
        header: "Hey, I'm ",
        subheader: "I'm a passionate student focused on building and understanding complex systems from the ground up.",
        checkout: "Check out"
      },
      projects: {
        title: "Projects",
        description: "Check out the systems and applications I've built from the ground up.",
        featured: {
          title: "Featured",
          span: "Projects"
        },
        blogAPI: {
          description: "A robust API built with Spring Boot and Java, featuring secure authentication with OAuth2. It uses MySQL for data persistence, Redis for caching, and MinIO for file storage.",
          date: "2025 - Completed"
        },
        phishWatch: {
          description: "An intelligent phishing detection system powered by Gemini AI. Developed with Java and Spring Boot, it combines MySQL, Redis, and OAuth2 authentication. The frontend is built using React and TypeScript, with API testing handled via Postman and deployment streamlined using Docker.",
          date: "2025 - Ongoing"
        },
        portfolio: {
          description: "A sleek and responsive personal portfolio built with React and TypeScript. Designed to showcase projects, skills, and experience in a clean and professional layout, optimized for both performance and accessibility.",
          date: "2025 - Constant changes"
        }
      },
      experience: {
        header: {
          first: "Experience",
          second: "Journey"
        },
        description: "My professional journey and work experience so far.",
        projectsTitle: "My Projects",
        projectsBtn: "Explore Projects",
        projectsDescription: "Discover the projects I've built to showcase my technical skills and creativity. Each one represents a challenge I've embraced and solved.",
        aboutTitle: "About Me",
        aboutBtn: "Get to Know Me",
        aboutDescription: "Learn more about my journey, skills, and what drives me. I'm passionate about technology and constantly expanding my knowledge."
      },
      stack: {
        title: "Tech Stack",
        description: "Tools and technologies I use to build robust systems.",
        categories: { // Added category translations
          all: "All",
          frontend: "Frontend",
          backend: "Backend",
          database: "Database",
          network: "Network",
          security: "Security",
          "cloud&devops": "Cloud & DevOps",
          tools: "Tools"
        }
      },
      education: {
        title: "Education",
        journey: "Journey",
        description: "A showcase of my academic and professional learning.",
        searchPlaceholder: "Search education...",
        viewCertificate: "View Certificate",
        inProgress: "Ongoing",
        all: "All",
        categories: {
            university: "University",
            certifications: "Certifications",
            courses: "Courses"
        },
        courseCategories: {
            Security: "Security",
            Networks: "Networks",
            Cloud: "Cloud",
            "Back-end Development": "Back-end Development",
            Languages: "Languages",
            Coding: "Coding"
        },
        items: {
            edu1: {
                title: "Bachelor's Degree in Computer Science",
                institution: "University of the City of São Paulo - UNICID",
                period: "2023 - 2026"
            },
            edu2: {
                title: "Google Cybersecurity Professional",
                institution: "Google",
                period: "2025"
            },
            edu3: {
                title: "Networking Basics",
                institution: "Cisco Networking Academy",
                period: "2025"
            },
            edu4: {
                title: "AWS Certified Cloud Practitioner",
                institution: "Amazon Web Services",
                period: "2025"
            },
            edu5: {
                title: "Santander Bootcamp 2025",
                institution: "DIO",
                period: "2025"
            },
            edu6: {
                title: "Networking Devices and Initial Configuration",
                institution: "Cisco Networking Academy",
                period: "2025"
            },
            edu7: {
                title: "Introduction to Cloud 101",
                institution: "Amazon Web Services",
                period: "2025"
            },
            edu8: {
                title: "Introduction to Cybersecurity",
                institution: "Cisco Networking Academy",
                period: "2025"
            },
            edu9: {
                title: "English Course",
                institution: "Kumon South America",
                period: "2018 - 2022"
            },
            edu10: {
                title: "Java Basic",
                institution: "HackerRank",
                period: "2024"
            },
            edu11: {
                title: "SQL Basic",
                institution: "HackerRank",
                period: "2024"
            },
            edu12: {
                title: "General Coding Courses",
                institution: "LinkedIn Learning",
                period: "2024"
            },
            edu13: {
              title: "AWS Cloud Practitioner Essentials",
              institution: "AWS",
              period: "2025"
          }
        }
      },
      about: {
        title: "About Me",
        description: "Learn more about who I am and what drives me.",
        heading: {
          main: "About",
          span: "Me"
        },
        paragraph1: "I'm Gabriel Lisboa, a Computer Science student at UNICID and an enthusiastic developer passionate about crafting smart, efficient systems. My journey began at 17, experimenting with programming and gradually building a strong foundation in software development.",
        paragraph2: "I specialize in Java and the Spring Boot framework, combining solid object-oriented principles, algorithms, and SQL to build clean, maintainable, and scalable applications. I'm driven by the desire to solve real-world problems through technology and continuous improvement.",
        paragraph3: "Outside of coding, I love diving into new technologies, studying system architecture, and understanding how things work under the hood.",
        connect: "Let's Connect",
        imageAlt: "Gabriel"
      },
      nav: {
        explore: "Explore",
        experience: "Experience",
        projects: "Projects",
        about: "About",
        stack: "Stack",
        education: "Education",
        github: "Github",
        linkedin: "LinkedIn",
        email: "Contact"
      },
      profile: {
        job: "Back-end Developer"
      }
    }
  },
  pt: {
    translation: {
      explore: {
        header: "Olá, eu sou o ",
        subheader: "Sou um estudante apaixonado, focado em construir e entender sistemas complexos desde o zero.",
        checkout: "Confira"
      },
      projects: {
        title: "Projetos",
        description: "Confira os sistemas e aplicações que construí do zero.",
        featured: {
          title: "Projetos em",
          span: "Destaque"
        },
        blogAPI: {
          description: "Uma API robusta construída com Spring Boot e Java, com autenticação segura usando OAuth2. Utiliza MySQL para persistência de dados, Redis para cache e MinIO para armazenamento de arquivos.",
          date: "2025 - Concluído"
        },
        phishWatch: {
          description: "Um sistema inteligente de detecção de phishing alimentado por Gemini AI. Desenvolvido com Java e Spring Boot, combina MySQL, Redis e autenticação OAuth2. O frontend foi construído com React e TypeScript, com testes de API realizados via Postman e implantação otimizada usando Docker.",
          date: "2025 - Em andamento"
        },
        portfolio: {
          description: "Um portfólio pessoal elegante e responsivo construído com React e TypeScript. Projetado para exibir projetos, habilidades e experiência em um layout limpo e profissional, otimizado para desempenho e acessibilidade.",
          date: "2025 - Em constante evolução"
        }
      },
      experience: {
        header: {
          first: "Jornada",
          second: "Profissional"
        },
        description: "Minha jornada profissional e experiência de trabalho até agora.",
        projectsTitle: "Meus Projetos",
        projectsBtn: "Explorar Projetos",
        projectsDescription: "Descubra os projetos que desenvolvi para demonstrar minhas habilidades técnicas e criatividade. Cada um representa um desafio que superei.",
        aboutTitle: "Sobre Mim",
        aboutBtn: "Conheça-me",
        aboutDescription: "Saiba mais sobre minha trajetória, habilidades e o que me motiva. Sou apaixonado por tecnologia e estou sempre expandindo meu conhecimento."
      },
      stack: {
        description: "Ferramentas e tecnologias que uso para construir sistemas robustos.",
        categories: { // Added category translations
          all: "Todos",
          frontend: "Frontend",
          backend: "Backend",
          database: "Banco de Dados",
          network: "Redes",
          security: "Segurança",
          "cloud&devops": "Cloud & DevOps",
          tools: "Ferramentas"
        }
      },
      education: {
        title: "Educação",
        journey: "Jornada",
        description: "Uma vitrine do meu aprendizado acadêmico e profissional.",
        searchPlaceholder: "Pesquisar educação...",
        viewCertificate: "Ver Certificado",
        inProgress: "Em progresso",
        all: "Todos",
        categories: {
            university: "Universidade",
            certifications: "Certificações",
            courses: "Cursos"
        },
        courseCategories: {
            Security: "Segurança",
            Networks: "Redes",
            Cloud: "Nuvem",
            "Back-end Development": "Desenvolvimento Back-end",
            Languages: "Idiomas",
            Coding: "Programação"
        },
        items: {
            edu1: {
                title: "Bacharelado em Ciência da Computação",
                institution: "Universidade da Cidade de São Paulo - UNICID",
                period: "2023 - 2026"
            },
            edu2: {
                title: "Profissional de Cibersegurança do Google",
                institution: "Google",
                period: "2025"
            },
            edu3: {
                title: "Fundamentos de Redes",
                institution: "Cisco Networking Academy",
                period: "2025"
            },
            edu4: {
                title: "AWS Certified Cloud Practitioner",
                institution: "Amazon Web Services",
                period: "2025"
            },
            edu5: {
                title: "Santander Bootcamp 2025",
                institution: "DIO",
                period: "2025"
            },
            edu6: {
                title: "Dispositivos de Rede e Configuração Inicial",
                institution: "Cisco Networking Academy",
                period: "2025"
            },
            edu7: {
                title: "Introdução à Nuvem 101",
                institution: "Amazon Web Services",
                period: "2025"
            },
            edu8: {
                title: "Introdução à Cibersegurança",
                institution: "Cisco Networking Academy",
                period: "2025"
            },
            edu9: {
                title: "Curso de Inglês",
                institution: "Kumon América do Sul",
                period: "2018 - 2022"
            },
            edu10: {
                title: "Java Básico",
                institution: "HackerRank",
                period: "2024"
            },
            edu11: {
                title: "SQL Básico",
                institution: "HackerRank",
                period: "2024"
            },
            edu12: {
                title: "Cursos Gerais de Programação",
                institution: "LinkedIn Learning",
                period: "2024"
            }
        }
      },
      about: {
        title: "Sobre Mim",
        description: "Saiba mais sobre quem eu sou e o que me impulsiona.",
        heading: {
          main: "Sobre",
          span: "Mim"
        },
        paragraph1: "Sou Gabriel Lisboa, estudante de Ciência da Computação na UNICID e um desenvolvedor entusiasmado, apaixonado por criar sistemas inteligentes e eficientes. Minha jornada começou aos 17 anos, experimentando com programação e gradualmente construindo uma base sólida em desenvolvimento de software.",
        paragraph2: "Especializo-me em Java e no framework Spring Boot, combinando princípios sólidos de orientação a objetos, algoritmos e SQL para construir aplicações limpas, manuteníveis e escaláveis. Sou movido pelo desejo de resolver problemas do mundo real através da tecnologia e da melhoria contínua.",
        paragraph3: "Fora da programação, adoro mergulhar em novas tecnologias, estudar arquitetura de sistemas e entender como as coisas funcionam por baixo dos panos.",
        connect: "Vamos Conectar",
        imageAlt: "Gabriel"
      },
      nav: {
        explore: "Explorar",
        experience: "Experiência",
        projects: "Projetos",
        about: "Sobre",
        stack: "Tecnologias",
        education: "Educação",
        github: "Github",
        linkedin: "LinkedIn",
        email: "Contato"
      },
      profile: {
        job: "Desenvolvedor Back-end"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ["navigator", "htmlTag", "localStorage", "cookie", "path", "subdomain"],
      caches: ["localStorage", "cookie"]
    },
    keySeparator: ".",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;