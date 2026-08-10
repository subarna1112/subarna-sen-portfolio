const journey = [


  {
    year: '2023 — 2027',
    type: 'EDUCATION',
    title: 'Bachelor of Computer Applications',
    organization: 'BCA',
    description:
      'Building a strong foundation across programming, databases, web development, software concepts and computer science fundamentals.',
    tags: ['Programming', 'DBMS', 'Web Development'],
  },


    {
    year: '2025',
    type: 'HACKATHON',
    title: 'Smart India Hackathon',
    organization: 'SIH 2025',
    description:
      'Worked on "Where is the Bus", a technology-focused solution developed around a real-world transportation problem.',
    tags: ['Problem Solving', 'Teamwork', 'React'],
  },

  {
    year: '2025 — Present',
    type: 'BUILDING',
    title: 'Personal Projects',
    organization: 'Independent',
    description:
      'Learning by building practical projects across frontend development, databases, web applications and problem-solving.',
    tags: ['React', 'JavaScript', 'SQL', 'Git'],
  },

  {
    year: 'NEXT',
    type: 'GOAL',
    title: 'Software Development Internship',
    organization: 'Looking for the right opportunity',
    description:
      'Ready to contribute to a real development team, learn from experienced developers and turn my skills into production experience.',
    tags: ['Open to Learn', 'Open to Work'],
  },
];

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">

        {/* Header */}
        <div className="experience__header">
          <span className="section-label">
            04 — MY JOURNEY
          </span>

          <h2 className="section-title">
            Still learning.
            <span> Still building.</span>
          </h2>

          <p className="experience__intro">
            My journey so far has been a mix of academics,
            experimentation, teamwork and building things that
            solve actual problems.
          </p>
        </div>

        {/* Timeline */}
        <div className="experience__timeline">

          {journey.map((item, index) => (
            <article
              className="journey-item"
              key={`${item.year}-${item.title}`}
            >

              {/* Timeline side */}
              <div className="journey-item__meta">
                <span className="journey-item__year">
                  {item.year}
                </span>

                <span className="journey-item__number">
                  0{index + 1}
                </span>
              </div>

              {/* Timeline line */}
              <div className="journey-item__line">
                <span />
              </div>

              {/* Content */}
              <div className="journey-item__content">

                <span className="journey-item__type">
                  {item.type}
                </span>

                <h3>{item.title}</h3>

                <h4>{item.organization}</h4>

                <p>{item.description}</p>

                <div className="journey-item__tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;