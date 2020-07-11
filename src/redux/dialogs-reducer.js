const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initState = {
    dialogs: [
        {id: 1, name: 'Ann'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Margo'},
        {id: 4, name: 'Ralf'},
        {id: 5, name: 'Ron'},
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
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state,
                newMessageText: action.body
            };



        case SEND_MESSAGE:
            let body = state.newMessageText;
            return {...state,
                newMessageText: '',
                messages: [...state.messages, {id: 5, message: body} ]
            };

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