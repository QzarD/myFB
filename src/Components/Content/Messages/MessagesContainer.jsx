import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/dialog-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return{
        newMessageText:state.messagesPage.newMessageText,
        dialogs:state.messagesPage.dialogs,
        messages:state.messagesPage.messages
    }
};
let mapDispatchToProps=(dispatch)=>{
    return{
        addMessage:()=>{
            dispatch(addMessageActionCreator());
        },
        onMessageChange:(text)=>{
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
}

const MessagesContainer=connect(mapStateToProps,mapDispatchToProps)(Messages);
export default MessagesContainer;