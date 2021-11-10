import React from 'react'
import './index.css'
import { StaticImage } from "gatsby-plugin-image"

export default function Secciones() {
    return(
        <div className='secciones'>
            <h2 className='secciones__titulo'>Para nuestros estudiantes</h2>
            <div className='secciones__item item1'>
                <StaticImage src='../../assets/imagenes/biblioteca.jpg' className='secciones__img' alt= 'biblioteca'/>
                <h3>Biblioteca</h3>
            </div>
            <div className='secciones__item item2'>
                <StaticImage src='../../assets/imagenes/cronograma.jpg' className='secciones__img' alt='cronograma'/>
                <h3>Cronograma de actividades</h3>
            </div>
            <div className='secciones__item item3'>
                <StaticImage src='../../assets/imagenes/señas.jpg' className='secciones__img' alt='lenguaje'/>
                <h3>Lengua de señas colombiana</h3>
            </div>
            <div className='secciones__item item4'>
                <StaticImage src='../../assets/imagenes/horario.jpg' className='secciones__img' alt='horario'/>
                <h3>Horario</h3>
            </div>
        </div>
    );
}