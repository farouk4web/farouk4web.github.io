import { useState } from 'react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import Icon from './Icon'
import { useGithubRepos } from '../hooks/useGithubRepos'

const PAGE_SIZE = 3

function GitHubBadge() {
  return (
    <span className="github-badge">
      <Icon name="github" size={12} /> GitHub
    </span>
  )
}

function Projects({ data }) {
  const { projects } = data
  const githubConfig = data.githubProjects
  const defaultGithub = data.profile?.github || '#'

  const { repos: githubRepos, loading, error } = useGithubRepos(githubConfig)

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const normalizeJson = (p) => ({
    name: p.name,
    description: p.description,
    tech: p.tech || [],
    link: p.link && p.link !== '#' ? p.link : null,
    code: p.code && p.code !== '#' ? p.code : defaultGithub,
    github: false,
  })

  const githubFirst = githubConfig?.showGithubFirst ?? true

  const jsonProjects = projects.map(normalizeJson)
  const merged = githubFirst
    ? [...githubRepos, ...jsonProjects]
    : [...jsonProjects, ...githubRepos]

  const visible = merged.slice(0, visibleCount)
  const hasMore = visibleCount < merged.length

  const showMore = () => setVisibleCount((c) => Math.min(c + PAGE_SIZE, merged.length))
  const showLess = () => setVisibleCount(PAGE_SIZE)

  const total = merged.length

  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Portfolio"
          title="Recent Projects"
          subtitle="A collection of projects I've built across e-commerce, social networking, and architecture demos. Public repos are fetched live from GitHub."
        />

        {loading ? (
          <div className="projects-loading">
            <span className="spinner"></span>
            <p>Fetching GitHub repositories...</p>
          </div>
        ) : (
          <>
            {error && (
              <div className="projects-hint">Showing hand-picked projects only ({error})</div>
            )}
            <div className="projects-grid">
              {visible.map((project, i) => (
                <Reveal key={project.name} delay={(i % 3) * 90} className="project-card">
                  <div className="project-top">
                    <div className="project-folder">
                      {project.github ? (
                        <Icon name="github" size={24} />
                      ) : (
                        <Icon name="code" size={24} />
                      )}
                      {project.github && <GitHubBadge />}
                    </div>
                    {(project.link || project.code) && (
                      <div className="project-links">
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noreferrer" aria-label="Live demo" title="Live link">
                            <Icon name="external" size={20} />
                          </a>
                        )}
                        {project.code && (
                          <a href={project.code} target="_blank" rel="noreferrer" aria-label="Source code" title="GitHub">
                            <Icon name="github" size={20} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>

            {total > PAGE_SIZE &&
              (hasMore ? (
                <div className="projects-toggle">
                  <button className="btn btn-primary" onClick={showMore}>
                    Show More ({total - visibleCount} left) <Icon name="download" size={18} />
                  </button>
                </div>
              ) : (
                <div className="projects-toggle">
                  <button className="btn btn-glass" onClick={showLess}>
                    Show Less <Icon name="arrowup" size={18} />
                  </button>
                </div>
              ))}
          </>
        )}
      </div>
    </section>
  )
}

export default Projects
