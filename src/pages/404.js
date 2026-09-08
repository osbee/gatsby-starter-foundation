import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout>
    <SEO title="Page not found" />
    <div className="bt-flow-center">
      <div className="bt-big-glyph">🛸</div>
      <h1>Oops, we did not expect that to happen</h1>
      <p>
        Have you wandered into the unknown? Let us help you get back on track.
      </p>
      <div className="bt-cta-row">
        <Link to="/" className="bt-btn-primary">
          Back to Homepage
        </Link>
        <Link to="/contact/" className="bt-btn-secondary">
          Report this
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFound