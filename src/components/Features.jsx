import {
  Sparkles,
  RefreshCw,
  BarChart3,
  Plug,
  Users,
  ShieldCheck,
  Check,
  Zap,
} from "lucide-react";

import "./Features.css";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Answers",
    description:
      "Get intelligent answers from your team's knowledge in seconds.",
    visual: "ai",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Sync",
    description:
      "Keep information updated and synchronized across your workspace.",
    visual: "sync",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Turn your work data into clear insights with powerful dashboards.",
    visual: "analytics",
  },
  {
    icon: Plug,
    title: "Easy Integrations",
    description:
      "Connect the tools your team already uses every day.",
    visual: "integration",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Bring your team together and make collaboration simple.",
    visual: "team",
  },
  {
    icon: ShieldCheck,
    title: "Secure Knowledge",
    description:
      "Keep your team's important information organized and protected.",
    visual: "secure",
  },
];

function FeatureVisual({ type }) {
  if (type === "ai") {
    return (
      <div className="feature-visual ai-visual">
        <div className="visual-glow"></div>
        <div className="ai-window">
          <div className="window-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="ai-line long"></div>
          <div className="ai-line medium"></div>

          <div className="ai-answer">
            <Sparkles size={14} />
            <span>AI found the answer</span>
          </div>

          <div className="ai-line short"></div>
        </div>
      </div>
    );
  }

  if (type === "sync") {
    return (
      <div className="feature-visual sync-visual">
        <div className="sync-circle">
          <RefreshCw size={27} />
        </div>
        <div className="sync-card sync-one">
          <Check size={12} />
          Synced
        </div>
        <div className="sync-card sync-two">
          <Zap size={12} />
          Live
        </div>
      </div>
    );
  }

  if (type === "analytics") {
    return (
      <div className="feature-visual analytics-visual">
        <div className="analytics-bars">
          <span style={{ height: "35%" }}></span>
          <span style={{ height: "55%" }}></span>
          <span style={{ height: "45%" }}></span>
          <span style={{ height: "78%" }}></span>
          <span style={{ height: "65%" }}></span>
          <span style={{ height: "92%" }}></span>
        </div>

        <div className="analytics-floating">
          <BarChart3 size={15} />
          <strong>+28%</strong>
        </div>
      </div>
    );
  }

  if (type === "integration") {
    return (
      <div className="feature-visual integration-visual">
        <div className="integration-node node-one">A</div>
        <div className="integration-node node-two">S</div>
        <div className="integration-node node-three">N</div>
        <div className="integration-center">
          <Plug size={20} />
        </div>

        <span className="connection connection-one"></span>
        <span className="connection connection-two"></span>
        <span className="connection connection-three"></span>
      </div>
    );
  }

  if (type === "team") {
    return (
      <div className="feature-visual team-visual">
        <div className="avatar avatar-one">S</div>
        <div className="avatar avatar-two">D</div>
        <div className="avatar avatar-three">E</div>
        <div className="team-message">
          <Users size={15} />
          <span>Team is working together</span>
        </div>
      </div>
    );
  }

  return (
    <div className="feature-visual secure-visual">
      <div className="secure-shield">
        <ShieldCheck size={30} />
      </div>

      <div className="secure-badge badge-one">Protected</div>
      <div className="secure-badge badge-two">Private</div>
    </div>
  );
}

function Features() {
  return (
    <section className="features-section">
      <div className="section-heading">
        <span className="section-label">CORE FEATURES</span>

        <h1>
          Everything you need
          <br />
          <span>to work smarter.</span>
        </h1>

        <p>
          Powerful features designed to help your team learn faster,
          collaborate better, and get more done.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <article className="feature-card" key={feature.title}>
              <FeatureVisual type={feature.visual} />

              <div className="feature-content">
                <div className="feature-icon">
                  <Icon size={20} strokeWidth={1.7} />
                </div>

                <h2>{feature.title}</h2>

                <p>{feature.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Features;