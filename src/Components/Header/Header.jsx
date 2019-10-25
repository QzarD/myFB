import React, {useState} from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import Menu from "./Menu/Menu";

const Header = (props) => {
    const [statusMenu, setStatusMenu] = useState(false);
    const onMenu = () => {
        setStatusMenu(true)
    };
    const offMenu = () => {
        setStatusMenu(false)
    };

    return (
        <div className={styles.header}>
            <div className={`${styles.inner} max-width`}>
                <div className={styles.menu}>
                    {statusMenu
                        ? <label onClick={offMenu} className={styles.btnMenuOff} htmlFor="hmt">
                            <span className={styles.first}/>
                            <span className={styles.second}/>
                            <span className={styles.third}/>
                        </label>
                        : <label onClick={onMenu} className={styles.btnMenu} htmlFor="hmt">
                            <span className={styles.first}/>
                            <span className={styles.second}/>
                            <span className={styles.third}/>
                        </label>
                    }
                </div>
                <div className={styles.nameSite}>
                    <a href={'http://localhost:3000/'}>YouWant</a>
                </div>
                <div className={styles.signIn}>
                    {props.isAuth
                        ? <div>{props.login}
                            <button onClick={props.logout}>Logout</button>
                        </div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
            <Menu statusMenu={statusMenu}/>
        </div>
    )
}
export default Header;