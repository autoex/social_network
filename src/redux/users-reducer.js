import {usersAPI} from "../API/api";
import {updateObjInArray} from "../utils/object-helpers";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    fake: 1
};

const usersReducer = (state = initState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                // users: updateObjInArray(state.users, action.userID,  {followed: true})
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                //users:[...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };

        case SET_USERS:
            return {
                ...state, users: [...action.users]
            };

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage

            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsers

            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching


            };

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {

                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)


            };

        default :
            return state;

    }


};

export const followSuccess = (userID) => ({type: FOLLOW, userID});
export const unFollowSuccess = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsers) => ({type: SET_TOTAL_USERS_COUNT, totalUsers});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});


export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {

        dispatch(toggleIsFetching(true));
        const response = await usersAPI.getUsers(currentPage, pageSize);

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
        dispatch(setCurrentPage(currentPage));

    }
};


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {

    dispatch(toggleFollowingProgress(true, userId));
    const response = await apiMethod(userId);


    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));


};


export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);

    }
};

export const unFollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), unFollowSuccess);

    }
};

export default usersReducer;