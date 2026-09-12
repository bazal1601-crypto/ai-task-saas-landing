import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__photo-layer"></div>
      <div className="hero__texture"></div>
      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__badge">🚀 Teams That Perform</span>

          <h1 className="hero__title">
            AI Training Built
            <br />
            for Real Workflows
          </h1>

          <p className="hero__subtitle">
            Empower your team with AI-driven training, faster onboarding,
            and smarter knowledge sharing at scale.
          </p>

          <div className="hero__actions">
            <a href="#start" className="hero__cta-primary">Get Started For Free</a>

            <div className="hero__social-proof">
              <div className="hero__avatars">
                <img className="hero__avatar" src="https://ui-avatars.com/api/?name=A+B&background=D8D5CC&color=14151F&bold=true" alt="" />
                <img className="hero__avatar" src="https://ui-avatars.com/api/?name=C+D&background=B8B4A8&color=14151F&bold=true" alt="" />
                <img className="hero__avatar" src="https://ui-avatars.com/api/?name=E+F&background=9A9BA5&color=FAFAF8&bold=true" alt="" />
                <span className="hero__avatar hero__avatar--more">+</span>
              </div>
              <div className="hero__rating">
                <span className="hero__stars">★★★★★</span>
                <span className="hero__rating-text">4.8 · From 1k+ reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__device">
            <div className="hero__device-bar">
              <span className="hero__device-dot"></span>
              <span className="hero__device-dot"></span>
              <span className="hero__device-dot"></span>
              <span className="hero__device-url">app.skillflow.io</span>
            </div>

            <div className="hero__device-body">
              <div className="hero__card hero__card--team">
                <div className="hero__card-row">
                  <span className="hero__card-heading">Team</span>
                  <span className="hero__status-tag">
                    <span className="hero__status-dot"></span>
                    Connected
                  </span>
                </div>
                <p className="hero__card-text">
                  Sync team pages and databases with your Skillflow workspace
                </p>
                <div className="hero__card-row">
                  <button className="hero__pill-btn">Manage</button>
                  <button className="hero__pill-btn hero__pill-btn--danger">Disconnect</button>
                </div>
              </div>

              <div className="hero__card hero__card--project">
                <div className="hero__project-icon"></div>
                <div>
                  <p className="hero__card-title-sm">Creating Landing Page</p>
                  <p className="hero__card-sub">Outfit Tuner</p>
                </div>
                <span className="hero__star">★</span>
              </div>

              <div className="hero__card hero__card--flora">
                <div className="hero__card-row">
                  <div className="hero__project-icon hero__project-icon--sm"></div>
                  <div>
                    <p className="hero__card-title-sm">Flora Group</p>
                    <p className="hero__card-sub">Last edited 12:00 AM</p>
                  </div>
                </div>
                <div className="hero__mini-avatars">
                  <img className="hero__avatar hero__avatar--tiny" src="https://ui-avatars.com/api/?name=G+H&background=D8D5CC&color=14151F&bold=true" alt="" />
                  <img className="hero__avatar hero__avatar--tiny" src="https://ui-avatars.com/api/?name=I+J&background=B8B4A8&color=14151F&bold=true" alt="" />
                  <img className="hero__avatar hero__avatar--tiny" src="https://ui-avatars.com/api/?name=K+L&background=9A9BA5&color=FAFAF8&bold=true" alt="" />
                </div>
                <div className="hero__progress">
                  <div className="hero__progress-bar"></div>
                </div>
                <span className="hero__progress-label">51%</span>
              </div>

              <div className="hero__card hero__card--filter">
                <p className="hero__card-heading">Filter</p>
                <div className="hero__filter-input">Show metrics and work</div>
                <p className="hero__filter-label">Tag:</p>
                <div className="hero__tags">
                  <span className="hero__tag">Sales ×</span>
                  <span className="hero__tag hero__tag--alt">Grape ×</span>
                </div>
                <p className="hero__filter-note">Grape · Southeast Sales To...</p>
                <div className="hero__card-row">
                  <button className="hero__pill-btn">Cancel</button>
                  <button className="hero__pill-btn hero__pill-btn--dark">Apply Filter</button>
                </div>
              </div>

              <div className="hero__card hero__card--tasks">
                <div className="hero__card-row">
                  <span className="hero__card-heading">Today's Tasks</span>
                  <span className="hero__badge-count">3</span>
                </div>
                <div className="hero__card-row">
                  <span className="hero__task-icon"></span>
                  <div>
                    <p className="hero__card-title-sm">Color Palette Selection</p>
                    <p className="hero__card-sub">OneOk Games App</p>
                  </div>
                  <span className="hero__star">★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}