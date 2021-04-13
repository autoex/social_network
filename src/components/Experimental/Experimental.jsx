import React from "react";
import classes from './Experimental.module.css'
import Preloader from "../common/Preloader/Preloader";
import userIcon from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";

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
            props.setActivePage(p)}}
                                                                 className={props.expPage.activePage === p && classes.activePage}>{p}</span>)}</div>
        <h1>{props.expPage.text}</h1>

        <ul>
            {props.expPage.users.map(u => <div key={u.id}>
                    <div><NavLink to={`/profile/` + u.id}><img className={classes.avaImg} src={u.photos.small ? u.photos.small :userIcon} alt=""/></NavLink> </div>
                <div>{u.name}</div>
                <div>{u.followed ? <button onClick={() => {
                    props.unFollow(u.id)
                }}>Unfollow</button> : <button onClick={() => {
                    props.follow(u.id)
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