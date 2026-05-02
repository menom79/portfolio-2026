import './Hero.css'

export default function Hero({ data }) {
  if (!data) return null
  const { name, title, summary, status, contact } = data

  const pills = ['Backend Dev', 'Full Stack', 'QA / Test Automation', 'Cloud · AWS', 'Cyber Security']

  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />

      <div className="hero-content">
        <div className="hero-tag fade-up fade-up-1">
          <span className="tag-dot" />
          {status}
        </div>

        <h1 className="fade-up fade-up-2">
          {name.split(' ')[0]}<br />
          <span className="h1-dim">{name.split(' ').slice(1).join(' ')}</span>
        </h1>

        <p className="hero-sub fade-up fade-up-3">{summary}</p>

        <div className="hero-pills fade-up fade-up-4">
          {pills.map(p => <span key={p} className="pill">{p}</span>)}
        </div>

        <div className="hero-cta fade-up fade-up-5">
          <a href="#contact" className="btn-primary">Get in touch</a>
          <a href="#experience" className="btn-outline">See my work</a>
        </div>
      </div>

      <div className="scroll-hint fade-up fade-up-5">
        <div className="scroll-line" />
        Scroll to explore
      </div>
    </section>
  )
}
