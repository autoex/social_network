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

            newPostText: 'Type here...'
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
            ]
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
        if (action.type === 'ADD-POST') {
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = ' ';
                this._callSubscriber(this._state);

            }


        else if (action.type ==='UPDATE-NEW-POST-TEXT') {


                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);


        }

    }





};


window.store = store;


export default store;