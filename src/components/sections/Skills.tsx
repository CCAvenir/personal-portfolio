import React from "react";
import Section from "@/components/layout/Section";
import { skillsData, softSkillsData } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Technical Proficiency">
      <div className="space-y-8">
        {/* Technical Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => (
            <div key={category.category} className="border p-4 space-y-3">
              <h3 className="text-base font-semibold border-b pb-2">
                {category.category}
              </h3>
              <ul className="space-y-1 text-sm">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center space-x-2">
                    <span className="text-xs">&bull;</span>
                    <span>{skill.name}</span>
                    {skill.level && (
                      <span className="text-xs opacity-75">({skill.level})</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="border p-4 space-y-2">
          <h3 className="text-base font-semibold">Soft Skills & Competencies</h3>
          <div className="flex flex-wrap gap-2 pt-1">
            {softSkillsData.map((skill) => (
              <span key={skill} className="border px-2.5 py-1 text-xs font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
