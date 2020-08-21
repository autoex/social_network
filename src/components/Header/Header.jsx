import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (

        <header className={classes.header}>
            <NavLink to="/"><img className={'floatLeft'} alt='' src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-64.png"/></NavLink>
            <div className={classes.loginBox}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    );
};


export default Header;
