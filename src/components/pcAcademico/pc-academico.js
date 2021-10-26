import React from 'react'
import video from '../../assets/videos/tutorial.mp4'
import './index.css'

export default function PcAcademico(){
    return(
        <div className='pcAcademico'>
            <h2 className='pcAcademico__titulo'>PC Academico</h2>
            <div className='pcAcademico__info'>
                <div className='pcAcademico__video'>
                    <video width='400px' controls>
                        <source src={video} type='video/mp4'/>
                    </video>
                </div>
                <div className='pcAcademico__ingresar'>
                    <h2>Plataforma de entrega  y trabajo con guías</h2>
                    <a target='_blank' href='http://199.241.185.66/server6/wc.dll?seguridad~login'>Ingresar</a>
                </div>
            </div>
        </div>
    );
}