import Reveal from './Reveal'

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="section-header">
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Reveal>
  )
}
