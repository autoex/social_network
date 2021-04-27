const GET_USERS = 'GET_USERS';
const GET_POSTS = 'GET_POSTS';
const CHANGE_ACTIVE_PAGE = 'CHANGE_ACTIVE_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const TOGGLE_IN_PROGRESS = 'TOGGLE_IN_PROGRESS';
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING';


let initState = {
    users: [],
    text: 'Users list',
    posts: [],
    totalCount: 0,
    pageSize: 5,
    activePage: 1,
    inProgress: false,
    followingProgress: []

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
        case TOGGLE_FOLLOWING:
            return {...state,
                followingProgress: action.followingStatus ? [...state.followingProgress, action.userID] : state.followingProgress.filter(id=> id!== action.userID)};
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

export const getUsers = (users) => ({
    type: GET_USERS,
    users
});
export const getPosts = (posts) => ({
    type: GET_POSTS,
    posts
});
export const setActivePage = (page) => ({
    type: CHANGE_ACTIVE_PAGE,
    page
});
export const setTotalUsers = (num) => ({
    type: SET_TOTAL_USERS,
    num
});
export const follow = (idUser) => ({

    type: FOLLOW,
    idUser
});
export const unFollow = (idUser) => ({
    type: UNFOLLOW,
    idUser
});
export const inProgress = (status) => ({
    type: TOGGLE_IN_PROGRESS,
    status
});

export const toggleFollowing = (followingStatus, userID) => ({
    type: TOGGLE_FOLLOWING,
    followingStatus,
    userID
});
export default experimentalReducer;