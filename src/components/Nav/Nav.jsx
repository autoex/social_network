import React from "react";
import classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";


const Nav = (props) => {
    let nav = props.nav;
    return (

       <nav className={classes.nav}>
                    <ul>
                        {/* <li>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs">Messages</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/music">Music</NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings">Settings</NavLink>
                    </li>*/}
                        {Object.keys(nav).map((el, index) => (
                            <li key={index}>
                                <NavLink to={nav[el]} activeClassName={classes.active} key={el}>{el.toUpperCase() }</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

    );

};

export default Nav;
