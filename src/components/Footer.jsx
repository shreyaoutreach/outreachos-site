import { LINKEDIN_URL } from '../config.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <a href="#top" className="logo">
            <span className="logo-mark">OS</span>
            <span className="logo-word">Outreach<em>OS</em></span>
          </a>
          <p>Outreach that actually converts.</p>
        </div>
        <nav className="footer-links">
          <a href="#modules">Services</a>
          <a href="#process">How it works</a>
          <a href="#testimonials">Results</a>
          <a href="#reach">Coverage</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Outreach OS. All rights reserved.</span>
        <span>United States · Canada · United Kingdom · Europe · Australia</span>
      </div>
    </footer>
  );
}