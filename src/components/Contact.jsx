import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import Icon from './Icon'

const typeConfig = {
  email: { icon: 'mail', href: (v) => `mailto:${v}` },
  phone: { icon: 'whatsapp', href: (v) => `tel:${v.replace(/\s/g, '')}` },
  location: { icon: 'pin', href: null },
  text: { icon: 'pin', href: null },
}

function Contact({ data }) {
  const { contact, profile } = data

  const savedSocial = (name) => profile.socials?.find((s) => s.name.toLowerCase() === name.toLowerCase())

  const channels = contact.contactInfo.map((info) => {
    const type = typeConfig[info.type] || typeConfig.text
    return {
      label: info.label,
      value: info.value,
      icon: type.icon,
      href: type.href ? type.href(info.value) : null,
    }
  })

  const whatsapp = savedSocial('whatsapp')
  const hasFreelance = profile.freelanceSites?.length > 0

  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionHeader eyebrow="Contact" title="Let's Get In Touch" subtitle={contact.text} />

        <Reveal className="contact-grid">
          <div className="contact-card">
            <h3 className="contact-card-title">Contact details</h3>
            <div className="contact-channels">
              {channels.map((channel, i) => {
                const content = (
                  <>
                    <span className="contactChannel-icon">
                      <Icon name={channel.icon} size={20} />
                    </span>
                    <div className="contactChannel-text">
                      <span className="contactChannel-label">{channel.label}</span>
                      <span className="contactChannel-value">{channel.value}</span>
                    </div>
                  </>
                )
                return channel.href ? (
                  <a
                    key={i}
                    href={channel.href}
                    className="contactChannel"
                    aria-label={`${channel.label}: ${channel.value}`}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={i} className="contactChannel">
                    {content}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="contact-card">
            <h3 className="contact-card-title">Prefer instant chat?</h3>
            <p className="contact-card-text">
              You can reach me directly on WhatsApp or browse my freelance profile.
            </p>
            <div className="contact-quick">
              {whatsapp && (
                <a href={whatsapp.url} target="_blank" rel="noreferrer" className="quick-btn quick-whatsapp">
                  <Icon name="whatsapp" size={18} /> WhatsApp
                </a>
              )}
              {hasFreelance &&
                profile.freelanceSites.map((site) => (
                  <a
                    key={site.name}
                    href={site.url}
                    target="_blank"
                    rel="noreferrer"
                    className="quick-btn"
                  >
                    <Icon name="external" size={18} /> {site.name}
                  </a>
                ))}
            </div>
            <a href={`mailto:${channels[0]?.value || ''}`} className="btn btn-primary contact-cta">
              <Icon name="mail" size={18} /> Send Me an Email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
