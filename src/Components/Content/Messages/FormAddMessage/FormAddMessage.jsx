import s from "../Messages.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../../Common/Forms/FormsControls";
import {maxLengthCreator, required} from "../../../Common/Forms/validators";

const maxLength50=maxLengthCreator(50);

const FormAddMessage = (props) => {
    return <div className={s.sendMessage}>
        <form onSubmit={props.handleSubmit}>
            <Field type="textarea" name="textNewMessage" validate={[required, maxLength50]} component={Textarea}/>
            <button>Send</button>
        </form>
    </div>
}

export const FormAddMessageReduxSubmit = reduxForm({form:'FormAddMessage'})(FormAddMessage)
