export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero">
        <h1>Christian Avenir</h1>
        <p>Full-Stack Developer</p>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          A short paragraph about who you are, your background,
          and what youre passionate about.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML / CSS</li>
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>
        <div>
          <h3>Project Name</h3>
          <p>Short description of the project.</p>
        </div>
        <div>
          <h3>Project Name</h3>
          <p>Short description of the project.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: avenirchristian22@gmail.com</p>
        <p>GitHub: your-github-link</p>
        <p>LinkedIn: your-linkedin-link</p>
      </section>
    </main>
  );
}