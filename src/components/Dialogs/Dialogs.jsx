import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


class DialogItem extends React.Component {
    render() {
        let path = "/dialogs/" + this.props.id;
        return (
            <div className={`${classes.dialog} ${classes.active}`}>
                <NavLink to={path}>{this.props.name}</NavLink>
            </div>
        );
    }
}

class Message extends React.Component{
    render() {

        return (
            <div className={classes.message}>{this.props.message}</div>
        );
    }

}

class Dialogs extends React.Component {
    render() {
        return (
            <div className={classes.dialogs}>
                <div className={classes.dialogs_items}>
                    <DialogItem name="Dimich" id="1"/>
                    <DialogItem name="Andrew" id="2"/>
                    <DialogItem name="Margo" id="3"/>
                    <DialogItem name="Ralf" id="4"/>
                    <DialogItem name="Kimi" id="5"/>


                </div>
                <div className={classes.messages}>


                    <Message message="Hi" />
                    <Message message="How is your going?" />
                    <Message message="Thanks. I'm fine" />
                    <Message message="And you?" />


                </div>
            </div>

        );
    }
}

export default Dialogs;
