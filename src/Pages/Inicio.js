import React from 'react';
import LinkBar from '../Components/LinkBar';
import TitleBar from '../Components/TitleBar';
import { Images_01Index } from '../Constants/Images';
import {Routes} from "../Constants/Routes";
import "../css/Inicio.css";

const Inicio = () => {
  return (
    <div className="paginaInicio">
      <div className="cabezote">
        <div className="cabezoteText">
          <h1>Bienvenidos a Capítulo Colombia</h1>
          <h2>"Alianza global por un futuro libre de caries"</h2>
        </div>
        <img src={Images_01Index.foto_cabezote} className="imgCabezote" alt="" />
      </div>
      <TitleBar title=""></TitleBar>
      <div className="seccion1 sec">
        <img src={Images_01Index.ninos_index} alt="" />
        <p>La Alianza por un Futuro Libre de Caries–ACFF es un proyecto global que agencian líderes mundiales de la odontología y de la salud pública, desde instituciones académicas, profesionales, gremiales, públicas y privadas, que en el marco de su reconocimiento de la salud bucal como un derecho ciudadano,</p>
      </div>
      <div className="sec seccion2PI">
        <div className="textSeccion">
          <p><b>busca reducir el impacto social, epidemiológico y económico de la caries dental,</b> problema altamente frecuente no resuelto para extensos grupos de población, que representa costos y sufrimientos innecesarios y evitables. </p>
        </div>
        <div className="imgSeccion2">
          <img src={Images_01Index.ninos_robot_index} className="imgSec2" alt="" />
        </div>
      </div>
      <div className="sec seccion3PI">
        <div className="imgSeccion3">
          <img src={Images_01Index.ninos_robot_index} className="imgSec3" alt="" />
        </div>
        <div className="textSeccion">
          <p>La caries dental afecta a casi el 100% de la población. ¡Pero las caries se pueden prevenir! ¡Puedes tener un futuro sin caries!</p>
        </div>
      </div>
      <div className="sec seccionImage">
        <img src={Images_01Index.ninos_camisa_index} className="imgBar" alt="" />
      </div>
      <div className="sec seccionLinkBar">
        <LinkBar url={Routes.Nosotros} urlImg={Images_01Index.boton_nosotros} title={"Nosotros"}></LinkBar>
        <LinkBar url={Routes.Objetivos} urlImg={Images_01Index.boton_objetivos} title={"Objetivos"}></LinkBar>
        <LinkBar url={Routes.Proyectos} urlImg={Images_01Index.boton_proyectos} title={"Proyectos"}></LinkBar>
      </div>
    </div>
  );
};

export default Inicio;