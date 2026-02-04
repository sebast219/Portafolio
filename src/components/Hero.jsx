import { useState, useEffect, useMemo, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconFolderOpen, IconMail, IconGithub, IconLinkedin } from './Icons'
import { useParallax } from '../hooks/useParallax'

const roles = ['Desarrollador Fullstack', 'Creador de Experiencias Digitales UX/UI', 'DEVELOPERS BACKEND Y FRONTEND']

function Hero() {
  const [textIndex, setTextIndex] = useState(0)
  const parallaxOffset = useParallax(0.3)
  const heroRef = useRef(null)
  const particles = useMemo(
    () =>
      [...Array(20)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        speed: 0.2 + Math.random() * 0.3,
        delay: `${Math.random() * 5}s`,
      })),
    []
  )

  useEffect(() => {
    const id = setInterval(() => setTextIndex((i) => (i + 1) % roles.length), 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden parallax-container"
      style={{
        background: `linear-gradient(135deg, #000000 0%, #0A0A0A 50%, #141414 100%)`
      }}
    >
      {/* Parallax background elements */}
      <div 
        className="absolute inset-0 parallax-element"
        style={{
          transform: `translateY(${parallaxOffset * 0.5}px)`,
          background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
        }}
      />
      <div 
        className="absolute inset-0 parallax-element"
        style={{
          transform: `translateY(${parallaxOffset * 0.3}px)`,
          background: 'radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)'
        }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full parallax-slow"
            style={{
              left: p.left,
              top: p.top,
              transform: `translateY(${parallaxOffset * p.speed}px)`,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div> 
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="inline-flex items-center gap-2 text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={roles[textIndex]}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {roles[textIndex]}
                </motion.span>
              </AnimatePresence>
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Hola, soy Sebastian
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Transformo ideas en{' '}
              <span className="font-semibold text-primary-400">experiencias digitales</span>{' '}
              modernas, rápidas y accesibles.
              <br />
              <span className="text-gray-400 text-base mt-2 inline-block">
                React · TypeScript · Tailwind CSS · Performance obsesivo
              </span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="#proyectos"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-indigo text-white font-semibold shadow-lg shadow-primary-500/30 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconFolderOpen className="w-5 h-5" />
                Ver proyectos
              </motion.a>
              <motion.a
                href="#contacto"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-primary-500 text-primary-400 font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconMail className="w-5 h-5" />
                Contactar
              </motion.a>
            </div>
            <div className="mt-10 flex justify-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-white/10 glass-effect"
                aria-label="GitHub"
              >
                <IconGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-white/10 glass-effect"
                aria-label="LinkedIn"
              >
                <IconLinkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
