import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setProfiles,
    setTotalProfilesCount, toggleIsFetching,
    unfollow
} from "../../../Redux/Profiles-reducer";
import FindProfiles from "./FindProfiles";
import Preloader from "../../Common/Preloader/Preloader";
import {usersAPI} from "../../Api/api";


class FindProfilesContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.CurrentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setProfiles(data.items);
                this.props.setTotalProfilesCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setProfiles(data.items);
            });
    }

    render() {
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
        isFetching:state.profilesPage.isFetching
    }
};

export default connect(mapStateToProps,
    {follow,unfollow,setProfiles,setCurrentPage,setTotalProfilesCount,toggleIsFetching})(FindProfilesContainer);
