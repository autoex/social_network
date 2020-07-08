import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    debugger;
    let state = props.store.getState().dialogsPage;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());

    };

    let onNewMessageChange = (body) => {


        props.store.dispatch(updateNewMessageBodyCreator(body));


    };

    return (
        <Dialogs onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange} dialogsPage={state}/>

    );

};

export default DialogsContainer;
