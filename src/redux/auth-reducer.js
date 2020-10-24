import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';


let initState = {
    userId: null,
    email: null,
    login: null,
    isAuth: true

};

const authReducer = (state = initState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return  {
                ...state,
                ...action.data
            };


        default :
            return state;

    }


};

const setAuthUserData = (userId, email, login , isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});
export const getAuthUserData = () => (dispatch)=> {

   return  authAPI.me()
        .then(
            response => {
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            });


};

export const login = (email, password, rememberMe) => (dispatch)=> {

    authAPI.login(email, password, rememberMe)
        .then(
            response => {
                if(response.data.resultCode === 0) {
                    dispatch(getAuthUserData());
                }
                else {
                    let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some data is wrong';
                    debugger
                    dispatch(stopSubmit('login', {_error: errorMessage}));
                }
            });


};


export const logout = () => (dispatch)=> {


    authAPI.logout()
        .then(
            response => {
                if(response.data.resultCode === 0) {
                    dispatch(dispatch(setAuthUserData(null, null, null, false)));
                }
            });


};




export default authReducer;