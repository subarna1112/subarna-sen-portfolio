const contactDetails = [
  {
    label: 'EMAIL',
    value: 'sen.subarna1112@gmail.com',
    href: 'mailto:sen.subarna1112@gmail.com',
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/subarnasen1707',
    href: 'https://www.linkedin.com/in/subarnasen1707/',
  },
  {
    label: 'GITHUB',
    value: 'github.com/subarna1112',
    href: 'https://github.com/subarna1112',
  },
];

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__header">
          <span className="section-label">
            10 — LET'S CONNECT
          </span>

          <h2 className="section-title">
            Have an idea?
            <span> Let's build it.</span>
          </h2>

          <p>
            Whether it is a web project, internship opportunity,
            collaboration, or just a conversation about technology,
            feel free to reach out.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__details">
            {contactDetails.map((detail) => (
              <a
                key={detail.label}
                href={detail.href}
                target={
                  detail.label === 'EMAIL' ? undefined : '_blank'
                }
                rel={
                  detail.label === 'EMAIL'
                    ? undefined
                    : 'noreferrer'
                }
                className="contact-card"
              >
                <span className="contact-card__label">
                  {detail.label}
                </span>

                <span className="contact-card__value">
                  {detail.value}
                </span>

                <span className="contact-card__arrow">
                  ↗
                </span>
              </a>
            ))}
          </div>

          <form className="contact-form">
            <div className="contact-form__row">
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </label>
            </div>

            <label>
              Subject
              <input
                type="text"
                name="subject"
                placeholder="What would you like to talk about?"
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me a little about it..."
                required
              />
            </label>

            <button
              type="submit"
              className="button button--primary"
            >
              Send Message
              <span>↗</span>
            </button>

            <p className="contact-form__note">
              Form connection will be added before deployment.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;