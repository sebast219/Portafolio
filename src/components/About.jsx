import { useInView } from '../hooks/useInView'

function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section id="sobre-mi" className="py-20 sm:py-24 bg-white dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="max-w-3xl mx-auto">
          <h2
            ref={ref}
            className={`text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-accent-violet bg-clip-text text-transparent transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Sobre mí
          </h2>
          <div
            className={`space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed transition-all duration-700 delay-150 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p>
              Aquí puedes escribir una breve presentación: tu formación, experiencia y qué te apasiona del desarrollo
              web. Este bloque es ideal para conectar con quien visita tu portafolio.
            </p>
            <p>
              Puedes añadir más párrafos, enlaces a tu CV o redes profesionales.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
