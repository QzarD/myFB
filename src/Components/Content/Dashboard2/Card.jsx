import React from "react";
import styles from "./Card.module.css";
import {Draggable} from "react-beautiful-dnd";

const Card = ({text, id, index, deleteCard, columnId}) => {
    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <div ref={provided.innerRef}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                >
                    <div className={styles.card}>
                        <div>
                            {text}
                        </div>
                        <div onClick={()=>{deleteCard(columnId, index)}} className={styles.btnDelete}>
                            X
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    )
}
export default Card;