import { useScrollReveal } from '../hooks/useScrollReveal'
import './Skills.css'

function SkillCard({ group, delay }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`skill-card ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="skill-category">{group.category}</p>
      <div className="skill-tags">
        {group.skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
      </div>
    </div>
  )
}

export default function Skills({ data }) {
  if (!data) return null
  return (
    <section id="skills" className="section">
      <p className="section-label">// toolkit</p>
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {data.map((group, i) => (
          <SkillCard key={group.category} group={group} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
