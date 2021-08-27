import React from 'react';
import TitleBar from '../Components/TitleBar';
import { Images_05Recursos } from '../Constants/Images';
import "../css/Recursos.css";

const Recursos = () => {
  return (
    <div>
      <TitleBar title="Recursos"></TitleBar>
      <div className="sec Recursos">
        <p>Hay una serie de recursos con los que hemos estado involucrados a lo largo de los años, que pueden ser de su interés; desde el desarrollo de nuevos aspectos del programa de estudios de odontología hasta el apoyo a la creación de sistemas de detección y gestión de caries, en el consultorio y/o hogares. Los siguientes recursos pueden ser de interés para cualquier persona que trabaje (o se capacite) en la profesión de odontología, como también para padres, maestros y cuidadores.</p>
        <p>Si encuentra estos recursos útiles, <b>¿desea convertirse en miembro de la comunidad de la ACFF?</b> Encontrará más información como esta en la sección de nuestros miembros, junto con una serie de otras funciones diseñadas exclusivamente para nuestra red internacional de miembros.</p>

        <div className="logRecursos">
          <div className="logos">
            <img src={Images_05Recursos.CarnetdeSaludOral} alt="" />
            <p>Cané de salud oral</p>
          </div>

          <div className="logos">
            <img src={Images_05Recursos.CartillaSoyNiño} alt="" />
            <p>Cartilla soy un Niño líder por un futuro libre de caries</p>
          </div>

          <div className="logos">
            <img src={Images_05Recursos.JuegoRayuela} alt="" />
            <p>Juego de piso rayuela</p>
          </div>

          <div className="logos">
            <img src={Images_05Recursos.SeparadorLibros} alt="" />
            <p>Separador de libros</p>
          </div>

          <div className="logos">
            <img src={Images_05Recursos.CarnetDenral} alt="" />
            <p>Tarjeta de crema dental</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Recursos;