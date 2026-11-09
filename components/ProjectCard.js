export default function ProjectCard({ title, href, image }) {
  const external = href.startsWith("http");

  return (
    <a
      className="project-card"
      href={href}
      title={title.replace("\n", " ")}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <img src={image} alt="" />
      <span className="project-card-caption">{title}</span>
    </a>
  );
}
