import Gallery from "../../components/Gallery";
import { gallery } from "../../data/gallery";
import { about, site } from "../../data/site";

export const metadata = {
  title: "About",
};

function Paragraph({ content }) {
  const pieces = Array.isArray(content) ? content : [content];
  return (
    <p>
      {pieces.map((piece, i) =>
        typeof piece === "string" ? (
          piece
        ) : (
          <a key={i} href={piece.href} target="_blank" rel="noreferrer">
            {piece.text}
          </a>
        )
      )}
    </p>
  );
}

export default function AboutPage() {
  return (
    <section className="about">
      <div className="section-inner about-layout">
        <div className="about-photo">
          <img src="/images/portrait.jpg" alt={site.name} />
          <img
            src="/images/portrait-2.jpg"
            alt={`${site.name} at her University of Victoria graduation with her two children`}
          />
        </div>
        <div className="about-copy">
          <h1>{site.name}</h1>
          <h2>{about.tagline}</h2>
          {about.bio.map((paragraph, i) => (
            <Paragraph key={i} content={paragraph} />
          ))}

          <h3>Education</h3>
          <ul>
            {about.education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3>Past Roles</h3>
          <ul>
            {about.pastRoles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="about-actions">
            <a className="button button-dark" href={`mailto:${site.email}`}>
              Email me
            </a>
            <a
              className="button button-dark"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <Gallery photos={gallery} />
    </section>
  );
}
