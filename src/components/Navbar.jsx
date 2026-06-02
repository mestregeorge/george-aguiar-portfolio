const navbarText = {
  en: {
    ariaLabel: 'Main navigation',
    toggleNavigation: 'Toggle navigation',
    languageAria: 'Select website language',
    about: 'More About Me',
    projects: 'View Projects',
    contact: 'Contact Me',
  },
  pt: {
    ariaLabel: 'Navegação principal',
    toggleNavigation: 'Abrir navegação',
    languageAria: 'Selecionar idioma do site',
    about: 'Mais Sobre Mim',
    projects: 'Ver Projetos',
    contact: 'Contacta-me',
  },
}

function Navbar({ locale, onLocaleChange }) {
  const text = navbarText[locale]

  return (
    <nav
      className="navbar navbar-expand-lg bg-primary sticky-top"
      data-bs-theme="dark"
      aria-label={text.ariaLabel}
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
          aria-label={text.toggleNavigation}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="portfolioNav">
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <select
              className="form-select border border-2 border-white bg-primary text-white fw-semibold me-lg-2 w-auto navbar-language-select"
              aria-label={text.languageAria}
              value={locale}
              onChange={(event) => onLocaleChange(event.target.value)}
            >
              <option value="en">🇬🇧 ENG</option>
              <option value="pt">🇵🇹 PT</option>
            </select>
            <a
              className="nav-link text-white fw-semibold"
              href="#about"
              onClick={(event) => {
                event.preventDefault()
                window.dispatchEvent(new Event('portfolio:scroll-about'))
              }}
            >
              {text.about}
            </a>
            <a className="nav-link text-white fw-semibold" href="#projects">
              {text.projects}
            </a>
            <a
              className="btn border border-2 border-white text-white fw-semibold ms-lg-2"
              href="#contact"
            >
              {text.contact}
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
