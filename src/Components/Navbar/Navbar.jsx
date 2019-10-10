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
                <div className={s.navbar_row}><div>Listing</div></div>
                <div className={s.navbar_row}>
                    <NavLink to="/findprofiles" activeClassName={s.active}>Find Profiles</NavLink>
                </div>
                <div className={s.navbar_row}>
                    <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
                </div>
            </div>
            <div className={s.navbar_section}>
                <div className={s.navbar_row}><div>Saved</div></div>
                <div className={s.navbar_row}><div>Most Viewed</div></div>
                <div className={s.navbar_row}><div>Liked</div></div>
                <div className={s.navbar_row}><div>Payment</div></div>
            </div>
            <div className={s.navbar_section}>
                <div className={s.navbar_row}><div>Help</div></div>
                <div className={s.navbar_row}><div>Setting</div></div>
                <div className={s.navbar_row}><div>Send Feedback</div></div>
            </div>
        </div>
    )
}
export default Navbar;