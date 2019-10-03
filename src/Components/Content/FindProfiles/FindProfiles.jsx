import React from "react";
import styles from './FindProfiles.module.css';
import userPhoto from '../../../img/userPhoto.jpg'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const FindProfiles=(props)=>{
    let pagesCount=Math.ceil(props.totalProfilesCount/props.pageSize);
    let pages=[];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={styles.home}>
            <div>
                {pages.map(p=>{
                    return <span className={props.currentPage===p && styles.selectedPage}
                                 onClick={()=>{props.onPageChanged(p);}}> {p} </span>
                })}
            </div>
            {
                props.profiles.map(p => <div key={p.id} className={styles.profile}>
                    <div>
                        <NavLink to={'/profile/'+p.id}>
                            <img src={p.photos.small != null ? p.photos.small : userPhoto} alt=""/>
                        </NavLink>
                    </div>
                    <div>{p.name}</div>
                    <div>
                        {p.followed
                            ? <button onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${p.id}`, {withCredentials:true,
                                headers: {"API-KEY":"fc2a5c35-9a4a-4ac9-ae44-639fdb0cf397"}})
                                    .then(response=>{
                                        if (response.data.resultCode==0){
                                            props.unfollow(p.id)
                                        }
                                    })

                            }}>Unfollow</button>
                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${p.id}`, {}, {withCredentials:true,
                                    headers: {"API-KEY":"fc2a5c35-9a4a-4ac9-ae44-639fdb0cf397"}})
                                    .then(response=>{
                                        if (response.data.resultCode==0){
                                            props.follow(p.id)
                                        }
                                    })

                            }}>Follow</button>
                        }
                    </div>
                    <div>{p.status}</div>
                </div>)
            }
        </div>
    )
}
export default FindProfiles;