import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AiSolutionsPage = () => (
  <Layout>
    <SEO title="AI Solutions" />
    <header className="bt-page-head">
      <h1>AI Solutions for SMBs</h1>
      <p>Intelligent LLM agents built for small and midsize businesses</p>
    </header>

    <section className="bt-section">
      <h2 className="bt-section-title">Our AI Agent Services</h2>
      <div className="bt-autofit">
        <div className="bt-service-card">
          <div className="bt-service-icon">💬</div>
          <h3>Customer Support Agents</h3>
          <p>
            24/7 AI-powered chatbots that handle FAQs, ticket triage, and
            escalation routing. Trained on your knowledge base to provide
            accurate, on-brand responses.
          </p>
        </div>
        <div className="bt-service-card bt-card-emerald">
          <div className="bt-service-icon">⚡</div>
          <h3>Workflow Automation Agents</h3>
          <p>
            Automate repetitive tasks like email drafting, invoice processing,
            approval workflows, and data entry. Free your team to focus on
            high-value work.
          </p>
        </div>
        <div className="bt-service-card bt-card-cyan">
          <div className="bt-service-icon">📊</div>
          <h3>Data Extraction &amp; Analysis Agents</h3>
          <p>
            Extract insights from documents, PDFs, and spreadsheets. Generate
            reports, enrich CRM records, and surface trends without manual
            effort.
          </p>
        </div>
        <div className="bt-service-card">
          <div className="bt-service-icon">✍️</div>
          <h3>Content Generation Agents</h3>
          <p>
            Generate marketing copy, proposals, email campaigns, and social
            media content. Maintain your brand voice while producing
            consistent, high-quality output.
          </p>
        </div>
      </div>
    </section>

    <section className="bt-section">
      <h2 className="bt-section-title">How It Works</h2>
      <div className="bt-grid">
        <div className="bt-autofit">
          <div className="bt-feature-card">
            <div className="bt-service-icon">🔍</div>
            <h3><span>1.</span> Discovery</h3>
            <p>We identify the repetitive tasks and bottlenecks in your business where an AI agent would have the greatest impact.</p>
          </div>
          <div className="bt-feature-card bt-card-emerald">
            <div className="bt-service-icon">🛠️</div>
            <h3><span>2.</span> Agent Design</h3>
            <p>We design the agent's capabilities, knowledge base, and integration points with your existing tools and workflows.</p>
          </div>
          <div className="bt-feature-card bt-card-cyan">
            <div className="bt-service-icon">📚</div>
            <h3><span>3.</span> Training</h3>
            <p>We train the LLM on your data — documents, FAQs, CRM records — so the agent understands your business context.</p>
          </div>
          <div className="bt-feature-card">
            <div className="bt-service-icon">🚀</div>
            <h3><span>4.</span> Deployment</h3>
            <p>We deploy the agent into your environment (website, Slack, email, or API) and monitor performance closely.</p>
          </div>
          <div className="bt-feature-card bt-card-emerald">
            <div className="bt-service-icon">🔄</div>
            <h3><span>5.</span> Iteration</h3>
            <p>We review usage data, refine responses, and expand capabilities over time as your business grows and needs evolve.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bt-section">
      <h2 className="bt-section-title">Why SMBs Love AI Agents</h2>
      <div className="bt-grid-4">
        <div className="bt-service-card">
          <div className="bt-service-icon">💰</div>
          <h3>Affordable</h3>
          <p>No need for a large AI team or expensive infrastructure. Pay-as-you-grow pricing designed for SMB budgets.</p>
        </div>
        <div className="bt-service-card bt-card-emerald">
          <div className="bt-service-icon">📈</div>
          <h3>Immediate ROI</h3>
          <p>Most agents pay for themselves within weeks by reducing manual work and speeding up customer response times.</p>
        </div>
        <div className="bt-service-card bt-card-cyan">
          <div className="bt-service-icon">🔒</div>
          <h3>Secure by Default</h3>
          <p>Your data stays yours. We deploy agents with privacy-first architecture — no data sharing with third parties.</p>
        </div>
        <div className="bt-service-card">
          <div className="bt-service-icon">🗝️</div>
          <h3>Easy to Start</h3>
          <p>Get your first agent up and running in days, not months. We handle all the technical complexity so you don't have to.</p>
        </div>
      </div>
    </section>

    <section className="bt-section">
      <div className="bt-cta-block">
        <h2 className="bt-section-title">Ready to Automate?</h2>
        <p>
          Let's build an AI agent that transforms the way your business
          operates — starting with a free discovery call.
        </p>
        <Link to="/contact/" className="bt-btn-primary">
          Get Started Today
        </Link>
      </div>
    </section>
  </Layout>
)

export default AiSolutionsPage