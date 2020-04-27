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

class Message extends React.Component {
    render() {

        return (
            <div className={classes.message}>{this.props.message}</div>
        );
    }

}

class Dialogs extends React.Component {
    render() {
        let dialogsData = [
            {id: 1, name: 'Dimich'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Margo'},
            {id: 4, name: 'Ralf'},
            {id: 5, name: 'Kimi'},
        ];

        let messagesData = [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your going?'},
            {id: 3, message: 'Thanks. I\'m fine'},
            {id: 4, message: 'And you?'}
        ];
        return (
            <div className={classes.dialogs}>
                <div className={classes.dialogs_items}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                </div>
                <div className={classes.messages}>
                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                    <Message message={messagesData[2].message}/>
                    <Message message={messagesData[3].message}/>
                </div>
            </div>

        );
    }
}

export default Dialogs;
