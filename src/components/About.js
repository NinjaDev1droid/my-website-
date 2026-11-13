import React from 'react'
import { motion } from "framer-motion";
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import SvgIcon from '@material-ui/core/SvgIcon'
import './protfolio.css'

const XIcon = (props) => (
    <SvgIcon {...props} viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </SvgIcon>
)

const About = () => {
    return (
        <div className=" container py-5">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="image-wraper">
                        <motion.img
                        className=" profile-img"
                        style={{width:"26rem"}}
                            src="./images2/gog.jpeg" alt="....."
                        
                            animate={{
                                scale: [1, 1, 1, 1, 1],
                                rotate: [0, 0, 270, 270, 0],
                                borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                            }}
                            transition={{
                                duration: 4,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                loop: Infinity,
                                repeatDelay: 4
                            }}
                        />
                       
                        
                    </div>

                </div>
                <div className="col-lg-6 col-md-12 mb-4">

                    <h1 className="about-title mt-5">about Me</h1>
                    <p className="about-text" style={{fontSize:"22px"}}>
                    Full Stack developer with over a year of experience.  Effective and reliable working autonomously and as part of a team. I am motivated to continue my career in Front and Back End Development, as well as in learning other coding languages. Dedicated athlete that has competed in national competitions
                    </p>
                </div>
            </div>

            <div className="about-social-row">
                <a href="https://github.com/NinjaDev1droid" target="_blank" rel="noreferrer" className="social-icon-btn github-btn">
                    <GitHubIcon style={{ fontSize: 26 }} />
                </a>
                <a href="https://www.linkedin.com/in/goanar-abraham-5082b821a/" target="_blank" rel="noreferrer" className="social-icon-btn linkedin-btn">
                    <LinkedInIcon style={{ fontSize: 26 }} />
                </a>
                <a href="https://x.com/gagag131" target="_blank" rel="noreferrer" className="social-icon-btn twitter-btn">
                    <XIcon style={{ fontSize: 26 }} />
                </a>
                <a href="https://www.instagram.com/king_g___00007" target="_blank" rel="noreferrer" className="social-icon-btn instagram-btn">
                    <InstagramIcon style={{ fontSize: 26 }} />
                </a>
            </div>
        </div>
    )
}

export default About
