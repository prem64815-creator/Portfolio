import './Footer.css'

const GithubIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
const LinkedinIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
const MailIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
const ArrowUpIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>

const navLinks = ['About','Services','Skills','Projects','Experience','Contact']

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <footer className="footer">
      <div className="footer-glow"/>
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-label="PK">
                <rect width="40" height="40" rx="12" fill="url(#fLogo)"/>
                <text x="7" y="27" fontFamily="Syne, sans-serif" fontWeight="800" fontSize="20" fill="white">PK</text>
                <defs><linearGradient id="fLogo" x1="0" y1="0" x2="40" y2="40"><stop offset="0%" stopColor="#7c3aed"/><stop offset="100%" stopColor="#c084fc"/></linearGradient></defs>
              </svg>
              <div><div className="footer-logo-name">Prem Kumar</div><div className="footer-logo-sub">AI-Driven Full-Stack Developer</div></div>
            </div>
            <p className="footer-desc">Building intelligent systems and production-grade applications from Karachi, Pakistan. Available for exciting opportunities worldwide.</p>
            <div className="footer-socials">
              <a href="https://github.com/prem64815-creator" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub"><GithubIcon /></a>
              <a href="https://www.linkedin.com/in/prem-kumar-b4b3ba408/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="mailto:prem606kumar@gmail.com" className="social-btn" aria-label="Email"><MailIcon /></a>
            </div>
          </div>
          <div className="footer-nav">
            <h4 className="footer-nav-title">Navigation</h4>
            <ul className="footer-links">
              {navLinks.map(l => <li key={l}><button onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior:'smooth' })} className="footer-link">{l}</button></li>)}
            </ul>
          </div>
          <div className="footer-contact-col">
            <h4 className="footer-nav-title">Contact</h4>
            <div className="footer-contact-links">
              <a href="mailto:prem606kumar@gmail.com" className="footer-contact-link"><MailIcon /> prem606kumar@gmail.com</a>
              <a href="https://github.com/prem64815-creator" target="_blank" rel="noopener noreferrer" className="footer-contact-link"><GithubIcon /> prem64815-creator</a>
              <span className="footer-contact-link no-link">📍 Karachi, Sindh, PK</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Prem Kumar. Crafted with React, Three.js & passion for AI.</p>
          <button className="back-top" onClick={scrollTop} aria-label="Back to top"><ArrowUpIcon /> Top</button>
        </div>
      </div>
    </footer>
  )
}
