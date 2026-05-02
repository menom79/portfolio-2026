import { useScrollReveal } from '../hooks/useScrollReveal'
import './Experience.css'

function JobCard({ job, delay }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`job-card ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="job-dot" />
      <div className="job-header">
        <span className="job-title">{job.title}</span>
        <span className="job-period">{job.period}</span>
      </div>
      <p className="job-company">{job.company} · {job.location}</p>
      <ul className="job-bullets">
        {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  )
}

export default function Experience({ data }) {
  if (!data) return null
  return (
    <section id="experience" className="section">
      <p className="section-label">// career</p>
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {data.map((job, i) => (
          <JobCard key={job.id} job={job} delay={i * 100} />
        ))}
      </div>
    </section>
  )
}
