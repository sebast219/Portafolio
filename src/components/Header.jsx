import { useState, useEffect } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const navItems = [
    { href: '#inicio', label: 'Inicio', icon: 'bi-house' },
    { href: '#sobre-mi', label: 'Sobre mí', icon: 'bi-person' },
    { href: '#proyectos', label: 'Proyectos', icon: 'bi-folder' },
    { href: '#habilidades', label: 'Habilidades', icon: 'bi-gear' },
    { href: '#contacto', label: 'Contacto', icon: 'bi-envelope' }
  ]

  return (
    <header className={`navbar navbar-expand-lg navbar-blur fixed-top py-3 transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : ''
    }`}>
      <div className="container">
        <a href="#inicio" className="navbar-brand fw-bold fs-4 d-flex align-items-center gap-2">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg d-flex align-items-center justify-content-center text-white">
            <i className="bi bi-code-slash" />
          </div>
          <span className="bg-gradient-primary text-transparent bg-clip-text">Sebastian Yepes</span>
        </a>
        
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menú"
        >
          <div className="d-flex flex-column gap-1">
            <div className={`line ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`line ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`line ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
        
        <nav className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-center gap-1">
            {navItems.map((item) => (
              <li className="nav-item" key={item.href}>
                <a 
                  href={item.href} 
                  className="nav-link d-flex align-items-center gap-2 px-3 py-2 rounded-3 text-secondary hover-text-primary transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <i className={`bi ${item.icon}`} />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
            
            <li className="nav-item ms-lg-2">
              <button
                onClick={toggleTheme}
                className="btn btn-outline-modern border-2 px-3 py-2 rounded-3 d-flex align-items-center gap-2"
                aria-label="Cambiar tema"
              >
                <i className={`bi ${theme === 'light' ? 'bi-moon-stars' : 'bi-sun'}`} />
                <span className="d-none d-lg-inline">{theme === 'light' ? 'Oscuro' : 'Claro'}</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      
      <style jsx>{`
        .line {
          width: 25px;
          height: 3px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        
        .rotate-45 {
          transform: rotate(45deg);
        }
        
        .-rotate-45 {
          transform: rotate(-45deg);
        }
        
        .translate-y-1.5 {
          transform: translateY(6px);
        }
        
        .-translate-y-1.5 {
          transform: translateY(-6px);
        }
        
        .hover-text-primary:hover {
          color: var(--primary-color) !important;
          background: rgba(99, 102, 241, 0.1);
        }
      `}</style>
    </header>
  )
}

export default Header
