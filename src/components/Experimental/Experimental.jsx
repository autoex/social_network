import React from "react";
import classes from './Experimental.module.css'
import Preloader from "../common/Preloader/Preloader";
import userIcon from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../API/api";

function Experimental(props) {
    let pagesNumber = Math.ceil(props.expPage.totalCount / props.expPage.pageSize);
    // let pagesNumber = 11;
    let pages = [];
    for (let i = 1; i <= pagesNumber; i++) {
        pages.push(i)
    }

    return (<>
        {props.expPage.inProgress && <Preloader/>}
        <div className={classes.paginator}>{pages.map(p => <span key={p} onClick={() => {
            props.setActivePage(p)
        }}
                                                                 className={props.expPage.activePage === p ? classes.activePage : undefined}>{p}</span>)}</div>
        <h1>{props.expPage.text}</h1>

        <ul>
            {props.expPage.users.map(u => <div key={u.id}>
                <div><NavLink to={`/profile/` + u.id}><img className={classes.avaImg}
                                                           src={u.photos.small ? u.photos.small : userIcon}
                                                           alt=""/></NavLink></div>
                <div>{u.name}</div>
                <div>{u.followed ?
                    <button disabled={props.expPage.followingProgress.some(id => id === u.id)} onClick={() => {

                        props.toggleFollowing(true, u.id);
                       usersAPI.unFollow(u.id)
                            .then(e => {
                                console.log(e);
                                if (e.status === 200) props.unFollow(u.id);
                                props.toggleFollowing(false, u.id);
                            });


                    }}>Unfollow</button> :
                    <button disabled={props.expPage.followingProgress.some(id => id === u.id)} onClick={() => {
                        props.toggleFollowing(true, u.id);
                        usersAPI.follow(u.id)
                            .then(e => {
                                console.log(e);
                                if (e.status === 200) props.follow(u.id);
                                props.toggleFollowing(false, u.id);
                            });


                    }}>Follow</button>}</div>
            </div>)}
        </ul>

        <h2>Posts</h2>

        <ul>
            {props.expPage.posts.map(p => <li key={p.id}>{p.title}</li>)}
        </ul>
    </>)
}

export default Experimental;