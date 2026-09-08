import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  const [status, setStatus] = useState("idle")
  const [feedback, setFeedback] = useState("")
  const [errors, setErrors] = useState({})

  const validate = fields => {
    const nextErrors = {}
    if (!fields.name.trim()) nextErrors.name = "Name is required"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()))
      nextErrors.email = "Please enter a valid email address"
    if (!fields.message.trim()) nextErrors.message = "Message is required"
    return nextErrors
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const form = event.currentTarget
    const fields = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    }

    const nextErrors = validate(fields)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus("sending")
    setFeedback("")
    try {
      const res = await fetch("/api/submit-message", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(fields),
      })
      const result = await res.json().catch(() => null)
      if (res.ok && result && result.ok) {
        setStatus("success")
        setFeedback("Thank you! Your message has been sent. We'll get back to you within 24 hours.")
        form.reset()
      } else {
        setStatus("error")
        setFeedback((result && result.error) || "Oops! Something went wrong. Please try again.")
      }
    } catch (err) {
      setStatus("error")
      setFeedback("Unable to send. Please check your connection and try again.")
    }
  }

  return (
    <Layout>
      <SEO title="Contact Us" />
      <header className="bt-page-head">
        <h1>
          Let's build{" "}
          <span className="bt-gradient-text">something brilliant</span>
        </h1>
        <p>Ready to accelerate your business with custom high-assurance architecture?</p>
      </header>

      <section className="bt-section">
        <div className="bt-contact-grid">
          <div className="bt-form-card">
            {feedback && (
              <div
                role="status"
                className={"bt-alert " + (status === "error" ? "bt-alert-error" : "bt-alert-success")}
              >
                {feedback}
              </div>
            )}
            <form className="bt-form" method="POST" onSubmit={handleSubmit} noValidate>
              <div className="bt-field-row">
                <div className={"bt-field" + (errors.name ? " has-error" : "")}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required />
                  <p className="bt-field-error">{errors.name}</p>
                </div>
                <div className={"bt-field" + (errors.email ? " has-error" : "")}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required />
                  <p className="bt-field-error">{errors.email}</p>
                </div>
              </div>
              <div className="bt-field">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="How can we help?" />
              </div>
              <div className={"bt-field" + (errors.message ? " has-error" : "")}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  required
                />
                <p className="bt-field-error">{errors.message}</p>
              </div>
              <button
                className="bt-btn-primary bt-btn-block"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="bt-meta-list">
            <h3>Get in Touch</h3>
            <div className="bt-meta-item">
              <div className="bt-meta-icon bt-meta-icon-indigo">📍</div>
              <div>
                <h4>Our Office</h4>
                <p>
                  25A Grafton Road
                  <br />
                  London W3 6PB
                </p>
              </div>
            </div>
            <div className="bt-meta-item">
              <div className="bt-meta-icon bt-meta-icon-emerald">✉️</div>
              <div>
                <h4>Email Us</h4>
                <p>hello@brillianttechnologies.com</p>
              </div>
            </div>
            <div className="bt-meta-item">
              <div className="bt-meta-icon bt-meta-icon-cyan">🕒</div>
              <div>
                <h4>Business Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM GMT</p>
              </div>
            </div>

            <div className="bt-social-tiles">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="X">X</a>
              <a href="#" aria-label="GitHub">GH</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage