import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <header className="bt-page-head">
      <h1>
        Our Story,<br />
        <span className="bt-gradient-text">Focused Expertise</span>
      </h1>
      <p>Driving innovation and architectural excellence since 2015.</p>
    </header>

    <section className="bt-section">
      <div className="bt-section-body">
        <div className="bt-about-grid">
          <div className="bt-about-copy">
            <p>
              Founded in 2016, BrilliantTechnologies is a boutique technology
              consultancy delivering enterprise-grade solutions. As a solo
              founder, we bring focused expertise and hands-on involvement to
              every project, ensuring quality and personal attention from start
              to finish.
            </p>
            <p>
              We partner with clients across industries, from startups to
              established enterprises. Our background spans engineering,
              architecture, and consulting — providing a holistic approach to
              solving technology challenges.
            </p>
            <Link to="/contact/" className="bt-btn-primary">
              Work With Us
            </Link>
          </div>

          <div className="bt-mission-card">
            <h2>Our Mission</h2>
            <p className="bt-mission-quote">
              &ldquo;To accelerate digital transformation by building technology
              solutions that are robust, scalable, and aligned with our
              clients&rsquo; strategic objectives.&rdquo;
            </p>
            <p>
              We measure success not by lines of code written, but by the
              business value we create. Whether it's reducing operational costs
              or securing critical infrastructure, our mission is to be the
              partner you can rely on.
            </p>
          </div>
        </div>
      </div>

      <h2 className="bt-section-title">Our Core Values</h2>
      <div className="bt-grid-4">
        <div className="bt-value-card">
          <span className="bt-value-icon">💡</span>
          <h3>Innovation</h3>
          <p>Staying ahead of trends to deliver cutting-edge solutions.</p>
        </div>
        <div className="bt-value-card">
          <span className="bt-value-icon">🤝</span>
          <h3>Partnership</h3>
          <p>Building long-term relationships based on trust.</p>
        </div>
        <div className="bt-value-card">
          <span className="bt-value-icon">🏆</span>
          <h3>Excellence</h3>
          <p>Highest standards in code quality and security.</p>
        </div>
        <div className="bt-value-card">
          <span className="bt-value-icon">🌱</span>
          <h3>Sustainability</h3>
          <p>Building systems designed to last long-term.</p>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage