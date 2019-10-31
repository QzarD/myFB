import styles from "./Dashboard.module.css"
import {Field} from "redux-form";
import React from "react";
import AddForm from "./AddForm";
import Card from "./Card";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';


const Column = ({columnIndex, id, title, cards, addColumn, addCard, deleteColumn, sort}) => {
    const deleteColumnAgree = () => {
        if (global.confirm("Delete column???")) {
            deleteColumn(columnIndex)
        }
    }
    return (
        <DragDropContext onDragEnd={(result) => {
            const {destination, source, draggableId} = result;
            if (!destination) {
                return;
            }
            sort(
                source.index,
                destination.index,
                source.index,
                destination.index,
                draggableId,
                columnIndex
            )
        }}>
            <Droppable droppableId={String(id)}>
                {provided => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className={styles.column}>
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
                                        <Card key={index} card={card} id={index} index={index}/>
                                    ))}
                                </div>
                            )}
                            <AddForm columnIndex={columnIndex}
                                     isEmptyColumn={!cards}
                                     addColumn={addColumn}
                                     addCard={addCard}
                            />
                        </div>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

        </DragDropContext>
    )
};

export default Column;