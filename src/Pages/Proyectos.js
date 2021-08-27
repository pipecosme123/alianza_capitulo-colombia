import React from 'react';
import TitleBar from '../Components/TitleBar';
import { Images_04Proyectos } from '../Constants/Images';
import "../css/Proyectos.css";

const Proyectos = () => {
  return (
    <div>
      <TitleBar title="Proyectos ACFF"></TitleBar>
      <div className="Proyectos">
        <div className="sec textCabezote">
          <p>La Alianza para un futuro sin caries, capítulo Colombia se formó en 2011 y ha reunido a profesionales dentales del país con ideas afines para impulsar el cambio en la prevención, el manejo y el tratamiento de la caries dental a nivel nacional. La ACFF Capítulo Colombia, en consecuencia con la misión gobal, ha adoptado y promovido una serie de proyectos diseñados para avanzar en los objetivos de la organización benéfica en áreas específicas.</p>
        </div>
        <div className="seccionProyecto">
          <div className="sec">
            <img src={Images_04Proyectos.Instrumento} alt="" />
            <div className="textProyecto">
              <h3>Día mundial del futuro libre de caries</h3>
              <p>El Día Mundial del Futuro Libre de Caries (WCFFDay) se lanzó en 2016. Su misión es abordar la necesidad de una mayor conciencia mundial sobre las caries dentales, enfermedad que, cuando no se aborda, puede causar cavidades dentales. Además, ACFF se centra en el problema más amplio que se deriva de la mala salud dental y crea conciencia mundial sobre las mejores prácticas para la prevención y el tratamiento de caries y caries.</p>
            </div>
          </div>
        </div>
        <div className="seccionProyecto">
          <div className="sec">
            <img src={Images_04Proyectos.DiaInternacionalDelCepillado} alt="" />
            <div className="textProyecto">
              <h3>Día nacional del cepillado</h3>
              <p>Colgate con su programa de responsabilidad social corporativa BSBF ha estado celebrando el Día Nacional del Cepillado de Dientes desde 2016</p>
              <p>El Programa de Responsabilidad Social BSBF de Colgate ha estado activo en Colombia por más de 4 décadas.</p>
              <p>Colgate, en compañía de partes interesadas públicas y privadas, unen esfuerzos para maximizar el alcance en la educación de los niños, con el objetivo de protegerlos de las caries.</p>
              <p>En un esfuerzo por educar a los niños para que se protejan de las caries nace el Día Nacional del Cepillado de Dientes en 2016 como una iniciativa de BSBF</p>
              <p>Cómo mantener el impulso de una iniciativa cuyo éxito se obtuvo principalmente a través de la celebración in situ en las escuelas y ser capaz de transmitir un fuerte mensaje educativo en un mundo nuevo y virtual.</p>
            </div>
          </div>
        </div>
        <div className="seccionProyecto">
          <div className="sec">
            <img src={Images_04Proyectos.GobiernoDeColombia} alt="" />
            <div className="textProyecto">
              <h3>Estrategia Generación más sonriente</h3>
              <p>Estrategia Generación más sonriente del Ministerio de Salud y el Día mundial de la salud bucodental.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;