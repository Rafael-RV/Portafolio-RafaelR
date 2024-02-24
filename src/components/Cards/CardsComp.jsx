import React from 'react';
import proyectosData from '../../data.json';
import { Button } from 'react-bootstrap';
import './CardsComp.css';

export const CardsComp = () => {
    return (
        <div id="proyectos" className="container">
            <h2 className='proyectos'>Proyectos</h2>
            <div className="row row-cols-1 row-cols-md-3 g-5">
                {proyectosData.proyectos.map((proyecto, index) => (
                    <div key={index} className="col">
                        <div className="card h-70 d-flex flex-column justify-content-center align-items-center">
                            <img src={proyecto.img} className="card-img-top" alt={proyecto.nombre} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{proyecto.nombre}</h5>
                                <div className="card-text">
                                    <a href={proyecto.credencial} target="_blank" rel="noopener noreferrer">
                                        <img className='credencial' src={proyecto.certificacion} alt={proyecto.nombre} />
                                    </a>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <Button href={proyecto.demo} target="_blank" variant="outline-danger">
                                        Ver Demo
                                    </Button>
                                    <a className='card-icon ml-2' href={proyecto.repositorio} target="_blank" rel="noopener noreferrer">
                                        <span className='logoGithub'><ion-icon name="logo-github"></ion-icon></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
