import { useState, useEffect } from 'react'
import { IconCode, IconHome, IconUser, IconFolder, IconCog, IconMail, IconMoon, IconSun } from './Icons'

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
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    const saved = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(saved)
    document.documentElement.classList.toggle('dark', saved === 'dark')
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem('theme', next)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-lg shadow-slate-200/20 dark:shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex items-center justify-between">
          <a
            href="#inicio"
            className="flex items-center gap-2 font-bold text-lg text-slate-800 dark:text-slate-100 hover:opacity-90 transition-opacity"
          >
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-violet flex items-center justify-center text-white shadow-lg shadow-primary-500/30">
              <IconCode className="w-5 h-5" />
            </span>
            <span className="bg-gradient-to-r from-primary-500 to-accent-violet bg-clip-text text-transparent">
              Sebastian Yepes
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span
              className={`w-6 h-0.5 rounded-full bg-slate-700 dark:bg-slate-300 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 rounded-full bg-slate-700 dark:bg-slate-300 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0 scale-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 rounded-full bg-slate-700 dark:bg-slate-300 transition-all duration-300 ${
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
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-primary-500 hover:bg-primary-500/10 dark:hover:bg-primary-400/10 transition-all duration-200"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              className="ml-2 flex items-center gap-2 px-3 py-2 rounded-xl border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-200"
              aria-label={theme === 'light' ? 'Activar tema oscuro' : 'Activar tema claro'}
            >
              {theme === 'light' ? <IconMoon className="w-4 h-4" /> : <IconSun className="w-4 h-4" />}
              <span className="hidden lg:inline">{theme === 'light' ? 'Oscuro' : 'Claro'}</span>
            </button>
          </nav>
        </div>

        {/* Mobile nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-smooth ${
            isMobileMenuOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-1 py-2 border-t border-slate-200 dark:border-slate-700">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary-500 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                toggleTheme()
                setIsMobileMenuOpen(false)
              }}
              className="flex items-center gap-2 px-4 py-3 rounded-xl border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all"
            >
              {theme === 'light' ? <IconMoon className="w-5 h-5" /> : <IconSun className="w-5 h-5" />}
              {theme === 'light' ? 'Tema oscuro' : 'Tema claro'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
