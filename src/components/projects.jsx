import projects from '../data/projects';

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">

        {/* Section heading */}
        <div className="projects__header">
          <div>
            <span className="section-label">
              03 — SELECTED WORK
            </span>

            <h2 className="section-title">
              Things I've
              <span> built.</span>
            </h2>
          </div>

          <p className="projects__intro">
            A collection of projects I've built while learning,
            experimenting and solving real-world problems.
          </p>
        </div>

        {/* Projects */}
        <div className="projects__list">
          {projects.map((project) => (
            <article
              className={`project-card project-card--${project.accent} ${
                project.featured ? 'project-card--featured' : ''
              }`}
              key={project.id}
            >

              {/* Project visual */}
              <div className="project-card__visual">
                <div className="project-card__number">
                  {project.number}
                </div>

                <div className="project-card__shape">
                  <span>&lt;/&gt;</span>
                </div>

                <span className="project-card__category">
                  {project.category}
                </span>
              </div>

              {/* Project information */}
              <div className="project-card__body">

                <div className="project-card__heading">
                  <h3>{project.title}</h3>

                  <span className="project-card__arrow">
                    ↗
                  </span>
                </div>

                <p className="project-card__description">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="project-card__features">
                  {project.features.map((feature) => (
                    <li key={feature}>
                      <span>✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="project-card__tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-card__links">

                  {project.github !== '#' ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                      <span>↗</span>
                    </a>
                  ) : (
                    <span className="project-card__link-disabled">
                      GitHub
                    </span>
                  )}

                  {project.live !== '#' ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                      <span>↗</span>
                    </a>
                  ) : (
                    <span className="project-card__link-disabled">
                      Live Demo
                    </span>
                  )}

                </div>
              </div>

            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="projects__footer">
          <p>
            More experiments, ideas and projects are always in progress.
          </p>

          <span>⌁</span>
        </div>

      </div>
    </section>
  );
}

export default Projects;