import { useInView } from 'react-intersection-observer'
import { useEffect, useState, useRef } from 'react'
import './About.css'

// Simple animated counter - no external dependency
function useCountUp(end, duration, active) {
  const [count, setCount] = useState(0)
  const rafRef = useRef(null)
  useEffect(() => {
    if (!active) return
    let start = null
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [end, duration, active])
  return count
}

const stats = [
  { value: 3, suffix: '+', label: 'AI Projects Built' },
  { value: 5, suffix: '+', label: 'Tech Domains' },
  { value: 2, suffix: '+', label: 'Years Coding' },
  { value: 100, suffix: '%', label: 'Commitment' },
]

function StatItem({ value, suffix, label, active }) {
  const count = useCountUp(value, 2, active)
  return (
    <div className="stat-item">
      <div className="stat-value">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="about" className={`about-section ${inView ? 'visible' : ''}`} ref={ref}>
      <div className="container">
        <div className="about-grid">

          <div className="about-text fade-up">
            <span className="section-label">Who I Am</span>
            <h2 className="section-title">Turning <span>Complex Ideas</span><br/>into Intelligent Systems</h2>
            <div className="glow-line"/>
            <p className="about-desc">
              I'm Prem Kumar, a Computer Science graduate from Karachi with a deep passion for AI engineering
              and full-stack development. My work lives at the intersection of machine learning, automation,
              and user-facing software — building tools that are not just functional, but transformative.
            </p>
            <p className="about-desc">
              From building crime visualization platforms powered by AI to designing RAG-based chatbots and
              document humanizer agents, I focus on creating software that solves real-world problems with
              precision and intelligence.
            </p>
            <div className="about-langs">
              <span className="section-label" style={{ marginBottom: 0 }}>Languages</span>
              <div className="lang-chips">
                <span className="tag">🇬🇧 English — Fluent</span>
                <span className="tag">🇵🇰 Urdu — Native</span>
                <span className="tag">🌏 Sindhi — Native</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="traits-grid fade-up">

              <div className="trait-card glass-card">
                <div className="trait-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.66Z"/>
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.66Z"/>
                  </svg>
                </div>
                <h4 className="trait-title">AI-First Thinking</h4>
                <p className="trait-desc">Every solution is designed with intelligence at its core — from RAG pipelines to autonomous agents.</p>
              </div>

              <div className="trait-card glass-card">
                <div className="trait-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
                  </svg>
                </div>
                <h4 className="trait-title">Clean Architecture</h4>
                <p className="trait-desc">Production-grade code with clean separation of concerns, scalable design patterns, and maintainable systems.</p>
              </div>

              <div className="trait-card glass-card">
                <div className="trait-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
                  </svg>
                </div>
                <h4 className="trait-title">Rapid Prototyping</h4>
                <p className="trait-desc">From concept to working prototype fast — validating ideas before full-scale engineering.</p>
              </div>

              <div className="trait-card glass-card">
                <div className="trait-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                    <path d="M2 12h20"/>
                  </svg>
                </div>
                <h4 className="trait-title">Full-Stack Vision</h4>
                <p className="trait-desc">End-to-end product development from AI backend to pixel-perfect frontend experiences.</p>
              </div>

            </div>
          </div>
        </div>

        <div className="stats-row fade-up">
          {stats.map((s) => (
            <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} active={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
