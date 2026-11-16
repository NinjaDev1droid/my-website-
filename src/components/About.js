import React from 'react'
import { Link } from "react-router-dom"
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import SvgIcon from '@material-ui/core/SvgIcon'
import projects from './projectsData'
import './protfolio.css'

const XIcon = (props) => (
    <SvgIcon {...props} viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </SvgIcon>
)

// Same technologies shown on the home page hero
const skills = [
    'JavaScript', 'React', 'Node.js', 'Angular', 'HTML', 'CSS',
    'Java', 'C#', 'Python', 'Go', 'Ruby', 'SQL', 'Firebase', 'Git',
    'Gmail API', 'Anthropic SDK (LLMs)', 'Automation',
]

const socials = [
    { href: 'https://github.com/NinjaDev1droid', label: 'GitHub', className: 'github-btn', Icon: GitHubIcon },
    { href: 'https://www.linkedin.com/in/goanar-abraham-5082b821a/', label: 'LinkedIn', className: 'linkedin-btn', Icon: LinkedInIcon },
    { href: 'https://x.com/gagag131', label: 'X', className: 'twitter-btn', Icon: XIcon },
    { href: 'https://www.instagram.com/king_g___00007', label: 'Instagram', className: 'instagram-btn', Icon: InstagramIcon },
]

const About = () => {
    return (
        <section className="about-section">
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 mb-5 mb-lg-0">
                        <div className="about-photo-frame">
                            <img className="about-photo" src="./images2/gog.jpeg" alt="Goanar Abraham" />
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12 about-content">
                        <span className="about-eyebrow">Hi, I'm Goanar Abraham</span>
                        <h1 className="about-title">About Me</h1>
                        <p className="about-text">
                            Full Stack developer with 3 years of experience. Effective and reliable
                            working autonomously and as part of a team. I am motivated to continue my
                            career in Front and Back End Development, as well as in learning other coding
                            languages. Dedicated athlete that has competed in national competitions.
                        </p>

                        <div className="about-stats">
                            <div>
                                <strong>3</strong>
                                <span>Years of experience</span>
                            </div>
                            <div>
                                <strong>{projects.length}</strong>
                                <span>Projects on GitHub</span>
                            </div>
                            <div>
                                <strong>Full Stack</strong>
                                <span>Front &amp; back end</span>
                            </div>
                        </div>

                        <h2 className="about-subheading">Skills</h2>
                        <ul className="about-skills">
                            {skills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>

                        <div className="about-actions">
                            <Link to="/projects" className="project-btn project-btn--solid">View my projects</Link>
                            <Link to="/contact" className="project-btn project-btn--ghost">Contact me</Link>
                        </div>

                        <div className="about-social-row">
                            {socials.map(({ href, label, className, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    className={`social-icon-btn ${className}`}
                                >
                                    <Icon style={{ fontSize: 24 }} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
