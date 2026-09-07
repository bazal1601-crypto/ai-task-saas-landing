import {
  Search,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Connect your knowledge",
    description:
      "Bring your team's documents, tools, and important information together in one workspace.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Let AI understand",
    description:
      "Our AI processes your knowledge and makes it easy to search, understand, and use.",
  },
  {
    number: "03",
    icon: ArrowRight,
    title: "Ask and collaborate",
    description:
      "Ask questions, find answers, and collaborate with your team without switching tools.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Get more done",
    description:
      "Turn knowledge into action and help your team work faster every day.",
  },
];

function HowItWorks() {
  return (
    <section className="how-section">
      <div className="section-heading">
        <span className="section-label">HOW IT WORKS</span>

        <h1>
          From knowledge
          <br />
          <span>to action in minutes.</span>
        </h1>

        <p>
          A simple workflow that turns your team's scattered knowledge
          into useful answers and smarter work.
        </p>
      </div>

      <div className="how-process">
        <div className="process-line"></div>

        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <article className="how-step" key={step.number}>
              <div className="step-visual">
                <div className="step-glow"></div>

                <div className="step-number">
                  {step.number}
                </div>

                <div className="step-icon">
                  <Icon size={23} strokeWidth={1.7} />
                </div>

                <div className="floating-dot dot-one"></div>
                <div className="floating-dot dot-two"></div>
              </div>

              <div className="step-content">
                <span className="step-label">STEP {step.number}</span>

                <h2>{step.title}</h2>

                <p>{step.description}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="how-bottom-card">
        <div className="bottom-icon">
          <Sparkles size={20} />
        </div>

        <div>
          <strong>One simple workflow. Endless possibilities.</strong>
          <p>
            Everything your team needs to turn information into progress.
          </p>
        </div>

        <div className="bottom-check">
          <CheckCircle2 size={20} />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;