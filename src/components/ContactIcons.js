import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import './protfolio.css'

const ContactIcons = () => {
    return (
        <div className="contact-icons-section">
            <div className="contact-icon-card">
                <div className="contact-icon-circle">
                    <LocationOnIcon style={{ fontSize: 30, color: "#fff" }} />
                </div>
                <h6 className="contact-icon-title">Address</h6>
                <p className="contact-icon-text">Tel Aviv<br />Israel</p>
            </div>

            <div className="contact-icon-card">
                <a href="tel:0537315943" className="contact-icon-link">
                    <div className="contact-icon-circle">
                        <PhoneIcon style={{ fontSize: 30, color: "#fff" }} />
                    </div>
                </a>
                <h6 className="contact-icon-title">Phone</h6>
                <p className="contact-icon-text">0537315943<br />0552405027</p>
            </div>

            <div className="contact-icon-card">
                <div className="contact-icon-circle">
                    <EmailIcon style={{ fontSize: 30, color: "#fff" }} />
                </div>
                <h6 className="contact-icon-title">Email</h6>
                <p className="contact-icon-text">goanarbol811@gmail.com</p>
            </div>
        </div>
    )
}

export default ContactIcons
