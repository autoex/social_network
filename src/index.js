import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let nav = {
    profile: '/profile',
    messages: '/dialogs',
    news: '/news',
    music: '/music',
    settings: '/settings'

};
let dialogs = [
    {id: 1, name: 'Dimich'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Margo'},
    {id: 4, name: 'Ralf'},
    {id: 5, name: 'Kimi'},
];

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your going?'},
    {id: 3, message: 'Thanks. I\'m fine'},
    {id: 4, message: 'And you?'}
];

let posts = [
    {id: 1, message: 'Sick and Tired', likesCount: 11},
    {id: 2, message: 'Cat get your tongue', likesCount: 23}
];
ReactDOM.render(
    <React.StrictMode>
        <App nav={nav} dialogs={dialogs} messages={messages} posts={posts}/>
    </React.StrictMode>,
    document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
