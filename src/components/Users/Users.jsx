import React from "react";
import classes from "./Users.module.css";


let Users = (props) => {
debugger
    return (


        <div>
            {props.users.map(u => <div key={u.id} className={classes.userWrapper}>
                <div>
                    <div><img src={u.userPhoto} alt=""/></div>

                    {u.followed ?
                        <button onClick={ () => { debugger
                            props.unFollow(u.id)
                        }}>Unfollow</button> :
                        <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
                <div>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </div>
            </div>)}
        </div>


    )


};

export default Users;