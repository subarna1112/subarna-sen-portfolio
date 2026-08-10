const journey = [
  
    {
    year: '2023 — 2027',
    type: 'EDUCATION',
    title: 'BCA (Honours) — Computer Applications',
    organization: 'Techno International New Town',
    description:
      'Building a strong foundation in programming, databases, web development and computer applications while developing practical projects alongside my academic journey.',
    achievements: [
      'Programming & problem solving',
      'Web development',
      'Database systems',
      'Software development fundamentals',
    ],
    tags: ['BCA', 'Computer Applications', 'Development'],
    accent: 'violet',
  },
  
  {
    year: 'JAN 2025 — NOV 2025',
    type: 'WORK EXPERIENCE',
    title: 'Social Media Content Designer',
    organization: 'Sundoor',
    description:
      'Designed and managed visual content for social media, combining creative thinking with digital content management to support brand communication and promotional campaigns.',
    achievements: [
      'Created social media graphics and promotional content',
      'Developed original designs aligned with campaign goals',
      'Edited visuals using Photoshop and Illustrator',
      'Published and scheduled social media content',
    ],
    tags: ['Photoshop', 'Illustrator', 'Content Design'],
    accent: 'coral',
  },

  {
    year: 'INTERNSHIP',
    type: 'GREEN SKILLS INTERN',
    title: 'Green Skills Intern',
    organization: '1M1B — 1 Million for 1 Billion',
    description:
      'Contributed to a sustainability-focused Waste Management System while gaining practical exposure to website development and collaborative project work.',
    achievements: [
      'Worked on a Waste Management System project',
      'Contributed to sustainability-focused initiatives',
      'Collaborated with a cross-functional team',
      'Developed teamwork and project management skills',
    ],
    tags: ['Web Development', 'Sustainability', 'Teamwork'],
    accent: 'lime',
  },



  {
    year: 'CURRENTLY',
    type: 'BUILDING',
    title: 'Growing as a Developer',
    organization: 'Independent Projects & Learning',
    description:
      'Currently expanding my development skills through React.js, the MERN stack and Machine Learning while building practical projects and strengthening my full-stack foundation.',
    achievements: [
      'Learning React.js',
      'Exploring the MERN stack',
      'Exploring Machine Learning',
      'Building personal projects',
    ],
    tags: ['React.js', 'MERN', 'Machine Learning', 'GitHub'],
    accent: 'blue',
  },
];

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">

        {/* Header */}
        <div className="experience__header">
          <span className="section-label">
            04 — EXPERIENCE & JOURNEY
          </span>

          <h2 className="section-title">
            More than just
            <span> code.</span>
          </h2>

          <p className="experience__intro">
            My journey combines technology, creativity and real-world
            experience — from designing digital content to building
            projects and growing as a developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="experience__timeline">

          {journey.map((item, index) => (
            <article
              className={`journey-item journey-item--${item.accent}`}
              key={`${item.year}-${item.title}`}
            >

              {/* Timeline meta */}
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

                {/* Achievements */}
                <ul className="journey-item__achievements">
                  {item.achievements.map((achievement) => (
                    <li key={achievement}>
                      <span>✦</span>
                      {achievement}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
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