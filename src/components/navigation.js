import React, { useState } from "react"
import { Link } from "gatsby"

const menuItems = [
  { path: "/", title: "Home" },
  { path: "/about/", title: "About" },
  { path: "/ai-solutions/", title: "AI Solutions" },
  { path: "/contact/", title: "Contact" },
]

const Navigation = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bt-nav">
      <Link to="/" className="bt-brand">
        Brilliant<span>Technologies</span>
      </Link>
      <div className={"bt-links" + (open ? " is-open" : "")}>
        {menuItems.map(item => (
          <Link key={item.path} to={item.path} onClick={() => setOpen(false)}>
            {item.title}
          </Link>
        ))}
      </div>
      <Link to="/contact/" className="bt-nav-cta">
        Get Started
      </Link>
      <button
        className="bt-hamburger"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}

export default Navigation