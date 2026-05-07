import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.css'

const SERVICE_ID  = 'service_5a61srl'
const TEMPLATE_ID = 'template_uoqqi0b'
const PUBLIC_KEY  = 'WILlJpVzYr-ORmJqc'

export default function ContactForm() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ from_name: '', from_email: '', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success')
        setForm({ from_name: '', from_email: '', message: '' })
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <section id="contact-form" className="section">
      <p className="section-label">// send a message</p>
      <h2 className="section-title">Drop a Message</h2>

      <div className="form-card">
        <div className="form-glow" />

        <form ref={formRef} onSubmit={handleSubmit} className="cf-form">
          <div className="cf-row">
            <div className="cf-field">
              <label className="cf-label">Your Name</label>
              <input
                className="cf-input"
                type="text"
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                placeholder="John Smith"
                required
              />
            </div>
            <div className="cf-field">
              <label className="cf-label">Your Email</label>
              <input
                className="cf-input"
                type="email"
                name="from_email"
                value={form.from_email}
                onChange={handleChange}
                placeholder="john@company.com"
                required
              />
            </div>
          </div>

          <div className="cf-field">
            <label className="cf-label">Message</label>
            <textarea
              className="cf-input cf-textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hi Menom, I'd like to discuss an opportunity..."
              rows={5}
              required
            />
          </div>

          <div className="cf-footer">
            {status === 'success' && (
              <p className="cf-status success">Message sent! Menom will get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="cf-status error">Something went wrong. Please try again.</p>
            )}
            <button
              type="submit"
              className="cf-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message →'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}