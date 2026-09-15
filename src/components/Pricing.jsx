import "./Pricing.css";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    tagline: "For small teams getting started",
    features: [
      "Up to 5 team members",
      "Basic workflow automation",
      "Community support",
      "1 active project",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$29",
    period: "/mo",
    tagline: "For growing teams that need more",
    features: [
      "Up to 25 team members",
      "Advanced automation & analytics",
      "Priority support",
      "Unlimited projects",
      "Custom integrations",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    tagline: "For organizations at scale",
    features: [
      "Unlimited team members",
      "Dedicated account manager",
      "Custom SLAs & security review",
      "Single sign-on (SSO)",
      "Onboarding & training",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="section-heading">
        <div className="eyebrow">✦ &nbsp; Pricing</div>
        <h2>Simple, transparent pricing</h2>
        <p>Pick the plan that fits your team today. Upgrade anytime as you grow.</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div className={`price-card ${plan.highlighted ? "price-card--highlighted" : ""}`} key={plan.name}>
            {plan.highlighted && <span className="price-badge">Most Popular</span>}
            <h3>{plan.name}</h3>
            <div className="price-amount">
              {plan.price}
              <span>{plan.period}</span>
            </div>
            <p className="price-tagline">{plan.tagline}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button className={plan.highlighted ? "black-btn" : "outline-btn"}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}