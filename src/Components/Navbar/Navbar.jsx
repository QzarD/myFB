import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar=()=> {
    return (
        <div className={s.navbar_inner}>
            <div className={s.navbar_section}>
                <div className={s.navbar_row}>
                    <NavLink to="/home" activeClassName={s.active}>Home</NavLink>
                </div>
                <div className={s.navbar_row}><a href="/home">Listing</a></div>
                <div className={s.navbar_row}>
                    <NavLink to="/findprofiles" activeClassName={s.active}>Find Profiles</NavLink>
                </div>
                <div className={s.navbar_row}>
                    <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
                </div>
            </div>
            <div className={s.navbar_section}>
                <div className={s.navbar_row}><a href="/home">Saved</a></div>
                <div className={s.navbar_row}><a href="/home">Most Viewed</a></div>
                <div className={s.navbar_row}><a href="/home">Liked</a></div>
                <div className={s.navbar_row}><a href="/home">Payment</a></div>
            </div>
            <div className={s.navbar_section}>
                <div className={s.navbar_row}><a href="/home">Help</a></div>
                <div className={s.navbar_row}><a href="/home">Setting</a></div>
                <div className={s.navbar_row}><a href="/home">Send Feedback</a></div>
            </div>
        </div>
    )
}
export default Navbar;