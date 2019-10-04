import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    setProfiles,
    unfollow
} from "../../../Redux/Profiles-reducer";
import FindProfiles from "./FindProfiles";
import Preloader from "../../Common/Preloader/Preloader";
import {Redirect} from "react-router-dom";


class FindProfilesContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.CurrentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        if(!this.props.isAuth) return <Redirect to='/login'/>
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <FindProfiles
                totalProfilesCount={this.props.totalProfilesCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                profiles={this.props.profiles}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps=(state)=>{
    return{
        profiles:state.profilesPage.profiles,
        pageSize:state.profilesPage.pageSize,
        totalProfilesCount:state.profilesPage.totalUsersCount,
        currentPage:state.profilesPage.currentPage,
        isFetching:state.profilesPage.isFetching,
        followingInProgress:state.profilesPage.followingInProgress,
        isAuth:state.auth.isAuth
    }
};

export default connect(mapStateToProps,
    {follow,unfollow,setProfiles,setCurrentPage,getUsers})(FindProfilesContainer);
