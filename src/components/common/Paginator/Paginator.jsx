import React from "react";
import classes from "./Paginator.module.css"

let Paginator = ({totalUsersCount, pageSize, currentPage, selectedPage, onPageChange}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    // let pagesCount = 30;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);

    }
    return <div className={classes.pagination}>
            <ul>
                {pages.map((el, index) => {

                    return <li key={index} className={currentPage === el ? classes.selectedPage : undefined} onClick={() => {
                        onPageChange(el)
                    }}>{el}</li>

                })}
            </ul>
        </div>




};


export default Paginator;