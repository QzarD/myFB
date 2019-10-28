import React, {Fragment} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Dashboard from "./Dashboard";
import {addCard, addColumn, deleteColumn} from "../../../Redux/dashboard-reducer";
import Column from "./Column";


const DashboardContainer =({items, addColumn, addCard, deleteColumn})=>(
    <Fragment>
        {items.map((item,index)=>(
            <Column {...item}
                key={index}
                columnIndex={index}
                addColumn={addColumn}
                deleteColumn={deleteColumn}
                addCard={addCard}
            />
        ))}
        <Column addColumn={addColumn} addCard={addCard} deleteColumn={deleteColumn}/>
    </Fragment>
);
export default compose(
    connect(({columns})=>({items: columns}),{addCard, addColumn, deleteColumn})
)(DashboardContainer)