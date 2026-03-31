import { useEffect, useState } from 'react'
import { getPortfolio } from './requests.js'

function App() {
  const [portfolio, setPortfolio] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let active = true

    async function loadPortfolio() {
      try {
        const data = await getPortfolio()

        if (active) {
          setPortfolio(data)
          setStatus('ready')
        }
      } catch (error) {
        console.error(error)

        if (active) {
          setStatus('error')
        }
      }
    }

    loadPortfolio()

    return () => {
      active = false
    }
  }, [])

  if (status === 'loading') {
    return (
      <main className="shell">
        <section className="panel status-card">
          <p className="eyebrow">Loading</p>
          <h1>Fetching portfolio content...</h1>
        </section>
      </main>
    )
  }

  if (status === 'error' || !portfolio) {
    return (
      <main className="shell">
        <section className="panel status-card">
          <p className="eyebrow">Backend unavailable</p>
          <h1>The React app could not reach the Flask API.</h1>
          <p>
            Start the backend on port 5000 and refresh the page.
          </p>
        </section>
      </main>
    )
  }

  const { profile, stats, skills, projects, experience } = portfolio

  return (
    <main className="shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Professional Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="headline">{profile.headline}</p>
          <p className="summary">{profile.summary}</p>
          <div className="cta-row">
            <a className="primary-link" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Resume
            </a>
            <a className="secondary-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>

        <aside className="panel hero-panel">
          <p className="panel-label">Quick Info</p>
          <div className="info-list">
            <div>
              <span>Location</span>
              <strong>{profile.location}</strong>
            </div>
            <div>
              <span>GitHub</span>
              <a href={profile.githubUrl} target="_blank" rel="noreferrer">View profile</a>
            </div>
            <div>
              <span>LinkedIn</span>
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">Connect</a>
            </div>
          </div>
        </aside>
      </section>

      <section className="stats-grid">
        {stats.map((stat) => (
          <article className="panel stat-card" key={stat.label}>
            <p>{stat.label}</p>
            <h2>{stat.value}</h2>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <article className="panel">
          <p className="section-label">Skills</p>
          <h2>Technical foundation</h2>
          <div className="chip-grid">
            {skills.map((skill) => (
              <span className="chip" key={skill}>{skill}</span>
            ))}
          </div>
        </article>

        <article className="panel">
          <p className="section-label">Experience</p>
          <h2>Current trajectory</h2>
          <div className="timeline">
            {experience.map((item) => (
              <div className="timeline-item" key={`${item.role}-${item.organization}`}>
                <div className="timeline-header">
                  <h3>{item.role}</h3>
                  <span>{item.period}</span>
                </div>
                <p className="timeline-org">{item.organization}</p>
                <p>{item.details}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="projects-section">
        <div className="section-heading">
          <p className="section-label">Projects</p>
          <h2>Selected work</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="panel project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="chip-grid">
                {project.stack.map((item) => (
                  <span className="chip" key={`${project.title}-${item}`}>{item}</span>
                ))}
              </div>
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                View project
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
