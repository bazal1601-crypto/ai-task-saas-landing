import { useState } from "react";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import "./App.css";
const speedFeatures = [
  {

    icon: "✦",
    title: "Start Creating",
    text: "Add your clutter. Skillflow empowers you to create intelligent content that keeps your team moving.",

  },

  {

    icon: "◉",

    title: "Smart Sync",

    text: "Import knowledge from tools and keep everything synchronized with continuously updated content.",

  },

  {

    icon: "↗",

    title: "Instant Share",

    text: "Publishing is instant-routing logic makes sharing exactly when it is needed simple.",

  },

];



const coreFeatures = [

  {

    icon: "◎",

    title: "Integrations",

    text: "Explore your favorite tools and connect everything your team needs.",

  },

  {

    icon: "♧",

    title: "User Groups",

    text: "Effortlessly organize teams and create powerful learning groups.",

  },

  {

    icon: "♙",

    title: "Certifications",

    text: "Automatically track certifications and help employees stay up to date.",

  },

  {

    icon: "▣",

    title: "Course Library",

    text: "Explore skill-building content and create an effective learning experience.",

  },

  {

    icon: "◫",

    title: "Directory Sync",

    text: "Automatically synchronize employees and organizational information.",

  },

  {

    icon: "⌂",

    title: "Knowledge Base",

    text: "Create and manage a powerful knowledge base for your team.",

  },

];



const faqs = [

  "What is Skillflow and how does it work?",

  "How quickly can I set up training content?",

  "Can I integrate Skillflow with other tools?",

  "Is there a limit to how many users I can add?",

  "Can I try Skillflow before purchasing?",

];



function App() {

  const [openFaq, setOpenFaq] = useState(0);



  return (

    <div className="app">



      {/* ================= HEADER ================= */}



      <header className="header">

        <div className="nav-container">



          <div className="logo">

            <span className="logo-star">✦</span>

            <span>SKILLFLOW</span>

          </div>



          <nav className="navigation">

            <a href="#about">About</a>

            <a href="#pricing">Pricing</a>

            <a href="#blog">Blog</a>

            <a href="#customers">Customers</a>

          </nav>



          <div className="nav-actions">

            <button className="login-btn">Log in</button>

            <button className="blue-btn">Get Started</button>

          </div>



        </div>

      </header>





      {/* ================= HERO ================= */}



      <main>



        <section className="hero">



          <div className="hero-left">



            <div className="eyebrow">

              ✦ &nbsp; Teams That Perform

            </div>



            <h1>

              AI Training Built for

              <br />

              Real Workflows

            </h1>



            <p>

              Empower your team with AI-driven training for onboarding and

              smarter, more productive workflows.

            </p>



            <div className="hero-bottom">



              <button className="black-btn">

                Get Started For Free

              </button>



              <div className="rating">



                <div className="avatar-group">

                  <span>👩🏻</span>

                  <span>👨🏻</span>

                  <span>👩🏼</span>

                  <span>👨🏼</span>

                </div>



                <div>

                  <div className="stars">★★★★★</div>

                  <small>4.9</small>

                </div>



              </div>



            </div>



          </div>





          {/* HERO DASHBOARD */}



          <div className="hero-dashboard">



            <div className="dashboard-filter">



              <div className="dashboard-title">

                <strong>Filter</strong>

                <span>•••</span>

              </div>



              <input

                type="text"

                placeholder="Search employees..."

              />



              <div className="check-row">

                <span className="checkbox"></span>

                Completed

              </div>



              <div className="check-row">

                <span className="checkbox"></span>

                In Progress

              </div>



              <button>Apply Filter</button>



            </div>





            <div className="team-card">



              <div className="card-label">

                Teams

              </div>



              <h3>Performance</h3>



              <div className="team-members">

                <span>👩🏻</span>

                <span>👨🏻</span>

                <span>👩🏼</span>

                <span>+</span>

              </div>



            </div>





            <div className="hire-card">



              <div>

                <small>Hire Group</small>

                <strong>42 members</strong>

              </div>



              <div className="mini-chart">

                <span></span>

                <span></span>

                <span></span>

                <span></span>

                <span></span>

              </div>



            </div>





            <div className="performance-card">



              <div className="performance-header">

                <div>

                  <small>Team Performance</small>

                  <strong>82%</strong>

                </div>



                <div className="circle-progress">

                  82%

                </div>

              </div>



              <div className="progress">

                <span></span>

              </div>



              <div className="progress-text">

                <span>Learning progress</span>

                <span>+24%</span>

              </div>



            </div>



          </div>



        </section>





        {/* ================= BRANDS ================= */}



        <section className="brands">



          <span>SPACEX</span>

          <span>◈ SQUARESPACE</span>

          <span>Wealthsimple</span>

          <span>◈ databricks</span>

          <span>◉ HubSpot</span>



        </section>





        {/* ================= SPEED SECTION ================= */}



        <section className="content-section">



          <div className="section-heading">



            <div className="eyebrow">

              ✦ &nbsp; Core Features Section

            </div>



            <h2>

              Clarity. Speed. Results.

            </h2>



            <p>

              Skillflow streamlines training, launch, and track content in

              minutes.

            </p>



          </div>





          <div className="feature-grid">



            {speedFeatures.map((feature, index) => (



              <div

                className={`feature-card ${

                  index === 1 ? "featured-card" : ""

                }`}

                key={feature.title}

              >



                <div className="feature-icon">

                  {feature.icon}

                </div>



                <h3>{feature.title}</h3>



                <p>{feature.text}</p>



              </div>



            ))}



          </div>



        </section>





        {/* ================= ANALYTICS ================= */}



        <section className="content-section analytics-section">



          <div className="section-heading">



            <div className="eyebrow">

              ✦ &nbsp; Analytics

            </div>



            <h2>

              Spot Solve Instantly

            </h2>



            <p>

              Measure comprehension accurately using built-in analytics and

              real-time performance tracking.

            </p>



          </div>





          {/* GRAPH */}



          <div className="analytics-card">



            <div className="analytics-header">



              <div>

                <strong>Company Activity</strong>

                <small>200</small>

              </div>



              <span>● &nbsp; 4 Guides</span>



            </div>





            <div className="graph">



              <div className="graph-labels">

                <span>200</span>

                <span>150</span>

                <span>100</span>

                <span>50</span>

                <span>0</span>

              </div>



              <div className="graph-area">



                <div className="graph-line"></div>



                <div className="graph-tooltip">

                  150

                </div>



              </div>



            </div>





            <div className="graph-dates">

              <span>Jun 01</span>

              <span>Jun 15</span>

              <span>Jul 01</span>

              <span>Jul 15</span>

              <span>Aug 04</span>

              <span>Aug 16</span>

            </div>



          </div>





          <div className="two-cards">



            <div className="info-card">



              <div>

                <h3>Filter In Natural Language</h3>



                <p>

                  Quickly find meaningful insights by simply asking

                  questions.

                </p>

              </div>



              <div className="filter-demo">



                <input placeholder="Search..." />



                <span>Today</span>

                <span>Completed</span>



                <button>Search</button>



              </div>



            </div>





            <div className="info-card">



              <div>

                <h3>Focus On What You Need</h3>



                <p>

                  Access comprehensive reports and explore detailed insights

                  for important teams.

                </p>

              </div>



              <div className="focus-users">

                👩🏻 👨🏻 👩🏼 👨🏼

                <span>+</span>

              </div>



            </div>



          </div>



        </section>





        {/* ================= PARTNER ================= */}



        <section className="partner-section">



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





        {/* ================= WEAKNESSES ================= */}



        <section className="content-section">



          <div className="section-heading">



            <div className="eyebrow">

              ✦ &nbsp; Platform Overview

            </div>



            <h2>

              Expose Performance

              <br />

              Weaknesses

            </h2>



            <p>

              Track employee progress and quickly understand where teams need

              additional support.

            </p>



          </div>





          <div className="feature-grid">



            <div className="feature-card">



              <div className="feature-icon">

                ◉

              </div>



              <h3>Instant Support</h3>



              <p>

                Quickly answer employee questions and remove training

                blockers.

              </p>



            </div>





            <div className="feature-card featured-card">



              <div className="feature-icon">

                ♧

              </div>



              <h3>Self-Maintaining</h3>



              <p>

                Intelligent systems automatically keep training content

                updated.

              </p>



            </div>





            <div className="feature-card">



              <div className="feature-icon">

                ◌

              </div>



              <h3>Cross-Platform</h3>



              <p>

                Access training resources across all your favorite platforms.

              </p>



            </div>



          </div>



        </section>





        {/* ================= CORE FEATURES ================= */}



        <section className="core-section">



          <div className="section-heading">



            <div className="eyebrow">

              ✦ &nbsp; Core Features Section

            </div>



            <h2>

              Reimagining Core Features

              <br />

              for Modern Training Success

            </h2>



            <p>

              Everything you need to build, manage, and scale modern team

              training.

            </p>



          </div>





          <div className="core-grid">



            {coreFeatures.map((feature) => (



              <div className="core-card" key={feature.title}>



                <div className="core-icon">

                  {feature.icon}

                </div>



                <h3>{feature.title}</h3>



                <p>{feature.text}</p>



              </div>



            ))}



          </div>



        </section>




{/* OUR FEATURES */}
<Features />

{/* HOW IT WORKS */}
<HowItWorks />

{/* TESTIMONIALS */}
<Testimonials />

{/* FAQ */}
        {/* ================= FAQ ================= */}



        <section className="faq-section">



          <div className="section-heading">



            <div className="eyebrow">

              ✦ &nbsp; Frequently Asked Questions

            </div>



            <h2>

              Frequently Asked

              <br />

              Questions

            </h2>



          </div>





          <div className="faq-list">



            {faqs.map((question, index) => (



              <div

                className={`faq-item ${

                  openFaq === index ? "faq-open" : ""

                }`}

                key={question}

              >



                <button

                  onClick={() =>

                    setOpenFaq(

                      openFaq === index ? -1 : index

                    )

                  }

                >



                  <span>{question}</span>



                  <strong>

                    {openFaq === index ? "−" : "+"}

                  </strong>



                </button>



                {openFaq === index && (



                  <p>

                    Skillflow helps teams create effective training

                    workflows, organize knowledge, track performance and

                    improve learning experiences from one simple platform.

                  </p>



                )}



              </div>



            ))}



          </div>



        </section>





        {/* ================= CTA ================= */}



        <section className="cta">



          <div className="eyebrow">

            ✦ &nbsp; Build Your Future

          </div>



          <h2>

            AI Training Built for

            <br />

            Real Workflows

          </h2>



          <p>

            Empower your team with smarter workflows and better training.

          </p>



          <div className="cta-buttons">



            <button className="white-btn">

              Get Started For Free

            </button>



            <button className="black-btn">

              Book a Strategy Call

            </button>



          </div>



        </section>



      </main>





      {/* ================= FOOTER ================= */}



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



    </div>

  );

}



export default App;