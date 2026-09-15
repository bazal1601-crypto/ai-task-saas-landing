import "./FeatureGrowth.css";

export default function FeatureGrowth() {
  return (
    <section className="partner-section" id="about">

      <div className="partner-visual">

        <div className="created-card">
          <small>Created Group</small>
          <strong>42.00+</strong>
        </div>

        <div className="hero-group-card">

          <strong>Hero Group</strong>

          <div>
            👩🏻 👨🏻 👩🏼 👨🏼
          </div>

          <button>
            Join Group
          </button>

        </div>

        <div className="recent-card">

          <strong>Recent Activity Feed</strong>

          <div>
            <span>John</span>
            <span>Completed</span>
            <span>Aug 04</span>
          </div>

          <div>
            <span>Sarah</span>
            <span>Started</span>
            <span>Aug 05</span>
          </div>

          <div>
            <span>Mike</span>
            <span>Completed</span>
            <span>Aug 06</span>
          </div>

        </div>

      </div>


      <div className="partner-content">

        <div className="eyebrow">
          ✦ &nbsp; About Us
        </div>

        <h2>
          Your Partner in
          Performance Growth
        </h2>

        <p>
          Skillflow streamlines team training, making onboarding and
          knowledge sharing faster, clearer, and more impactful.
        </p>

        <ul>
          <li>Optimize performance through insights</li>
          <li>Simplify team training processes</li>
          <li>Track learning in real-time</li>
          <li>Connect tools they already use</li>
          <li>Empower teams with knowledge</li>
        </ul>

        <button className="outline-btn">
          Learn More
        </button>

      </div>

    </section>
  );
}