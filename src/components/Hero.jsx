import { useState, useEffect } from 'react'
import { IconFolderOpen, IconMail, IconGithub, IconLinkedin } from './Icons'

const roles = ['Desarrollador Frontend', 'Creador de Experiencias', 'Ingeniero Web']

function Hero() {
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTextIndex((i) => (i + 1) % roles.length), 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Fondo con gradiente animado */}
      <div
        className="absolute inset-0 bg-[length:300%_300%] animate-gradient"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(139,92,246,0.06) 35%, rgba(236,72,153,0.04) 70%, rgba(99,102,241,0.06) 100%)',
        }}
      />
      <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-primary-400/10 animate-float" />
      <div className="absolute bottom-[20%] right-[10%] w-56 h-56 rounded-full bg-accent-violet/10 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-[25%] w-32 h-32 rounded-full bg-accent-pink/10 animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <p className="inline-flex items-center gap-2 text-primary-500 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="transition-all duration-500">{roles[textIndex]}</span>
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-800 dark:text-slate-100 mb-6 leading-tight">
              Hola, soy{' '}
              <span className="bg-gradient-to-r from-primary-500 via-accent-violet to-accent-pink bg-clip-text text-transparent">
                Sebastian Yepes
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Transformo ideas en{' '}
              <span className="font-semibold text-primary-500 dark:text-primary-400">experiencias digitales</span>{' '}
              modernas, rápidas y accesibles.
              <br />
              <span className="text-slate-500 dark:text-slate-500 text-base mt-2 inline-block">
                React · TypeScript · Tailwind CSS · Performance obsesivo
              </span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#proyectos"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-violet text-white font-semibold shadow-lg shadow-primary-500/30 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <IconFolderOpen className="w-5 h-5" />
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-primary-500 text-primary-500 dark:text-primary-400 font-semibold hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <IconMail className="w-5 h-5" />
                Contactar
              </a>
            </div>
            <div className="mt-10 flex justify-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="GitHub"
              >
                <IconGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="LinkedIn"
              >
                <IconLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
