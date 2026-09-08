import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <header className="bt-page-head">
      <h1>
        Our <span className="bt-gradient-text">Service Ecosystem</span>
      </h1>
      <p>End-to-end technology and AI solutions designed for modern, scalable businesses.</p>
    </header>

    <section className="bt-section">
      <div className="bt-grid-3 bt-section-body">
        <div className="bt-card bt-card-indigo">
          <div className="bt-icon-tile bt-icon-tile-lg bt-icon-indigo">⚙️</div>
          <h3>Custom Software</h3>
          <p>
            From web applications to enterprise platforms, we design and build
            software tailored to your exact requirements with an agile delivery
            approach.
          </p>
        </div>
        <div className="bt-card bt-card-emerald">
          <div className="bt-icon-tile bt-icon-tile-lg bt-icon-emerald">☁️</div>
          <h3>Cloud Solutions</h3>
          <p>
            Optimizing infrastructure across AWS, Azure, and GCP. We handle
            architecture, deployment, and cost optimization for zero-downtime
            scale.
          </p>
        </div>
        <div className="bt-card bt-card-cyan">
          <div className="bt-icon-tile bt-icon-tile-lg bt-icon-cyan">📱</div>
          <h3>Mobile Experience</h3>
          <p>
            Cross-platform iOS and Android apps built with React Native and
            Flutter, focusing on sleek UX and robust backend integration.
          </p>
        </div>
        <Link to="/ai-solutions/" className="bt-card bt-card-purple">
          <div className="bt-icon-tile bt-icon-tile-lg bt-icon-purple">🤖</div>
          <h3>AI Agents (SMBs)</h3>
          <p>
            Custom AI agents powered by LLMs to automate workflows and enhance
            customer support, specifically tailored for small &amp; midsize
            businesses.
          </p>
        </Link>
        <div className="bt-card bt-card-orange">
          <div className="bt-icon-tile bt-icon-tile-lg bt-icon-orange">💼</div>
          <h3>Strategic Consulting</h3>
          <p>
            Technology roadmaps and digital transformation planning to align
            your IT investments with long-term business objectives.
          </p>
        </div>
      </div>

      <div className="bt-process">
        <div className="bt-process-inner">
          <div>
            <h2 className="bt-process-title">Our Delivery Process</h2>
            <p className="bt-process-text">
              We've refined our approach to ensure that the transition from
              idea to production is seamless and risk-free.
            </p>
          </div>
          <div className="bt-process-steps">
            <div className="bt-process-step">
              <div className="bt-process-num">01</div>
              <h4>Discovery</h4>
              <p>Defining the project scope and technical landscape.</p>
            </div>
            <div className="bt-process-step">
              <div className="bt-process-num">02</div>
              <h4>Design</h4>
              <p>Architecting the solution and selecting tools.</p>
            </div>
            <div className="bt-process-step">
              <div className="bt-process-num">03</div>
              <h4>Build</h4>
              <p>Agile sprints with transparent delivery.</p>
            </div>
          </div>
        </div>
        <div className="bt-process-blob" aria-hidden="true" />
      </div>

      <div className="bt-cta-block" style={{ marginTop: 96 }}>
        <h2 className="bt-section-title">Ready to scale?</h2>
        <p>
          Let's discuss how our high-assurance architecture can accelerate your
          business growth.
        </p>
        <Link to="/contact/" className="bt-btn-primary">
          Get Started Now
        </Link>
      </div>
    </section>
  </Layout>
)

export default ServicesPage