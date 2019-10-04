import React from "react";
import {addPost, getUserId, updateNewPostText} from "../../../Redux/post-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId=this.props.match.params.userId;
        if (!userId){
            userId=2;
        }
        this.props.getUserId(userId);
    }

    render() {
        if(!this.props.isAuth) return <Redirect to='/login'/>
        return <Profile {...this.props} />
    }
}

let mapStateToProps=(state)=>{
    return {
        newPostText:state.postsPage.newPostText,
        posts:state.postsPage.posts,
        profile:state.postsPage.profile,
        isAuth:state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {addPost,updateNewPostText,getUserId}) (WithUrlDataContainerComponent);
