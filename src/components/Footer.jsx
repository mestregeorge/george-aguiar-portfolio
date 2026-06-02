import cvPdf from '../assets/cv-eng.pdf'

const contacts = [
  {
    icon: 'bi-geo-alt-fill',
    value: 'Barreiro, Portugal',
    href: 'https://www.google.com/maps/place/Barreiro,+Portugal',
    ariaLabel: 'View George Aguiar location on Google Maps',
    external: true,
  },
  {
    icon: 'bi-envelope-fill',
    value: 'georgedeportugal@gmail.com',
    href: 'mailto:georgedeportugal@gmail.com?subject=Portfolio%20contact',
    ariaLabel: 'Email George Aguiar',
  },
  {
    icon: 'bi-telephone-fill',
    value: '+351 965 103 342',
    href: 'tel:+351965103342',
    ariaLabel: 'Call George Aguiar',
  },
  {
    icon: 'bi-file-earmark-person-fill',
    value: 'CV',
    href: cvPdf,
    ariaLabel: 'Open George Aguiar CV PDF',
    external: true,
  },
  {
    icon: 'bi-linkedin',
    value: 'George Aguiar',
    href: 'https://www.linkedin.com/search/results/people/?keywords=George%20Aguiar',
    ariaLabel: 'Open George Aguiar on LinkedIn',
    external: true,
  },
  {
    icon: 'bi-github',
    value: '@imbestgeorge',
    href: 'https://github.com/imbestgeorge',
    ariaLabel: 'Open imbestgeorge on GitHub',
    external: true,
  },
  {
    icon: 'bi-instagram',
    value: '@georgedeportugal',
    href: 'https://www.instagram.com/georgedeportugal',
    ariaLabel: 'Open georgedeportugal on Instagram',
    external: true,
  },
]

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-primary text-white position-relative mt-auto"
    >
      <div className="container py-4">
        <div className="row g-3 align-items-center justify-content-center">
          {contacts.map(({ icon, value, href, ariaLabel, external }) => (
            <div className="col-sm-6 col-lg-auto" key={value}>
              <a
                className="d-flex align-items-center justify-content-center gap-2 fw-semibold text-white text-decoration-none"
                href={href}
                aria-label={ariaLabel}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
              >
                <i className={`bi ${icon}`} aria-hidden="true"></i>
                <span>{value}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
