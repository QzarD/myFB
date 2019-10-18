import Preloader from "../../Common/Preloader/Preloader";
import React, {useState} from "react";
import ProfileStatus from "./ProfileStatus"
import userPhoto from '../../../img/userPhoto.jpg';
import styles from './Profile.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../Common/Forms/FormsControls";

const ProfileInfo = ({profile, status, updateStatus, saveProfileInfo}) => {
    let [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Preloader/>
    }
    const editModeOn = () => {
        setEditMode(true)
    };

    const onSubmit = (formData) => {
        saveProfileInfo(formData).then(
            ()=>{
                setEditMode(false)
            }
        )
    }

    return (
        <div>
            <div>
                <img src={!profile.photos.large ? userPhoto : profile.photos.large} alt=""/>
            </div>
            <div>
                <b>Status:</b> <ProfileStatus
                status={status}
                updateStatus={updateStatus}/>
            </div>
            {editMode
                ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <ProfileData status={status} profile={profile} editModeOn={editModeOn}/>
            }


        </div>
    )
}

const ProfileData = ({status, profile, editModeOn}) => {
    return (
        <div>
            <div>
                <button onClick={editModeOn}>Change</button>
            </div>
            <div>
                <b>Full Name:</b> {profile.fullName ? profile.fullName : "None"}
            </div>
            <div>
                <b>About Me:</b> {profile.aboutMe ? profile.aboutMe : "None"}
            </div>
            <div>
                <b>Looking For A Job:</b> {profile.lookingForAJob ? "Yes" : "No"}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>Looking For A Job Description:</b>
                {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : "None"}
            </div>
            }
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
};
const Contact = ({contactTitle, contactValue}) => {
    return <div className={styles.contacts}><b>{contactTitle}:</b> {contactValue}</div>

};

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

const ProfileDataFormReduxForm = reduxForm({form: 'ProfileData'})(ProfileDataForm)

export default ProfileInfo;