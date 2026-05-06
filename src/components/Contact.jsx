import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import './Contact.css'

const MailIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
const GithubIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
const LinkedinIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
const MapPinIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
const SendIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
const CheckIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    const body = `Name: ${form.name}%0ASubject: ${form.subject}%0A%0A${form.message}`
    window.location.href = `mailto:prem606kumar@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className={`contact-section ${inView ? 'visible' : ''}`} ref={ref}>
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Build <span>Together</span></h2>
          <p className="section-sub">Open to full-time roles, freelance projects, and exciting collaborations</p>
        </div>
        <div className="contact-grid">
          <div className="contact-left fade-up">
            <div className="contact-info glass-card">
              <h3 className="ci-title">Ready to collaborate?</h3>
              <p className="ci-desc">Whether you're looking for an AI engineer, a full-stack developer, or a technical co-founder, I'd love to hear about what you're building.</p>
              <div className="ci-links">
                <a href="mailto:prem606kumar@gmail.com" className="ci-link"><div className="ci-icon"><MailIcon /></div><div><div className="ci-link-label">Email</div><div className="ci-link-val">prem606kumar@gmail.com</div></div></a>
                <a href="https://github.com/prem64815-creator" target="_blank" rel="noopener noreferrer" className="ci-link"><div className="ci-icon"><GithubIcon /></div><div><div className="ci-link-label">GitHub</div><div className="ci-link-val">prem64815-creator</div></div></a>
                <a href="https://www.linkedin.com/in/prem-kumar-b4b3ba408/" target="_blank" rel="noopener noreferrer" className="ci-link"><div className="ci-icon"><LinkedinIcon /></div><div><div className="ci-link-label">LinkedIn</div><div className="ci-link-val">prem-kumar-b4b3ba408</div></div></a>
                <div className="ci-link no-hover"><div className="ci-icon"><MapPinIcon /></div><div><div className="ci-link-label">Location</div><div className="ci-link-val">Karachi, Sindh, Pakistan</div></div></div>
              </div>
              <div className="availability-badge"><span className="pulse-dot"/><span>Available for new projects & roles</span></div>
            </div>
          </div>
          <div className="contact-right fade-up" style={{ transitionDelay: '0.15s' }}>
            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <h3 className="form-title">Send a Message</h3>
              <div className="form-row">
                <div className="form-group"><label htmlFor="name">Your Name</label><input id="name" name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} required /></div>
                <div className="form-group"><label htmlFor="email">Email Address</label><input id="email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required /></div>
              </div>
              <div className="form-group"><label htmlFor="subject">Subject</label><input id="subject" name="subject" type="text" placeholder="Project Collaboration / Job Opportunity" value={form.subject} onChange={handleChange} required /></div>
              <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" name="message" rows="5" placeholder="Tell me about your project or opportunity..." value={form.message} onChange={handleChange} required /></div>
              <button type="submit" className={`btn-primary submit-btn ${sent ? 'sent' : ''}`}>
                {sent ? <><CheckIcon /> Message Sent!</> : <><SendIcon /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
