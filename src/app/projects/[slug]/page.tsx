import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { projectsData } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  return {
    title: project ? `${project.title} | Case Study` : "Project Case Study",
    description: project?.description || "Project case study detail page placeholder.",
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12">
        <Container className="space-y-8">
          {project ? (
            <div className="space-y-6">
              <header className="space-y-2 border-b pb-6">
                <div className="flex items-center gap-2 text-xs">
                  <span className="border px-2 py-0.5 font-semibold">
                    Status: {project.status}
                  </span>
                </div>
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <p className="text-base font-medium">{project.subtitle}</p>
              </header>

              <div className="w-full h-64 border flex items-center justify-center">
                <img
                  src={project.image}
                  alt={`${project.title} Main Preview`}
                  className="max-h-full object-contain"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold">Overview</h2>
                <p className="text-base leading-relaxed">{project.description}</p>
              </div>

              {project.features && (
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">Key Features</h2>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-2">
                <h2 className="text-xl font-bold">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="border px-2.5 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border px-4 py-2 text-sm font-medium"
                  >
                    View Source on GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border px-4 py-2 text-sm font-medium"
                  >
                    Launch Live Demo
                  </a>
                )}
              </div>
            </div>
          ) : (
            <div className="border p-8 space-y-4">
              <h1 className="text-2xl font-bold">Project Not Found</h1>
              <p className="text-sm">
                No project matching the slug &quot;{slug}&quot; was found.
              </p>
            </div>
          )}

          <div className="pt-4 border-t">
            <Link href="/#projects" className="border px-4 py-2 text-sm font-medium inline-block">
              &larr; Back to Projects
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
