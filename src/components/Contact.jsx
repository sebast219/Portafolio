function Contact() {
  return (
    <section id="contacto" className="py-5 py-lg-5 bg-light">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h2 className="section-title fw-bold text-dark mb-3">Contacto</h2>
            <p className="text-secondary mb-4">
              ¿Tienes un proyecto en mente? Escríbeme y hablamos.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <a
                href="mailto:tu@email.com"
                className="btn btn-primary btn-lg px-4 py-3 rounded-3 shadow-sm"
              >
                <i className="bi bi-envelope-fill me-2" /> Enviar email
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-lg px-4 py-3 rounded-3"
              >
                <i className="bi bi-linkedin me-2" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
