const creativeWork = Array.from({ length: 16 }, (_, index) => ({
  src: `/sundoor/sundoor (${index + 1}).jpg`,
  alt: `Sundoor creative work ${index + 1} designed by Subarna`,
  title: `Creative ${String(index + 1).padStart(2, '0')}`,
  category: 'Sundoor · Creative Work',
}));

function Photography() {
  return (
    <section className="photography section" id="creative-work">
      <div className="container">

        {/* Section Header */}
        <div className="photography__header">

          <div>
            <span className="section-label">
              08 — CREATIVE WORK
            </span>

            <h2 className="section-title">
              Code is my craft.
              <span> Design is another.</span>
            </h2>
          </div>

          <p>
            A selection of visual content and social media
            creatives I worked on during my time with Sundoor.
          </p>

        </div>

        {/* Creative Gallery */}
        <div className="creative-gallery">

          {creativeWork.map((work, index) => (
            <article
              className="creative-card"
              key={work.src}
            >

              {/* Image */}
              <div className="creative-card__image">

                <img
                  src={work.src}
                  alt={work.alt}
                  loading={index < 4 ? 'eager' : 'lazy'}
                />

                {/* Number */}
                <span className="creative-card__number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Arrow */}
                <span className="creative-card__arrow">
                  ↗
                </span>

              </div>

              {/* Info */}
              <div className="creative-card__info">

                <span>
                  {work.category}
                </span>

                <h3>
                  {work.title}
                </h3>

              </div>

            </article>
          ))}

        </div>

        {/* Footer */}
        <div className="photography__footer">

          <span className="photography__camera">
            ✦
          </span>

          <p>
            Creative thinking beyond the code.
          </p>

          <span className="photography__line" />

          <span>
            🎨
          </span>

        </div>

      </div>
    </section>
  );
}

export default Photography;