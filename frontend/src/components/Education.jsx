import { useScrollReveal } from '../hooks/useScrollReveal'
import './Education.css'

export default function Education({ data }) {
  const { ref, visible } = useScrollReveal()
  if (!data || !data.length) return null
  const edu = data[0]

  return (
    <section id="education" className="section">
      <p className="section-label">// background</p>
      <h2 className="section-title">Education</h2>
      <div ref={ref} className={`edu-card ${visible ? 'visible' : ''}`}>
        <div className="edu-top-bar" />
        <p className="edu-degree">{edu.degree}</p>
        <p className="edu-meta">{edu.school} · {edu.location} · {edu.period}</p>
        <div className="edu-badges">
          <span className="edu-badge highlight">{edu.gpa} GPA</span>
          <span className="edu-badge highlight">{edu.credits}</span>
          {edu.highlights.map((h, i) => (
            <span key={i} className="edu-badge">{h}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
