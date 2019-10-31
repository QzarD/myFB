import React, {Fragment} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Dashboard from "./Dashboard";
import {addCard, addColumn, deleteColumn, sort} from "../../../Redux/dashboard-reducer";
import Column from "./Column";
import styles from "./Dashboard.module.css"
import {DragDropContext} from 'react-beautiful-dnd';



const DashboardContainer = ({items, addColumn, addCard, deleteColumn, sort}) => (

        <Fragment>
            <div className={styles.dashboard}>
                {items.map((item, index) => (
                    <Column {...item}
                            key={index}
                            columnIndex={index}
                            addColumn={addColumn}
                            deleteColumn={deleteColumn}
                            addCard={addCard}
                            sort={sort}
                    />
                ))}
                <Column addColumn={addColumn} addCard={addCard} deleteColumn={deleteColumn}/>
            </div>
        </Fragment>
);
const mapStateToProps = (state) => {
    return {
        items: state.dashboard.items,
    }
};

export default compose(
    connect(mapStateToProps, {addCard, addColumn, deleteColumn, sort})
)(DashboardContainer)
