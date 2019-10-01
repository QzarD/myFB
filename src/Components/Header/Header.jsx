import React from "react";
import s from './Header.module.css';

const Header=()=> {
    return (
        <div className={`${s.inner} max-width`}>
            <div className={s.menu}>
                <button className="c-hamburger c-hamburger-line">
                    <span>Menu</span>
                </button>
            </div>
            <div className={s.logo}>
                <img src="../../img/logo192.png" alt="logo192"/>
            </div>
            <div className="nameSite">
                <span>YouListing</span>
            </div>
            <div className="search">
                <input type="text"/>
            </div>
            <div className="button">
                <button>+ Add Listing</button>
            </div>
            <div className="icoHome">

            </div>
            <div className="icoMessage"></div>
            <div className="icoBell"></div>
            <div className="signIn"></div>
        </div>
    )
}
export default Header;