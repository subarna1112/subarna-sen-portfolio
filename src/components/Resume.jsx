const certifications = [
  'Web Programming',
  'Machine Learning',
  'Machine Learning for Healthcare',
  'Artificial Intelligence Masterclass',
  'Database Systems (SQL & Query Optimization)',
  'Master Photoshop in 30 Days',
];

function Resume() {
  return (
    <section className="resume section" id="resume">
      <div className="container">
        <div className="resume__header">
          <div>
            <span className="section-label">
              07 — RESUME & CERTIFICATIONS
            </span>

            <h2 className="section-title">
              A little proof
              <span> behind the work.</span>
            </h2>
          </div>

          <p>
            My resume brings together my education, experience,
            projects, technical skills, and creative background.
          </p>
        </div>

        <div className="resume__grid">
          <div className="resume-card">
            <div className="resume-card__top">
              <span className="resume-card__label">
                MY RESUME
              </span>

              <span className="resume-card__icon">
                ↗
              </span>
            </div>

            <h3>
              Subarna Sen
            </h3>

            <p>
              BCA (Honours) Final Year Student · Content Designer
              · Aspiring Web Developer
            </p>

            <div className="resume-card__actions">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="button button--secondary"
              >
                View Resume
                <span>↗</span>
              </a>

              <a
                href="/resume.pdf"
                download="Subarna-Sen-CV.pdf"
                className="button button--primary"
              >
                Download CV
                <span>↓</span>
              </a>
            </div>
          </div>

          <div className="certifications">
            <div className="certifications__heading">
              <span className="certifications__label">
                CERTIFICATIONS
              </span>

              <span className="certifications__count">
                {String(certifications.length).padStart(2, '0')}
              </span>
            </div>

            <div className="certifications__list">
              {certifications.map((certificate, index) => (
                <article
                  className="certificate"
                  key={certificate}
                >
                  <span className="certificate__number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3>{certificate}</h3>

                  <span className="certificate__arrow">
                    ↗
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;