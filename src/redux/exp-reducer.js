const GET_USERS = 'GET_USERS';
const GET_POSTS = 'GET_POSTS';
const CHANGE_ACTIVE_PAGE = 'CHANGE_ACTIVE_PAGE';

let initState = {
    users: [],
    text: 'Users list',
    posts: [],
    totalCount: 0,
    pageSize: 5,
    activePage: 3

};

const experimentalReducer = (state = initState, action) => {

    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.users, totalCount: action.usersCount};
        case GET_POSTS:
            return {...state, posts: action.posts};
            case CHANGE_ACTIVE_PAGE:
            return {...state, activePage: action.page};


        default:
            return state;

    }


};

export const getUsersAC = (users, usersCount) => ({
    type: GET_USERS,
    users, usersCount
});
export const getPostsAC = (posts) => ({
    type: GET_POSTS,
    posts
});
export const activePageAC = (page) => ({
    type: CHANGE_ACTIVE_PAGE,
    page
});
export default experimentalReducer;