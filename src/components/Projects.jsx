import { useState } from 'react'

const proyectosReales = [
  {
    id: 1,
    titulo: 'E-commerce Moderno',
    descripcion: 'Plataforma de comercio electrónico con carrito persistente, pasarela de pago integrada y panel de administración. Optimizado para móvil y SEO.',
    tecnologias: ['React', 'Next.js', 'Stripe', 'Tailwind CSS'],
    enlace: 'https://github.com',
    imagen: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    destacado: true
  },
  {
    id: 2,
    titulo: 'Dashboard Analytics',
    descripcion: 'Panel de análisis en tiempo real con gráficos interactivos, filtros dinámicos y exportación de datos. Integración con APIs REST.',
    tecnologias: ['TypeScript', 'React', 'Chart.js', 'Material UI'],
    enlace: 'https://github.com',
    imagen: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    destacado: false
  },
  {
    id: 3,
    titulo: 'Social Media App',
    descripcion: 'Aplicación social con feed en tiempo real, notificaciones push, chat integrado y sistema de likes/comentarios.',
    tecnologias: ['React Native', 'Firebase', 'Redux', 'Expo'],
    enlace: 'https://github.com',
    imagen: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800',
    destacado: false
  },
  {
    id: 4,
    titulo: 'Portfolio Generator',
    descripcion: 'Generador de portafolios dinámicos con plantillas personalizables, vista previa en vivo y exportación a estático.',
    tecnologias: ['Vue.js', 'Nuxt.js', 'SASS', 'Netlify'],
    enlace: 'https://github.com',
    imagen: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    destacado: false
  },
  {
    id: 5,
    titulo: 'Task Management',
    descripcion: 'Sistema de gestión de tareas con drag & drop, calendario integrado, notificaciones y colaboración en equipo.',
    tecnologias: ['Angular', 'TypeScript', 'NgRx', 'Socket.io'],
    enlace: 'https://github.com',
    imagen: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800',
    destacado: false
  },
  {
    id: 6,
    titulo: 'Video Streaming',
    descripcion: 'Plataforma de streaming con reproducción adaptativa, lista de reproducción, favoritos y recomendaciones personalizadas.',
    tecnologias: ['React', 'Node.js', 'WebRTC', 'MongoDB'],
    enlace: 'https://github.com',
    imagen: 'https://images.unsplash.com/photo-1574375927936-d5a98e8ffe85?auto=format&fit=crop&q=80&w=800',
    destacado: false
  }
]

function Projects() {
  const [filtro, setFiltro] = useState('todos')
  const tecnologiasUnicas = [...new Set(proyectosReales.flatMap(p => p.tecnologias))]
  
  const proyectosFiltrados = filtro === 'todos' 
    ? proyectosReales 
    : proyectosReales.filter(p => p.tecnologias.includes(filtro))

  return (
    <section id="proyectos" className="py-5 py-lg-5 bg-light-subtle">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="section-title mb-4">Proyectos destacados</h2>
          <p className="text-secondary lead mb-4">
            Una selección de mis trabajos más recientes y desafiantes
          </p>
          
          {/* Filtros de tecnologías */}
          <div className="d-flex flex-wrap gap-2 justify-content-center mb-5">
            <button
              onClick={() => setFiltro('todos')}
              className={`skill-pill ${filtro === 'todos' ? 'active' : ''}`}
            >
              Todos
            </button>
            {tecnologiasUnicas.map(tech => (
              <button
                key={tech}
                onClick={() => setFiltro(tech)}
                className={`skill-pill ${filtro === tech ? 'active' : ''}`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
        
        <div className="row g-4">
          {proyectosFiltrados.map((proyecto, index) => (
            <div key={proyecto.id} className="col-md-6 col-lg-4">
              <article 
                className="card card-project h-100 shadow-sm overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                  <img 
                    src={proyecto.imagen} 
                    alt={proyecto.titulo}
                    className="w-100 h-100 object-fit-cover"
                    loading="lazy"
                  />
                  {proyecto.destacado && (
                    <div className="position-absolute top-3 end-3">
                      <span className="badge bg-primary bg-opacity-90 text-white px-3 py-2 rounded-pill">
                        <i className="bi bi-star-fill me-1" /> Destacado
                      </span>
                    </div>
                  )}
                  <div className="position-absolute bottom-0 start-0 end-0 bg-gradient-to-t from-dark/50 to-transparent h-50" />
                </div>
                
                <div className="card-body p-4">
                  <h3 className="card-title h5 fw-semibold mb-3">
                    {proyecto.titulo}
                  </h3>
                  <p className="card-text text-secondary small mb-4">
                    {proyecto.descripcion}
                  </p>
                  
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {proyecto.tecnologias.map((tech) => (
                      <span
                        key={tech}
                        className="skill-pill"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="d-flex gap-2">
                    <a 
                      href={proyecto.enlace} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-modern btn-sm flex-fill text-white"
                    >
                      <i className="bi bi-eye me-1" /> Ver proyecto
                    </a>
                    <button className="btn btn-outline-modern btn-sm">
                      <i className="bi bi-heart" />
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
        
        {proyectosFiltrados.length === 0 && (
          <div className="text-center py-5">
            <p className="text-secondary">No se encontraron proyectos con esta tecnología.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
