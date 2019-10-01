import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setProfilesAC,
    setTotalProfilesCountAC,
    unfollowAC
} from "../../../Redux/Profiles-reducer";
import FindProfiles from "./FindProfiles";

let mapStateToProps=(state)=>{
    return{
        profiles:state.profilesPage.profiles,
        pageSize:state.profilesPage.pageSize,
        totalProfilesCount:state.profilesPage.totalUsersCount,
        currentPage:state.profilesPage.currentPage,
    }
};
let mapDispatchToProps=(dispatch)=>{
    return{
        follow:(profileId)=>{
            dispatch(followAC(profileId));
        },
        unfollow:(profileId)=>{
            dispatch(unfollowAC(profileId));
        },
        setProfiles:(profiles)=>{
            dispatch(setProfilesAC(profiles));
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalProfilesCount:(totalCount)=>{
            dispatch(setTotalProfilesCountAC(totalCount));
        },
    }
};

const FindProfilesContainer=connect(mapStateToProps,mapDispatchToProps)(FindProfiles);
export default FindProfilesContainer;