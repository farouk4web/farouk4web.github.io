import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import Icon from './Icon'

const categoryIcons = {
  'Programming Languages': 'code',
  'Frameworks & Libraries': 'code',
  'Architecture & Patterns': 'code',
  Databases: 'external',
  'API & Security': 'code',
  'Tools & Platforms': 'external',
  'Testing & Practices': 'code',
  'Soft Skills': 'pin',
}

function Skills({ data }) {
  const { skills } = data
  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionHeader
          eyebrow="My Toolkit"
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to build robust backend systems."
        />
        <div className="skills-grid">
          {skills.map((cat, i) => (
            <Reveal key={cat.category} delay={(i % 3) * 80} className="skill-category">
              <div className="skill-category-head">
                <span className="skill-category-icon">
                  <Icon name={categoryIcons[cat.category] || 'code'} size={20} />
                </span>
                <h3 className="skill-category-title">{cat.category}</h3>
              </div>
              <div className="skill-tags">
                {cat.items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
