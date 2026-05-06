import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'motion/react'
import './Projects.css'

const MapPinIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
const MsgIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
const FileIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
const GithubIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
const ChevronIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>

const projects = [
  {
    id: 1, title: 'AI Crime Awareness & Visualization', subtitle: 'Karachi Safety Intelligence Platform',
    category: 'AI + Data Science', Icon: MapPinIcon, color: '#7c3aed',
    desc: 'An AI-powered platform that analyzes, visualizes, and predicts crime patterns across Karachi. Provides interactive heatmaps, trend forecasts, and awareness dashboards to help citizens and authorities make informed safety decisions.',
    highlights: ['Interactive crime heatmaps across Karachi districts','ML-based crime pattern prediction engine','Real-time data visualization dashboard','Public awareness & alert notification system'],
    tech: ['Python', 'React', 'Pandas', 'Folium', 'Scikit-learn', 'FastAPI', 'PostgreSQL'], status: 'Featured Project',
  },
  {
    id: 2, title: 'RAG-Based Intelligent Chatbot', subtitle: 'Document-Aware Conversational AI',
    category: 'AI Engineering', Icon: MsgIcon, color: '#a78bfa',
    desc: 'A production-grade Retrieval-Augmented Generation chatbot that ingests custom documents and answers user questions with context-aware precision using vector databases and LLM backbone.',
    highlights: ['Custom document ingestion & chunking pipeline','Semantic vector search via embedding models','LLM-powered context-grounded responses','Multi-document knowledge base support'],
    tech: ['Python', 'LangChain', 'OpenAI', 'FAISS', 'FastAPI', 'React', 'ChromaDB'], status: 'AI Agent',
  },
  {
    id: 3, title: 'AI Document Humanizer Agent', subtitle: 'Autonomous Document Rewriting System',
    category: 'AI Automation', Icon: FileIcon, color: '#38bdf8',
    desc: 'An autonomous AI agent that transforms AI-generated text into natural human-sounding content. Detects robotic patterns, rewrites with varied structure, and ensures output passes AI detection tools.',
    highlights: ['AI detection bypass via intelligent rewriting','Tone & style customization engine','Multi-pass refinement pipeline','Batch document processing support'],
    tech: ['Python', 'LangChain', 'GPT-4', 'Agents', 'FastAPI', 'React'], status: 'AI Automation',
  },
]

function ProjectCard({ project, index }) {
  const [flipped, setFlipped] = useState(false)
  const { Icon } = project
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-50px' })
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="project-card"
      style={{ '--pc': project.color, animationDelay: `${index * 0.12}s` }}
    >
      <motion.div 
        className={`card-inner ${flipped ? 'flipped' : ''}`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div 
          className="card-front glass-card"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="project-top">
            <div className="project-icon-wrap"><Icon /></div>
            <span className="project-status tag">{project.status}</span>
          </div>
          <div className="project-category">{project.category}</div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-desc">{project.desc}</p>
          <div className="project-tech">{project.tech.slice(0,5).map(t=><span key={t} className="tech-tag">{t}</span>)}{project.tech.length>5&&<span className="tech-tag">+{project.tech.length-5}</span>}</div>
          <div className="project-actions">
            <motion.a 
              href="https://github.com/prem64815-creator" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-ghost proj-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GithubIcon/> Code
            </motion.a>
            <motion.button 
              className="btn-primary proj-btn" 
              onClick={()=>setFlipped(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Details <ChevronIcon/>
            </motion.button>
          </div>
        </motion.div>
        <motion.div 
          className="card-back glass-card"
          initial={{ rotateY: 180 }}
          animate={{ rotateY: flipped ? 0 : -180 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="back-header">
            <h3 className="project-title">{project.title}</h3>
            <motion.button 
              className="back-close" 
              onClick={()=>setFlipped(false)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close"
            >
              ✕
            </motion.button>
          </div>
          <p className="back-label">Key Features</p>
          <ul className="highlights-list">{project.highlights.map(h=><motion.li key={h} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="highlight-item"><span className="highlight-dot"/>{h}</motion.li>)}</ul>
          <p className="back-label" style={{marginTop:'var(--space-4)'}}>Full Stack</p>
          <div className="project-tech">{project.tech.map(t=><span key={t} className="tech-tag">{t}</span>)}</div>
          <motion.a 
            href="https://github.com/prem64815-creator" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
            style={{marginTop:'auto',alignSelf:'flex-start'}}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <GithubIcon/> View on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header fade-up"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Featured Work</span>
          <h2 className="section-title">Projects & <span>Builds</span></h2>
          <p className="section-sub">Real-world AI systems and applications built from scratch</p>
        </motion.div>
        <div className="projects-grid">
          {projects.map((p,i)=><ProjectCard key={p.id} project={p} index={i}/>)}
        </div>
        <motion.div 
          className="projects-cta fade-up"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p>More projects on GitHub</p>
          <motion.a 
            href="https://github.com/prem64815-creator" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-ghost"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GithubIcon/> View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
