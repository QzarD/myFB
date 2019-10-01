import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../Redux/post-reducer";
import Home from "./Home";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return {
        newPostText:state.postsPage.newPostText,
        posts:state.postsPage.posts
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        addPost:()=>{
            dispatch(addPostCreator());
        },
        onPostChange:(text)=>{
            dispatch(updateNewPostTextCreator(text));
        }
    }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps) (Home);

export default HomeContainer;