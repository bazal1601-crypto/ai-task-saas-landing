import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">

          <div className="footer-logo">
            <span>✦</span>
            Skillflow
          </div>

          <p>
            Skillflow helps your team learn smarter, faster, and with more
            impact.
          </p>

        </div>


        <div className="footer-column">

          <h4>Navigation</h4>

          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
          <a href="#blog">Blog</a>
          <a href="#customers">Customers</a>

        </div>


        <div className="footer-column">

          <h4>Resources</h4>

          <a href="#security">Security</a>
          <a href="#privacy">Privacy</a>
          <a href="#help">Help</a>
          <a href="#legal">Legal</a>

        </div>


        <div className="footer-column">

          <h4>Social</h4>

          <a href="#linkedin">LinkedIn</a>
          <a href="#twitter">Twitter</a>

        </div>

      </div>


      <div className="copyright">
        © 2026 Skillflow. All rights reserved.
      </div>

    </footer>
  );
}