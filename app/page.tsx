import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Projects from "@/src/components/Projects";
import Certificate from "@/src/components/certificate";
import Footer from "@/src/components/footer";

// ==================================================
// SEO METADATA
// ==================================================
export const metadata: Metadata = {
  title: "Christian Avenir | Web Developer",
  description: "Portfolio of Christian Avenir, a BSIT graduate specializing in Web Development, showcasing projects, technical skills, certifications, and professional experience.",
};

// ==================================================
// HOME PAGE LAYOUT
// ==================================================
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-8 max-w-4xl space-y-12">
        <Hero />
        <About />
        <Projects />
        <Certificate />

        {/* Future Blog Preview */}
        {/* Future Experience */}
        {/* Future Timeline */}
        {/* Future Testimonials */}

        <Footer />
      </main>
    </div>
  );
}