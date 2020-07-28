import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'


let Users = (props) => {
    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(

                response => {
                    debugger;
                    props.setUsers(response.data.items)});

    }
    return (


        <div>
            {props.users.map(u => <div key={u.id} className={classes.userWrapper}>
                <div>
                    <div><img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={classes.userPhoto}/></div>

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


    )


};

export default Users;