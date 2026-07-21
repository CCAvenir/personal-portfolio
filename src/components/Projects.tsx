import React from "react";

// ==================================================
// TYPES & DATA
// ==================================================
interface Project {
  title: string;
  subtitle: string;
  description: string;
  features?: string[];
  tech: string[];
}

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

// ==================================================
// PROJECTS COMPONENT
// ==================================================
export default function Projects() {
  return (
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
  );
}
