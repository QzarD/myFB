import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Dashboard from "./Dashboard";
import {addCard} from "../../../Redux/dashboard-reducer";


class DashboardContainer extends React.Component{
    render(){
        return(
            <div>
                <Dashboard cards={this.props.cards}/>
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return{
        cards:state.dashboard.cards,
    }
};

export default compose(
    connect(mapStateToProps,{addCard})
)(DashboardContainer)