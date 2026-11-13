import React, { useState } from "react"
import "./nav.css"
import "./protfolio.css"
import "bootstrap/dist/css/bootstrap.min.css"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const path = window.location.pathname

  return (
    <nav className="navbar navbar-expand-lg navbar-dark site-nav">
      <div className="container">
        <a className="navbar-brand" href="/">
          <span className="brand-logo">GOANAR</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="mainNav"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse${open ? " show" : ""}`} id="mainNav">
          <ul className="navbar-nav ms-auto">
            {links.map((l) => (
              <li className="nav-item" key={l.href}>
                <a className={`nav-link${path === l.href ? " active" : ""}`} href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <a className={`nav-link nav-link--muted${path === "/login" ? " active" : ""}`} href="/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
