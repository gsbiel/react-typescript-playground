import React from 'react';
import './Footer.css';

const Footer = (props: {total: number}) => {
    return(
        <div className="footer">
            {/* <h1 className="footer-title"> {props.current} de {props.max}</h1> */}
            <h1 className="footer-title">Total: {props.total}</h1>
        </div>
    );
};

export default Footer;