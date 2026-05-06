import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { TypeAnimation } from 'react-type-animation'
import premPhoto from '../assets/prem-photo.jpg'
import './Hero.css'

const GithubIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
const LinkedinIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
const MailIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
const ArrowDownIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-orbs">
        <div className="orb orb-1"/><div className="orb orb-2"/><div className="orb orb-3"/>
      </div>
      <div className="container hero-inner">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge"
          >
            <span className="pulse-dot"/>
            Available for opportunities
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-name"
          >
            <span className="hero-name-first">Prem</span>
            <span className="hero-name-last"> Kumar</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-typewriter"
          >
            <TypeAnimation sequence={['AI Engineer',2000,'Full-Stack Developer',2000,'Python Developer',2000,'Data Scientist',2000,'Software Engineer',2000]} wrapper="span" speed={50} repeat={Infinity} className="typewriter-text"/>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-desc"
          >
            Building intelligent systems that bridge the gap between AI innovation and production-grade software. Specializing in AI agents, RAG pipelines, and full-stack applications from Karachi, Pakistan.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-actions"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary" 
              onClick={() => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}
            >
              View Projects <ArrowDownIcon />
            </motion.button>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:prem606kumar@gmail.com" 
              className="btn-ghost"
            >
              <MailIcon /> Contact Me
            </motion.a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hero-socials"
          >
            <motion.a 
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="https://github.com/prem64815-creator" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn" 
              aria-label="GitHub"
            >
              <GithubIcon />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="https://www.linkedin.com/in/prem-kumar-b4b3ba408/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn" 
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="mailto:prem606kumar@gmail.com" 
              className="social-btn" 
              aria-label="Email"
            >
              <MailIcon />
            </motion.a>
            <div className="social-divider"/>
            <span className="hero-location">📍 Karachi, PK</span>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-visual"
        >
          <div className="photo-container">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="photo-ring ring-1"
            />
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="photo-ring ring-2"
            />
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="photo-ring ring-3"
            />
            <div className="photo-glow"/>
            <div className="photo-frame">
              <img src={premPhoto} alt="Prem Kumar — AI-Driven Full-Stack Developer" className="hero-photo" width="400" height="480"/>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="photo-badge badge-ai"
            >
              <span className="badge-icon">🤖</span>
              <div>
                <div className="badge-title">AI Engineer</div>
                <div className="badge-sub">Building Agents</div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="photo-badge badge-dev"
            >
              <span className="badge-icon">⚡</span>
              <div>
                <div className="badge-title">Full-Stack</div>
                <div className="badge-sub">React & Python</div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="photo-badge badge-cs"
            >
              <span className="badge-icon">🎓</span>
              <div>
                <div className="badge-title">CS Graduate</div>
                <div className="badge-sub">Computer Science</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="hero-scroll-hint"
      >
        <div className="scroll-line"/>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  )
}
