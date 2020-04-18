import React from "react";
import classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";

class Nav extends React.Component {
  render() {
    let nav = this.props.nav;
    return (
      <nav className={classes.nav}>
        <ul>
          {/* <li className={`${classes.item} ${classes.active}`}>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Messages</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Music</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li> */}
          {Object.keys(nav).map(el => (
            <li>
              <NavLink to={nav[el]}>{el.toUpperCase()}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
