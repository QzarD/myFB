import React from "react";
import s from './Messages.module.css';
import MessageItem from "./Item/MessageItem";
import Message from "./Message/Message";

const Messages=(props)=> {

    let messagesElements=props.messages.map(m=><Message text={m.message} key={m.id} id={m.id}/>);
    let messagesItems=props.dialogs.map(d=><MessageItem id={d.id} name={d.name} key={d.id} id={d.id}/>);

    let newMessageElement=React.createRef();
    let addMessage=()=>{
        props.addMessage();
    }
    let onMessageChange=()=>{
        let text=newMessageElement.current.value;
        props.onMessageChange(text);
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
                <div className={s.sendMessage}>
                    <textarea
                        onChange={onMessageChange}
                        ref={newMessageElement}
                        value={props.newMessageText}/>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
    )
}
export default Messages;