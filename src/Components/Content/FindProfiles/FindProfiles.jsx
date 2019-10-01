import React from "react";
import styles from './FindProfiles.module.css';
import * as axios from 'axios';
import userPhoto from '../../../img/userPhoto.jpg'

class FindProfiles extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.CurrentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setProfiles(response.data.items);
                this.props.setTotalProfilesCount(response.data.totalCount);
            });
    }
    onPageChanged=(pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setProfiles(response.data.items);
            });
    }

    render() {
        let pagesCount=Math.ceil(this.props.totalProfilesCount/this.props.pageSize);
        let pages=[];
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i);
        }
        return <div className={styles.home}>
            <div>
                {pages.map(p=>{
                    return <span className={this.props.currentPage===p && styles.selectedPage}
                                 onClick={()=>{this.onPageChanged(p);}}> {p} </span>
                })}
            </div>
            {
                this.props.profiles.map(p => <div key={p.id} className={styles.profile}>
                    <div><img src={p.photos.small != null ? p.photos.small : userPhoto} alt=""/></div>
                    <div>{p.name}</div>
                    <div>
                        {p.followed
                            ? <button onClick={() => {
                                this.props.unfollow(p.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(p.id)
                            }}>Follow</button>
                        }
                    </div>
                    <div>{p.status}</div>
                    <div>{"p.location.city"}</div>
                    <div>{"p.location.country"}</div>
                </div>)
            }
        </div>
    }
}
export default FindProfiles;