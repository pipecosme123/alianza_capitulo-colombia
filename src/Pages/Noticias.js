import React from 'react';
import TitleBar from '../Components/TitleBar';
import "../css/Noticias.css";

const Noticias = () => {
  return (
    <div>
      <TitleBar title="Noticias"></TitleBar>
      <div className=" sec Noticias">
        <p>En esta sección pretendemos mantener informados a los ciudadanos y pr ofesionales en temas relacionados con la prevención de patologías bucodentales y también de las técnicas con las que los equipos de Salud Bucodental cuentan para llevar a cabo este fin.</p>
        <p>Le recordamos que una correcta salud oral es esencial para mantener una buena salud general.</p>
      </div>
    </div>
  );
};

export default Noticias;