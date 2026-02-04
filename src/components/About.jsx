import { useInView } from '../hooks/useInView'
import { useParallax } from '../hooks/useParallax'

function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const parallaxOffset = useParallax(0.1)

  return (
    <section 
      id="sobre-mi" 
      className="py-20 sm:py-20 bg-black parallax-container"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="max-w-2xl mx-auto">
          <h2
            ref={ref}
              className={`text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent transition-all duration-700 ${
               isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Sobre mí
          </h2>
          <div
            className={`space-y-5 text-gray-50 leading-relaxed transition-all duration-700 delay-150 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p>
              Full-Stack Developer con enfoque en soluciones modernas y escalables. Experiencia real en desarrollo de aplicaciones web completas utilizando Java/Spring Boot y Node.js/NestJS en el backend, junto con React, Next.js y TypeScript en el frontend.
            </p>

            <p>
              Destaco por mi capacidad de aprendizaje acelerado, autonomía en proyectos complejos y uso inteligente de herramientas de IA para optimizar desarrollo y automatización. Me apasiona crear productos funcionales, limpios y con impacto real.
            </p>

            <p>
              Actualmente profundizo en stack full-stack moderno (NestJS, Next.js, PostgreSQL) y construyo proyectos personales para portafolio. Busco oportunidades donde pueda contribuir desde el día 1 y seguir creciendo en equipo profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
