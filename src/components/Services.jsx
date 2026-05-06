import { useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'motion/react'
import { useSpring, animated } from '@react-spring/web'
import './Services.css'

const icons = {
  Brain: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.66Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.66Z"/></svg>,
  Globe: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>,
  BarChart: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>,
  Code: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>,
  Bot: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>,
  Database: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>,
}

const services = [
  { iconKey: 'Brain', title: 'AI Engineering', subtitle: 'Intelligent Systems', desc: 'Designing and deploying AI agents, RAG pipelines, LLM integrations, and autonomous systems that solve complex real-world problems.', tags: ['LangChain', 'OpenAI', 'RAG', 'Agents'], color: '#7c3aed' },
  { iconKey: 'Globe', title: 'Full-Stack Development', subtitle: 'End-to-End Products', desc: 'Building production-grade web applications from pixel-perfect frontends to scalable Python backends with modern frameworks.', tags: ['React', 'FastAPI', 'Node.js', 'PostgreSQL'], color: '#a78bfa' },
  { iconKey: 'BarChart', title: 'Data Science', subtitle: 'Insights & Visualization', desc: 'Transforming raw data into actionable intelligence through statistical modeling, visualization dashboards, and predictive analytics.', tags: ['Pandas', 'Matplotlib', 'Scikit-learn', 'SQL'], color: '#38bdf8' },
  { iconKey: 'Code', title: 'Python Development', subtitle: 'Automation & Scripting', desc: 'Crafting powerful Python solutions — from web scrapers and automation scripts to backend APIs and data pipelines.', tags: ['Python', 'Django', 'Flask', 'Celery'], color: '#c084fc' },
  { iconKey: 'Bot', title: 'AI Automation', subtitle: 'Workflow Intelligence', desc: 'Building intelligent automation systems that eliminate repetitive tasks, humanize documents, and streamline business operations.', tags: ['AI Agents', 'Zapier', 'n8n', 'LLMs'], color: '#34d399' },
  { iconKey: 'Database', title: 'Software Engineering', subtitle: 'Architecture & Systems', desc: 'Designing robust software architectures with clean code principles, scalable databases, and production-ready deployment strategies.', tags: ['System Design', 'APIs', 'Docker', 'Git'], color: '#f59e0b' },
]

function ServiceCard({ service, index }) {
  const Icon = icons[service.iconKey]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  // Physics-based 3D tilt with React Spring
  const [{ xy }, api] = useSpring(() => ({ xy: [0, 0], config: { mass: 5, tension: 350, friction: 40 } }))
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    api.start({ xy: [x, y] })
  }
  
  const handleMouseLeave = () => api.start({ xy: [0, 0] })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="service-card glass-card"
      style={{ 
        '--card-color': service.color, 
        animationDelay: `${index * 0.1}s`,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <animated.div
        style={{
          transform: xy.to((x, y) => `perspective(1000px) rotateX(${y * -8}deg) rotateY(${x * 8}deg) translateZ(10px)`),
        }}
      >
        <div className="service-icon-wrap"><Icon /><div className="service-icon-glow"/></div>
        <div className="service-num">0{index + 1}</div>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-subtitle">{service.subtitle}</p>
        <p className="service-desc">{service.desc}</p>
        <div className="service-tags">{service.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
        <div className="service-arrow">→</div>
      </animated.div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section id="services" className="services-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header fade-up"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">What I Do</span>
          <h2 className="section-title">Services & <span>Expertise</span></h2>
          <p className="section-sub">Comprehensive solutions across AI, development, and data science</p>
        </motion.div>
        <div className="services-grid">
          {services.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
