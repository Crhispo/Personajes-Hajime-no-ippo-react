import './CSSimagenes.css';
import React  from 'react';
import Personaje from './Personaje';
import Header from './Header';
import Footer from './Footer';

const Personajes = [
    {
        "nombre": "Ippo Makunouchi",
        "edad": 26,
        "genero": "Masculino",
        "altura": "165.1 cm",
        "imagen": "http://pm1.narvii.com/6299/d92bbdc9e420b5940f1fb9cdbc36585db803c512_00.jpg"
    },
    {
        "nombre": "Mamoru Takamura",
        "edad": 30,
        "genero": "Masculino",
        "altura": "185 cm",
        "imagen": "https://i.gyazo.com/17fba957a8345623c1ea2678ce52342e.png"
    },
    {
        "nombre": "Ichirō Miyata",
        "edad": 26,
        "genero": "Masculino",
        "altura": "171.5 cm",
        "imagen": "https://i.pinimg.com/474x/3d/b7/01/3db7015f5cb179420edd22c36d7f1f48.jpg"
    },
    {
        "nombre": "Ryō Mashiba",
        "edad": 28,
        "genero": "Masculino",
        "altura": "180 cm",
        "imagen": "https://thewiredfish.files.wordpress.com/2013/06/hajime_no_ippo_round853_p15.png"
    },
    {
        "nombre": "Tatsuya Kimura",
        "edad": 28,
        "genero": "Masculino",
        "altura": "171 cm",
        "imagen": "https://lthumb.lisimg.com/774/23040774.jpg"
    },
    {
            "nombre": "Takeshi Sendō",
            "edad": 27,
            "genero": "Masculino",
            "altura": "167.5 cm",
            "imagen": "https://i.pinimg.com/originals/c4/59/6f/c4596f3855cd167225f4f2c66b9bc83e.jpg"
        }
    ]

    const Contenedor = () => (
            <>
<Header />

    {
            Personajes.map(c =>
                <Personaje 
                    nombre = { c.nombre } 
                    edad = { c.edad } 
                    genero = { c.genero } 
                    altura = { c.altura } 
                    imagen = { c.imagen } />)
}
    
<Footer />
</>
);

export default Contenedor;