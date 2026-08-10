function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        {/* Left content */}
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
              aria-label="GitHub"
            >
              GitHub
            </a>

            <span>•</span>

            <a
              href="#contact"
              aria-label="Email"
            >
              Email
            </a>

            <span>•</span>

            <a
              href="#contact"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Visual side */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__blob hero__blob--one" />
          <div className="hero__blob hero__blob--two" />

          <div className="hero__card">
            <div className="hero__card-top">
              <span className="hero__card-dot" />
              <span className="hero__card-dot" />
              <span className="hero__card-dot" />

              <span className="hero__card-label">
                currently.building()
              </span>
            </div>

            <div className="hero__code">
              <span className="code-line">
                <span className="code-purple">const</span>{' '}
                <span className="code-pink">barna</span>{' '}
                <span className="code-white">=</span>
              </span>

              <span className="code-line code-indent">
                <span className="code-white">{'{'}</span>
              </span>

              <span className="code-line code-indent">
                <span className="code-blue">role</span>
                <span className="code-white">:</span>{' '}
                <span className="code-green">
                  "developer"
                </span>
                <span className="code-white">,</span>
              </span>

              <span className="code-line code-indent">
                <span className="code-blue">learning</span>
                <span className="code-white">:</span>{' '}
                <span className="code-green">
                  "everyday"
                </span>
                <span className="code-white">,</span>
              </span>

              <span className="code-line code-indent">
                <span className="code-blue">coffee</span>
                <span className="code-white">:</span>{' '}
                <span className="code-green">
                  true
                </span>
                <span className="code-white">,</span>
              </span>

              <span className="code-line code-indent">
                <span className="code-blue">creative</span>
                <span className="code-white">:</span>{' '}
                <span className="code-green">
                  true
                </span>
              </span>

              <span className="code-line code-indent">
                <span className="code-white">{'}'}</span>
              </span>
            </div>

            <div className="hero__card-footer">
              <span>⌘</span>
              <span>building something cool...</span>
              <span className="hero__cursor">▋</span>
            </div>
          </div>

          <div className="hero__sticker hero__sticker--top">
            &lt;code /&gt;
          </div>

          <div className="hero__sticker hero__sticker--bottom">
            ✦ creative mind
          </div>

          <div className="hero__star hero__star--one">✦</div>
          <div className="hero__star hero__star--two">✦</div>
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