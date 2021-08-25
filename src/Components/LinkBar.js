import React from 'react';
import "../css/LinkBar.css"

const LinkBar = ({ url, urlImg, title }) => {
    return (
        <div className="LinkBar">
            <a href={url}>
                <img src={urlImg} alt="" />
                <h2>{title}</h2>
            </a>
        </div>
    );
};

export default LinkBar;