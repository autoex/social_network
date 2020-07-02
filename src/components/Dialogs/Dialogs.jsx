import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogs = state.dialogs;
    let messages = state.messages;

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.state.newMessageText;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());

    };

    let onNewMessageChange = (e) => {

        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));


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

                <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder={'Type here...'}/></div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>

    );

};

export default Dialogs;
