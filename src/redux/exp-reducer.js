const GET_USERS = 'GET_USERS';
const GET_POSTS = 'GET_POSTS';
const CHANGE_ACTIVE_PAGE = 'CHANGE_ACTIVE_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const TOGGLE_IN_PROGRESS = 'TOGGLE_IN_PROGRESS';


let initState = {
    users: [],
    text: 'Users list',
    posts: [],
    totalCount: 0,
    pageSize: 5,
    activePage: 1,
    inProgress: false

};

const experimentalReducer = (state = initState, action) => {

    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.users};
        case GET_POSTS:
            return {...state, posts: action.posts};
        case CHANGE_ACTIVE_PAGE:
            return {...state, activePage: action.page};
        case TOGGLE_IN_PROGRESS:
            return {...state, inProgress: action.status};
        case SET_TOTAL_USERS:
            return {...state, totalCount: action.num};
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.idUser) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.idUser) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };


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
export const followAC = (idUser) => ({

    type: FOLLOW,
    idUser
});
export const unFollowAC = (idUser) => ({
    type: UNFOLLOW,
    idUser
});
export const inProgressAC = (status) => ({
    type: TOGGLE_IN_PROGRESS,
    status
});
export default experimentalReducer;