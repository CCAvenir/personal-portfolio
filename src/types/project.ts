export type ProjectStatus = "Completed" | "In Progress" | "Archived";

export interface ProjectLinks {
  github?: string;
  liveDemo?: string;
  caseStudy?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  status: ProjectStatus;
  featured: boolean;
  technologies: string[];
  tags: string[];
  features: string[];
  github?: string;
  liveDemo?: string;
  caseStudy?: string;
}
