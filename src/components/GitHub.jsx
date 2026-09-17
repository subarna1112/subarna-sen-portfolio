const githubUsername = 'subarna1112';

const socialLinks = [
  {
    name: 'Instagram',
    shortName: 'IG',
    url: 'https://www.instagram.com/raabriiiii/',
  },
  {
    name: 'LinkedIn',
    shortName: 'IN',
    url: 'https://www.linkedin.com/in/subarnasen1707/',
  },
  {
    name: 'Facebook',
    shortName: 'FB',
    url: 'https://www.facebook.com/share/1EdVJYmvfy/',
  },
];

function GitHub() {
  return (
    <section className="github-section section" id="github">
      <div className="container">

        {/* Section Header */}
        <div className="github-section__header">

          <div>
            <span className="section-label">
              09 — BUILDING IN PUBLIC
            </span>

            <h2 className="section-title">
              Code, projects
              <span> & experiments.</span>
            </h2>
          </div>

          <p>
            I use GitHub to build projects, experiment with
            technologies, learn from mistakes, and keep track
            of my development journey.
          </p>

        </div>

        {/* GitHub Profile Card */}
        <div className="github-profile">

          <div className="github-profile__icon">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.68 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.45.11-3.03 0 0 .97-.31 3.17 1.17A10.96 10.96 0 0 1 12 6.09c.98 0 1.96.13 2.88.38 2.2-1.48 3.17-1.17 3.17-1.17.63 1.58.23 2.74.11 3.03.74.8 1.19 1.82 1.19 3.07 0 4.41-2.7 5.38-5.27 5.67.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
              />
            </svg>
          </div>

          <div className="github-profile__content">

            <span className="github-profile__label">
              GITHUB
            </span>

            <h3>
              @{githubUsername}
            </h3>

            <p>
              My projects, experiments and code live here.
            </p>

          </div>

          <a
            className="button button--primary github-profile__button"
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
            <span>↗</span>
          </a>

        </div>

        {/* Social Links */}
        <div className="social-links">

          <span className="social-links__label">
            FIND ME ELSEWHERE
          </span>

          <div className="social-links__list">

            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label={`Visit my ${social.name} profile`}
              >
                <span className="social-link__icon">
                  {social.shortName}
                </span>

                <span className="social-link__name">
                  {social.name}
                </span>

                <span className="social-link__arrow">
                  ↗
                </span>
              </a>
            ))}

          </div>

        </div>

        {/* Coding Interests */}
        <div className="github-interests">

          <span className="github-interests__label">
            CURRENTLY BUILDING WITH
          </span>

          <div className="github-interests__tags">

            <span>React</span>
            <span>JavaScript</span>
            <span>PHP</span>
            <span>MySQL</span>
            <span>Java</span>
            <span>Python</span>
            <span>Git</span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default GitHub;