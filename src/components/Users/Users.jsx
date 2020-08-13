import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

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
                    <button onClick={() => {
                        props.unFollow(u.id)
                    }}>Unfollow</button> :
                    <button onClick={() => {
                        props.follow(u.id)
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