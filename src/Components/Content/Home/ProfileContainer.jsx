import React from "react";
import {addPost, getUserId, updateNewPostText} from "../../../Redux/post-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId=this.props.match.params.userId;
        if (!userId){
            userId=2;
        }
        this.props.getUserId(userId);
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps=(state)=>{
    return {
        newPostText:state.postsPage.newPostText,
        posts:state.postsPage.posts,
        profile:state.postsPage.profile,
    }
};

export default compose(
    connect(mapStateToProps, {addPost,updateNewPostText,getUserId}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

