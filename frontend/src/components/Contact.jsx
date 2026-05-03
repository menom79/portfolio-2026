import { useScrollReveal } from '../hooks/useScrollReveal'
import './Contact.css'

function ContactCard({ type, value, href, delay }) {
  const { ref, visible } = useScrollReveal()
  return (
    
      ref={ref}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className={'contact-card ' + (visible ? 'visible' : '')}
      style={{ transitionDelay: delay + 'ms' }}
    >
      <p className="contact-type">{type}</p>
      <p className="contact-value">{value}</p>
    </a>
  )
}

function DocCard({ title, subtitle, file, delay, icon }) {
  const { ref, visible } = useScrollReveal()
  return (
    
      ref={ref}
      href={'/' + file}
      target="_blank"
      rel="noreferrer"
      className={'doc-card ' + (visible ? 'visible' : '')}
      style={{ transitionDelay: delay + 'ms' }}
    >
      <div className="doc-glow" />
      <div className="doc-icon">{icon}</div>
      <div className="doc-body">
        <p className="doc-label">Reference Document</p>
        <p className="doc-title">{title}</p>
        <p className="doc-sub">{subtitle}</p>
      </div>
      <div className="doc-arrow">↗</div>
    </a>
  )
}

export default function Contact({ data }) {
  if (!data) return null

  const cards = [
    { type: 'Email',    value: data.email,    href: 'mailto:' + data.email },
    { type: 'LinkedIn', value: data.linkedin, href: 'https://' + data.linkedin },
    { type: 'GitHub',   value: data.github,   href: 'https://' + data.github },
    { type: 'Phone',    value: data.phone,    href: 'tel:' + data.phone.replace(/\s/g, '') },
  ]

  const docs = [
    {
      title: 'MyHomesID Testimonial',
      subtitle: 'Jari Ahde, Product Manager · Jun 2025',
      file: 'mhid_testimonial.pdf',
      icon: '🏢',
    },
    {
      title: 'JAMK Teaching Assistant',
      subtitle: 'Matti Mieskolainen, Senior Lecturer · Nov 2022',
      file: 'testimonial-from-matti.pdf',
      icon: '🎓',
    },
    {
      title: 'WIMMA Lab Certificate',
      subtitle: 'Marko Rintamäki, Senior Lecturer · Jul 2023',
      file: 'wimmalab_internship_certificate.pdf',
      icon: '🏅',
    },
  ]

  return (
    <div>
      <section id="contact" className="section">
        <p className="section-label">// reach out</p>
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-grid">
          {cards.map(function(c, i) {
            return <ContactCard key={c.type} type={c.type} value={c.value} href={c.href} delay={i * 80} />
          })}
        </div>
      </section>

      <div className="divider" />

      <section id="references" className="section">
        <p className="section-label">// proof of work</p>
        <h2 className="section-title">References & Documents</h2>
        <div className="doc-grid">
          {docs.map(function(d, i) {
            return (
              <DocCard
                key={d.file}
                title={d.title}
                subtitle={d.subtitle}
                file={d.file}
                icon={d.icon}
                delay={i * 100}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}