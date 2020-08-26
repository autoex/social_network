import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {

    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesCount = 30;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);

    }
    return <div>
        <div className={classes.pagination}>
            <ul>
                {pages.map(el => {
                    return <li className={props.currentPage === el && classes.selectedPage} onClick={() => {
                        props.onPageChange(el)
                    }}>{el}</li>
                })}
            </ul>
        </div>


        {props.users.map(u => <div key={u.id} className={classes.userWrapper}>
            <div>
                <div>
                    <NavLink to={'/profile/' + u.id}> <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                                           alt=""
                                                           className={classes.userPhoto}/>
                    </NavLink>
                </div>

                {u.followed ?
                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.toggleFollowingProgress(true, u.id);
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': '7fc68edd-bf2c-4451-96db-e360a4c247b3'
                            }
                        })
                            .then(
                                response => {
                                    if (response.data.resultCode === 0) {
                                        props.unFollow(u.id);
                                    }
                                    props.toggleFollowingProgress(false, u.id);
                                });


                    }}>Unfollow</button> :
                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        debugger
                        props.toggleFollowingProgress(true, u.id);

                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': '7fc68edd-bf2c-4451-96db-e360a4c247b3'
                            }
                        })
                            .then(
                                response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id);
                                    }
                                    props.toggleFollowingProgress(false, u.id);
                                });


                    }}>Follow</button>}
            </div>
            <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </div>
        </div>)}
    </div>
};


export default Users;