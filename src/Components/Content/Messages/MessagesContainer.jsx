import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/dialog-reducer";
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
        newMessageText: state.messagesPage.newMessageText,
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages
    }
};

export default compose(
    connect(mapStateToProps,
        {addMessageActionCreator, updateNewMessageTextActionCreator}),
)(MessagesContainer);

