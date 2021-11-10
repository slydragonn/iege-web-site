import React from 'react'
import Navbar from './navbar/navbar'
import './index.css'
import escudo from '../../assets/imagenes/escudoPrincipal.png'
import styled from 'styled-components';
import biblio from '../../assets/imagenes/fondo.jpg'

const Fondo = styled.header`
    display: flex;
    width: 100%;
    height: 660px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${props => props.bgImg});
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
`;

export default function Header() {
    return (
        <Fondo bgImg={biblio}>
            <Navbar/>
            <div className='presentacion'>
            <h2 className='presentacion__titulo'>Institución Educativa</h2>
            <div className='escudo'>
                <img className='escudo__img' src={escudo} width='400px' alt='escudo gabriel echavarria'/>
            </div>
            <h2 className='presentacion__titulo'>Gabriel Echavarría</h2>
            </div>
        </Fondo>
    )
}