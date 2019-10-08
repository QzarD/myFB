import React from "react";
import {addPost, getStatus, getUserId, updateStatus} from "../../../Redux/post-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId=this.props.match.params.userId;
        if (!userId){
            userId=1774;
        }
        this.props.getUserId(userId);
        this.props.getStatus(userId);
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
        posts:state.postsPage.posts,
        profile:state.postsPage.profile,
        status: state.postsPage.status
    }
};

export default compose(
    connect(mapStateToProps,
        {addPost, getUserId, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);

