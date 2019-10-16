import React from "react";
import s from './Content.module.css';
import {Route} from "react-router-dom";
import LoginPage from "../Login/Login";

//import ProfileContainer from "./Home/ProfileContainer";
const ProfileContainer=React.lazy(()=>import("./Home/ProfileContainer"));
//import FindProfilesContainer from "./FindProfiles/FindProfilesContainer";
const FindProfilesContainer=React.lazy(()=>import("./FindProfiles/FindProfilesContainer"));
//import MessagesContainer from "./Messages/MessagesContainer";
const MessagesContainer=React.lazy(()=>import("./Messages/MessagesContainer"));

const Content=(props)=> {
    return (
        <div className={`${s.inner} max-width`}>
            <Route path='/profile/:userId?' render={() =>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <ProfileContainer/>
                </React.Suspense>
            }
            />
            <Route path='/FindProfiles' render={() =>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <FindProfilesContainer/>
                </React.Suspense>
            }
            />
            <Route path='/messages' render={() =>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <MessagesContainer/>
                </React.Suspense>
            }
            />
            <Route path='/login' render={() =>
                <LoginPage/>}
            />
        </div>
    )
}
export default Content;