import React from 'react'
import '../AboutMe/AboutMe.css'



export const AboutMe = () => {
    return (



        <div className='aboutme'>
            <img
                src="https://drive.google.com/uc?id=1vb3fzwfEMg-SqYP4-c2bvfwpc12HptX1"
                alt="Fabricando zapato"
                className="about-me-image"
            />
            

            <p className='description'>

                <span className='developer'>Desarrollador Full Stack</span>, trabajo con JavaScript como lenguaje de programación
                junto con el stack de tecnología <span className='stack'>MongoDB, Express, React y Node.js.</span> Con entusiasmo,
                asumo la idea de que siempre podemos aprender algo nuevo, y por ende, se puede hacer mejor.
                Parte de mi filosofía de trabajo es la pasión, el deseo de aportar de forma significativa,
                la disciplina y el trabajo en equipo.
            </p>
        </div>
    )
}

