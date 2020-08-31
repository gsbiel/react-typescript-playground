import React from 'react';
import './Footer.css';

const Footer = (props: {current:Number, max: Number}) => {
    return(
        <div className="footer">
            <h1 className="footer-title"> {props.current} de {props.max}</h1>
        </div>
    );
};

export default Footer;