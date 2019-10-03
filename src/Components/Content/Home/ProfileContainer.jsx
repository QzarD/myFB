import React from "react";
import {addPost, setUserProfile, updateNewPostText} from "../../../Redux/post-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId=this.props.match.params.userId;
        if (!userId){
            userId=2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return <Profile
            posts={this.props.posts}
            newPostText={this.props.newPostText}
            addPost={this.props.addPost}
            updateNewPostText={this.props.updateNewPostText}
            profile={this.props.profile}
        />
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
