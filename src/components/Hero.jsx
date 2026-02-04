import { useState, useEffect } from 'react'

function Hero() {
  const [textIndex, setTextIndex] = useState(0)
  const roles = ['Desarrollador Frontend', 'Creador de Experiencias', 'Ingeniero Web']

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="inicio" className="min-vh-100 d-flex align-items-center hero-gradient py-5 position-relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div className="position-absolute top-25 start-10 w-75 h-75 rounded-circle bg-primary opacity-5 animate-float" />
        <div className="position-absolute bottom-25 end-10 w-50 h-50 rounded-circle bg-secondary opacity-5 animate-float" style={{ animationDelay: '1s' }} />
        <div className="position-absolute top-50 end-25 w-25 h-25 rounded-circle bg-accent opacity-5 animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container position-relative z-1">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="animate-fade-in-up">
              <p className="text-primary text-uppercase fw-semibold small mb-3">
                <i className="bi bi-code-slash me-2" />
                <span className="d-inline-block transition-all duration-300">{roles[textIndex]}</span>
              </p>
              <h1 className="display-2 display-lg-1 fw-bold mb-4">
                Hola, soy <span className="bg-gradient-primary text-transparent bg-clip-text">Sebastian Yepes</span>
              </h1>
              <p className="lead text-secondary mb-5 fs-5">
                Transformo ideas en <span className="fw-semibold text-primary">experiencias digitales</span> modernas, rápidas y accesibles.
                <br />
                <span className="text-muted">React · TypeScript · Tailwind CSS · Performance obsesivo</span>
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <a href="#proyectos" className="btn btn-modern text-white px-5 py-3 shadow-lg">
                  <i className="bi bi-folder2-open me-2" /> Ver proyectos
                </a>
                <a href="#contacto" className="btn btn-outline-modern border-2 px-5 py-3 rounded-3">
                  <i className="bi bi-envelope me-2" /> Contactar
                </a>
              </div>
            </div>
            
            {/* Indicadores sociales */}
            <div className="mt-5 d-flex gap-3 justify-content-center">
              <a href="https://github.com" className="text-secondary hover-text-primary transition-colors duration-300 fs-5">
                <i className="bi bi-github" />
              </a>
              <a href="https://linkedin.com" className="text-secondary hover-text-primary transition-colors duration-300 fs-5">
                <i className="bi bi-linkedin" />
              </a>
              <a href="https://twitter.com" className="text-secondary hover-text-primary transition-colors duration-300 fs-5">
                <i className="bi bi-twitter-x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
