import { useEffect, useRef, useState } from 'react'
import { Code2, Globe2, ChevronDown, ShoppingBag, X, Sun, Moon, Star, UserRound, ChevronLeft, ChevronRight } from 'lucide-react'
import { siReact, siJavascript, siHtml5, siCss, siTailwindcss, siWordpress, siWix, siShopify, siWhatsapp } from 'simple-icons'
import CV from './CV.jsx'
import { featuredProjects as projects } from './projects.js'

const skills = [
  { name: 'React', brandIcon: siReact, brandColor: '#61DAFB', description: 'Build reusable UI from focused components. Add interactive states while keeping larger pages structured and easy to extend.' },
  { name: 'JavaScript', brandIcon: siJavascript, brandColor: '#F7DF1E', description: 'Bring interfaces to life with modern JavaScript. Handle events, state, and the small interactions that make a site feel responsive.' },
  { name: 'HTML5', brandIcon: siHtml5, brandColor: '#E34F26', description: 'Create semantic page structure that is easier to navigate. Use accessible markup to give browsers and assistive technology clear meaning.' },
  { name: 'CSS3', brandIcon: siCss, brandColor: '#1572B6', description: 'Shape layouts that adapt from mobile to desktop. Use modern CSS for clear visual hierarchy, transitions, and polished details.' },
  { name: 'Tailwind CSS', brandIcon: siTailwindcss, brandColor: '#06B6D4', description: 'Build consistent interfaces with utility-first styling. Reuse design tokens and iterate on responsive layouts quickly.' },
  { name: 'WordPress', brandIcon: siWordpress, brandColor: '#21759B', description: 'Create and customize content-driven websites. Structure pages so common updates stay manageable for the people who run the site.' },
  { name: 'Wix', brandIcon: siWix, brandColor: '#0C6EFC', description: 'Build and refine responsive Wix websites. Organize pages and content into a clean experience that is straightforward to maintain.' },
  { name: 'E-commerce', Icon: ShoppingBag, description: 'Design storefront experiences around products and clear next steps. Keep browsing, product details, and checkout easy to follow.' },
  { name: 'Shopify Custom Theme Design', brandIcon: siShopify, brandColor: '#95BF47', description: 'Three years of experience customizing Shopify themes, shaping storefront sections, styling, and responsive shopping details for each brand.' },
]

const codeLines = [
  'const developer = {',
  "  name: 'Arindam Chakraborty',",
  "  role: 'Lead Frontend Developer',",
  '  experience: 10,',
  "  tools: ['React', 'JavaScript'],",
  "  platforms: ['Shopify', 'WordPress'],",
  "  focus: 'Thoughtful digital experiences',",
  '}',
]

const reviews = [
  {
    id: 1,
    project: 'E-COMMERCE WEBSITE',
    rating: 5,
    name: 'Rohit Bucha',
    designation: 'Founder',
    text: 'Arindam transformed our website into a much more professional and user-friendly experience. The responsive design is excellent, and he paid close attention to every detail. Communication was smooth throughout the project.',
  },
  {
    id: 2,
    project: 'REACT DEVELOPMENT',
    rating: 4,
    name: 'Siddharth',
    designation: 'Co-Founder',
    text: 'Working with Arindam was a great experience. He understood our requirements quickly and delivered a clean, modern React interface that works beautifully across desktop and mobile. Highly recommended for frontend development.',
  },
  {
    id: 3,
    project: 'WORDPRESS DEVELOPMENT',
    rating: 4.5,
    name: 'Shrijit Chakraborty',
    designation: 'Founder',
    text: 'Arindam did an excellent job developing our WordPress website. The website looks professional, loads smoothly, and is easy to manage. He was patient with revisions and made sure everything worked exactly as expected.',
  },
  {
    id: 4,
    project: 'SHOPIFY DEVELOPMENT',
    rating: 5,
    name: 'Gaurav',
    designation: 'Founder',
    text: 'We needed a customized Shopify experience rather than a standard theme, and Arindam delivered exactly what we were looking for. The design feels unique, the shopping experience is smooth, and the attention to detail was impressive.',
  },
  {
    id: 5,
    project: 'WEBSITE UI / UX',
    rating: 4,
    name: 'Rohit Bucha',
    designation: 'Founder',
    text: 'Arindam is highly skilled at turning ideas into clean and modern websites. He understood our vision and created a responsive interface that looks great on every device. Professional, creative, and easy to work with.',
  },
]

const freelancePackages = [
  {
    number: '01',
    name: 'Landing page',
    Icon: Code2,
    price: '₹9,000+',
    description: 'A focused, polished page for a product, service, or campaign.',
    features: ['Single-page responsive build', 'Contact form integration', 'On-page SEO fundamentals'],
  },
  {
    number: '02',
    name: 'Business website',
    Icon: Globe2,
    price: '₹20,000+',
    description: 'A flexible multi-page site that gives your business room to grow.',
    features: ['Up to five core pages', 'WordPress or Wix setup', 'Responsive UI and SEO basics'],
  },
  {
    number: '03',
    name: 'E-commerce store',
    Icon: ShoppingBag,
    price: '₹30,000+',
    description: 'A product-first storefront with a considered path to checkout.',
    features: ['Shopify or WordPress setup', 'Catalogue and checkout integration', 'Mobile-first storefront UI'],
  },
]

function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (!('IntersectionObserver' in window)) {
      element.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return ref
}

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow-icon">↗</span>
}

function BrandIcon({ icon, color, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" style={{ color }}>
      <path d={icon.path} />
    </svg>
  )
}

function Header({ theme, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Arindam Chakraborty, home">arindam<span>.dev</span></a>
      <p className="header-role">LEAD FRONTEND <span>/</span> KOLKATA, IN</p>
      <a className="header-availability" href="#contact"><span /> OPEN TO SELECT PROJECTS</a>
      <button
        className="theme-toggle"
        type="button"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        aria-pressed={theme === 'dark'}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        onClick={onThemeToggle}
      >
        <Sun size={16} aria-hidden="true" />
        <span className="theme-switch-track"><span className="theme-switch-thumb" /></span>
        <Moon size={15} aria-hidden="true" />
      </button>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span /><span />
      </button>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#top" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#freelance" onClick={() => setMenuOpen(false)}>Freelance</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="hero page-shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> LEAD FRONTEND DEVELOPER <span className="hero-location">/ KOLKATA, INDIA</span></p>
        <h1>CODE THAT<br />FEELS <span>HUMAN.</span></h1>
        <div className="hero-bottom">
          <p>10+ years turning ambitious ideas into responsive, accessible web experiences. Thoughtful React builds, useful details, and a little more humanity in every interface.</p>
          <a className="hero-link" href="#work">EXPLORE SELECTED WORK <ArrowIcon /></a>
        </div>
      </div>
      <div className="hero-visual" aria-label="Website and storefront concept">
        <div className="visual-topline"><span>BUILD / SHIP / ITERATE</span><span>EST. 2014 — NOW</span></div>
        <div className="visual-photo">
          <img src="./images/hero-banner.png" alt="Illustrative engineering team collaborating over a project" fetchPriority="high" />
          <span className="visual-stamp">BUILT<br />WITH<br /><i>INTENT.</i></span>
          <span className="visual-code"><span>const</span> experience = <b>"thoughtful"</b>;</span>
        </div>
        <div className="visual-bottom"><span>REACT / JAVASCRIPT / ACCESSIBILITY</span><span>10+ YEARS <b>↗</b></span></div>
        <span className="visual-index">INDEPENDENT BY NATURE</span>
      </div>
      <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
    </section>
  )
}

function About() {
  const revealRef = useReveal()

  return (
    <section className="about-section section-shell reveal" id="about" ref={revealRef}>
      <div className="section-marker"><span>01</span><span>ABOUT</span></div>
      <div className="about-content">
        <div className="section-title-row"><h2>FROM BRIEF<br />TO <span>BROWSER.</span></h2><span className="title-aside">THOUGHTFUL FRONTEND.<br />BUILT FOR THE REAL WORLD.</span></div>
        <p className="about-copy">I'm Arindam Chakraborty, a lead frontend developer with more than a decade of experience bringing digital products to life. I build responsive interfaces, shape reusable systems, and lead teams toward work that feels considered from the first tap to the final detail.</p>
        <div className="capability-strip"><span>10+ YEARS BUILDING FOR THE WEB</span><span>TEAM & TECHNICAL LEADERSHIP</span><span>PERFORMANCE, UX, DETAIL</span></div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, onOpen }) {
  const revealRef = useReveal()

  const tiltCard = (event) => {
    if (event.pointerType !== 'mouse') return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    event.currentTarget.style.setProperty('--pointer-tilt-x', `${(-y * 5).toFixed(2)}deg`)
    event.currentTarget.style.setProperty('--pointer-tilt-y', `${(x * 7).toFixed(2)}deg`)
  }

  const resetCardTilt = (event) => {
    event.currentTarget.style.removeProperty('--pointer-tilt-x')
    event.currentTarget.style.removeProperty('--pointer-tilt-y')
  }

  return (
    <article className="project-card reveal" ref={revealRef} style={{ '--reveal-delay': `${(index % 2) * 140}ms` }}>
      <button className="project-card-button" type="button" onClick={() => onOpen(project)} onPointerMove={tiltCard} onPointerLeave={resetCardTilt} aria-label={`View ${project.title} project details`}>
      <span className="project-image">
        <img src={project.image} alt={project.alt} loading="lazy" decoding="async" />
        <span className="project-number">{project.number} / {String(projects.length).padStart(2, '0')}</span>
        <span className="project-arrow" aria-hidden="true"><ArrowIcon /></span>
      </span>
      <span className="project-info"><span className="project-summary"><span className="project-type">{project.type}</span><span className="project-title" role="heading" aria-level="3">{project.title}</span><span className="project-description">{project.description}</span></span><span className="project-index">{project.number}</span></span>
      </button>
    </article>
  )
}

function Projects() {
  const revealRef = useReveal()
  const dialogRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if (selectedProject && !dialogRef.current?.open) dialogRef.current?.showModal()
  }, [selectedProject])

  const closeFromBackdrop = (event) => {
    if (event.target === dialogRef.current) dialogRef.current.close()
  }

  return (
    <section className="work-section section-shell reveal" id="work" ref={revealRef}>
      <div className="section-marker"><span>02</span><span>SELECTED PROJECTS</span></div>
      <div className="work-heading"><h2>THE WORK<br /><span>SPEAKS.</span></h2><p>Six launches across engineering, fashion, commerce, culture, and community. Open a project for its brief and platform details. Photography is illustrative.</p></div>
      <div className="project-grid" aria-label="Portfolio projects">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.number} onOpen={setSelectedProject} />
        ))}
      </div>
      <dialog className="project-dialog" ref={dialogRef} aria-labelledby="project-dialog-title" onClick={closeFromBackdrop} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="project-dialog-content">
            <div className="project-dialog-header"><span>{selectedProject.type} / {selectedProject.number} OF {String(projects.length).padStart(2, '0')}</span><button type="button" aria-label="Close project details" onClick={() => dialogRef.current?.close()}><X size={20} /></button></div>
            <div className="project-dialog-layout">
              <div className="project-dialog-image"><img src={selectedProject.image} alt={selectedProject.alt} /></div>
              <div className="project-dialog-copy"><span className="project-dialog-kicker">PROJECT / {selectedProject.number}</span><h3 id="project-dialog-title">{selectedProject.title}</h3><p>{selectedProject.description}</p><h4>PLATFORM & FOCUS</h4><div className="project-platforms">{selectedProject.platforms.map((platform) => <span key={platform}><Code2 size={16} aria-hidden="true" />{platform}</span>)}</div></div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}

function Toolkit() {
  const revealRef = useReveal()
  const [expandedSkill, setExpandedSkill] = useState(null)
  const [activeCodeLine, setActiveCodeLine] = useState(0)

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let timer

    const startAnimation = () => {
      if (motionPreference.matches || timer) return
      timer = window.setInterval(() => {
        setActiveCodeLine((line) => (line + 1) % codeLines.length)
      }, 700)
    }
    const stopAnimation = () => {
      window.clearInterval(timer)
      timer = undefined
    }
    const updateAnimation = () => {
      if (motionPreference.matches) stopAnimation()
      else startAnimation()
    }

    startAnimation()
    motionPreference.addEventListener('change', updateAnimation)

    return () => {
      stopAnimation()
      motionPreference.removeEventListener('change', updateAnimation)
    }
  }, [])

  return (
    <section className="toolkit-section" aria-labelledby="toolkit-title">
      <div className="toolkit-inner section-shell reveal" ref={revealRef}>
        <div className="section-marker"><span>03</span><span>FRONTEND TOOLKIT</span></div>
        <div className="toolkit-marquee" aria-label="Technologies and platforms">
          <div className="toolkit-marquee-track" aria-hidden="true">
            {[0, 1].map((group) => (
              <div className="toolkit-marquee-group" key={group}>
                {skills.map(({ name, Icon, brandIcon, brandColor }) => (
                  <span className="toolkit-marquee-item" key={name}>
                    {brandIcon
                      ? <BrandIcon icon={brandIcon} color={brandColor} size={21} />
                      : <Icon size={21} strokeWidth={1.8} />}
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="toolkit-layout">
          <div className="toolkit-copy">
            <h2 id="toolkit-title">WHAT I DO<span>?</span></h2>
            <p>A decade of hands-on work across frontend engineering, content platforms, performance, and e-commerce.</p>
            <ul className="skill-list">
              {skills.map(({ name, Icon, description, brandIcon, brandColor }, index) => {
                const isExpanded = expandedSkill === index
                const triggerId = `skill-trigger-${index}`
                const detailId = `skill-detail-${index}`

                return (
                  <li className={isExpanded ? 'skill-item is-expanded' : 'skill-item'} key={name}>
                    <button
                      className="skill-trigger"
                      id={triggerId}
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={detailId}
                      onClick={() => setExpandedSkill(isExpanded ? null : index)}
                    >
                      <span className="skill-icon" aria-hidden="true">
                        {brandIcon
                          ? <BrandIcon icon={brandIcon} color={brandColor} size={17} />
                          : <Icon size={17} strokeWidth={1.7} />}
                      </span>
                      <span className="skill-name">{name}</span>
                      <ChevronDown className="skill-chevron" size={16} aria-hidden="true" />
                    </button>
                    <div className="skill-details" id={detailId} aria-labelledby={triggerId} aria-hidden={!isExpanded}>
                      <div className="skill-details-inner"><p>{description}</p></div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="toolkit-code" aria-hidden="true">
            <div className="toolkit-code-header"><span><i /> LIVE CODE / PROFILE.JS</span><span>REACT</span></div>
            <pre>
              {codeLines.map((line, index) => (
                <span className={activeCodeLine === index ? 'toolkit-code-line is-active' : 'toolkit-code-line'} key={line}>
                  <span className="toolkit-code-number">{String(index + 1).padStart(2, '0')}</span>
                  <code>{line}</code>
                </span>
              ))}
            </pre>
            <div className="toolkit-code-footer"><span>10+ YEARS BUILDING FOR THE WEB</span><span>{String(activeCodeLine + 1).padStart(2, '0')} / {String(codeLines.length).padStart(2, '0')}</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FreelancePricing() {
  const revealRef = useReveal()

  return (
    <section className="freelance-section" id="freelance" aria-labelledby="freelance-title">
      <div className="freelance-inner section-shell reveal" ref={revealRef}>
        <div className="section-marker"><span>04</span><span>FREELANCE SERVICES</span></div>
        <div className="freelance-heading">
          <div><p className="freelance-eyebrow">CLEAR STARTING POINTS</p><h2 id="freelance-title">GOOD WORK.<br /><span>FAIR SCOPE.</span></h2></div>
          <p>Choose a starting package, then we’ll tailor the details to your goals, content, and integrations.</p>
        </div>
        <div className="freelance-grid">
          {freelancePackages.map(({ number, name, Icon, price, description, features }) => (
            <article className="rate-card" key={name}>
              <div className="rate-card-top"><span>{number} / 03</span><Icon size={21} strokeWidth={1.7} aria-hidden="true" /></div>
              <h3>{name}</h3>
              <p className="rate-description">{description}</p>
              <div className="rate-price"><span>STARTING AT</span><strong>{price}</strong></div>
              <ul>{features.map((feature) => <li key={feature}><span aria-hidden="true">+</span>{feature}</li>)}</ul>
              <a className="rate-cta" href={`mailto:arindam23@live.com?subject=${encodeURIComponent(`${name} project inquiry`)}`}>DISCUSS THIS PACKAGE <ArrowIcon /></a>
            </article>
          ))}
        </div>
        <p className="freelance-note">Indicative starting prices in INR. Final quote depends on scope, content, integrations, and third-party costs.</p>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner section-shell">
        <div className="section-marker"><span>06</span><span>THE NEXT STEP</span></div>
        <p className="contact-prelude">HAVE AN IDEA?</p>
        <h2>LET'S MAKE<br /><span>IT HAPPEN.</span></h2>
        <div className="contact-bottom"><p>Have a demanding brief and an appetite for details? Let's turn it into an experience worth spending time with.</p><a className="contact-button" href="mailto:arindam23@live.com?subject=Frontend%20project%20inquiry">START A CONVERSATION <ArrowIcon /></a></div>
        <span className="contact-orbit" aria-hidden="true">A<span>.</span></span>
      </div>
    </section>
  )
}

function WhatsAppButton() {
  const message = encodeURIComponent("Hi Arindam, I saw your portfolio and would like to discuss a project.")

  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/919038769216?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Message Arindam on WhatsApp"
      title="Chat on WhatsApp"
    >
      <BrandIcon icon={siWhatsapp} color="currentColor" size={25} />
    </a>
  )
}

function Reviews() {
  const [activeReview, setActiveReview] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionPreference.matches || isPaused) return undefined

    const timer = window.setInterval(() => {
      setActiveReview((index) => (index + 1) % reviews.length)
    }, 5500)

    return () => window.clearInterval(timer)
  }, [isPaused])

  const changeReview = (direction) => {
    setActiveReview((index) => (index + direction + reviews.length) % reviews.length)
  }

  return (
    <section className="reviews-section section-shell" id="reviews" aria-labelledby="reviews-title">
      <div className="reviews-layout">
        <div
          className="review-carousel"
          aria-label="Client review carousel"
          aria-roledescription="carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false)
          }}
        >
          <div className="review-track" style={{ '--active-review': activeReview }}>
            {reviews.map((item, index) => (
              <article
                className="review-card"
                key={item.id}
                aria-label={`Review ${index + 1} of ${reviews.length}`}
                aria-hidden={activeReview !== index}
                aria-roledescription="slide"
              >
                <div className="review-card-top"><span className="review-placeholder-label">{String(item.id).padStart(2, '0')} — {item.project}</span><span className="review-stars-display" aria-label={`${item.rating} out of 5 stars`}>{[1, 2, 3, 4, 5].map((star) => <span className={star <= item.rating ? 'review-card-star is-filled' : star - item.rating === 0.5 ? 'review-card-star is-half' : 'review-card-star'} key={star}><Star size={16} aria-hidden="true" />{star - item.rating === 0.5 && <Star className="review-card-star-half" size={16} aria-hidden="true" />}</span>)}</span></div>
                <blockquote>{item.text}</blockquote>
                <div className="reviewer">
                  <span className="reviewer-avatar" aria-hidden="true"><UserRound size={22} /></span>
                  <span className="reviewer-copy"><strong>{item.name}</strong><span>{item.designation}</span></span>
                </div>
              </article>
            ))}
          </div>
          <div className="review-carousel-dots" aria-label="Choose a review">
            {reviews.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Show review ${index + 1}`}
                aria-current={activeReview === index ? 'true' : undefined}
                onClick={() => setActiveReview(index)}
              />
            ))}
          </div>
        </div>
        <div className="reviews-intro">
          <p className="reviews-eyebrow">CLIENT FEEDBACK</p>
          <h2 id="reviews-title">KIND WORDS<br /><span>FROM CLIENTS.</span></h2>
          <p>Client feedback from projects across e-commerce, React, WordPress, Shopify, and website UI/UX.</p>
          <div className="reviews-rating-summary">
            <span className="reviews-rating-number">{reviews[activeReview].rating.toFixed(1)}</span>
            <span className="reviews-rating-detail">
              <span className="reviews-rating-stars" aria-label={`${reviews[activeReview].rating} out of 5 illustrative stars`}>
                {[1, 2, 3, 4, 5].map((star) => <span className={star <= reviews[activeReview].rating ? 'review-card-star is-filled' : star - reviews[activeReview].rating === 0.5 ? 'review-card-star is-half' : 'review-card-star'} key={star}><Star size={18} aria-hidden="true" />{star - reviews[activeReview].rating === 0.5 && <Star className="review-card-star-half" size={18} aria-hidden="true" />}</span>)}
              </span>
              <span className="reviews-rating-caption">CLIENT RATING · {reviews[activeReview].project}</span>
            </span>
          </div>
          <div className="reviews-note"><Star size={16} fill="currentColor" aria-hidden="true" /><span>Feedback from completed client projects.</span></div>
          <div className="reviews-controls">
            <button type="button" aria-label="Previous review" onClick={() => changeReview(-1)}><ChevronLeft size={19} aria-hidden="true" /></button>
            <span>{String(activeReview + 1).padStart(2, '0')} <i>/</i> {String(reviews.length).padStart(2, '0')}</span>
            <button type="button" aria-label="Next review" onClick={() => changeReview(1)}><ChevronRight size={19} aria-hidden="true" /></button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer section-shell">
      <a className="wordmark" href="#top">A<span>.</span></a>
      <p>BUILT WITH REACT. STYLED WITH CARE.</p>
      <a href="#top" className="back-top">BACK TO TOP ↑</a>
    </footer>
  )
}

function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      <a className="nav-home" href="#top" aria-label="Home">A<span>.</span></a>
      <a href="#about">ABOUT</a>
      <a href="#work">WORK</a>
      <a href="#cv">CV</a>
      <a href="#contact">CONTACT <ArrowIcon /></a>
    </nav>
  )
}

export default function Portfolio() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('arindam-portfolio-theme') === 'light' ? 'light' : 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme

    try {
      localStorage.setItem('arindam-portfolio-theme', theme)
    } catch {}

    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#071923' : '#f8f8f4')
  }, [theme])

  return (
    <div className="portfolio-app" data-theme={theme}>
      <div className="scroll-progress" aria-hidden="true" />
      <Header theme={theme} onThemeToggle={() => setTheme(current => current === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Toolkit />
        <FreelancePricing />
        <CV />
        <Reviews />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
      <BottomNav />
    </div>
  )
}