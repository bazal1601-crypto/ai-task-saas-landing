import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "This platform has completely changed the way our team manages knowledge and daily work.",
    name: "Sarah Mitchell",
    role: "Product Manager",
  },
  {
    quote:
      "Everything feels simple, organized, and much faster. Our team can find what we need in seconds.",
    name: "Daniel Carter",
    role: "Team Lead",
  },
  {
    quote:
      "The AI-powered workflow helps us stay focused and get more done without unnecessary complexity.",
    name: "Emily Johnson",
    role: "Operations Manager",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="section-heading">
        <span className="section-label">WHAT TEAMS SAY</span>

        <h1>
          Built for teams
          <br />
          <span>that want more.</span>
        </h1>

        <p>
          See how modern teams use smarter workflows to stay organized and
          move faster.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <div className="quote-mark">“</div>

            <p className="testimonial-quote">{testimonial.quote}</p>

            <div className="testimonial-author">
              <div className="author-avatar">
                {testimonial.name.charAt(0)}
              </div>

              <div>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;