export interface Project {
  id: string;
  title: string;
  category: "Featured Web App" | "Healthcare & CMS" | "E-Commerce" | "Service & Booking CMS" | "Academy & Salon" | "Institutional Education";
  filterCategory: "Next.js & React" | "Laravel & PHP";
  liveUrl: string;
  screenshot: string;
  typeBadge: string;
  role: string;
  technologies: string[];
  description: string;
  highlights: string[];
  stats?: { label: string; value: string };
  isFeatured?: boolean;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  current?: boolean;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  accent: string;
  skills: { name: string; highlight?: boolean }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Tanu Kashyap",
    firstName: "Tanu",
    lastName: "Kashyap",
    title: "Full-Stack Developer | Laravel | React.js | Next.js",
    headline: "Building Digital Experiences That Work.",
    subheadline:
      "I’m Tanu Kashyap, a Full-Stack Developer crafting responsive interfaces, dynamic web applications, powerful admin panels, and API-driven digital experiences using Laravel, React.js, and Next.js.",
    location: "Lucknow, Uttar Pradesh, India",
    email: "tanukashyap889@gmail.com",
    phone: "+91-7398213399",
    phoneFormatted: "+91 73982 13399",
    availability: "Available for Full-time & Contract Roles",
    status: "Actively Building & Accepting Projects",
    // Configurable social & professional profiles
    socials: {
      github: "https://github.com/Tanukas1",
      linkedin: "https://www.linkedin.com/in/tanu-kashyap123/",
      email: "mailto:tanukashyap889@gmail.com",
    },
    bio: [
      "I am an enthusiastic and detail-driven Full-Stack Developer with extensive hands-on experience architecting production-grade web applications, dynamic CMS platforms, and scalable administrative dashboards.",
      "My core engineering foundation bridges robust backend architecture in Laravel and PHP with high-performance frontend interfaces in Next.js, React.js, TypeScript, and modern CSS frameworks.",
      "From gathering client requirements and modeling relational databases to delivering fully responsive, SEO-ready web products, I focus on building reliable software that drives real business results.",
    ],
  },

  education: {
    degree: "Master of Computer Applications (MCA)",
    institution: "Lal Bahadur Shastri Institute of Management and Development Studies",
    duration: "Sep 2023 – Jun 2025",
    score: "CGPA: 8.13 / 10",
    highlights: [
      "Specialized in Software Engineering, Database Systems, Web Technologies, and Cloud Applications.",
      "Strong foundation in Object-Oriented Programming, MVC Architecture, and Agile Development methodologies.",
      "Graduated with distinction with an 8.13/10 cumulative grade point average.",
    ],
  },

  experiences: [
    {
      id: "exp-1",
      period: "Feb 2025 – Present",
      role: "Full-Stack Developer",
      company: "Trafico Analytica Pvt. Ltd. (Digital Nawab)",
      location: "Lucknow, Uttar Pradesh",
      type: "Full-time",
      description:
        "Leading full-stack engineering across client projects, delivering custom Laravel CMS platforms, REST APIs, and modern React.js frontends.",
      responsibilities: [
        "Architected and maintained robust Laravel backend systems and bespoke admin dashboards for multiple live commercial websites.",
        "Engineered end-to-end dynamic CRUD modules for website banners, service catalogues, media galleries, blogs, and speciality departments.",
        "Integrated responsive React.js and Next.js client frontends with backend REST APIs, achieving sub-second UI transitions.",
        "Spearheaded technical collaboration directly with clients from initial requirements and database schema design through to live production deployment.",
      ],
      technologies: ["Laravel", "PHP", "MySQL", "React.js", "Next.js", "REST APIs", "Tailwind CSS", "Git"],
      current: true,
    },
    {
      id: "exp-2",
      period: "May 2024 – Jan 2025",
      role: "Full-Stack Developer Intern",
      company: "Trafico Analytica Pvt. Ltd. (Digital Nawab)",
      location: "Lucknow, Uttar Pradesh",
      type: "Internship",
      description:
        "Contributed to frontend and backend feature development, component refactoring, and client website deployments.",
      responsibilities: [
        "Engineered pixel-perfect, accessible responsive user interfaces utilizing React.js, Tailwind CSS, and Bootstrap.",
        "Developed structured e-commerce product catalogs, dynamic category filtering, and interactive service detail pages.",
        "Assisted in building relational database schemas and testing RESTful API endpoints using Postman.",
        "Participated actively in the full software development lifecycle (SDLC), code reviews, and production bug resolutions.",
      ],
      technologies: ["React.js", "Tailwind CSS", "Bootstrap", "JavaScript ES6+", "PHP", "MySQL", "Postman"],
      current: false,
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "knk-awadh",
      title: "KNK Awadh — Admin & Web Platform",
      category: "Featured Web App",
      filterCategory: "Next.js & React",
      liveUrl: "https://knk-awadh-admin.vercel.app/",
      screenshot: "/images/projects/knk-awadh.webp",
      typeBadge: "Production Next.js App",
      role: "Frontend & Full-Stack Architect",
      technologies: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS", "REST APIs"],
      description:
        "A premier Next.js administration portal and modern web platform deployed on Vercel. Features a sleek dark-mode interface, optimized server components, dynamic data handling, and an intuitive dashboard workflow.",
      highlights: [
        "Architected with Next.js App Router for optimal page loading and SEO performance",
        "Streamlined administrative controls with granular action workflows",
        "Tailwind CSS custom design system with high-contrast data visualization",
        "Verified live deployment running on Vercel infrastructure",
      ],
      stats: { label: "Tech Stack", value: "Next.js App Router" },
      isFeatured: true,
    },
    {
      id: "sunrise-hospital",
      title: "Sunrise Hospital",
      category: "Healthcare & CMS",
      filterCategory: "Laravel & PHP",
      liveUrl: "https://sunrisehospitals.in/",
      screenshot: "/images/projects/sunrise-hospital.webp",
      typeBadge: "Enterprise Laravel CMS",
      role: "Full-Stack Developer",
      technologies: ["Laravel", "PHP", "MySQL", "MVC Architecture", "Bootstrap", "REST API"],
      description:
        "Comprehensive healthcare portal equipped with a complete custom Laravel CMS. Allows medical staff to autonomously update emergency banners, department specialities, doctor schedules, health blogs, and media galleries.",
      highlights: [
        "100% editable content system via custom-built Laravel admin panel",
        "Dynamic modules for medical departments, doctor listings, and treatment services",
        "Patient inquiry capture and appointment lead forwarding",
        "Optimized relational MySQL schema with indexed queries for fast page loads",
      ],
      stats: { label: "Architecture", value: "Laravel MVC + MySQL" },
      isFeatured: false,
    },
    {
      id: "parvatias",
      title: "Parvatias — Jewellery E-Commerce",
      category: "E-Commerce",
      filterCategory: "Next.js & React",
      liveUrl: "https://parvatias.com/",
      screenshot: "/images/projects/parvatias.webp",
      typeBadge: "React E-Commerce Store",
      role: "Frontend Developer",
      technologies: ["React.js", "Tailwind CSS", "JavaScript ES6+", "REST APIs", "State Management"],
      description:
        "High-end jewellery e-commerce storefront showcasing exquisite collections. Engineered with modular reusable components, smooth category filtering, interactive product showcases, and responsive mobile shopping.",
      highlights: [
        "Catalogue browsing with multi-tier category navigation and instant filters",
        "Modular React component hierarchy designed for reusability and fast rendering",
        "Optimized image delivery and lazy loading for smooth browsing on mobile networks",
        "Seamless API integration for real-time inventory and pricing updates",
      ],
      stats: { label: "Frontend", value: "React.js + Tailwind" },
      isFeatured: false,
    },
    {
      id: "rthree-salon",
      title: "RThree Salon",
      category: "Service & Booking CMS",
      filterCategory: "Laravel & PHP",
      liveUrl: "https://rthreesalon.digitalnawab.com/",
      screenshot: "/images/projects/rthree-salon.webp",
      typeBadge: "Laravel Service Platform",
      role: "Full-Stack Developer",
      technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript", "Admin Panel"],
      description:
        "Modern salon and lifestyle studio platform featuring service showcase, appointment request workflows, customer record management, and an integrated Laravel administrative dashboard.",
      highlights: [
        "Comprehensive salon service catalog with pricing and duration details",
        "Interactive appointment booking and lead intake interface",
        "Admin control panel for managing stylists, services, and seasonal promotions",
        "Mobile-first responsive styling ensuring flawless booking on smartphones",
      ],
      stats: { label: "Backend", value: "Laravel CMS" },
      isFeatured: false,
    },
    {
      id: "sumeera-salon",
      title: "Sumeera Salon & Academy",
      category: "Academy & Salon",
      filterCategory: "Next.js & React",
      liveUrl: "https://sumeerasalonandacademy.com/",
      screenshot: "/images/projects/sumeera-salon.webp",
      typeBadge: "React Academy Portal",
      role: "Frontend Developer",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "Form Validation", "Responsive Design"],
      description:
        "Educational academy and salon portal presenting certified cosmetology courses, student workshop galleries, service menus, and interactive admission enquiry forms.",
      highlights: [
        "Structured course syllabus pages with curriculum breakdowns and fee details",
        "Dynamic visual galleries displaying student work and salon artistry",
        "Interactive enquiry lead-capture forms with front-end validation",
        "Clean, aesthetic layout tailored to the beauty and wellness industry",
      ],
      stats: { label: "Platform", value: "React.js + Tailwind" },
      isFeatured: false,
    },
    {
      id: "tender-hearts",
      title: "Tender Hearts School",
      category: "Institutional Education",
      filterCategory: "Next.js & React",
      liveUrl: "https://tenderheartsschool.in/",
      screenshot: "/images/projects/tender-hearts.webp",
      typeBadge: "Institutional Web Portal",
      role: "Frontend Developer",
      technologies: ["React.js", "Bootstrap", "JavaScript", "Responsive UI", "Accessibility"],
      description:
        "Official institutional portal for Tender Hearts School delivering critical admissions information, academic calendars, official announcements, extracurricular events, and campus galleries.",
      highlights: [
        "Comprehensive admission procedures, criteria, and digital application forms",
        "Real-time announcements and circular notice boards for parents and students",
        "Interactive photo galleries covering annual events, sports, and achievements",
        "Designed with high contrast, accessibility standards, and universal device support",
      ],
      stats: { label: "Frontend", value: "React.js + Bootstrap" },
      isFeatured: false,
    },
  ] as Project[],

  skills: [
    {
      category: "Frontend Architecture",
      iconName: "Layout",
      description: "Modern component-driven web interfaces with focus on speed, responsiveness, and polished aesthetics.",
      accent: "from-cyan-500 to-blue-600",
      skills: [
        { name: "React.js", highlight: true },
        { name: "Next.js (App Router)", highlight: true },
        { name: "JavaScript ES6+", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "Tailwind CSS", highlight: true },
        { name: "HTML5 & CSS3", highlight: false },
        { name: "Bootstrap", highlight: false },
        { name: "Framer Motion", highlight: false },
      ],
    },
    {
      category: "Backend & Systems",
      iconName: "Server",
      description: "Scalable server architectures, secure APIs, MVC applications, and custom administration engines.",
      accent: "from-violet-500 to-purple-600",
      skills: [
        { name: "Laravel", highlight: true },
        { name: "PHP", highlight: true },
        { name: "RESTful APIs", highlight: true },
        { name: "MVC Architecture", highlight: true },
        { name: "Admin Panel Engineering", highlight: true },
        { name: "Authentication & Authorization", highlight: false },
        { name: "CRUD Engines", highlight: false },
        { name: "JSON APIs", highlight: false },
      ],
    },
    {
      category: "Databases & Data Layer",
      iconName: "Database",
      description: "Relational and document data storage, schema design, index optimization, and data consistency.",
      accent: "from-emerald-500 to-teal-600",
      skills: [
        { name: "MySQL", highlight: true },
        { name: "MongoDB", highlight: true },
        { name: "Relational Schema Design", highlight: true },
        { name: "Database Migrations", highlight: false },
        { name: "Eloquent ORM", highlight: false },
        { name: "Query Optimization", highlight: false },
      ],
    },
    {
      category: "DevOps, Tools & Workflow",
      iconName: "Wrench",
      description: "Productive developer toolchain, version control, API testing, and continuous cloud deployments.",
      accent: "from-amber-500 to-orange-600",
      skills: [
        { name: "Git & GitHub", highlight: true },
        { name: "VS Code", highlight: false },
        { name: "Postman API Client", highlight: true },
        { name: "Vercel", highlight: true },
        { name: "Firebase", highlight: false },
        { name: "Composer", highlight: false },
        { name: "Hostinger / CPanel", highlight: false },
        { name: "NPM / Node.js", highlight: false },
      ],
    },
    {
      category: "Core Engineering Strengths",
      iconName: "ShieldCheck",
      description: "Foundational engineering practices that deliver reliable software and delighted clients.",
      accent: "from-fuchsia-500 to-pink-600",
      skills: [
        { name: "Full-Cycle CRUD Development", highlight: true },
        { name: "Responsive Mobile-First Design", highlight: true },
        { name: "Reusable Component Architecture", highlight: true },
        { name: "Custom CMS Development", highlight: true },
        { name: "Frontend-Backend API Integration", highlight: true },
        { name: "Web Performance Optimization", highlight: true },
        { name: "Client Collaboration & Requirements", highlight: true },
      ],
    },
  ] as SkillCategory[],

  stats: [
    { label: "Production Projects", value: "6+" },
    { label: "Commercial Experience", value: "1+ Yrs" },
    { label: "Academic CGPA", value: "8.13" },
    { label: "Client Satisfaction", value: "100%" },
  ],
};
