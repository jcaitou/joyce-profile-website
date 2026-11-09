import { site } from "../../data/site";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="about">
      <div className="section-inner about-layout">
        <div className="about-photo">
          <img src="/images/portrait.jpg" alt="Ryan Lo" />
        </div>
        <div className="about-copy">
          <h1>Ryan Lo</h1>
          <h2>Bringing people together to make our cities better.</h2>
          <p>
            My work is about creating positive change for the public good
            through collaboration and creativity.
          </p>
          <p>
            As Co-Executive Director of{" "}
            <a href="https://www.urbanminds.co/" target="_blank" rel="noreferrer">
              Urban Minds
            </a>
            , I work to bridge the gap between youth and decision makers in
            both large-scale projects and grassroots, youth-led initiatives. I
            specialize in developing youth engagement strategies and events for
            municipalities and community partners.
          </p>
          <p>
            I have extensive community engagement experience in planning policy,
            urban development, placemaking, and transportation. My previous
            roles include Senior Public Consultation Coordinator at the{" "}
            <a
              href="https://www.toronto.ca/community-people/get-involved/public-consultations/infrastructure-projects/"
              target="_blank"
              rel="noreferrer"
            >
              City of Toronto
            </a>
            , Planning and Policy Advisor for{" "}
            <a href="https://shelleycarroll.ca/" target="_blank" rel="noreferrer">
              Councillor Shelley Carroll
            </a>
            , and Project Coordinator at{" "}
            <a href="https://www.880cities.org/" target="_blank" rel="noreferrer">
              8 80 Cities
            </a>
            . I teach part-time as a 3rd-year undergraduate studio instructor
            at{" "}
            <a
              href="https://www.torontomu.ca/school-of-urban-and-regional-planning/"
              target="_blank"
              rel="noreferrer"
            >
              Toronto Metropolitan University School of Urban and Regional
              Planning
            </a>
            .
          </p>
          <p>
            I&apos;m always open to new ideas and possibilities. Feel free to
            connect with me via email or LinkedIn.
          </p>
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
    </section>
  );
}
