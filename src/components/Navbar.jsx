import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#top" className="navbar__logo">
          <span className="navbar__logo-mark"></span>
          SkillFlow
        </a>

        <nav className="navbar__links">
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
          <a href="#blog">Blog</a>
          <a href="#customers">Customers</a>
        </nav>

        <div className="navbar__actions">
          <a href="#login" className="navbar__login">Log In</a>
          <a href="#start" className="navbar__cta">Get Started</a>
        </div>

        <button
          className={`navbar__burger ${menuOpen ? "navbar__burger--open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
        <a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a>
        <a href="#customers" onClick={() => setMenuOpen(false)}>Customers</a>
        <a href="#login" onClick={() => setMenuOpen(false)}>Log In</a>
        <a href="#start" className="navbar__cta navbar__cta--mobile" onClick={() => setMenuOpen(false)}>
          Get Started
        </a>
      </div>
    </header>
  );
}