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
                <div className={s.navbar_row}><a>Listing</a></div>
                <div className={s.navbar_row}>
                    <NavLink to="/findprofiles" activeClassName={s.active}>Find Profiles</NavLink>
                </div>
                <div className={s.navbar_row}>
                    <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
                </div>
            </div>
            <div className={s.navbar_section}>
                <div className={s.navbar_row}><a>Saved</a></div>
                <div className={s.navbar_row}><a>Most Viewed</a></div>
                <div className={s.navbar_row}><a>Liked</a></div>
                <div className={s.navbar_row}><a>Payment</a></div>
            </div>
            <div className={s.navbar_section}>
                <div className={s.navbar_row}><a>Help</a></div>
                <div className={s.navbar_row}><a>Setting</a></div>
                <div className={s.navbar_row}><a>Send Feedback</a></div>
            </div>
        </div>
    )
}
export default Navbar;