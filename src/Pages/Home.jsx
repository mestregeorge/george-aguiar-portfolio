import { useEffect, useRef, useState } from 'react'
import aesaLogo from '../assets/aesa.png'
import cvEngPdf from '../assets/cv-eng.pdf'
import cvPtPdf from '../assets/cv-pt.pdf'
import georgeImage from '../assets/george.png'
import limagroupLogo from '../assets/limagroup.png'
import cpamProject1 from '../assets/Projects/cpam1.png'
import cpamProject2 from '../assets/Projects/cpam2.png'
import cpamProject3 from '../assets/Projects/cpam3.png'
import eqavetProject1 from '../assets/Projects/eqavet1.png'
import eqavetProject2 from '../assets/Projects/eqavet2.png'
import eqavetProject3 from '../assets/Projects/eqavet3.png'
import fctDocsProject1 from '../assets/Projects/fctDocs0.png'
import fctDocsProject2 from '../assets/Projects/fctDocs1.png'
import fctDocsProject3 from '../assets/Projects/fctDocs2.png'
import fctDocsProject4 from '../assets/Projects/fctDocs3.png'
import letsFindPeopleProject1 from '../assets/Projects/letsfindpeople1.png'
import letsFindPeopleProject2 from '../assets/Projects/letsfindpeople2.png'
import letsFindPeopleProject3 from '../assets/Projects/letsfindpeople3.png'
import letsFindPeopleProject4 from '../assets/Projects/letsfindpeople4.png'
import letsFindPeopleProject5 from '../assets/Projects/letsfindpeople5.png'
import limagroupProject1 from '../assets/Projects/limagroup1.png'
import limagroupProject2 from '../assets/Projects/limagroup2.png'
import limagroupProject3 from '../assets/Projects/limagroup3.png'
import limagroupProject4 from '../assets/Projects/limagroup4.png'
import limagroupProject5 from '../assets/Projects/limagroup5.png'
import thunderlimitedVideo from '../assets/thunderlimited.mov'
import waspeeProject1 from '../assets/Projects/waspee.png'
import waspeeProject2 from '../assets/Projects/waspee1.png'
import waspeeProject3 from '../assets/Projects/waspee2.png'
import waspeeProject4 from '../assets/Projects/waspee3.png'

const profileImage = georgeImage
const stackedIntroMediaQuery = '(max-width: 991.98px)'

const projectOptions = ['Software', 'Video Games']

const homeText = {
  en: {
    heroTitle: "Welcome to George Aguiar's Portfolio",
    heroIntro:
      'Passionate about software development, artificial intelligence, and robotics. Aiming to build a fully automated world.',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
    aboutTitle: 'About Me',
    aboutMe:
      'Fluent in Portuguese and English. Known for attention to detail, organization, punctuality, a strong work ethic, and fast learning. I enjoy solving problems and building practical solutions through technology.',
    viewCv: 'View CV',
    skillsTitle: 'Skills',
    educationTitle: 'Education',
    experienceTitle: 'Work Experience',
    projectsTitle: 'Projects',
    projectCategoryLabel: 'Select project category',
    madeWith: 'Made With:',
    viewWebsite: 'View Website',
    projectOptions: {
      Software: 'Software',
      'Video Games': 'Video Games',
    },
  },
  pt: {
    heroTitle: 'Bem-vindo ao Portfolio de George Aguiar',
    heroIntro:
      'Apaixonado por desenvolvimento de software, inteligência artificial e robótica. Com o objetivo de construir um mundo totalmente automatizado.',
    viewProjects: 'Ver Projetos',
    contactMe: 'Contacta-me',
    aboutTitle: 'Sobre Mim',
    aboutMe:
      'Fluente em português e inglês. Reconhecido pela atenção ao detalhe, organização, pontualidade, forte ética de trabalho e aprendizagem rápida. Gosto de resolver problemas e construir soluções práticas através da tecnologia.',
    viewCv: 'VER CV',
    skillsTitle: 'Competências',
    educationTitle: 'Educação',
    experienceTitle: 'Experiência Profissional',
    projectsTitle: 'Projetos',
    projectCategoryLabel: 'Selecionar categoria de projeto',
    madeWith: 'Feito Com:',
    viewWebsite: 'Ver Website',
    projectOptions: {
      Software: 'Software',
      'Video Games': 'Jogos',
    },
  },
}

const technologyIcons = {
  C: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  PHP: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  GDScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  Bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
  SCSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  Angular: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
}

const projects = [
  {
    title: 'LimaGroup',
    category: 'Software',
    description: {
      en: 'A consulting company that helps other businesses grow, organize processes, and find better solutions for their operations.',
      pt: 'Uma empresa de consultoria que ajuda outros negócios a crescer, organizar processos e encontrar melhores soluções para as suas operações.',
    },
    galleryImages: [
      { src: limagroupProject1, alt: 'LimaGroup home page preview' },
      { src: limagroupProject2, alt: 'LimaGroup services page preview' },
      { src: limagroupProject3, alt: 'LimaGroup consulting page preview' },
      { src: limagroupProject4, alt: 'LimaGroup contact page preview' },
      { src: limagroupProject5, alt: 'LimaGroup mobile page preview' },
    ],
    technologies: ['HTML', 'SCSS', 'TypeScript', 'Angular', 'Node.js', 'MySQL', 'GitHub'],
    websiteUrl: 'https://limagroup-consulting.com/',
  },
  {
    title: 'Waspee',
    category: 'Software',
    description: {
      en: 'A local task marketplace where users can post jobs, hire nearby people, and get paid safely through escrow-based payments.',
      pt: 'Um marketplace local de tarefas onde os utilizadores podem publicar trabalhos, contratar pessoas próximas e receber pagamentos de forma segura através de pagamentos em escrow.',
    },
    galleryImages: [
      { src: waspeeProject1, alt: 'Waspee landing page preview' },
      { src: waspeeProject2, alt: 'Waspee task marketplace preview' },
      { src: waspeeProject3, alt: 'Waspee task details preview' },
      { src: waspeeProject4, alt: 'Waspee account dashboard preview' },
    ],
    technologies: ['HTML', 'CSS', 'TypeScript', 'React', 'Node.js', 'MySQL', 'GitHub'],
    websiteUrl: 'https://waspee-prototype.vercel.app',
  },
  {
    title: 'LetsFindPeople',
    category: 'Software',
    description: {
      en: 'A platform where users create profiles with their interests and use filters to find people with the exact interests they choose.',
      pt: 'Uma plataforma onde os utilizadores criam perfis com os seus interesses e usam filtros para encontrar pessoas com os interesses exatos que escolherem.',
    },
    galleryImages: [
      {
        src: letsFindPeopleProject1,
        alt: 'LetsFindPeople landing page preview',
      },
      {
        src: letsFindPeopleProject2,
        alt: 'LetsFindPeople profile search preview',
      },
      {
        src: letsFindPeopleProject3,
        alt: 'LetsFindPeople filters preview',
      },
      {
        src: letsFindPeopleProject4,
        alt: 'LetsFindPeople profile details preview',
      },
      {
        src: letsFindPeopleProject5,
        alt: 'LetsFindPeople messaging preview',
      },
    ],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'Node.js', 'PostgreSQL', 'GitHub'],
    repoUrl: 'https://github.com/mestregeorge/letsfindpeople',
    websiteUrl: 'https://letsfindpeople.com',
  },
  {
    title: 'AESA FCT Docs',
    category: 'Software',
    description: {
      en: 'A platform that helps class directors across AESA schools automatically generate all documents required for student internships.',
      pt: 'Uma plataforma que ajuda diretores de turma das escolas AESA a gerar automaticamente todos os documentos necessários para estágios de alunos.',
    },
    galleryImages: [
      { src: fctDocsProject1, alt: 'AESA FCT Docs home page preview' },
      { src: fctDocsProject2, alt: 'AESA FCT Docs document list preview' },
      { src: fctDocsProject3, alt: 'AESA FCT Docs document details preview' },
      { src: fctDocsProject4, alt: 'AESA FCT Docs form preview' },
    ],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'TypeScript', 'Angular', 'Node.js', 'MySQL', 'GitHub'],
    websiteUrl: null,
  },
  {
    title: 'AESA Inquéritos',
    category: 'Software',
    description: {
      en: 'A platform across AESA schools for students and teachers to rate each other, with Excel report exports for admins.',
      pt: 'Uma plataforma para as escolas AESA onde alunos e professores se podem avaliar, com exportação de relatórios em Excel para administradores.',
    },
    galleryImages: [
      { src: eqavetProject1, alt: 'AESA Inqueritos home page preview' },
      { src: eqavetProject2, alt: 'AESA Inqueritos survey preview' },
      { src: eqavetProject3, alt: 'AESA Inqueritos results preview' },
    ],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL', 'GitHub'],
    websiteUrl: 'https://eqavet.aesa.edu.pt/eqavet',
  },
  {
    title: 'CPASM',
    category: 'Software',
    description: {
      en: 'A website for a church in Moita, Portugal, where visitors can view information, contacts, schedules, and news.',
      pt: 'Um website para uma igreja na Moita, Portugal, onde visitantes podem ver informações, contactos, horários e notícias.',
    },
    galleryImages: [
      { src: cpamProject1, alt: 'CPASM home page preview' },
      { src: cpamProject2, alt: 'CPASM content page preview' },
      { src: cpamProject3, alt: 'CPASM contact page preview' },
    ],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL', 'GitHub'],
    websiteUrl: 'https://cpasmoita.pt',
  },
  {
    title: 'Roboface',
    category: 'Video Games',
    description: {
      en: 'A 2D robot shooting game where players fight enemy robots, complete missions in story mode, survive endless waves, and play local multiplayer with friends.',
      pt: 'Um jogo de tiro 2D onde os jogadores lutam contra robôs inimigos, completam missões no modo história, sobrevivem a ondas infinitas e jogam multiplayer local com amigos.',
    },
    media: {
      type: 'youtube',
      src: 'https://www.youtube.com/embed/r9B32BNcM7Y',
      title: 'Roboface gameplay video',
    },
    technologies: ['GDScript'],
    websiteUrl: 'https://thunderlimited.itch.io/roboface',
  },
  {
    title: 'ThunderLimited',
    category: 'Video Games',
    description: {
      en: 'A store where I sell plugins for Godot 4.6 that simplify features like in-app purchases, AdMob, Google Play services, inventory systems, and more.',
      pt: 'Uma loja onde vendo plugins para Godot 4.6 que simplificam funcionalidades como compras in-app, AdMob, serviços do Google Play, sistemas de inventário e mais.',
    },
    media: {
      type: 'video',
      src: thunderlimitedVideo,
      title: 'ThunderLimited video preview',
    },
    technologies: ['GDScript'],
    websiteUrl: 'https://thunderlimited.itch.io',
  },
]

const education = [
  {
    role: {
      en: 'Computer Systems Technician',
      pt: 'Técnico de Sistemas Informáticos',
    },
    entity: 'Escola Secundária de Santo André',
    date: '2023 - 2026',
  },
]

const experience = [
  {
    role: {
      en: 'Software Developer',
      pt: 'Desenvolvedor de Software',
    },
    entity: {
      en: 'LimaGroup Consulting - Internship',
      pt: 'LimaGroup Consulting - Estágio',
    },
    date: 'Jun 2025 - Jul 2025',
  },
]

const skillIcons = [
  ['C', technologyIcons.C],
  ['Java', technologyIcons.Java],
  ['PHP', technologyIcons.PHP],
  ['GDScript', technologyIcons.GDScript],
  ['HTML', technologyIcons.HTML],
  ['CSS', technologyIcons.CSS],
  ['Bootstrap', technologyIcons.Bootstrap],
  ['SCSS', technologyIcons.SCSS],
  ['TypeScript', technologyIcons.TypeScript],
  ['JavaScript', technologyIcons.JavaScript],
  ['Node.js', technologyIcons['Node.js']],
  ['Angular', technologyIcons.Angular],
  ['React', technologyIcons.React],
  ['PostgreSQL', technologyIcons.PostgreSQL],
  ['MySQL', technologyIcons.MySQL],
  ['Git', technologyIcons.Git],
  ['GitHub', technologyIcons.GitHub],
]

function Home({ locale }) {
  const text = homeText[locale]
  const cvPdf = locale === 'pt' ? cvPtPdf : cvEngPdf
  const introSectionRef = useRef(null)
  const introPanelRef = useRef(null)
  const introTrackRef = useRef(null)
  const projectScrollRef = useRef(null)
  const projectScrollbarTrackRef = useRef(null)
  const projectScrollbarDragRef = useRef(null)
  const [projectScrollbarMetrics, setProjectScrollbarMetrics] = useState({
    thumbLeft: 0,
    thumbWidth: 0,
  })
  const [selectedProjectOption, setSelectedProjectOption] =
    useState('Software')

  const visibleProjects = projects.filter(
    (project) => project.category === selectedProjectOption,
  )
  const showProjectScrollbar = visibleProjects.length >= 4

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

      if (window.matchMedia(stackedIntroMediaQuery).matches) {
        section.style.minHeight = ''
        track.style.setProperty('--intro-offset', '0px')
        return
      }

      const scrollDistance = Math.max(track.scrollHeight - panel.clientHeight, 0)
      section.style.minHeight = `${window.innerHeight + scrollDistance}px`

      const rect = section.getBoundingClientRect()
      const scrollRange = section.offsetHeight - window.innerHeight
      const activeScroll = Math.max(-rect.top, 0)
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

    const scrollToAbout = () => {
      const section = introSectionRef.current
      const panel = introPanelRef.current
      const track = introTrackRef.current
      const heroRow = track?.querySelector('.intro-hero-row')

      if (!section || !panel || !track || !heroRow) {
        return
      }

      if (window.matchMedia(stackedIntroMediaQuery).matches) {
        window.history.pushState(null, '', '#about')
        document.getElementById('about')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
        return
      }

      updateIntroProgress()

      const sectionTop = window.scrollY + section.getBoundingClientRect().top
      const scrollDistance = Math.max(track.scrollHeight - panel.clientHeight, 0)
      const targetOffset = Math.min(heroRow.offsetHeight, scrollDistance)

      window.history.pushState(null, '', '#about')
      window.scrollTo({
        top: sectionTop + targetOffset,
        behavior: 'smooth',
      })
    }

    window.addEventListener('portfolio:scroll-about', scrollToAbout)

    return () => {
      window.removeEventListener('scroll', updateIntroProgress)
      window.removeEventListener('resize', updateIntroProgress)
      window.removeEventListener('load', updateIntroProgress)
      window.removeEventListener('portfolio:scroll-about', scrollToAbout)
    }
  }, [])

  useEffect(() => {
    const scroller = projectScrollRef.current

    if (!scroller) {
      return undefined
    }

    const updateProjectScrollbar = () => {
      const track = projectScrollbarTrackRef.current

      if (!track) {
        return
      }

      const scrollWidth = scroller.scrollWidth
      const visibleWidth = scroller.clientWidth
      const trackWidth = track.clientWidth
      const maxScrollLeft = Math.max(scrollWidth - visibleWidth, 0)

      if (maxScrollLeft === 0) {
        setProjectScrollbarMetrics({
          thumbLeft: 0,
          thumbWidth: trackWidth,
        })
        return
      }

      const thumbWidth = Math.max((visibleWidth / scrollWidth) * trackWidth, 44)
      const maxThumbLeft = Math.max(trackWidth - thumbWidth, 0)
      const thumbLeft = (scroller.scrollLeft / maxScrollLeft) * maxThumbLeft

      setProjectScrollbarMetrics({
        thumbLeft,
        thumbWidth,
      })
    }

    updateProjectScrollbar()
    requestAnimationFrame(updateProjectScrollbar)
    scroller.addEventListener('scroll', updateProjectScrollbar, { passive: true })
    window.addEventListener('resize', updateProjectScrollbar)

    return () => {
      scroller.removeEventListener('scroll', updateProjectScrollbar)
      window.removeEventListener('resize', updateProjectScrollbar)
    }
  }, [selectedProjectOption])

  useEffect(() => {
    const handlePointerMove = (event) => {
      const drag = projectScrollbarDragRef.current
      const scroller = projectScrollRef.current

      if (!drag || !scroller) {
        return
      }

      if (drag.maxThumbLeft <= 0) {
        return
      }

      const scrollDelta =
        ((event.clientX - drag.startX) / drag.maxThumbLeft) * drag.maxScrollLeft
      scroller.scrollLeft = drag.startScrollLeft + scrollDelta
    }

    const handlePointerUp = () => {
      projectScrollbarDragRef.current = null
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
    }
  }, [])

  const handleProjectScrollbarPointerDown = (event) => {
    const scroller = projectScrollRef.current
    const track = projectScrollbarTrackRef.current

    if (!scroller || !track) {
      return
    }

    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth

    if (maxScrollLeft <= 0) {
      return
    }

    event.preventDefault()

    const trackRect = track.getBoundingClientRect()
    const pointerX = event.clientX - trackRect.left
    const maxThumbLeft = trackRect.width - projectScrollbarMetrics.thumbWidth

    if (maxThumbLeft <= 0) {
      return
    }

    const clickedThumb =
      pointerX >= projectScrollbarMetrics.thumbLeft &&
      pointerX <=
        projectScrollbarMetrics.thumbLeft + projectScrollbarMetrics.thumbWidth

    if (!clickedThumb) {
      const thumbLeft = Math.min(
        Math.max(pointerX - projectScrollbarMetrics.thumbWidth / 2, 0),
        maxThumbLeft,
      )
      scroller.scrollTo({
        left: (thumbLeft / maxThumbLeft) * maxScrollLeft,
        behavior: 'smooth',
      })
      return
    }

    projectScrollbarDragRef.current = {
      startScrollLeft: scroller.scrollLeft,
      startX: event.clientX,
      maxScrollLeft,
      maxThumbLeft,
    }
  }

  return (
    <main>
      <section
        id="home"
        className="bg-white text-primary intro-scroll-section"
        ref={introSectionRef}
      >
        <div className="intro-sticky-frame">
          <div className="container">
            <div className="row align-items-center g-5 intro-layout">
              <div className="col-lg-7 intro-content-column">
                <div className="intro-scroll-panel" ref={introPanelRef}>
                  <div className="intro-scroll-track" ref={introTrackRef}>
                    <div className="intro-scroll-row intro-hero-row">
                      <div className="intro-mobile-image d-lg-none text-center mb-4">
                        <img
                          src={profileImage}
                          className="img-fluid rounded-circle border border-5 border-primary intro-profile-image"
                          alt="George Aguiar"
                        />
                      </div>
                      <h1 className="display-3 fw-bold lh-1 mb-4">
                        {text.heroTitle}
                      </h1>
                      <p className="lead fw-semibold mb-4">
                        {text.heroIntro}
                      </p>
                      <div className="d-flex flex-wrap gap-3 intro-hero-actions">
                        <a
                          className="btn btn-lg bg-primary text-white border-primary fw-semibold"
                          href="#projects"
                        >
                          {text.viewProjects}
                        </a>
                        <a
                          className="btn btn-lg border border-2 border-primary text-primary fw-semibold"
                          href="#contact"
                        >
                          {text.contactMe}
                        </a>
                      </div>
                    </div>

                    <div className="intro-scroll-row intro-details-row">
                      <div className="intro-detail-block" id="about">
                        <h2 className="display-6 fw-bold mb-4">{text.aboutTitle}</h2>
                        <p className="lead fw-semibold mb-0">
                          {text.aboutMe}{' '}
                          <a
                            className="text-primary text-decoration-underline fw-bold"
                            href={cvPdf}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {text.viewCv} <span aria-hidden="true">→</span>
                          </a>
                        </p>
                      </div>

                      <div className="intro-detail-block">
                        <h2 className="display-6 fw-bold mb-4">{text.skillsTitle}</h2>
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

                      <div className="intro-detail-block" id="education">
                        <h2 className="display-6 fw-bold mb-4">{text.educationTitle}</h2>
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
                                  <h3 className="lead fw-bold mb-1">
                                    {item.role[locale]}
                                  </h3>
                                  <p className="lead fw-bold mb-1">{item.entity}</p>
                                  <p className="lead fw-semibold mb-0">{item.date}</p>
                                </div>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>

                      <div className="intro-detail-block">
                        <h2 className="display-6 fw-bold mb-4">{text.experienceTitle}</h2>
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
                                  <h3 className="lead fw-bold mb-1">
                                    {item.role[locale]}
                                  </h3>
                                  <p className="lead fw-bold mb-1">
                                    {item.entity[locale]}
                                  </p>
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
              <div className="col-lg-5 text-center d-none d-lg-block intro-desktop-image">
                <img
                  src={profileImage}
                  className="img-fluid rounded-circle border border-5 border-primary intro-profile-image"
                  alt="George Aguiar"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-primary text-white">
        <div className="container py-5">
          <div className="d-flex flex-row justify-content-between align-items-center gap-3 mb-4 project-header">
            <div>
              <h2 className="display-6 fw-bold mb-0 text-white">{text.projectsTitle}</h2>
            </div>
            <select
              className="form-select w-auto fw-semibold text-center project-category-select"
              aria-label={text.projectCategoryLabel}
              value={selectedProjectOption}
              onChange={(event) => setSelectedProjectOption(event.target.value)}
            >
              {projectOptions.map((option) => (
                <option className="text-center" value={option} key={option}>
                  {text.projectOptions[option]}
                </option>
              ))}
            </select>
          </div>

          <div className="project-scroll-shell">
            <div
              className="project-scroll"
              aria-label="Project list"
              ref={projectScrollRef}
            >
              {visibleProjects.map((project, index) => {
                const carouselId = `projectCarousel${index}`
                const useDarkCarouselControls =
                  project.title === 'Waspee' ||
                  project.title === 'LetsFindPeople' ||
                  project.title === 'AESA FCT Docs' ||
                  project.title === 'AESA Inquéritos' ||
                  project.title === 'CPASM'

                return (
                  <div className="project-scroll-item" key={project.title}>
                    <article className="card h-100 border border-white bg-white text-primary project-card">
                      {project.media?.type === 'video' ? (
                        <video
                          className="d-block w-100 project-cover-image project-cover-video"
                          controls
                          preload="metadata"
                          src={project.media.src}
                          title={project.media.title}
                        >
                        </video>
                      ) : project.media?.type === 'youtube' ? (
                        <iframe
                          className="d-block w-100 project-cover-image project-cover-embed"
                          src={project.media.src}
                          title={project.media.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div
                          id={carouselId}
                          className={`carousel slide project-cover-carousel ${
                            useDarkCarouselControls ? 'carousel-dark' : ''
                          }`}
                          aria-label={`${project.title} preview carousel`}
                        >
                          <div className="carousel-indicators">
                            {project.galleryImages.map((image, imageIndex) => (
                              <button
                                type="button"
                                data-bs-target={`#${carouselId}`}
                                data-bs-slide-to={imageIndex}
                                className={imageIndex === 0 ? 'active' : undefined}
                                aria-current={imageIndex === 0 ? 'true' : undefined}
                                aria-label={`${project.title} preview ${
                                  imageIndex + 1
                                }`}
                                key={image.alt}
                              ></button>
                            ))}
                          </div>

                          <div className="carousel-inner">
                            {project.galleryImages.map((image, imageIndex) => (
                              <div
                                className={`carousel-item ${
                                  imageIndex === 0 ? 'active' : ''
                                }`}
                                key={image.alt}
                              >
                                <img
                                  className="d-block w-100 project-cover-image"
                                  src={image.src}
                                  alt={image.alt}
                                />
                              </div>
                            ))}
                          </div>

                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target={`#${carouselId}`}
                            data-bs-slide="prev"
                            aria-label={`Previous ${project.title} preview`}
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target={`#${carouselId}`}
                            data-bs-slide="next"
                            aria-label={`Next ${project.title} preview`}
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                          </button>
                        </div>
                      )}

                      <div className="card-body d-flex flex-column">
                        <h3 className="h4 fw-bold">
                          {project.repoUrl ? (
                            <a
                              className="text-primary text-decoration-underline"
                              href={project.repoUrl}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {project.title}
                            </a>
                          ) : (
                            project.title
                          )}
                        </h3>
                        <p className="fw-semibold mb-3">
                          {project.description[locale]}
                        </p>

                        <p className="fw-bold mb-2">{text.madeWith}</p>
                        <div className="d-flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((technology) => (
                            <img
                              className="project-tech-icon"
                              src={technologyIcons[technology]}
                              alt={technology}
                              title={technology}
                              key={technology}
                            />
                          ))}
                        </div>

                        {project.websiteUrl ? (
                          <a
                            className="btn bg-primary text-white border-primary fw-semibold mt-auto"
                            href={project.websiteUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {text.viewWebsite}
                          </a>
                        ) : (
                          <button
                            className="btn bg-primary text-white border-primary fw-semibold mt-auto"
                            type="button"
                            disabled
                          >
                            {text.viewWebsite}
                          </button>
                        )}
                      </div>
                    </article>
                  </div>
                )
              })}
            </div>

            {showProjectScrollbar ? (
              <div
                className="project-scrollbar"
                ref={projectScrollbarTrackRef}
                onPointerDown={handleProjectScrollbarPointerDown}
                aria-hidden="true"
              >
                <div
                  className="project-scrollbar-thumb"
                  style={{
                    transform: `translateX(${projectScrollbarMetrics.thumbLeft}px)`,
                    width: `${projectScrollbarMetrics.thumbWidth}px`,
                  }}
                ></div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home
