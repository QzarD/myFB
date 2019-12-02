import Preloader from "../../Common/Preloader/Preloader";
import React, {useState} from "react";
import ProfileStatus from "./ProfileStatus"
import userPhoto from '../../../img/userPhoto.jpg';
import styles from './Profile.module.css'
import {ProfileDataFormReduxForm} from "../../Common/Forms/ProfileDataFormReduxForm";
import {ProfileData} from "./ProfileData";

const ProfileInfo = ({profile, status, updateStatus, saveProfileInfo, isOwner, savePhoto}) => {
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
    };

    const selectPhoto=(e)=>{
        if (e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={styles.photoRow}>
                <div className={styles.photoSection}>
                    <div className={styles.photoLarge}>
                        <img src={profile.photos.large || userPhoto} alt=""/>
                    </div>
                    <div className={styles.photoBtn}>
                        {isOwner &&
                        <input type="file"
                               accept=".jpg, .jpeg, .png"
                               onChange={selectPhoto}/>}
                    </div>
                </div>
                <div>
                    <div>
                        {profile.fullName || "None"}
                    </div>
                    <div>
                        <ProfileStatus status={status}
                                       updateStatus={updateStatus}/>
                    </div>
                </div>

            </div>
            {editMode
                ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <ProfileData status={status} isOwner={isOwner} profile={profile} editModeOn={editModeOn}/>
            }
        </div>
    )
}





export default ProfileInfo;