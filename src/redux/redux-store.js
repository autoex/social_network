import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navReducer from "./nav-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";



let reducers = combineReducers ({
    nav: navReducer,
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store=  store;

export default store;
