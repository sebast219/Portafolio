import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useParallax } from '../hooks/useParallax'

const habilidadesData = [
  // Frontend
  { nombre: 'React', nivel: 78, categoria: 'frontend', icon: '⚛️' },
  { nombre: 'Next.js', nivel: 65, categoria: 'frontend', icon: '▲' },
  { nombre: 'TypeScript', nivel: 70, categoria: 'frontend', icon: '📘' },
  { nombre: 'JavaScript (ES6+)', nivel: 85, categoria: 'frontend', icon: '🟨' },
  { nombre: 'Angular', nivel: 75, categoria: 'frontend', icon: '🅰️' },
  { nombre: 'Tailwind CSS', nivel: 68, categoria: 'frontend', icon: '🎨' },
  { nombre: 'HTML5 & CSS3', nivel: 90, categoria: 'frontend', icon: '📄' },

  // Backend
  { nombre: 'Java 17/21', nivel: 82, categoria: 'backend', icon: '☕' },
  { nombre: 'Spring Boot', nivel: 80, categoria: 'backend', icon: '🌱' },
  { nombre: 'Node.js', nivel: 70, categoria: 'backend', icon: '🟢' },
  { nombre: 'NestJS', nivel: 60, categoria: 'backend', icon: '🪺' },
  { nombre: 'Express', nivel: 65, categoria: 'backend', icon: '🚀' },

  // Bases de Datos
  { nombre: 'PostgreSQL', nivel: 72, categoria: 'database', icon: '🐘' },
  { nombre: 'SQL (Queries & Joins)', nivel: 78, categoria: 'database', icon: '📊' },
  { nombre: 'JPA/Hibernate', nivel: 75, categoria: 'database', icon: '🗄️' },

  // Herramientas y Otros
  { nombre: 'Git & GitHub', nivel: 85, categoria: 'tools', icon: '📦' },
  { nombre: 'Docker', nivel: 65, categoria: 'tools', icon: '🐳' },
  { nombre: 'n8n (Automatización)', nivel: 55, categoria: 'tools', icon: '🔗' },
  { nombre: 'Figma (UX/UI básico)', nivel: 60, categoria: 'design', icon: '✏️' },
  { nombre: 'Responsive Design', nivel: 85, categoria: 'design', icon: '📱' },
  { nombre: 'REST APIs', nivel: 80, categoria: 'skills', icon: '🔌' },
  { nombre: 'Autonomía y aprendizaje rápido', nivel: 90, categoria: 'skills', icon: '⚡' },
]

const categorias = [
  { id: 'todos', nombre: 'Todas', icon: '▦' },
  { id: 'frontend', nombre: 'Frontend', icon: '💻' },
  { id: 'backend', nombre: 'Backend', icon: '⚙️' },
  { id: 'database', nombre: 'Bases de Datos', icon: '🗄️' },
  { id: 'tools', nombre: 'Herramientas', icon: '🔧' },
  { id: 'design', nombre: 'Diseño', icon: '🎨' },
  { id: 'skills', nombre: 'Otras', icon: '⭐' },
]

const skillCardVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: Math.min(i * 0.045, 0.22),
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: 14,
    transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
  },
}

function Skills() {
  const [categoriaActiva, setCategoriaActiva] = useState('todos')
  const [mounted, setMounted] = useState(false)
  const [ref, isInView] = useInView({ threshold: 0.08 })
  const parallaxOffset = useParallax(0.15)

  const habilidadesFiltradas =
    categoriaActiva === 'todos'
      ? habilidadesData
      : habilidadesData.filter((h) => h.categoria === categoriaActiva)

  useEffect(() => {
    if (isInView) setMounted(true)
  }, [isInView])

  return (
    <section 
      id="habilidades" 
      className="py-20 sm:py-24 bg-black parallax-container"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div ref={ref} className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Habilidades Técnicas
          </h2>
          <p
            className={`text-gray-50 text-lg max-w-2xl mx-auto mb-8 transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Tecnologías y herramientas que domino como Full-Stack Developer junior+
          </p>
          <div
            className={`flex flex-wrap gap-2 justify-center mb-6 transition-all duration-700 delay-150 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {['React', 'Tailwind CSS', 'Framer Motion'].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-gray-50 border border-white/20"
              >
                {t}
              </span>
            ))}
          </div>
          <div
            className={`flex flex-wrap gap-2 justify-center transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {categorias.map((cat) => (
              <motion.button
                key={cat.id}
                type="button"
                onClick={() => setCategoriaActiva(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${
                  categoriaActiva === cat.id
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-black/50 text-gray-50 hover:border-primary-500/50 border border-white/20 glass-effect'
                }`}
                whileTap={{ scale: 0.98 }}
              >
                <span>{cat.icon}</span>
                {cat.nombre}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {habilidadesFiltradas.map((habilidad, index) => (
              <motion.div
                layout
                key={habilidad.nombre}
                variants={skillCardVariants}
                initial="hidden"
                animate={mounted ? 'visible' : 'hidden'}
                exit="exit"
                custom={index}
                whileHover={{ y: -6 }}
                className="rounded-2xl p-5 bg-black/50 backdrop-blur border border-white/20 shadow-sm hover:shadow-glow hover:border-primary-500/40 transition-all duration-500 ease-smooth glass-effect parallax-element"
              >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-xl text-white shadow-lg shadow-primary-500/20">
                  {habilidad.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-white truncate">{habilidad.nombre}</h5>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-1000 ease-out"
                        style={{
                          width: mounted ? `${habilidad.nivel}%` : '0%',
                          transitionDelay: `${index * 80 + 200}ms`,
                        }}
                      />
                    </div>
                    <span className="text-gray-50 text-sm font-medium w-10">
                      {habilidad.nivel}%
                    </span>
                  </div>
                </div>
              </div>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-50 border border-white/20`}
              >
                {habilidad.nivel >= 85 ? 'Avanzado' : habilidad.nivel >= 75 ? 'Intermedio+' : habilidad.nivel >= 65 ? 'Intermedio' : 'Básico'}
              </span>
              </motion.div>
            
            ))}
          </AnimatePresence>
        </motion.div>

        <div
          className={`mt-16 pt-12 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center transition-all duration-700 delay-300${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {[
            { valor: `${habilidadesData.length}+`, label: 'Tecnologías' },
            { valor: '50+', label: 'Proyectos' },
            { valor: '3+', label: 'Años de experiencia' },
            { valor: '100%', label: 'Compromiso' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                {stat.valor}
              </div>
              <p className="text-gray-50 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
