import React from "react";
import styles from './Menu.module.css';
import {NavLink} from "react-router-dom";
import cn from "classnames";

const Menu=({statusMenu, setStatusMenu})=> {
    const closeMenu=()=>{
        setStatusMenu(false)
    };
    return (
        <div className={cn({[styles.menu]:statusMenu, [styles.menuHide]:!statusMenu})}>
            <div className={styles.menu_section}>
                <div className={styles.menu_row}>
                    <NavLink to="/profile" activeClassName={styles.active} onClick={closeMenu}>Your Profile</NavLink>
                </div>
                <div className={styles.menu_row}>
                    <NavLink to="/findprofiles" activeClassName={styles.active} onClick={closeMenu}>Find Profiles</NavLink>
                </div>
                <div className={styles.menu_row}>
                    <NavLink to="/messages" activeClassName={styles.active} onClick={closeMenu}>Messages</NavLink>
                </div>
                <div className={styles.menu_row}>
                    <NavLink to="/dashboard" activeClassName={styles.active} onClick={closeMenu}>Dashboard</NavLink>
                </div>
            </div>
            <div className={styles.menu_section}>
                <div className={styles.menu_row}><div>Do You Want <b>Buy?</b></div></div>
                <div className={styles.menu_row}><div>Do You Want <b>Rent?</b></div></div>
                <div className={styles.menu_row}><div>Do You Want <b>Sell?</b></div></div>
            </div>
            <div className={styles.menu_section}>
                <div className={styles.menu_row}><div>Help</div></div>
                <div className={styles.menu_row}><div>Setting</div></div>
                <div className={styles.menu_row}><div>Send Feedback</div></div>
            </div>
        </div>
    )
}
export default Menu;