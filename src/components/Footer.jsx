function Footer() {
  const año = new Date().getFullYear()

  return (
    <footer className="py-6 bg-slate-900 dark:bg-black text-slate-400 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          © {año} Sebastian Yepes. Hecho con React y Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}

export default Footer
