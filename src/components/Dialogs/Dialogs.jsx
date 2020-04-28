import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

class Dialogs extends React.Component {
    render() {
        let dialogs = [
            {id: 1, name: 'Dimich'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Margo'},
            {id: 4, name: 'Ralf'},
            {id: 5, name: 'Kimi'},
        ];

        let messages = [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your going?'},
            {id: 3, message: 'Thanks. I\'m fine'},
            {id: 4, message: 'And you?'}
        ];

        let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

        let messagesElements = messages.map(m => <Message message={m.message}/>);

        return (
            <div className={classes.dialogs}>
                <div className={classes.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
            </div>

        );
    }
}

export default Dialogs;
