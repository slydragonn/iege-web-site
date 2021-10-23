import React from 'react'
import Navbar from './navbar/navbar'
import './index.css'
import escudo from '../../assets/imagenes/escudoPrincipal.png'

export default function Header() {
    return (
        <header className='header'>
            <Navbar/>
            <div className='presentacion'>
            <h2 className='presentacion__titulo'>Institución Educativa</h2>
            <div className='escudo'>
                <img className='escudo__img' src={escudo} width='400px' alt='escudo gabriel echavarria'/>
            </div>
            <h2 className='presentacion__titulo'>Gabriel Echavarría</h2>
            </div>
        </header>
    )
}