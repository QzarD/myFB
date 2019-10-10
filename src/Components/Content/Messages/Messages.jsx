import React from "react";
import s from './Messages.module.css';
import MessageItem from "./Item/MessageItem";
import Message from "./Message/Message";
import {FormAddMessageReduxSubmit} from "./FormAddMessage/FormAddMessage";

const Messages = (props) => {

    let messagesElements = props.messages.map(m => <Message text={m.message} key={m.id} id={m.id}/>);
    let messagesItems = props.dialogs.map(d => <MessageItem id={d.id} name={d.name} key={d.id}/>);

    let onSubmit=(value)=>{
        props.addMessageActionCreator(value.textNewMessage)
    }

    return (
        <div className={s.Messages}>
            <div className={s.title}>Messages</div>
            <div className={s.MessagesContent}>
                <div className={s.MessagesNames}>
                    {messagesItems}
                </div>
                <div className={s.MessagesDialog}>
                    {messagesElements}
                </div>
            </div>
            <FormAddMessageReduxSubmit onSubmit={onSubmit}/>
        </div>
    )
}
export default Messages;