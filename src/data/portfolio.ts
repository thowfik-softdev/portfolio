// ============================================================
// Portfolio Data — Single source of truth for all content
// Edit this file to update any text across the portfolio.
// ============================================================

export const siteConfig = {
  name: "Thowfik Juhair",
  title: "Portfolio — Professional Experience & Work",
  description:
    "A professional portfolio showcasing experience, skills, and projects. Built with a newspaper-inspired editorial design.",
  tagline:
    "Software Engineer · React & Next.js · NestJS · Building Scalable Web Applications",
  email: "thowfikjuhair@gmail.com",
  location: "Greater Chennai Area, India",
  availability: "Open to opportunities",
  projectsDelivered: "15+",
} as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thowfik-juhair",
  },
  { label: "GitHub", href: "https://github.com" },
  { label: "Twitter / X", href: "https://twitter.com" },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

// ---- Hero ----

export const hero = {
  badge: "✦ Featured Profile",
  headline: ["Engineering", "Scalable Web"],
  headlineItalic: "Applications",
  summary:
    "A full-stack software engineer specializing in React, Next.js, and NestJS, with a passion for building production-grade applications that scale. Currently architecting and developing critical systems for a leading travel-tech platform, from payment integrations and financial reconciliation to role-based access control systems.",
  sidebar: {
    position: "Software Engineer",
    company: "Hala Saudi",
  },
} as const;

// ---- About ----

export const about = {
  paragraphs: [
    "I am a full-stack software engineer with hands-on experience building scalable, production-ready web applications. My journey into software development started with a genuine curiosity for how technology shapes everyday experiences — and that drive continues to fuel my work today.",
    "Currently working at Hala Saudi, I contribute to a large-scale travel-tech platform where I architect and develop critical systems spanning payment processing with Stripe, automated financial reconciliation, multi-currency settlement calculations, and enterprise-grade role-based access control. I work across the full stack — from building responsive, high-performance frontends with React and Next.js to designing robust backend APIs with NestJS and PostgreSQL.",
    "I believe the best software is built at the intersection of clean architecture and pragmatic engineering. My approach emphasizes maintainable code, scalable system design, and thoughtful user experiences. Whether it is optimizing a complex reconciliation pipeline or crafting an intuitive admin dashboard, I focus on delivering solutions that are both technically excellent and genuinely useful.",
    "I graduated from St. Joseph College of Arts & Science in Cuddalore, where I built the foundation for my career in computer science. I am always looking to grow — whether through open-source contributions, connecting with fellow developers, or tackling new challenges that push the boundaries of what I can build.",
  ],
} as const;

// ---- Experience ----

export const experiences = [
  {
    title: "Software Engineer",
    company: "Hala Saudi",
    period: "2024 — Present",
    location: "Remote · Greater Chennai Area",
    description:
      "Spearheading the development of a large-scale travel-tech platform serving thousands of users across the Middle East. Working across the entire product stack — from building dynamic, responsive frontends to architecting robust backend services — delivering production-grade features that directly impact revenue and operational efficiency.",
    highlights: [
      "Architected and implemented end-to-end Stripe payment integration including webhook handling, real-time payment status tracking, and secure transaction processing for the entire booking flow",
      "Designed and built an automated financial reconciliation system that processes daily settlement data, matches transactions across multiple payment providers, and generates comprehensive audit reports — reducing manual reconciliation effort by 90%",
      "Engineered multi-currency settlement calculations with real-time AED-to-SAR exchange rate conversion using Stripe's financial APIs, ensuring accurate cross-border revenue reporting",
      "Built a comprehensive Role-Based Access Control (RBAC) system with a three-collection architecture (Module, Sidebar, AccessMatrix) supporting multiple organizational realms — Customer, Internal, and Agency — enabling fine-grained permission management across the platform",
      "Developed automated wallet adjustment systems that calculate and apply financial corrections based on reconciliation resolutions, eliminating manual intervention and reducing processing errors",
      "Implemented agency management module with full CRUD operations, enabling travel agency owners to manage profiles, configure settings, and oversee bookings through a dedicated admin interface",
      "Leveraged Google Cloud Tasks for asynchronous processing of reconciliation jobs, ensuring reliable execution of complex financial workflows at scale",
      "Built responsive admin dashboards and timeline views for monitoring reconciliation statuses, transaction histories, and settlement breakdowns across multiple payment providers",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Freelance & Projects",
    period: "2022 — 2024",
    location: "Chennai, India",
    description:
      "Built modern web applications for clients across diverse industries, developing expertise in the React/Next.js ecosystem and backend development with Node.js. Focused on delivering clean, performant applications with scalable architectures.",
    highlights: [
      "Developed multiple client-facing applications using React and Next.js with server-side rendering and optimized performance scores",
      "Designed and implemented RESTful APIs with Express.js and NestJS, following clean architecture principles",
      "Integrated MongoDB and PostgreSQL databases with Prisma ORM for type-safe data access and migrations",
      "Implemented authentication flows, payment integrations, and real-time features across projects",
      "Delivered responsive, mobile-first designs using Tailwind CSS with pixel-perfect UI implementations",
    ],
  },
] as const;

// ---- Education ----

export const education = {
  degree: "Bachelor of Computer Science",
  institution: "St. Joseph College of Arts & Science (Autonomous)",
  period: "2019 — 2022",
  location: "Cuddalore, India",
  description:
    "Studied computer science fundamentals including data structures, algorithms, database management, and software engineering. Built a strong academic foundation while actively pursuing web development through self-directed learning and personal projects.",
  highlights: [
    "Developed web applications as academic projects using modern JavaScript frameworks",
    "Built strong foundations in data structures, algorithms, and database design",
    "Actively participated in coding workshops and hackathons",
  ],
} as const;

// ---- Skills ----

export const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Prisma ORM",
      "Webhooks",
      "Microservices",
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Google Cloud Platform",
      "Cloud Tasks",
      "Docker",
      "CI/CD",
      "Git",
    ],
  },
  {
    category: "Integrations & Practices",
    skills: [
      "Stripe Payments",
      "Payment Reconciliation",
      "RBAC Systems",
      "Agile / Scrum",
      "System Design",
      "Code Review",
      "Performance Optimization",
      "API Design",
    ],
  },
] as const;

// ---- Projects ----

export const projects = [
  {
    title: "Travel Booking Platform",
    description:
      "A comprehensive travel-tech platform enabling users to discover, book, and manage travel experiences across the Middle East. Features end-to-end payment processing, real-time booking management, and multi-role admin dashboards for agencies and internal teams.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Stripe", "GCP"],
    year: "2024",
    link: "#",
  },
  {
    title: "Financial Reconciliation Engine",
    description:
      "An automated system that reconciles payment settlements across multiple providers, performs multi-currency conversions, generates audit-ready reports, and handles wallet adjustments — processing thousands of transactions with precision.",
    tech: ["NestJS", "Prisma", "Cloud Tasks", "Stripe API", "PostgreSQL"],
    year: "2024",
    link: "#",
  },
  {
    title: "Enterprise RBAC System",
    description:
      "A three-collection role-based access control architecture supporting Customer, Internal, and Agency realms. Includes module capability registry, dynamic sidebar navigation, and granular permission matrices for secure multi-tenant access.",
    tech: ["NestJS", "React", "PostgreSQL", "Prisma", "TypeScript"],
    year: "2024",
    link: "#",
  },
  {
    title: "Agency Management Portal",
    description:
      "A dedicated admin interface for travel agency owners to manage their profiles, configure business settings, oversee bookings, and track commissions. Built with responsive design and real-time data updates.",
    tech: ["React", "Next.js", "NestJS", "Tailwind CSS", "REST API"],
    year: "2024",
    link: "#",
  },
] as const;

// ---- Contact ----

export const contact = {
  message:
    "I am always open to discussing new opportunities, interesting projects, or potential collaborations. Whether you are looking for a full-stack developer or just want to connect over shared interests in technology, I would love to hear from you.",
  ctaText: "Send an Email →",
} as const;
