import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'motion/react'
import './Navbar.css'

const MenuIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
const XIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>

const links = ['About','Services','Skills','Projects','Experience','Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const navbarRef = useRef(null)
  const isInView = useInView(navbarRef, { once: true, margin: '-100px' })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
    setActive(id)
  }

  return (
    <motion.nav 
      ref={navbarRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="nav-inner container">
        <motion.button 
          className="nav-logo" 
          onClick={() => scrollTo('hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-label="PK Logo">
            <rect width="36" height="36" rx="10" fill="url(#logoGrad)"/>
            <text x="7" y="25" fontFamily="Syne, sans-serif" fontWeight="800" fontSize="18" fill="white">PK</text>
            <defs><linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36"><stop offset="0%" stopColor="#7c3aed"/><stop offset="100%" stopColor="#c084fc"/></linearGradient></defs>
          </svg>
          <span>Prem Kumar</span>
        </motion.button>
        <AnimatePresence>
          {open && (
            <motion.div 
              className={`nav-links nav-open`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {links.map((l, i) => (
                <motion.button 
                  key={l}
                  className={`nav-link ${active === l ? 'active' : ''}`}
                  onClick={() => scrollTo(l)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {l}
                </motion.button>
              ))}
              <motion.a 
                href="mailto:prem606kumar@gmail.com" 
                className="btn-primary nav-cta"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
        {!open && (
          <div className="nav-links">
            {links.map(l => (
              <motion.button 
                key={l}
                className={`nav-link ${active === l ? 'active' : ''}`}
                onClick={() => scrollTo(l)}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {l}
              </motion.button>
            ))}
            <motion.a 
              href="mailto:prem606kumar@gmail.com" 
              className="btn-primary nav-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </div>
        )}
        <motion.button 
          className="nav-toggle" 
          onClick={() => setOpen(!open)} 
          aria-label="Toggle menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {open ? <XIcon /> : <MenuIcon />}
        </motion.button>
      </div>
    </motion.nav>
  )
}
