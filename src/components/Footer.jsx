import { IconGithub, IconLinkedin, IconMail } from './Icons'

function Footer() {
  const año = new Date().getFullYear()

  return (
    <footer className="py-8 bg-black text-gray-400 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Izquierda: Derechos y crédito */}
          <p className="text-sm">
            © {año} Sebastian Yepes. Todos los derechos reservados.
          </p>

          {/* Centro o derecha: Redes sociales */}
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/tuusuario" // cambia por tu LinkedIn real
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <IconLinkedin className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/sebast219" // tu GitHub real
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <IconGithub className="w-5 h-5" />
            </a>

            <a
              href="mailto:tuemail@gmail.com" // tu email real
              className="hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <IconMail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
