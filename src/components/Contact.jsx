import { useInView } from '../hooks/useInView'
import { IconMail, IconLinkedin } from './Icons'
import { useParallax } from '../hooks/useParallax'

function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const parallaxOffset = useParallax(0.1)

  return (
    <section 
      id="contacto" 
      className="py-20 sm:py-24 bg-black parallax-container"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div ref={ref} className="max-w-2xl mx-auto text-center">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Contacto
          </h2>
          <p
            className={`text-gray-300 mb-8 transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            ¿Tienes un proyecto en mente? Escríbeme y hablamos.
          </p>
          <div
            className={`flex flex-wrap gap-4 justify-center transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="mailto:tu@email.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-indigo text-white font-semibold shadow-lg shadow-primary-500/30 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-300 glass-effect"
            >
              <IconMail className="w-5 h-5" />
              Enviar email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-primary-500 text-primary-400 font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5 glass-effect"
            >
              <IconLinkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
