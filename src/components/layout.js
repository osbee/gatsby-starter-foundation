import React from "react"

import Navigation from "./navigation"
import Footer from "./footer"

import "../assets/scss/style.scss"

const Layout = ({ children, className = "" }) => (
  <div className="bt-app">
    <div className="bt-aurora" aria-hidden="true">
      <div className="bt-blob" style={{ width: 600, height: 600, background: "#e0e7ff", top: -192, left: -192 }} />
      <div className="bt-blob" style={{ width: 500, height: 500, background: "#d1fae5", top: "33%", right: -192, opacity: 0.6 }} />
      <div className="bt-blob" style={{ width: 400, height: 400, background: "#cffafe", bottom: 0, left: "25%", opacity: 0.3 }} />
    </div>
    <Navigation />
    <main className={"bt-main " + className}>{children}</main>
    <Footer />
  </div>
)

export default Layout