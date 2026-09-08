import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout>
    <SEO title="Thank you" />
    <div className="bt-flow-center">
      <div className="bt-big-glyph">✅</div>
      <h1>Got your message</h1>
      <p>Thank you for getting in touch. We will get back to you shortly.</p>
      <Link to="/" className="bt-btn-primary">
        Back to Homepage
      </Link>
    </div>
  </Layout>
)

export default Thanks