import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="bt-hero">
      <div className="bt-badge">
        <span className="bt-dot">
          <span className="bt-dot-ping" />
          <span />
        </span>
        The Next Generation of Cloud AI
      </div>

      <h1 className="bt-hero-title">
        Bright Ideas,
        <br />
        <span className="bt-gradient-text">Brilliant Execution</span>
      </h1>

      <p className="bt-hero-sub">
        Experience the fusion of high-performance cloud architecture and
        autonomous AI agents. We design scalable ecosystems that drive real
        business results.
      </p>

      <div className="bt-cta-row">
        <Link to="/ai-solutions/" className="bt-btn-primary">
          Our Services
        </Link>
        <Link to="/contact/" className="bt-btn-secondary">
          Contact Us
        </Link>
      </div>

      <div className="bt-grid-3" style={{ marginTop: 96, textAlign: "left" }}>
        <div className="bt-card bt-card-indigo">
          <div className="bt-icon-tile bt-icon-indigo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3>Rapid Scaling</h3>
          <p>We deploy enterprise architectures that grow with your users, ensuring zero downtime during peak traffic.</p>
        </div>
        <div className="bt-card bt-card-emerald">
          <div className="bt-icon-tile bt-icon-emerald">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21.47c-2.453 0-4.755-.654-6.718-1.818C3.07 18.18 2 15.8 2 13.125a9.97 9.97 0 011.618-4.5h13.564a9.97 9.97 0 011.618 4.5c0 2.675-1.07 5.055-2.282 7.218C16.755 20.846 14.453 21.47 12 21.47z" />
            </svg>
          </div>
          <h3>Secure by Design</h3>
          <p>We integrate zero-trust protocols directly into your DevOps pipeline for absolute peace of mind.</p>
        </div>
        <div className="bt-card bt-card-cyan">
          <div className="bt-icon-tile bt-icon-cyan">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-2.387a2 2 0 00-2.828 0L11.5 14.5m0 0l-3.17-3.17a2 2 0 00-2.828 0L5.628 15.428" />
              <path d="M15 11V5l3 3m0 0l3-3m-3 3v14" />
            </svg>
          </div>
          <h3>Autonomous AI</h3>
          <p>Moving beyond chatbots to autonomous agents that handle data, research, and execution independently.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default HomePage