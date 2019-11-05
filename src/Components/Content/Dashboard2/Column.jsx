import React from "react";
import Card from "./Card";
import styles from "./Dashboard2.module.css"
import AddForm from "./AddForm";
import {Droppable} from "react-beautiful-dnd";


const Column = ({title, cards, addColumn, addCard, columnId, columnIndex, deleteColumn, deleteCard}) => {
    return (
        <Droppable droppableId={String(columnIndex)}>
            {provided=>(
                <div {...provided.droppableProps} ref={provided.innerRef}
                     className={styles.column}>
                    <div className={styles.nameColumn}>
                        <h4 >{title}</h4>
                        <span onClick={()=>{deleteColumn(columnId)}} className={styles.btnDeleteColumn}>X</span>
                    </div>

                    {cards.map((card, index) => (
                        <Card deleteCard={deleteCard} columnId={columnId} index={index} id={card.id} key={card.id} text={card.text}/>
                    ))}
                    {provided.placeholder}
                    <AddForm columnIndex={columnIndex}
                             addColumn={addColumn}
                             addCard={addCard}
                    />
                </div>
            )}

        </Droppable>
    )
}

export default Column;