import { useScrollReveal } from '../hooks/useScrollReveal'
import './Contact.css'

function ContactCard({ type, value, href, delay }) {
  const { ref, visible } = useScrollReveal()
  return (
    <a
      ref={ref}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className={`contact-card ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="contact-type">{type}</p>
      <p className="contact-value">{value}</p>
    </a>
  )
}

export default function Contact({ data }) {
  if (!data) return null
  const cards = [
    { type: 'Email',    value: data.email,    href: `mailto:${data.email}` },
    { type: 'LinkedIn', value: data.linkedin, href: `https://${data.linkedin}` },
    { type: 'GitHub',   value: data.github,   href: `https://${data.github}` },
    { type: 'Phone',    value: data.phone,    href: `tel:${data.phone.replace(/\s/g,'')}` },
  ]
  return (
    <section id="contact" className="section">
      <p className="section-label">// reach out</p>
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-grid">
        {cards.map((c, i) => (
          <ContactCard key={c.type} {...c} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
