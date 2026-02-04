import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useParallax } from '../hooks/useParallax'
import { IconEye, IconHeart, IconStar } from './Icons'

const proyectosReales = [
  {
    id: 1,
    titulo: 'E-commerce Moderno',
    descripcion:
      'Plataforma de comercio electrónico con carrito persistente, pasarela de pago integrada y panel de administración. Optimizado para móvil y SEO.',
    tecnologias: ['React', 'Next.js', 'Stripe', 'Tailwind CSS'],
    enlace: 'https://github.com',
    imagen: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    destacado: true,
  },
  {
    id: 2,
    titulo: 'Dashboard Analytics',
    descripcion:
      'Panel de análisis en tiempo real con gráficos interactivos, filtros dinámicos y exportación de datos. Integración con APIs REST.',
    tecnologias: ['TypeScript', 'React', 'Chart.js', 'Material UI'],
    enlace: 'https://github.com',
    imagen: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    destacado: false,
  },
  {
    id: 3,
    titulo: 'Social Media App',
    descripcion:
      'Aplicación social con feed en tiempo real, notificaciones push, chat integrado y sistema de likes/comentarios.',
    tecnologias: ['React Native', 'Firebase', 'Redux', 'Expo'],
    enlace: 'https://github.com',
    imagen: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800',
    destacado: false,
  },
  {
    id: 4,
    titulo: 'Portfolio Generator',
    descripcion:
      'Generador de portafolios dinámicos con plantillas personalizables, vista previa en vivo y exportación a estático.',
    tecnologias: ['Vue.js', 'Nuxt.js', 'SASS', 'Netlify'],
    enlace: 'https://github.com',
    imagen: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    destacado: false,
  },
  {
    id: 5,
    titulo: 'Task Management',
    descripcion:
      'Sistema de gestión de tareas con drag & drop, calendario integrado, notificaciones y colaboración en equipo.',
    tecnologias: ['Angular', 'TypeScript', 'NgRx', 'Socket.io'],
    enlace: 'https://github.com',
    imagen: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800',
    destacado: false,
  },
  {
    id: 6,
    titulo: 'Video Streaming',
    descripcion:
      'Plataforma de streaming con reproducción adaptativa, lista de reproducción, favoritos y recomendaciones personalizadas.',
    tecnologias: ['React', 'Node.js', 'WebRTC', 'MongoDB'],
    enlace: 'https://github.com',
    imagen: 'https://images.unsplash.com/photo-1574375927936-d5a98e8ffe85?auto=format&fit=crop&q=80&w=800',
    destacado: false,
  },
]

const tecnologiasUnicas = [...new Set(proyectosReales.flatMap((p) => p.tecnologias))]

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: Math.min(i * 0.05, 0.2),
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: 16,
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
  },
}

function Projects() {
  const [filtro, setFiltro] = useState('todos')
  const [selectedProject, setSelectedProject] = useState(null)
  const [ref, isInView] = useInView({ threshold: 0.08 })
  const parallaxOffset = useParallax(0.2)

  const proyectosFiltrados =
    filtro === 'todos' ? proyectosReales : proyectosReales.filter((p) => p.tecnologias.includes(filtro))

  const featuredProject = useMemo(() => {
    const featured = proyectosReales.find((p) => p.destacado)
    if (!featured) return null
    if (filtro === 'todos') return featured
    return featured.tecnologias.includes(filtro) ? featured : null
  }, [filtro])

  const proyectosParaGrid = useMemo(() => {
    if (!featuredProject) return proyectosFiltrados
    return proyectosFiltrados.filter((p) => p.id !== featuredProject.id)
  }, [featuredProject, proyectosFiltrados])

  useEffect(() => {
    if (!selectedProject) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  return (
    <section 
      id="proyectos" 
      className="py-20 sm:py-24 bg-black parallax-container"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div ref={ref} className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Proyectos destacados
          </h2>
          <p
            className={`text-gray-300 text-lg max-w-2xl mx-auto mb-8 transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Una selección de mis trabajos más recientes y desafiantes
          </p>
          <div
            className={`flex flex-wrap gap-2 justify-center transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <motion.button
              type="button"
              onClick={() => setFiltro('todos')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${
                filtro === 'todos'
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-black/50 text-gray-300 border border-white/20 hover:border-primary-500/50 glass-effect'
              }`}
              whileTap={{ scale: 0.98 }}
            >
              Todos
            </motion.button>
            {tecnologiasUnicas.map((tech) => (
              <motion.button
                key={tech}
                type="button"
                onClick={() => setFiltro(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${
                  filtro === tech
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-black/50 text-gray-300 border border-white/20 hover:border-primary-500/50 glass-effect'
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {tech}
              </motion.button>
            ))}
          </div>
        </div>

        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <motion.div
              layoutId={`project-card-${featuredProject.id}`}
              onClick={() => setSelectedProject(featuredProject)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedProject(featuredProject)
              }}
              role="button"
              tabIndex={0}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl overflow-hidden border border-white/30 bg-black/50 backdrop-blur shadow-sm hover:shadow-glow hover:border-primary-500/50 transition-all duration-300 ease-smooth cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
            >
              <div className="absolute inset-0">
                <img
                  src={featuredProject.imagen}
                  alt={featuredProject.titulo}
                  className="w-full h-full object-cover scale-[1.02] group-hover:scale-[1.06] transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />
              </div>

              <div className="relative p-6 sm:p-8 md:p-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/15 text-primary-300 border border-primary-500/30 text-xs font-semibold mb-4">
                  <IconStar className="w-4 h-4" />
                  Proyecto destacado
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{featuredProject.titulo}</h3>
                <p className="text-gray-200/90 max-w-2xl leading-relaxed mb-6">
                  {featuredProject.descripcion}
                </p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {featuredProject.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-100 border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={featuredProject.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5 transition-all"
                  >
                    <IconEye className="w-4 h-4" />
                    Ver proyecto
                  </a>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProject(featuredProject)
                    }}
                    className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/25 text-gray-100 hover:border-primary-500/50 hover:text-primary-300 transition-colors glass-effect"
                  >
                    Ver detalles
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {proyectosParaGrid.map((proyecto, index) => (
              <motion.article
                layout
                key={proyecto.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={index}
                whileHover={{ y: -8 }}
                layoutId={`project-card-${proyecto.id}`}
                onClick={() => setSelectedProject(proyecto)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setSelectedProject(proyecto)
                }}
                role="button"
                tabIndex={0}
                className="group relative bg-black/50 backdrop-blur border border-white/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-glow hover:border-primary-500/50 transition-all duration-300 ease-smooth parallax-element cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
              >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative h-48 overflow-hidden">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-50/60 to-transparent" />
                {proyecto.destacado && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary-500/90 text-white text-xs font-semibold">
                    <IconStar className="w-3.5 h-3.5" />
                    Destacado
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2">{proyecto.titulo}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{proyecto.descripcion}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proyecto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300 border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={proyecto.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5 transition-all"
                  >
                    <IconEye className="w-4 h-4" />
                    Ver proyecto
                  </a>
                  <button
                    type="button"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2.5 rounded-xl border-2 border-white/20 text-gray-400 hover:border-primary-500 hover:text-primary-400 transition-colors glass-effect"
                    aria-label="Guardar"
                  >
                    <IconHeart className="w-4 h-4" />
                  </button>
                </div>
              </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.button
                type="button"
                aria-label="Cerrar"
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              <motion.div
                layoutId={`project-card-${selectedProject.id}`}
                role="dialog"
                aria-modal="true"
                className="relative w-full max-w-4xl rounded-3xl overflow-hidden border border-white/20 bg-black/60 backdrop-blur-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={selectedProject.imagen}
                    alt={selectedProject.titulo}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="px-3 py-2 rounded-xl border border-white/20 text-gray-100 hover:border-primary-500/40 hover:text-primary-300 transition-colors glass-effect"
                      aria-label="Cerrar modal"
                    >
                      Cerrar
                    </button>
                  </div>
                  {selectedProject.destacado && (
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary-500/90 text-white text-xs font-semibold">
                      <IconStar className="w-3.5 h-3.5" />
                      Destacado
                    </span>
                  )}
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedProject.titulo}</h3>
                      <p className="text-gray-300 leading-relaxed">{selectedProject.descripcion}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <a
                        href={selectedProject.enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5 transition-all"
                      >
                        <IconEye className="w-4 h-4" />
                        Abrir
                      </a>
                      <button
                        type="button"
                        className="p-2.5 rounded-xl border-2 border-white/20 text-gray-300 hover:border-primary-500 hover:text-primary-300 transition-colors glass-effect"
                        aria-label="Guardar"
                      >
                        <IconHeart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {selectedProject.tecnologias.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-100 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { label: 'UI/UX', value: 'Diseño moderno y responsive' },
                      { label: 'Performance', value: 'Optimización y buenas prácticas' },
                      { label: 'Stack', value: 'Frontend + Integraciones' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/15 bg-white/5 p-4"
                      >
                        <div className="text-xs font-semibold text-primary-300 mb-1">{item.label}</div>
                        <div className="text-sm text-gray-200">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {proyectosFiltrados.length === 0 && (
          <p className="text-center py-12 text-gray-400">No hay proyectos con esta tecnología.</p>
        )}
      </div>
    </section>
  )
}

export default Projects
