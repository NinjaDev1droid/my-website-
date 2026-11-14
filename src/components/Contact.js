import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import './protfolio.css'

const EMAIL = 'goanarbol811@gmail.com'

const Contact = () => {
    const [status, setStatus] = useState('idle') // idle | sending | sent | error

    function sendEmail(e) {
        e.preventDefault()
        const form = e.target
        setStatus('sending')

        // Field names (name, email, subject, message) must match the EmailJS template
        emailjs.sendForm('service_29ymbsk', 'template_cxd2sqi', form, 'user_fK8VafB6YT6akPU8QWWt1')
            .then(() => {
                setStatus('sent')
                form.reset()
            }, (error) => {
                console.log(error.text)
                setStatus('error')
            })
    }

    return (
        <section className="contact-page">
            <div className="container py-5">
                <div className="contact-layout">
                    {/* ── Left: intro + details ── */}
                    <div className="contact-intro">
                        <span className="section-heading__eyebrow">Contact</span>
                        <h1 className="contact-title">Let's work together</h1>
                        <p className="contact-lead">
                            Have a project, a job opportunity or just a question? Send me a message
                            and I'll get back to you as soon as I can.
                        </p>

                        <ul className="contact-details">
                            <li>
                                <span className="contact-details__icon"><EmailIcon /></span>
                                <div>
                                    <span className="contact-details__label">Email</span>
                                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                                </div>
                            </li>
                            <li>
                                <span className="contact-details__icon"><PhoneIcon /></span>
                                <div>
                                    <span className="contact-details__label">Phone</span>
                                    <a href="tel:+972537315943">053-731-5943</a>
                                </div>
                            </li>
                            <li>
                                <span className="contact-details__icon"><LocationOnIcon /></span>
                                <div>
                                    <span className="contact-details__label">Location</span>
                                    <span>Tel Aviv, Israel</span>
                                </div>
                            </li>
                        </ul>

                        <div className="hero__socials">
                            <a href="https://github.com/NinjaDev1droid" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
                            <a href="https://www.linkedin.com/in/goanar-abraham-5082b821a/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
                        </div>
                    </div>

                    {/* ── Right: form ── */}
                    <form className="contact-form" onSubmit={sendEmail}>
                        <div className="contact-form__row">
                            <label>
                                <span>Name</span>
                                <input className="form-control" type="text" name="name" placeholder="Your name" required />
                            </label>
                            <label>
                                <span>Email</span>
                                <input className="form-control" type="email" name="email" placeholder="you@example.com" required />
                            </label>
                        </div>
                        <label>
                            <span>Phone <em>(optional)</em></span>
                            <input className="form-control" type="tel" name="subject" placeholder="Your phone number" />
                        </label>
                        <label>
                            <span>Message</span>
                            <textarea className="form-control" name="message" rows="6" placeholder="Tell me about your project…" required />
                        </label>

                        <button type="submit" className="project-btn project-btn--solid contact-form__submit" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending…' : 'Send message'}
                        </button>

                        {status === 'sent' && (
                            <div className="contact-form__status contact-form__status--ok" role="status">
                                Thanks! Your message was sent. I'll reply soon.
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="contact-form__status contact-form__status--err" role="alert">
                                Something went wrong. Please email me directly at {EMAIL}.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
