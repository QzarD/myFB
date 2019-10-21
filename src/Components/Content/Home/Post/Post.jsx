import React from "react";
import s from './Post.module.css';

const Post=(props)=> {

    return (
            <div className={s.post}>
                <div className={s.postImg}>
                    <img src="https://i.ytimg.com/vi/CD6wLmLTbSk/sddefault.jpg" alt="img"/>
                </div>
                <div>Kostya:</div>
                <div className={s.text}>
                    {props.text}
                </div>
            </div>
    )
}
export default Post;