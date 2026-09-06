import {
  Sparkles,
  RefreshCw,
  BarChart3,
  Plug,
  Users,
  ShieldCheck,
} from "lucide-react";
import "./Features.css";
import "./HowItWorks.css";
const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Answers",
    description:
      "Get intelligent answers from your team's knowledge in seconds.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Sync",
    description:
      "Keep information updated and synchronized across your workspace.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Turn your work data into clear insights with powerful dashboards.",
  },
  {
    icon: Plug,
    title: "Easy Integrations",
    description:
      "Connect the tools your team already uses every day.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Bring your team together and make collaboration simple.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Knowledge",
    description:
      "Keep your team's important information organized and protected.",
  },
];

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
              <div className="feature-icon">
                <Icon size={21} strokeWidth={1.7} />
              </div>

              <h2>{feature.title}</h2>

              <p>{feature.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Features;