import React from 'react'
import './index.css'
import escudo from '../../assets/imagenes/escudoPrincipal.png'
import bandera from '../../assets/imagenes/banderaPrincipal.png'
import himno from '../../assets/imagenes/himno.png'

export default function Simbolos() {
    return(
        <div className='simbolos'>
            <h2 className='simbolos__titulo'>Simbolos Institucionales</h2>
                <h3 className='simbolos__subtitulo'>Bandera Institucional</h3>
                <img className='simbolos__bandera' src={bandera} width='400px' alt='bandera institucional'/>
                <img src={escudo} width='400px' alt='escudo institucional'/>
                <h3 className='simbolos__subtitulo simbolos__subtitulo--aling'>Nuestro Escudo</h3>
                <h3 className='simbolos__subtitulo'>Nuestro Himno</h3>
                <img src={himno} width='400px' alt='himno institucional'/>
            <p>Letra Lic. Alfonso León Restrepo Celis</p>
        </div>
    );
}

//himno: Letra Lic. Alfonso León Restrepo Celis