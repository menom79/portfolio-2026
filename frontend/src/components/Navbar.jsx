import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">M<span>.</span>Haque</div>
      <ul className="nav-links">
        {['experience', 'skills', 'education', 'contact'].map(id => (
          <li key={id}>
            <a href={`#${id}`}>{id}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
