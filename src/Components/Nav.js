import React, { useState } from 'react';
import { Routes } from '../Constants/Routes';
import { BiMenu, BiWorld } from 'react-icons/bi';
import { ImFacebook, ImTwitter } from 'react-icons/im';
import { Logos } from '../Constants/Images';
import "../css/Nav.css";

const Nav = () => {

   const [clickMenu, setClickMenu] = useState(false);

   // function handleMenu() {

   // }

   return (
      // <img src="" alt="" className="imgLogoNav" /> onClick={() => handleMenu()}
      <div className="nav">
         <nav className="content navbar">
            <label className="logo"><img src={Logos.LogoAlianza} alt="" className="imgLogoNav" /></label>
            <div className="link_menu">
               <ul className={clickMenu === true ? "itemsNav show" : "itemsNav"}>
                  <li className="active"><a href={Routes.Inicio}>Inicio</a></li>
                  <li><a href={Routes.Nosotros}>Nosotros</a></li>
                  <li><a href={Routes.Objetivos}>Objetivos</a></li>
                  <li><a href={Routes.Proyectos}>Proyectos</a></li>
                  <li><a href={Routes.Recursos}>Recursos</a></li>
                  <li><a href={Routes.Noticias}>Noticias</a></li>
                  <li><a href={Routes.UneteNosotros}><b>Únete a Nosotros</b></a></li>
                  <li className="btns">
                     <hr />
                     <div className="mobileWeb">
                        <a href={Routes.ACFFGlobal}><BiWorld /></a>
                        <a href={Routes.facebook}><ImFacebook /></a>
                        <a href={Routes.twitter}><ImTwitter /></a>
                     </div>
                  </li>
               </ul>
               <ul className="itemsNav web">
                  <li><a href={Routes.ACFFGlobal}><BiWorld /> Visite el sitio web de la ACFF Global </a></li>
                  <li><a href={Routes.facebook}><ImFacebook /></a></li>
                  <li><a href={Routes.twitter}><ImTwitter /></a></li>
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