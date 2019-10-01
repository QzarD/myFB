import React from "react";
import s from './Footer.module.css';

const Footer=()=> {
    return (
        <div className={`${s.inner} max-width`}>
            <div className="services">
                <div className="footer-home"><a href="/home">Home</a></div>
            </div>
            <div className="wrapper">
                It's my site
            </div>
        </div>
    )
}
export default Footer;