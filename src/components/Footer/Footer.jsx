import React from 'react';
import './Footer.css';
import { Link } from 'react-scroll';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-section section-padding'>
                <div className='footer-links'>
                    <Link to="home" smooth={true} duration={500}><h4>Inicio</h4></Link>
                </div>

                <div className='footer-links'>
                    <Link to="proyectos" smooth={true} duration={500}><h4>Proyectos</h4></Link>
                </div>

                <div className='footer-links'>
                    <Link to="contacto" smooth={true} duration={500}><h4>Contacto</h4></Link>
                
                    <a href="/linkedin">
                        <p><span> <ion-icon name="logo-linkedin"> </ion-icon> </span> LinkedIn</p>
                    </a>
                    <a href="/https://github.com/Rafael-RV">
                        <p> <span><ion-icon name="logo-github"></ion-icon></span> GitHub </p>
                    </a>
                </div>

                <hr />

                <div className='footer-below'>
                    <div className='footer-copyright'>
                        <p>
                            @{new Date().getFullYear()} RAFAEL RINCON
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


