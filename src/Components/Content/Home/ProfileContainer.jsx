import React from "react";
import {addPost, setUserProfile, updateNewPostText} from "../../../Redux/post-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";

class ProfileContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {addPost,updateNewPostText,setUserProfile}) (ProfileContainer);
