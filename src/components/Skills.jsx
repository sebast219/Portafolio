import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'

const habilidadesData = [
  { nombre: 'React & Next.js', nivel: 95, categoria: 'frontend', icon: '⚛' },
  { nombre: 'TypeScript', nivel: 88, categoria: 'frontend', icon: '📘' },
  { nombre: 'JavaScript ES6+', nivel: 92, categoria: 'frontend', icon: '🟨' },
  { nombre: 'Tailwind CSS', nivel: 90, categoria: 'frontend', icon: '🎨' },
  { nombre: 'HTML5 & CSS3', nivel: 95, categoria: 'frontend', icon: '📄' },
  { nombre: 'Vue.js', nivel: 75, categoria: 'frontend', icon: '💚' },
  { nombre: 'Node.js', nivel: 80, categoria: 'backend', icon: '🟢' },
  { nombre: 'Python', nivel: 70, categoria: 'backend', icon: '🐍' },
  { nombre: 'Git & GitHub', nivel: 88, categoria: 'tools', icon: '📦' },
  { nombre: 'Docker', nivel: 65, categoria: 'tools', icon: '🐳' },
  { nombre: 'Figma', nivel: 82, categoria: 'design', icon: '✏' },
  { nombre: 'Responsive Design', nivel: 94, categoria: 'design', icon: '📱' },
  { nombre: 'Performance', nivel: 85, categoria: 'skills', icon: '⚡' },
  { nombre: 'SEO', nivel: 78, categoria: 'skills', icon: '🔍' },
  { nombre: 'Testing (Jest)', nivel: 72, categoria: 'skills', icon: '✅' },
]

const categorias = [
  { id: 'todos', nombre: 'Todas', icon: '▦' },
  { id: 'frontend', nombre: 'Frontend', icon: '💻' },
  { id: 'backend', nombre: 'Backend', icon: '⚙' },
  { id: 'design', nombre: 'Diseño', icon: '🎨' },
  { id: 'tools', nombre: 'Herramientas', icon: '🔧' },
  { id: 'skills', nombre: 'Soft', icon: '⭐' },
]

function Skills() {
  const [categoriaActiva, setCategoriaActiva] = useState('todos')
  const [mounted, setMounted] = useState(false)
  const [ref, isInView] = useInView({ threshold: 0.08 })

  const habilidadesFiltradas =
    categoriaActiva === 'todos'
      ? habilidadesData
      : habilidadesData.filter((h) => h.categoria === categoriaActiva)

  useEffect(() => {
    if (isInView) setMounted(true)
  }, [isInView])

  return (
    <section id="habilidades" className="py-20 sm:py-24 bg-white dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div ref={ref} className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-accent-violet bg-clip-text text-transparent transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Habilidades técnicas
          </h2>
          <p
            className={`text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-8 transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Tecnologías y herramientas que domino para crear experiencias web excepcionales
          </p>
          <div
            className={`flex flex-wrap gap-2 justify-center transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {categorias.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategoriaActiva(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${
                  categoriaActiva === cat.id
                    ? 'bg-gradient-to-r from-primary-500 to-accent-violet text-white shadow-lg shadow-primary-500/30'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:border-primary-500/50 border border-transparent'
                }`}
              >
                <span>{cat.icon}</span>
                {cat.nombre}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {habilidadesFiltradas.map((habilidad, index) => (
            <div
              key={habilidad.nombre}
              className={`rounded-2xl p-5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-500 ease-smooth ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-violet flex items-center justify-center text-xl text-white shadow-lg shadow-primary-500/20">
                  {habilidad.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-slate-800 dark:text-slate-100 truncate">{habilidad.nombre}</h5>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-violet transition-all duration-1000 ease-out"
                        style={{
                          width: mounted ? `${habilidad.nivel}%` : '0%',
                          transitionDelay: `${index * 80 + 200}ms`,
                        }}
                      />
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium w-10">
                      {habilidad.nivel}%
                    </span>
                  </div>
                </div>
              </div>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  habilidad.nivel >= 90
                    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                    : habilidad.nivel >= 80
                    ? 'bg-primary-500/15 text-primary-600 dark:text-primary-400'
                    : habilidad.nivel >= 70
                    ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400'
                    : 'bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-400'
                }`}
              >
                {habilidad.nivel >= 90 ? 'Experto' : habilidad.nivel >= 80 ? 'Avanzado' : habilidad.nivel >= 70 ? 'Intermedio' : 'Básico'}
              </span>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 pt-12 border-t border-slate-200 dark:border-slate-700 grid grid-cols-2 md:grid-cols-4 gap-6 text-center transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {[
            { valor: `${habilidadesData.length}+`, label: 'Tecnologías' },
            { valor: '50+', label: 'Proyectos' },
            { valor: '3+', label: 'Años de experiencia' },
            { valor: '100%', label: 'Compromiso' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-500 to-accent-violet bg-clip-text text-transparent">
                {stat.valor}
              </div>
              <p className="text-slate-500 dark:text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
