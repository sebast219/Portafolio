function Footer() {
  const año = new Date().getFullYear()

  return (
    <footer className="py-4 bg-dark text-secondary text-center">
      <div className="container">
        <p className="mb-0 small">
          © {año} Mi Portafolio. Hecho con React y Bootstrap 5.
        </p>
      </div>
    </footer>
  )
}

export default Footer
