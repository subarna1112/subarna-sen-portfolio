import { useState } from 'react';

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

function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus('sending');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        'https://formspree.io/f/xgavenkq',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Form submission failed.');
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">

        {/* Header */}
        <div className="contact__header">

          <span className="section-label">
            10 — LET&apos;S CONNECT
          </span>

          <h2 className="section-title">
            Have an idea?
            <span> Let&apos;s build it.</span>
          </h2>

          <p>
            Whether it is a web project, internship opportunity,
            collaboration, or just a conversation about technology,
            feel free to reach out.
          </p>

        </div>

        {/* Main Contact Area */}
        <div className="contact__grid">

          {/* Left Side */}
          <div className="contact__left">

            <div className="contact__details">

              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  target={
                    detail.label === 'EMAIL'
                      ? undefined
                      : '_blank'
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

            {/* Social Links */}
            <div className="contact-socials">

              <div className="contact-socials__heading">
                <span>FIND ME ELSEWHERE</span>
                <span>03</span>
              </div>

              <div className="contact-socials__grid">

                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-social"
                    aria-label={`Visit my ${social.name} profile`}
                  >
                    <span className="contact-social__icon">
                      {social.shortName}
                    </span>

                    <span className="contact-social__name">
                      {social.name}
                    </span>

                    <span className="contact-social__arrow">
                      ↗
                    </span>
                  </a>
                ))}

              </div>

            </div>

          </div>

          {/* Contact Form */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="contact-form__intro">
              <span>START A CONVERSATION</span>

              <p>
                Tell me what you&apos;re working on.
              </p>
            </div>

            <div className="contact-form__row">

              <label>
                Name

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </label>

              <label>
                Email

                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  autoComplete="email"
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
                rows="7"
                placeholder="Tell me a little about it..."
                required
              />
            </label>

            <button
              type="submit"
              className="button button--primary"
              disabled={status === 'sending'}
            >
              {status === 'sending' && 'Sending...'}
              {status === 'idle' && 'Send Message'}
              {status === 'success' && 'Message Sent ✓'}
              {status === 'error' && 'Try Again'}

              {status === 'idle' && <span>↗</span>}
              {status === 'success' && <span>✓</span>}
              {status === 'error' && <span>↻</span>}
            </button>

            {status === 'success' && (
              <p className="contact-form__message contact-form__message--success">
                Thanks for reaching out! Your message has been sent
                successfully. I&apos;ll get back to you soon.
              </p>
            )}

            {status === 'error' && (
              <p className="contact-form__message contact-form__message--error">
                Something went wrong while sending your message.
                Please try again or contact me directly by email.
              </p>
            )}

            {status === 'idle' && (
              <p className="contact-form__note">
                Your message will be sent securely through the contact
                form.
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;