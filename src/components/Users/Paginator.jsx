import React from "react";
import classes from "./Users.module.css";

let Paginator = (props) => {

    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesCount = 30;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);

    }
    return <div className={classes.pagination}>
            <ul>
                {pages.map((el, index) => {

                    return <li key={index} className={props.currentPage === el ? classes.selectedPage : undefined} onClick={() => {
                        props.onPageChange(el)
                    }}>{el}</li>

                })}
            </ul>
        </div>




};


export default Paginator;