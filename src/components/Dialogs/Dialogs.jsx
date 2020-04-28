import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

class Dialogs extends React.Component {
    render() {

        let dialogs = this.props.dialogs;
        let messages =this.props.messages;

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
