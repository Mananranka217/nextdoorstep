import PrefillLink from "@/components/ui/PrefillLink";
import { projects } from "@/content/projects";

const art = ["project-media--a", "project-media--b", "project-media--c"];

export default function Projects() {
  return (
    <div className="project-grid">
      {projects.map((p, i) => (
        <article className="project-card" key={`${p.name}-${i}`}>
          <div
            className={`project-media ${art[i % art.length]}`}
            role="img"
            aria-label={`${p.name} image`}
            style={p.image ? { backgroundImage: `url(${p.image})` } : undefined}
          >
            <span className="project-rera">RERA {p.rera}</span>
          </div>
          <div className="project-body">
            <p className="project-builder">{p.builder}</p>
            <h3>{p.name}</h3>
            <p className="project-meta">
              <span>{p.location}</span>
            </p>
            <p className="project-price">
              <span>{p.priceRange}</span>
            </p>
            <PrefillLink className="button primary full" role="Buyer" note={`Site visit request: ${p.name}`}>
              Book Site Visit
            </PrefillLink>
          </div>
        </article>
      ))}
    </div>
  );
}
