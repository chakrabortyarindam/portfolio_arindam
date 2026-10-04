import { useRef } from 'react'
import { FileText, X, MapPin, Phone, Mail, Link2 } from 'lucide-react'
import { featuredProjects } from './projects.js'

const experience = [
  {
    role: 'Lead Frontend Developer',
    company: 'Graphē',
    date: '10/2022 – Present',
    points: [
      'Lead frontend engineers and establish UI standards, code quality benchmarks, and mobile-first practices.',
      'Build e-commerce experiences with Shopify, Wix, and Magento, integrating third-party APIs and secure payment gateways.',
      'Improved site speed and mobile responsiveness by 30% through cross-browser performance work.',
      'Partner with design and product marketing teams to deliver client brand launches.',
    ],
  },
  {
    role: 'Tech Lead – Frontend Developer',
    company: 'Oneness Tech Solutions',
    date: '02/2021 – 10/2022',
    points: [
      'Directed frontend architecture for enterprise web products, improving user retention and UX audit scores.',
      'Designed and maintained branded, high-performing web templates.',
      'Built reusable frontend component libraries using Bootstrap and custom JavaScript workflows.',
    ],
  },
  {
    role: 'Web & Graphic Designer',
    company: 'Engagement Media Ventures Pvt. Ltd.',
    date: '06/2016 – 02/2021',
    points: [
      'Translated UI/UX prototypes into responsive, cross-browser HTML5 and CSS3 layouts.',
      'Created digital marketing assets and graphics for online campaigns.',
    ],
  },
  {
    role: 'Graphic & UI Designer',
    company: 'MindScale Technologies Pvt. Ltd.',
    date: '01/2014 – 05/2016',
    points: ['Designed UI components and vector graphics for web applications and client portals.'],
  },
]

const skillGroups = [
  { category: 'Frontend', items: 'HTML5, CSS3, JavaScript (ES6+), jQuery, Bootstrap, React.js' },
  { category: 'CMS & commerce', items: 'Shopify custom theme design (3 years), Shopify customization, WordPress, Wix, Magento' },
  { category: 'Design & UX', items: 'Responsive web design, interface design, UX optimization, graphic design' },
  { category: 'Optimization', items: 'Cross-browser debugging, payment integration, performance optimization' },
]

export default function CV() {
  const dialogRef = useRef(null)

  const closeFromBackdrop = (event) => {
    if (event.target === dialogRef.current) dialogRef.current.close()
  }

  return (
    <>
      <section className="cv-section section-shell" id="cv">
        <div className="section-marker"><span>05</span><span>EXPERIENCE & CV</span></div>
        <div className="cv-card">
          <div className="cv-card-copy">
            <span className="cv-years">10+ YEARS IN FRONTEND</span>
            <h2>LEAD FRONTEND<br /><span>DEVELOPER.</span></h2>
            <p>Frontend engineering, team leadership, responsive UI, and e-commerce across React, Shopify, WordPress, Wix, and Magento.</p>
          </div>
          <div className="cv-card-action">
            <span className="cv-current-role">CURRENTLY AT GRAPHĒ<br />KOLKATA, INDIA</span>
            <button className="view-cv-button" type="button" onClick={() => dialogRef.current?.showModal()}>
              <FileText size={19} aria-hidden="true" /> VIEW CV <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </section>

      <dialog className="cv-dialog" ref={dialogRef} aria-labelledby="cv-name" onClick={closeFromBackdrop}>
        <div className="cv-dialog-header">
          <span>CURRICULUM VITAE / 2026</span>
          <button className="cv-close" type="button" aria-label="Close CV" onClick={() => dialogRef.current?.close()}><X size={20} /></button>
        </div>
        <div className="cv-document">
          <header className="cv-identity">
            <p className="cv-eyebrow">LEAD FRONTEND DEVELOPER & UI/UX WEB SPECIALIST</p>
            <h2 id="cv-name">ARINDAM<br /><span>CHAKRABORTY.</span></h2>
            <div className="cv-contact-list">
              <a href="https://maps.google.com/?q=Kolkata,India" target="_blank" rel="noreferrer"><MapPin size={17} /> Kolkata, India</a>
              <a href="tel:+919038769216"><Phone size={17} /> +91 9038769216</a>
              <a href="mailto:arindam23@live.com"><Mail size={17} /> arindam23@live.com</a>
              <a href="https://www.linkedin.com/in/arindam-chakraborty-28480411a/" target="_blank" rel="noreferrer"><Link2 size={17} /> LinkedIn profile</a>
            </div>
          </header>

          <section className="cv-block">
            <h3>SUMMARY</h3>
            <p>Results-driven Lead Frontend Developer and Web Specialist with 10+ years of experience building responsive, accessible web applications. Experienced in leading frontend teams and delivering e-commerce and corporate websites with Shopify, WordPress, Wix, Magento, React, and JavaScript. Focused on UX, payment integrations, and cross-browser performance.</p>
          </section>

          <section className="cv-block">
            <h3>WORK EXPERIENCE</h3>
            <div className="cv-experience-list">
              {experience.map((job) => (
                <article className="cv-job" key={job.company}>
                  <div className="cv-job-heading"><div><h4>{job.role}</h4><p>{job.company} <span>· Kolkata, India</span></p></div><time>{job.date}</time></div>
                  <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </article>
              ))}
            </div>
          </section>

          <section className="cv-block">
            <h3>TECHNICAL SKILLS</h3>
            <div className="cv-skills-grid">
              {skillGroups.map((group) => <div key={group.category}><h4>{group.category}</h4><p>{group.items}</p></div>)}
            </div>
          </section>

          <section className="cv-block">
            <h3>FEATURED PROJECTS</h3>
            <div className="cv-projects-grid">
              {featuredProjects.map((project) => <article key={project.title}><span>{project.number}</span><div><h4>{project.title}</h4><p>{project.description}</p></div></article>)}
            </div>
          </section>

          <section className="cv-block cv-education">
            <h3>EDUCATION</h3>
            <div><h4>Bachelor's Degree in Arts / Science</h4><p>University of Calcutta · Kolkata, India <span>2007–2010</span></p></div>
            <div><h4>Higher Secondary Education (Class XII)</h4><p>Halisahar High School · Kolkata, India <span>2006–2007</span></p></div>
          </section>
        </div>
      </dialog>
    </>
  )
}