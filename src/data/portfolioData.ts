import { Project, Experience, SkillGroup } from '../types';

export const personalInfo = {
  name: 'Bernardo Avendanho',
  title: {
    pt: 'Estudante de Engenharia de Software',
    en: 'Software Engineering Student'
  },
  university: 'PUC Minas',
  period: '2025 – 2028',
  location: 'Belo Horizonte, MG — Brasil',
  email: 'beravendanho@gmail.com',
  phone: '(31) 9 9927-8942',
  phoneRaw: '5531999278942',
  whatsappUrl: 'https://wa.me/5531999278942?text=Ol%C3%A1%20Bernardo%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!',
  linkedinUrl: 'https://linkedin.com/in/avendanho',
  githubUrl: 'https://github.com/avendanho',
  figmaPrototypeUrl: 'https://www.figma.com/design/qtElu5o0CD1Aup7KxJsRNG',
  curriculumPdfUrl: '#',
  about: {
    pt: {
      bio: 'Sou estudante de Engenharia de Software na PUC Minas (previsão 2028), apaixonado por construir soluções digitais eficientes, arquitetura de software escalável e interfaces elegantes. Meu foco de atuação abrange o ecossistema Full Stack (TypeScript, React, Node.js, Next.js, Python), boas práticas de Clean Code, testes e integração contínua.',
      academicHighlights: [
        'Graduando em Engenharia de Software na Pontifícia Universidade Católica de Minas Gerais (PUC Minas)',
        'Foco em Engenharia de Requisitos, Padrões de Projeto, Arquitetura de Software e Desenvolvimento Web Moderno',
        'Participação ativa em laboratórios práticos, projetos extensionistas e desenvolvimento colaborativo com Git/GitHub'
      ],
      careerGoals: 'Busco oportunidades de estágio e desenvolvimento de software onde eu possa colaborar na criação de sistemas de alto impacto, aplicando engenharia rigorosa, metodologias ágeis e aprendizado contínuo com times multidisciplinares.',
      interests: ['Arquitetura de Microsserviços', 'Design Systems & UI/UX', 'Cloud Computing & DevOps', 'Bancos de Dados Relacionais & NoSQL', 'Inteligência Artificial Aplicada']
    },
    en: {
      bio: "I'm a Software Engineering student at PUC Minas (expected graduation 2028), passionate about building robust digital solutions, scalable software architectures, and clean, intuitive user interfaces. My core focus lies in the modern Full Stack ecosystem (TypeScript, React, Node.js, Next.js, Python), clean code principles, and continuous delivery.",
      academicHighlights: [
        'Undergraduate in Software Engineering at Pontifícia Universidade Católica de Minas Gerais (PUC Minas)',
        'Focus on Requirements Engineering, Design Patterns, Software Architecture, and Modern Web Systems',
        'Active contributor in laboratory sprints, university extension projects, and collaborative Git workflows'
      ],
      careerGoals: 'Looking for software development internships and collaborative opportunities where I can apply rigorous software engineering practices, agile methodologies, and keep learning alongside high-performing teams.',
      interests: ['Microservices Architecture', 'Design Systems & UI/UX', 'Cloud Computing & DevOps', 'Relational & NoSQL Databases', 'Applied Artificial Intelligence']
    }
  }
};

export const prototypeScreenshots = [
  {
    id: 'sobre-mim',
    title: { pt: 'Protótipo — Sobre Mim', en: 'Prototype — About Me' },
    image: '/imagens/Sobre-Mim.png',
    sectionId: 'sobre-mim'
  },
  {
    id: 'projetos',
    title: { pt: 'Protótipo — Projetos', en: 'Prototype — Projects' },
    image: '/imagens/Projetos.png',
    sectionId: 'projetos'
  },
  {
    id: 'experiencias',
    title: { pt: 'Protótipo — Experiências', en: 'Prototype — Experience' },
    image: '/imagens/Experiencias.png',
    sectionId: 'experiencias'
  },
  {
    id: 'contato',
    title: { pt: 'Protótipo — Contato', en: 'Prototype — Contact' },
    image: '/imagens/Contato.png',
    sectionId: 'contato'
  }
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: {
      pt: 'Front-End & UI',
      en: 'Front-End & UI'
    },
    icon: 'Layout',
    skills: [
      { name: 'React', category: 'Frontend', proficiency: 90, popular: true },
      { name: 'TypeScript', category: 'Language', proficiency: 88, popular: true },
      { name: 'Next.js', category: 'Framework', proficiency: 82, popular: true },
      { name: 'Tailwind CSS', category: 'Styling', proficiency: 92, popular: true },
      { name: 'HTML5 / CSS3', category: 'Web', proficiency: 95 },
      { name: 'shadcn/ui', category: 'Components', proficiency: 85 },
      { name: 'Figma & UI Design', category: 'Design', proficiency: 80 }
    ]
  },
  {
    id: 'backend',
    title: {
      pt: 'Back-End & Bancos de Dados',
      en: 'Back-End & Databases'
    },
    icon: 'Server',
    skills: [
      { name: 'Node.js', category: 'Runtime', proficiency: 85, popular: true },
      { name: 'Express / REST APIs', category: 'Backend', proficiency: 86, popular: true },
      { name: 'Python', category: 'Language', proficiency: 80, popular: true },
      { name: 'PostgreSQL', category: 'Database', proficiency: 78, popular: true },
      { name: 'MySQL / SQLite', category: 'Database', proficiency: 82 },
      { name: 'Prisma / ORMs', category: 'Data Layer', proficiency: 75 }
    ]
  },
  {
    id: 'tools',
    title: {
      pt: 'DevOps, Ferramentas & Metodologias',
      en: 'DevOps, Tools & Methods'
    },
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub', category: 'Version Control', proficiency: 90, popular: true },
      { name: 'Docker (Containers)', category: 'DevOps', proficiency: 70 },
      { name: 'Scrum / Kanban / Agile', category: 'Methodology', proficiency: 88, popular: true },
      { name: 'Vercel / Cloud Deploy', category: 'Hosting', proficiency: 85 },
      { name: 'Linux / Bash', category: 'Environment', proficiency: 75 },
      { name: 'Testes Unitários', category: 'Quality', proficiency: 72 }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'portfolio-web',
    title: 'Portfólio Profissional Web',
    subtitle: {
      pt: 'Projeto de Software (Lab01) — PUC Minas',
      en: 'Software Project (Lab01) — PUC Minas'
    },
    description: {
      pt: 'Plataforma web de apresentação profissional com navegação por seções, internacionalização (PT/EN), linha do tempo cronológica de projetos e integração de contato.',
      en: 'Professional portfolio web application featuring section navigation, internationalization (PT/EN), chronological project timeline, and direct contact integration.'
    },
    fullDescription: {
      pt: 'Desenvolvido como parte da disciplina de Projeto de Software na PUC Minas. O projeto partiu de wireframes de média fidelidade no Figma até a implementação completa com React, TypeScript, Tailwind CSS, formulário validado e design responsivo mobile-first.',
      en: 'Built as part of the Software Project curriculum at PUC Minas. Initiated from mid-fidelity Figma wireframes through full responsive implementation with React, TypeScript, Tailwind CSS, validated contact forms, and mobile-first design.'
    },
    timelineDate: '2026.2',
    year: 2026,
    category: 'web',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Figma Wireframes', 'Next.js Arch'],
    githubUrl: 'https://github.com/avendanho/portfolio',
    liveUrl: '#',
    image: '/imagens/Sobre-Mim.png',
    wireframeImage: '/imagens/Sobre-Mim.png',
    featured: true,
    metrics: [
      { label: { pt: 'Design', en: 'Design' }, value: 'Figma UI' },
      { label: { pt: 'Responsivo', en: 'Responsive' }, value: '100% Mobile' },
      { label: { pt: 'Idiomas', en: 'Languages' }, value: 'PT / EN' }
    ]
  },
  {
    id: 'academic-system',
    title: 'Sistema de Gestão Acadêmica',
    subtitle: {
      pt: 'Arquitetura em Camadas & Banco Relacional',
      en: 'Layered Architecture & Relational DB'
    },
    description: {
      pt: 'Sistema para controle de matrículas, turmas, notas e horários acadêmicos com autenticação por perfis (aluno, professor, coordenação).',
      en: 'Academic management system for enrollment tracking, class scheduling, grading, and multi-role authentication (student, faculty, dean).'
    },
    fullDescription: {
      pt: 'Aplicação desenvolvida aplicando conceitos de Orientação a Objetos avançada, MVC, persistência com PostgreSQL e validação de regras de negócio estritas para cálculo de coeficientes de rendimento.',
      en: 'Application engineered using Object-Oriented principles, MVC patterns, PostgreSQL persistence, and strict business logic validation for student academic performance tracking.'
    },
    timelineDate: '2025.2',
    year: 2025,
    category: 'system',
    tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'Express', 'JWT', 'REST API'],
    githubUrl: 'https://github.com/avendanho',
    image: '/imagens/Projetos.png',
    wireframeImage: '/imagens/Projetos.png',
    featured: true,
    metrics: [
      { label: { pt: 'Arquitetura', en: 'Architecture' }, value: 'Layered MVC' },
      { label: { pt: 'Banco', en: 'Database' }, value: 'PostgreSQL' }
    ]
  },
  {
    id: 'task-flow-planner',
    title: 'TaskFlow Planner & Tracker',
    subtitle: {
      pt: 'Gestor Ágil de Tarefas & Produtividade',
      en: 'Agile Task & Productivity Manager'
    },
    description: {
      pt: 'Quadro interativo estilo Kanban com suporte a prioridades, estimativas de tempo, filtros por tags e sincronização em tempo real.',
      en: 'Interactive Kanban-style productivity board with priority weighting, time estimations, tag filtering, and real-time state sync.'
    },
    fullDescription: {
      pt: 'Projeto focado em performance no front-end, manipulação de drag-and-drop fluida e persistência local/remota com arquitetura desacoplada.',
      en: 'Front-end performance focused project featuring fluid drag-and-drop mechanics and resilient client/server persistence.'
    },
    timelineDate: '2025.1',
    year: 2025,
    category: 'web',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Drag and Drop', 'LocalStorage API'],
    githubUrl: 'https://github.com/avendanho',
    image: '/imagens/Projetos.png',
    wireframeImage: '/imagens/Projetos.png',
    featured: false
  },
  {
    id: 'api-microservice-gateway',
    title: 'API Gateway & Auth Service',
    subtitle: {
      pt: 'Microsserviço de Autenticação e Rate Limiting',
      en: 'Authentication & Rate Limiting Microservice'
    },
    description: {
      pt: 'Serviço centralizado para autenticação OAuth/JWT, rate limiting com Redis e roteamento de requisições para serviços downstream.',
      en: 'Centralized OAuth/JWT authentication service with Redis rate limiting and downstream request routing.'
    },
    timelineDate: '2024.2',
    year: 2024,
    category: 'backend',
    tags: ['Node.js', 'Express', 'Redis', 'Docker', 'JWT', 'Jest'],
    githubUrl: 'https://github.com/avendanho',
    image: '/imagens/Experiencias.png',
    wireframeImage: '/imagens/Experiencias.png',
    featured: false
  }
];

export const experiencesData: Experience[] = [
  {
    id: 'lab-software-puc',
    role: {
      pt: 'Desenvolvedor — Laboratório de Projeto de Software',
      en: 'Developer — Software Engineering Lab'
    },
    company: 'PUC Minas — Engenharia de Software',
    companyUrl: 'https://www.pucminas.br',
    period: {
      pt: '2026.1 — Presente',
      en: '2026.1 — Present'
    },
    type: 'academic',
    location: 'Belo Horizonte, MG (Híbrido)',
    description: {
      pt: 'Desenvolvimento prático orientado a sprints em times ágeis, executando todas as fases do ciclo de vida de software: prototipação no Figma, arquitetura, codificação, testes e deploy contínuo.',
      en: 'Hands-on sprint-oriented development in agile squads, executing all lifecycle phases: Figma prototyping, system design, implementation, testing, and continuous deployment.'
    },
    achievements: {
      pt: [
        'Modelagem e validação de wireframes de média fidelidade no Figma para múltiplos módulos',
        'Construção de aplicações Full Stack com Next.js, React, TypeScript e Tailwind CSS',
        'Implementação de padrões de versionamento semântico e code reviews com Git Flow'
      ],
      en: [
        'Designed and validated mid-fidelity Figma wireframes across multi-view application modules',
        'Developed Full Stack web systems with Next.js, React, TypeScript, and Tailwind CSS',
        'Applied semantic versioning standards and collaborative code reviews using Git Flow'
      ]
    },
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Git', 'Agile / Scrum']
  },
  {
    id: 'monitoria-extensao',
    role: {
      pt: 'Participação em Projetos Técnicos & Extensão Universitária',
      en: 'Technical Projects & University Extension Contributor'
    },
    company: 'Diretoria de Extensão — PUC Minas',
    companyUrl: 'https://www.pucminas.br',
    period: {
      pt: '2025.1 — 2025.2',
      en: '2025.1 — 2025.2'
    },
    type: 'extension',
    location: 'Belo Horizonte, MG',
    description: {
      pt: 'Desenvolvimento de ferramentas de apoio à comunidade acadêmica e digitalização de processos para projetos sociais apoiados pela universidade.',
      en: 'Created support tools for the academic community and helped digitalize internal workflows for university-sponsored social initiatives.'
    },
    achievements: {
      pt: [
        'Desenvolvimento de formulários dinâmicos e painéis de dados para controle de atendimentos',
        'Colaboração na documentação técnica e estruturação de requisitos de software',
        'Mentoria introdutória de lógica de programação e Git para novos alunos'
      ],
      en: [
        'Built dynamic form engines and reporting dashboards to track community engagements',
        'Contributed to software documentation and requirements engineering workflows',
        'Mentored incoming freshmen in programming logic and Git essentials'
      ]
    },
    skills: ['JavaScript / TS', 'Node.js', 'PostgreSQL', 'Engenharia de Requisitos', 'Comunicação']
  },
  {
    id: 'hackathons-workshops',
    role: {
      pt: 'Participante em Hackathons & Semanas de Tecnologia',
      en: 'Hackathon & Tech Week Participant'
    },
    company: 'Eventos & Competições de Tecnologia PUC Minas',
    period: {
      pt: '2025 — 2026',
      en: '2025 — 2026'
    },
    type: 'event',
    location: 'Belo Horizonte, MG',
    description: {
      pt: 'Participação em maratonas de programação e workshops focados em desenvolvimento rápido de MVPs, computação em nuvem e inteligência artificial.',
      en: 'Participated in coding hackathons and technical workshops focused on rapid MVP delivery, cloud computing, and AI-assisted workflows.'
    },
    achievements: {
      pt: [
        'Prototipação rápida e apresentação de pitch de soluções para problemas reais em 48h',
        'Integração de APIs RESTful e serviços em nuvem em ambientes de alta pressão'
      ],
      en: [
        'Rapid prototyping and pitching software solutions for real-world scenarios in 48h sprints',
        'Integrated RESTful APIs and cloud backend services under fast-paced team environments'
      ]
    },
    skills: ['Prototipação Rápida', 'REST APIs', 'Pitch', 'Trabalho em Equipe', 'Resolução de Problemas']
  }
];
