import React, { useState } from 'react';
import { Routes } from '../Constants/Routes';
import { BiMenu, BiWorld } from 'react-icons/bi';
import { ImFacebook, ImTwitter } from 'react-icons/im';
import { Logos } from '../Constants/Images';
import "../css/Nav.css";

const Nav = () => {

   const [clickMenu, setClickMenu] = useState(false);
   let link = window.location.pathname;

   return (
      <div className="nav">
         <nav className="content navbar">
            <label className="logo"><a  href={Routes.Inicio}><img src={Logos.LogoAlianza} alt="" className="imgLogoNav" /></a></label>
            <div className="link_menu">
               <ul className={clickMenu === true ? "itemsNav show" : "itemsNav"}>
                  <li className={link === "/" ? "active" : ""}><a href={Routes.Inicio}>Inicio</a></li>
                  <li className={link === "/Nosotros" ? "active" : ""}><a href={Routes.Nosotros}>Nosotros</a></li>
                  <li className={link === "/Objetivos" ? "active" : ""}><a href={Routes.Objetivos}>Objetivos</a></li>
                  <li className={link === "/Proyectos" ? "active" : ""}><a href={Routes.Proyectos}>Proyectos</a></li>
                  <li className={link === "/Recursos" ? "active" : ""}><a href={Routes.Recursos}>Recursos</a></li>
                  <li className={link === "/Noticias" ? "active" : ""}><a href={Routes.Noticias}>Noticias</a></li>
                  <li className={link === "/Unete_a_Nosotros" ? "active" : ""}><a href={Routes.Unete_a_Nosotros}><b>Únete a Nosotros</b></a></li>
                  <li className="btns">
                     <hr />
                     <div className="mobileWeb">
                        <a href="##"><BiWorld /></a>
                        <a href="##"><ImFacebook /></a>
                        <a href="##"><ImTwitter /></a>
                     </div>
                  </li>
               </ul>
               <ul className="itemsNav web">
                  <li><a href="##"><BiWorld /> Visite el sitio web de la ACFF Global </a></li>
                  <li><a href="##"><ImFacebook /></a></li>
                  <li><a href="##"><ImTwitter /></a></li>
               </ul>
            </div>
            <span className="btn_menu" onClick={() => { setClickMenu(!clickMenu); console.log(clickMenu) }}>
               <BiMenu />
            </span>
         </nav>

      </div>
   );
};

export default Nav;