import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    debugger


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);


    let onSendMessageClick = () => {
        props.onSendMessageClick();

    };

    let onNewMessageChange = (e) => {

        let body = e.target.value;
        props.onNewMessageChange(body);


    };

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div>

            </div>
            <div>

                <div><textarea value={props.dialogsPage.newMessageText} onChange={onNewMessageChange}
                               placeholder={'Type here...'}/></div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>

    );

};

export default Dialogs;
