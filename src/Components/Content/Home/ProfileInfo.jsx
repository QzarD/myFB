import Preloader from "../../Common/Preloader/Preloader";
import React from "react";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo=(props)=>{
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <img src={props.profile.photos.large} alt=""/>
            <ProfileStatus
                status={props.status}
                updateStatus={props.updateStatus} />
        </div>
    )
}
export default ProfileInfo;