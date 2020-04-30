import React from "react";
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


class DialogItem extends React.Component {
    render() {
        let path = "/dialogs/" + this.props.id;
        return (
            <div className={`${classes.dialog}`}>
                <NavLink to={path}>{this.props.name}</NavLink>
            </div>
        );
    }
}


export default DialogItem;
