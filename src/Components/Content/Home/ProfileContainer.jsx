import React from "react";
import {addPost, getStatusAPI, getUserId, savePhoto, saveProfileInfo, updateStatus} from "../../../Redux/user-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getPosts, getProfile, getStatus} from "../../../Redux/profile-selectors";

class ProfileContainer extends React.Component{
    authUserId (){
        let userId=this.props.match.params.userId;
        if (!userId){
            userId=1774;
            /*            userId=this.props.authorizedUserId;
                        if (!userId){
                            this.props.history.push("/login")
                        }*/
        }
        this.props.getUserId(userId);
        this.props.getStatusAPI(userId);
    }
    componentDidMount() {
        this.authUserId ()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.authUserId ()
        }
    }

    render() {
        return <Profile
            {...this.props}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            isOwner={!this.props.match.params.userId}
        />
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
        {addPost, getUserId, getStatusAPI, updateStatus, saveProfileInfo, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

