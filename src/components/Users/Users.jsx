import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator";

let Users = (props) => {

    return <div>
        <Paginator {...props}/>
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
                        props.unFollow(u.id);
                    }}>Unfollow</button> :

                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                        props.follow(u.id);


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