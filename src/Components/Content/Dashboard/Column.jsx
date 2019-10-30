
import styles from "./Dashboard.module.css"
import {Field} from "redux-form";
import React from "react";
import AddForm from "./AddForm";
import Card from "./Card";


const Column =({columnIndex, title, cards, addColumn, addCard, deleteColumn})=>{

    const deleteColumnAgree=()=>{
        if (global.confirm("Delete column???")){
            deleteColumn(columnIndex)
        }
    }
    return (
        <div className={styles.column}>
            <div className="column__inner">
                {title && (
                    <div className={styles.nameColumn}>
                        <b>{title}</b>
                        <div onClick={deleteColumnAgree} className="column__remove">
                            X
                        </div>
                    </div>
                )}
                {cards && (
                    <div className="column__items">
                        {cards.map((card, index) => (
                            <Card key={index} card={card}/>
                        ))}
                    </div>
                )}
                <AddForm columnIndex={columnIndex}
                         isEmptyColumn={!cards}
                         addColumn={addColumn}
                         addCard={addCard}
                         />
            </div>
        </div>
    )
};

export default Column;