import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);




    let addNewMessage = (data)=> {
        console.log(data.newMessageText);
        props.onSendMessageClick(data.newMessageText);

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
            <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>

    );

};


const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>


            <p>
                <Field component={"textarea"} name={"newMessageText"}  placeholder={'Type here...'}/>

            </p>

            <p>
                <button>Send</button>
            </p>
        </form>
    )
};


const AddMessageReduxForm = reduxForm({

    form: 'dialogAddMessageForm'
})(AddMessageForm);

export default Dialogs;
