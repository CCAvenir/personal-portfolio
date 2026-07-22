import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Certificate from "@/components/sections/Certificate";
import BlogPreview from "@/components/sections/BlogPreview";
import Contact from "@/components/sections/Contact";

// ==================================================
// SEO METADATA CONFIGURATION
// ==================================================
export const metadata: Metadata = {
  title: "Christian Avenir | Web Developer",
  description:
    "Portfolio of Christian Avenir, a Bachelor of Science in Information Technology graduate specializing in Web Development, TypeScript, React, and Next.js.",
  keywords: [
    "Christian Avenir",
    "Web Developer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Portfolio",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Christian Avenir" }],
  openGraph: {
    title: "Christian Avenir | Web Developer",
    description:
      "Explore projects, technical skills, certifications, and professional experience of Christian Avenir.",
    url: "https://christianavenir.dev",
    siteName: "Christian Avenir Portfolio",
    images: [
      {
        url: "https://christianavenir.dev/og/portfolio-og.png",
        width: 1200,
        height: 630,
        alt: "Christian Avenir Web Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Avenir | Web Developer",
    description: "Personal portfolio and technical showcase of Christian Avenir.",
    images: ["https://christianavenir.dev/og/portfolio-og.png"],
  },
  alternates: {
    canonical: "https://christianavenir.dev",
  },
};

// ==================================================
// MAIN HOMEPAGE ASSEMBLY
// ==================================================
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificate />
        <BlogPreview />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
