import {
  Quote,
  Star,
  Sparkles,
} from "lucide-react";

import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "This platform has completely changed the way our team manages knowledge and daily work.",
    name: "Sarah Mitchell",
    role: "Product Manager",
    image: "https://i.pravatar.cc/100?img=47",
  },
  {
    quote:
      "Everything feels simple, organized, and much faster. Our team can find what we need in seconds.",
    name: "Daniel Carter",
    role: "Team Lead",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    quote:
      "The AI-powered workflow helps us stay focused and get more done without unnecessary complexity.",
    name: "Emily Johnson",
    role: "Operations Manager",
    image: "https://i.pravatar.cc/100?img=32",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="section-heading">
        <span className="section-label">WHAT TEAMS SAY</span>

        <h1>
          Loved by teams
          <br />
          <span>that move fast.</span>
        </h1>

        <p>
          See why modern teams use smarter workflows to stay organized,
          collaborate better, and get more done.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <article
            className={`testimonial-card testimonial-${index + 1}`}
            key={testimonial.name}
          >
            <div className="testimonial-visual">
              <div className="testimonial-orbit orbit-one"></div>
              <div className="testimonial-orbit orbit-two"></div>

              <div className="testimonial-glow"></div>

              <div className="quote-icon">
                <Quote size={23} />
              </div>

              <div className="floating-star star-one">
                <Star size={11} fill="currentColor" />
              </div>

              <div className="floating-star star-two">
                <Sparkles size={11} />
              </div>
            </div>

            <div className="testimonial-content">
              <div className="stars">
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
              </div>

              <p className="testimonial-quote">
                “{testimonial.quote}”
              </p>

              <div className="testimonial-author">
                <div className="author-avatar-wrapper">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="author-avatar-image"
                  />
                </div>

                <div>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="testimonial-trust">
        <span>TRUSTED BY MODERN TEAMS</span>

        <div className="trust-items">
          <strong>WORKFLOW</strong>
          <strong>CREATIVE</strong>
          <strong>PRODUCT</strong>
          <strong>TEAMS</strong>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;