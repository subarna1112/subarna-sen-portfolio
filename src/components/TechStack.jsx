const skillGroups = [
  {
    number: '01',
    title: 'Frontend',
    description:
      'Building interfaces that feel clean, responsive and interactive.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    accent: 'coral',
  },
  {
    number: '02',
    title: 'Backend',
    description:
      'Working with application logic, server-side development and APIs.',
    skills: ['PHP', 'Java', 'Python'],
    accent: 'violet',
  },
  {
    number: '03',
    title: 'Database',
    description:
      'Working with structured data, queries and database management.',
    skills: ['MySQL', 'SQL', 'DBMS'],
    accent: 'lime',
  },
  {
    number: '04',
    title: 'Programming',
    description:
      'Building strong programming and object-oriented fundamentals.',
    skills: ['C++', 'Java', 'Python', 'OOP'],
    accent: 'pink',
  },
  {
    number: '05',
    title: 'Tools',
    description:
      'The everyday tools I use to develop, manage and ship projects.',
    skills: ['Git', 'GitHub', 'VS Code'],
    accent: 'blue',
  },
  {
    number: '06',
    title: 'Analytics & Design',
    description:
      'Exploring data visualization and creative digital design.',
    skills: ['Excel', 'Tableau', 'Power BI', 'Photoshop', 'Illustrator'],
    accent: 'orange',
  },
];

function TechStack() {
  return (
    <section className="tech-stack section" id="stack">
      <div className="container">
        <div className="tech-stack__header">
          <div>
            <span className="section-label">02 — MY TOOLKIT</span>

            <h2 className="section-title">
              Things I use to
              <span> build stuff.</span>
            </h2>
          </div>

          <p className="tech-stack__intro">
            A growing toolkit built through coursework, projects,
            experimentation and plenty of time in VS Code.
          </p>
        </div>

        <div className="tech-stack__grid">
          {skillGroups.map((group) => (
            <article
              className={`tech-card tech-card--${group.accent}`}
              key={group.title}
            >
              <div className="tech-card__top">
                <span className="tech-card__number">
                  {group.number}
                </span>

                <span className="tech-card__arrow">↗</span>
              </div>

              <div className="tech-card__content">
                <h3>{group.title}</h3>

                <p>{group.description}</p>
              </div>

              <div className="tech-card__skills">
                {group.skills.map((skill) => (
                  <span className="tech-chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="tech-stack__footer">
          <span className="tech-stack__dot" />

          <p>Always learning. Always experimenting.</p>

          <span className="tech-stack__line" />

          <strong>next → full-stack</strong>
        </div>
      </div>
    </section>
  );
}

export default TechStack;