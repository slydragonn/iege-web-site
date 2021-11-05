import React from 'react'
import { Link } from 'gatsby'
import './navigator.css'

export default function Navigator() {
    return (
            <ul id='nav' className='navigator__list'>
                <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    Institucional
                    <ul className='navigator__subList'>
                        <li>
                            <Link to='/institucional/mision'>Misión</Link>
                        </li>
                        <li>
                            <Link to='/institucional/vision'>Visión</Link>
                        </li>
                        <li>
                            <Link to='/institucional/filosofia'>Filosofía</Link>
                        </li>
                        <li>
                            <Link to='/'>Principios</Link>
                        </li>
                        <li>
                            <Link to='/'>Valores</Link>
                        </li>
                        <li>
                            <Link to='/'>Metas</Link>
                        </li>
                        <li>
                            <Link to='/'>Simbolos</Link>
                        </li>
                        <li>
                            <Link to='/'>Promociones</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    Proyectos
                    <ul className='navigator__subList'>
                        <li>
                            <Link to='/proyectos/proyecto-carteles'>Carteles</Link>
                        </li>
                        <li>
                            <Link to='/proyectos/me-quiero-y-quiero'>Proyecto 'Me quiero y quiero'</Link>
                        </li>
                        <li>
                            <Link to='/proyectos/proyecto-democracia'>Democracia</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    Documentos
                    <ul className='navigator__subList'>
                        <li>
                            <Link to='/documentos/manual-de-convivencia'>Manual de convivencia</Link>
                        </li>
                    </ul>
                </li>
            </ul>
    )
}
