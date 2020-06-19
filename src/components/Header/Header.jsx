import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header className={classes.header}>
            <NavLink to="/"><img alt='' src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-64.png"/></NavLink>
        </header>
    );
};


export default Header;
