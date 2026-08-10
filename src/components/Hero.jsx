function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">

        {/* Hero content */}
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__status" />
            Open to opportunities
          </div>

          <h1 className="hero__title">
            I build
            <span className="hero__title-accent"> digital </span>
            experiences with code.
          </h1>

          <p className="hero__description">
            I'm <strong>Subarna Sen</strong> — a BCA student and aspiring
            software & web developer who enjoys turning ideas into
            useful, interactive experiences.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="button button--primary">
              View my work
              <span>↗</span>
            </a>

            <a
              href="/resume.pdf"
              className="button button--secondary"
              download
            >
              Download resume
              <span>↓</span>
            </a>
          </div>

          <div className="hero__socials">
            <a
              href="https://github.com/subarna1112"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <span>•</span>

            <a href="#contact">
              Email
            </a>

            <span>•</span>

            <a href="#contact">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Photo visual */}
        <div className="hero__visual">

          <div className="hero__blob hero__blob--one" />
          <div className="hero__blob hero__blob--two" />

          <div className="hero__photo-card">

            <div className="hero__photo-frame">
              <img
                src="/images/barna-profile.png"
                alt="Subarna Sen"
                className="hero__photo"
              />

              <div className="hero__photo-tag">
                <span>✦</span>
                developer in progress
              </div>
            </div>

            <div className="hero__profile-info">
              <div>
                <span className="hero__profile-label">
                  HI, I'M
                </span>

                <h2>Barna.</h2>

                <p>
                  BCA · Software & Web Developer
                </p>
              </div>

              <div className="hero__profile-symbol">
                &lt;/&gt;
              </div>
            </div>

          </div>

          <div className="hero__sticker hero__sticker--top">
            code + creativity
          </div>

          <div className="hero__sticker hero__sticker--bottom">
            📷 photography
          </div>

          <div className="hero__star hero__star--one">
            ✦
          </div>

          <div className="hero__star hero__star--two">
            ✦
          </div>

        </div>
      </div>

      <div className="hero__scroll">
        <span>scroll to explore</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}

export default Hero;