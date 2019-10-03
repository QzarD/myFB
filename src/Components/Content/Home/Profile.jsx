import React from "react";
import s from './Profile.module.css';
import Post from "./Post/Post";
import ProfileInfo from "./ProfileInfo";

const Profile=(props)=> {
    let postsElements=props.posts.map(p=><Post text={p.post} key={p.id} id={p.id}/>);

    let newPostElement=React.createRef();
    let addPost=()=>{
        props.addPost()
    }
    let onPostChange=()=>{
        let text=newPostElement.current.value;
        props.updateNewPostText(text)
    }
    return (
            <div className={s.home}>
                <div>This Home page! This Home page!This Home page!This Home page!</div>
                <ProfileInfo profile={props.profile}/>
                <h3>Posts:</h3>
                <div>
                    {postsElements}
                </div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText} placeholder={'Input text'}/>
                    <button onClick={addPost}>PushPost</button>
                </div>
            </div>
    )
}
export default Profile;