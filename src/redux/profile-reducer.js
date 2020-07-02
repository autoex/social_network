const ADD_NEW_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initState = {
    posts: [
        {id: 1, message: 'Sick and Tired', likesCount: 11},
        {id: 2, message: 'Cat get your tongue', likesCount: 23}
    ],

    newPostText: ''
};


const profileReducer = (state = initState, action) => {

    switch (action.type) {

        case ADD_NEW_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = ' ';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;


    }


};

export const addPostActionCreator = () => ({
    type: ADD_NEW_POST
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});
export default profileReducer;