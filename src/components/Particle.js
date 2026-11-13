import React from 'react'
import Particles from 'react-particles-js';

// Subtle background network behind the home hero
const Particle = () => {
    return (
        <div style={{ pointerEvents: 'none' }}>
            <Particles
                style={{ pointerEvents: 'none' }}
                className="particle-canves"
                params={{
                    particles: {
                        number: { value: 45, density: { enable: true, value_area: 900 } },
                        color: { value: "#ffffff" },
                        opacity: { value: 0.25 },
                        size: { value: 2, random: true },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: "#ff6347",
                            opacity: 0.15,
                            width: 1
                        },
                        move: { enable: true, speed: 0.8 }
                    },
                    interactivity: {
                        events: { onhover: { enable: false }, onclick: { enable: false } }
                    },
                    retina_detect: true
                }}
            />
        </div>
    )
}

export default Particle
