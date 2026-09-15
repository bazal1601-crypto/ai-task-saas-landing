import "./Customers.css";

const testimonials = [
  {
    name: "Ayesha Raza",
    role: "Head of Ops, Northlane Studio",
    quote: "Onboarding used to take us two weeks. With Skillflow it's down to three days, and the team actually retains more.",
    avatarSeed: "AR",
  },
  {
    name: "Daniel Cho",
    role: "Team Lead, Brightpath Labs",
    quote: "The AI suggestions genuinely surface the right task at the right time. It's the first tool that felt built for how we actually work.",
    avatarSeed: "DC",
  },
  {
    name: "Priya Nandan",
    role: "COO, Fieldstone Collective",
    quote: "We rolled Skillflow out to 40 people in a week. Support tickets about 'where do I find X' basically disappeared.",
    avatarSeed: "PN",
  },
];

export default function Customers() {
  return (
    <section className="customers-section" id="customers">
      <div className="section-heading">
        <div className="eyebrow">✦ &nbsp; Customers</div>
        <h2>Trusted by teams who move fast</h2>
        <p>See how teams use Skillflow to train smarter and onboard faster.</p>
      </div>

      <div className="customers-grid">
        {testimonials.map((t) => (
          <div className="customer-card" key={t.name}>
            <p className="customer-quote">"{t.quote}"</p>
            <div className="customer-person">
              <img
                src={`https://ui-avatars.com/api/?name=${t.avatarSeed}&background=edf5ff&color=347bd9&bold=true`}
                alt=""
              />
              <div>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}