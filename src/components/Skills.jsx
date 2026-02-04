import { useState, useEffect } from 'react'

const habilidadesData = [
  { nombre: 'React & Next.js', nivel: 95, categoria: 'frontend', icon: 'bi-react' },
  { nombre: 'TypeScript', nivel: 88, categoria: 'frontend', icon: 'bi-filetype-jsx' },
  { nombre: 'JavaScript ES6+', nivel: 92, categoria: 'frontend', icon: 'bi-filetype-js' },
  { nombre: 'Tailwind CSS', nivel: 90, categoria: 'frontend', icon: 'bi-palette2' },
  { nombre: 'HTML5 & CSS3', nivel: 95, categoria: 'frontend', icon: 'bi-filetype-html' },
  { nombre: 'Vue.js', nivel: 75, categoria: 'frontend', icon: 'bi-vuejs' },
  { nombre: 'Node.js', nivel: 80, categoria: 'backend', icon: 'bi-server' },
  { nombre: 'Python', nivel: 70, categoria: 'backend', icon: 'bi-filetype-py' },
  { nombre: 'Git & GitHub', nivel: 88, categoria: 'tools', icon: 'bi-git' },
  { nombre: 'Docker', nivel: 65, categoria: 'tools', icon: 'bi-box' },
  { nombre: 'Figma', nivel: 82, categoria: 'design', icon: 'bi-brush' },
  { nombre: 'Responsive Design', nivel: 94, categoria: 'design', icon: 'bi-phone' },
  { nombre: 'Performance Optimization', nivel: 85, categoria: 'skills', icon: 'bi-speedometer2' },
  { nombre: 'SEO', nivel: 78, categoria: 'skills', icon: 'bi-search' },
  { nombre: 'Testing (Jest)', nivel: 72, categoria: 'skills', icon: 'bi-check-circle' }
]

const categorias = [
  { id: 'todos', nombre: 'Todas', icon: 'bi-grid-3x3-gap' },
  { id: 'frontend', nombre: 'Frontend', icon: 'bi-laptop' },
  { id: 'backend', nombre: 'Backend', icon: 'bi-server' },
  { id: 'design', nombre: 'Diseño', icon: 'bi-palette' },
  { id: 'tools', nombre: 'Herramientas', icon: 'bi-tools' },
  { id: 'skills', nombre: 'Soft Skills', icon: 'bi-star' }
]

function Skills() {
  const [categoriaActiva, setCategoriaActiva] = useState('todos')
  const [habilidadesVisibles, setHabilidadesVisibles] = useState(false)

  const habilidadesFiltradas = categoriaActiva === 'todos' 
    ? habilidadesData 
    : habilidadesData.filter(h => h.categoria === categoriaActiva)

  useEffect(() => {
    const timer = setTimeout(() => setHabilidadesVisibles(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="habilidades" className="py-5 py-lg-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="section-title mb-4">Habilidades técnicas</h2>
          <p className="text-secondary lead mb-4">
            Tecnologías y herramientas que domino para crear experiencias web excepcionales
          </p>
          
          {/* Filtros de categorías */}
          <div className="d-flex flex-wrap gap-2 justify-content-center mb-5">
            {categorias.map(categoria => (
              <button
                key={categoria.id}
                onClick={() => setCategoriaActiva(categoria.id)}
                className={`skill-pill d-flex align-items-center gap-2 ${
                  categoriaActiva === categoria.id ? 'active' : ''
                }`}
              >
                <i className={`bi ${categoria.icon}`} />
                <span>{categoria.nombre}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="row g-4">
          {habilidadesFiltradas.map((habilidad, index) => (
            <div key={habilidad.nombre} className="col-md-6 col-lg-4">
              <div 
                className={`card border-0 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-3 p-4 shadow-sm transition-all duration-500 ${
                  habilidadesVisibles ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg d-flex align-items-center justify-content-center text-white me-3">
                    <i className={`bi ${habilidad.icon} fs-5`} />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="fw-semibold mb-1">{habilidad.nombre}</h5>
                    <div className="d-flex align-items-center gap-2">
                      <div className="flex-grow-1 bg-secondary bg-opacity-20 rounded-pill" style={{ height: '8px' }}>
                        <div 
                          className="bg-gradient-primary rounded-pill transition-all duration-1000 ease-out"
                          style={{ 
                            width: habilidadesVisibles ? `${habilidad.nivel}%` : '0%',
                            height: '100%',
                            transitionDelay: `${index * 100 + 500}ms`
                          }}
                        />
                      </div>
                      <span className="text-secondary small fw-medium">{habilidad.nivel}%</span>
                    </div>
                  </div>
                </div>
                
                {/* Nivel de experiencia */}
                <div className="mt-2">
                  <span className={`badge bg-opacity-10 rounded-pill px-3 py-1 ${
                    habilidad.nivel >= 90 ? 'bg-success text-success' :
                    habilidad.nivel >= 80 ? 'bg-primary text-primary' :
                    habilidad.nivel >= 70 ? 'bg-warning text-warning' :
                    'bg-secondary text-secondary'
                  }`}>
                    {habilidad.nivel >= 90 ? 'Experto' :
                     habilidad.nivel >= 80 ? 'Avanzado' :
                     habilidad.nivel >= 70 ? 'Intermedio' : 'Básico'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Estadísticas adicionales */}
        <div className="row mt-5 pt-5 border-top border-secondary border-opacity-25">
          <div className="col-md-3 col-6 text-center mb-4">
            <div className="display-4 fw-bold bg-gradient-primary text-transparent bg-clip-text">
              {habilidadesData.length}+
            </div>
            <p className="text-secondary">Tecnologías</p>
          </div>
          <div className="col-md-3 col-6 text-center mb-4">
            <div className="display-4 fw-bold bg-gradient-primary text-transparent bg-clip-text">
              50+
            </div>
            <p className="text-secondary">Proyectos</p>
          </div>
          <div className="col-md-3 col-6 text-center mb-4">
            <div className="display-4 fw-bold bg-gradient-primary text-transparent bg-clip-text">
              3+
            </div>
            <p className="text-secondary">Años de experiencia</p>
          </div>
          <div className="col-md-3 col-6 text-center mb-4">
            <div className="display-4 fw-bold bg-gradient-primary text-transparent bg-clip-text">
              100%
            </div>
            <p className="text-secondary">Compromiso</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
