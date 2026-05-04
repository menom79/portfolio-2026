import './CVButton.css'

export default function CVButton() {
  return (
    <a
      href="/portfolio-2026/cv.pdf"
      download="Menom_Haque_CV.pdf"
      className="cv-sticky-btn"
      title="Download CV"
    >
      <span className="cv-btn-icon">⬇</span>
      <span className="cv-btn-label">Download CV</span>
    </a>
  )
}