import { useInView } from 'react-intersection-observer'
import './Experience.css'

const BriefcaseIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
const GradIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
const AwardIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
const CodeIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>

const timeline = [
  { Icon: BriefcaseIcon, title: 'Senior Developer', org: 'Software Development', period: '2024 — Present', color: '#7c3aed', desc: 'Leading development of AI-powered full-stack applications. Architecting scalable systems, mentoring junior developers, and driving technical decisions across the product lifecycle.', tags: ['Leadership', 'AI Systems', 'Full-Stack', 'Architecture'] },
  { Icon: CodeIcon, title: 'AI Document Humanizer Agent', org: 'Personal Project — AI Automation', period: '2024', color: '#38bdf8', desc: 'Built an autonomous AI agent that rewrites AI-generated content into natural human prose, leveraging LangChain multi-agent pipelines and LLM fine-tuning techniques.', tags: ['LangChain', 'GPT-4', 'AI Agents', 'Python'] },
  { Icon: CodeIcon, title: 'RAG-Based Chatbot', org: 'Personal Project — AI Engineering', period: '2024', color: '#a78bfa', desc: 'Designed and deployed a production-grade RAG chatbot with semantic search, vector embeddings, and an LLM backbone for document-aware Q&A.', tags: ['RAG', 'FAISS', 'LangChain', 'FastAPI'] },
  { Icon: AwardIcon, title: 'AI Crime Visualization — Karachi', org: 'Academic Capstone Project', period: '2023 — 2024', color: '#c084fc', desc: 'Developed an AI-based crime awareness and visualization platform for Karachi, combining ML pattern recognition, interactive geospatial maps, and public-facing safety dashboards.', tags: ['Data Science', 'ML', 'React', 'Python', 'Folium'] },
  { Icon: GradIcon, title: 'Bachelor of Science — Computer Science', org: 'University, Karachi', period: '2020 — 2024', color: '#34d399', desc: 'Studied core computer science fundamentals: algorithms, data structures, databases, parallel & distributed computing, AI, software engineering, and system design.', tags: ['CS Fundamentals', 'AI', 'PDC', 'Databases', 'Algorithms'] },
]

const extras = [
  { icon: '🎓', title: 'Academic Excellence', desc: 'Strong academic record in Computer Science with focus on AI and software engineering coursework.' },
  { icon: '💡', title: 'Problem Solver', desc: 'Active participant in coding challenges, hackathons, and competitive programming events.' },
  { icon: '🤝', title: 'Team Leadership', desc: 'Experience mentoring peers, leading project teams, and collaborating on cross-functional development.' },
  { icon: '📚', title: 'Continuous Learner', desc: 'Self-directed learning of emerging AI tools, frameworks, and engineering best practices.' },
]

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })
  return (
    <section id="experience" className={`experience-section ${inView ? 'visible' : ''}`} ref={ref}>
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-label">Journey</span>
          <h2 className="section-title">Experience & <span>Education</span></h2>
        </div>
        <div className="exp-layout">
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={i} className="timeline-item fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="tl-connector">
                  <div className="tl-icon" style={{ '--tc': item.color }}><item.Icon /></div>
                  {i < timeline.length - 1 && <div className="tl-line"/>}
                </div>
                <div className="tl-content glass-card" style={{ '--tc': item.color }}>
                  <div className="tl-top">
                    <div>
                      <h3 className="tl-title">{item.title}</h3>
                      <p className="tl-org">{item.org}</p>
                    </div>
                    <span className="tl-period">{item.period}</span>
                  </div>
                  <p className="tl-desc">{item.desc}</p>
                  <div className="tl-tags">
                    {item.tags.map(t => <span key={t} className="tag" style={{ borderColor: `color-mix(in oklab, ${item.color} 40%, transparent)`, color: item.color, background: `color-mix(in oklab, ${item.color} 10%, transparent)` }}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="extras-col fade-up" style={{ transitionDelay: '0.4s' }}>
            <h3 className="extras-title">Beyond Code</h3>
            <div className="extras-grid">
              {extras.map(e => (
                <div key={e.title} className="extra-card glass-card">
                  <span className="extra-icon">{e.icon}</span>
                  <h4 className="extra-title">{e.title}</h4>
                  <p className="extra-desc">{e.desc}</p>
                </div>
              ))}
            </div>
            <div className="cert-box glass-card">
              <h3 className="cert-title">🏅 Certifications & Learning</h3>
              <ul className="cert-list">
                {['AI & Machine Learning — Ongoing','Full-Stack Web Development','Python for Data Science','LangChain & LLM Development','Database Design & SQL'].map(c => (
                  <li key={c}><span className="cert-dot"/><span>{c}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
