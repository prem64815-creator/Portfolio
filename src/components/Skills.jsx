import { useInView } from 'react-intersection-observer'
import './Skills.css'

const categories = [
  {
    label: 'AI & Machine Learning',
    color: '#7c3aed',
    skills: [
      { name: 'Python (AI/ML)', level: 90 },
      { name: 'LangChain & LLMs', level: 85 },
      { name: 'RAG Systems', level: 82 },
      { name: 'AI Agents', level: 80 },
      { name: 'Scikit-learn', level: 75 },
      { name: 'TensorFlow / Keras', level: 70 },
    ],
  },
  {
    label: 'Full-Stack Development',
    color: '#a78bfa',
    skills: [
      { name: 'React & JavaScript', level: 88 },
      { name: 'Python / FastAPI', level: 85 },
      { name: 'Node.js', level: 78 },
      { name: 'HTML / CSS', level: 92 },
      { name: 'REST APIs', level: 85 },
      { name: 'PostgreSQL / MongoDB', level: 78 },
    ],
  },
  {
    label: 'Data Science & Tools',
    color: '#38bdf8',
    skills: [
      { name: 'Data Visualization', level: 82 },
      { name: 'Pandas / NumPy', level: 85 },
      { name: 'SQL', level: 80 },
      { name: 'Git & GitHub', level: 88 },
      { name: 'Docker', level: 65 },
      { name: 'Linux / CLI', level: 75 },
    ],
  },
]

const techIcons = [
  { name: 'Python', icon: '🐍' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '💚' },
  { name: 'LangChain', icon: '🔗' },
  { name: 'OpenAI', icon: '🤖' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'FastAPI', icon: '⚡' },
  { name: 'Docker', icon: '🐳' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'Pandas', icon: '🐼' },
]

function SkillBar({ name, level, color, index, animate }) {
  return (
    <div className="skill-bar-wrap">
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            '--fill': `${level}%`,
            '--color': color,
            transitionDelay: animate ? `${index * 0.08}s` : '0s',
            width: animate ? `${level}%` : '0%',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" className={`skills-section ${inView ? 'visible' : ''}`} ref={ref}>
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-label">Technical Arsenal</span>
          <h2 className="section-title">Skills & <span>Technologies</span></h2>
        </div>

        <div className="skills-grid">
          {categories.map((cat, ci) => (
            <div key={cat.label} className="skill-category glass-card fade-up" style={{ transitionDelay: `${ci * 0.1}s` }}>
              <div className="cat-header">
                <div className="cat-dot" style={{ background: cat.color }} />
                <h3 className="cat-label">{cat.label}</h3>
              </div>
              <div className="bars-list">
                {cat.skills.map((s, i) => (
                  <SkillBar key={s.name} {...s} color={cat.color} index={i} animate={inView} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-cloud fade-up">
          <p className="tech-cloud-label">Tech Stack</p>
          <div className="tech-icons">
            {techIcons.map((t, i) => (
              <div key={t.name} className="tech-chip" style={{ animationDelay: `${i * 0.05}s` }}>
                <span className="tech-emoji">{t.icon}</span>
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
