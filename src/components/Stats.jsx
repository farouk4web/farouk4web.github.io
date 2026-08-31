import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal'

function Stat({ value, suffix, label }) {
  const count = useCountUp(value)
  return (
    <div className="stat">
      <div className="stat-value">
        {count}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

function Stats() {
  const { ref, visible } = useScrollReveal()
  const stats = [
    { value: 4, suffix: '+', label: 'Years Experience' },
    { value: 20, suffix: '+', label: 'Projects Delivered' },
    { value: 15, suffix: '+', label: 'Rest APIs Built' },
    { value: 100, suffix: '%', label: 'Commitment' },
  ]
  return (
    <div className={`stats ${visible ? 'reveal-visible' : ''}`} ref={ref}>
      {stats.map((s) => (
        <Stat key={s.label} {...s} />
      ))}
    </div>
  )
}

export default Stats
