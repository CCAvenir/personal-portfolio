import React from "react";

// ==================================================
// TYPES & DATA
// ==================================================
interface SkillCategory {
  category: string;
  items: string[];
}

const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Bootstrap",
      "Tailwind CSS",
      "EJS",
      "Pug",
    ],
  },
  {
    category: "Backend",
    items: ["PHP", "Laravel", "Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database",
    items: ["MySQL", "MariaDB", "MongoDB", "Firebase Firestore"],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "XAMPP",
      "Vite",
      "Webpack",
      "Babel",
      "Chart.js",
      "SweetAlert2",
      "QRCode.js",
    ],
  },
  {
    category: "Other Skills",
    items: [
      "Firebase",
      "WordPress",
      "SEO",
      "Linux",
      "Cisco Networking",
      "API Integration",
    ],
  },
];

const softSkills: string[] = [
  "Analytical Thinking",
  "Problem Solving",
  "Team Collaboration",
  "Attention to Detail",
  "Creativity",
  "Adaptability",
  "Time Management",
  "Communication",
];

// ==================================================
// ABOUT COMPONENT
// ==================================================
export default function About() {
  return (
    <section id="about" className="space-y-8 border-b pb-8">
      {/* About Summary */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="text-base leading-relaxed">
          I am a Bachelor of Science in Information Technology graduate majoring in Web Development. I enjoy solving problems through code and building modern web applications. My experience includes both front-end and back-end development, database management, API integration, and responsive web design. I enjoy learning new technologies and continuously improving my development skills.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Tech Stack</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="space-y-2">
              <h4 className="text-lg font-semibold">{skillGroup.category}</h4>
              <ul className="list-disc list-inside space-y-1">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Soft Skills</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          {softSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
