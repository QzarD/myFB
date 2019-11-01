import React from "react";
import styles from "./Dashboard2.module.css"
import {connect} from "react-redux";
import Column from "./Column";
import AddForm from "./AddForm";
import {addCard, addColumn, sort} from "../../../Redux/dashboard2-reducer";
import {DragDropContext} from "react-beautiful-dnd";

const Dashboard2 = ({columns, addColumn, addCard, sort}) => {
    const onDragEnd=(result)=>{
        const {destination, source, draggableId} =result;
        if (!destination){
            return
        }
        sort(
            source.droppableId,
            destination.droppableId,
            source.index,
            destination.index,
            draggableId
        )
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={styles.dashboardHome}>
                <div className={styles.dashboard}>
                    {columns.map(column => (
                        <Column columnIndex={column.id} addColumn={addColumn} addCard={addCard} key={column.id}
                                title={column.title} cards={column.cards}/>
                    ))}
                    <AddForm column addColumn={addColumn}/>
                </div>
            </div>
        </DragDropContext>
    )
}

const mapStateToProps = state => ({
    columns: state.dashboard2
})

export default connect(mapStateToProps, {addColumn, addCard, sort})(Dashboard2);