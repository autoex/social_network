import {renderEntireTree} from "../render";


let state = {
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


};
window.state = state;
export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ' ';
     renderEntireTree(state);

};
export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    renderEntireTree(state);

};

export default state;