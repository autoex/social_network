import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    debugger;
    let pages = [];
    debugger;
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
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
                <div><img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""
                          className={classes.userPhoto}/></div>

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