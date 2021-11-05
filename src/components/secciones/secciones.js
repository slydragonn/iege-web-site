import React from 'react'
import './index.css'
import biblio from '../../assets/imagenes/biblioteca.jpg'
import crono from '../../assets/imagenes/cronograma.jpg'
import lengua from '../../assets/imagenes/señas.jpg'
import horario from '../../assets/imagenes/horario.jpg'

export default function Secciones() {
    return(
        <div className='secciones'>
            <h2 className='secciones__titulo'>Para nuestros estudiantes</h2>
            <div className='secciones__item item1'>
                <img src={biblio} width='400px' alt='biblioteca'/>
                <h3>Biblioteca</h3>
            </div>
            <div className='secciones__item item2'>
                <img src={crono} width='300px' alt='biblioteca'/>
                <h3>Cronograma de actividades</h3>
            </div>
            <div className='secciones__item item3'>
                <img src={lengua} width='300px' alt='biblioteca'/>
                <h3>Lengua de señas colombiana</h3>
            </div>
            <div className='secciones__item item4'>
                <img src={horario} width='300px' alt='biblioteca'/>
                <h3>Horario</h3>
            </div>
        </div>
    );
}