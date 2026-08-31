import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import Icon from './Icon'

function Experience({ data }) {
  const { experience } = data
  return (
    <section id="experience" className="experience">
      <div className="container">
        <SectionHeader
          eyebrow="Career Path"
          title="Work Experience"
          subtitle="A journey of building scalable and reliable backend systems."
        />
        <div className="timeline">
          {experience.map((item, i) => (
            <Reveal key={i} delay={i * 90} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-head">
                  <h3 className="role">{item.role}</h3>
                  <span className="period">{item.period}</span>
                </div>
                <h4 className="company">
                  <Icon name="external" size={14} />
                  {item.companyUrl ? (
                    <a href={item.companyUrl} target="_blank" rel="noreferrer" className="company-link">
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}
                </h4>
                <p className="description">{item.description}</p>
                <ul className="responsibilities">
                  {item.responsibilities.map((resp, j) => (
                    <li key={j}>{resp}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
