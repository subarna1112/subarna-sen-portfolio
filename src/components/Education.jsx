const education = [
  {
    year: '2023 — 2027',
    degree: 'BCA',
    field: 'Computer Applications',
    institute: 'Techno International New Town',
    description:
      'Building a strong foundation in programming, web development, databases and computer applications while working on practical projects.',
    accent: 'coral',
  },
  {
    year: '2022 — 2023',
    degree: 'Class XII',
    field: 'Higher Secondary Education',
    institute: 'Holy Garden Model School,Baherampur',
    description:
      'Completed higher secondary education with a foundation for pursuing computer applications and technology.',
    accent: 'violet',
  },
  {
    year: '2020 — 2021',
    degree: 'Class X',
    field: 'Secondary Education',
    institute: 'Techno India Group of Public School, Nabadwip',
    description:
      'Completed secondary education and continued the academic journey toward technology and computer applications.',
    accent: 'lime',
  },
];

const certifications = [
  {
    title: 'Web Programming',
    issuer: 'Certification',
  },
  {
    title: 'Database Systems',
    issuer: 'Certification',
  },
  {
    title: 'Machine Learning',
    issuer: 'Certification',
  },
  {
    title: 'Artificial Intelligence Masterclass',
    issuer: 'Certification',
  },
];

function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">

        {/* Header */}
        <div className="education__header">
          <span className="section-label">
            05 — EDUCATION
          </span>

          <h2 className="section-title">
            Learning is part of
            <span> the journey.</span>
          </h2>

          <p className="education__intro">
            My academic journey gives me the foundation to keep
            experimenting, building and growing as a developer.
          </p>
        </div>

        {/* Education cards */}
        <div className="education__timeline">

          {education.map((item, index) => (
            <article
              className={`education-card education-card--${item.accent}`}
              key={item.degree}
            >
              <div className="education-card__year">
                {item.year}
              </div>

              <div className="education-card__number">
                0{index + 1}
              </div>

              <div className="education-card__content">
                <span className="education-card__label">
                  {index === 0 ? 'CURRENT' : 'COMPLETED'}
                </span>

                <h3>{item.degree}</h3>

                <h4>{item.field}</h4>

                <p className="education-card__institute">
                  {item.institute}
                </p>

                <p>{item.description}</p>
              </div>
            </article>
          ))}

        </div>

        {/* Certifications */}
        <div className="certifications">

          <div className="certifications__header">
            <div>
              <span className="section-label">
                06 — CERTIFICATIONS
              </span>

              <h2 className="section-title">
                Things I've
                <span> learned.</span>
              </h2>
            </div>

            <p>
              Certifications and learning experiences that
              complement my academic journey.
            </p>
          </div>

          <div className="certifications__grid">

            {certifications.map((certificate, index) => (
              <article
                className="certificate-card"
                key={`${certificate.title}-${index}`}
              >
                <div className="certificate-card__top">
                  <span>
                    0{index + 1}
                  </span>

                  <span>↗</span>
                </div>

                <div>
                  <h3>{certificate.title}</h3>

                  <p>{certificate.issuer}</p>
                </div>
              </article>
            ))}

          </div>

          <p className="certifications__note">
            More certification details and credentials can be
            added here as I continue learning.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Education;