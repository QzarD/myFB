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
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getProfiles,
    getTotalUsersCount
} from "../../../Redux/users-selectors";


class FindProfilesContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps=(state)=>{
    return{
        profiles:getProfiles(state),
        pageSize:getPageSize(state),
        totalProfilesCount:getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFetching:getIsFetching(state),
        followingInProgress:getFollowingInProgress(state),
    }
};

export default compose(
    connect(mapStateToProps,
        {follow,unfollow,setProfiles,setCurrentPage,getUsers}),
    withAuthRedirect
)(FindProfilesContainer);

