import React from "react";

// ==================================================
// TYPES & DATA
// ==================================================
interface Certification {
  title: string;
  issuer?: string;
  year: string;
}

interface Experience {
  company: string;
  position: string;
  responsibilities: string[];
}

interface Education {
  degree: string;
  major: string;
  school: string;
  batch: string;
}

const certifications: Certification[] = [
  { title: "Responsive Web Design", issuer: "freeCodeCamp", year: "2024" },
  { title: "Legacy JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", year: "2024" },
  { title: "SEO Certified", year: "2025" },
  { title: "SEO II Certified", year: "2025" },
  { title: "HubSpot SEO Certification", year: "2025" },
  { title: "Cybersecurity Threat Management", year: "2024" },
  { title: "Cybersecurity Essentials", year: "2024" },
  { title: "Introduction to Networks", year: "2023" },
];

const experiences: Experience[] = [
  {
    company: "BB88 Advertising & Digital Solutions Inc.",
    position: "Front-End Developer Trainee",
    responsibilities: [
      "Developed responsive web pages",
      "Assisted in front-end implementation",
      "Collaborated with the development team",
      "Worked with modern web technologies",
    ],
  },
];

const education: Education[] = [
  {
    degree: "Bachelor of Science in Information Technology",
    major: "Web Development",
    school: "Holy Angel University",
    batch: "Batch 2026",
  },
];

// ==================================================
// CERTIFICATE & QUALIFICATIONS COMPONENT
// ==================================================
export default function Certificate() {
  return (
    <div className="space-y-8 border-b pb-8">
      {/* Certifications Section */}
      <section id="certifications" className="space-y-4">
        <h2 className="text-2xl font-bold">Certifications</h2>
        <ul className="list-disc list-inside text-sm space-y-1">
          {certifications.map((cert) => (
            <li key={cert.title}>
              {cert.title}
              {cert.issuer && ` (${cert.issuer}`}
              {cert.issuer ? `, ${cert.year})` : ` (${cert.year})`}
            </li>
          ))}
        </ul>
      </section>

      {/* Experience Section */}
      <section id="experience" className="space-y-4">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.company} className="space-y-2">
              <h3 className="text-lg font-bold">{exp.company}</h3>
              <p className="text-sm font-medium">{exp.position}</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="space-y-4">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.school} className="space-y-1">
              <h3 className="text-lg font-bold">{edu.degree}</h3>
              <p className="text-sm font-medium">Major in {edu.major}</p>
              <p className="text-sm">{edu.school}</p>
              <p className="text-sm italic">{edu.batch}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
