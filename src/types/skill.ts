export interface Skill {
  name: string;
  category: SkillCategory;
}

export type SkillCategory =
  | "Languages & Markup"
  | "Frameworks & Libraries"
  | "Styling"
  | "Backend & Database"
  | "Tools & Platforms"
  | "Design";