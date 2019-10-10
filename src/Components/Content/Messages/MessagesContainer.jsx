import React from "react";
import {addMessageActionCreator} from "../../../Redux/dialog-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {compose} from "redux";


class MessagesContainer extends React.Component{
    render() {
        return <div>
            <Messages {...this.props}/>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages
    }
};

export default compose(
    connect(mapStateToProps,
        {addMessageActionCreator}),
)(MessagesContainer);

