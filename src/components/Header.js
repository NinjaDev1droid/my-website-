import React from "react"
import Typed from "react-typed"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import { ProjectCard } from "./Projects"
import projects from "./projectsData"

const CV_URL = "https://docs.google.com/document/u/0/d/1A4UongUfZBG0HrK-fvtnr06Ao_-cvDSASImx2_ESgy0/mobilebasic"

const featured = projects.filter((p) => p.demo).slice(0, 3)

const services = [
    {
        title: "Front-End",
        text: "Responsive, accessible interfaces in React, JavaScript, HTML and CSS.",
    },
    {
        title: "Back-End",
        text: "APIs, databases and authentication with Firebase, SQL and Node.",
    },
    {
        title: "Websites for Brands",
        text: "Portfolio and landing pages for artists and small businesses, live on the web.",
    },
]

const Header = () => {
    return (
        <>
            {/* ── Hero ── */}
            <section className="hero">
                <div className="container hero__inner">
                    <div className="hero__text">
                        <span className="hero__eyebrow">Hi, my name is</span>
                        <h1 className="hero__name">Goanar Abraham</h1>
                        <h2 className="hero__role">
                            I'm a{" "}
                            <Typed
                                className="hero__typed"
                                strings={["Full Stack Developer", "React Developer", "Web Designer"]}
                                typeSpeed={50}
                                backSpeed={30}
                                backDelay={1800}
                                loop
                            />
                        </h2>
                        <p className="hero__tagline">
                            I build fast, modern websites and web apps, from the first design to
                            the live deploy. Based in Tel Aviv.
                        </p>

                        <div className="hero__actions">
                            <a href="/projects" className="project-btn project-btn--solid">View my work</a>
                            <a href={CV_URL} target="_blank" rel="noreferrer" className="project-btn project-btn--ghost">View CV</a>
                        </div>

                        <div className="hero__socials">
                            <a href="https://github.com/NinjaDev1droid" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <GitHubIcon />
                            </a>
                            <a href="https://www.linkedin.com/in/goanar-abraham-5082b821a/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── What I do ── */}
            <section className="home-section">
                <div className="container">
                    <div className="section-heading">
                        <span className="section-heading__eyebrow">What I do</span>
                        <h2 className="section-heading__title">Services</h2>
                    </div>
                    <div className="services-grid">
                        {services.map((s, i) => (
                            <div className="service-card" key={s.title}>
                                <span className="project-card__number">{String(i + 1).padStart(2, "0")}</span>
                                <h3>{s.title}</h3>
                                <p>{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Featured projects ── */}
            <section className="home-section">
                <div className="container">
                    <div className="section-heading section-heading--row">
                        <div>
                            <span className="section-heading__eyebrow">Recent work</span>
                            <h2 className="section-heading__title">Featured Projects</h2>
                        </div>
                        <a href="/projects" className="section-heading__link">See all projects →</a>
                    </div>
                    <div className="projects-grid featured-grid">
                        {featured.map((project, i) => (
                            <ProjectCard key={project.repo} project={project} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Call to action ── */}
            <section className="home-section">
                <div className="container">
                    <div className="cta-band">
                        <h2>Have a project in mind?</h2>
                        <p>I'm open to freelance work and full-time roles. Let's build something together.</p>
                        <a href="/contact" className="project-btn project-btn--solid">Get in touch</a>
                    </div>
                </div>
            </section>

            <footer className="site-footer">
                <div className="container">
                    © {new Date().getFullYear()} Goanar Abraham · Built with React
                </div>
            </footer>
        </>
    )
}

export default Header
