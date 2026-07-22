import React from "react";
import Section from "@/components/layout/Section";
import { educationData } from "@/data/education";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {educationData.map((edu) => (
          <div key={edu.id} className="border p-4 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-2 gap-1">
              <div>
                <h3 className="text-lg font-bold">{edu.degree}</h3>
                <p className="text-sm font-semibold">Major in {edu.major}</p>
                <p className="text-xs font-medium">{edu.university}</p>
              </div>
              <div className="text-xs font-medium">{edu.year}</div>
            </div>

            {/* Relevant Coursework */}
            {edu.relevantCoursework && edu.relevantCoursework.length > 0 && (
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase">Relevant Coursework:</span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {edu.relevantCoursework.map((course) => (
                    <span key={course} className="border px-2 py-0.5 text-xs">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
