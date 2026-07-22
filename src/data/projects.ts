import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "proj-1",
    slug: "personal-portfolio",
    title: "Personal Portfolio Architecture",
    subtitle: "Scalable Next.js & TypeScript Portfolio Template",
    description:
      "A modular, production-ready portfolio template built with Next.js App Router, TypeScript, and clean architecture pattern separating data from presentational components.",
    image: "https://placehold.co/600x400?text=Portfolio+Project",
    status: "Completed",
    featured: true,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    tags: ["Frontend", "Architecture", "Web Development"],
    features: [
      "Modular data and domain type separation",
      "Semantic HTML5 structure and accessibility compliance",
      "Dynamic project routing and blog preview integration",
      "Clean component layout wrapper pattern",
    ],
    github: "https://github.com/christian-avenir/personal-portfolio",
    liveDemo: "https://example.com/demo-portfolio",
    caseStudy: "/projects/personal-portfolio",
  },
  {
    id: "proj-2",
    slug: "web-application-dashboard",
    title: "Web Application Dashboard",
    subtitle: "Interactive Admin Dashboard",
    description:
      "A comprehensive analytics and management dashboard designed for web platforms featuring data visualization placeholders and responsive layouts.",
    image: "https://placehold.co/600x400?text=Dashboard+Project",
    status: "In Progress",
    featured: true,
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    tags: ["Dashboard", "UI Architecture"],
    features: [
      "Real-time state simulation",
      "Responsive grid layout system",
      "Filterable data views and tabular structures",
    ],
    github: "https://github.com/christian-avenir/web-dashboard",
    liveDemo: "https://example.com/demo-dashboard",
    caseStudy: "/projects/web-application-dashboard",
  },
];
