import { useScrollReveal } from '../hooks/useScrollReveal'
import { PDFThumbnail } from './PDFThumbnail'
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

function DocCard({ title, subtitle, file, delay }) {
  const { ref, visible } = useScrollReveal()
  return (
    <a
      ref={ref}
      href={`/${file}`}
      target="_blank"
      rel="noreferrer"
      className={`contact-card doc-card ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="pdf-thumbnail-wrapper">
        <PDFThumbnail filePath={`/${file}`} width={120} height={160} />
      </div>
      <div className="doc-info">
        <p className="contact-type">📄 Reference</p>
        <p className="contact-value">{title}</p>
        <p className="doc-sub">{subtitle}</p>
      </div>
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
  const docs = [
    { title: 'MyHomesID Testimonial',       subtitle: 'Jari Ahde, Product Manager · Jun 2025',    file: 'mhid_testimonial.pdf' },
    { title: 'JAMK Teaching Assistant Ref', subtitle: 'Matti Mieskolainen, Senior Lecturer · Nov 2022', file: 'testimonial-from-matti.pdf' },
    { title: 'WIMMA Lab Certificate',       subtitle: 'Marko Rintamäki, Senior Lecturer · Jul 2023',   file: 'wimmalab_internship_certificate.pdf' },
  ]

  return (
    <>
      <section id="contact" className="section">
        <p className="section-label">// reach out</p>
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-grid">
          {cards.map((c, i) => (
            <ContactCard key={c.type} {...c} delay={i * 80} />
          ))}
        </div>
      </section>

      <div className="divider" />

      <section id="references" className="section">
        <p className="section-label">// proof of work</p>
        <h2 className="section-title">References & Documents</h2>
        <div className="contact-grid">
          {docs.map((d, i) => (
            <DocCard key={d.file} {...d} delay={i * 80} />
          ))}
        </div>
      </section>
    </>
  )
}