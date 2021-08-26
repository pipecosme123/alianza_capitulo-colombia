import React from 'react';
import TitleBar from '../Components/TitleBar';
import { Images_02Nosotros } from "../Constants/Images";
import "../css/Nosotros.css";

const Nosotros = () => {
  return (
    <div className="Nosotros">
      <TitleBar title="Nosotros"></TitleBar>
      <div className="textSeccionNosotros sec">
        <p>El Capítulo colombiano asumió los objetivos globales de ACFF para mejorar las condiciones de salud bucal de la primera infancia, y decidió realizar esfuerzos hacia dos campos principales:</p>

        <ol type="A">
          <li>Campo comunitario: Apoyo a la organización y reorientación de los modos de conducción de la salud para lograr generaciones “libres de caries”.</li>
          <li>Campo académico: preparar a los profesionales de la odontología para llevar a cabo esta articulación basada en una nueva comprensión de la promoción de la salud bucal, con énfasis en la prevención / manejo de la caries, adoptando el paradigma actual.</li>
        </ol>
      </div>

      <div className="seccionImage">
        <div className="sec">
          <img src={Images_02Nosotros.grupo_nosotros} alt="" />
        </div>
      </div>

      <div className="sec textSeccionNosotros text2">
        <div className="textSeccionNosotros2">
          <p>Hasta la fecha, las principales actividades de los Capítulos incluyen:</p>

          <ul>
            <li>Posicionamiento del Capítulo en la vida política de cuatro territorios de demostración acordados para trabajar conjuntamente en los actuales planes de salud y programas sectoriales municipales gubernamentales de primera infancia.</li>
            <li>Alianzas estratégicas con socios locales: municipios / gobiernos locales, empresas de servicios de salud / seguros, empresas privadas, organizaciones benéficas, ONG, asociaciones científicas, escuelas de odontología nacionales y el consentimiento del Ministerio de Salud.</li>
            <li>Proyecto de Territorios de Demostración en 4 municipios: diseño conjunto, construcción y primeros pasos de ejecución de modelos de atención primaria de salud oral / general considerando determinantes sociales e incluyendo programas preescolares / escolares, con métricas basadas en evidencia en alrededor de 30,000 &gt;6 años. -los viejos hijos.</li>
            <li>Consenso colectivo de las escuelas de odontología nacionales sobre la enseñanza de cariología para estudiantes universitarios (96%), y los primeros resultados de impacto de cambio de filosofía de atención (26 escuelas).</li>
            <li>Enfoque de profesionales dentales colombianos (&gt; 60%) a través de la educación continua en cariología y el desarrollo de redes sociales para profesionales / estudiantes y consumidores dentales / no dentales.</li>
            <li>Contribuciones de investigaciones nacionales / internacionales, incluyendo publicaciones / reuniones científicas, presentaciones, realización de cursos de investigación de cariología, intercambio de metodología y capacitación en ICDAS en otros capítulos / representantes de países.</li>
          </ul>
        </div>
      </div>

      <div className="seccionImage img2">
        <div className="sec">
          <img src={Images_02Nosotros.grupo_nosotros_ninos} alt="" />
        </div>
      </div>

    </div>
  );
};

export default Nosotros;