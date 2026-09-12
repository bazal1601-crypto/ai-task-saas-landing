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
          <svg className="navbar__logo-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoGradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#4A8CFF" />
                <stop offset="1" stopColor="#1B4FC4" />
              </linearGradient>
            </defs>
            <rect width="32" height="32" rx="9" fill="url(#logoGradient)" />
            <path
              d="M9 20C9 20 11 13 16 13C21 13 21 20 21 20"
              stroke="white"
              strokeWidth="2.4"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="9" cy="20" r="1.8" fill="white" />
            <circle cx="21" cy="20" r="1.8" fill="white" />
          </svg>
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