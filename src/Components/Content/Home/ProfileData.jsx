import styles from "./Profile.module.css";
import React from "react";

export const ProfileData = ({profile, editModeOn, isOwner}) => {
    return (
        <div>
            {isOwner &&
            <div>
                <button onClick={editModeOn}>Change</button>
            </div>
            }
            <div>
                <b>Full Name:</b> {profile.fullName || "None"}
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