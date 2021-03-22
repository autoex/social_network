const GET_USERS = 'GET_USERS';
const GET_POSTS = 'GET_POSTS';
const CHANGE_ACTIVE_PAGE = 'CHANGE_ACTIVE_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';

let initState = {
    users: [],
    text: 'Users list',
    posts: [],
    totalCount: 0,
    pageSize: 5,
    activePage: 1

};

const experimentalReducer = (state = initState, action) => {

    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.users};
        case GET_POSTS:
            return {...state, posts: action.posts};
        case CHANGE_ACTIVE_PAGE:
            return {...state, activePage: action.page};
        case SET_TOTAL_USERS:
            return {...state, totalCount: action.num};


        default:
            return state;

    }


};

export const getUsersAC = (users) => ({
    type: GET_USERS,
    users
});
export const getPostsAC = (posts) => ({
    type: GET_POSTS,
    posts
});
export const activePageAC = (page) => ({
    type: CHANGE_ACTIVE_PAGE,
    page
});
export const setTotalUsersAC = (num) => ({
    type: SET_TOTAL_USERS,
    num
});
export default experimentalReducer;