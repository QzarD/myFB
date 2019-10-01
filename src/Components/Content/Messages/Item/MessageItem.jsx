import s from "./MessageItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const MessageItem = (props)=>{
    return(
        <div className={s.name}>
            <NavLink to={"/messages/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

export default MessageItem;