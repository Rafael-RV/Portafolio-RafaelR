import React from 'react';
import '../AboutMe/AboutMe.css';

export const AboutMe = () => {
    return (
        <div className='container-1'>
            <div className='aboutme'>
                <img
                    src="https://drive.google.com/uc?id=1vb3fzwfEMg-SqYP4-c2bvfwpc12HptX1"
                    alt="LogoRR"
                    className="about-me-image"
                />

                <p className='description' id='contacto'>
                    <span className='developer'>Desarrollador Full Stack</span>, trabajo con JavaScript como lenguaje de programación
                    junto con el stack de tecnología <span className='stack'>MongoDB, Express, React y Node.js.</span> Con entusiasmo,
                    asumo la idea de que siempre podemos aprender algo nuevo, y por ende, se puede hacer mejor.
                    Parte de mi filosofía de trabajo es la pasión, el deseo de aportar de forma significativa,
                    la disciplina y el trabajo en equipo.

                    <div className='iconos' >
                        <a className='linkedin' href="https://www.linkedin.com/">
                            <p><span><ion-icon name="logo-linkedin"></ion-icon></span> LinkedIn</p>
                        </a>
                        <a href="https://github.com/Rafael-RV">
                            <p><span><ion-icon name="logo-github"></ion-icon></span> GitHub</p>
                        </a>
                    </div>
                </p>
            </div>
        </div>
    );
};
