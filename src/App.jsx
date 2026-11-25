
import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, Code2, Database,
  Github, Linkedin, Mail, Menu, X, Sparkles, Layers3,
  ExternalLink, GraduationCap, Workflow, Cloud, MapPin, Award
} from 'lucide-react'

const skills = [
  { name: 'Python', group: 'Programming' },
  { name: 'Java', group: 'Programming' },
  { name: 'C#', group: 'Programming' },
  { name: 'C++', group: 'Programming' },

  { name: 'Machine Learning', group: 'AI & ML' },
  { name: 'Deep Learning', group: 'AI & ML' },
  { name: 'Natural Language Processing', group: 'AI & ML' },
  { name: 'Large Language Models (LLMs)', group: 'AI & ML' },
  { name: 'Retrieval-Augmented Generation (RAG)', group: 'AI & ML' },
  { name: 'Prompt Engineering', group: 'AI & ML' },
  { name: 'Generative AI', group: 'AI & ML' },

  { name: 'Pandas & NumPy', group: 'Data' },
  { name: 'Scikit-learn', group: 'Data' },
  { name: 'SQL', group: 'Data' },
  { name: 'Data Analysis', group: 'Data' },
  { name: 'Data Cleaning & Preprocessing', group: 'Data' },
  { name: 'Exploratory Data Analysis (EDA)', group: 'Data' },
  { name: 'Data Visualization', group: 'Data' },
  { name: 'Statistical Analysis', group: 'Data' },

  { name: 'FastAPI', group: 'Development' },
  { name: 'Streamlit', group: 'Development' },
  { name: 'REST APIs', group: 'Development' },
  { name: 'HTML & CSS', group: 'Development' },
  { name: 'JavaScript', group: 'Development' },
  { name: 'SQL Server', group: 'Development' },
  { name: 'SQLAlchemy', group: 'Development' },
  { name: 'Git & GitHub', group: 'Development' },

  { name: 'Cloud Computing', group: 'Cloud' },
  { name: 'Microsoft Azure', group: 'Cloud' },
]

const projects = [
  {
    number: '01',
    type: 'GENERATIVE AI · EDUCATION',
    title: 'AI English Teacher',
    description: 'An AI-powered learning platform designed to support teachers and students with textbook-based assistance, document processing, exam generation, assignments, and performance tracking.',
    tags: ['Python', 'Streamlit', 'Gemini', 'LLMs', 'RAG', 'Supabase'],
    icon: BrainCircuit,
    tone: 'mint',
    status: 'Built project',
    note: 'Live application',
    link: 'https://ai-english-teacher-gjfy96irctlehytdxem77y.streamlit.app/',
  },
  {
    number: '02',
    type: 'FULL-STACK DEVELOPMENT · REAL ESTATE',
    title: 'Rabie Estate',
    description: 'A real estate web application built with a Python backend, interactive frontend, and SQL Server database. The project demonstrates API development, database integration, and property listing functionality.',
    tags: ['Python', 'FastAPI', 'HTML', 'CSS', 'JavaScript', 'SQL Server', 'SQLAlchemy'],
    icon: Code2,
    tone: 'mint',
    status: 'Built project',
    note: 'Full-Stack Web Application',
    link: '',
  },
  {
    number: '03',
    type: 'MACHINE LEARNING · BIOINFORMATICS',
    title: 'Cancer Drug Response Prediction',
    description: 'A graduation project exploring machine learning models to predict cancer cell-line sensitivity to drugs using pharmacogenomic data from the GDSC resource.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest', 'Feature Selection'],
    icon: Workflow,
    tone: 'violet',
    status: 'Graduation project',
    note: 'Research & ML project',
    link: '',
  },
  {
    number: '04',
    type: 'BIOMEDICAL AI · MEDICAL IMAGING',
    title: 'Multi-Modality Medical Image Fusion',
    description: 'Contributed to an AI-based medical image fusion project, combining information from different biomedical imaging modalities to enhance diagnostic clarity and support more comprehensive medical image analysis.',
    tags: ['Python', 'OpenCV', 'Medical Image Processing', 'Image Fusion', 'Biomedical AI'],
    icon: BrainCircuit,
    tone: 'violet',
    status: 'Biomedical AI Developer',
    note: 'Medical Image Processing',
    link: '',
  },
]

const certifications = [
  {
    title: 'Google Advanced Data Analytics Professional Certificate',
    issuer: 'Google',
    description: 'Advanced data analytics, machine learning, statistics, regression, and predictive modeling.',
  },
  {
    title: 'Mathematics for Machine Learning: Linear Algebra',
    issuer: 'Imperial College London',
    description: 'Mathematical foundations, vector spaces, and linear transformations for machine learning.',
  },
  {
    title: 'Introduction to Artificial Intelligence (AI)',
    issuer: 'IBM',
    description: 'Fundamental AI concepts, applications, machine learning basics, and ethical considerations.',
  },
  {
    title: 'Data Analysis with Python',
    issuer: 'IBM & Cognitive Class',
    description: 'Practical data analysis concepts and techniques using Python.',
  },
  {
    title: "Building a Company's Database using MySQL and SQL",
    issuer: 'Coursera',
    description: 'Database design, creation, and management using MySQL and SQL.',
  },
]

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Education', '#education'],
  ['Certifications', '#certifications'],
  ['Contact', '#contact'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Ahmed Hossam home">
          <span className="brand-mark">AH<span>.</span></span>
          <span className="brand-caption">AI ENGINEER</span>
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="availability-dot" /> OPEN TO OPPORTUNITIES
            </div>

            <p className="hero-kicker">Hello, I'm</p>
            <h1>Ahmed<br /><span>Hossam.</span></h1>

            <div className="hero-role">
              <span className="role-line" /> AI Engineer
            </div>

            <p className="hero-description">
              I build intelligent applications that turn data into useful experiences —
              exploring machine learning, data analysis, large language models, RAG systems, and practical AI-powered solutions.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="button button-ghost" href="#contact">
                Get in touch <ArrowRight size={17} />
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/ahmedhossam223" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/ahmed-hossam-9539a4268/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="mailto:ahmed5000hossam@gmail.com" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="photo-frame">
              <div className="photo-glow" />
              <img src="/profile.jpeg" alt="Ahmed Hossam" className="profile-photo" />
              <div className="photo-label">
                <span className="label-pulse" />
              </div>
            </div>

            <div className="floating-card card-top">
              <BrainCircuit size={18} />
              <span>Artificial Intelligence</span>
            </div>

            <div className="floating-card card-bottom">
              <Code2 size={18} />
              <span>Turning ideas into code</span>
            </div>

            <div className="visual-cross cross-one">+</div>
            <div className="visual-cross cross-two">+</div>
          </div>

          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={15} />
          </a>
        </section>

        {/* FOCUS STRIP */}
        <section className="intro-strip">
          <div className="section-wrap strip-inner">
            <span>FOCUSED ON</span>
            <p>
              Machine Learning <i /> Data Analysis <i /> LLMs <i /> RAG Systems
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section className="content-section section-wrap" id="about">
          <div className="section-heading">
            <span className="section-index">01 / ABOUT</span>
            <h2>Curious mind.<br /><span>Builder's mindset.</span></h2>
          </div>

          <div className="about-grid">
            <div className="about-lead">
              <Sparkles className="heading-icon" size={24} />
              <p className="large-copy">
                I'm an AI Engineer and Artificial Intelligence graduate interested in building practical systems that connect data, intelligent models, and real-world needs.
              </p>
            </div>

            <div className="about-details">
              <p>
                I hold a Bachelor's degree in Artificial Intelligence with a specialization in Bioinformatics. My academic background combines computational problem-solving, machine learning, and biological data analysis.
              </p>

              <p>
                I enjoy learning by building — from preparing datasets and performing exploratory data analysis to training machine learning models, integrating large language models, developing RAG systems, and creating backend APIs.
              </p>

              <p>
                I'm interested in data analysis, data cleaning, visualization, statistical analysis, machine learning, LLM application development, and end-to-end AI-powered solutions.
              </p>

              <a className="text-link" href="#projects">
                See selected projects <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="content-section skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-heading heading-row">
              <div>
                <span className="section-index">02 / TOOLKIT</span>
                <h2>Technologies I<br /><span>work with.</span></h2>
              </div>
              <p className="heading-aside">
                A growing toolkit for analyzing data, developing intelligent systems, and delivering AI-powered solutions.
              </p>
            </div>

            <div className="skills-grid">
              <div className="skill-category">
                <div className="skill-category-head">
                  <Code2 /><span>PROGRAMMING</span>
                </div>
                <div className="skill-pills">
                  {skills.filter(s => s.group === 'Programming').map(s => (
                    <span key={s.name}>{s.name}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <div className="skill-category-head">
                  <BrainCircuit /><span>AI & MACHINE LEARNING</span>
                </div>
                <div className="skill-pills">
                  {skills.filter(s => s.group === 'AI & ML').map(s => (
                    <span key={s.name}>{s.name}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <div className="skill-category-head">
                  <Database /><span>DATA ANALYSIS</span>
                </div>
                <div className="skill-pills">
                  {skills.filter(s => s.group === 'Data').map(s => (
                    <span key={s.name}>{s.name}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <div className="skill-category-head">
                  <Layers3 /><span>DEVELOPMENT TOOLS</span>
                </div>
                <div className="skill-pills">
                  {skills.filter(s => s.group === 'Development').map(s => (
                    <span key={s.name}>{s.name}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <div className="skill-category-head">
                  <Cloud /><span>CLOUD & DEVOPS</span>
                </div>
                <div className="skill-pills">
                  {skills.filter(s => s.group === 'Cloud').map(s => (
                    <span key={s.name}>{s.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="content-section section-wrap" id="projects">
          <div className="section-heading heading-row">
            <div>
              <span className="section-index">03 / SELECTED WORK</span>
              <h2>Projects with<br /><span>purpose.</span></h2>
            </div>
            <p className="heading-aside">
              A selection of academic and personal work exploring AI, machine learning, data analysis, and useful software.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project) => {
              const Icon = project.icon

              return (
                <article className={`project-card ${project.tone}`} key={project.number}>
                  <div className="project-number">{project.number}</div>

                  <div className="project-art">
                    <div className="art-ring ring-a" />
                    <div className="art-ring ring-b" />
                    <div className="art-icon">
                      <Icon size={42} strokeWidth={1.35} />
                    </div>
                    <span className="art-caption">{project.note}</span>
                  </div>

                  <div className="project-info">
                    <div className="project-type">{project.type}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                    </div>

                    <div className="project-footer">
                      <span className="project-status">
                        <span />{project.status}
                      </span>

                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noreferrer">
                          View live project <ExternalLink size={15} />
                        </a>
                      ) : (
                        <span className="project-note">Project details available on request</span>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="content-section education-section" id="education">
          <div className="section-wrap education-grid">
            <div className="section-heading">
              <span className="section-index">04 / EDUCATION</span>
              <h2>Learning is<br /><span>continuous.</span></h2>
            </div>

            <div className="education-card">
              <div className="education-icon">
                <GraduationCap size={25} />
              </div>
              <div>
                <span className="education-label">ACADEMIC BACKGROUND</span>
                <h3>Bachelor's Degree in Artificial Intelligence</h3>
                <p>Specialization: Bioinformatics</p>
                <span className="education-note">
                  Coursework and graduation project focused on AI, data, and computational biology.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="content-section certifications-section" id="certifications">
          <div className="section-wrap">
            <div className="section-heading heading-row">
              <div>
                <span className="section-index">05 / CERTIFICATIONS</span>
                <h2>Learning beyond<br /><span>the classroom.</span></h2>
              </div>

              <p className="heading-aside">
                Courses and professional learning in artificial intelligence,
                data analytics, and mathematics.
              </p>
            </div>

            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <article className="certification-card" key={cert.title}>
                  <div className="certification-icon">
                    <Award />
                  </div>

                  <div className="certification-info">
                    <span className="certification-number">
                      CERTIFICATION 0{index + 1}
                    </span>

                    <h3>{cert.title}</h3>

                    <p className="certification-issuer">
                      {cert.issuer}
                    </p>

                    <p>{cert.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <span className="section-index">06 / CONTACT</span>

            <div className="contact-content">
              <div>
                <p className="contact-kicker">HAVE A PROJECT OR OPPORTUNITY?</p>
                <h2>Let's build<br /><span>something useful.</span></h2>
              </div>

              <div className="contact-side">
                <p>
                  I'm interested in connecting with people working on AI, machine learning, data analysis, LLM applications, cloud technologies, and meaningful technology.
                </p>
                <a className="button button-primary" href="mailto:ahmed5000hossam@gmail.com">
                  Say hello <ArrowUpRight size={17} />
                </a>
              </div>
            </div>

            <div className="contact-links">
              <a href="mailto:ahmed5000hossam@gmail.com">
                <Mail size={17} /> Email <ArrowUpRight size={14} />
              </a>

              <a href="https://www.linkedin.com/in/ahmed-hossam-9539a4268/" target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} />
              </a>

              <a href="https://github.com/ahmedhossam223" target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub <ArrowUpRight size={14} />
              </a>

              <div className="contact-location">
                <MapPin size={17} />
                <span>Abu Dhabi, UAE</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">AH<span>.</span></span>
        </a>
        <span>© {new Date().getFullYear()} Ahmed Hossam. Built with curiosity and code.</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  )
}

export default App
