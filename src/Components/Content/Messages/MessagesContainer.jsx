import React from "react";
import {addMessageActionCreator} from "../../../Redux/dialog-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {compose} from "redux";
import {getDialogs, getMessages} from "../../../Redux/dialog-selectors";


class MessagesContainer extends React.Component{
    render() {
        return <div>
            <Messages {...this.props}/>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        dialogs: getDialogs(state),
        messages: getMessages(state)
    }
};

export default compose(
    connect(mapStateToProps,
        {addMessageActionCreator}),
)(MessagesContainer);

