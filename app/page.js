import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { site } from "../data/site";

export const metadata = {
  title: "Work",
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-panel">
            <h1>Welcome, I&apos;m {site.firstName}</h1>
            <p className="hero-subheadline">{site.subheadline}</p>
            <p>{site.headline}</p>
            <a className="button button-dark" href={`mailto:${site.email}`}>
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section className="work">
        <div className="section-inner">
          <h2>Featured Work</h2>
          <p className="work-intro">
            {site.skills.map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line.join("  |  ")}
              </span>
            ))}
          </p>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
