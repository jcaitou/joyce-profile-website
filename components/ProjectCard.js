export default function ProjectCard({ title, href, image, imageFit }) {
  const newTab = href.startsWith("http") || href.endsWith(".pdf");

  return (
    <a
      className={`project-card${image ? "" : " no-image"}${
        imageFit === "contain" ? " fit-contain" : ""
      }`}
      href={href}
      title={title.replace("\n", " ")}
      {...(newTab ?{ target: "_blank", rel: "noreferrer" } : {})}
    >
      {image && <img src={image} alt="" />}
      <span className="project-card-caption">{title}</span>
    </a>
  );
}
