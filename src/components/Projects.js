import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import projects from './projectsData'
import './protfolio.css'

const ProjectCard = ({ project, index }) => (
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
            <a href={project.repo} target="_blank" rel="noreferrer" className="project-btn project-btn--ghost">
                <GitHubIcon style={{ fontSize: 18 }} /> Code
            </a>
            {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="project-btn project-btn--solid">
                    <LaunchIcon style={{ fontSize: 18 }} /> Live demo
                </a>
            )}
        </div>
    </article>
)

const Projects = () => {
    return (
        <section className="projects-page">
            <div className="container py-5">
                <h1 className="about-title text-center mb-2">My Projects</h1>
                <p className="projects-subtitle">
                    Things I've built — see more on{' '}
                    <a href="https://github.com/NinjaDev1droid" target="_blank" rel="noreferrer">GitHub</a>.
                </p>
                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.repo} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
