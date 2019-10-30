import React from "react";
import styles from "./Card.module.css";


const Card=({card})=>{
    return(
        <div className={styles.card}>
            {card}
        </div>
    )
}
export default Card;