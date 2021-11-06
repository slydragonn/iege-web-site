import React from 'react'
import { Link } from 'gatsby';
import filosofia from '../../assets/svg/filosofia.svg';
import principios from '../../assets/svg/principios.svg';
import valores from '../../assets/svg/valores.svg';
import './index.css'

export default function Institucion() {
    return (
        <div className='institucion'>
        <h2 className='institucion__titulo'>I. E. Gabriel Echavarría</h2>
        <div className='institucion__articulo'>
            <section className='institucion__info'>
                <h3><Link to='/institucional/filosofia'>Filosofía Institucional</Link></h3>
                <p>Se fundamenta en la formación integral del estudiante desde el quehacer educativo, buscando vivenciar los derechos, valores y principios éticos, en todos los eventos de la vida, basados en el respeto a la persona, a la diversidad, a la libertad y a la honestidad, permitiendole enfrentar diversas situaciones con un alto sentido de valoración por la vida, la preservación del ambiente y el crecimiento de su entorno socio-familiar</p>
            </section>
            <img src={filosofia} alt='filosofia'/>
        </div>
        <div className='institucion__articulo'>
            <img src={principios} alt='principios'/>
            <section className='institucion__info'>
                <h3><Link to='/institucional/filosofia'>Principios Institucionales</Link></h3>
                <p>Los principios guían el pensamiento y la acción; son el eslabón principal de la cadena de dirección, clarifican el camino y permite el logro de los objetivos; contribuyen a la constitución de la identidad y a la formación del sentido de pertenencia. Asumidos desde la reflexión se convierten en criterios que iluminan tanto como actitud de los actores, sirviendo además de guía al quehacer colectivo.</p>
            </section>
        </div>
        <div className='institucion__articulo'>
            <section className='institucion__info'>
                <h3><Link to='/institucional/filosofia'>Valores Institucionales</Link></h3>
                <p>“…el reino de los cielos es semejante a un mercader que busca buenas perlas, que habiendo hallado una perla preciosa, vendió todo lo que tenía, y la compró” Mt. 13:45, 46. Educación del ser completo. <br /> No aprender sólo valores, sino vivirlos y aplicarlos en la vida. Los valores guían el pensamiento y la acción, clarifican el camino y permiten el logro de los objetivos, contribuyen a la constitución de la identidad y a la formación del sentido de pertenencia. Asumidos desde la reflexión se convierten en criterios que iluminan tanto la actitud de los actores, como el quehacer colectivo.</p>
            </section>
            <img src={valores} alt='valores'/>
        </div>
        </div>
    );
}