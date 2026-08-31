import { useEffect, useState } from 'react'
import Icon from './Icon'

function useTypewriter(words, typeSpeed = 80, deleteSpeed = 50, pause = 1800) {
  const [state, setState] = useState({ index: 0, text: '', deleting: false })

  useEffect(() => {
    const { index, text, deleting } = state
    const word = words[index % words.length]
    let timeout

    if (!deleting && text === word) {
      timeout = setTimeout(() => setState((s) => ({ ...s, deleting: true })), pause)
    } else if (deleting && text === '') {
      timeout = setTimeout(() => {
        setState((s) => ({
          index: (s.index + 1) % words.length,
          text: '',
          deleting: false,
        }))
      }, 200)
    } else {
      timeout = setTimeout(
        () => {
          setState((s) => ({
            ...s,
            text: word.slice(0, text.length + (deleting ? -1 : 1)),
          }))
        },
        deleting ? deleteSpeed : typeSpeed
      )
    }
    return () => clearTimeout(timeout)
  }, [state, words, typeSpeed, deleteSpeed, pause])

  return state.text
}

function Hero({ data }) {
  const { profile, about } = data
  const roles = profile.roles?.length ? profile.roles : [profile.title]
  const typed = useTypewriter(roles)

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container hero-inner">
        <div className="hero-text">
          <span className="hero-availability">
            <span className="pulse-dot"></span> Available for opportunities
          </span>
          <h1 className="hero-name">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>
          <h2 className="hero-role">
            <span className="typewriter">{typed}</span>
            <span className="caret"></span>
          </h2>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <Icon name="code" size={18} /> View Projects
            </a>
            <a href={profile.resumeUrl} className="btn btn-glass" target='_blank'>
              <Icon name="download" size={18} /> Resume
            </a>
          </div>
          <div className="hero-socials">
            {profile.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="social-circle"
                aria-label={social.name}
              >
                <Icon name={social.icon} size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-card">
            <div className="card-glow"></div>
            <img src={profile.avatar} alt={profile.name} />
            <div className="profile-info">
              <span className="profile-name">{profile.name}</span>
              <span className="profile-role">{profile.title}</span>
            </div>
            <div className="floating-chip chip-1">
              <Icon name="code" size={16} /> .NET
            </div>
            <div className="floating-chip chip-2">
              <span className="chip-green"></span> Available
            </div>
            <div className="about-mini">
              <strong>{about.highlights[0]}</strong>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span></span>
      </a>
    </section>
  )
}

export default Hero
