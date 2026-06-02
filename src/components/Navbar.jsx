function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary sticky-top"
      data-bs-theme="dark"
      aria-label="Main navigation"
    >
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#home">
          George Aguiar
        </a>
        <button
          className="navbar-toggler border-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNav"
          aria-controls="portfolioNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="portfolioNav">
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <a className="nav-link text-white fw-semibold" href="#education">
              More About Me
            </a>
            <a className="nav-link text-white fw-semibold" href="#projects">
              View Projects
            </a>
            <a
              className="btn border border-2 border-white text-white fw-semibold ms-lg-2"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
