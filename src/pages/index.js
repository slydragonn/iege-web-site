import React from "react"
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Institucion from "../components/institucion/institucion";
import PcAcademico from "../components/pcAcademico/pc-academico";
import Secciones from "../components/secciones/Secciones";
import Simbolos from "../components/simbolos/simbolos";
import './index.css';

export default function Home () {
  return (
  <div className='homePage'>
    <Header/>
    <PcAcademico/>
    <Institucion/>
    <Secciones/>
    <Simbolos/>
    <Footer/>
  </div>);
}
