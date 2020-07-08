import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        nav: {
            profile: '/profile',
            messages: '/dialogs',
            news: '/news',
            music: '/music',
            settings: '/settings'

        },


        profilePage: {
            posts: [
                {id: 1, message: 'Sick and Tired', likesCount: 11},
                {id: 2, message: 'Cat get your tongue', likesCount: 23}
            ],

            newPostText: ''
        },


        dialogsPage: {
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
        }


    },
    _callSubscriber() {
        console.log('render test');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);


        this._callSubscriber(this._state);

    }


};





export default store;