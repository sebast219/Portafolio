import { useState } from 'react'
import { useInView } from '../hooks/useInView'
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

function Projects() {
  const [filtro, setFiltro] = useState('todos')
  const [ref, isInView] = useInView({ threshold: 0.08 })

  const proyectosFiltrados =
    filtro === 'todos' ? proyectosReales : proyectosReales.filter((p) => p.tecnologias.includes(filtro))

  return (
    <section id="proyectos" className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div ref={ref} className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-accent-violet bg-clip-text text-transparent transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Proyectos destacados
          </h2>
          <p
            className={`text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-8 transition-all duration-700 delay-100 ${
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
            <button
              type="button"
              onClick={() => setFiltro('todos')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${
                filtro === 'todos'
                  ? 'bg-gradient-to-r from-primary-500 to-accent-violet text-white shadow-lg shadow-primary-500/30'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-primary-500/50'
              }`}
            >
              Todos
            </button>
            {tecnologiasUnicas.map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => setFiltro(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${
                  filtro === tech
                    ? 'bg-gradient-to-r from-primary-500 to-accent-violet text-white shadow-lg shadow-primary-500/30'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-primary-500/50'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectosFiltrados.map((proyecto, index) => (
            <article
              key={proyecto.id}
              className="group relative bg-white dark:bg-slate-800/80 backdrop-blur border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-glow hover:-translate-y-2 hover:border-primary-500/50 transition-all duration-300 ease-smooth"
              style={{
                transitionDelay: `${Math.min(index * 50, 200)}ms`,
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative h-48 overflow-hidden">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                {proyecto.destacado && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary-500/90 text-white text-xs font-semibold">
                    <IconStar className="w-3.5 h-3.5" />
                    Destacado
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">{proyecto.titulo}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">{proyecto.descripcion}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proyecto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
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
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-violet text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5 transition-all"
                  >
                    <IconEye className="w-4 h-4" />
                    Ver proyecto
                  </a>
                  <button
                    type="button"
                    className="p-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-600 text-slate-500 hover:border-primary-500 hover:text-primary-500 transition-colors"
                    aria-label="Guardar"
                  >
                    <IconHeart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {proyectosFiltrados.length === 0 && (
          <p className="text-center py-12 text-slate-500 dark:text-slate-400">No hay proyectos con esta tecnología.</p>
        )}
      </div>
    </section>
  )
}

export default Projects
