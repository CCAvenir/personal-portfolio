export interface Skill {
  name: string;
  level?: string;
  iconPlaceholder?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}
