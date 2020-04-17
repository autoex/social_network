import React from "react";
import classes from './Header.module.css';


class Header extends React.Component {
  render() {
    return (
        <header className={classes.header}>
        <img src="https://seeklogo.com/images/F/find-that-logo-A45659A061-seeklogo.com.gif" />
      </header>
    );
  }
}

export default Header;
