import { SkillCategory } from "@/types/skill";

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
      { name: "Tailwind CSS" },
      { name: "HTML5 & CSS3" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "RESTful APIs" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "npm / yarn / pnpm" },
    ],
  },
  {
    category: "Other Technologies",
    skills: [
      { name: "Responsive Web Design" },
      { name: "Semantic HTML & Accessibility" },
      { name: "Web Performance Optimization" },
    ],
  },
];

export const softSkillsData: string[] = [
  "Problem Solving",
  "Team Collaboration",
  "Adaptability",
  "Continuous Learning",
  "Attention to Detail",
];
