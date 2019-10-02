import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar=()=> {
    return (
        <div className={s.navbar_inner}>
            <div className={s.navbar_section}>
                <div className={s.navbar_row}>
                    <NavLink to="/profile" activeClassName={s.active}>Home</NavLink>
                </div>
                <div className={s.navbar_row}><a href="/profile">Listing</a></div>
                <div className={s.navbar_row}>
                    <NavLink to="/findprofiles" activeClassName={s.active}>Find Profiles</NavLink>
                </div>
                <div className={s.navbar_row}>
                    <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
                </div>
            </div>
            <div className={s.navbar_section}>
                <div className={s.navbar_row}><a href="/profile">Saved</a></div>
                <div className={s.navbar_row}><a href="/profile">Most Viewed</a></div>
                <div className={s.navbar_row}><a href="/profile">Liked</a></div>
                <div className={s.navbar_row}><a href="/profile">Payment</a></div>
            </div>
            <div className={s.navbar_section}>
                <div className={s.navbar_row}><a href="/profile">Help</a></div>
                <div className={s.navbar_row}><a href="/profile">Setting</a></div>
                <div className={s.navbar_row}><a href="/profile">Send Feedback</a></div>
            </div>
        </div>
    )
}
export default Navbar;