import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "./FormsControls";
import styles from "../../Content/Home/Profile.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <button>Submit</button>
                </div>
                <div>
                    {error && <div>{error}</div>}
                </div>
                <div>
                    <b>Full Name:</b> <Field name="fullName" type="input" component={Input}/>
                </div>
                <div>
                    <b>About Me:</b> <Field name="aboutMe" type="textarea" component={Input}/>
                </div>
                <div>
                    <b>Looking For A Job:</b> <Field name="lookingForAJob" type="checkbox" component={Input}/>
                </div>
                <div>
                    <b>Looking For A Job Description:</b><Field name="lookingForAJobDescription" type="textarea" component={Input}/>
                </div>
                <div>
                    <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                    return <div key={key.id} className={styles.contacts}><b> {key}:</b>  <Field name={"contacts."+key} type="input" component={Input}/></div>
                })}
                </div>
            </form>
        </div>
    )
}

export const ProfileDataFormReduxForm = reduxForm({form: 'ProfileData'})(ProfileDataForm)