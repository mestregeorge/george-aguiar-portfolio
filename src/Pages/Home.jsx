import { useEffect, useRef, useState } from 'react'
import aesaLogo from '../assets/aesa.png'
import georgeImage from '../assets/george.png'
import limagroupLogo from '../assets/limagroup.png'

const profileImage = georgeImage

const projectOptions = ['Software', 'Video Games', 'Plugins']

const projects = [
  {
    title: 'LimaGroup',
    category: 'Software',
    image: 'https://placehold.co/720x420/06224a/ffffff?text=LimaGroup',
    description:
      'A clean business website sample with simple navigation, service sections, and a contact-focused layout.',
  },
  {
    title: 'Waspee',
    category: 'Software',
    image: 'https://placehold.co/720x420/06224a/ffffff?text=Waspee',
    description:
      'A sample productivity dashboard concept designed for clear tasks, quick decisions, and reliable data display.',
  },
  {
    title: 'LetsFindPeople',
    category: 'Software',
    image: 'https://placehold.co/720x420/06224a/ffffff?text=LetsFindPeople',
    description:
      'A people-search interface sample with structured cards, profile summaries, and simple filtering ideas.',
  },
]

const aboutMe =
  'Fluent in Portuguese and English. Known for attention to detail, organization, punctuality, a strong work ethic, and fast learning. I enjoy solving problems and building practical solutions through technology.'

const education = [
  {
    role: 'Computer Systems Technician',
    entity: 'Escola Secundária de Santo André',
    date: '2023 - 2026',
  },
]

const experience = [
  {
    role: 'Software Developer',
    entity: 'LimaGroup Consulting - Internship',
    date: 'Jun 2025 - Jul 2025',
  },
]

const skillIcons = [
  ['C', 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg'],
  ['Java', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'],
  ['PHP', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg'],
  ['HTML', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'],
  ['CSS', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'],
  ['TypeScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'],
  ['JavaScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'],
  ['Node.js', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'],
  ['Angular', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg'],
  ['React', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'],
  ['PostgreSQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'],
  ['MySQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'],
  ['Git', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'],
  ['GitHub', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'],
]

function Home() {
  const introSectionRef = useRef(null)
  const introPanelRef = useRef(null)
  const introTrackRef = useRef(null)
  const [selectedProjectOption, setSelectedProjectOption] =
    useState('Software')

  const visibleProjects =
    selectedProjectOption === 'Software'
      ? projects
      : projects.filter((project) => project.category === selectedProjectOption)

  useEffect(() => {
    if (!window.location.hash) {
      window.history.scrollRestoration = 'manual'
      window.scrollTo(0, 0)
    }

    const updateIntroProgress = () => {
      const section = introSectionRef.current
      const panel = introPanelRef.current
      const track = introTrackRef.current

      if (!section || !panel || !track) {
        return
      }

      const introHold = Math.min(window.innerHeight * 0.9, 860)
      const scrollDistance = Math.max(track.scrollHeight - panel.clientHeight, 0)
      section.style.minHeight = `${window.innerHeight + introHold + scrollDistance}px`

      const rect = section.getBoundingClientRect()
      const scrollRange = section.offsetHeight - window.innerHeight - introHold
      const activeScroll = Math.max(-rect.top - introHold, 0)
      const progress =
        scrollRange > 0 ? Math.min(Math.max(activeScroll / scrollRange, 0), 1) : 0

      track.style.setProperty(
        '--intro-offset',
        `${-progress * scrollDistance}px`,
      )
    }

    updateIntroProgress()
    requestAnimationFrame(updateIntroProgress)
    window.addEventListener('scroll', updateIntroProgress, { passive: true })
    window.addEventListener('resize', updateIntroProgress)
    window.addEventListener('load', updateIntroProgress)

    return () => {
      window.removeEventListener('scroll', updateIntroProgress)
      window.removeEventListener('resize', updateIntroProgress)
      window.removeEventListener('load', updateIntroProgress)
    }
  }, [])

  return (
    <main>
      <section
        id="home"
        className="bg-white text-primary intro-scroll-section"
        ref={introSectionRef}
      >
        <span className="intro-scroll-anchor intro-scroll-anchor-education" id="education"></span>
        <div className="intro-sticky-frame">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <div className="intro-scroll-panel" ref={introPanelRef}>
                  <div className="intro-scroll-track" ref={introTrackRef}>
                    <div className="intro-scroll-row intro-hero-row">
                      <h1 className="display-3 fw-bold lh-1 mb-4">
                        Welcome to George Aguiar's Portfolio
                      </h1>
                      <p className="lead fw-semibold mb-4">
                        Passionate about software development, artificial intelligence, and robotics. Aiming to build a fully automated world.
                      </p>
                      <div className="d-flex flex-wrap gap-3">
                        <a
                          className="btn btn-lg bg-primary text-white border-primary fw-semibold"
                          href="#projects"
                        >
                          View Projects
                        </a>
                        <a
                          className="btn btn-lg border border-2 border-primary text-primary fw-semibold"
                          href="#contact"
                        >
                          Contact Me
                        </a>
                      </div>
                    </div>

                    <div className="intro-scroll-row intro-details-row">
                      <div className="intro-detail-block">
                        <h2 className="display-6 fw-bold mb-4">About Me</h2>
                        <p className="lead fw-semibold mb-0">{aboutMe}</p>
                      </div>

                      <div className="intro-detail-block">
                        <h2 className="display-6 fw-bold mb-4">Skills</h2>
                        <div className="d-flex flex-wrap gap-3">
                          {skillIcons.map(([label, iconSrc]) => (
                            <img
                              className="skill-brand-icon"
                              src={iconSrc}
                              alt={label}
                              title={label}
                              key={label}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="intro-detail-block">
                        <h2 className="display-6 fw-bold mb-4">Education</h2>
                        {education.map((item) => (
                          <article
                            className="card border-0 bg-white text-primary intro-info-row"
                            key={item.role}
                          >
                            <div className="card-body p-0">
                              <div className="row align-items-center g-0">
                                <div className="col-auto">
                                  <img
                                    src={aesaLogo}
                                    className="img-fluid"
                                    alt="Escola Secundaria de Santo Andre logo"
                                  />
                                </div>
                                <div className="col ps-3">
                                  <h3 className="lead fw-bold mb-1">{item.role}</h3>
                                  <p className="lead fw-bold mb-1">{item.entity}</p>
                                  <p className="lead fw-semibold mb-0">{item.date}</p>
                                </div>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>

                      <div className="intro-detail-block">
                        <h2 className="display-6 fw-bold mb-4">Work Experience</h2>
                        {experience.map((item) => (
                          <article
                            className="card border-0 bg-white text-primary intro-info-row"
                            key={item.role}
                          >
                            <div className="card-body p-0">
                              <div className="row align-items-center g-0">
                                <div className="col-auto">
                                  <img
                                    src={limagroupLogo}
                                    className="img-fluid"
                                    alt="LimaGroup Consulting logo"
                                  />
                                </div>
                                <div className="col ps-3">
                                  <h3 className="lead fw-bold mb-1">{item.role}</h3>
                                  <p className="lead fw-bold mb-1">{item.entity}</p>
                                  <p className="lead fw-semibold mb-0">{item.date}</p>
                                </div>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 text-center">
                <img
                  src={profileImage}
                  className="img-fluid rounded-circle border border-5 border-primary"
                  alt="George Aguiar"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-primary text-white">
        <div className="container py-5">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
            <div>
              <h2 className="display-6 fw-bold mb-0 text-white">Projects</h2>
            </div>
            <select
              className="form-select w-auto fw-semibold text-center"
              aria-label="Select project category"
              value={selectedProjectOption}
              onChange={(event) => setSelectedProjectOption(event.target.value)}
            >
              {projectOptions.map((option) => (
                <option className="text-center" value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="row g-4">
            {visibleProjects.map((project) => (
              <div className="col-md-6 col-lg-4" key={project.title}>
                <article className="card h-100 border border-white bg-white text-primary">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={`${project.title} sample project preview`}
                  />
                  <div className="card-body d-flex flex-column">
                    <h3 className="h4 fw-bold">{project.title}</h3>
                    <p className="fw-semibold mb-4">{project.description}</p>
                    <a
                      className="btn bg-primary text-white border-primary fw-semibold mt-auto"
                      href="#contact"
                    >
                      Ask About This
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home
