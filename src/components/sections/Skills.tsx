import { skillsData } from "@/data/skills";
import { SkillCategory } from "@/types/skill";
import Section from "@/components/layout/Section";

const categories: SkillCategory[] = [
  "Languages & Markup",
  "Frameworks & Libraries",
  "Styling",
  "Backend & Database",
  "Tools & Platforms",
  "Design",
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-8">
        {categories.map((category) => {
          const items = skillsData.filter((skill) => skill.category === category);
          if (items.length === 0) return null;

          return (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill.name}
                    className="border px-3 py-1.5 text-sm"
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}