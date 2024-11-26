export default function About() {
    return (
      <div className="container mx-auto px-4 py-8">
        {/* About Me Section */}
        <section className="mb-8">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg leading-relaxed">
            Hi, I'm Teppei! I'm a front-end developer with a passion for building
            beautiful and functional web applications. I enjoy turning complex
            ideas into seamless user experiences.
          </p>
        </section>
  
        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>HTML, CSS, and JavaScript</li>
            <li>React.js and Next.js</li>
            <li>Tailwind CSS</li>
            <li>Version Control (Git, GitHub)</li>
            <li>Responsive Design</li>
          </ul>
        </section>
  
        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg">
            Feel free to reach out to me via{" "}
            <a
              href="mailto:teppei.sano@example.com"
              className="text-blue-500 underline"
            >
              email
            </a>{" "}
            or connect with me on{" "}
            <a
              href="https://github.com/teppeisanoambl"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>.
          </p>
        </section>
      </div>
    );
  }