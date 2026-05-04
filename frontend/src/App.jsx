import { useEffect } from 'react'
import { useCV } from './hooks/useCV'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import './components/Section.css'
import CVButton from './components/CVButton'

function Divider() {
  return <div className="divider" />
}

function LoadingScreen() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', color: 'var(--text-mid)', fontSize: '0.75rem',
      letterSpacing: '0.1em'
    }}>
      loading...
    </div>
  )
}

export default function App() {
  const { data, loading, error } = useCV()

  // Cursor glow
  useEffect(() => {
    const glow = document.getElementById('cursor-glow')
    if (!glow) return
    const move = e => {
      glow.style.left = e.clientX + 'px'
      glow.style.top  = e.clientY + 'px'
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  if (loading) return <LoadingScreen />
  if (error) return (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center',
      justifyContent:'center', color:'var(--text-mid)', fontSize:'0.75rem' }}>
      Could not load CV data. Is the backend running?<br/>
      <code style={{ marginLeft: '0.5rem', color: 'var(--accent)' }}>uvicorn main:app --reload</code>
    </div>
  )

  return (
    <>
      <div id="cursor-glow" style={{
        position: 'fixed', width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
        pointerEvents: 'none', transform: 'translate(-50%,-50%)',
        transition: 'left 0.1s ease, top 0.1s ease', zIndex: 997
      }} />

      <Navbar />
      <Hero data={data} />
      <Divider />
      <Experience data={data.experience} />
      <Divider />
      <Skills data={data.skill_groups} />
      <Divider />
      <Education data={data.education} />
      <Divider />
      <Contact data={data.contact} />

      <footer style={{
        textAlign: 'center', padding: '3rem 2rem',
        borderTop: '1px solid var(--border)',
        fontSize: '0.67rem', color: 'var(--text-dim)'
      }}>
        Menom Haque · Jyväskylä, Finland · Open to work globally
      </footer>
      <CVButton />
    </>
  )
}
