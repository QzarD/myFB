import React, {useState} from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import Menu from "./Menu/Menu";

const Header = ({isAuth, login, logout}) => {
    const [statusMenu, setStatusMenu] = useState(false);
    const ThisMenu = () => {
        setStatusMenu(!statusMenu)
    };

    return (
        <div className={styles.header}>
            <div className={`${styles.inner} max-width`}>
                <div className={styles.menu}>
                    <label onClick={ThisMenu}
                           className={statusMenu ? styles.btnMenuOff : styles.btnMenu} htmlFor="hmt">
                            <span className={styles.first}/>
                            <span className={styles.second}/>
                            <span className={styles.third}/>
                        </label>
                </div>
                <div className={styles.nameSite}>
                    <a href={'http://localhost:3000/'}>New FB</a>
                </div>
                <div className={styles.signIn}>
                    {isAuth
                        ? <div>{login}
                            <button onClick={logout}>Logout</button>
                        </div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
            <Menu statusMenu={statusMenu} setStatusMenu={setStatusMenu}/>
        </div>
    )
}
export default Header;