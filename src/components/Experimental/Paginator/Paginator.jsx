import React from "react";
import classes from './Paginator.module.css'


const Paginator =(props)=> {
    let pagesNumber = Math.ceil(this.props.expPage.totalCount / this.props.expPage.pageSize);
    // let pagesNumber = 11;
    let pages = [];
    for(let i =1; i<=pagesNumber; i++ ) {
        pages.push(i)
    }

    return (
        <div className={classes.paginator}>{pages.map(p=> <span key={p} onClick={() =>this.setActivePage(p)} className={this.props.expPage.activePage === p && classes.activePage}>{p}</span>)}</div>
    )


};


export default Paginator;