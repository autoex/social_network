import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navReducer from "./nav-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";
import experimentalReducer from "./exp-reducer";
import profileExperimentalReducer from "./profileExp-reducer";


let reducers = combineReducers ({
    nav: navReducer,
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
    expPage: experimentalReducer,
    profileExp: profileExperimentalReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(

    applyMiddleware(thunkMiddleware)
));


// const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store=  store;

export default store;
