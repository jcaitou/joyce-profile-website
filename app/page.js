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
          <h1>Hi, I&apos;m Ryan.</h1>
          <p>
            Urban Planner | Designer | Community Engagement Strategist
            <br />
            <br />
            Co-Executive Director of Urban Minds
          </p>
          <a className="button" href={`mailto:${site.email}`}>
            Get in touch
          </a>
        </div>
      </section>

      <section className="work">
        <div className="section-inner">
          <h2>Featured Work</h2>
          <p className="work-intro">
            Youth Engagement&nbsp; |&nbsp; Community Engagement&nbsp; |&nbsp;
            Public Spaces &amp;&nbsp;Placemaking&nbsp; |&nbsp; Active
            Transportation
            <br />
            Program Design&nbsp; |&nbsp; Workshop Facilitation&nbsp; |&nbsp;
            Public Speaking&nbsp; |&nbsp; Panel Discussions&nbsp; |&nbsp;
            Branding &amp; Design
          </p>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.image} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
