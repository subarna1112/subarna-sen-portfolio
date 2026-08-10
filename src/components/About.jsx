function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__header">
          <span className="section-label">01 — ABOUT ME</span>

          <h2 className="section-title">
            More than just
            <span> code.</span>
          </h2>
        </div>

        <div className="about__grid">
          {/* Main introduction */}
          <div className="about__main">
            <p className="about__lead">
              I'm Subarna — a BCA student and aspiring software &
              web developer who loves turning ideas into things
              people can actually use.
            </p>

            <p>
              My journey started with curiosity about how websites
              work and gradually turned into a genuine interest in
              building them. From frontend interfaces to databases
              and backend logic, I enjoy exploring how different
              pieces of technology come together.
            </p>

            <p>
              Right now, I'm focused on strengthening my development
              skills by building real projects, experimenting with
              new technologies, and learning something new every time
              I open my editor.
            </p>
          </div>

          {/* Identity cards */}
          <div className="about__cards">
            <article className="about__card about__card--accent">
              <span className="about__card-icon">⌘</span>

              <div>
                <span className="about__card-label">
                  CURRENTLY
                </span>

                <h3>Building & learning</h3>

                <p>
                  Exploring React, full-stack development and
                  better ways to turn ideas into products.
                </p>
              </div>
            </article>

            <article className="about__card">
              <span className="about__card-icon">📷</span>

              <div>
                <span className="about__card-label">
                  OUTSIDE THE EDITOR
                </span>

                <h3>Photography</h3>

                <p>
                  I like capturing nature, little details and
                  moments that usually go unnoticed.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* Quick facts */}
        <div className="about__facts">
          <div className="about__fact">
            <span>01</span>
            <strong>BCA Student</strong>
            <p>Learning by building.</p>
          </div>

          <div className="about__fact">
            <span>02</span>
            <strong>Developer</strong>
            <p>Frontend → full-stack journey.</p>
          </div>

          <div className="about__fact">
            <span>03</span>
            <strong>Creative</strong>
            <p>Code + visual thinking.</p>
          </div>

          <div className="about__fact">
            <span>04</span>
            <strong>Curious</strong>
            <p>Always experimenting.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;