import { useState, useEffect } from 'react'
import { IconCode, IconHome, IconUser, IconFolder, IconCog, IconMail } from './Icons'

const navItems = [
  { href: '#inicio', label: 'Inicio', icon: IconHome },
  { href: '#sobre-mi', label: 'Sobre mí', icon: IconUser },
  { href: '#proyectos', label: 'Proyectos', icon: IconFolder },
  { href: '#habilidades', label: 'Habilidades', icon: IconCog },
  { href: '#contacto', label: 'Contacto', icon: IconMail },
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('inicio')
      const heroBottom = heroSection ? heroSection.offsetTop + heroSection.offsetHeight : 0
      const scrollPosition = window.scrollY
      
      // Change header style when we've scrolled past the Hero section
      setIsScrolled(scrollPosition > heroBottom - 100)
    }
    
    handleScroll() // Check initial position
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-500 ease-smooth ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 glass-effect'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex items-center justify-between">
          <a
            href="#inicio"
            className="flex items-center gap-2 font-bold text-lg text-white hover:opacity-90 transition-opacity"
          >
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-indigo flex items-center justify-center text-white shadow-lg shadow-primary-500/30">
              <IconCode className="w-5 h-5" />
            </span>
            <span className="bg-gradient-to-r from-primary-400 to-accent-blue bg-clip-text text-transparent">
              Sebastian Yepes
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/10 transition-colors glass-effect"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span
              className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                isScrolled ? 'bg-gray-50' : 'bg-gray-50'
              } ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                isScrolled ? 'bg-gray-50' : 'bg-gray-50'
              } ${
                isMobileMenuOpen ? 'opacity-0 scale-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                isScrolled ? 'bg-gray-50' : 'bg-gray-50'
              } ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-50 hover:text-primary-400 hover:bg-primary-500/10' 
                    : 'text-gray-50 hover:text-primary-400 hover:bg-white/10'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-smooth ${
            isMobileMenuOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-1 py-2 border-t border-white/10 glass-effect">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-50 hover:bg-primary-500/10 hover:text-primary-400' 
                    : 'text-gray-50 hover:bg-white/10 hover:text-primary-400'
                } glass-effect`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
