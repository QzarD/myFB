import React from "react";
import styles from "./Card.module.css";
import {Draggable} from 'react-beautiful-dnd';


const Card = ({card, id, index}) => {
    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided=>(
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={styles.card}>
                    {card}
                </div>
            )}
        </Draggable>
    )
}
export default Card;