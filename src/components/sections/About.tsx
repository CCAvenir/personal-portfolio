import React from "react";
import Section from "@/components/layout/Section";
import { aboutData } from "@/data/about";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="space-y-6">
        {/* Who I Am */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Who I Am</h3>
          {aboutData.whoIAm.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Career Goals */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Career Goals</h3>
          {aboutData.careerGoals.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Quick Facts Grid */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Quick Facts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            {aboutData.quickFacts.map((fact) => (
              <div key={fact.label} className="border p-3 space-y-1">
                <span className="text-xs font-semibold uppercase">{fact.label}</span>
                <p className="text-sm font-medium">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
