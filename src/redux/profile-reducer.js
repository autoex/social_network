import {profileAPI, usersAPI} from "../API/api";

const ADD_NEW_POST = 'ADD_NEW_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initState = {
    posts: [
        {id: 1, message: 'Sick and Tired', likesCount: 11},
        {id: 2, message: 'Cat get your tongue', likesCount: 23}
    ],
    profile: null,
    status: ''

};


const profileReducer = (state = initState, action) => {

    switch (action.type) {

        case ADD_NEW_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };


        }

        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }


        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        case SET_STATUS: {
            return {...state, status: action.status}
        }


        default:
            return state;


    }


};

export const addPostActionCreator = (newPostText) => ({
    type: ADD_NEW_POST, newPostText
});
export const deletePost = (postId) => ({
    type: DELETE_POST, postId
});

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});


const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => async (dispatch) => {

    const response = await usersAPI.getProfile(userId);


    dispatch(setUserProfile(response.data));


};


export const getUserStatus = (userId) => async (dispatch) => {

    const response = await profileAPI.getStatus(userId);

    dispatch(setStatus(response.data));


};
export const updateUserStatus = (status) => async (dispatch) => {

    const response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }


};


export default profileReducer;