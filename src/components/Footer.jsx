import cvEngPdf from '../assets/cv-eng.pdf'
import cvPtPdf from '../assets/cv-pt.pdf'

const footerText = {
  en: {
    location: 'View George Aguiar location on Google Maps',
    email: 'Email George Aguiar',
    phone: 'Call George Aguiar',
    cv: 'Open George Aguiar CV PDF',
    linkedin: 'Open George Aguiar on LinkedIn',
    github: 'Open mestregeorge on GitHub',
    instagram: 'Open georgedeportugal on Instagram',
  },
  pt: {
    location: 'Ver localização de George Aguiar no Google Maps',
    email: 'Enviar email a George Aguiar',
    phone: 'Ligar para George Aguiar',
    cv: 'Abrir CV de George Aguiar em PDF',
    linkedin: 'Abrir George Aguiar no LinkedIn',
    github: 'Abrir mestregeorge no GitHub',
    instagram: 'Abrir georgedeportugal no Instagram',
  },
}

const contacts = [
  {
    icon: 'bi-geo-alt-fill',
    value: 'Barreiro, Portugal',
    href: 'https://www.google.com/maps/place/Barreiro,+Portugal',
    ariaKey: 'location',
    external: true,
  },
  {
    icon: 'bi-envelope-fill',
    value: 'georgedeportugal@gmail.com',
    href: 'mailto:georgedeportugal@gmail.com?subject=Portfolio%20contact',
    ariaKey: 'email',
  },
  {
    icon: 'bi-telephone-fill',
    value: '+351 965 103 342',
    href: 'tel:+351965103342',
    ariaKey: 'phone',
  },
  {
    icon: 'bi-file-earmark-person-fill',
    value: 'CV',
    href: null,
    ariaKey: 'cv',
    external: true,
  },
  {
    icon: 'bi-linkedin',
    value: 'George Aguiar',
    href: 'https://www.linkedin.com/in/george-aguiar-7ab88a311/',
    ariaKey: 'linkedin',
    external: true,
  },
  {
    icon: 'bi-github',
    value: '@mestregeorge',
    href: 'https://github.com/mestregeorge',
    ariaKey: 'github',
    external: true,
  },
  {
    icon: 'bi-instagram',
    value: '@georgedeportugal',
    href: 'https://www.instagram.com/georgedeportugal',
    ariaKey: 'instagram',
    external: true,
  },
]

function Footer({ locale }) {
  const text = footerText[locale]
  const cvPdf = locale === 'pt' ? cvPtPdf : cvEngPdf

  return (
    <footer
      id="contact"
      className="bg-primary text-white position-relative mt-auto"
    >
      <div className="container py-4">
        <div className="row g-3 align-items-center justify-content-center">
          {contacts.map(({ icon, value, href, ariaKey, external }) => (
            <div className="col-sm-6 col-lg-auto" key={value}>
              <a
                className="d-flex align-items-center justify-content-center gap-2 fw-semibold text-white text-decoration-none footer-contact-link"
                href={ariaKey === 'cv' ? cvPdf : href}
                aria-label={text[ariaKey]}
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
