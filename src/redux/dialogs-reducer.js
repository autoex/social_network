const SEND_MESSAGE = 'SEND_MESSAGE';

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
    ]
};

const dialogsReducer = (state = initState, action) => {

    switch (action.type) {




        case SEND_MESSAGE:
            let body = action.newMessageText;
            return {...state,
                messages: [...state.messages, {id: 5, message: body} ]
            };

        default:
            return state;

    }


};

export const onSendMessageClick = (newMessageText) => ({
    type: SEND_MESSAGE, newMessageText
});


export default dialogsReducer;