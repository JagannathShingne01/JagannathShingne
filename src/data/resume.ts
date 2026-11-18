export interface ExperienceHighlight {
  id: string;
  category: 'architecture' | 'ai-async' | 'devops-testing';
  title: string;
  detail: string;
  metric?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  kind: 'Distributed Systems' | 'Full-Stack Web';
  tagline: string;
  stack: string[];
  githubUrl: string;
  highlights: string[];
  architectureFlow: {
    step: string;
    component: string;
    detail: string;
  }[];
  diagramType: 'webrtc' | 'coursify' | 'searchx';
}

export interface SkillGroup {
  id: string;
  category: string;
  cluster: 'frontend' | 'backend' | 'data-messaging' | 'cloud-ai';
  items: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  platform: string;
  topics: string[];
  summary: string;
  url: string;
}

export const RESUME_PDF_URL = '/assets/aistudio/JagannathSDE1.pdf';

export const PROFILE = {
  name: 'Jagannath Shingne',
  role: 'Full Stack Developer',
  location: 'Mumbai, Maharashtra',
  phone: '+91 8108516293',
  email: 'jagannathshingne01@gmail.com',
  portfolio: 'jagannath.dev',
  summary:
    'Full Stack Developer delivering measurable performance gains in production systems — including 70–80% latency reductions and 25%+ API throughput improvements — through scalable microservices, real-time architectures, and AI-driven automation. Experienced leading feature design end-to-end, from system architecture through deployment.',
  socials: [
    {
      id: 'github',
      label: 'GitHub',
      handle: 'JagannathShingne01',
      url: 'https://github.com/JagannathShingne01',
      description: 'Microservices, real-time WebRTC apps, and full-stack repositories.',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      handle: 'Jagannath-Shingne',
      url: 'https://www.linkedin.com/in/jagannath-shingne-201aba236',
      description: 'Professional experience, production milestones, and engineering updates.',
    },
    {
      id: 'leetcode',
      label: 'LeetCode',
      handle: 'jagannath_21',
      url: 'https://leetcode.com/jagannath_21',
      description: 'Data structures, algorithms, and problem-solving practice.',
    },
  ],
};

export const HERO_METRICS = [
  {
    value: '70–80%',
    label: 'API Latency Reduction',
    context: 'Async RabbitMQ video processing pipeline',
  },
  {
    value: '25%+',
    label: 'Faster API Responses',
    context: 'Node.js & Express.js microservices split',
  },
  {
    value: '30%',
    label: 'Lower Server Load',
    context: 'Fault-tolerant distributed service design',
  },
  {
    value: 'End-to-End',
    label: 'Production Ownership',
    context: 'Architecture, LangGraph AI, CI/CD & cloud ops',
  },
];

export const ARCHITECTURE_NODES = [
  {
    id: 'client',
    layer: '01. Presentation Layer',
    title: 'Next.js & React.js Frontend',
    stack: 'Next.js · React.js · TypeScript · Tailwind CSS',
    summary:
      'Responsive, cross-device web interfaces built with modular React components, Tailwind CSS, and shadcn/ui primitives.',
  },
  {
    id: 'gateway',
    layer: '02. Services & Security',
    title: 'Microservices, SSO & CASL RBAC',
    stack: 'Node.js · Express.js · REST APIs · JWT · CASL',
    summary:
      'Decoupled Node.js microservices delivering 25% faster API responses, unified SSO across services, and fine-grained CASL permission control.',
  },
  {
    id: 'async-ai',
    layer: '03. Agentic AI & Async Queue',
    title: 'LangGraph Agents & RabbitMQ',
    stack: 'LangChain · LangGraph · OpenAI API · RabbitMQ',
    summary:
      'Stateful autonomous interview workflows paired with asynchronous RabbitMQ video pipelines that cut API response latency by 70–80%.',
  },
  {
    id: 'data-ops',
    layer: '04. Persistence & Cloud Ops',
    title: 'MongoDB, S3 Backups & CI/CD',
    stack: 'MongoDB · Redis · Docker · GitHub Actions · DigitalOcean',
    summary:
      'Containerized deployments on DigitalOcean with Jest API test suites and automated mongodump-to-S3 disaster recovery.',
  },
];

export const EXPERIENCE = {
  company: 'Kairosoft AI Solutions',
  role: 'MERN Stack Developer',
  period: 'Dec 2024 – Present',
  location: 'Mumbai, Maharashtra',
  flagship: 'Volkai HR — Agentic AI Platform for Interview Automation',
  highlights: [
    {
      id: 'exp-volkai',
      category: 'architecture',
      title: 'Volkai HR Platform Design',
      detail:
        'Designed and developed Volkai HR, an agentic AI platform for interview automation, improving recruitment efficiency.',
    },
    {
      id: 'exp-sysdesign',
      category: 'architecture',
      title: 'Fault-Tolerant System Design',
      detail:
        'Led system design for a high-performance, fault-tolerant architecture and integrated third-party APIs to enhance platform capabilities.',
    },
    {
      id: 'exp-microservices',
      category: 'architecture',
      title: 'Microservices Migration',
      detail:
        'Implemented a microservices architecture using Node.js and Express.js, improving API response time by 25% and reducing server load by 30%.',
      metric: '25% faster API · 30% less load',
    },
    {
      id: 'exp-auth',
      category: 'architecture',
      title: 'Unified SSO & CASL RBAC',
      detail:
        'Designed and developed scalable RESTful APIs with secure authentication — SSO for unified multi-service access and CASL-based RBAC for fine-grained permission control.',
    },
    {
      id: 'exp-langgraph',
      category: 'ai-async',
      title: 'Autonomous LangGraph AI Agents',
      detail:
        'Built an AI agent using LangChain and LangGraph to execute structured workflows, manage state, and handle tasks autonomously.',
    },
    {
      id: 'exp-rabbitmq',
      category: 'ai-async',
      title: 'Asynchronous Video Pipeline',
      detail:
        'Converted synchronous video processing into a RabbitMQ-based asynchronous pipeline, reducing API response time by 70–80% and enabling scalable background processing.',
      metric: '70–80% latency reduction',
    },
    {
      id: 'exp-payments-cron',
      category: 'ai-async',
      title: 'Payments & Automated Operations',
      detail:
        'Implemented secure payment integration and automated backend operations using cron jobs to improve system reliability and efficiency.',
    },
    {
      id: 'exp-frontend',
      category: 'architecture',
      title: 'Next.js & React.js Frontend',
      detail:
        'Developed a responsive frontend using Next.js, React.js, and Tailwind CSS, ensuring optimal performance and cross-device compatibility.',
    },
    {
      id: 'exp-docker-cicd',
      category: 'devops-testing',
      title: 'Docker & GitHub Actions CI/CD',
      detail:
        'Used Docker for containerization and implemented GitHub Actions workflows for automated CI/CD.',
    },
    {
      id: 'exp-digitalocean',
      category: 'devops-testing',
      title: 'DigitalOcean Production Operations',
      detail:
        'Deployed and managed applications on DigitalOcean Droplets and App Platform, overseeing the product lifecycle from planning to production release.',
    },
    {
      id: 'exp-backup',
      category: 'devops-testing',
      title: 'Automated MongoDB Disaster Recovery',
      detail:
        'Built a production-ready, automated MongoDB backup and restore system using mongodump, scheduled jobs, and S3, with metadata tracking and safe cleanup for disaster recovery.',
    },
    {
      id: 'exp-jest',
      category: 'devops-testing',
      title: 'API Unit & Integration Testing',
      detail:
        'Wrote unit and integration tests for APIs using Jest to ensure code reliability and maintainability.',
    },
  ] as ExperienceHighlight[],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'searchx',
    title: 'SearchX',
    kind: 'Distributed Systems',
    tagline:
      'Production-ready, low-latency autocomplete search engine built for millions of products using Elasticsearch, Redis caching, RabbitMQ, and PostgreSQL.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'RabbitMQ', 'Elasticsearch', 'Redis'],
    githubUrl: 'https://github.com/JagannathShingne01/searchX',
    diagramType: 'searchx',
    highlights: [
      'Decoupled product mutations from search reads using PostgreSQL as the source of truth and RabbitMQ event publishing.',
      'Built asynchronous background workers to consume product events and synchronize the Elasticsearch index reliably.',
      'Engineered an autocomplete Search API layered with Redis caching to serve high-throughput queries at minimal latency.',
      'Connected a responsive Next.js search interface for instant prefix matching and real-time product discovery.',
    ],
    architectureFlow: [
      {
        step: '01',
        component: 'Product CRUD & PostgreSQL',
        detail: 'Persists authoritative product records in PostgreSQL and publishes mutation events to the message broker.',
      },
      {
        step: '02',
        component: 'RabbitMQ & Background Worker',
        detail: 'Queues product update events asynchronously so background workers keep search indexing non-blocking.',
      },
      {
        step: '03',
        component: 'Elasticsearch Index',
        detail: 'Dedicated full-text and autocomplete index synchronized by background workers for fast multi-million record lookup.',
      },
      {
        step: '04',
        component: 'Redis Cache & Next.js UI',
        detail: 'Search API checks Redis cache before querying Elasticsearch and streams instant suggestions to the Next.js frontend.',
      },
    ],
  },
  {
    id: 'realtime-meeting',
    title: 'Real-Time Meeting Platform',
    kind: 'Distributed Systems',
    tagline:
      'Distributed WebRTC video conferencing with WebSocket messaging and synchronized collaborative whiteboarding.',
    stack: ['Node.js', 'Express.js', 'WebSockets', 'WebRTC', 'Microservices', 'Docker'],
    githubUrl: 'https://github.com/JagannathShingne01/meet-with-js',
    diagramType: 'webrtc',
    highlights: [
      'Built a scalable application using a microservices-based architecture, enabling independent services.',
      'Implemented WebRTC-based video and audio calling to support real-time, low-latency peer-to-peer communication.',
      'Developed real-time chat functionality using WebSockets for instant message delivery.',
      'Designed and integrated a collaborative whiteboard feature with real-time drawing and synchronization across participants.',
      'Implemented secure authentication and room management to handle multi-user meetings efficiently.',
    ],
    architectureFlow: [
      {
        step: '01',
        component: 'Auth & Room Service',
        detail: 'Independent microservice managing session tokens, room creation, and participant access control.',
      },
      {
        step: '02',
        component: 'WebSocket Signaling & Chat',
        detail: 'Handles SDP offer/answer exchange, ICE candidate relay, and instant room chat broadcast.',
      },
      {
        step: '03',
        component: 'WebRTC Peer Mesh',
        detail: 'Low-latency peer-to-peer audio and video streams negotiated directly between room participants.',
      },
      {
        step: '04',
        component: 'Synchronized Whiteboard',
        detail: 'Real-time canvas stroke events streamed and reconciled across connected clients inside Dockerized services.',
      },
    ],
  },
  {
    id: 'coursify',
    title: 'Coursify',
    kind: 'Full-Stack Web',
    tagline:
      'Full-stack course management and video learning platform with Razorpay checkout, JWT RBAC, and Cloudinary media.',
    stack: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'MongoDB', 'Razorpay', 'Cloudinary', 'JWT'],
    githubUrl: 'https://github.com/JagannathShingne01/LMS_Client',
    diagramType: 'coursify',
    highlights: [
      'Developed a system for admins to manage lectures and users to watch them via an intuitive, responsive frontend interface.',
      'Implemented secure payment functionality using Razorpay, enabling seamless transactions.',
      'Ensured robust user authentication and authorization using JWT.',
      'Integrated Cloudinary for efficient media storage and management.',
    ],
    architectureFlow: [
      {
        step: '01',
        component: 'Responsive React Portal',
        detail: 'Tailwind-styled student viewing dashboard and admin lecture curriculum management console.',
      },
      {
        step: '02',
        component: 'JWT Auth Middleware',
        detail: 'Stateless token verification separating learner playback permissions from admin content routes.',
      },
      {
        step: '03',
        component: 'Razorpay Payment Verification',
        detail: 'Order creation and cryptographic signature verification unlocking enrolled course modules in MongoDB.',
      },
      {
        step: '04',
        component: 'Cloudinary Media Pipeline',
        detail: 'Optimized upload, transcoding, and CDN-backed streaming delivery for lecture video assets.',
      },
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'languages',
    category: 'Languages',
    cluster: 'backend',
    items: ['TypeScript', 'JavaScript', 'Java', 'SQL'],
  },
  {
    id: 'frontend',
    category: 'Frontend',
    cluster: 'frontend',
    items: ['HTML', 'Tailwind CSS', 'React.js', 'Next.js', 'shadcn/ui'],
  },
  {
    id: 'backend',
    category: 'Backend',
    cluster: 'backend',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT', 'RBAC', 'Elasticsearch', 'Microservices'],
  },
  {
    id: 'databases',
    category: 'Databases',
    cluster: 'data-messaging',
    items: ['MongoDB', 'MySQL', 'Redis'],
  },
  {
    id: 'messaging',
    category: 'Messaging & Real-Time',
    cluster: 'data-messaging',
    items: ['RabbitMQ', 'WebSockets', 'WebRTC'],
  },
  {
    id: 'cloud',
    category: 'Cloud & DevOps',
    cluster: 'cloud-ai',
    items: ['Docker', 'CI/CD', 'GitHub Actions', 'DigitalOcean', 'AWS', 'S3'],
  },
  {
    id: 'testing',
    category: 'Testing & Tools',
    cluster: 'cloud-ai',
    items: ['Jest', 'Git', 'GitHub', 'n8n'],
  },
  {
    id: 'ai',
    category: 'AI & Automation',
    cluster: 'cloud-ai',
    items: ['LangChain', 'LangGraph', 'OpenAI API'],
  },
  {
    id: 'concepts',
    category: 'Core Concepts',
    cluster: 'backend',
    items: ['Data Structures & Algorithms', 'System Design', 'SDLC'],
  },
];

export const EDUCATION = {
  university: 'Mumbai University',
  degree: 'Bachelor of Science in Information Technology',
  year: '2023',
  gpa: '7.5 / 10',
  location: 'Dombivli, Maharashtra',
  highlight:
    'Learned and applied database design, backend development, and API integration in academic and personal projects.',
};

export const COURSES = [
  {
    id: 'pw-skills',
    title: 'Full Stack Developer',
    issuer: 'PW Skills Certificate',
    focus: 'End-to-end MERN stack architecture, REST APIs, database modeling, and responsive UI engineering.',
    url: 'https://drive.google.com/file/d/1_0RUMsu7MvLIKgnOexHmcL22yDyahX2l/view',
  },
  {
    id: 'mettl',
    title: 'Java Full Stack Development',
    issuer: 'Mettl Certificate',
    focus: 'Object-oriented programming in Java, SQL persistence, backend service design, and full-stack delivery.',
    url: 'https://drive.google.com/file/d/12X7sM5NF7wGKZQvBwFhOag1Y3T_Z26rh/view',
  },
];

export const TECH_BLOGS: BlogPost[] = [
  {
    id: 'rabbitmq-video-pipeline',
    title: 'From Synchronous to Scalable: Redesigning Video Processing with RabbitMQ',
    platform: 'DEV Community',
    topics: ['RabbitMQ', 'Node.js', 'FFmpeg', 'AWS S3', 'Async Architecture'],
    summary:
      'Architectural deep dive into decoupling blocking S3 uploads, FFmpeg transcoding, and subtitle generation into an asynchronous RabbitMQ worker pipeline to cut API latency by 70–80%.',
    url: 'https://dev.to/jagannathshingne01/from-synchronous-to-scalable-redesigning-video-processing-with-rabbitmq-3dbb',
  },
  {
    id: 'automated-mongodb-backups',
    title: 'Automated MongoDB Backups: Production-Ready Guide',
    platform: 'DEV Community',
    topics: ['MongoDB', 'mongodump', 'AWS S3', 'Cron Jobs', 'Disaster Recovery'],
    summary:
      'Step-by-step guide to designing a fault-tolerant MongoDB backup and restore system using mongodump, scheduled cron jobs, S3 object storage, metadata tracking, and safe retention cleanup.',
    url: 'https://dev.to/jagannathshingne01/automated-mongodb-backups-production-ready-guide-2308',
  },
];
