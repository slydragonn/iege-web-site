import React from 'react'
import './index.css'

export default function Footer(){
    return(
        <footer className='footer'>
            <ul className='footer__list'>
                <li>Direccion</li>
                <li>Correo</li>
                <li>Telefono</li>
            </ul>
            <ul className='footer__list'>
                <li>Nosotros</li>
                <li>Manual de convivencia</li>
                <li>Institucion</li>
            </ul>
            <ul className='footer__list'>
                <li>Redes</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Youtube</li>
            </ul>
            <ul className='footer__list'>
                <li>Más</li>
            </ul>
        </footer>
    );
}