import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "./nav.css"
import "./protfolio.css"

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
]

const NavBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark site-nav">
      <div className="container">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          aria-controls="mainNav"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse${open ? " show" : ""}`} id="mainNav">
          <ul className="navbar-nav mx-auto">
            {links.map((l) => (
              <li className="nav-item" key={l.to}>
                <NavLink
                  exact
                  to={l.to}
                  className="nav-link"
                  activeClassName="active"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
