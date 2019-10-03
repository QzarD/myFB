import React from "react";
import s from './Content.module.css';
import {Route} from "react-router-dom";
import MessagesContainer from "./Messages/MessagesContainer";
import ProfileContainer from "./Home/ProfileContainer";
import FindProfilesContainer from "./FindProfiles/FindProfilesContainer";

const Content=(props)=> {
    return (
            <div className={`${s.inner} max-width`}>
                <Route path='/profile/:userId?' render={()=>
                    <ProfileContainer/>}
                />
                <Route path='/FindProfiles' render={()=>
                <FindProfilesContainer/>}
            />
                <Route path='/messages' render={()=>
                    <MessagesContainer/>}
                />
            </div>
    )
}
export default Content;