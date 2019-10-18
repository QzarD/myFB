import React from "react";
import styles from './FindProfiles.module.css';
import userPhoto from '../../../img/userPhoto.jpg';
import {NavLink} from "react-router-dom";
import Paginator from "../../Common/Paginator/Paginator";

const FindProfiles=(props)=>{

    return (
        <div className={styles.home}>
            <Paginator totalItemsCount={props.totalProfilesCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       portionSize={props.portionSize}/>
            {
                props.profiles.map(p => <div key={p.id} className={styles.profile}>
                    <div className={styles.photo}>
                        <NavLink to={'/profile/'+p.id}>
                            <img src={p.photos.small != null ? p.photos.small : userPhoto} alt=""/>
                        </NavLink>
                    </div>
                    <div>{p.name}</div>
                    <div>
                        {p.followed
                            ? <button disabled={props.followingInProgress.some(id=>id===p.id)}
                                      onClick={() => {props.unfollow(p.id)}}>Unfollow
                            </button>
                            : <button disabled={props.followingInProgress.some(id=>id===p.id)}
                                      onClick={() => {props.follow(p.id)}}>Follow
                            </button>
                        }
                    </div>
                    <div>{p.status}</div>
                </div>)
            }
        </div>
    )
}
export default FindProfiles;