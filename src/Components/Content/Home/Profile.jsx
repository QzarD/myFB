import React from "react";
import s from './Profile.module.css';
import Post from "./Post/Post";
import ProfileInfo from "./ProfileInfo";
import {Field, reduxForm} from "redux-form";


const FormAddPost = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <Field type="textarea" name="textNewPost" placeholder="Input text" component="textarea"/>
            <button>PushPost</button>
        </form>
    </div>
}

const AddPostReduxSubmit = reduxForm({form:'AddPost'})(FormAddPost)

const Profile = (props) => {
    let postsElements = props.posts.map(p => <Post text={p.post} key={p.id} id={p.id}/>);

    let onSubmit=(value)=>{
        props.addPost(value.textNewPost)
    }
    return (
        <div className={s.home}>
            <div>This Home page! This Home page!This Home page!This Home page!</div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}/>
            <h3>Posts:</h3>
            <div>
                {postsElements}
            </div>
            <AddPostReduxSubmit onSubmit={onSubmit}/>
        </div>
    )
}



export default Profile;