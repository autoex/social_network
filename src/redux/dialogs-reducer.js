const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initState = {
    dialogs: [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Margo'},
        {id: 4, name: 'Ralf'},
        {id: 5, name: 'Kimi'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your going?'},
        {id: 3, message: 'Thanks. I\'m fine'},
        {id: 4, message: 'And you?'}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.body;
            return stateCopy;
        }

        case SEND_MESSAGE: {
            let stateCopy = {...state};
            let body = stateCopy.newMessageText;
            stateCopy.newMessageText = ' ';
            stateCopy.messages.push({id: 5, message: body});
            return stateCopy;
        }
        default:
            return state;

    }


};

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
});

export const updateNewMessageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: text
});
export default dialogsReducer;