import React from "react";

// ==================================================
// HERO COMPONENT
// ==================================================
export default function Hero() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center gap-8 py-8 border-b">
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
          <a href="#resume" className="border px-4 py-2 text-sm font-medium">
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
  );
}
