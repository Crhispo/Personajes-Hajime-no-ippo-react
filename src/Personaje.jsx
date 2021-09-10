import React from 'react';
import PropTypes from 'prop-types';

const Personaje = ({nombre, edad, genero, altura, imagen}) => (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {nombre}
                    </h5>
                    <p className="card-text">Edad: {edad}.</p>
                    <p className="card-text">Genero: {genero}.</p>
                    <p className="card-text">Altura: {altura}.</p>
                    <img src = {imagen} />
                </div>
            </div>
            );

Personaje.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string,
    altura: PropTypes.string,
    imagen: PropTypes.string
}

Personaje.defaultProps = {
    nombre: "no tiene nombre"
}

export default Personaje;