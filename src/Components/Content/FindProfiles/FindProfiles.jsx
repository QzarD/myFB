import React from "react";
import styles from './FindProfiles.module.css';
import userPhoto from '../../../img/userPhoto.jpg'

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
                    <div><img src={p.photos.small != null ? p.photos.small : userPhoto} alt=""/></div>
                    <div>{p.name}</div>
                    <div>
                        {p.followed
                            ? <button onClick={() => {
                                props.unfollow(p.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(p.id)
                            }}>Follow</button>
                        }
                    </div>
                    <div>{p.status}</div>
                    <div>{"p.location.city"}</div>
                    <div>{"p.location.country"}</div>
                </div>)
            }
        </div>
    )
}
export default FindProfiles;