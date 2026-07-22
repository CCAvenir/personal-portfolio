import React from "react";
import Section from "@/components/layout/Section";
import { experienceData } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="space-y-6">
        {experienceData.map((exp) => (
          <div key={exp.id} className="border p-4 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-2 gap-1">
              <div>
                <h3 className="text-lg font-bold">{exp.position}</h3>
                <p className="text-sm font-semibold">{exp.company}</p>
              </div>
              <div className="text-xs font-medium">
                <span>{exp.duration}</span>
                {exp.location && <span> &bull; {exp.location}</span>}
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase">Responsibilities:</span>
              <ul className="list-disc list-inside text-sm space-y-1">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div className="flex flex-wrap gap-2 pt-2 border-t">
              <span className="text-xs font-semibold">Technologies:</span>
              {exp.technologiesUsed.map((tech) => (
                <span key={tech} className="border px-2 py-0.5 text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
