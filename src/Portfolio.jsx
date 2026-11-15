import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, Globe2, ChevronDown, ShoppingBag, X, Sun, Moon, Star, UserRound, ChevronLeft, ChevronRight } from 'lucide-react'
import { siReact, siJavascript, siHtml5, siCss, siTailwindcss, siWordpress, siWix, siShopify, siWhatsapp } from 'simple-icons'
import CV from './CV.jsx'
import { featuredProjects as projects } from './projects.js'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: 'React', brandIcon: siReact, brandColor: '#61DAFB', description: 'Build reusable interface pieces and keep interactive pages easier to organize.' },
  { name: 'JavaScript', brandIcon: siJavascript, brandColor: '#F7DF1E', description: 'Handle the interactions behind menus, forms, and other parts of a page that respond to the user.' },
  { name: 'HTML5', brandIcon: siHtml5, brandColor: '#E34F26', description: 'Use semantic elements to give a page a clear structure for browsers, assistive technology, and future edits.' },
  { name: 'CSS3', brandIcon: siCss, brandColor: '#1572B6', description: 'Build layouts that adapt to different screen sizes, then refine the spacing, typography, and motion.' },
  { name: 'Tailwind CSS', brandIcon: siTailwindcss, brandColor: '#06B6D4', description: 'Use utility classes and shared design tokens to build consistent layouts and adjust them quickly.' },
  { name: 'WordPress', brandIcon: siWordpress, brandColor: '#21759B', description: 'Create and customize content-driven sites that are straightforward for the people who update them.' },
  { name: 'Wix', brandIcon: siWix, brandColor: '#0C6EFC', description: 'Build responsive Wix sites and keep their pages and content easy to manage.' },
  { name: 'E-commerce', Icon: ShoppingBag, description: 'Organize product pages and checkout so shoppers can find what they need and know what to do next.' },
  { name: 'Shopify Custom Theme Design', brandIcon: siShopify, brandColor: '#95BF47', description: 'Three years of Shopify theme work, including custom storefront sections and responsive shopping details.' },
]

const codeLines = [
  'const developer = {',
  "  name: 'Arindam Chakraborty',",
  "  role: 'Lead Frontend Developer',",
  '  experience: 10,',
  "  tools: ['React', 'JavaScript'],",
  "  platforms: ['Shopify', 'WordPress'],",
  "  focus: 'Clear, responsive interfaces',",
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
    price: 15000,
    description: 'A single page for one clear product, service, or campaign.',
    features: ['Single-page responsive build', 'Contact form integration', 'On-page SEO fundamentals'],
  },
  {
    number: '02',
    name: 'Business website',
    Icon: Globe2,
    price: 35000,
    description: 'A small multi-page site for the main information your customers need.',
    features: ['Up to five core pages', 'WordPress or Wix setup', 'Responsive UI and SEO basics'],
  },
  {
    number: '03',
    name: 'E-commerce store',
    Icon: ShoppingBag,
    price: 60000,
    description: 'An online store with a clear path from product pages to checkout.',
    features: ['Shopify or WordPress setup', 'Catalogue and checkout integration', 'Mobile-first storefront UI'],
  },
]

const currencyOptions = [
  { code: 'INR', country: 'India', flag: '🇮🇳', locale: 'en-IN', rate: 1 },
  { code: 'USD', country: 'United States', flag: '🇺🇸', locale: 'en-US', rate: 0.01052676099 },
  { code: 'EUR', country: 'European Union', flag: '🇪🇺', locale: 'en-IE', rate: 0.00936644627 },
  { code: 'GBP', country: 'United Kingdom', flag: '🇬🇧', locale: 'en-GB', rate: 0.00789773145 },
  { code: 'AUD', country: 'Australia', flag: '🇦🇺', locale: 'en-AU', rate: 0.01515096233 },
  { code: 'CAD', country: 'Canada', flag: '🇨🇦', locale: 'en-CA', rate: 0.0148873953 },
  { code: 'SGD', country: 'Singapore', flag: '🇸🇬', locale: 'en-SG', rate: 0.0134728837 },
  { code: 'AED', country: 'United Arab Emirates', flag: '🇦🇪', locale: 'en-AE', rate: 0.03865952974 },
]

const timelineOptions = [
  { code: 'priority', label: 'Priority', detail: '1-2 weeks', multiplier: 1.25 },
  { code: 'standard', label: 'Standard', detail: '2-4 weeks', multiplier: 1 },
  { code: 'extended', label: 'Extended', detail: '4-6 weeks', multiplier: 0.9 },
]

function formatCurrency(amount, currency, multiplier = 1) {
  return new Intl.NumberFormat(currency.locale, {
    style: 'currency',
    currency: currency.code,
    maximumFractionDigits: 0,
  }).format(amount * multiplier * currency.rate)
}

function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const animation = gsap.fromTo(element,
      { autoAlpha: 0, y: 28 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 88%',
          once: true,
        },
      },
    )

    return () => {
      animation.scrollTrigger?.kill()
      animation.kill()
    }
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

function ThreeHeroScene({ theme }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)
    camera.position.set(0, 0.15, 7.4)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const accentHex = theme === 'light' ? '#566b48' : '#b7c28e'
    const accent = new THREE.Color(accentHex)
    const softAccent = new THREE.Color(theme === 'light' ? '#ad6d51' : '#d29474')
    const group = new THREE.Group()
    const motionGroup = new THREE.Group()
    motionGroup.position.set(-0.18, 0.08, -0.65)
    motionGroup.scale.setScalar(0.62)
    group.add(motionGroup)
    scene.add(group)

    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.45, 2), new THREE.MeshBasicMaterial({ color: accent, wireframe: true, transparent: true, opacity: 0.38 }))
    const innerCore = new THREE.Mesh(new THREE.IcosahedronGeometry(0.92, 1), new THREE.MeshBasicMaterial({ color: softAccent, wireframe: true, transparent: true, opacity: 0.26 }))
    motionGroup.add(core, innerCore)

    const ringMaterial = new THREE.MeshBasicMaterial({ color: accent, wireframe: true, transparent: true, opacity: 0.25 })
    const rings = [
      { rotation: [0.3, 0.2, 0.2], scale: 1.75 },
      { rotation: [1.1, 0.3, -0.4], scale: 2.05 },
      { rotation: [-0.6, 0.8, 0.2], scale: 2.35 },
    ].map(({ rotation, scale }) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.05, 0.012, 8, 96), ringMaterial)
      ring.rotation.set(...rotation)
      ring.scale.setScalar(scale)
      motionGroup.add(ring)
      return ring
    })

    const particleCount = 620
    const positions = new Float32Array(particleCount * 3)
    for (let index = 0; index < particleCount; index += 1) {
      const radius = 2.2 + Math.random() * 2.4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[(index * 3) + 1] = radius * Math.cos(phi)
      positions[(index * 3) + 2] = radius * Math.sin(phi) * Math.sin(theta)
    }
    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particles = new THREE.Points(particleGeometry, new THREE.PointsMaterial({ color: softAccent, size: 0.025, transparent: true, opacity: 0.7, sizeAttenuation: true }))
    scene.add(particles)

    const targetRotation = new THREE.Vector2()
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const hero = mount.closest('.hero')
    const scrollAnimation = reducedMotion.matches || !hero ? null : gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    }).to(group.rotation, { x: 0.42, y: 1.05, z: -0.12, ease: 'none' })
    let frameId = null
    let isVisible = false

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect()
      if (!width || !height) return
      camera.aspect = width / height
      camera.position.z = Math.max(7.4, 2.9 / (2 * camera.aspect * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))))
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }
    const onPointerMove = (event) => {
      if (reducedMotion.matches) return
      const bounds = mount.getBoundingClientRect()
      targetRotation.set(-(((event.clientY - bounds.top) / bounds.height) * 2 - 1) * 0.22, (((event.clientX - bounds.left) / bounds.width) * 2 - 1) * 0.3)
    }
    const onVisibilityChange = () => {
      if (document.hidden) {
        if (frameId !== null) window.cancelAnimationFrame(frameId)
        frameId = null
      } else if (isVisible && frameId === null && !reducedMotion.matches) {
        animate()
      }
    }
    const animate = () => {
      if (!isVisible || document.hidden) {
        frameId = null
        return
      }
      frameId = window.requestAnimationFrame(animate)
      const motionScale = reducedMotion.matches ? 0 : 1
      motionGroup.rotation.x += (targetRotation.x - motionGroup.rotation.x) * 0.035
      motionGroup.rotation.y += (targetRotation.y - motionGroup.rotation.y) * 0.035
      motionGroup.rotation.z += 0.0015 * motionScale
      core.rotation.y += 0.003 * motionScale
      innerCore.rotation.y -= 0.004 * motionScale
      rings.forEach((ring, index) => { ring.rotation.z += (0.001 + (index * 0.0007)) * motionScale })
      particles.rotation.y -= 0.00035 * motionScale
      renderer.render(scene, camera)
    }

    const observer = new ResizeObserver(resize)
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
      if (isVisible && !document.hidden && frameId === null && !reducedMotion.matches) animate()
      if (!isVisible && frameId !== null) {
        window.cancelAnimationFrame(frameId)
        frameId = null
      }
    }, { rootMargin: '100px' })
    observer.observe(mount)
    visibilityObserver.observe(mount)
    mount.addEventListener('pointermove', onPointerMove)
    document.addEventListener('visibilitychange', onVisibilityChange)
    resize()
    if (reducedMotion.matches) renderer.render(scene, camera)

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId)
      observer.disconnect()
      visibilityObserver.disconnect()
      document.removeEventListener('visibilitychange', onVisibilityChange)
      scrollAnimation?.scrollTrigger?.kill()
      scrollAnimation?.kill()
      mount.removeEventListener('pointermove', onPointerMove)
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose()
        if (object.material) (Array.isArray(object.material) ? object.material : [object.material]).forEach((material) => material.dispose())
      })
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [theme])

  return <div className="three-hero-scene" ref={mountRef} aria-hidden="true" />
}

function Header({ theme, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Arindam Chakraborty, home">arindam<span>.dev</span></a>
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
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  )
}

function Hero({ theme }) {
  return (
    <section className="hero page-shell" id="top">
      <svg className="hero-waves" viewBox="0 0 1440 820" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M-70 66 C95 252 184 601 478 716 C770 830 889 529 1072 344 C1212 202 1354 137 1510 82" />
        <path d="M-74 98 C111 278 202 622 495 744 C790 866 917 554 1096 369 C1238 221 1376 159 1516 112" />
      </svg>
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> REACT / SHOPIFY / WORDPRESS</p>
        <h1>FRONTEND<br />DEVELOPER<br /><span>IN KOLKATA.</span></h1>
        <div className="hero-bottom">
          <p>I've spent 10+ years building websites and online stores, from React interfaces to Shopify and WordPress projects.</p>
          <a className="hero-link" href="#work">SEE MY WORK <ArrowIcon /></a>
        </div>
      </div>
      <div className="hero-visual" aria-label="Interactive three dimensional frontend developer visual">
        <div className="visual-photo">
          <ThreeHeroScene theme={theme} />
          <img
            className="hero-character-image"
            src="/images/hero-character.png"
            alt="Illustration of a developer sitting in a chair and coding on a laptop"
          />
          <span className="visual-grid" aria-hidden="true" />
          <span className="visual-top-chip"><i /> FRONTEND / UI / E-COMMERCE</span>
        </div>
      </div>
      <div className="hero-side-copy">
        <p className="hero-side-kicker"><span /> HOW I APPROACH THE WORK</p>
        <h2 className="hero-side-lead">Make the next step <span>easy to find.</span></h2>
        <p className="hero-side-description">I build responsive interfaces for business websites, online stores, and other web projects.</p>
        <p className="hero-side-focus">CLEAR LAYOUTS <i /> RESPONSIVE UI <i /> ACCESSIBILITY</p>
        <a className="hero-side-link" href="#about">A LITTLE ABOUT ME <ArrowIcon /></a>
      </div>
      <div className="hero-tech-strip" role="group" aria-label="Technologies I work with">
        {skills.map(({ name, brandIcon, Icon }, index) => (
          <span
            className="hero-tech-badge"
            role="img"
            aria-label={name}
            tabIndex={0}
            style={{ '--tech-index': index, '--tech-count': skills.length }}
            key={name}
          >
            {brandIcon ? <BrandIcon icon={brandIcon} color="currentColor" size={20} /> : <Icon size={20} strokeWidth={1.8} aria-hidden="true" />}
            <span className="hero-tech-tooltip" aria-hidden="true">{name}</span>
          </span>
        ))}
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
        <div className="section-title-row"><h2>A LITTLE<br />ABOUT MY <span>WORK.</span></h2><span className="title-aside">FRONTEND DEVELOPMENT.<br />KOLKATA, INDIA.</span></div>
        <p className="about-copy">I'm Arindam Chakraborty, a lead frontend developer based in Kolkata. For more than 10 years, I've worked across React interfaces, business websites, and e-commerce. I currently lead frontend work at Graphē. My work also includes content platforms and responsive UI for phones, tablets, and desktops.</p>
        <div className="capability-strip"><span>10+ YEARS IN FRONTEND</span><span>TEAM LEADERSHIP</span><span>REACT · SHOPIFY · WORDPRESS</span></div>
      </div>
    </section>
  )
}

function ProjectCard({ project, onOpen }) {
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
    <article className="project-card reveal" ref={revealRef}>
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
  const sliderRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeProject, setActiveProject] = useState(0)

  useEffect(() => {
    if (selectedProject && !dialogRef.current?.open) dialogRef.current?.showModal()
  }, [selectedProject])

  const closeFromBackdrop = (event) => {
    if (event.target === dialogRef.current) dialogRef.current.close()
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const updatePosition = () => {
      const card = slider.children[0]
      if (!card) return
      const gap = Number.parseFloat(getComputedStyle(slider).gap) || 0
      const distance = (card.getBoundingClientRect().width + gap) * activeProject

      gsap.to(slider, {
        x: -distance,
        duration: reducedMotion ? 0 : 0.72,
        ease: 'power3.out',
        overwrite: true,
      })
    }

    const resizeObserver = new ResizeObserver(updatePosition)
    resizeObserver.observe(slider)
    updatePosition()

    return () => {
      resizeObserver.disconnect()
      gsap.killTweensOf(slider)
    }
  }, [activeProject])

  const moveProject = (direction) => {
    setActiveProject((current) => Math.min(Math.max(current + direction, 0), projects.length - 1))
  }

  return (
    <section className="work-section section-shell reveal" id="work" ref={revealRef}>
      <div className="section-marker"><span>02</span><span>SELECTED PROJECTS</span></div>
      <div className="work-heading"><h2>A FEW<br /><span>PROJECTS.</span></h2><p>A selection of ten projects across B2B, retail, healthcare, and nonprofit work. Open one to see the platforms and a little about the work.</p></div>
      <div className="project-carousel-toolbar">
        <span className="project-carousel-status" aria-live="polite"><b>{String(activeProject + 1).padStart(2, '0')}</b> / {String(projects.length).padStart(2, '0')}</span>
        <div className="project-carousel-progress" aria-hidden="true"><span style={{ transform: `scaleX(${(activeProject + 1) / projects.length})` }} /></div>
        <div className="project-carousel-controls">
          <button type="button" onClick={() => moveProject(-1)} disabled={activeProject === 0} aria-label="Previous project"><ChevronLeft size={18} /></button>
          <button type="button" onClick={() => moveProject(1)} disabled={activeProject === projects.length - 1} aria-label="Next project"><ChevronRight size={18} /></button>
        </div>
      </div>
      <div className="project-slider-viewport" aria-label="Portfolio projects">
        <div className="project-grid project-slider-track" ref={sliderRef}>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.number} onOpen={setSelectedProject} />
          ))}
        </div>
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
            <h2 id="toolkit-title">TOOLS I <span>USE.</span></h2>
            <p>These are the tools I use for frontend work, business sites, and online stores. Open a row for a few details.</p>
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
            <div className="toolkit-code-header"><span><i /> PROFILE / PROFILE.JS</span><span>REACT</span></div>
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
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState('INR')
  const [selectedTimelineCode, setSelectedTimelineCode] = useState('standard')
  const selectedCurrency = currencyOptions.find(({ code }) => code === selectedCurrencyCode) ?? currencyOptions[0]
  const selectedTimeline = timelineOptions.find(({ code }) => code === selectedTimelineCode) ?? timelineOptions[1]

  return (
    <section className="freelance-section" id="freelance" aria-labelledby="freelance-title">
      <div className="freelance-inner section-shell reveal" ref={revealRef}>
        <div className="section-marker"><span>04</span><span>FREELANCE SERVICES</span></div>
        <div className="freelance-heading">
          <div><p className="freelance-eyebrow">PROJECT ESTIMATES</p><h2 id="freelance-title">STARTING<br /><span>PRICES.</span></h2></div>
          <p>These are starting estimates, not fixed quotes. Share a few details about the project and I can confirm the scope, schedule, and cost.</p>
        </div>
        <div className="currency-picker-row">
          <div>
            <span className="currency-picker-label">VIEW PRICES IN</span>
            <span className="currency-picker-caption">Choose a currency for the estimate</span>
          </div>
          <div className="currency-picker-controls">
            <label className="currency-picker">
              <span className="currency-flag" aria-hidden="true">{selectedCurrency.flag}</span>
              <select value={selectedCurrencyCode} onChange={(event) => setSelectedCurrencyCode(event.target.value)} aria-label="Choose pricing currency">
                {currencyOptions.map(({ code, country, flag }) => <option value={code} key={code}>{flag} {code} - {country}</option>)}
              </select>
              <ChevronDown size={16} aria-hidden="true" />
            </label>
            <label className="currency-picker timeline-picker">
              <span className="timeline-icon" aria-hidden="true">◷</span>
              <select value={selectedTimelineCode} onChange={(event) => setSelectedTimelineCode(event.target.value)} aria-label="Choose project timeline">
                {timelineOptions.map(({ code, label, detail }) => <option value={code} key={code}>{label} - {detail}</option>)}
              </select>
              <ChevronDown size={16} aria-hidden="true" />
            </label>
          </div>
        </div>
        <div className="freelance-grid">
          {freelancePackages.map(({ number, name, Icon, price, description, features }) => (
            <article className="rate-card" key={name}>
              <div className="rate-card-top"><span>{number} / 03</span><Icon size={21} strokeWidth={1.7} aria-hidden="true" /></div>
              <h3>{name}</h3>
              <p className="rate-description">{description}</p>
              <div className="rate-price"><span>STARTING AT · {selectedCurrency.code}</span><strong>{formatCurrency(price, selectedCurrency, selectedTimeline.multiplier)}</strong></div>
              <ul>{features.map((feature) => <li key={feature}><span aria-hidden="true">+</span>{feature}</li>)}</ul>
              <a className="rate-cta" href={`mailto:arindam23@live.com?subject=${encodeURIComponent(`${name} project inquiry - ${selectedCurrency.code} - ${selectedTimeline.label}`)}`}>DISCUSS THIS PACKAGE <ArrowIcon /></a>
            </article>
          ))}
        </div>
        <p className="freelance-note">Prices start in INR; converted amounts are approximate. Priority delivery adds 25%, while an extended timeline reduces the starting price by 10%.</p>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner section-shell">
        <div className="section-marker"><span>06</span><span>THE NEXT STEP</span></div>
        <p className="contact-prelude">HAVE A PROJECT?</p>
        <h2>LET'S TALK<br /><span>ABOUT IT.</span></h2>
        <div className="contact-bottom">
          <p>If you're planning a website or online store, email me a few details about what you need and when you'd like to get started.</p>
          <div className="contact-actions">
            <a className="contact-button" href="mailto:arindam23@live.com?subject=Frontend%20project%20inquiry">EMAIL ME ABOUT YOUR PROJECT <ArrowIcon /></a>
            <a className="linkedin-link" href="https://www.linkedin.com/in/arindam-chakraborty-28480411a/?isSelfProfile=true" target="_blank" rel="noreferrer">
              <span className="linkedin-mark" aria-hidden="true">in</span>
              LINKEDIN PROFILE <ArrowIcon />
            </a>
          </div>
        </div>
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
          <p>A few notes from people I've worked with on e-commerce, React, WordPress, and Shopify projects.</p>
          <div className="reviews-rating-summary">
            <span className="reviews-rating-number">{reviews[activeReview].rating.toFixed(1)}</span>
            <span className="reviews-rating-detail">
              <span className="reviews-rating-stars" aria-label={`${reviews[activeReview].rating} out of 5 illustrative stars`}>
                {[1, 2, 3, 4, 5].map((star) => <span className={star <= reviews[activeReview].rating ? 'review-card-star is-filled' : star - reviews[activeReview].rating === 0.5 ? 'review-card-star is-half' : 'review-card-star'} key={star}><Star size={18} aria-hidden="true" />{star - reviews[activeReview].rating === 0.5 && <Star className="review-card-star-half" size={18} aria-hidden="true" />}</span>)}
              </span>
              <span className="reviews-rating-caption">CLIENT RATING · {reviews[activeReview].project}</span>
            </span>
          </div>
          <div className="reviews-note"><Star size={16} fill="currentColor" aria-hidden="true" /><span>Notes from completed projects.</span></div>
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
      <p>FRONTEND DEVELOPER · KOLKATA, INDIA</p>
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
  const portfolioRef = useRef(null)
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

    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#1d221c' : '#f6f1e7')
  }, [theme])

  useEffect(() => {
    const progress = portfolioRef.current?.querySelector('.scroll-progress')
    if (!progress) return undefined

    const animation = gsap.to(progress, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.2,
      },
    })

    return () => {
      animation.scrollTrigger?.kill()
      animation.kill()
    }
  }, [])

  return (
    <div className="portfolio-app" data-theme={theme} ref={portfolioRef}>
      <div className="scroll-progress" aria-hidden="true" />
      <Header theme={theme} onThemeToggle={() => setTheme(current => current === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero theme={theme} />
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
