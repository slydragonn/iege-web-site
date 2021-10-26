import React from "react"
import Header from "../components/header/header";
import PcAcademico from "../components/pcAcademico/pc-academico";
import './index.css';

export default function Home () {
  return (
  <div className='homePage'>
    <Header/>
    <PcAcademico/>
  </div>);
}
