function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create your workspace",
      description:
        "Set up your project and invite your team members to start working together.",
    },
    {
      number: "02",
      title: "Add your tasks",
      description:
        "Create tasks, assign responsibilities, and organize your work easily.",
    },
    {
      number: "03",
      title: "Let AI organize",
      description:
        "Use smart AI suggestions to prioritize tasks and improve your workflow.",
    },
    {
      number: "04",
      title: "Track & complete",
      description:
        "Monitor your progress and keep your projects moving toward completion.",
    },
  ];

  return (
    <section className="how-section">
      <div className="section-heading">
        <span className="section-label">HOW IT WORKS</span>

        <h1>
          From idea to
          <span> done.</span>
        </h1>

        <p>
          A simple workflow designed to help your team move faster and work
          smarter.
        </p>
      </div>

      <div className="steps">
        {steps.map((step) => (
          <div className="step" key={step.number}>
            <div className="step-number">{step.number}</div>

            <h2>{step.title}</h2>

            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;