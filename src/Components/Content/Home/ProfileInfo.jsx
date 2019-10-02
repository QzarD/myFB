import Preloader from "../../Common/Preloader/Preloader";
import React from "react";

const ProfileInfo=(props)=>{
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <img src={props.profile.photos.large} alt=""/>
        </div>
    )
}
export default ProfileInfo;