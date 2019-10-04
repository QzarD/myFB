import React from "react";
import {addPost, setUserProfile, updateNewPostText} from "../../../Redux/post-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../Api/api";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId=this.props.match.params.userId;
        if (!userId){
            userId=2;
        }
        profileAPI.getUserId(userId)
            .then(data => {
                this.props.setUserProfile(data);
            });
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

export default connect(mapStateToProps, {addPost,updateNewPostText,setUserProfile}) (WithUrlDataContainerComponent);
