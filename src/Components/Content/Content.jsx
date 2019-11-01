import React from "react";
import s from './Content.module.css';
import {Redirect, Route, Switch} from "react-router-dom";
import LoginPage from "../Login/Login";

//import ProfileContainer from "./Home/ProfileContainer";
const ProfileContainer=React.lazy(()=>import("./Home/ProfileContainer"));
//import FindProfilesContainer from "./FindProfiles/FindProfilesContainer";
const FindProfilesContainer=React.lazy(()=>import("./FindProfiles/FindProfilesContainer"));
//import MessagesContainer from "./Messages/MessagesContainer";
const MessagesContainer=React.lazy(()=>import("./Messages/MessagesContainer"));
//import DashboardContainer from "./Dashboard/DashboardContainer";
const DashboardContainer=React.lazy(()=>import("./Dashboard2/Dashboard2"));

const Content=React.memo(props => {
    return (
        <div className={`${s.inner} max-width`}>
            <Switch>
                <Route exact path='/' render={()=><Redirect to={'/profile'}/>}/>
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
                <Route path='/dashboard2' render={() =>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <DashboardContainer/>
                    </React.Suspense>
                }
                />
                <Route path='/login' render={() =>
                    <LoginPage/>}
                />
                <Route path='*' render={()=><div>404 Not found</div> }/>
            </Switch>
        </div>
    )
});
export default Content;