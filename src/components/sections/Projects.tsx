import React from "react";
import Link from "next/link";
import Section from "@/components/layout/Section";
import { projectsData } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="space-y-8">
        {projectsData.map((project) => (
          <article key={project.id} className="border p-6 space-y-4">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Project Image Placeholder */}
              <div className="w-full md:w-64 h-40 border shrink-0 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot Placeholder`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      {project.featured && (
                        <span className="border px-2 py-0.5 text-xs font-semibold">
                          Featured
                        </span>
                      )}
                      <span className="border px-2 py-0.5 text-xs font-semibold">
                        Status: {project.status}
                      </span>
                    </div>
                    <p className="text-sm font-medium">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed">{project.description}</p>

                {/* Features List */}
                {project.features && project.features.length > 0 && (
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase">Key Features:</span>
                    <ul className="list-disc list-inside text-xs space-y-0.5">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="border px-2 py-0.5 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap gap-4 pt-2 border-t text-sm font-medium">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border px-3 py-1 text-xs"
                    >
                      GitHub Repo
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border px-3 py-1 text-xs"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.caseStudy && (
                    <Link href={project.caseStudy} className="border px-3 py-1 text-xs">
                      Case Study
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
