import type { Metadata } from "next";

// ==================================================
// SEO METADATA
// ==================================================
export const metadata: Metadata = {
  title: "Christian Avenir | Web Developer",
  description: "Portfolio of Christian Avenir, a BSIT graduate specializing in Web Development, showcasing projects, technical skills, certifications, and professional experience.",
};

// ==================================================
// TYPESCRIPT INTERFACES
// ==================================================

interface SkillCategory {
  category: string;
  items: string[];
}

interface Project {
  title: string;
  subtitle: string;
  description: string;
  features?: string[];
  tech: string[];
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

interface Certification {
  title: string;
  issuer?: string;
  year: string;
}

interface ContactDetail {
  label: string;
  value: string;
  link?: string;
}

interface SocialLink {
  platform: string;
  url: string;
}

// ==================================================
// DATA ARRAYS AND OBJECTS
// ==================================================

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

const projects: Project[] = [
  {
    title: "SmartServe",
    subtitle: "QR-Based Table Ordering System",
    description: "A capstone project that streamlines restaurant ordering through QR technology. Customers can scan a QR code to browse the menu, place orders, and manage reservations while staff and administrators monitor orders, inventory, and sales through dedicated dashboards.",
    features: [
      "QR Table Check-in",
      "Menu Browsing",
      "Ordering",
      "Shopping Cart",
      "Reservation Management",
      "Inventory Management",
      "Staff Dashboard",
      "Admin Dashboard",
      "Sales Reports",
      "Analytics Dashboard",
    ],
    tech: ["PHP 8.2", "MySQL", "Bootstrap 5", "JavaScript", "jQuery", "Chart.js"],
  },
  {
    title: "StepUp Street Shoes",
    subtitle: "E-Commerce Website",
    description: "An e-commerce website featuring product browsing, shopping cart functionality, responsive layouts, and a user-friendly shopping experience.",
    tech: ["Vue.js", "Tailwind CSS", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Lou's Pizza",
    subtitle: "WordPress SEO Website",
    description: "Developed and optimized a WordPress website focused on SEO improvements, website customization, and better performance.",
    tech: ["WordPress", "SEO"],
  },
  {
    title: "InventoryHub",
    subtitle: "Inventory Management System",
    description: "An inventory management application using Firebase Firestore with CRUD functionality.",
    tech: ["Firebase", "Firestore"],
  },
  {
    title: "KalingaChain",
    subtitle: "Blockchain Identity Verification Platform",
    description: "A blockchain-based identity verification platform using smart contracts and MetaMask integration.",
    tech: ["React", "Vite", "Tailwind CSS", "Solidity", "MetaMask", "Sepolia"],
  },
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

const contactDetails: ContactDetail[] = [
  { label: "Email", value: "avenirchristian22@gmail.com", link: "mailto:avenirchristian22@gmail.com" },
  { label: "Phone", value: "0966-952-3502", link: "tel:09669523502" },
  { label: "Location", value: "San Fernando, Pampanga, Philippines" },
  { label: "Portfolio", value: "https://tempport-avenir.carrd.co/", link: "https://tempport-avenir.carrd.co/" },
  { label: "Jobs180", value: "https://avenirchristian.jobs180.com/", link: "https://avenirchristian.jobs180.com/" },
];

const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/CCAvenir" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/christian-avenir-043257299/" },
  { platform: "Facebook", url: "https://facebook.com" },
  { platform: "Email", url: "mailto:avenirchristian22@gmail.com" },
];

// ==================================================
// PAGE COMPONENT
// ==================================================
export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl space-y-12">
      {/* HERO SECTION */}
      <section id="hero" className="flex flex-col md:flex-row items-center gap-8 py-8 border-b">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold">Christian Avenir</h1>
          <p className="text-xl font-semibold">Web Developer</p>
          <p className="text-base leading-relaxed">
            Bachelor of Science in Information Technology graduate majoring in Web Development. Passionate about creating responsive, user-friendly, and scalable web applications while continuously learning modern technologies.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#projects" className="border px-4 py-2 text-sm font-medium">
              View Projects
            </a>
            <a href="#contact" className="border px-4 py-2 text-sm font-medium">
              Contact Me
            </a>
            {/* TODO: Add actual link to resume file */}
            <a href="#resume-download" className="border px-4 py-2 text-sm font-medium">
              Download Resume
            </a>
          </div>
        </div>
        <div className="w-48 h-48 border flex items-center justify-center shrink-0">
          <img
            src="https://placehold.co/200"
            alt="Christian Avenir Profile Placeholder"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="space-y-4 border-b pb-8">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="text-base leading-relaxed">
          I am a Bachelor of Science in Information Technology graduate majoring in Web Development. I enjoy solving problems through code and building modern web applications. My experience includes both front-end and back-end development, database management, API integration, and responsive web design. I enjoy learning new technologies and continuously improving my development skills.
        </p>
      </section>

      {/* TECH STACK */}
      <section id="tech-stack" className="space-y-4 border-b pb-8">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="space-y-2">
              <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
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
      </section>

      {/* PROJECTS */}
      <section id="projects" className="space-y-6 border-b pb-8">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.title} className="space-y-2 border-b pb-6 last:border-0 last:pb-0">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm font-medium italic">{project.subtitle}</p>
              <p className="text-sm leading-relaxed">{project.description}</p>

              {project.features && project.features.length > 0 && (
                <div className="space-y-1 pt-2">
                  <span className="text-sm font-semibold">Features:</span>
                  <ul className="list-disc list-inside text-sm space-y-0.5">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-2">
                <span className="text-sm font-semibold">Technologies: </span>
                <span className="text-sm">{project.tech.join(", ")}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="space-y-4 border-b pb-8">
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

      {/* EDUCATION */}
      <section id="education" className="space-y-4 border-b pb-8">
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

      {/* CERTIFICATIONS */}
      <section id="certifications" className="space-y-4 border-b pb-8">
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

      {/* SOFT SKILLS */}
      <section id="soft-skills" className="space-y-4 border-b pb-8">
        <h2 className="text-2xl font-bold">Soft Skills</h2>
        <ul className="list-disc list-inside text-sm space-y-1">
          {softSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="space-y-4 border-b pb-8">
        <h2 className="text-2xl font-bold">Contact</h2>
        <div className="space-y-2">
          {contactDetails.map((detail) => (
            <p key={detail.label} className="text-sm">
              <span className="font-semibold">{detail.label}: </span>
              {detail.link ? (
                <a href={detail.link} className="underline">
                  {detail.value}
                </a>
              ) : (
                detail.value
              )}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 pt-2">
          {socialLinks.map((social) => (
            <a key={social.platform} href={social.url} className="border px-3 py-1.5 text-xs font-medium">
              {social.platform}
            </a>
          ))}
        </div>
      </section>

      {/* OPTIONAL SECTIONS */}
      {/* ==================================================
          TODO: Optional sections below. Left empty with TODO comments as requested.
          ================================================== */}

      {/* TODO: Implement Achievements Section */}
      {/* <section id="achievements" className="space-y-4 border-b pb-8">
        <h2 className="text-2xl font-bold">Achievements</h2>
        <p className="text-sm italic">No achievements listed yet.</p>
      </section> */}

      {/* TODO: Implement Blog Section */}
      {/* <section id="blog" className="space-y-4 border-b pb-8">
        <h2 className="text-2xl font-bold">Blog</h2>
        <p className="text-sm italic">No blog posts published yet.</p>
      </section> */}

      {/* TODO: Implement Testimonials Section */}
      {/* <section id="testimonials" className="space-y-4 border-b pb-8">
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <p className="text-sm italic">No testimonials available yet.</p>
      </section> */}

      {/* TODO: Implement Frequently Asked Questions (FAQ) Section */}
      {/* <section id="faq" className="space-y-4 border-b pb-8">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <p className="text-sm italic">No FAQs available yet.</p>
      </section> */}

      {/* TODO: Implement Resume Download Section */}
      {/* <section id="resume-download" className="space-y-4 pb-8">
        <h2 className="text-2xl font-bold">Resume Download</h2>
        <p className="text-sm italic">Resume download link is coming soon.</p>
      </section> */}
    </main>
  );
}