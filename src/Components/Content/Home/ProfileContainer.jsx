import React from "react";
import {addPost, getStatusAPI, getUserId, saveProfileInfo, updateStatus} from "../../../Redux/user-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getPosts, getProfile, getStatus} from "../../../Redux/profile-selectors";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId=this.props.match.params.userId;
        if (!userId){
            userId=1774;
        }
        this.props.getUserId(userId);
        this.props.getStatusAPI(userId);
    }

    render() {
        return <Profile
            {...this.props}
            status={this.props.status}
            updateStatus={this.props.updateStatus} />
    }
}

let mapStateToProps=(state)=>{
    return {
        posts:getPosts(state),
        profile:getProfile(state),
        status: getStatus(state)
    }
};

export default compose(
    connect(mapStateToProps,
        {addPost, getUserId, getStatusAPI, updateStatus, saveProfileInfo}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

