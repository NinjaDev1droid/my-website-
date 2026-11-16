import React from 'react'
import { Link } from "react-router-dom"
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import projects from './projectsData'
import './protfolio.css'

export const ProjectCard = ({ project, index }) => (
    <article
        className={`project-card${project.featured ? ' project-card--featured' : ''}`}
        style={{ animationDelay: `${index * 0.08}s` }}
    >
        <div className="project-card__top">
            <span className="project-card__number">{String(index + 1).padStart(2, '0')}</span>
            {project.demo && <span className="project-card__live">● Live</span>}
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <ul className="project-card__tags">
            {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
            ))}
        </ul>

        <div className="project-card__links">
            {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer" className="project-btn project-btn--ghost">
                    <GitHubIcon style={{ fontSize: 18 }} /> Code
                </a>
            )}
            {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="project-btn project-btn--solid">
                    <LaunchIcon style={{ fontSize: 18 }} /> Live demo
                </a>
            )}
        </div>
    </article>
)

const Projects = () => {
    const liveCount = projects.filter((p) => p.demo).length

    return (
        <section className="projects-page">
            <div className="container py-5">
                <div className="section-heading section-heading--row projects-header">
                    <div>
                        <span className="section-heading__eyebrow">Portfolio</span>
                        <h1 className="section-heading__title projects-title">My Projects</h1>
                        <p className="projects-subtitle">
                            {projects.length} projects · {liveCount} live on the web. Click <strong>Live demo</strong> to
                            try a project or <strong>Code</strong> to see the source.
                        </p>
                    </div>
                    <a href="https://github.com/NinjaDev1droid" target="_blank" rel="noreferrer" className="project-btn project-btn--ghost">
                        <GitHubIcon style={{ fontSize: 18 }} /> GitHub profile
                    </a>
                </div>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>

                <div className="cta-band projects-cta">
                    <h2>Like what you see?</h2>
                    <p>I'm available for new projects. Tell me what you want to build.</p>
                    <Link to="/contact" className="project-btn project-btn--solid">Get in touch</Link>
                </div>
            </div>
        </section>
    )
}

export default Projects
