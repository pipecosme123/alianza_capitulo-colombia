import React from 'react';
import TitleBar from '../Components/TitleBar';
import { Images_03ObejtivosACFF } from '../Constants/Images';
import "../css/Objetivos.css";

const Objetivos = () => {
    return (
        <div>
            <TitleBar title="Objetivos"></TitleBar>
            <div className="Objetivos">
                <div className="sec textObjetivos">
                    <p>Los Objetivos de la ACFF son fundamentales para todo lo que hace la organización. Esforzarse por cumplir con cada objetivo individual nos mueve más hacia el logro de cumplir nuestra meta:</p>
                </div>
                <div className="seccionImg">
                    <div className="sec img">
                        <img src={Images_03ObejtivosACFF.ninos_objetivos} alt="" />
                    </div>
                </div>
                <div className="sec">
                    <h3>Todos los niños nacidos a partir de 2026 deberían permanecer libres de caries (cavitacional) durante su vida.</h3>
                    <p>Dentro de los 3 años del lanzamiento de un capítulo, el 90% de las Facultades y asociaciones de odontología en el área, deberían haber aceptado la filosofía detrás del “nuevo” enfoque de "la caries como un proceso”, con el fin de mejorar la prevención y el manejo de la caries dental</p>
                </div>
                <div className="seccionBarniz">
                    <div className="sec sBarniz">
                        <div className="img">
                            <img src={Images_03ObejtivosACFF.aplicacion_barniz_objetivos} alt="" />
                        </div>
                        <div className="textSeccion">
                            <p>La AFLC y sus capítulos trabajarán colaborativamente con un amplio rango de organizaciones para lograr una reducción de la inequidad en caries dental, dentro y entre los países, tanto en el contexto de la salud bucal, como general.</p>
                            <p>Para 2020, los miembros "regionales" AFLC, deberían haber integrado sistemas integrales y localmente apropiados para el control y manejo de la caries dental y monitorear los abordajes existentes y los desarrollados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Objetivos;