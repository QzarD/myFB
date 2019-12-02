import React from "react";
import styles from "./Dashboard2.module.css"
import {connect} from "react-redux";
import Column from "./Column";
import AddForm from "./AddForm";
import {addCard, addColumn, deleteCard, deleteColumn, sort} from "../../../Redux/dashboard2-reducer";
import {DragDropContext, Droppable} from "react-beautiful-dnd";

const Dashboard2 = ({columns, addColumn, addCard, sort, deleteColumn, deleteCard}) => {
    const onDragEnd=(result)=>{
        const {destination, source, draggableId, type} =result;
        if (!destination){
            return
        }
        sort(
            source.droppableId,
            destination.droppableId,
            source.index,
            destination.index,
            draggableId,
            type
        )
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={styles.dashboardHome}>
                <Droppable droppableId="all-lists" direction="horizontal" type="list">
                    {provided =>(
                        <div className={styles.dashboard} {...provided.droppableProps} ref={provided.innerRef}>
                            {columns.map((column, index) => (
                                <Column deleteCard={deleteCard} deleteColumn={deleteColumn}
                                        columnId={index} index={index} columnIndex={column.id}
                                        addColumn={addColumn} addCard={addCard} key={column.id}
                                        title={column.title} cards={column.cards}/>
                            ))}
                            {provided.placeholder}
                            <AddForm column addColumn={addColumn}/>
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    )
}

const mapStateToProps = state => ({
    columns: state.dashboard2
})

export default connect(mapStateToProps, {addColumn, addCard, sort, deleteColumn, deleteCard})(Dashboard2);