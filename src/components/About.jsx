import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import Icon from './Icon'
import Stats from './Stats'

function About({ data }) {
  const { about } = data
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Turning ideas into reliable software"
          subtitle="A passionate backend developer focused on building the systems that keep products fast, secure, and scalable."
        />
        <div className="about-grid">
          <Reveal className="about-bio">
            <p>{about.bio}</p>
            <a href="#contact" className="text-link">
              Let's work together <span>→</span>
            </a>
          </Reveal>
          <Reveal delay={150} className="about-cards">
            {about.highlights.map((item, i) => (
              <div key={i} className="about-card">
                <div className="about-card-icon">
                  <Icon name={i === 0 ? 'code' : i === 1 ? 'external' : i === 2 ? 'pin' : 'mail'} size={20} />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  )
}

export default About
