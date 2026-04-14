// ============================================================
// Portfolio Data - Single source of truth for all content
// Edit this file to update any text across the portfolio.
// ============================================================

export const siteConfig = {
  name: "Thowfik Juhair",
  title: "Portfolio: Professional Experience & Work",
  description:
    "A professional portfolio showcasing experience, skills, and projects. Built with a newspaper-inspired editorial design.",
  tagline:
    "Software Engineer · React & Next.js · NestJS · Building Scalable Web Applications",
  email: "thowfik.softdev@gmail.com",
  location: "Greater Chennai Area, India",
  availability: "Open to opportunities",
} as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thowfik-juhair",
  },
  { label: "GitHub", href: "https://github.com/thowfik-softdev" },
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
  badge: "Featured Profile",
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
    "I am a software engineer with experience building production web applications across real client projects. I started my career with a ServiceNow internship at AVASOFT, where I got my first exposure to enterprise software development, before moving into software engineering.",
    "At Sanyaa Infotech, I worked on three client projects: UAE BodyFlying Association, Cell Health, and the Sanyaa company website. Across these I built complex role-based systems, multi-dashboard admin panels, e-commerce features, and automated email workflows, working remotely in an agile team.",
    "I currently work at Hala Saudi on a travel-tech platform covering the Middle East. My focus has been on ABAC and RBAC across a multi-portal system, Stripe payment integration with global currency management, financial reconciliation with resolution workflows, and a wallet system tied to live payment outcomes.",
    "I graduated in Computer Science with a Web Development specialization from St. Joseph College of Arts & Science, Cuddalore in 2023. I enjoy working across the full stack and am always looking to take on problems that push what I know.",
  ],
} as const;

// ---- Experience ----

export const experiences = [
  {
    title: "Software Engineer",
    company: "Hala Saudi",
    period: "Sep 2025 - Present",
    location: "Chennai, India · On-site",
    description:
      "Building a large-scale travel-tech platform serving users across the Middle East. Responsible for both frontend and backend development across a multi-portal product (Customer, Agency, and Internal portals) all powered by a single NestJS backend.",
    highlights: [
      "Designed and implemented ABAC and RBAC systems supporting multiple portals with a single backend codebase, enabling fine-grained permission management across all user types",
      "Single-handedly integrated Stripe payments with global currency management, handling the complete booking payment flow end to end",
      "Built a full financial reconciliation pipeline with resolution workflows, ensuring accurate settlement tracking across transactions",
      "Integrated a wallet system within the application that reflects payment outcomes in real time, allowing users to manage balances and apply credits to bookings",
      "Developed dynamic pages for destinations, tours, events, holidays, stays, and an AI trip planner with itinerary generation",
      "Integrated Dropzone for multi-image uploads and Google Maps for location-based navigation within destination pages",
      "Managed GitHub workflows including branch creation, pull request reviews, merge conflict resolution, and CI/CD automation via GitHub Actions",
    ],
  },
  {
    title: "Junior Full Stack Developer",
    company: "Sanyaa Infotech",
    period: "Sep 2024 - Aug 2025",
    location: "Greater Bengaluru Area · Remote",
    description:
      "Worked across three client projects covering the full development lifecycle, from architecture analysis and wireframing through to deployment. Gained deep experience building scalable Next.js applications with complex role systems, admin dashboards, and third-party integrations.",
    highlights: [
      "Built the UAE BodyFlying Association platform with a 5-level role hierarchy (Flyer, Instructor, Coach, Trainer, Examiner, Admin), each with a dedicated dashboard and scoped permissions",
      "Implemented skill progress tracking, a three-tier logbook system, and role upgrade request flows with automated email notifications",
      "Developed a dynamic membership card, searchable member directory, and Redux-powered real-time notification system for skill, currency, and role requests",
      "Built Cell Health, an e-commerce admin platform with product management, a Daily Deals system, and a stock alert module that surfaces low-stock items automatically",
      "Integrated WhatsApp support, image compression with background removal, and session management for Cell Health",
      "Independently developed the Sanyaa Infotech company website (5 pages) with EmailJS for automated consultation form submissions",
    ],
  },
  {
    title: "ServiceNow Developer Intern",
    company: "AVASOFT",
    period: "Mar 2024 - Jun 2024",
    location: "Chennai, India · On-site",
    description:
      "Completed a 4-month internship focused on the ServiceNow platform, gaining hands-on experience with both server-side and client-side development.",
    highlights: [
      "Worked on multiple version and patch upgrades following ServiceNow best practices",
      "Developed custom solutions using Business Rules, Script Includes, and Fix Scripts",
      "Gained practical experience with SLAs, ACLs, Notifications, Events, Service Portals, and Catalog Item creation",
    ],
  },
] as const;

// ---- Education ----

export const education = {
  degree: "Bachelor of Computer Science, Web Development",
  institution: "St. Joseph College of Arts & Science (Autonomous)",
  period: "Jun 2020 - May 2023",
  location: "Cuddalore, India",
  description:
    "Studied computer science fundamentals with a specialization in web development, covering programming languages, HTML, CSS, JavaScript, and database management. Graduated with a solid foundation in both software engineering principles and practical web development skills.",
  highlights: [
    "Specialized in web development alongside core computer science fundamentals",
    "Built foundational knowledge in programming languages including Python and Java",
    "Studied database management, algorithms, and data structures",
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
      "Prisma ORM",
      "Webhooks",
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Google Cloud Platform",
      "Cloud Tasks",
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
      "Redux",
      "Agile / Scrum",
    ],
  },
] as const;

// ---- Projects ----

export const projects = [
  {
    title: "UAE BodyFlying Association",
    description:
      "A full-stack platform for the UAE tunnel flight community built with Next.js. Features a 5-level role hierarchy (Flyer, Instructor, Coach, Trainer, Examiner, and Admin) with role-specific dashboards, dynamic membership cards, skill progress tracking, and a three-tier logbook currency system. Includes automated email notifications for role changes and approvals, Redux global state management, and a searchable member directory.",
    tech: ["Next.js", "Redux", "MongoDB", "Tailwind CSS"],
    year: "2024",
    link: "#",
  },
  {
    title: "Cell Health",
    description:
      "An e-commerce platform with a dual Home and Admin layout. Built product management with search, sort, filter, and pagination, a Daily Deals system, and a stock management module with low-stock alerts that surface items automatically for restocking. Integrated WhatsApp support, image compression with background removal, session management, and mobile-responsive off-canvas components.",
    tech: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
    year: "2024",
    link: "#",
  },
  {
    title: "Sanyaa Infotech Website",
    description:
      "Built the official company website independently from end to end. A five-page site covering Home, About, Services, Portfolio, and Contact, with EmailJS powering automated consultation form submissions and WhatsApp redirection for direct client inquiries.",
    tech: ["Next.js", "Tailwind CSS", "EmailJS"],
    year: "2024",
    link: "#",
  },
  {
    title: "Hala Saudi Travel Platform",
    description:
      "A large-scale travel-tech platform serving users across the Middle East. Designed a multi-portal architecture with Customer, Agency, and Internal portals powered by a single NestJS backend with ABAC and RBAC. Single-handedly integrated Stripe payments with global currency management. Built the complete financial reconciliation pipeline with resolution workflows and a wallet system that reflects payment outcomes in real time. Developed dynamic pages for destinations, tours, events, holidays, stays, and an AI trip planner.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Stripe", "GCP"],
    year: "2024",
    link: "#",
  },
] as const;

// ---- Contact ----

export const contact = {
  message:
    "I am always open to discussing new opportunities, interesting projects, or potential collaborations. Whether you are looking for a software engineer or just want to connect over shared interests in technology, I would love to hear from you.",
  ctaText: "Send an Email",
} as const;
