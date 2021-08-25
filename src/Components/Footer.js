import React from 'react';
import { Routes } from '../Constants/Routes';
import { FaYoutube } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import { GrFacebookOption } from 'react-icons/gr';
import { Logos, Images_01Index, Aliados } from '../Constants/Images'
import "../css/Footer.css";

const Footer = () => {
   return (
      < div className="footer" >
         <div className="seccion1">
            <div className="img">
               <img src={Images_01Index.nino_barra_informacion} alt="" className="imgSeccion1" />
            </div>
            <div className="paraPacientes">
               <h3>Para pacientes</h3>
               <p>Encuentra maretial educativo en línea para usted y su familia</p>
               <a href={Routes.descubrelo}>Descúbrelo</a>
            </div>
         </div>
         <div className="seccion2">
            <h3>Nuetros aliados</h3>
            <div className="aliados">
               {Aliados.map(imgA => (
                  <img src={imgA.aliado} alt="" className="imgAliados" />
               ))}
            </div>
         </div>
         <div className="seccion3">
            <h3>Sigue ACFF Capítulo Colombia</h3>
            <div className="socialMedia">
               <a href={Routes.youtube}><FaYoutube /></a>
               <a href={Routes.instagram}><SiInstagram /></a>
               <a href={Routes.facebook}><GrFacebookOption /></a>
            </div>
         </div>
         <div className="seccion4">
            <div className="img">
               <img src={Logos.logoPeople1} alt="" className="imgSeccion1" />
            </div>
            <div className="terminos">
               <h3>La Alianza por un Futuro Libre de Caries</h3>
               <span>Domicilio Social: Capella Building (10th Floor), York Street, Glasgow, Scotland, G2 8JX.</span><br />
               <span>Número de Beneficencia Registrado: SC044174 | ©2021 Alliance for a Cavity-Free Future</span><br />
               <span>Privacidad | Términos y condiciones | Términos de Membresía</span><br />
            </div>
         </div>
      </div >
   );
};

export default Footer;