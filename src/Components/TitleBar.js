import React from 'react';
import { Logos } from '../Constants/Images';
import "../css/TitleBar.css";

const TitleBar = ({title}) => {
    return (
        <div className="titleBar">
            <div className={ title === "" ? "noTitle" : "title"}><h1>{title}</h1></div>
            <img src={Logos.logoPeople2} alt="" className="imgTitleBar" />
        </div>
    );
};

export default TitleBar;