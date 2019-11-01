import React from "react";
import Card from "./Card";
import styles from "./Dashboard2.module.css"
import AddForm from "./AddForm";
import {Droppable} from "react-beautiful-dnd";


const Column = ({title, cards, addColumn, addCard, columnIndex}) => {
    return (
        <Droppable droppableId={String(columnIndex)}>
            {provided=>(
                <div {...provided.droppableProps} ref={provided.innerRef}
                     className={styles.column}>
                    <h4 className={styles.nameColumn}>{title}</h4>
                    {cards.map((card, index) => (
                        <Card index={index} id={card.id} key={card.id} text={card.text}/>
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