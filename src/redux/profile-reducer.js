const ADD_NEW_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initState = {
    posts: [
        {id: 1, message: 'Sick and Tired', likesCount: 11},
        {id: 2, message: 'Cat get your tongue', likesCount: 23}
    ],

    newPostText: '',
    profile: null

};


const profileReducer = (state = initState, action) => {

    switch (action.type) {

        case ADD_NEW_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };


        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };

        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        default:
            return state;


    }


};

export const addPostActionCreator = () => ({
    type: ADD_NEW_POST
});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});
export default profileReducer;