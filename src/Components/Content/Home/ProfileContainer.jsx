import React from "react";
import {addPost, getUserId, updateNewPostText} from "../../../Redux/post-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{
    componentDidMount() {
        this.props.getUserId(this.props.match.params.userId);
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps=(state)=>{
    return {
        newPostText:state.postsPage.newPostText,
        posts:state.postsPage.posts,
        profile:state.postsPage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {addPost,updateNewPostText,getUserId}) (WithUrlDataContainerComponent);
