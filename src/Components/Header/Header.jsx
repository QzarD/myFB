import React from "react";
import styles from './Header.module.css';
import logo from '../../img/logo192.png';
import {NavLink} from "react-router-dom";

const Header=(props)=> {
    return (
        <div className={`${styles.inner} max-width`}>
            <div className={styles.menu}>
                <button className="c-hamburger c-hamburger-line">
                    <a href={'http://localhost:3000/'}>Menu</a>
                </button>
            </div>
            <div className={styles.logo}>
                <img src={logo} alt="logo192"/>
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
            <div className="signIn">
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    )
}
export default Header;